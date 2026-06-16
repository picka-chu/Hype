import { activity, bankAccounts, productPlan, verificationSteps } from '@/lib/surepay';

const metrics = [
  ['ETB 128,430', 'Verified today'],
  ['97.8%', 'Auto-match rate'],
  ['12 sec', 'Median decision'],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-6 md:grid-cols-[1.05fr_0.95fr] md:px-8 lg:px-12">
        <div className="flex min-h-[92vh] flex-col justify-between rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 md:p-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-[var(--primary)] text-lg font-black text-[var(--primary-foreground)]">S</div>
              <div>
                <p className="text-lg font-black tracking-tight">Surepay</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Payment truth layer</p>
              </div>
            </div>
            <a className="hidden rounded-full border border-[var(--line)] px-5 py-3 text-sm font-bold md:block" href="#plan">
              View plan
            </a>
          </nav>

          <div className="py-16 md:py-24">
            <p className="mb-5 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm font-bold text-[var(--primary)]">
              Built for Ethiopian bank-transfer businesses
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Stop fake transfer screenshots before they cost you inventory.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Surepay gives owners and staff a tenant-based PWA for verifying payment receipts, QR links, amounts, sender details,
              receiver accounts, and FT numbers before a sale is marked as paid.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-[var(--primary)] px-7 py-4 text-center font-black text-[var(--primary-foreground)]" href="#verification">
                Plan verification flow
              </a>
              <a className="rounded-full border border-[var(--line)] px-7 py-4 text-center font-black" href="#dashboard">
                Preview dashboard
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-[var(--line)] p-5">
                <p className="text-2xl font-black tracking-tight">{value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <StaffPhone />
      </section>

      <section id="verification" className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-4 md:px-8 lg:px-12">
        {verificationSteps.map((step, index) => (
          <article key={step.title} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-6">
            <span className="text-sm font-black text-[var(--accent)]">0{index + 1}</span>
            <h2 className="mt-4 text-xl font-black tracking-tight">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.detail}</p>
          </article>
        ))}
      </section>

      <section id="dashboard" className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--primary)] p-7 text-[var(--primary-foreground)]">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d8b15f]">Owner dashboard</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">Tenants manage banks, branches, and staff credentials.</h2>
          <p className="mt-5 leading-7 text-[#dce8e3]">
            Business owners create an account, add verified bank accounts and account holder names, then invite staff with scoped
            credentials for mobile-first payment verification.
          </p>
        </div>
        <div className="grid gap-4">
          {bankAccounts.map((account) => (
            <div key={account.account} className="grid gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-black">{account.bank}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{account.holder} · {account.account}</p>
              </div>
              <span className="w-fit rounded-full border border-[var(--line)] px-4 py-2 text-sm font-black text-[var(--primary)]">{account.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="plan" className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">Build plan</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {productPlan.map((item) => (
              <p key={item} className="rounded-3xl border border-[var(--line)] p-5 leading-7 text-[var(--muted)]">{item}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function StaffPhone() {
  return (
    <aside className="mx-auto w-full max-w-[430px] rounded-[2.5rem] border border-[#1c302b] bg-[#12201c] p-3">
      <div className="min-h-[760px] rounded-[2rem] bg-[#f9f5ea] p-5 text-[#12201c]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--muted)]">Staff home</p>
            <h2 className="text-2xl font-black tracking-tight">Good morning, Meron</h2>
          </div>
          <div className="grid size-11 place-items-center rounded-full bg-[var(--primary)] text-sm font-black text-white">M</div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-white p-5">
          <p className="text-sm text-[var(--muted)]">Today verified</p>
          <p className="mt-2 text-4xl font-black tracking-[-0.05em]">ETB 128,430</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-[#f5f3ed] p-4">
              <p className="font-black">42</p>
              <p className="text-[var(--muted)]">Transfers</p>
            </div>
            <div className="rounded-2xl bg-[#f5f3ed] p-4">
              <p className="font-black">3</p>
              <p className="text-[var(--muted)]">Flagged</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-black">Verification history</h3>
            <button className="text-sm font-black text-[var(--primary)]">Filter</button>
          </div>
          <div className="space-y-3">
            {activity.map((item) => (
              <div key={item.id} className="rounded-[1.25rem] border border-[var(--line)] bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black">{item.amount}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{item.sender} · {item.bank}</p>
                  </div>
                  <span className="rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-black text-[var(--primary)]">{item.status}</span>
                </div>
                <p className="mt-3 text-xs font-bold text-[var(--muted)]">{item.id} · {item.time}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="sticky bottom-4 mt-6 w-full rounded-full bg-[var(--primary)] px-6 py-4 font-black text-[var(--primary-foreground)]">
          Verify payment
        </button>
      </div>
    </aside>
  );
}
