const walletItems = [
  ['Withdraw', 'July 18, 2026 at 4:04 AM', '10,000F'],
  ['Deposit', 'July 18, 2026 at 4:06 AM', '10,000F'],
  ['Sent to Meron Daba', 'July 18, 2026 at 4:11 AM', '-5,000F'],
  ['Deposit', 'July 18, 2026 at 7:14 AM', '15,000F'],
];
const values = ['Trust', 'Speed', 'Security', 'Simplicity'];

export default function Home() {
  return (
    <main className="reference-hero min-h-screen overflow-hidden bg-[#f4f4f4] text-[#111111]">
      <div className="hero-frame relative mx-auto min-h-screen max-w-[1180px] px-6 pb-12 pt-8 sm:px-10 lg:px-0">
        <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-[#d8d8d8] lg:block" />
        <Header />

        <section className="grid min-h-[calc(100vh-92px)] items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 max-w-[560px] pb-8 lg:pb-0">
            <div className="inline-flex rounded-[20px] bg-white p-1 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <span className="rounded-[16px] bg-[#f3f3f3] px-5 py-3 text-sm font-medium shadow-sm">Personal</span>
              <span className="px-5 py-3 text-sm font-medium text-[#4d4d4d]">Business</span>
            </div>

            <h1 className="mt-7 max-w-[620px] text-[clamp(3.7rem,6.2vw,6.7rem)] font-semibold leading-[0.92] tracking-[-0.085em]">
              Send, Withdraw &amp; deposit effortlessly
            </h1>

            <p className="mt-44 max-w-[480px] text-lg leading-[1.45] tracking-[-0.03em] text-[#6e6e6e] lg:mt-40">
              We make digital payments accessible to everyone with just your smartphone all over the World
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StoreButton label="Get from Apple" icon="apple" />
              <span className="text-base font-medium text-[#1d1d1d]">or</span>
              <StoreButton label="Play store" icon="play" />
            </div>
          </div>

          <HeroPhone />
        </section>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between pt-1 lg:pl-0">
      <a href="/" className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-[#11b7e8] shadow-[0_12px_30px_rgba(17,183,232,0.26)]">
          <span className="brand-mark size-8 rounded-lg bg-transparent" />
        </span>
        <span className="text-lg font-semibold tracking-[-0.04em]">wayve</span>
      </a>

      <nav className="flex items-center gap-8 text-sm font-medium tracking-[-0.02em] text-[#191919]">
        <a className="hidden sm:inline" href="/verify">Transfer Fees</a>
        <a className="hidden sm:inline" href="/dashboard">Features</a>
        <button className="rounded-full bg-white px-5 py-3 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.05)]">ENG⌄</button>
      </nav>
    </header>
  );
}

function StoreButton({ label, icon }: { label: string; icon: 'apple' | 'play' }) {
  return (
    <a href="/create-account" className="inline-flex h-14 items-center gap-3 rounded-full bg-black px-7 text-sm font-medium text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <span>{label}</span>
      {icon === 'apple' ? <span className="text-xl leading-none"></span> : <span className="play-icon" aria-hidden />}
    </a>
  );
}

function HeroPhone() {
  return (
    <div className="relative min-h-[620px] lg:min-h-[720px]">
      <div className="phone-lines" aria-hidden />
      <div className="notice-bell" aria-hidden>⌂</div>
      <div className="notice-card" aria-hidden>
        <span className="notice-icon">▭</span>
        <span>You're<br />receiving</span>
      </div>

      <div className="hand-phone" aria-label="Smartphone in hand">
        <HandShape />
        <div className="phone-shell">
          <div className="phone-bezel">
            <div className="dynamic-island" />
            <div className="screen-content">
              <div className="screen-top">
                <span className="gear">⚙</span>
                <span className="balance">120.000F</span>
                <span className="tiny-time">10:41</span>
                <div className="qr-card">
                  <div className="qr-pattern" />
                  <span className="mini-logo"><span className="brand-mark size-8 rounded-lg bg-[#12bde8]" /></span>
                </div>
              </div>
              <div className="quick-actions">
                <Action icon="↙" label="SEND" active />
                <Action icon="◈" label="PAYMENTS" />
                <Action icon="▯" label="AIRTIME" />
              </div>
              <div className="wallet-list">
                {walletItems.map(([title, date, amount]) => (
                  <div key={`${title}-${date}`} className="wallet-row">
                    <div>
                      <p>{title}</p>
                      <span>{date}</span>
                    </div>
                    <strong>{amount}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2"><Status title="Payment verified" tone="green" /><Status title="Needs review" tone="amber" /></div>
    </div>
    );
}

function Action({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className={active ? 'action active' : 'action'}>
      <span>{icon}</span>
      <p>{label}</p>
    </div>
  );
}

function HandShape() {
  return (
    <svg className="hand-svg" viewBox="0 0 520 760" aria-hidden="true">
      <defs>
        <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7d402d" />
          <stop offset="0.35" stopColor="#c28767" />
          <stop offset="0.72" stopColor="#efd1bd" />
          <stop offset="1" stopColor="#7a3828" />
        </linearGradient>
        <linearGradient id="skinShadow" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#6b2e25" />
          <stop offset="1" stopColor="#e0ad8d" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="30" stdDeviation="34" floodColor="#000" floodOpacity="0.16" />
        </filter>
      </defs>
      <path filter="url(#softShadow)" d="M176 318c-46 40-60 96-50 162l16 112c10 70 49 128 111 158 58 28 123 2 129-62l22-239c4-46-1-91-24-118-35-42-139-70-204-13Z" fill="url(#skin)" />
      <path d="M386 267c34-1 58 21 61 55l12 133c3 31-16 54-45 56l-18 1-4-241-6-4Z" fill="url(#skinShadow)" />
      <path d="M129 318c-29-15-54-3-62 28-19 74 1 225 58 335 30 58 72 86 115 70-70-40-102-100-113-176L104 417c-6-44 2-77 25-99Z" fill="url(#skinShadow)" />
      <path d="M421 319c37 4 54 27 53 68l-3 69c-1 29-20 50-48 51l-20 1 4-179 14-10Z" fill="#8d4634" opacity="0.78" />
      <path d="M392 264c-5 52-4 211 3 247" stroke="#5f2b25" strokeWidth="6" strokeLinecap="round" opacity="0.42" />
      <path d="M102 371c30 18 45 44 48 82" stroke="#5f2b25" strokeWidth="8" strokeLinecap="round" opacity="0.28" />
    </svg>
  );
}

function Action({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className={active ? 'action active' : 'action'}>
      <span>{icon}</span>
      <p>{label}</p>
    </div>
  );
}

function HandShape() {
  return (
    <svg className="hand-svg" viewBox="0 0 520 760" aria-hidden="true">
      <defs>
        <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7d402d" />
          <stop offset="0.35" stopColor="#c28767" />
          <stop offset="0.72" stopColor="#efd1bd" />
          <stop offset="1" stopColor="#7a3828" />
        </linearGradient>
        <linearGradient id="skinShadow" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#6b2e25" />
          <stop offset="1" stopColor="#e0ad8d" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="30" stdDeviation="34" floodColor="#000" floodOpacity="0.16" />
        </filter>
      </defs>
      <path filter="url(#softShadow)" d="M176 318c-46 40-60 96-50 162l16 112c10 70 49 128 111 158 58 28 123 2 129-62l22-239c4-46-1-91-24-118-35-42-139-70-204-13Z" fill="url(#skin)" />
      <path d="M386 267c34-1 58 21 61 55l12 133c3 31-16 54-45 56l-18 1-4-241-6-4Z" fill="url(#skinShadow)" />
      <path d="M129 318c-29-15-54-3-62 28-19 74 1 225 58 335 30 58 72 86 115 70-70-40-102-100-113-176L104 417c-6-44 2-77 25-99Z" fill="url(#skinShadow)" />
      <path d="M421 319c37 4 54 27 53 68l-3 69c-1 29-20 50-48 51l-20 1 4-179 14-10Z" fill="#8d4634" opacity="0.78" />
      <path d="M392 264c-5 52-4 211 3 247" stroke="#5f2b25" strokeWidth="6" strokeLinecap="round" opacity="0.42" />
      <path d="M102 371c30 18 45 44 48 82" stroke="#5f2b25" strokeWidth="8" strokeLinecap="round" opacity="0.28" />
    </svg>
  );
}
