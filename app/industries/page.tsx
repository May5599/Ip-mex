import { INDUSTRIES } from "@/app/lib/industries"
import IndustryCard from "@/app/ui/IndustryCard"
import IndustryInsights from "@/app/ui/IndustryInsights"
import IndustryResearch from "@/app/ui/IndustryResearch"
import ContactPrompt from "@/app/sections/ContactPrompt"

export const metadata = {
  title: "Industries | IP-MEX | IP Law for Technology Companies",
  description:
    "IP-MEX provides patent and trademark counsel to technology companies across AI, semiconductors, software, biotechnology, fintech, telecommunications, cybersecurity, and autonomous systems.",
  openGraph: {
    title: "Industries | IP-MEX | IP Law for Technology Companies",
    description: "IP-MEX provides patent and trademark counsel to technology companies in AI, semiconductors, software, biotech, fintech, telecom, cybersecurity, and autonomous systems.",
    type: "website"
  }
}

export default function IndustriesPage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050b12] text-white pt-32 pb-20 md:pt-48 md:pb-28 px-6 border-b border-white/10">

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[70px_70px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.16),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-12 lg:gap-18 items-center">

          <div>
            <span className="eyebrow text-red-500 mb-8 block">
              Industries
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
              Intellectual property counsel shaped by how technology sectors actually compete
            </h1>

            <p className="mt-8 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
              IP-MEX works with companies across AI, software, semiconductors, biotechnology, fintech, telecommunications, cybersecurity, and autonomous systems, aligning legal strategy with sector-specific innovation pressure.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-red-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="p-7 sm:p-8 border-b border-white/10">
                <p className="eyebrow text-red-400 mb-5">Sector Coverage</p>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                  {INDUSTRIES.slice(0, 8).map(industry => (
                    <div key={industry.slug} className="border border-white/10 bg-black/20 px-4 py-3">
                      {industry.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                <div className="p-6">
                  <p className="text-2xl font-semibold">8+</p>
                  <p className="mt-2 text-sm text-slate-400">Technology sectors served</p>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-semibold">Canada + USA</p>
                  <p className="mt-2 text-sm text-slate-400">Cross-border legal support</p>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-semibold">Deep Tech</p>
                  <p className="mt-2 text-sm text-slate-400">Scientist-led IP understanding</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-neutral-50 border-b border-neutral-200 py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="eyebrow text-red-600 mb-3">Where We Add Value</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Industry context matters when deciding what to patent, where to file, what to hold as confidential, and how to structure portfolio growth.
            </p>
          </div>
          <div>
            <p className="eyebrow text-red-600 mb-3">Why Sector Knowledge Matters</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Different industries face different R&D cycles, standards pressure, commercialization timelines, and competitive filing behavior.
            </p>
          </div>
          <div>
            <p className="eyebrow text-red-600 mb-3">What Changes By Sector</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              The right IP strategy for AI software is not the same as the right strategy for semiconductors, biotech, or telecommunications infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="py-16 md:py-24 xl:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-12 md:mb-20">
            <div className="md:col-span-4">
              <span className="eyebrow text-red-600 mb-6 block">
              Sectors
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
                Technology sectors we serve
              </h2>
            </div>

            <div className="md:col-span-8">
              <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
                The industries below are not just categories. They reflect distinct innovation environments with different portfolio needs, filing risks, enforcement dynamics, and commercialization realities.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {INDUSTRIES.map(industry => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>

        </div>
      </section>

      {/* RESEARCH SECTION */}
      <IndustryResearch />

      {/* INSIGHTS */}
      <IndustryInsights />

      {/* CONTACT */}
      <ContactPrompt />

    </main>
  )
}
