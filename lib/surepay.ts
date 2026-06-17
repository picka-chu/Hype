export const verificationSteps = [
  {
    title: 'Scan the receipt QR',
    detail: 'Staff scan the QR from the customer success screen to fetch the bank receipt PDF from the official receipt link.',
  },
  {
    title: 'Extract receipt facts',
    detail: 'Gemini reads sender name, receiver name, amount, FT/reference number, account number, bank, and timestamp.',
  },
  {
    title: 'Match business rules',
    detail: 'Surepay compares receipt data against the customer screen text and the tenant\'s approved bank accounts.',
  },
  {
    title: 'Record the decision',
    detail: 'Verified transfers are stored with date, amount, sender bank, receiver bank, account, staff member, and branch.',
  },
];

export const bankAccounts = [
  { bank: 'Commercial Bank of Ethiopia', account: '1000••••4821', holder: 'Bereket Coffee PLC', status: 'Active' },
  { bank: 'Dashen Bank', account: '0764••••1188', holder: 'Bereket Coffee PLC', status: 'Active' },
  { bank: 'Awash Bank', account: '0135••••6904', holder: 'Bereket Coffee PLC', status: 'Review' },
];

export const activity = [
  { id: 'FT2439P9G8', amount: 'ETB 4,850', sender: 'Mikiyas Alemu', bank: 'CBE', time: '09:42', status: 'Verified' },
  { id: 'FT2439P4B2', amount: 'ETB 1,200', sender: 'Hana Teferi', bank: 'Dashen', time: '09:18', status: 'Verified' },
  { id: 'FT2438X7C1', amount: 'ETB 700', sender: 'Samrawit G.', bank: 'Awash', time: 'Yesterday', status: 'False amount' },
];

export const productPlan = [
  'Phase 1: Build tenant signup, Firebase phone OTP login, dashboard shell, and mobile verification UI.',
  'Phase 2: Add Firebase tenants, staff roles, business bank accounts, verification history, and branch reporting.',
  'Phase 3: Implement QR scanning, receipt PDF download, Gemini extraction, and deterministic matching rules.',
  'Phase 4: Add audit trails, false-amount recovery flow, exports, alerts, and production monitoring.',
];
