export default function IndustryResearch() {
  return (
    <section className="py-16 md:py-24 xl:py-32 bg-neutral-50 text-neutral-900 border-y border-neutral-200">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-12 md:gap-16 items-start">

        <div>

          <span className="eyebrow text-red-600 block mb-6">
            Industry Research
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-xl">
            Technology landscapes demand informed IP strategy
          </h2>

          <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl">
            Sector-specific IP work is strongest when it reflects how the underlying technology moves, where value concentrates, and how competitors actually file, enforce, and commercialize rights.
          </p>

        </div>

        <div className="space-y-8">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-3xl font-semibold text-neutral-900">8+</div>
              <p className="mt-3 text-sm text-neutral-500">
                Technology sectors analyzed
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-3xl font-semibold text-neutral-900">Global</div>
              <p className="mt-3 text-sm text-neutral-500">
                Patent landscape coverage
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-3xl font-semibold text-neutral-900">Deep</div>
              <p className="mt-3 text-sm text-neutral-500">
                Technical research capability
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-2 border-red-600 pl-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Filing strategy by sector
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                The filing approach for software, biotech, telecom, and hardware-intensive sectors differs materially in timing, scope, and portfolio structure.
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Risk shaped by the market
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Standards pressure, regulatory friction, long R&D cycles, and licensing exposure all change how rights should be protected and defended.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}