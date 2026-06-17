import Link from 'next/link';
import { productPlan } from '@/lib/surepay';

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 py-8">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Surepay onboarding</p>
        <h1 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Set up a tenant, banks, and staff before the first scan.</h1>
        <div className="mt-8 grid gap-4">
          {productPlan.map((step) => (
            <p key={step} className="rounded-3xl border border-[var(--line)] p-5 leading-7 text-[var(--muted)]">{step}</p>
          ))}
        </div>
        <Link className="mt-8 inline-flex rounded-full bg-[var(--primary)] px-7 py-4 font-black text-[var(--primary-foreground)]" href="/create-account">
          Create business account
        </Link>
      </section>
    </main>
  );
}
