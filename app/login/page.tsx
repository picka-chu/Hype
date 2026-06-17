import Link from 'next/link';
import { authFlow } from '@/lib/firebase';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 py-8">
      <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--primary)] p-7 text-[var(--primary-foreground)]">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d8b15f]">Firebase login</p>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.05em]">Password first, then phone OTP.</h1>
          <p className="mt-5 leading-7 text-[#dce8e3]">Surepay checks the account password first. If it is correct, Firebase Auth sends an OTP to the phone number before opening the business dashboard.</p>
          <div className="mt-7 space-y-3">
            {authFlow.login.map((step, index) => (
              <p key={step} className="rounded-2xl border border-white/15 p-4 text-sm text-[#dce8e3]"><b className="text-[#d8b15f]">0{index + 1}</b> {step}</p>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Sign in</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight">Access your business dashboard.</h2>
          <label className="mt-7 block text-sm font-black">Phone number<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" inputMode="tel" placeholder="+251 9•• ••• •••" /></label>
          <label className="mt-4 block text-sm font-black">Password<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" type="password" placeholder="••••••••" /></label>
          <div className="mt-5 rounded-2xl border border-[var(--line)] bg-white p-4">
            <p className="text-sm font-black">OTP verification</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">After password validation, Firebase sends the OTP to this phone number.</p>
            <input className="mt-3 w-full rounded-2xl border border-[var(--line)] bg-[#f5f3ed] px-4 py-3" inputMode="numeric" placeholder="Enter OTP code" />
          </div>
          <Link href="/dashboard" className="mt-6 flex justify-center rounded-full bg-[var(--primary)] px-6 py-4 font-black text-[var(--primary-foreground)]">Verify OTP & continue</Link>
          <Link href="/create-account" className="mt-4 flex justify-center rounded-full border border-[var(--line)] px-6 py-4 font-black">Create business account</Link>
        </form>
      </section>
    </main>
  );
}
