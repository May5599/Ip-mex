import Image from "next/image";
import Link from "next/link";
import { SERVICE_CONTENT, type ServiceContent } from "@/app/lib/serviceContent";
import { SERVICES, type ServiceItem } from "@/app/lib/services";
import VerticalSlidingDomains from "@/app/ui/DomainCarousel";
import ServiceRotator from "@/app/ui/ServiceRotator";

import ContactPrompt from "../sections/ContactPrompt";

type Props = {
  service: ServiceItem;
};

function getFallbackContent(service: ServiceItem): ServiceContent {
  const highlights = service.highlights ?? [];

  return {
    snapshot: {
      positioning:
        "Legal strategy structured around commercially important IP decisions rather than generic portfolio activity.",
      coverage:
        "Support tailored to the specific mandate, business stage, and risk profile of the organization.",
      jurisdiction:
        "Guidance built for Canadian and U.S. intellectual property matters, with cross-border coordination when needed.",
    },
    headings: {
      overview: "What this service is designed to solve",
      scope: "Workstreams commonly covered in this mandate",
      process: "A structured process built for complex IP work",
      whyChoose: "Legal, technical, and commercial context in one team",
      industries: "Where this service is most often applied",
    },
    overview: [
      service.intro,
      `${service.label} work at IP-MEX® is structured around defensible legal positioning, clear commercial priorities, and practical execution for technology-driven organizations.`,
    ],
    deliverables:
      highlights.length > 0
        ? highlights
        : [
            `Strategic review for ${service.label.toLowerCase()}`,
            "Structured legal guidance aligned with commercial objectives",
            "Cross-border support for Canadian and U.S. matters",
          ],
    process: [
      {
        title: "Assess",
        description:
          "Review the legal, technical, and commercial context to identify the right scope and priorities.",
      },
      {
        title: "Structure",
        description:
          "Design a focused work plan aligned with business stage, timing, and risk exposure.",
      },
      {
        title: "Execute",
        description:
          "Deliver the required legal work with clear coordination, documentation, and next-step guidance.",
      },
    ],
    differentiators: [
      {
        title: "Cross-Border Expertise",
        description:
          "Registered before CIPO and the USPTO, with strategies built for Canadian, U.S., and international coordination.",
      },
      {
        title: "Technical Depth",
        description:
          "Scientific and engineering backgrounds that support technically credible legal work for complex subject matter.",
      },
      {
        title: "Strategic Alignment",
        description:
          "Advice is tied to growth, funding, diligence, and long-term enterprise value rather than isolated filings.",
      },
    ],
  };
}

export default function ServiceTemplate({ service }: Props) {
  const content = SERVICE_CONTENT[service.slug] ?? getFallbackContent(service);
  const parentService =
    SERVICES.find(parent => parent.slug === service.slug) ??
    SERVICES.find(parent => parent.children?.some(child => child.slug === service.slug));
  const childServices = service.children ?? [];
  const siblingServices =
    parentService?.children?.filter(child => child.slug !== service.slug) ?? [];
  const relatedServices =
    childServices.length > 0
      ? childServices
      : siblingServices.length > 0
        ? siblingServices
        : SERVICES.filter(item => item.slug !== service.slug).slice(0, 3);
  const focusAreas = service.highlights ?? [];
  const cta = service.cta ?? parentService?.cta;
  const breadcrumbLabel =
    parentService && parentService.slug !== service.slug ? parentService.label : "Services";
  const headings = content.headings ?? {};

  return (
    <main className="bg-white text-neutral-900">
      <section className="relative overflow-hidden bg-[#050b12] text-white pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-28">
        <Image
          src={service.heroImage}
          alt={service.label}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-red-400 mb-6">
              {parentService && parentService.slug !== service.slug
                ? `${breadcrumbLabel} / ${service.label}`
                : "Intellectual Property Law Firm"}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
              {service.label}
            </h1>

            <p className="mt-5 text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.slice(0, 4).map(item => (
                <span
                  key={item}
                  className="border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                {cta?.buttonLabel ?? "Schedule Consultation"}
              </Link>
              <a
                href="#service-scope"
                className="btn-secondary border-white/20 text-white hover:bg-white/10"
              >
                Explore service scope
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="eyebrow text-red-600 mb-3">Positioning</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {content.snapshot.positioning}
            </p>
          </div>
          <div>
            <p className="eyebrow text-red-600 mb-3">Coverage</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {content.snapshot.coverage}
            </p>
          </div>
          <div>
            <p className="eyebrow text-red-600 mb-3">Jurisdiction</p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {content.snapshot.jurisdiction}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-12 md:gap-16 items-start">
          <div>
            <span className="eyebrow text-red-600 mb-6 block">Strategic Overview</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 leading-tight max-w-xl">
              {headings.overview ?? "What this service is designed to solve"}
            </h2>

            <div className="mt-10 space-y-6 text-neutral-600 leading-relaxed text-base md:text-lg max-w-xl">
              {content.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {(focusAreas.length > 0 ? focusAreas : content.deliverables.slice(0, 4)).map(item => (
              <div key={item} className="border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-red-600 mb-3">
                  {focusAreas.length > 0 ? "Key Focus" : "Core Work"}
                </p>
                <p className="text-lg font-semibold text-neutral-900 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-scope" className="relative overflow-hidden py-16 md:py-24 xl:py-32 text-white">
        <div className="absolute inset-0 bg-linear-to-b from-[#0b1220] via-[#0b1220]/95 to-[#0b1220]">
          <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-size-[28px_28px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="eyebrow text-red-500 mb-8 block">Scope of Services</span>
          <h2 className="text-4xl md:text-5xl leading-tight font-semibold mb-20">
            {headings.scope ?? "Workstreams commonly covered in this mandate"}
          </h2>

          <ServiceRotator items={content.deliverables} />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 xl:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="eyebrow text-red-600 mb-6 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              {headings.process ?? "A structured process built for complex IP work"}
            </h2>
          </div>

          <div className="md:col-span-8 grid md:grid-cols-3 gap-6 md:gap-8">
            {content.process.map((step, index) => (
              <div key={step.title} className="border-t-2 border-red-600 pt-6">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-400 mb-4">
                  Step 0{index + 1}
                </p>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-24 xl:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="eyebrow text-red-600 mb-6 block">Why IP-MEX®</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              {headings.whyChoose ?? "Legal, technical, and commercial context in one team"}
            </h2>
          </div>

          <div className="md:col-span-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {content.differentiators.map((item, index) => (
              <div
                key={item.title}
                className={`border border-neutral-200 bg-white p-7 ${index === 2 ? "md:col-span-2" : ""}`}
              >
                <h3 className="text-lg font-semibold mb-4 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed max-w-3xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.industries && (
        <section className="relative overflow-hidden py-16 md:py-24 xl:py-32 text-white">
          <div className="absolute inset-0 bg-linear-to-b from-[#0b1220] via-[#0b1220]/95 to-[#0b1220]" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[48px_48px]" />
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-24">
              <span className="eyebrow text-red-500 mb-6 block">Technical Domains</span>
              <h2 className="text-4xl md:text-5xl font-semibold">
                {headings.industries ?? "Where this service is most often applied"}
              </h2>
            </div>

            <VerticalSlidingDomains items={content.industries} />
          </div>
        </section>
      )}

      <section className="bg-white py-16 md:py-24 xl:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="eyebrow text-red-600 mb-6 block">
              {childServices.length > 0
                ? "Related Capabilities"
                : parentService && parentService.slug !== service.slug
                  ? "Related Services"
                  : "Further Support"}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              {childServices.length > 0
                ? `Sub-services within ${service.label}`
                : parentService && parentService.slug !== service.slug
                  ? `More within ${parentService.label}`
                  : "Adjacent services you may also need"}
            </h2>
          </div>

          <div className={`md:col-span-8 grid gap-6 ${relatedServices.length > 2 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"}`}>
            {relatedServices.map(item => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group border border-neutral-200 bg-neutral-50 p-7 hover:border-red-600 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-red-600 mb-4">{item.tagline}</p>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.label}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">{item.description}</p>
                <span className="text-sm font-medium text-neutral-900 group-hover:text-red-600 transition-colors">
                  View service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {cta && (
        <section className="relative overflow-hidden bg-[#050b12] text-white py-16 md:py-24 xl:py-32 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.14),transparent_40%)]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <span className="eyebrow text-red-500 mb-8 block">Next Step</span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">{cta.title}</h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              {cta.description}
            </p>
            <Link href="/contact" className="btn-primary">
              {cta.buttonLabel}
            </Link>
          </div>
        </section>
      )}

      <ContactPrompt />
    </main>
  );
}
