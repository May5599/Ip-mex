// import Link from "next/link";
// import { SERVICES } from "@/app/lib/services";

// export const metadata = {
//   title: "Services | IP-MEX",
// };

// export default function ServicesPage() {
//   return (
//     <main className="bg-[#050b12] text-white pt-56 pb-40">
//       <div className="max-w-7xl mx-auto px-6">
//         <span className="block text-xs tracking-[0.3em] uppercase text-red-500 mb-10">
//           Services
//         </span>

//         <h1 className="text-5xl font-semibold mb-20">
//           Intellectual Property Services
//         </h1>

//         <div className="grid md:grid-cols-2 gap-16">
//           {SERVICES.map(service => (
//             <Link
//               key={service.slug}
//               href={`/services/${service.slug}`}
//               className="group border border-white/15 p-12 hover:border-white/40 transition"
//             >
//               <h2 className="text-3xl font-semibold mb-6 group-hover:text-red-500 transition-colors">
//                 {service.title}
//               </h2>
//               <p className="text-slate-300">
//                 {service.shortDescription}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/app/lib/services";

export const metadata = {
  title: "IP Legal Services | IP-MEX — Patents, Trademarks & IP Strategy",
  description: "IP-MEX provides patent prosecution, trademark registration, IP strategy, audits, valuations, and virtual in-house counsel to startups and enterprises in Canada and the USA.",
  openGraph: {
    title: "IP Legal Services | IP-MEX",
    description: "IP-MEX provides patent prosecution, trademark registration, IP strategy, audits, valuations, and virtual in-house counsel in Canada and the USA.",
    type: "website",
  },
};

const featuredServices = SERVICES.filter(service => service.featured);
const primaryServices = SERVICES;
const specializedCapabilities = SERVICES.flatMap(service =>
  (service.children ?? []).map(child => ({
    ...child,
    parentLabel: service.label,
  }))
);

export default function ServicesPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="relative overflow-hidden bg-[#050b12] text-white pt-32 pb-20 md:pt-52 md:pb-32">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[72px_72px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-14 lg:gap-20 items-center">
          <div>
            <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-8">
              Services
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.02] font-semibold max-w-4xl">
              Intellectual property legal services for companies building serious technology.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
              IP-MEX advises clients across Ottawa, Ontario, Canada, and the USA on patents, trademarks, portfolio strategy, disputes, and long-term IP governance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 px-7 py-3 text-sm font-medium transition-colors"
              >
                Speak with IP-MEX
                <span>→</span>
              </Link>

              <a
                href="#service-grid"
                className="inline-flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
              >
                Explore all services
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-red-500/10 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="p-7 sm:p-8 border-b border-white/10">
                <p className="text-xs uppercase tracking-[0.32em] text-red-400 mb-5">
                  What We Handle
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="border border-white/10 bg-black/20 p-4">
                    <p className="text-white font-medium mb-1">Patents</p>
                    <p>Drafting, prosecution, portfolio strategy</p>
                  </div>
                  <div className="border border-white/10 bg-black/20 p-4">
                    <p className="text-white font-medium mb-1">Trademarks</p>
                    <p>Clearance, filing, enforcement, growth</p>
                  </div>
                  <div className="border border-white/10 bg-black/20 p-4">
                    <p className="text-white font-medium mb-1">IP Strategy</p>
                    <p>Audits, valuation, virtual counsel</p>
                  </div>
                  <div className="border border-white/10 bg-black/20 p-4">
                    <p className="text-white font-medium mb-1">Disputes</p>
                    <p>Infringement analysis and litigation support</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                <div className="p-6">
                  <p className="text-2xl font-semibold">Canada</p>
                  <p className="mt-2 text-sm text-slate-400">CIPO-focused strategy and filings</p>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-semibold">USA</p>
                  <p className="mt-2 text-sm text-slate-400">Cross-border IP planning and coordination</p>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-semibold">Global</p>
                  <p className="mt-2 text-sm text-slate-400">Portfolio architecture for expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-600 mb-3">Positioning</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              A law firm built for technology-heavy businesses, research teams, and IP-driven growth.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-600 mb-3">Coverage</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              From early-stage portfolio design to disputes, enforcement, and executive-level IP oversight.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-600 mb-3">Approach</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Commercially grounded legal advice aligned with product roadmaps, fundraising, and market expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="block text-xs tracking-[0.35em] uppercase text-red-600 mb-6">
              Featured Services
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-900">
              Core mandates for innovation-led organizations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {featuredServices.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden border border-neutral-200 bg-white hover:border-neutral-900 transition-colors"
              >
                <div className="relative h-72">
                  <Image
                    src={service.heroImage}
                    alt={service.label}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute left-8 right-8 bottom-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-3">
                      {service.tagline}
                    </p>
                    <h3 className="text-3xl font-semibold text-white">
                      {service.label}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {service.intro}
                  </p>

                  {service.highlights && (
                    <div className="mt-8 grid sm:grid-cols-2 gap-3">
                      {service.highlights.map(highlight => (
                        <div key={highlight} className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="mt-1 h-2 w-2 bg-red-600 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 text-sm font-medium text-red-600 group-hover:text-neutral-900 transition-colors">
                    View service →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="service-grid" className="py-20 md:py-32 px-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-14 md:mb-20">
            <div className="md:col-span-4">
              <span className="block text-xs tracking-[0.35em] uppercase text-red-600 mb-6">
                All Services
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-neutral-900">
                Full-service IP support across the business lifecycle
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
                Whether the need is filing, portfolio structuring, diligence, enforcement preparation, or executive-level IP oversight, the service model is designed to support both immediate legal work and longer-term strategic decisions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {primaryServices.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-neutral-200 bg-white p-8 hover:border-red-600 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-red-600 mb-5">
                  {service.tagline}
                </p>

                <h3 className="text-2xl font-semibold text-neutral-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.label}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {service.highlights && (
                  <div className="space-y-3 mb-8">
                    {service.highlights.slice(0, 3).map(highlight => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-neutral-700">
                        <span className="mt-1 h-px w-4 bg-red-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                <span className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-[#0b1220] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 md:gap-20 items-start">
          <div>
            <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-6">
              Specialized Work
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-md">
              Deeper support for specific IP mandates
            </h2>
            <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
              Beyond core practice areas, IP-MEX supports specific diligence, valuation, dispute, and outsourced counsel mandates for companies and legal teams that need focused technical and legal depth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {specializedCapabilities.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-white/10 bg-white/5 p-7 hover:border-white/30 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-4">
                  {service.parentLabel}
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors">
                  {service.label}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                  Review capability →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="block text-xs tracking-[0.35em] uppercase text-red-600 mb-6">
              Engagement Model
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-neutral-900">
              Built for both immediate mandates and long-term IP leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="border-t-2 border-red-600 pt-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Assess</h3>
              <p className="text-neutral-600 leading-relaxed">
                Review the current portfolio, filing posture, risks, and commercial priorities to identify the right legal path.
              </p>
            </div>
            <div className="border-t-2 border-red-600 pt-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Structure</h3>
              <p className="text-neutral-600 leading-relaxed">
                Design a service scope that fits the business stage, whether that means a focused filing mandate or ongoing strategic counsel.
              </p>
            </div>
            <div className="border-t-2 border-red-600 pt-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Execute</h3>
              <p className="text-neutral-600 leading-relaxed">
                Deliver drafting, filings, opinions, diligence, enforcement analysis, and portfolio guidance with clear commercial context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050b12] text-white py-20 md:py-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.14),transparent_40%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-8">
            Next Step
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
            Build an IP plan that matches the seriousness of the business.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Engage with IP-MEX to define the right mix of patent, trademark, strategy, diligence, and enforcement support for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 px-10 py-4 text-base font-medium transition-colors"
          >
            Schedule Consultation
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}