export default function Insights() {
  return (
    <section className="relative py-20 md:py-44 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden">
      {/* elegant light texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.35)_1px,transparent_0)] [background-size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          {/* left column */}
          <div className="md:col-span-5">
            <span className="block text-xs tracking-[0.3em] uppercase text-red-600 mb-8">
              Insights
            </span>

            <h2 className="text-3xl md:text-5xl leading-[1.05] font-semibold max-w-md">
              Clear thinking on intellectual property in complex markets
            </h2>
          </div>

          {/* right column */}
          <div className="md:col-span-7 space-y-10 md:space-y-14">
            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              Practical perspectives on patents, trademarks, valuation, and
              enforcement written for executives, founders, and technical
              leaders navigating real-world IP decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-10 md:gap-y-14">
              <div className="group">
                <div className="h-px w-12 bg-red-600 mb-6" />
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                  Patent Strategy
                </p>
                <h3 className="text-xl font-medium leading-snug group-hover:text-red-600 transition-colors">
                  Designing patent portfolios that support long-term growth
                </h3>
              </div>

              <div className="group">
                <div className="h-px w-12 bg-red-600 mb-6" />
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                  Enforcement
                </p>
                <h3 className="text-xl font-medium leading-snug group-hover:text-red-600 transition-colors">
                  Managing infringement risk without disrupting innovation
                </h3>
              </div>

              <div className="group">
                <div className="h-px w-12 bg-red-600 mb-6" />
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                  Valuation
                </p>
                <h3 className="text-xl font-medium leading-snug group-hover:text-red-600 transition-colors">
                  Understanding the commercial value of IP-heavy businesses
                </h3>
              </div>

              <div className="group">
                <div className="h-px w-12 bg-red-600 mb-6" />
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                  Global IP
                </p>
                <h3 className="text-xl font-medium leading-snug group-hover:text-red-600 transition-colors">
                  Protecting innovation across Canada, the US, and worldwide
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
