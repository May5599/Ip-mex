export const metadata = {
  title: "About IP-MEX | Canadian IP Law Firm — Patent Agents & IP Lawyers",
  description:
    "IP-MEX Inc. is a Canadian intellectual property law firm. Our team includes IP lawyers called to the Bar, registered patent agents (CPATA/USPTO), and trademark agents with 15–30 years of experience.",
  openGraph: {
    title: "About IP-MEX | IP Law Firm",
    description: "IP lawyers, registered patent agents, and trademark agents serving Canada, the USA, and globally.",
    type: "website"
  }
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#050b12] text-white py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-medium">
            About IP-MEX
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 leading-tight max-w-4xl">
            A Canadian Intellectual Property Law Firm
          </h1>

          <p className="text-slate-300 text-xl mt-10 max-w-2xl leading-relaxed">
            IP-MEX Inc. is an intellectual property law firm based in Kanata, Ontario. Our team of IP lawyers, registered patent agents, and registered trademark agents provides comprehensive IP legal services to clients across Canada, the United States, and internationally.
          </p>

        </div>
      </section>

      {/* FIRM OVERVIEW */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-10 md:mb-24">

            <div>
              <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-medium">
                The Firm
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-8">
                IP law practice built on deep technical expertise
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                IP-MEX Inc. is an intellectual property law firm providing patent, trademark, and IP strategy legal services to clients throughout Canada, the United States, and globally. Our lawyers and registered agents are themselves prolific inventors and scientists, with advanced academic degrees and decades of practical industry experience.
              </p>

              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                We offer the full spectrum of IP legal services—from drafting individual patent applications on an as-needed basis, to establishing and running a fully integrated IP program within a company. This includes IP strategy, patent prosecution, trademark registration, litigation support, IP audits, valuations, and part-time virtual in-house counsel at a fraction of the cost of a full-time hire.
              </p>

              <p className="text-neutral-600 text-lg leading-relaxed">
                Our fees are lower than average fees of Canadian law firms, and the quality is incomparably higher. We work closely with the venture capital community to help build solid IP programs for portfolio companies. References are available upon request.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-12 border border-neutral-200">
                <div className="space-y-8">
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">25+ Years</div>
                    <p className="text-neutral-600">Founder IP management experience at Nortel Networks, Alcatel-Lucent, and global enterprises</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">300+</div>
                    <p className="text-neutral-600">Patent applications filed personally by our lead patent agent across all major technology sectors</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">100+ US Patents</div>
                    <p className="text-neutral-600">Awarded to our senior technical consultant — one of Canada's most prolific inventors in telecommunications</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">Global</div>
                    <p className="text-neutral-600">Active clients in Canada, USA, China, Europe — served efficiently via remote counsel</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TEAM — Dr. Daisy Williams (Featured — has photo) */}
      <section className="bg-neutral-50 py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-medium">
            Our Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-16">
            IP lawyers, registered agents, and prolific inventors
          </h2>

          {/* Dr. Daisy Williams — Featured, with photo */}
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden mb-10">
            <div className="grid lg:grid-cols-[320px_1fr]">

              {/* Photo column */}
              <div className="relative bg-[#0b1220] flex items-stretch min-h-[380px]">
                <img
                  src="/images/team/daisy.jpg"
                  alt="Dr. Daisy Williams — IP Lawyer, Patent Agent, Trademark Agent"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Bio column */}
              <div className="p-10 lg:p-14">

                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-neutral-900">
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
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Called to the Bar (2018), Law Society of Ontario (LSO)</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Registered Patent Agent, CPATA</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Registered Trademark Agent, CPATA</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Registered to practise before the USPTO</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education</p>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Ph.D Physics (Optics-Photonics & Computer Modeling), University of Ottawa</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Juris Doctor (2017), University of Ottawa</li>
                      <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> B.Sc Physics-Mathematics</li>
                    </ul>
                  </div>

                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Dr. Daisy Williams is an IP Lawyer with the Law Society of Ontario (LSO) and a Registered Patent and Trademark Agent (dual registration) with CPATA, with over 10 years of IP experience. She began her career as a Patent Engineer and Patent Agent Trainee at IP-MEX Inc. (2008–2014), drafting patent applications and preparing office action responses before the USPTO and CIPO for hi-tech inventions.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  In 2017–2018, Daisy practiced IP litigation at Aitken Klee LLP, a patent litigation boutique in Ottawa, participating in <em>Teva Canada Limited v. Janssen Inc., 2018 FC 754</em> and co-authoring a chapter in a textbook on Intellectual Property Litigation. She subsequently served as In-House IP Counsel at a large international corporation, managing the company's global patent and trademark portfolio, conducting invention mining sessions, performing IP clearance, and developing the company's IP strategy.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Daisy holds a Ph.D in Physics (Optics-Photonics) from the University of Ottawa's Centre for Research in Photonics — the research group of Canada Research Chair Professor Xiaoyi Bao. She is the author of 5 peer-reviewed publications and inventor of 3 patents in Canada and the USA.
                </p>

              </div>
            </div>
          </div>

          {/* Three team members — no photos, elegant monogram layout */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Dr. Victoria Donnelly */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">

              {/* Monogram header */}
              <div className="bg-[#0b1220] px-10 pt-10 pb-8 flex items-end gap-5">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-xl font-bold tracking-tight">VD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">Dr. Victoria Donnelly</h3>
                  <p className="text-red-400 text-sm font-medium mt-1">Founder · Patent Agent</p>
                  <p className="text-slate-500 text-xs mt-0.5">Ph.D Physics & Math (Computational Physics)</p>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Credentials</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Registered Patent Agent, CPATA</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Registered to practice before the USPTO</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Member, Intellectual Property Institute of Canada (IPIC)</li>
                  </ul>
                </div>

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Ph.D Mathematics & Physics (Computational Physics)</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> M.Sc Physics (Photonics)</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> B.Sc Electronics and Applied Engineering</li>
                  </ul>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Founder of IP-MEX Inc. with 25+ years of IP management experience. Former Senior Manager of IP at Nortel Networks, Director of IP at Tropic Networks (acquired by Alcatel-Lucent), and Director of IP at MosAid, where she managed 5,000+ patents including portfolios for Nokia and Microsoft. Victoria has personally filed over 300 patent applications, holds 8 patents, and is author of 35 scientific publications.
                </p>

              </div>
            </div>

            {/* Dr. Allan Williams */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">

              <div className="bg-[#0b1220] px-10 pt-10 pb-8 flex items-end gap-5">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-xl font-bold tracking-tight">AW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">Dr. Allan Williams</h3>
                  <p className="text-red-400 text-sm font-medium mt-1">Co-Founder · Technical Consultant</p>
                  <p className="text-slate-500 text-xs mt-0.5">Ph.D Physics (Solid State Physics)</p>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Ph.D Solid State Physics</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> M.Sc Radiophysics and Electronics</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> B.Sc Physics/Math</li>
                  </ul>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Co-founder of IP-MEX with 20+ years of consulting experience in intellectual property. Oversees patent engineering, IP valuation, competitive intelligence, validity and infringement searches, and design-around services. Author of 25 scientific publications and 10 patents. Proficient in C, PASCAL, FORTRAN, JavaScript, PERL, and modern internet technologies.
                </p>

              </div>
            </div>

            {/* Dr. Maged Beshai */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">

              <div className="bg-[#0b1220] px-10 pt-10 pb-8 flex items-end gap-5">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-xl font-bold tracking-tight">MB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">Dr. Maged Beshai</h3>
                  <p className="text-red-400 text-sm font-medium mt-1">Senior Patent Consultant</p>
                  <p className="text-slate-500 text-xs mt-0.5">Ph.D Electrical Engineering</p>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Education & Credentials</p>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Ph.D Electrical Engineering, McMaster University</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">—</span> Member, Association of Professional Engineers of Ontario (PEO)</li>
                  </ul>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Senior technical patent consultant and prolific inventor. A Nortel Networks veteran with 30+ years in telecommunications research — his work explored advanced electronic switch/router structures and large-scale optical switching. Awarded over 100 US patents. Author of 20+ technical papers. At IP-MEX, Maged conducts patentability and freedom-to-operate searches, prepares patent applications for software and telecom inventions, and renders technical infringement and validity analyses.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SCIENTIFIC BACKGROUND */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-medium">
            Technical Depth
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-8 max-w-3xl">
            Scientists and engineers who practice IP law
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed max-w-3xl mb-16">
            Every member of the IP-MEX team holds an advanced degree in physics, engineering, or mathematics. This scientific depth means our lawyers and agents communicate with inventors at their level of technical understanding — they understand the invention, not just the paperwork.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border border-neutral-200 rounded-xl p-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Dr. Daisy Williams</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ph.D in Physics (Optics-Photonics & Computer Modeling) from the Centre for Research in Photonics, University of Ottawa. Doctoral thesis on advanced laser light scattering in optical fibers, developing mathematical algorithms and computer simulations for applications in telecommunications, photonic computing, and fiber-optic sensing. Published in 5 prestigious scientific journals. Inventor of 3 patents. Has worked in international laboratories and clean rooms, bringing an inventor's unique perspective to IP law practice.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Dr. Victoria Donnelly</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Technical degrees in three complementary areas: Ph.D Mathematics & Physics (Computational Physics), M.Sc Optics, and B.Eng Electronics. Over 10 years of academic research experience as a University Professor. Author of 35 scientific publications and holder of 8 patents. Technology areas include Optics/Photonics, Aerospace, Software, Telecommunications, Semiconductors, AI, Biomedical Engineering, Clean Technologies, and Chemical Engineering.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Dr. Allan Williams</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ph.D in Solid State Physics, with 20+ years of applied physics research with emphasis on Solid State Physics, Electronics, Semiconductors, and Optics. Author of 25 scientific publications and inventor of 10 patents. Deep expertise in computational methods and software development, including patent software systems and IP competitive intelligence tools.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Dr. Maged Beshai</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ph.D in Electrical Engineering from McMaster University. Nortel Networks veteran with 30 years in the telecommunications industry. Most recent research explored new structures for advanced electronic switches/routers and fast large-scale optical switching for Universal Network deployment. Author of 20+ technical papers in reputable scientific journals. Awarded over 100 US patents.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-neutral-50 py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-medium">
            Legal Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-16">
            Full-spectrum intellectual property legal services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-xl p-10 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Patents & Industrial Designs</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                {[
                  "Patent strategy, opinions & advice",
                  "IP landscaping & patent searches",
                  "Drafting, filing & prosecution (CIPO & USPTO)",
                  "Patent litigation support",
                  "Technical validity & infringement opinions",
                  "IP audit, patent valuation & due diligence",
                  "IP licensing",
                  "Industrial design applications"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-10 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Trademarks</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                {[
                  "Branding strategy, opinions & advice",
                  "Trademark searches",
                  "Preparing, filing & prosecution",
                  "Opposition proceedings",
                  "Trademark litigation support",
                  "IP audit, trademark valuation & due diligence",
                  "Worldwide branding strategy"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-10 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">IP Training & Strategy</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                {[
                  "IP awareness & educational seminars",
                  "Industry-specific IP guidance",
                  "Alignment of IP strategy with business goals",
                  "Part-time virtual in-house counsel",
                  "IP culture building within organizations",
                  "Patent prosecution highway (PPH) strategy",
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

      {/* WHY CHOOSE IP-MEX */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-medium">
            Why IP-MEX
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-16">
            A law firm that works at the technical level of your inventors
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-8">

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Licensed & Registered Counsel</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our team includes IP lawyers called to the Bar (LSO), registered patent agents (CPATA), registered trademark agents (CPATA), and counsel registered before the USPTO — providing full legal authority to prosecute and enforce IP rights in Canada and the United States.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inventor Credibility</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our team members are themselves prolific inventors, collectively holding over 130 patents. Being inventors, we understand the innovation process from the inside and can communicate with technical founders at the highest level of scientific understanding.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Enterprise IP Experience</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our founders built and ran IP programs at Nortel Networks, Alcatel-Lucent, and managed patent portfolios exceeding 5,000 patents. That enterprise-level discipline is applied to every client engagement, regardless of company size.</p>
                </div>
              </div>

            </div>

            <div className="space-y-8">

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Cost-Effective Legal Services</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Our fees are lower than average Canadian law firm rates. The part-time virtual in-house counsel model allows startups and SMEs to build full IP programs at a fraction of the cost of a full-time IP hire — without sacrificing depth or quality.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Global Client Base</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">We serve clients in Canada, the USA, China, and Europe. Distance is not a barrier — our team conducts technical patent interviews efficiently via Zoom, and our deep subject-matter expertise means we get up to speed quickly on any technology.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-red-500 text-2xl font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Venture Capital & Startup Focus</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">We work closely with the Venture Capital community to build solid IP programs for portfolio companies. Strong IP is a critical driver of valuation, and we help startups establish it quickly, correctly, and cost-effectively.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#050b12] text-white py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Speak with our IP lawyers and agents
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Contact IP-MEX Inc. to discuss your patent, trademark, IP strategy, or virtual counsel requirements with our registered legal team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-lg transition"
            >
              Contact Us
            </a>
            <a
              href="tel:613-831-6003"
              className="border border-red-500 hover:bg-red-500 text-white font-semibold px-10 py-4 rounded-lg transition"
            >
              Call: 613-831-6003
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
