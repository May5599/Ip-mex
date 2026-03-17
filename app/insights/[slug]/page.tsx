import { INSIGHTS } from "@/app/lib/insights"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"

export type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return INSIGHTS.map(insight => ({
    slug: insight.slug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const insight = INSIGHTS.find(i => i.slug === slug)

  if (!insight) {
    return {
      title: "Article Not Found | IP-MEX",
      description: "The article you're looking for doesn't exist."
    }
  }

  return {
    title: `${insight.title} | IP-MEX Insights`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      authors: [insight.author]
    }
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

function generateTableOfContents(content: string) {
  const headings = content.match(/^(#+)\s+(.+)$/gm) || []
  return headings
    .map(heading => {
      const match = heading.match(/^(#+)\s+(.+)$/)
      if (!match) return null
      const level = match[1].length
      const text = match[2]
      const id = text.toLowerCase().replace(/\s+/g, "-")
      return { level, text, id }
    })
    .filter(Boolean) as Array<{ level: number; text: string; id: string }>
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params
  const insight = INSIGHTS.find(i => i.slug === slug)

  if (!insight) {
    notFound()
  }

  const readingTime = calculateReadingTime(insight.content)
  const toc = generateTableOfContents(insight.content)
  const relatedInsights = INSIGHTS.filter(
    i => i.category === insight.category && i.slug !== insight.slug
  ).slice(0, 3)

  return (
    <main className="bg-white min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/insights" className="hover:text-black transition">
              Insights
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{insight.title}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.35em] text-red-500 font-medium">
            {insight.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-8 leading-tight">
            {insight.title}
          </h1>

          {/* METADATA */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-600 border-b border-neutral-200 pb-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-neutral-900">
                {insight.author}
              </span>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm">{insight.date}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">{readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="bg-white py-12 md:py-16 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[16/9]">
            <img
              src={insight.image}
              alt={insight.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                {insight.content}
              </div>
            </article>

            {/* ARTICLE FOOTER */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <div className="bg-neutral-50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  About the Author
                </h3>
                <p className="text-neutral-600">
                  {insight.author} provides strategic intellectual property advisory services across North America, specializing in patent strategy, trademark protection, and IP innovation policy.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            {/* TABLE OF CONTENTS */}
            {toc.length > 0 && (
              <div className="sticky top-20 bg-neutral-50 rounded-lg p-6 mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4">
                  On This Page
                </h3>
                <nav className="space-y-3">
                  {toc.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className={`block text-sm transition hover:text-red-500 ${
                        item.level === 1
                          ? "text-neutral-900 font-medium"
                          : "text-neutral-600 pl-4"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* RELATED ARTICLES */}
            {relatedInsights.length > 0 && (
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-6">
                  Related Insights
                </h3>
                <div className="space-y-6">
                  {relatedInsights.map(related => (
                    <Link
                      key={related.id}
                      href={`/insights/${related.slug}`}
                      className="group block hover:opacity-75 transition"
                    >
                      <p className="text-xs uppercase tracking-widest text-red-500 font-medium mb-2">
                        {related.category}
                      </p>
                      <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-red-500 transition line-clamp-2">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-neutral-50 py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Need Strategic IP Guidance?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            IP-MEX advises organizations across North America on developing and protecting intellectual property strategies that support innovation and competitive advantage.
          </p>
          <a href="/contact" className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition inline-block">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* ALL INSIGHTS LINK */}
      <section className="bg-white py-12 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition"
          >
            ← Back to all insights
          </Link>
        </div>
      </section>
    </main>
  )
}
