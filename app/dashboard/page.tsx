import Link from 'next/link';
import { activity, bankAccounts } from '@/lib/surepay';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 py-6">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
          <div><p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Owner dashboard</p><h1 className="mt-2 text-3xl font-black tracking-tight">Bereket Coffee PLC</h1></div>
          <Link href="/verify" className="rounded-full bg-[var(--primary)] px-6 py-4 font-black text-[var(--primary-foreground)]">Verify payment</Link>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
            <h2 className="text-xl font-black">Verified history</h2>
            <div className="mt-4 space-y-3">
              {activity.map((item) => <div key={item.id} className="rounded-2xl border border-[var(--line)] p-4"><div className="flex justify-between gap-4"><p className="font-black">{item.amount}</p><span className="text-sm font-black text-[var(--primary)]">{item.status}</span></div><p className="mt-1 text-sm text-[var(--muted)]">{item.sender} · {item.bank} · {item.id}</p></div>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6">
            <h2 className="text-xl font-black">Business bank accounts</h2>
            <div className="mt-4 space-y-3">
              {bankAccounts.map((account) => <div key={account.account} className="rounded-2xl border border-[var(--line)] p-4"><p className="font-black">{account.bank}</p><p className="mt-1 text-sm text-[var(--muted)]">{account.holder} · {account.account}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
