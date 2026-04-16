import { getInsightHref, INSIGHTS } from "@/app/lib/insights"
import Link from "next/link"

export const metadata = {
  title: "IP & Patent Insights | IP-MEX® | Strategy & Commentary",
  description:
    "Expert commentary and analysis on patent strategy, trademark law, IP valuation, and technology innovation from IP-MEX® — Canada's IP law firm.",
  openGraph: {
    title: "IP & Patent Insights | IP-MEX®",
    description: "Expert commentary and analysis on patent strategy, trademark law, IP valuation, and technology innovation from IP-MEX® — Canada's IP law firm.",
    type: "website"
  }
}

export default function InsightsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050b12] text-white pt-24 pb-16 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.16),transparent_34%)]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.35em] uppercase text-red-500">
              Insights
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 leading-tight max-w-3xl">
              Practical IP insights for companies building, protecting, and scaling innovation.
            </h1>

            <p className="text-slate-300 mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">
              Articles and commentary on patents, trademarks, disputes, and innovation strategy across Canada and the USA.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-red-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <div className="relative aspect-16/10 overflow-hidden border-b border-white/10">
                <img
                  src={INSIGHTS[0].image}
                  alt={INSIGHTS[0].title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050b12] via-[#050b12]/35 to-transparent" />
                <div className="absolute left-6 bottom-6 right-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-red-400 mb-3">
                    ADR Article Series
                  </p>
                  <h2 className="text-xl sm:text-2xl font-semibold leading-tight max-w-md">
                    {INSIGHTS[0].title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                {INSIGHTS.map((article) => (
                  <Link
                    key={article.id}
                    href={getInsightHref(article)}
                    target={article.externalUrl ? "_blank" : undefined}
                    rel={article.externalUrl ? "noreferrer" : undefined}
                    className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 hover:text-red-400 transition-colors"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                        {article.date}
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed text-white/90">
                        {article.title}
                      </p>
                    </div>
                    <span className="text-red-400 text-sm shrink-0 mt-1">Read</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="bg-white py-16 md:py-32">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative rounded-xl overflow-hidden shadow-xl aspect-4/3">

            <img
              src={INSIGHTS[0].image}
              alt={INSIGHTS[0].title}
              className="w-full h-full object-cover"
            />

          </div>

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-red-500">
              Featured Analysis
            </span>

            <h2 className="text-4xl font-semibold text-neutral-900 mt-6 mb-6">
              {INSIGHTS[0].title}
            </h2>

            <p className="text-neutral-600 text-lg mb-8">
              {INSIGHTS[0].excerpt}
            </p>

            <Link
              href={getInsightHref(INSIGHTS[0])}
              target={INSIGHTS[0].externalUrl ? "_blank" : undefined}
              rel={INSIGHTS[0].externalUrl ? "noreferrer" : undefined}
              className="text-red-500 font-medium hover:text-black transition"
            >
              Read Full Article →
            </Link>

          </div>

        </div>

      </section>

      {/* LATEST PUBLICATIONS */}
      <section className="bg-neutral-50 py-16 md:py-32">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-neutral-900 mb-20">
            Latest Publications
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {INSIGHTS.map(article=>(
              <Link
                key={article.id}
                href={getInsightHref(article)}
                target={article.externalUrl ? "_blank" : undefined}
                rel={article.externalUrl ? "noreferrer" : undefined}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col"
              >

                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">

                  <span className="text-xs uppercase tracking-widest text-red-500">
                    {article.category}
                  </span>

                  <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-4 group-hover:text-red-500 transition">
                    {article.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">{article.date}</span>
                    <span className="text-sm text-red-500 font-medium">
                      Read more →
                    </span>
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* RESEARCH METRICS */}
      <section className="bg-white py-16 md:py-32">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">

          <div>
            <div className="text-5xl font-semibold text-neutral-900 mb-3">
              50k+
            </div>
            <p className="text-neutral-500">
              Patents analyzed
            </p>
          </div>

          <div>
            <div className="text-5xl font-semibold text-neutral-900 mb-3">
              20+
            </div>
            <p className="text-neutral-500">
              Technology sectors studied
            </p>
          </div>

          <div>
            <div className="text-5xl font-semibold text-neutral-900 mb-3">
              North America
            </div>
            <p className="text-neutral-500">
              Research coverage
            </p>
          </div>

        </div>

      </section>

      {/* ARTICLES & PUBLICATIONS */}
      <section className="bg-neutral-100 py-16 md:py-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="max-w-3xl mb-20">

            <span className="text-xs tracking-[0.35em] uppercase text-red-500">
              IP-MEX® Research
            </span>

            <h2 className="text-4xl font-semibold text-neutral-900 mt-6 mb-6">
              Articles & Publications
            </h2>

            <p className="text-neutral-600 text-lg">
              IP-MEX® publishes research articles, industry analysis,
              and commentary on intellectual property strategy,
              innovation policy, and emerging technology sectors.
            </p>

          </div>

          {/* PUBLICATION LIST */}
          <div className="divide-y divide-neutral-300">

            {INSIGHTS.slice(0,4).map((article)=>(

              <Link
                key={article.id}
                href={getInsightHref(article)}
                target={article.externalUrl ? "_blank" : undefined}
                rel={article.externalUrl ? "noreferrer" : undefined}
                className="grid md:grid-cols-[80px_1fr_auto] gap-6 py-10 items-center group hover:opacity-75 transition"
              >

                <div className="hidden md:block rounded-lg overflow-hidden aspect-square shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>

                  <span className="text-xs uppercase tracking-widest text-red-500">
                    {article.category}
                  </span>

                  <h3 className="text-2xl font-semibold text-neutral-900 mt-3 mb-3 group-hover:text-red-500 transition">
                    {article.title}
                  </h3>

                  <p className="text-neutral-600 max-w-2xl">
                    {article.excerpt}
                  </p>

                  <div className="text-sm text-neutral-400 mt-4">
                    {article.author} • {article.date}
                  </div>

                </div>

                <div>

                  <span className="text-red-500 font-medium group-hover:translate-x-2 transition inline-block">
                    Read →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#050b12] text-white py-16 md:py-32">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <h2 className="text-4xl font-semibold">
            Stay informed about emerging technology
            and intellectual property trends
          </h2>

          <div>

            <p className="text-slate-300 mb-8">
              Subscribe to receive research insights and commentary from
              IP-MEX® on global technology innovation and patent strategy.
            </p>

            <a href="/contact" className="border border-red-500 px-8 py-3 text-red-500 hover:bg-red-500 hover:text-white transition inline-block">
              Contact Us →
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}
