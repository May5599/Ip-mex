const ITEMS = [
  {
    title: "Patent Strategy & Portfolios",
    desc: "End-to-end patent strategy aligned with long-term business and innovation goals.",
  },
  {
    title: "Trademark & Brand Protection",
    desc: "Strategic trademark development and enforcement across key markets.",
  },
  {
    title: "IP Audits & Valuation",
    desc: "Objective IP audits and portfolio valuation for investment and transactions.",
  },
  {
    title: "Infringement & Enforcement",
    desc: "Technical infringement analysis and enforcement support for high-tech IP.",
  },
  {
    title: "Freedom-to-Operate & Searches",
    desc: "Landscape, prior-art, and FTO searches to reduce risk and exposure.",
  },
  {
    title: "Virtual IP Counsel",
    desc: "Embedded IP leadership for startups and growing technology companies.",
  },
];


export default function Capabilities() {
  return (
    <section className="relative py-40 overflow-hidden text-white">
      {/* patterned translucent background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/90 to-[#0b1220]">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-24">
          <span className="block text-xs tracking-[0.25em] uppercase text-red-500 mb-6">
            Capabilities
          </span>

          <h2 className="text-4xl leading-tight font-semibold">
            Core intellectual property capabilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {ITEMS.map(item => (
            <div
              key={item.title}
              className="group relative p-10 bg-white/10 backdrop-blur-md border border-white/15 hover:border-white/30 transition"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />

              <h3 className="text-lg font-medium mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
