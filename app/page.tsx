import { productPlan, verificationSteps } from '@/lib/surepay';

const metrics = [
  ['12,458', 'Payments checked'],
  ['97.8%', 'Auto-match rate'],
  ['12 sec', 'Median decision'],
];
const values = ['Trust', 'Speed', 'Security', 'Simplicity'];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[var(--foreground)]">
      <section className="relative px-5 py-5 sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_58%,rgba(248,250,252,0)_100%)]" />
        <HeroNav />
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:pt-24">
          <section>
            <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-extrabold text-[var(--primary)] shadow-sm">Payment proof, made trustworthy.</p>
            <h1 className="brand-word mt-7 max-w-4xl text-5xl font-black leading-[.94] tracking-[-.07em] sm:text-7xl lg:text-8xl">Verify transfers before you deliver.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">SurePay gives sales, delivery, and finance teams a calm verification workspace: scan payment proof, match the details, and move forward with confidence.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-[var(--navy)] px-7 py-4 text-center font-black text-white shadow-xl shadow-slate-900/20" href="/create-account">Start verifying</a>
              <a className="rounded-full border border-slate-200 bg-white px-7 py-4 text-center font-black text-[var(--navy)]" href="/login">Sign in</a>
            </div>
          </section>
          <ProductShowcase />
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {verificationSteps.map((step, index) => (
            <article key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-sm font-black text-[var(--primary)]">0{index + 1}</span>
              <h2 className="brand-word mt-5 text-2xl font-black tracking-[-.04em]">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="rounded-[2.25rem] bg-[var(--navy)] p-8 text-white">
          <p className="text-sm font-black uppercase tracking-[.28em] text-blue-200">Brand values</p>
          <h2 className="brand-word mt-5 text-4xl font-black tracking-[-.06em]">Built for teams that cannot afford uncertainty.</h2>
          <div className="mt-8 grid gap-3">
            {values.map((value) => <p key={value} className="rounded-2xl border border-white/10 bg-white/5 p-4 font-bold">✓ {value}</p>)}
          </div>
        </div>
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[.28em] text-[var(--primary)]">Rollout plan</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {productPlan.map((item) => <p key={item} className="rounded-3xl bg-slate-50 p-5 leading-7 text-[var(--muted)]">{item}</p>)}
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroNav() {
  return <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl">
    <a href="/" className="flex items-center gap-3"><span className="brand-mark size-10 rounded-2xl bg-white shadow-inner" /><span className="brand-word text-2xl font-black">Sure<span className="text-gradient">Pay</span></span></a>
    <div className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex"><a href="#features">Features</a><a href="#platform">Platform</a><a href="/dashboard">Dashboard</a></div>
    <a className="rounded-full blue-gradient px-5 py-3 text-sm font-black text-white" href="/login">Open app</a>
  </nav>;
}

function ProductShowcase() {
  return <div className="relative">
    <div className="absolute -right-10 -top-10 -z-10 size-72 rounded-full bg-blue-200/50 blur-3xl" />
    <div className="glass-card rounded-[2.5rem] p-5 sm:p-7">
      <div className="rounded-[2rem] bg-[var(--navy)] p-5 text-white">
        <div className="flex items-center justify-between"><span className="brand-mark size-11 rounded-2xl bg-white/10" /><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">Live</span></div>
        <h2 className="brand-word mt-8 text-3xl font-black tracking-[-.05em]">Payment verified</h2>
        <p className="mt-2 text-blue-100">ETB 4,850 · FT2439P9G8</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">{metrics.map(([n,l]) => <div key={l} className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-black">{n}</p><p className="mt-1 text-xs text-blue-100">{l}</p></div>)}</div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2"><Status title="Payment verified" tone="green" /><Status title="Needs review" tone="amber" /></div>
    </div>
  </div>;
}
function Status({ title, tone }: { title: string; tone: 'green' | 'amber' }) { return <div className={`rounded-3xl border p-5 ${tone === 'green' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-orange-200 bg-orange-50 text-orange-700'}`}><p className="font-black">{title}</p><p className="mt-1 text-sm opacity-80">Clear next step for staff.</p></div>; }
