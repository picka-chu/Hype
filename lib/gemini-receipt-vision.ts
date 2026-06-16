export type ExtractedDialogText = {
  text: string;
  confidence: 'low' | 'medium' | 'high';
  possibleReceiptValues: string[];
};

const extractionPrompt = `You are Surepay's Ethiopian bank transfer verification assistant.
Extract all visible text from the payment success dialog screenshot.
Return JSON only with keys: text, confidence, possibleReceiptValues.
possibleReceiptValues must include any QR URL, receipt URL, transaction reference, FT number, account number, sender name, receiver name, amount, and bank name you can see.`;

export async function extractDialogTextWithGemini(imageBase64: string, mimeType = 'image/jpeg'): Promise<ExtractedDialogText> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is required to extract text from a transfer dialog image.');
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [
            { text: extractionPrompt },
            { inlineData: { mimeType, data: stripDataUriPrefix(imageBase64) } },
          ],
        },
      ],
      generationConfig: { responseMimeType: 'application/json' },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini dialog extraction failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('Gemini did not return extractable dialog text.');
  }

  return JSON.parse(text) as ExtractedDialogText;
}

function stripDataUriPrefix(value: string) {
  return value.replace(/^data:image\/[a-zA-Z0-9.+-]+;base64,/, '');
}
