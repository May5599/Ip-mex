import Link from "next/link"
import { INDUSTRIES } from "@/app/lib/industries"
import IndustryInsights from "@/app/ui/IndustryInsights"
import IndustryResearch from "@/app/ui/IndustryResearch"

export const metadata = {
  title: "Industries | IP-MEX — IP Law for Technology Companies",
  description:
    "IP-MEX represents technology companies across AI, semiconductors, software, biotech, fintech, telecom, cybersecurity, and autonomous systems.",
}

export default function IndustriesPage() {
  return (
    <main className="bg-[#050b12] text-white">

      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-56 md:pb-40 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-8">
            Industries
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-8">
            IP Strategy for Technology-Driven Industries
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            We work with organizations across the most competitive technology sectors — delivering intellectual property programs that protect innovation, support commercialization, and build long-term enterprise value.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10 md:mb-16">
            Technology Sectors We Serve
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIES.map(industry => (
              <div
                key={industry.slug}
                className="group rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:bg-white/[0.06] hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)] hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-sm tracking-wide text-white/90">
                    {industry.name}
                  </div>
                </div>

                <div className="px-6 pt-5 pb-7">
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {industry.description}
                  </p>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Innovation Areas</p>
                    <ul className="space-y-1.5 text-sm text-slate-300">
                      {industry.highlights.map(h => (
                        <li key={h} className="flex gap-2">
                          <span className="text-red-500 mt-[2px]">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY RESEARCH */}
      <IndustryResearch />

      {/* INDUSTRY INSIGHTS */}
      <IndustryInsights />

      {/* CTA */}
      <section className="py-20 md:py-40 px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Protect Your Industry Innovation
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 md:mb-12">
            Speak with our IP advisors about building a defensible intellectual property program for your technology sector.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 px-10 md:px-12 py-4 text-base md:text-lg font-medium transition"
          >
            Contact IP-MEX
          </Link>
        </div>
      </section>

    </main>
  )
}
