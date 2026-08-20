import type { SupabaseConnectivityResult } from "@/types/supabase";

const principles = [
  "India-first research workflows",
  "Secure Supabase-backed application foundation",
  "Scalable architecture for market data, analytics, and compliance",
];

type LandingPageProps = {
  connectivity: SupabaseConnectivityResult;
};

export function LandingPage({ connectivity }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <div className="text-lg font-semibold tracking-tight">GNSOne</div>
          <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
            Foundation phase
          </span>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Production-grade Indian investment research platform
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Research infrastructure for disciplined market decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              GNSOne is being built as a secure, scalable workspace for Indian investment research teams. This foundation establishes the application shell before adding schemas, financial APIs, or AI capabilities.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                href="#platform"
              >
                View platform foundation
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://supabase.com/docs"
                rel="noreferrer"
                target="_blank"
              >
                Supabase documentation
              </a>
            </div>
          </div>

          <div id="platform" className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Foundation</p>
              <h2 className="mt-4 text-2xl font-semibold">Ready for the next build phase</h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                {principles.map((principle) => (
                  <li className="flex gap-3" key={principle}>
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Supabase</p>
                  <h2 className="mt-3 text-xl font-semibold">Server connectivity</h2>
                </div>
                <span
                  className={
                    connectivity.ok
                      ? "rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200"
                      : "rounded-full bg-rose-400/10 px-3 py-1 text-sm font-semibold text-rose-200"
                  }
                >
                  {connectivity.ok ? "Connected" : "Needs setup"}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{connectivity.message}</p>
              <p className="mt-3 text-xs text-slate-500">Last checked: {connectivity.checkedAt}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
