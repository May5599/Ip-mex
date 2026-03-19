import { INSIGHTS } from "@/app/lib/insights"
import Link from "next/link"

export const metadata = {
  title: "Insights | IP-MEX",
  description:
    "Research, publications, and commentary on intellectual property strategy and technology innovation.",
  openGraph: {
    title: "IP-MEX Insights",
    description: "Research and analysis on intellectual property strategy and innovation",
    type: "website"
  }
}

export default function InsightsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="bg-[#050b12] text-white pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="text-xs tracking-[0.35em] uppercase text-red-500">
              Insights
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mt-8 leading-tight">
              Research, publications, and commentary on
              intellectual property strategy and
              technology innovation
            </h1>

            <p className="text-slate-300 mt-10 max-w-xl text-lg">
              IP-MEX publishes research and analysis on global patent landscapes,
              innovation strategy, and emerging technology sectors across Canada
              and the United States.
            </p>

          </div>

          {/* FLOATING IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* glow background */}
            <div className="absolute w-[420px] h-[420px] bg-red-500/10 blur-[120px] rounded-full"></div>

            <img
              src="/hero1.png"
              className="
              relative
              w-[240px] sm:w-[320px]
              lg:w-[420px]
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
              floating-image
              "
            />

          </div>

        </div>

      </section>

      {/* FEATURED INSIGHT */}
      <section className="bg-white py-16 md:py-32">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">

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
              href={`/insights/${INSIGHTS[0].slug}`}
              className="text-red-500 font-medium hover:text-black transition"
            >
              Read Full Analysis →
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
                href={`/insights/${article.slug}`}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col"
              >

                <div className="relative overflow-hidden aspect-[16/9]">
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
              IP-MEX Research
            </span>

            <h2 className="text-4xl font-semibold text-neutral-900 mt-6 mb-6">
              Articles & Publications
            </h2>

            <p className="text-neutral-600 text-lg">
              IP-MEX publishes research articles, industry analysis,
              and commentary on intellectual property strategy,
              innovation policy, and emerging technology sectors.
            </p>

          </div>

          {/* PUBLICATION LIST */}
          <div className="divide-y divide-neutral-300">

            {INSIGHTS.slice(0,4).map((article)=>(

              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="grid md:grid-cols-[80px_1fr_auto] gap-6 py-10 items-center group hover:opacity-75 transition"
              >

                <div className="hidden md:block rounded-lg overflow-hidden aspect-square flex-shrink-0">
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
              IP-MEX on global technology innovation and patent strategy.
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
