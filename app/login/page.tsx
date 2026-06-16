import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--background)] px-5 py-8">
      <form className="w-full max-w-md rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Staff login</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">Access your verification desk.</h1>
        <label className="mt-7 block text-sm font-black">Business code<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="BEREKET-001" /></label>
        <label className="mt-4 block text-sm font-black">Staff username<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="meron.branch1" /></label>
        <label className="mt-4 block text-sm font-black">Password<input className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3" type="password" placeholder="••••••••" /></label>
        <Link href="/dashboard" className="mt-6 flex justify-center rounded-full bg-[var(--primary)] px-6 py-4 font-black text-[var(--primary-foreground)]">Log in</Link>
      </form>
    </main>
  );
}
