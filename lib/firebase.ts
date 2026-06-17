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
    'Enter the business phone number and password.',
    'Confirm the one-time code sent to the account phone.',
    'Open the workspace with the right business, branch, and role.',
    'Continue to the dashboard with recent activity and pending reviews.',
  ],
  createAccount: [
    'Add the owner profile and core business details.',
    'Confirm the business phone number with a one-time code.',
    'Create the workspace, default branch, and approved owner access.',
  ],
} as const;
