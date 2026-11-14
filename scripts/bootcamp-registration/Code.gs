const TRACKS = [
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "Product Design",
  "Data Analytics",
  "Cybersecurity",
  "Artificial Intelligence",
  "Software Testing / QA",
  "Project Management",
  "Business Analysis",
  "Virtual Assistance",
  "Digital Marketing",
  "Technology Entrepreneurship",
  "Video Editing & Content Production",
  "Social Media Management",
];

const HEADERS = [
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

const SPREADSHEET_ID = "1Bs96kxMjeZ1j05RF4zkyCW1kvnlcVNsg4ZNg7QMyMm4";

function doPost(event) {
  try {
    const parameters = event && event.parameter ? event.parameter : {};

    if (parameters.action === "payment_confirmation") {
      return sendPaymentConfirmation_(parameters);
    }

    // The form includes a hidden field to catch basic automated submissions.
    if (parameters.website) return response_("ok");

    const applicant = {
      fullName: clean_(parameters.fullName),
      email: clean_(parameters.email).toLowerCase(),
      phone: clean_(parameters.phone),
      location: clean_(parameters.location),
      track: clean_(parameters.track),
      currentStatus: clean_(parameters.currentStatus),
      experience: clean_(parameters.experience),
      motivation: clean_(parameters.motivation),
      goal: clean_(parameters.goal),
      availability: clean_(parameters.availability),
      equipment: clean_(parameters.equipment),
      tuitionAcknowledged: parameters.tuitionAcknowledged === "Yes",
      dataConsent: parameters.dataConsent === "Yes",
    };

    if (
      !applicant.fullName ||
      !applicant.email ||
      !applicant.phone ||
      !applicant.location ||
      !applicant.track ||
      !applicant.currentStatus ||
      !applicant.motivation ||
      !applicant.goal ||
      !applicant.availability ||
      !applicant.equipment ||
      !applicant.tuitionAcknowledged ||
      !applicant.dataConsent
    ) {
      return response_("missing_required_fields");
    }

    if (!TRACKS.includes(applicant.track)) return response_("invalid_track");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicant.email)) {
      return response_("invalid_email");
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sheet = spreadsheet.getSheetByName("Applications");
      if (!sheet) throw new Error('Missing "Applications" tab');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
      } else {
        const existingHeaders = sheet
          .getRange(1, 1, 1, HEADERS.length)
          .getDisplayValues()[0];
        if (JSON.stringify(existingHeaders) !== JSON.stringify(HEADERS)) {
          throw new Error(
            "Applications header row does not match the form schema"
          );
        }
      }

      sheet.appendRow([
        new Date().toISOString(),
        safeCell_(applicant.fullName),
        safeCell_(applicant.email),
        safeCell_(applicant.phone),
        safeCell_(applicant.location),
        applicant.track,
        safeCell_(applicant.currentStatus),
        safeCell_(applicant.experience),
        safeCell_(applicant.motivation),
        safeCell_(applicant.goal),
        safeCell_(applicant.availability),
        safeCell_(applicant.equipment),
        "Yes",
        "Yes",
      ]);
    } finally {
      lock.releaseLock();
    }

    return response_("ok");
  } catch (error) {
    console.error(error);
    return response_("error");
  }
}

function sendPaymentConfirmation_(parameters) {
  const applicant = {
    fullName: clean_(parameters.fullName),
    email: clean_(parameters.email).toLowerCase(),
    phone: clean_(parameters.phone),
    location: clean_(parameters.location),
    track: clean_(parameters.track),
    currentStatus: clean_(parameters.currentStatus),
    experience: clean_(parameters.experience),
    motivation: clean_(parameters.motivation),
    goal: clean_(parameters.goal),
    availability: clean_(parameters.availability),
    equipment: clean_(parameters.equipment),
    tuitionAcknowledged: parameters.tuitionAcknowledged === "Yes",
    dataConsent: parameters.dataConsent === "Yes",
  };

  if (
    !applicant.fullName ||
    !applicant.email ||
    !applicant.phone ||
    !applicant.location ||
    !applicant.track ||
    !applicant.motivation ||
    !applicant.goal
  ) {
    return response_("missing_required_fields");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicant.email)) {
    return response_("invalid_email");
  }

  const details = [
    "An applicant has reported paying the Maka Tech Bootcamp tuition.",
    "Please verify the transfer before confirming the registration.",
    "",
    "Payment: ₦70,000 to UBA, account 1031747948",
    "Account name: Maka Integrated Technology Limited",
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
    "Tuition acknowledged: " + (applicant.tuitionAcknowledged ? "Yes" : "No"),
    "Application data consent: " + (applicant.dataConsent ? "Yes" : "No"),
    "",
    "Payment notice received: " + new Date().toISOString(),
  ].join("\n");

  MailApp.sendEmail({
    to: "makatechlimited@gmail.com",
    subject: "Bootcamp payment confirmation requested — " + applicant.fullName,
    body: details,
    replyTo: applicant.email,
  });

  return response_("ok");
}

function clean_(value) {
  return String(value || "")
    .trim()
    .slice(0, 5000);
}

function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function response_(message) {
  return ContentService.createTextOutput(message).setMimeType(
    ContentService.MimeType.TEXT
  );
}
