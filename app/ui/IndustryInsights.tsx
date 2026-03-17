"use client"

import { useState } from "react"

export default function IndustryInsights() {

const [open, setOpen] = useState<number | null>(null)

return ( <section className="py-40 bg-[#050b12] text-white">

  <div className="max-w-7xl mx-auto px-6">

    <span className="text-xs uppercase tracking-[0.35em] text-red-500 mb-6 block">
      Industry Insights
    </span>

    <h2 className="text-3xl font-semibold mb-20">
      Recent Perspectives
    </h2>


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* CARD 1 */}

      <div
        onClick={() => setOpen(1)}
        className="group cursor-pointer backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-300"
      >

        <img
          src="/insights/ai.jpg"
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="p-6 flex flex-col h-[220px]">

          <h3 className="text-lg font-medium mb-3">
            Strategy in the AI Era
          </h3>

          <p className="text-slate-400 text-sm flex-grow">
            How intellectual property frameworks are adapting to rapidly evolving.
          </p>

          <span className="text-red-500 text-xs uppercase tracking-widest mt-8 pt-4 border-t border-white/10">
            Read More
          </span>

        </div>

      </div>



      {/* CARD 2 */}

      <div
        onClick={() => setOpen(2)}
        className="group cursor-pointer backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-300"
      >

        <img
          src="/insights/semiconductor.jpg"
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="p-6 flex flex-col h-[220px]">

          <h3 className="text-lg font-medium mb-3">
            Semiconductor Innovation 
          </h3>

          <p className="text-slate-400 text-sm flex-grow">
            Why semiconductor companies require long-term patent strategy.
          </p>

          <span className="text-red-500 text-xs uppercase tracking-widest mt-8 pt-4 border-t border-white/10">
            Read More
          </span>

        </div>

      </div>



      {/* CARD 3 */}

      <div
        onClick={() => setOpen(3)}
        className="group cursor-pointer backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-300"
      >

        <img
          src="/insights/fintech.jpg"
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="p-6 flex flex-col h-[220px]">

          <h3 className="text-lg font-medium mb-3">
            FinTech and IP Protection
          </h3>

          <p className="text-slate-400 text-sm flex-grow">
            Protecting financial infrastructure platforms operating in complex regulatory environments.
          </p>

          <span className="text-red-500 text-xs uppercase tracking-widest mt-8 pt-4 border-t border-white/10">
            Read More
          </span>

        </div>

      </div>



      {/* CARD 4 */}

      <div
        onClick={() => setOpen(4)}
        className="group cursor-pointer backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-300"
      >

        <img
          src="/insights/biotech.jpg"
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="p-6 flex flex-col h-[220px]">

          <h3 className="text-lg font-medium mb-3">
            Biotech Patent Landscapes
          </h3>

          <p className="text-slate-400 text-sm flex-grow">
            Understanding global patent competition across rapidly advancing biotech platforms.
          </p>

          <span className="text-red-500 text-xs uppercase tracking-widest mt-8 pt-4 border-t border-white/10">
            Read More
          </span>

        </div>

      </div>

    </div>

  </div>



  {/* MODAL */}

  {open !== null && (

    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

      <div className="bg-[#0f1722] max-w-4xl max-h-[85vh] overflow-y-auto w-full rounded-xl overflow-hidden border border-white/10">

        <div className="relative">

          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-6 text-white text-xl"
          >
            ×
          </button>


          {open === 1 && (
            <img src="/insights/ai.jpg" className="w-full h-64 object-cover" />
          )}

          {open === 2 && (
            <img src="/insights/semiconductor.jpg" className="w-full h-64 object-cover" />
          )}

          {open === 3 && (
            <img src="/insights/fintech.jpg" className="w-full h-64 object-cover" />
          )}

          {open === 4 && (
            <img src="/insights/biotech.jpg" className="w-full h-64 object-cover" />
          )}

        </div>


        <div className="p-10">

          {open === 1 && (
            <>
              <h3 className="text-2xl font-semibold mb-6">
                Patent Strategy in the AI Era
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">


Artificial intelligence is accelerating the pace of innovation across nearly every industry. From autonomous systems and financial modeling to medical diagnostics and robotics, AI technologies are transforming how companies create value and maintain competitive advantage. As a result, intellectual property strategy has become a critical component of long-term AI development.

<br /><br />

Traditional patent strategies were designed for inventions that evolve incrementally over time. AI innovation, however, often advances through rapid experimentation and continuous improvement. This makes it more challenging to determine which elements of a system should be protected and when those protections should be filed.

<br /><br />

Leading technology companies increasingly focus on protecting the infrastructure surrounding AI systems, rather than the model outputs themselves. This includes areas such as distributed training architecture, model optimization techniques, data processing pipelines, and deployment environments.
<br /><br />

Another important consideration is the role of data in AI innovation. While datasets themselves are not always patentable, the systems used to curate, structure, and utilize data may represent valuable intellectual property assets.

<br /><br />

Organizations that develop a proactive patent strategy early in the AI lifecycle are better positioned to secure technological leadership. By protecting foundational system architectures and innovation pipelines, companies can create defensible advantages as the global AI ecosystem continues to expand.


              </p>
            </>
          )}



          {open === 2 && (
            <>
              <h3 className="text-2xl font-semibold mb-6">
                Semiconductor Innovation Cycles
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
Semiconductor innovation follows long development cycles that can span several years from initial concept to full commercial deployment. Because of this extended timeline, intellectual property planning must begin early in the engineering lifecycle.
<br /><br />
Unlike software industries where rapid iteration is common, semiconductor companies invest significant resources into research, fabrication processes, and hardware architecture development. Protecting these innovations through well-structured patent portfolios is essential for maintaining long-term competitive advantage.
<br /><br />
Patent strategies in this sector often focus on architecture improvements, fabrication methods, energy efficiency optimization, and chip design techniques. Companies frequently build layered portfolios that protect multiple aspects of a technological platform rather than relying on a single patent.
<br /><br />
Another challenge in semiconductor innovation is the global nature of the industry. Supply chains, manufacturing facilities, and research collaborations often span multiple jurisdictions. This requires coordinated patent filings across key international markets to ensure strong protection.
<br /><br />
Organizations that align their intellectual property strategy closely with engineering roadmaps are better equipped to capture value from breakthrough hardware innovations while reducing the risk of competitive imitation.
              </p>
            </>
          )}



          {open === 3 && (
            <>
              <h3 className="text-2xl font-semibold mb-6">
                FinTech and IP Protection
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
Financial technology companies operate at the intersection of software engineering, financial infrastructure, and regulatory oversight. As digital finance platforms continue to expand globally, protecting the technical systems behind these innovations has become increasingly important.
<br /><br />
Many FinTech platforms rely on complex architectures that enable secure transactions, scalable payment networks, and real-time financial data processing. These underlying systems often represent significant intellectual property opportunities.
<br /><br />
Patent strategies in FinTech commonly focus on transaction processing frameworks, digital identity verification systems, fraud detection technologies, and distributed financial infrastructure. Protecting these innovations allows companies to secure key technological advantages while expanding into new markets.
<br /><br />
Regulation also plays an important role in shaping intellectual property strategy in the financial sector. Because compliance frameworks differ across jurisdictions, companies must ensure that their technology protections align with evolving regulatory requirements.
<br /><br />
By building strong patent portfolios around financial infrastructure technologies, FinTech companies can strengthen their position within rapidly evolving digital financial ecosystems.
              </p>
            </>
          )}



          {open === 4 && (
            <>
              <h3 className="text-2xl font-semibold mb-6">
                Biotechnology Patent Landscapes
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
Biotechnology innovation often requires extensive scientific research, specialized laboratory infrastructure, and significant capital investment. Because of these long development timelines, intellectual property protection plays a critical role in enabling companies to commercialize scientific discoveries.
<br /><br />
Patent portfolios in biotechnology frequently protect therapeutic methods, molecular platforms, genetic engineering technologies, and advanced laboratory processes. These patents allow companies to secure exclusivity around breakthrough treatments and biomedical innovations.
<br /><br />
One of the major challenges in biotechnology intellectual property is navigating complex global patent landscapes. Multiple research institutions and pharmaceutical companies may be pursuing similar scientific directions simultaneously.
<br /><br />
Strategic patent filing across key international markets helps biotechnology firms maintain strong protection while expanding research collaborations and commercialization opportunities.
<br /><br />
As new fields such as gene editing, synthetic biology, and personalized medicine continue to advance, intellectual property strategy will remain a central element of long-term success within the biotechnology sector.
              </p>
            </>
          )}

        </div>

      </div>

    </div>

  )}

</section>

)
}
