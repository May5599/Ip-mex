
"use client"

import { useState } from "react"
import IndustryCard from "../ui/IndustryCard"
import { INDUSTRIES } from "@/app/lib/industries"
import IndustryInsights from "../ui/IndustryInsights"

export default function IndustriesPage() {

  const [active, setActive] = useState<string | null>(null)

  return (

    <main className="relative bg-gradient-to-b from-red-500 via-[#050b12] to-[#101820] text-white pt-48 pb-40 overflow-hidden">

      {/* GLOBAL GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 mb-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="text-xs uppercase tracking-[0.35em] text-[#101820] mb-6 block">
                Industries
              </span>

              <h1 className="text-5xl text-[#101820] lg:text-6xl font-semibold leading-tight mb-8">
                Technology Domains
                <br />
                We Serve
              </h1>

              <p className="text-slate-300 max-w-xl leading-relaxed text-lg mb-10">
                Intellectual property strategy must reflect the technological
                realities of each industry. IP-MEX works with engineering-driven
                companies to build intellectual property programs aligned with
                real innovation cycles, global competition, and long-term
                market leadership.
              </p>

              <div className="w-16 h-[1px] bg-white"></div>

            </div>


            {/* RIGHT SIDE VISUAL COLLAGE */}
            <div className="grid grid-cols-2 gap-4">

              <div className="relative rounded-lg overflow-hidden border border-white/10">
                <img src="/industries/ai.jpg" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10">
                <img src="/industries/software.jpg" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10">
                <img src="/industries/chip.jpg" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10">
                <img src="/industries/biotech.jpg" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

            </div>

          </div>

        </section>


        {/* INDUSTRY GRID */}
        <section className="max-w-6xl mx-auto px-6 mb-32">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start">

            {INDUSTRIES.map((industry) => (

              <IndustryCard
                key={industry.slug}
                industry={industry}
                open={active === industry.slug}
                onToggle={() =>
                  setActive(
                    active === industry.slug ? null : industry.slug
                  )
                }
              />

            ))}

          </div>

        </section>


        

      </div>


      {/* FIRM AUTHORITY (LIGHT SECTION) */}
      <section className="relative py-40 bg-gradient-to-b from-white to-neutral-50 text-neutral-900 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[40rem] h-[40rem] bg-red-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-slate-900/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20 items-start">

          <div className="md:col-span-5">

            <span className="block text-xs tracking-[0.25em] uppercase text-red-600 mb-6">
              Industry Research
            </span>

            <h2 className="text-4xl leading-tight font-semibold max-w-md">
              Understanding technology landscapes before building IP strategy
            </h2>

          </div>

          <div className="md:col-span-7 space-y-10">

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Intellectual property strategy must reflect how innovation
              actually occurs within each industry. IP-MEX studies emerging
              technologies, competitive patent landscapes, and global
              market dynamics to ensure IP programs support real
              engineering progress.
            </p>

            <div className="grid sm:grid-cols-3 gap-10">

              <div>
                <div className="text-3xl font-semibold text-neutral-900">
                  8+
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Technology sectors analyzed
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold text-neutral-900">
                  Global
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Patent landscape coverage
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold text-neutral-900">
                  Deep
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Technical research capability
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      <IndustryInsights />

      CTA
        <section className="max-w-6xl mx-auto px-6 pt-28">

          <div className="grid md:grid-cols-2 gap-20">

            <h2 className="text-3xl font-semibold">
              Discuss Your Technology Landscape
            </h2>

            <div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Every technology company operates within a unique
                intellectual property environment. IP-MEX works with
                founders and leadership teams to design strategies
                that strengthen long-term competitive advantage.
              </p>

              <a
                href="/contact"
                className="
                inline-block
                border border-red-500
                px-8 py-3
                text-sm
                uppercase
                tracking-wide
                text-red-500
                hover:bg-red-500
                hover:text-white
                transition-colors
                "
              >
                Start a Conversation
              </a>

            </div>

          </div>

        </section>

    </main>

  )
}