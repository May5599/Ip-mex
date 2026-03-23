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
    <main className="bg-[#050b12] text-white">

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="max-w-7xl mx-auto">

          <span className="text-xs tracking-[0.35em] uppercase text-red-500 mb-8 block">
            Industries
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
            Intellectual property strategy for technology-driven industries
          </h1>

          <p className="mt-8 text-lg text-slate-300 max-w-2xl leading-relaxed">
            IP-MEX advises technology companies across every major innovation sector   from artificial intelligence and semiconductors to biotechnology and financial technology.
          </p>

        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="py-16 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12 md:mb-20">
            <span className="text-xs tracking-[0.35em] uppercase text-red-500 mb-6 block">
              Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Technology sectors we serve
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
