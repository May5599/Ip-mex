export const metadata = {
  title: "Contact IP-MEX® | IP Lawyers & Patent Agents | Kanata, Ontario",
  description:
    "Contact IP-MEX® Inc. in Kanata, Ontario to speak with our registered IP lawyers and patent agents about patents, trademarks, IP strategy, and virtual in-house counsel services.",
  openGraph: {
    title: "Contact IP-MEX® Inc.",
    description: "Contact our registered IP lawyers and patent agents in Kanata, Ontario for patents, trademarks, IP strategy, and virtual counsel services.",
    type: "website"
  }
}

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#050b12] text-white pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <span className="eyebrow text-red-500">
            Contact
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 leading-tight max-w-3xl">
            Talk to our IP lawyers and registered agents
          </h1>

          <p className="text-slate-300 text-base md:text-lg mt-6 md:mt-8 max-w-2xl leading-relaxed">
            Whether you need to protect a new invention, register a trademark, build an IP program, or get a valuation opinion   our team is ready to help. We serve clients across Canada, the USA, and internationally.
          </p>

        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16 md:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px] gap-10 md:gap-16 items-start">

          {/* LEFT   FORM */}
          <div>
            <span className="eyebrow text-red-500">
              Send a Message
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mt-6 mb-3">
              Tell us about your IP needs
            </h2>
            <p className="text-neutral-500 mb-10">
              Fill in the form below and a member of our legal team will be in touch to discuss your requirements.
            </p>

            <form
              action="https://formsubmit.co/mayank@zapmedia.cc"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New IP-MEX® Website Enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Dr. Jane Smith"
                    className="w-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Acme Technologies Inc."
                    className="w-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (613) 555-0000"
                    className="w-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Service Area <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm bg-white"
                >
                  <option value="" disabled>Select the primary service you need</option>
                  <option value="Patents   Drafting & Prosecution">Patents   Drafting & Prosecution</option>
                  <option value="Patent Strategy & Opinions">Patent Strategy & Opinions</option>
                  <option value="Patent Litigation Support">Patent Litigation Support</option>
                  <option value="Trademarks   Filing & Prosecution">Trademarks   Filing & Prosecution</option>
                  <option value="Trademark Strategy & Clearance">Trademark Strategy & Clearance</option>
                  <option value="IP Audit & Valuation">IP Audit & Valuation</option>
                  <option value="IP Strategy & Virtual Counsel">IP Strategy & Virtual Counsel</option>
                  <option value="Freedom-to-Operate / Infringement Opinion">Freedom-to-Operate / Infringement Opinion</option>
                  <option value="IP Training & Education">IP Training & Education</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Brief Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Briefly describe your technology or IP matter. For example: We have developed a novel optical sensor and would like to discuss patent protection in Canada and the USA."
                  className="w-full border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-neutral-400 mt-2">
                All enquiries are treated as confidential. A member of our legal team will respond within 1–2 business days.
              </p>
            </form>
          </div>

          {/* RIGHT   INFO */}
          <div className="space-y-8">

            <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">Contact Information</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Address</p>
                  <p className="text-neutral-700 leading-relaxed">
                    D2-150 Terence Matthews Crescent<br />
                    Kanata, Ontario, Canada
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Phone</p>
                  <a href="tel:613-831-6003" className="text-neutral-700 hover:text-red-500 transition font-medium">
                    613-831-6003
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Email</p>
                  <a href="mailto:vdonnelly@ip-mex.com" className="text-neutral-700 hover:text-red-500 transition font-medium">
                    vdonnelly@ip-mex.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Remote Consultations</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Distance is not an issue. We conduct efficient technical patent interviews and consultations via Zoom with clients across Canada, the USA, Europe, and Asia.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {[
                  "We review your enquiry and identify the relevant legal area",
                  "A registered lawyer or patent agent contacts you directly",
                  "We discuss your technology or brand and assess IP options",
                  "We propose a clear scope of work and fee structure",
                  "Fees are below average Canadian law firm rates"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0b1220] rounded-2xl p-6 md:p-8 border border-neutral-800">
              <h3 className="text-lg font-semibold text-white mb-3">Our Registrations</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>  Law Society of Ontario (LSO)</li>
                <li>  College of Patent Agents & Trademark Agents (CPATA)</li>
                <li>  US Patent & Trademark Office (USPTO)</li>
                <li>  Canadian Intellectual Property Office (CIPO)</li>
                <li>  Intellectual Property Institute of Canada (IPIC)</li>
                <li>  Association of Professional Engineers of Ontario (PEO)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
