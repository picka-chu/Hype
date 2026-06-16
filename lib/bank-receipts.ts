export type SupportedBank = 'cbe' | 'dashen' | 'awash' | 'boa' | 'zemen' | 'telebirr';

export type ReceiptSource = {
  bank: SupportedBank;
  rawValue: string;
  receiptUrl?: string;
  transactionId?: string;
  retrievalMethod: 'direct_pdf' | 'html_receipt' | 'receipt_page' | 'telebirr_reference';
};

export type ReceiptFetchResult = ReceiptSource & {
  contentType: string;
  bytes: ArrayBuffer;
};

type BankPattern = {
  bank: SupportedBank;
  label: string;
  hosts: string[];
  transactionIdPattern: RegExp;
  retrievalMethod: ReceiptSource['retrievalMethod'];
  buildReceiptUrl: (rawValue: string, transactionId?: string) => string;
};

const bankPatterns: BankPattern[] = [
  {
    bank: 'cbe',
    label: 'Commercial Bank of Ethiopia',
    hosts: ['apps.cbe.com.et'],
    transactionIdPattern: /(?:id=)(FT[A-Z0-9*_-]+)/i,
    retrievalMethod: 'receipt_page',
    buildReceiptUrl: (rawValue) => rawValue,
  },
  {
    bank: 'dashen',
    label: 'Dashen Bank',
    hosts: ['receipt.dashensuperapp.com'],
    transactionIdPattern: /receipt\/([A-Z0-9*_-]+)/i,
    retrievalMethod: 'html_receipt',
    buildReceiptUrl: (rawValue) => rawValue,
  },
  {
    bank: 'awash',
    label: 'Awash Bank',
    hosts: ['awashpay.awashbank.com'],
    transactionIdPattern: /awashbank\.com(?::\d+)?\/(-?[A-Z0-9*_-]+)/i,
    retrievalMethod: 'html_receipt',
    buildReceiptUrl: (rawValue) => rawValue,
  },
  {
    bank: 'boa',
    label: 'Bank of Abyssinia',
    hosts: ['cs.bankofabyssinia.com'],
    transactionIdPattern: /(?:trx=)([A-Z0-9*_-]+)/i,
    retrievalMethod: 'receipt_page',
    buildReceiptUrl: (rawValue) => rawValue,
  },
  {
    bank: 'zemen',
    label: 'Zemen Bank',
    hosts: ['share.zemenbank.com'],
    transactionIdPattern: /\/rt\/([A-Z0-9*_-]+)\/pdf/i,
    retrievalMethod: 'direct_pdf',
    buildReceiptUrl: (rawValue, transactionId) => rawValue.endsWith('/pdf') ? rawValue : `https://share.zemenbank.com/rt/${transactionId}/pdf`,
  },
  {
    bank: 'telebirr',
    label: 'telebirr',
    hosts: [],
    transactionIdPattern: /^[A-Z0-9]{8,16}$/i,
    retrievalMethod: 'telebirr_reference',
    buildReceiptUrl: (_rawValue, transactionId) => `https://transactioninfo.ethiotelecom.et/receipt/${transactionId}`,
  },
];

export function identifyReceiptSource(rawInput: string): ReceiptSource | null {
  const rawValue = rawInput.trim();

  for (const pattern of bankPatterns) {
    const hostMatched = pattern.hosts.length === 0 || pattern.hosts.some((host) => rawValue.toLowerCase().includes(host));
    const transactionMatch = rawValue.match(pattern.transactionIdPattern);

    if (hostMatched && transactionMatch) {
      const transactionId = transactionMatch[1]?.replace(/\/+$/, '');
      return {
        bank: pattern.bank,
        rawValue,
        receiptUrl: pattern.buildReceiptUrl(rawValue, transactionId),
        transactionId,
        retrievalMethod: pattern.retrievalMethod,
      };
    }
  }

  return null;
}

export function identifyReceiptSourceFromText(extractedText: string): ReceiptSource | null {
  const urls = extractedText.match(/https?:\/\/[^\s)]+/gi) ?? [];

  for (const url of urls) {
    const source = identifyReceiptSource(url);
    if (source) return source;
  }

  const telebirrReference = extractedText.match(/\b[A-Z0-9]{8,16}\b/i)?.[0];
  return telebirrReference ? identifyReceiptSource(telebirrReference) : null;
}

export async function retrieveReceipt(source: ReceiptSource): Promise<ReceiptFetchResult> {
  if (!source.receiptUrl) {
    throw new Error(`No receipt URL is available for ${source.bank}.`);
  }

  const response = await fetch(source.receiptUrl, {
    headers: {
      accept: 'application/pdf,text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
      'user-agent': 'SurepayReceiptVerifier/0.1 (+https://surepay.example)',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`Receipt retrieval failed for ${source.bank}: ${response.status} ${response.statusText}`);
  }

  return {
    ...source,
    contentType: response.headers.get('content-type') ?? 'application/octet-stream',
    bytes: await response.arrayBuffer(),
  };
}

export function getSupportedBanks() {
  return bankPatterns.map(({ bank, label, hosts, retrievalMethod }) => ({ bank, label, hosts, retrievalMethod }));
}
