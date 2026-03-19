export default function IndustryResearch() {
  return (
    <section className="py-16 md:py-32 bg-[#0b131d] text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">

        <div className="md:col-span-5">

          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 block mb-6">
            Industry Research
          </span>

          <h2 className="text-4xl font-semibold leading-tight">
            Technology landscapes demand informed IP strategy
          </h2>

        </div>

        <div className="md:col-span-7 space-y-8">

          <p className="text-lg text-slate-300">
            Each industry evolves through distinct innovation cycles,
            engineering breakthroughs, and competitive pressures.
            Intellectual property strategy must reflect how
            technology actually develops.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 pt-4">

            <div>
              <div className="text-3xl font-semibold">8+</div>
              <p className="text-sm text-slate-400">
                Technology sectors analyzed
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold">Global</div>
              <p className="text-sm text-slate-400">
                Patent landscape coverage
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold">Deep</div>
              <p className="text-sm text-slate-400">
                Technical research capability
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}