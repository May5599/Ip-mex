import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-slate-300">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03070d] via-[#01050a] to-black" />

      {/* subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:44px_44px]" />

      {/* soft glow */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20">
          {/* brand */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg tracking-widest mb-6">
              IP-MEX
            </h3>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              IP-MEX Inc. is a Canadian intellectual property law firm specializing in patents, trademarks, and IP strategy services. Registered patent agents and IP lawyers serving clients across Canada and North America.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <p>IP-MEX Inc.</p>
              <p>D2-150 Terence Matthews Cres.</p>
              <p>Kanata, ON K2M 1X4, Canada</p>
            </div>
          </div>

          {/* navigation */}
          <div className="md:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">
                Services
              </p>
              <ul className="space-y-4 text-sm">
                <li><Link href="/services/patents" className="hover:text-white">Patents</Link></li>
                <li><Link href="/services/trademarks" className="hover:text-white">Trademarks</Link></li>
                <li><Link href="/services/ip-strategy" className="hover:text-white">IP Strategy</Link></li>
                <li><Link href="/services/enforcement" className="hover:text-white">Enforcement</Link></li>
                <li><Link href="/services/education" className="hover:text-white">Education</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">
                Company
              </p>
              <ul className="space-y-4 text-sm">
                <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
                <li><Link href="/insights" className="hover:text-white">Insights</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* contact */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <a href="tel:613-831-6003" className="hover:text-white transition">
                  Tel: 613-831-6003
                </a>
              </p>
              <p>
                <a href="mailto:vdonnelly@ip-mex.com" className="text-red-500 hover:text-red-400 transition">
                  vdonnelly@ip-mex.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-12 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} IP-MEX Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Intellectual Property Law Firm · Kanata, Ontario · Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
