import { productPlan, verificationSteps } from '@/lib/surepay';

const trustLogos = ['EthioPay', 'Kacha', 'Santim', 'ArifPay', 'Shega'];
const proofCards = [
  { label: 'Today protected', value: 'ETB 128K', detail: '42 verified bank transfers' },
  { label: 'Auto-match rate', value: '97.8%', detail: 'Receipt, account, amount, and FT matched' },
  { label: 'Median decision', value: '12 sec', detail: 'QR-first with image fallback' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbf6] text-[#0b0c0b]">
      <section className="w-full overflow-hidden bg-[radial-gradient(circle_at_7%_8%,#eef8d7_0,#eef8d7_18%,transparent_38%),radial-gradient(circle_at_92%_18%,#dff5fb_0,#dff5fb_22%,transparent_44%),linear-gradient(180deg,#fbfbf6_0%,#f8f8f1_70%,#ffffff_100%)] px-4 py-5 sm:px-8 lg:px-12">
        <HeroNav />
        <section className="mx-auto max-w-3xl pt-12 text-center sm:pt-16">
          <a href="#verification" className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-xs font-bold text-[#565b55] ring-1 ring-black/10">
            <span className="rounded-full bg-black px-2 py-0.5 text-[10px] uppercase tracking-wide text-white">New</span>
            QR scan + Gemini dialog fallback
            <span aria-hidden>›</span>
          </a>
          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.075em] text-black sm:text-6xl lg:text-7xl">
            Verify every bank transfer before handing over goods.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#686d66] sm:text-base">
            Surepay helps Ethiopian businesses detect fake transfer screenshots by matching QR receipts, captured success dialogs,
            sender details, receiver accounts, amounts, and FT numbers in one staff-friendly PWA.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/login" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-black text-white sm:w-auto">
              Sign in
              <span className="grid size-6 place-items-center rounded-full bg-white text-black">↗</span>
            </a>
            <a href="/create-account" className="inline-flex w-full items-center justify-center rounded-full border border-black/20 bg-white/70 px-6 py-3.5 text-sm font-black sm:w-auto">
              Create account
            </a>
          </div>
        </section>

        <section className="relative mx-auto mt-12 grid max-w-5xl items-end gap-5 pb-4 lg:grid-cols-[1fr_1.05fr_1fr] lg:gap-0">
          <SavingsCard />
          <PhoneMockup />
          <ReviewCard />
        </section>

        <section className="mx-auto mt-12 max-w-5xl pb-6 text-center sm:mt-16">
          <p className="text-xs font-bold text-[#5d625c]">Designed for modern Ethiopian teams that accept bank transfers</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-left text-sm font-black text-[#171817] sm:grid-cols-5 sm:text-center">
            {trustLogos.map((logo) => (
              <div key={logo} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/55 px-3 py-3">
                <span className="grid size-5 place-items-center rounded-md bg-black text-[10px] text-white">S</span>
                {logo}
              </div>
            ))}
          </div>
        </section>
      </section>

      <section id="verification" className="mx-auto grid max-w-7xl gap-4 px-2 py-8 sm:px-0 md:grid-cols-4">
        {verificationSteps.map((step, index) => (
          <article key={step.title} className="rounded-[1.75rem] border border-black/10 bg-[#fbfbf6] p-6">
            <span className="text-xs font-black text-[#2f7d58]">0{index + 1}</span>
            <h2 className="mt-4 text-xl font-black tracking-tight">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#626860]">{step.detail}</p>
          </article>
        ))}
      </section>

      <section id="plan" className="mx-auto max-w-7xl px-2 pb-8 sm:px-0">
        <div className="rounded-[2rem] border border-black/10 bg-[#fbfbf6] p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#2f7d58]">Build plan</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {productPlan.map((item) => (
              <p key={item} className="rounded-3xl border border-black/10 bg-white/60 p-5 leading-7 text-[#626860]">{item}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroNav() {
  return (
    <nav className="flex items-center justify-between gap-3 rounded-full bg-white/50 px-3 py-3 backdrop-blur sm:px-5">
      <a href="/" className="flex items-center gap-2 text-base font-black">
        <span className="grid size-9 place-items-center rounded-full bg-[#e8f8d9] text-[#2f7d58]">S</span>
        Surepay
      </a>
      <div className="hidden items-center gap-8 text-xs font-bold text-[#565b55] md:flex">
        <a href="/create-account">Create account</a>
        <a href="#verification">Features</a>
        <a href="#plan">Roadmap</a>
        <a href="/login">Staff Login</a>
      </div>
      <a href="/login" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-black text-white sm:px-5">
        Sign in
        <span className="grid size-5 place-items-center rounded-full bg-white text-black">↗</span>
      </a>
    </nav>
  );
}

function SavingsCard() {
  return (
    <article className="z-10 rounded-[1.75rem] border border-black/10 bg-white/82 p-6 backdrop-blur lg:-mr-10 lg:mb-14">
      <h2 className="text-lg font-black tracking-tight">Receipt-based verification</h2>
      <p className="mt-3 text-sm leading-6 text-[#6a7068]">Match the customer dialog against official bank receipt data before staff marks the sale paid.</p>
      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex -space-x-3">
          {['M', 'B', 'H'].map((avatar) => (
            <span key={avatar} className="grid size-10 place-items-center rounded-full border-2 border-white bg-[#e8f8d9] text-sm font-black text-[#2f7d58]">{avatar}</span>
          ))}
        </div>
        <div>
          <p className="text-2xl font-black tracking-tight">2.5K</p>
          <p className="text-xs font-bold text-[#6a7068]">Daily checks</p>
        </div>
      </div>
    </article>
  );
}

function ReviewCard() {
  return (
    <article className="z-10 rounded-[1.75rem] border border-black/10 bg-white/82 p-6 backdrop-blur lg:-ml-10 lg:mb-28">
      <div className="flex gap-1 text-[#2f7d58]" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => <span key={index}>★</span>)}
      </div>
      <h2 className="mt-4 text-lg font-black tracking-tight">Best for transfer-heavy teams</h2>
      <p className="mt-3 text-sm leading-6 text-[#6a7068]">The fallback image flow helps staff verify payments even when QR scanning is unreliable.</p>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-black">Owner dashboard</p>
    </article>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[250px] sm:w-[310px]">
      <div className="rounded-[2.6rem] border-[10px] border-black bg-[#f8f7ef] p-4">
        <div className="mx-auto mb-5 h-6 w-24 rounded-full bg-black" />
        <p className="text-sm font-black">Hello, Meron</p>
        <p className="mt-1 text-xs text-[#747a72]">Here is your branch verification report.</p>
        <p className="mt-5 text-3xl font-black tracking-[-0.05em]">ETB 84,897.23</p>
        <p className="mt-1 text-xs font-bold text-[#2f7d58]">+18.2% verified today</p>
        <div className="mt-6 grid grid-cols-[1fr_auto] gap-4">
          <div className="space-y-3">
            {proofCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-black/10 bg-white p-3">
                <p className="text-[10px] font-bold text-[#747a72]">{card.label}</p>
                <p className="mt-1 text-sm font-black">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-1 size-24 rounded-full bg-[conic-gradient(#2f7d58_0_35%,#f06f4f_35%_60%,#f3c969_60%_82%,#dfe8d7_82%_100%)]">
            <div className="absolute inset-5 rounded-full bg-[#f8f7ef]" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-2xl bg-[#edf8e4] p-3"><b>QR</b><p className="text-[#747a72]">Primary scan</p></div>
          <div className="rounded-2xl bg-[#fff0e7] p-3"><b>Image</b><p className="text-[#747a72]">Fallback OCR</p></div>
        </div>
      </div>
    </div>
  );
}
