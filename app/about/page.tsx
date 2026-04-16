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

      {/* TEAM   Dr. Daisy Williams (Featured   has photo) */}
      <section className="bg-neutral-50 py-16 md:py-24 xl:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">

          <span className="eyebrow text-red-500">
            Our Team
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mt-6 mb-12 md:mb-16">
            IP lawyers, registered agents, and prolific inventors
          </h2>

          {/* Dr. Daisy Williams   Featured, with photo */}
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden mb-10">
            <div className="grid lg:grid-cols-[320px_1fr]">

              {/* Photo column */}
              <div className="relative bg-[#0b1220] flex items-stretch min-h-95">
                <img
                  src="/images/team/daisy.jpg"
                  alt="Dr. Daisy Williams   IP Lawyer, Patent Agent, Trademark Agent"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Bio column */}
              <div className="p-8 md:p-10 lg:p-12">

                <div className="mb-6">
                  <h3 className="text-3xl font-semibold text-neutral-900">
                    Dr. Daisy Williams
                  </h3>
                  <p className="text-red-500 font-semibold mt-2 text-lg">
                    IP Lawyer · Patent Agent · Trademark Agent
                  </p>
                  <p className="text-neutral-500 text-sm mt-1">Ph.D Physics (Optics-Photonics & Computer Modeling)</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-neutral-100">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Credentials</p>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Registered Patent Agent, CPATA</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Registered Trademark Agent, CPATA</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Registered to practise before the USPTO</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Called to the Bar (2018), Law Society of Ontario (LSO)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education</p>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Ph.D Physics (Optics-Photonics & Computer Modeling), University of Ottawa</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Juris Doctor (2017), University of Ottawa</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> B.Sc Physics-Mathematics</li>
                    </ul>
                  </div>

                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Dr. Daisy Williams is an IP lawyer with the Law Society of Ontario and a registered patent and trademark agent with CPATA. Her experience spans patent drafting and prosecution, trademark strategy, litigation exposure, in-house portfolio management, and IP training.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Before returning to IP-MEX®, Daisy practiced IP litigation in Ottawa and later served as in-house IP counsel for an international company, helping manage global patent and trademark matters. She brings a rare mix of legal, technical, and commercial experience to client strategy.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Experience</p>
                    <p className="text-sm text-neutral-700">10+ years in intellectual property</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Publications</p>
                    <p className="text-sm text-neutral-700">5 peer-reviewed scientific publications</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Inventor</p>
                    <p className="text-sm text-neutral-700">3 patents in Canada and the USA</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Three team members   no photos, elegant monogram layout */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

            {/* Dr. Victoria Donnelly */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">

              {/* Monogram header */}
              <div className="bg-[#0b1220] px-10 pt-10 pb-8 flex items-end gap-5">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center shrink-0">
                  <span className="text-red-400 text-xl font-bold tracking-tight">VD</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">Dr. Victoria Donnelly</h3>
                  <p className="text-red-400 text-sm font-medium mt-1">Founder · Patent Agent</p>
                  <p className="text-slate-500 text-xs mt-0.5">Ph.D Physics & Math (Computational Physics)</p>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Credentials</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Registered Patent Agent, CPATA</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Registered to practice before the USPTO</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Member, Intellectual Property Institute of Canada (IPIC)</li>
                  </ul>
                </div>

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Ph.D Mathematics & Physics (Computational Physics)</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> M.Sc Physics (Photonics)</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> B.Sc Electronics and Applied Engineering</li>
                  </ul>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Founder of IP-MEX® with 25+ years of IP management experience, including senior roles at Nortel Networks, Tropic Networks, and MosAid. She has managed large enterprise portfolios, personally filed 300+ patent applications, holds 8 patents, and has authored 35 scientific publications.
                </p>

              </div>
            </div>

            {/* Dr. Allan Williams */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">

              <div className="bg-[#0b1220] px-10 pt-10 pb-8 flex items-end gap-5">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center shrink-0">
                  <span className="text-red-400 text-xl font-bold tracking-tight">AW</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">Dr. Allan Williams</h3>
                  <p className="text-red-400 text-sm font-medium mt-1">Co-Founder · Technical Consultant</p>
                  <p className="text-slate-500 text-xs mt-0.5">Ph.D Physics (Solid State Physics)</p>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Ph.D Solid State Physics</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> M.Sc Radiophysics and Electronics</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> B.Sc Physics/Math</li>
                  </ul>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Co-founder of IP-MEX® with 20+ years of consulting experience in patent engineering, IP valuation, competitive intelligence, validity analysis, infringement review, and design-around work. He is the author of 25 scientific publications and 10 patents.
                </p>

              </div>
            </div>

            {/* Dr. Maged Beshai */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">

              <div className="bg-[#0b1220] px-10 pt-10 pb-8 flex items-end gap-5">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center shrink-0">
                  <span className="text-red-400 text-xl font-bold tracking-tight">MB</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">Dr. Maged Beshai</h3>
                  <p className="text-red-400 text-sm font-medium mt-1">Senior Patent Consultant</p>
                  <p className="text-slate-500 text-xs mt-0.5">Ph.D Electrical Engineering</p>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education & Credentials</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Ph.D Electrical Engineering, McMaster University</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5"> </span> Member, Association of Professional Engineers of Ontario (PEO)</li>
                  </ul>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Senior technical patent consultant and prolific inventor with 30+ years in telecommunications research. He has been awarded more than 100 US patents and supports patentability, freedom-to-operate, drafting, infringement, and validity analysis for software and telecom matters.
                </p>

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
            Contact IP-MEX® Inc. to discuss your patent, trademark, IP strategy, or virtual counsel requirements with our registered legal team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="btn-primary"
            >
              Contact Us
            </a>
            <a
              href="tel:613-831-6003"
              className="btn-secondary border-red-500 text-white hover:bg-red-500"
            >
              Call: 613-831-6003
            </a>
          </div>

          <p className="text-slate-400 text-sm mt-12">
            IP-MEX® Inc. | D2-150 Terence Matthews Crescent, Kanata, Ontario | Canada
          </p>

        </div>
      </section>

    </main>
  )
}
