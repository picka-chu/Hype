# Surepay

Surepay is a PWA SaaS concept for Ethiopian businesses that need to verify whether bank-transfer payments are real before staff release products or services.

## Problem

Many businesses receive successful transfer SMS messages on the owner account, while frontline staff only see the customer's success dialog. Those dialogs and screenshots can be edited, so staff need a trusted verification workflow.

## Planned stack

- Next.js App Router for the web app and PWA shell.
- Tailwind CSS for a minimal premium interface with rounded cards and buttons.
- Supabase for tenants, staff users, bank accounts, verification history, and audit logs.
- Gemini API for extracting structured facts from bank receipt PDFs.

## Core workflow

1. Business owners create an account and add verified bank accounts, account holder names, branches, and staff credentials.
2. Staff log in to a mobile-first dashboard and tap **Verify payment**.
3. The scanner reads the QR code from the customer's bank success screen.
4. The backend downloads the official receipt PDF, Gemini extracts receipt details, and Surepay compares sender name, receiver name, amount, account number, and FT/reference number.
5. Staff see a clear verified, fake, or false-amount result and confirmed transfers are stored for owner reporting.

## App routes to check locally

- `/` — marketing landing page with product plan and mobile staff preview.
- `/onboarding` — tenant setup walkthrough.
- `/create-account` — owner signup concept.
- `/login` — staff credential login concept.
- `/dashboard` — owner/staff verification history and bank-account overview.
- `/verify` — QR verification and result concept, including false-amount action.

## How to check it locally

### 1. Install Node.js

Use Node.js 20 or newer. To confirm your version:

```bash
node -v
npm -v
```

### 2. Install dependencies

From the project root, run:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Next.js should print a local URL, usually:

```text
http://localhost:3000
```

Open that URL in your browser.

### 4. Test the main pages

Visit these pages manually:

```text
http://localhost:3000/
http://localhost:3000/onboarding
http://localhost:3000/create-account
http://localhost:3000/login
http://localhost:3000/dashboard
http://localhost:3000/verify
```

### 5. Check the mobile staff experience

Open browser developer tools, switch to a mobile viewport such as iPhone or Pixel, and confirm:

- The landing page shows the staff phone preview.
- The dashboard is readable on mobile.
- The `/verify` page shows the QR scan placeholder, verified result, **Done**, and **False amount** buttons.

### 6. Build before deploying

```bash
npm run build
```

If the build succeeds, you can run the production server with:

```bash
npm run start
```


## Vercel deployment

This project targets Node.js 24 on Vercel. If Vercel reports an invalid or discontinued Node.js version such as `18.x`, update the project runtime before redeploying:

1. Open the Vercel project dashboard.
2. Go to **Settings → General → Node.js Version**.
3. Select **24.x**.
4. Redeploy the latest commit.

The repository also declares the Node.js runtime in `package.json` so Vercel can pick up the expected version during deployment.

## Notes

- The current app is a frontend prototype. Supabase, QR scanning, PDF download, and Gemini extraction are represented by data structures and placeholders.
- No API keys are required to preview the current UI locally.
