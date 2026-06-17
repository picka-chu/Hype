export const verificationSteps = [
  {
    title: 'Scan or capture proof',
    detail: 'Staff start with a QR scan or a clean image of the customer confirmation screen at the point of sale.',
  },
  {
    title: 'Read payment details',
    detail: 'SurePay identifies sender, receiver, amount, reference number, bank, and timestamp from the available proof.',
  },
  {
    title: 'Match business rules',
    detail: 'The payment is compared with approved business accounts, expected amount, and reference details before fulfillment.',
  },
  {
    title: 'Record the decision',
    detail: 'Every verified, flagged, or failed payment is saved with branch, staff member, amount, bank, and time for audit clarity.',
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
  { id: 'FT2438X7C1', amount: 'ETB 700', sender: 'Samrawit G.', bank: 'Awash', time: 'Yesterday', status: 'Needs review' },
];

export const productPlan = [
  'Create the business profile, invite staff, and connect approved receiving accounts.',
  'Give staff a focused payment check flow with scan, review, and clear decision states.',
  'Track verification history, branch performance, risk events, and exportable audit records.',
  'Add alerts, recovery workflows, and reporting tools as payment volume grows.',
];
