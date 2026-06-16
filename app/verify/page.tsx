import Link from 'next/link';

const checks = ['Receipt QR link opened', 'Gemini extracted receipt facts', 'Receiver account matched tenant bank', 'Amount and FT number matched dialog text'];

export default function VerifyPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--background)] px-5 py-8">
      <section className="w-full max-w-md rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Payment verification</p>
        <div className="mt-6 grid aspect-square place-items-center rounded-[2rem] border border-dashed border-[var(--primary)] bg-white text-center">
          <div><p className="text-5xl">▦</p><p className="mt-3 font-black">Scan customer QR</p><p className="mt-1 text-sm text-[var(--muted)]">Camera scanner integration goes here.</p></div>
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] p-5">
          <h1 className="text-2xl font-black tracking-tight">Transfer verified · ETB 4,850</h1>
          <div className="mt-4 space-y-3">
            {checks.map((check) => <p key={check} className="text-sm font-bold text-[var(--muted)]">✓ {check}</p>)}
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link href="/dashboard" className="rounded-full bg-[var(--primary)] px-5 py-4 text-center font-black text-[var(--primary-foreground)]">Done</Link>
          <button className="rounded-full border border-[var(--line)] px-5 py-4 font-black">False amount</button>
        </div>
      </section>
    </main>
  );
}
