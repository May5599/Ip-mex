export default function Credibility() {
  return (
    <section className="relative py-20 md:py-40 bg-gradient-to-b from-white to-neutral-50 text-neutral-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[40rem] h-[40rem] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-slate-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-20 items-start">
        <div className="md:col-span-5">
          <span className="block text-xs tracking-[0.25em] uppercase text-red-600 mb-6">
            Credibility
          </span>

          <h2 className="text-4xl leading-tight font-semibold max-w-md">
            Trusted advisors in intellectual property strategy
          </h2>
        </div>

        <div className="md:col-span-7 space-y-10">
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            IP-MEX partners with emerging companies, established enterprises,
            and investment groups to build, protect, and commercialize
            intellectual property portfolios aligned with long-term business
            objectives.
          </p>

          <div className="grid sm:grid-cols-3 gap-10">
            <div>
              <div className="text-3xl font-semibold text-neutral-900">
                20+
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Years of IP experience
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold text-neutral-900">
                500+
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Patent portfolios managed
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold text-neutral-900">
                Global
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Technology-focused clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
