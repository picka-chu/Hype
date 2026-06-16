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

## App routes

- `/` — marketing landing page with product plan and mobile staff preview.
- `/onboarding` — tenant setup walkthrough.
- `/create-account` — owner signup concept.
- `/login` — staff credential login concept.
- `/dashboard` — owner/staff verification history and bank-account overview.
- `/verify` — QR verification and result concept, including false-amount action.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
