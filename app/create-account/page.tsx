import Link from 'next/link';

export default function CreateAccountPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 py-8">
      <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--primary)] p-7 text-[var(--primary-foreground)]">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d8b15f]">Owner signup</p>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.05em]">Create the business tenant first.</h1>
          <p className="mt-5 leading-7 text-[#dce8e3]">After signup, owners add banks, account holder names, branches, and staff credentials.</p>
        </div>
        <form className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7">
          {['Business legal name', 'Owner full name', 'Phone number', 'Primary branch'].map((field) => (
            <label key={field} className="mb-4 block text-sm font-black">{field}<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" /></label>
          ))}
          <Link href="/dashboard" className="mt-4 flex justify-center rounded-full bg-[var(--primary)] px-6 py-4 font-black text-[var(--primary-foreground)]">Create account</Link>
        </form>
      </section>
    </main>
  );
}
