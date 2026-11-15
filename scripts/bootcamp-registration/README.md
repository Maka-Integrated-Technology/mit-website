# Maka Tech bootcamp registration → Google Sheets

This Apps Script receives the registration form's URL-encoded POST and appends
one application per row. It runs in Google's Apps Script service; the website
does not need a separately hosted API server.

## Connect the response spreadsheet

1. Open the Maka Tech Bootcamp Participant sheet shared for this project. Keep
   it private to the Maka Tech staff who will review applications.
2. In the sheet, open **Extensions → Apps Script**.
3. Replace the starter code with the contents of `Code.gs` and save the project.
4. Choose **Deploy → New deployment → Web app**. Set **Execute as** to your
   account and grant access to **Anyone** so applicants can submit without a
   Google login. Review the access policy for your Workspace before deploying.
5. Deploy, authorize the script, and copy the web app URL ending in `/exec`.
   The script needs permission to send mail through `MailApp`; approve that
   permission when Google prompts during deployment or the first payment notice.
6. Add the URL to the website's deployment environment as
   `VITE_BOOTCAMP_REGISTRATION_URL`, then rebuild and publish the website.

The script writes to the `Applications` tab of the supplied spreadsheet. It
creates the header row on the first valid submission only if that tab is empty.
The first 14 columns are fixed. The script adds two more header cells, **Application ID**
and **Payment reported at**, to the end of an existing header row if they are missing,
so sheets from earlier versions upgrade themselves. Do not rename, reorder or
delete the first 14 columns: the script refuses to write if they change.
Do not publish or share the response sheet with applicants.

## Form behavior

The site submits as `application/x-www-form-urlencoded` using `no-cors`, which
lets the browser send requests to Google's cross-origin web app without
exposing spreadsheet credentials in client code. After registration is saved,
the applicant sees the ₦70,000 tuition instructions for UBA account 1031747948
(Maka Integrated Technology Limited). Selecting **I have paid** sends a second
request to Apps Script, which emails the submission details to
`makatechlimited@gmail.com` for manual transfer verification.

Because the browser cannot read the cross-origin response in `no-cors` mode,
the website can confirm that the request was dispatched, but cannot confirm
that Google Sheets saved the row or that Google sent the email. Check both the
Applications sheet and the admin inbox after deployment.

The script validates every field on both requests (required fields, the track
and the other dropdown options, email format, and length limits), rejects a
hidden honeypot field (`hp_field`), and protects text values from being
interpreted as spreadsheet formulas. The option lists in `Code.gs` must be kept
in sync with `application-form.tsx`.

Each application carries a browser-generated **Application ID**. A repeated
registration with the same ID is ignored, so retries never create duplicates.
The payment notice finds the row by ID and fills **Payment reported at**; the
admin email is sent only once per application. If the registration never
reached the sheet, the payment notice creates the row so the applicant is not
lost. Phone numbers are stored as text so a leading zero is kept.

The browser cannot see failures, so the script emails the admin in two cases:

- It throws (for example a header mismatch or a lock timeout): the subject is
  "Bootcamp form error — action needed" and the applicant's details are included.
- It rejects a submission as invalid: the subject is "Bootcamp form rejected a
  submission". This means the form and `Code.gs` disagree about what is valid,
  or someone is posting junk. At most one of these is sent per hour; every
  rejection is also logged under **Executions** in Apps Script.

Google limits how many emails a script can send per day. When the quota is
nearly used up, alerts are skipped and a payment notice is recorded in the sheet
as `Email pending — <time>` instead of being emailed. The applicant's retry, or
running `sendPendingPaymentEmails` (by hand, or from a daily time-driven trigger
under **Triggers**), sends those emails once the quota has reset.

The payment notice is an applicant's self-report only; an admin must verify the
transfer before confirming registration.
