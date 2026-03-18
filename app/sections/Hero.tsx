import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-40 bg-gradient-to-br from-[#050b12] via-[#0b1c2d] to-[#02070d] text-white overflow-hidden pt-36 pb-24 md:pt-56 md:pb-40">
      <div className="absolute inset-0">
        <Image
          src="/images/main1.jpg"
          alt="Intellectual property strategy"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.25em] uppercase text-red-500">
              Intellectual Property Advisory
            </span>
            <span className="h-px w-16 bg-red-500/70" />
          </div>

          <h1 className="mt-8 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] md:leading-[1.02]">
            Strategic IP Guidance
            <br />
            for Innovation-Led
            <br />
            Organizations
          </h1>

          <p className="mt-6 md:mt-8 max-w-md text-base md:text-lg text-slate-300">
            IP-MEX advises technology-driven companies on protecting, enforcing,
            and maximizing the value of their intellectual property.
          </p>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-5 md:gap-8">
            <Link
              href="/contact"
              className="px-7 py-3 text-sm font-medium bg-red-600 hover:bg-red-500 transition-colors"
            >
              Speak with IP-MEX
            </Link>

            <Link
              href="/services"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Explore services →
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative bg-white/5 backdrop-blur-md border border-white/15 p-12 space-y-10">
            <div>
              <p className="text-4xl font-semibold">20+</p>
              <p className="mt-2 text-sm text-slate-300">
                Years of IP Experience
              </p>
            </div>

            <div className="h-px bg-white/15" />

            <div>
              <p className="text-4xl font-semibold">500+</p>
              <p className="mt-2 text-sm text-slate-300">
                Patent Portfolios Managed
              </p>
            </div>

            <div className="h-px bg-white/15" />

            <div>
              <p className="text-4xl font-semibold">Global</p>
              <p className="mt-2 text-sm text-slate-300">
                Technology-Focused Clients
              </p>
            </div>

            <div className="h-px bg-white/15" />

            <div>
              <p className="text-4xl font-semibold">End-to-End</p>
              <p className="mt-2 text-sm text-slate-300">
                IP Strategy & Enforcement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
