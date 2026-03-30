import Link from "next/link";

export default function ContactPrompt() {
  return (
    <section className="relative py-16 md:py-44 overflow-hidden text-white">
      {/* dark transition */}
      <div className="absolute inset-0 bg-linear-to-b from-[#05080f]/80 via-[#070c16] to-[#03070d]" />

      {/* subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[48px_48px]" />

      

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-24 items-center">
          <div className="md:col-span-7">
            <span className="block text-xs tracking-[0.32em] uppercase text-red-500 mb-10">
              Get Started
            </span>

            <h2 className="text-3xl md:text-5xl leading-[1.04] font-semibold max-w-2xl">
              Start a conversation about your intellectual property
            </h2>

            <p className="mt-10 text-lg text-slate-300 max-w-xl leading-relaxed">
              Speak with experienced patent professionals about protecting,
              strengthening, and commercializing your innovations.
            </p>
          </div>

          <div className="md:col-span-5 flex md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-5 px-11 py-4 text-sm font-medium bg-red-600 hover:bg-red-500 transition-colors"
            >
              Contact IP-MEX
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
