export const firebaseClientConfigKeys = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

export const firebaseCollections = {
  tenants: 'tenants',
  users: 'users',
  bankAccounts: 'bankAccounts',
  verifications: 'verifications',
  auditLogs: 'auditLogs',
} as const;

export const authFlow = {
  login: [
    'Staff or owner enters phone number and password.',
    'Server verifies the password against the Firebase user profile credential record.',
    'Firebase Auth sends a phone OTP challenge.',
    'User enters OTP and Surepay opens the business dashboard.',
  ],
  createAccount: [
    'Owner enters full name, business name, business address, phone number, password, and confirm password.',
    'Surepay validates password confirmation and sends Firebase phone OTP.',
    'After OTP verification, Surepay creates the tenant, owner profile, default branch, and business dashboard access.',
  ],
} as const;
