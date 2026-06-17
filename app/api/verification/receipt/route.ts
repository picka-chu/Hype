import { NextResponse } from 'next/server';
import { extractDialogTextWithGemini } from '@/lib/gemini-receipt-vision';
import { identifyReceiptSource, identifyReceiptSourceFromText, retrieveReceipt } from '@/lib/bank-receipts';

type VerificationReceiptRequest = {
  qrValue?: string;
  dialogImageBase64?: string;
  dialogImageMimeType?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as VerificationReceiptRequest;

    const qrSource = body.qrValue ? identifyReceiptSource(body.qrValue) : null;
    const dialogExtraction = !qrSource && body.dialogImageBase64
      ? await extractDialogTextWithGemini(body.dialogImageBase64, body.dialogImageMimeType)
      : null;
    const dialogSource = dialogExtraction ? identifyReceiptSourceFromText(dialogExtraction.text) : null;
    const source = qrSource ?? dialogSource;

    if (!source) {
      return NextResponse.json(
        {
          status: 'needs_review',
          message: 'Surepay could not identify a supported Ethiopian bank receipt source from the QR value or dialog image.',
          dialogExtraction,
        },
        { status: 422 },
      );
    }

    const receipt = await retrieveReceipt(source);

    return NextResponse.json({
      status: 'receipt_retrieved',
      source: {
        bank: receipt.bank,
        receiptUrl: receipt.receiptUrl,
        transactionId: receipt.transactionId,
        retrievalMethod: receipt.retrievalMethod,
        contentType: receipt.contentType,
        byteLength: receipt.bytes.byteLength,
      },
      dialogExtraction,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown receipt verification error.';
    return NextResponse.json({ status: 'error', message }, { status: 500 });
  }
}
