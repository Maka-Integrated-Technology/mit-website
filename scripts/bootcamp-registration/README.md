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
6. Add the URL to the website's deployment environment as
   `VITE_BOOTCAMP_REGISTRATION_URL`, then rebuild and publish the website.

The script writes to the `Applications` tab of the supplied spreadsheet. It
creates the header row on the first valid submission only if that tab is empty.
Do not publish or share the response sheet with applicants.

## Form behavior

The site submits as `application/x-www-form-urlencoded` using `no-cors`, which
lets the browser send the request to Google's cross-origin web app without
exposing spreadsheet credentials in client code. Because the browser cannot
read the cross-origin response in this mode, the confirmation means the
request was dispatched; periodically check the Sheet after deployment and
before announcing the form as open.

The script validates required fields and track names, rejects a basic hidden
honeypot field, and protects text values from being interpreted as spreadsheet
formulas. It does not collect payment details. Payment instructions should be
sent after applications are reviewed.
