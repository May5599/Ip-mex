export const metadata = {
  title: "About IP-MEX® | Canadian IP Law Firm | Patent Agents & IP Lawyers",
  description:
    "IP-MEX® is a Canadian IP law firm with IP lawyers (LSO), registered patent and trademark agents (CPATA/USPTO) holding PhDs and 20+ years of experience in Canada and the USA.",
  openGraph: {
    title: "About IP-MEX® | IP Law Firm",
    description: "IP-MEX® is a Canadian IP law firm with IP lawyers (LSO), registered patent and trademark agents (CPATA/USPTO) holding PhDs and 20+ years of experience.",
    type: "website"
  }
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#050b12] text-white pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <span className="eyebrow text-red-500">
            About IP-MEX®
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 leading-tight max-w-4xl">
            Technical IP counsel for companies building and protecting innovation
          </h1>

          <p className="text-slate-300 text-base md:text-lg mt-6 md:mt-8 max-w-2xl leading-relaxed">
            IP-MEX® is an intellectual property law firm in Ottawa, Ontario. We advise clients across Canada and the USA on patents, trademarks, IP strategy, disputes, and long-term portfolio development.
          </p>

        </div>
      </section>

      {/* FIRM OVERVIEW */}
      <section className="py-16 md:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">

            <div>
              <span className="eyebrow text-red-500">
                The Firm
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mt-6 mb-8">
                A law firm built on technical depth
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                IP-MEX® combines legal credentials with advanced scientific and engineering backgrounds. Our lawyers, patent agents, trademark agents, and technical consultants work with inventors, founders, in-house teams, and investors on complex intellectual property matters.
              </p>

              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Our work ranges from patent drafting and trademark prosecution to IP strategy, valuation, due diligence, litigation support, and part-time virtual in-house counsel. The focus is practical: build defensible rights, reduce avoidable risk, and align IP with business growth.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
              <div className="relative bg-linear-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 md:p-12 border border-neutral-200">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">25+ Years</div>
                    <p className="text-neutral-600">Founder IP management experience at Nortel Networks, Alcatel-Lucent, and global enterprises</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">300+</div>
                    <p className="text-neutral-600">Patent applications filed personally across major technology sectors</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">100+ US Patents</div>
                    <p className="text-neutral-600">Awarded to our senior technical consultant in telecommunications</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">Global</div>
                    <p className="text-neutral-600">Clients across Canada, the USA, Europe, and beyond</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-neutral-50 py-16 md:py-24 xl:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">

          <span className="eyebrow text-red-500">
            Legal Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mt-6 mb-12 md:mb-16">
            Full-spectrum intellectual property legal services
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

            <div className="bg-white rounded-xl p-8 md:p-10 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Patents & Industrial Designs</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                {[
                  "Patent strategy, opinions & advice",
                  "Patent searches & landscaping",
                  "Drafting, filing & prosecution (CIPO & USPTO)",
                  "Patent litigation support",
                  "Technical validity & infringement opinions",
                  "IP audit, valuation & due diligence"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-10 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Trademarks</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                {[
                  "Branding strategy, opinions & advice",
                  "Trademark searches",
                  "Preparing, filing & prosecution",
                  "Opposition proceedings",
                  "Trademark litigation support",
                  "IP audit, valuation & due diligence"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-10 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">IP Training & Strategy</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                {[
                  "IP awareness & educational seminars",
                  "Industry-specific IP guidance",
                  "Alignment of IP strategy with business goals",
                  "Part-time virtual in-house counsel",
                  "IP competitive intelligence"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE IP-MEX® */}
      <section className="py-16 md:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-6">

          <span className="eyebrow text-red-500">
            Why IP-MEX®
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mt-6 mb-12 md:mb-16">
            A law firm that works at the technical level of your inventors
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            <div className="space-y-8">

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Licensed & Registered Counsel</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our team includes lawyers called to the Bar in Ontario, registered patent agents, registered trademark agents, and professionals registered before the USPTO.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inventor Credibility</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our team members are also inventors, with more than 130 patents collectively. That perspective helps us work credibly with technical founders, scientists, and engineering teams.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Enterprise IP Experience</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our founders built and managed IP programs at Nortel Networks, Alcatel-Lucent, and other major enterprises, including portfolios exceeding 5,000 patents.</p>
                </div>
              </div>

            </div>

            <div className="space-y-8">

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Cost-Effective Legal Services</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our part-time virtual in-house counsel model gives startups and SMEs access to meaningful IP support without the cost of a full-time internal hire.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Global Client Base</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">We serve clients across Canada, the USA, Europe, and other markets, working efficiently across jurisdictions and remote teams.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Venture Capital & Startup Focus</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">We work with startups, growth companies, and venture-backed teams to build IP programs that support valuation, fundraising, and long-term defensibility.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#050b12] text-white py-16 md:py-24 xl:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            Speak with our IP lawyers and agents
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Contact IP-MEX Inc. to discuss your patent, trademark, IP strategy, or virtual counsel requirements with our registered legal team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="btn-primary"
            >
              Contact Us
            </a>
          </div>

          <p className="text-slate-400 text-sm mt-12">
            IP-MEX Inc. | D2-150 Terence Matthews Crescent, Kanata, Ontario | Canada
          </p>

        </div>
      </section>

    </main>
  )
}
