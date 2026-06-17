import Link from 'next/link';
import { authFlow } from '@/lib/firebase';

const signupFields = [
  { label: 'Full name', placeholder: 'Bereket Tesfalem', type: 'text' },
  { label: 'Business name', placeholder: 'Bereket Coffee PLC', type: 'text' },
  { label: 'Business address', placeholder: 'Bole, Addis Ababa', type: 'text' },
  { label: 'Phone number', placeholder: '+251 9•• ••• •••', type: 'tel' },
  { label: 'Password', placeholder: '••••••••', type: 'password' },
  { label: 'Confirm password', placeholder: '••••••••', type: 'password' },
];

export default function CreateAccountPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 py-8">
      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--primary)] p-7 text-[var(--primary-foreground)]">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d8b15f]">Owner signup</p>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.05em]">Create a Firebase-backed tenant.</h1>
          <p className="mt-5 leading-7 text-[#dce8e3]">Owners create the business profile, verify the phone number by OTP, then Surepay creates the tenant and opens the business dashboard.</p>
          <div className="mt-7 space-y-3">
            {authFlow.createAccount.map((step, index) => (
              <p key={step} className="rounded-2xl border border-white/15 p-4 text-sm text-[#dce8e3]"><b className="text-[#d8b15f]">0{index + 1}</b> {step}</p>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Create account</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight">Business owner details.</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {signupFields.map((field) => (
              <label key={field.label} className="block text-sm font-black">{field.label}<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" type={field.type} placeholder={field.placeholder} /></label>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-[var(--line)] bg-white p-4">
            <p className="text-sm font-black">Phone OTP</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">Tap continue to send an OTP. After OTP verification, Surepay creates the tenant and redirects to the dashboard.</p>
            <input className="mt-3 w-full rounded-2xl border border-[var(--line)] bg-[#f5f3ed] px-4 py-3" inputMode="numeric" placeholder="OTP code after continue" />
          </div>
          <Link href="/dashboard" className="mt-6 flex justify-center rounded-full bg-[var(--primary)] px-6 py-4 font-black text-[var(--primary-foreground)]">Continue, verify OTP & create tenant</Link>
          <Link href="/login" className="mt-4 flex justify-center rounded-full border border-[var(--line)] px-6 py-4 font-black">Already have an account?</Link>
        </form>
      </section>
    </main>
  );
}
