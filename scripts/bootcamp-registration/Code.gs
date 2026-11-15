const TRACKS = [
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "DevOps",
  "Product Design",
  "Graphic Design",
  "Data Analysis",
  "QA / Software Testing",
  "Cybersecurity",
  "Product Management",
  "Sales & Marketing",
  "Virtual Assistant",
  "Video Editing",
];

// Keep these option lists in sync with the form in
// app/routes/bootcamp/_sections/application-form.tsx.
const CURRENT_STATUSES = [
  "Student",
  "Graduate",
  "Employed",
  "Career changer",
  "Other",
];
const EXPERIENCE_LEVELS = [
  "New to this",
  "Some self-study or practice",
  "Have completed projects",
  "Already working in this area",
];
const AVAILABILITY_OPTIONS = [
  "Yes, I can commit to the full 3 months",
  "I may need to discuss my availability",
];
const EQUIPMENT_OPTIONS = [
  "Yes",
  "Internet access, but I need laptop support",
  "Laptop access, but I need internet support",
  "I need support with both",
];

// The first columns are fixed. "Application ID" and "Payment reported at" are
// located by header name and added to the end of the header row if missing, so
// sheets created by earlier versions of this script keep working.
const CORE_HEADERS = [
  "Submitted at",
  "Full name",
  "Email",
  "Phone / WhatsApp",
  "City and country",
  "Track",
  "Current status",
  "Experience",
  "Motivation",
  "Goal",
  "Availability",
  "Laptop and internet access",
  "Tuition acknowledged",
  "Application data consent",
];
const ID_HEADER = "Application ID";
const PAID_HEADER = "Payment reported at";

const SPREADSHEET_ID = "1Bs96kxMjeZ1j05RF4zkyCW1kvnlcVNsg4ZNg7QMyMm4";
const SHEET_NAME = "Applications";
const ADMIN_EMAIL = "makatechlimited@gmail.com";

// Email is sent through Resend (https://resend.com). The API key is a secret, so
// it is read from Script Properties (Project Settings → Script properties) and
// must never be written in this file. Properties used:
//   RESEND_API_KEY  required  the Resend API key (starts with "re_")
//   RESEND_FROM     optional  sender, e.g. "Maka Tech <bootcamp@yourdomain.com>";
//                             needs a domain verified in Resend
const RESEND_ENDPOINT = "https://api.resend.com/emails";
// Must be an address on a domain verified in Resend (contact.ohealthltd.com is
// verified on this Resend account). Override with the RESEND_FROM property.
const DEFAULT_FROM = "Maka Tech Bootcamp <bootcamp@contact.ohealthltd.com>";

// Written to "Payment reported at" when a payment was reported but the admin
// email could not be sent (Resend down, key missing, rate limit, and so on). A
// retry, or sendPendingPaymentEmails(), sends it later.
const EMAIL_PENDING = "Email pending — ";

// At most one "submission rejected" alert per hour, so junk requests cannot
// trigger a flood of emails.
const REJECTION_ALERT_SECONDS = 3600;

function doPost(event) {
  const parameters = event && event.parameter ? event.parameter : {};

  try {
    // Hidden field that real visitors never fill in. Applies to every action.
    if (parameters.hp_field) return response_("ok");

    const parsed = parseApplicant_(parameters);
    if (parsed.error) {
      // The website cannot see this response, so make the rejection visible.
      reportRejection_(parsed.error, parameters);
      return response_(parsed.error);
    }

    if (parameters.action === "payment_confirmation") {
      return handlePaymentConfirmation_(parsed.applicant);
    }
    return handleRegistration_(parsed.applicant);
  } catch (error) {
    console.error(error);
    notifyFailure_(error, parameters);
    return response_("error");
  }
}

function parseApplicant_(parameters) {
  const applicant = {
    applicationId: clean_(parameters.applicationId, 64),
    fullName: singleLine_(parameters.fullName, 200),
    email: singleLine_(parameters.email, 254).toLowerCase(),
    phone: singleLine_(parameters.phone, 50),
    location: singleLine_(parameters.location, 200),
    track: clean_(parameters.track, 100),
    currentStatus: clean_(parameters.currentStatus, 100),
    experience: clean_(parameters.experience, 100),
    motivation: clean_(parameters.motivation, 1000),
    goal: clean_(parameters.goal, 1000),
    availability: clean_(parameters.availability, 100),
    equipment: clean_(parameters.equipment, 100),
    tuitionAcknowledged: parameters.tuitionAcknowledged === "Yes",
    dataConsent: parameters.dataConsent === "Yes",
  };

  if (!/^[A-Za-z0-9-]{8,64}$/.test(applicant.applicationId)) {
    return { error: "invalid_application_id" };
  }

  if (
    !applicant.fullName ||
    !applicant.email ||
    !applicant.phone ||
    !applicant.location ||
    !applicant.track ||
    !applicant.currentStatus ||
    !applicant.experience ||
    !applicant.motivation ||
    !applicant.goal ||
    !applicant.availability ||
    !applicant.equipment ||
    !applicant.tuitionAcknowledged ||
    !applicant.dataConsent
  ) {
    return { error: "missing_required_fields" };
  }

  if (!TRACKS.includes(applicant.track)) return { error: "invalid_track" };
  if (
    !CURRENT_STATUSES.includes(applicant.currentStatus) ||
    !EXPERIENCE_LEVELS.includes(applicant.experience) ||
    !AVAILABILITY_OPTIONS.includes(applicant.availability) ||
    !EQUIPMENT_OPTIONS.includes(applicant.equipment)
  ) {
    return { error: "invalid_option" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicant.email)) {
    return { error: "invalid_email" };
  }

  return { applicant: applicant };
}

function handleRegistration_(applicant) {
  return withApplicationsSheet_(function (sheet, columns) {
    // The site retries with the same ID, so a repeat is not a new application.
    if (findRowById_(sheet, columns, applicant.applicationId)) {
      return response_("ok");
    }
    appendApplicant_(sheet, columns, applicant);
    return response_("ok");
  });
}

function handlePaymentConfirmation_(applicant) {
  return withApplicationsSheet_(function (sheet, columns) {
    let row = findRowById_(sheet, columns, applicant.applicationId);
    let rowNote = "Sheet row " + row + " matched this application ID.";

    if (!row) {
      // The registration request never reached the sheet, so recover it here.
      row = appendApplicant_(sheet, columns, applicant);
      rowNote =
        "No sheet row matched this application ID, so row " +
        row +
        " was created from this payment notice.";
    }

    const paidCell = sheet.getRange(row, columns.paid);
    const existing = String(paidCell.getValue() || "");
    // Already reported and emailed. A pending marker means the email still
    // needs sending, so a retry is allowed through.
    if (existing && existing.indexOf(EMAIL_PENDING) !== 0) {
      return response_("ok");
    }

    const reportedAt = new Date().toISOString();
    const sent = sendPaymentEmail_(applicant, rowNote, reportedAt);
    // If the email failed, mark the row so the payment is still visible in the
    // sheet and can be emailed later without being lost.
    paidCell.setValue(sent ? reportedAt : EMAIL_PENDING + reportedAt);

    return response_("ok");
  });
}

// Emails the admin for every row marked "Email pending". Run it by hand, or
// add a time-driven trigger, once email sending works again. It stops at the
// first failure.
function sendPendingPaymentEmails() {
  return withApplicationsSheet_(function (sheet, columns) {
    const lastRow = sheet.getLastRow();
    let sent = 0;

    for (let row = 2; row <= lastRow; row++) {
      const paidCell = sheet.getRange(row, columns.paid);
      const value = String(paidCell.getValue() || "");
      if (value.indexOf(EMAIL_PENDING) !== 0) continue;

      const v = sheet.getRange(row, 1, 1, CORE_HEADERS.length).getValues()[0];
      const reportedAt = value.slice(EMAIL_PENDING.length);
      const delivered = sendPaymentEmail_(
        {
          applicationId: String(sheet.getRange(row, columns.id).getValue()),
          fullName: String(v[1]),
          email: String(v[2]),
          phone: String(v[3]),
          location: String(v[4]),
          track: String(v[5]),
          currentStatus: String(v[6]),
          experience: String(v[7]),
          motivation: String(v[8]),
          goal: String(v[9]),
          availability: String(v[10]),
          equipment: String(v[11]),
        },
        "Sent later from sheet row " + row + " (it could not be sent earlier).",
        reportedAt
      );
      if (!delivered) break;
      paidCell.setValue(reportedAt);
      sent++;
    }
    return sent;
  });
}

// Returns true when Resend accepted the email.
function sendPaymentEmail_(applicant, rowNote, reportedAt) {
  return sendEmail_({
    subject: "Bootcamp payment confirmation requested — " + applicant.fullName,
    text: paymentEmailBody_(applicant, rowNote, reportedAt),
    replyTo: applicant.email,
  }).ok;
}

// Sends one email to ADMIN_EMAIL through Resend. Never throws: it returns
// { ok, status, detail } so callers decide what a failure means. Secrets are
// never logged.
function sendEmail_(message) {
  try {
    const properties = PropertiesService.getScriptProperties();
    const apiKey = properties.getProperty("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY script property is not set");
      return { ok: false, status: 0, detail: "RESEND_API_KEY is not set" };
    }

    const body = {
      from: properties.getProperty("RESEND_FROM") || DEFAULT_FROM,
      to: [ADMIN_EMAIL],
      subject: message.subject,
      text: message.text,
    };
    if (message.replyTo) body.reply_to = message.replyTo;

    const response = UrlFetchApp.fetch(RESEND_ENDPOINT, {
      method: "post",
      contentType: "application/json",
      headers: { Authorization: "Bearer " + apiKey },
      payload: JSON.stringify(body),
      muteHttpExceptions: true,
    });

    const status = response.getResponseCode();
    if (status >= 200 && status < 300) {
      return { ok: true, status: status, detail: "" };
    }
    const detail = String(response.getContentText()).slice(0, 300);
    console.error("Resend rejected the email (" + status + "): " + detail);
    return { ok: false, status: status, detail: detail };
  } catch (error) {
    console.error(error);
    return { ok: false, status: 0, detail: String(error) };
  }
}

// Run this from the Apps Script editor to check the Resend setup. It sends a
// test email to ADMIN_EMAIL and logs the outcome. The first run also asks you
// to approve the "connect to an external service" permission.
function sendTestEmail() {
  const result = sendEmail_({
    subject: "Bootcamp form: Resend test",
    text: "If you can read this, the bootcamp form can send email through Resend.",
  });
  console.log(JSON.stringify(result));
  return result;
}

function paymentEmailBody_(applicant, rowNote, reportedAt) {
  return [
    "An applicant has reported paying the Maka Tech Bootcamp tuition.",
    "Please verify the transfer before confirming the registration.",
    "",
    "Payment: ₦70,000 to UBA, account 1031747948",
    "Account name: Maka Integrated Technology Limited",
    "",
    "Application ID: " + applicant.applicationId,
    rowNote,
    "",
    "Applicant submission:",
    "Full name: " + applicant.fullName,
    "Email: " + applicant.email,
    "Phone / WhatsApp: " + applicant.phone,
    "City and country: " + applicant.location,
    "Track: " + applicant.track,
    "Current status: " + applicant.currentStatus,
    "Experience: " + applicant.experience,
    "Motivation: " + applicant.motivation,
    "Goal: " + applicant.goal,
    "Availability: " + applicant.availability,
    "Laptop and internet access: " + applicant.equipment,
    "",
    "Payment notice received: " + reportedAt,
  ].join("\n");
}

function withApplicationsSheet_(callback) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet =
      SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Missing "' + SHEET_NAME + '" tab');
    return callback(sheet, ensureHeaders_(sheet));
  } finally {
    lock.releaseLock();
  }
}

// Returns the 1-based columns of the application ID and payment timestamp.
function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CORE_HEADERS.concat([ID_HEADER, PAID_HEADER]));
    sheet.setFrozenRows(1);
    return { id: CORE_HEADERS.length + 1, paid: CORE_HEADERS.length + 2 };
  }

  const width = Math.max(sheet.getLastColumn(), CORE_HEADERS.length);
  const header = sheet.getRange(1, 1, 1, width).getDisplayValues()[0];

  for (let i = 0; i < CORE_HEADERS.length; i++) {
    if (header[i] !== CORE_HEADERS[i]) {
      throw new Error("Applications header row does not match the form schema");
    }
  }

  let lastUsed = header.length;
  while (lastUsed > 0 && header[lastUsed - 1] === "") lastUsed--;

  function columnFor(name) {
    const index = header.indexOf(name);
    if (index !== -1) return index + 1;
    lastUsed++;
    sheet.getRange(1, lastUsed).setValue(name);
    return lastUsed;
  }

  return { id: columnFor(ID_HEADER), paid: columnFor(PAID_HEADER) };
}

function findRowById_(sheet, columns, applicationId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;
  const ids = sheet.getRange(2, columns.id, lastRow - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) {
    if (String(ids[i][0]) === applicationId) return i + 2;
  }
  return 0;
}

function appendApplicant_(sheet, columns, applicant) {
  sheet.appendRow([
    new Date().toISOString(),
    safeCell_(applicant.fullName),
    safeCell_(applicant.email),
    textCell_(applicant.phone),
    safeCell_(applicant.location),
    applicant.track,
    applicant.currentStatus,
    applicant.experience,
    safeCell_(applicant.motivation),
    safeCell_(applicant.goal),
    applicant.availability,
    applicant.equipment,
    "Yes",
    "Yes",
  ]);
  const row = sheet.getLastRow();
  sheet.getRange(row, columns.id).setValue(textCell_(applicant.applicationId));
  return row;
}

// Logs every rejected submission and emails the admin about it, at most once
// per hour. A rejection of a real applicant means the form and this script
// disagree about what is valid.
function reportRejection_(code, parameters) {
  try {
    console.error("Rejected submission: " + code);
    const cache = CacheService.getScriptCache();
    if (cache.get("rejection_alert")) return;
    cache.put("rejection_alert", "1", REJECTION_ALERT_SECONDS);
    sendEmail_({
      subject: "Bootcamp form rejected a submission",
      text: [
        "The registration script rejected a submission: " + code,
        "",
        "Action: " + clean_(parameters.action, 40),
        "Application ID: " + clean_(parameters.applicationId, 64),
        "Name: " + singleLine_(parameters.fullName, 200),
        "Email: " + singleLine_(parameters.email, 254),
        "Phone: " + singleLine_(parameters.phone, 50),
        "Track: " + clean_(parameters.track, 100),
        "",
        "If this was a real applicant, the form and Code.gs disagree about what is",
        "valid, and they need to be contacted. Further rejections in the next hour",
        "are logged in Apps Script executions but not emailed.",
      ].join("\n"),
    });
  } catch (error) {
    console.error(error);
  }
}

// The website cannot read this script's responses, so a failed save would
// otherwise go unnoticed. Email the admin the submission so it is not lost.
function notifyFailure_(error, parameters) {
  try {
    sendEmail_({
      subject: "Bootcamp form error — action needed",
      text: [
        "The bootcamp registration script failed: " + String(error),
        "",
        "Action: " + clean_(parameters.action, 40),
        "Application ID: " + clean_(parameters.applicationId, 64),
        "Name: " + singleLine_(parameters.fullName, 200),
        "Email: " + singleLine_(parameters.email, 254),
        "Phone: " + singleLine_(parameters.phone, 50),
        "Track: " + clean_(parameters.track, 100),
        "",
        "Please check the Applications sheet and add this applicant manually if",
        "they are missing.",
      ].join("\n"),
    });
  } catch (mailError) {
    console.error(mailError);
  }
}

function clean_(value, maxLength) {
  return String(value || "")
    .trim()
    .slice(0, maxLength);
}

// For single-line fields: removes line breaks so values cannot add email
// headers or extra lines.
function singleLine_(value, maxLength) {
  return clean_(String(value || "").replace(/[\r\n\t]+/g, " "), maxLength);
}

// Stops text from being interpreted as a spreadsheet formula.
function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

// Forces text so numeric-looking values such as 08031234567 keep their zero.
function textCell_(value) {
  return `'${value}`;
}

function response_(message) {
  return ContentService.createTextOutput(message).setMimeType(
    ContentService.MimeType.TEXT
  );
}
