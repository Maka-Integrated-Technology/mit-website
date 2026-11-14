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

The script validates required fields and track names, rejects a basic hidden
honeypot field, and protects text values from being interpreted as spreadsheet
formulas. The payment notice is an applicant's self-report only; an admin must
verify the transfer before confirming registration.
