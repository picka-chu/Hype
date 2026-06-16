export type ReceiptFacts = {
  senderName: string;
  receiverName: string;
  receiverAccount: string;
  amount: number;
  bankName: string;
  ftNumber: string;
  paidAt: string;
};

export type VerificationDecision = {
  status: 'verified' | 'fake' | 'false_amount' | 'needs_review';
  amount?: number;
  reasons: string[];
};

export function compareReceiptToTenantAccount(receipt: ReceiptFacts, tenantAccount: { holder: string; account: string }, expectedAmount?: number): VerificationDecision {
  const reasons: string[] = [];

  if (receipt.receiverName.toLowerCase() !== tenantAccount.holder.toLowerCase()) {
    reasons.push('Receiver name does not match the business account holder.');
  }

  if (!tenantAccount.account.endsWith(receipt.receiverAccount.slice(-4))) {
    reasons.push('Receiver account number does not match the selected business bank account.');
  }

  if (expectedAmount && receipt.amount < expectedAmount) {
    reasons.push('Transferred amount is lower than the expected sale amount.');
    return { status: 'false_amount', amount: receipt.amount, reasons };
  }

  return reasons.length === 0
    ? { status: 'verified', amount: receipt.amount, reasons: ['Receipt, dialog text, account, amount, and FT number matched.'] }
    : { status: 'needs_review', amount: receipt.amount, reasons };
}

export const requiredEnvironment = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'GEMINI_API_KEY',
];
