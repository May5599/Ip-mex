// import Image from "next/image";
// import type { ServiceItem } from "@/app/lib/services";

// type Props = {
//   service: ServiceItem;
// };

// export default function ServiceTemplate({ service }: Props) {
//   return (
//     <main className="bg-[#050b12] text-white pt-56 pb-40">
//       <section className="relative">
//         <div className="absolute inset-0">
//           <Image
//             src={service.heroImage}
//             alt={service.label}
//             fill
//             className="object-cover opacity-70"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/10" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-40">
//           <span className="block text-xs tracking-[0.3em] uppercase text-red-500 mb-10">
//             Services
//           </span>

//           {/* Title */}
//           <h1 className="text-6xl font-semibold mb-8">
//             {service.label}
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
//             {service.description}
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }



import Image from "next/image";
import type { ServiceItem } from "@/app/lib/services";
import { SERVICE_CONTENT } from "@/app/lib/serviceContent";
import ServiceRotator from "@/app/ui/ServiceRotator";
import VerticalSlidingDomains from "@/app/ui/DomainCarousel";

import ContactPrompt from '../sections/ContactPrompt';
// import { main } from "framer-motion/m";


type Props = {
  service: ServiceItem;
};

export default function ServiceTemplate({ service }: Props) {
  const content = SERVICE_CONTENT[service.slug];

  return (
    <main className="bg-white text-neutral-900">

     {/* HERO */}
<section className="relative h-[65vh] min-h-130 md:h-[75vh]">

  {/* Background */}
  <Image
    src={service.heroImage}
    alt={service.label}
    fill
    priority
    className="object-cover"
  />

  {/* Base overlay */}
  <div className="absolute inset-0 bg-black/65" />

  {/* Left gradient for readability */}
  <div className="absolute inset-0 bg-gradient-to-red from-black/85 via-black/55 to-transparent" />

  {/* Content */}
  <div className="absolute bottom-16 md:bottom-24 left-0 w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-10">

      <div className="max-w-xl md:max-w-2xl border-l-[3px] border-red-600 pl-6 md:pl-8">

        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-gray-300 mb-4 md:mb-6">
          Intellectual Property Advisory
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white">
          {service.label}
        </h1>

      </div>

    </div>
  </div>

</section>
      {/* OVERVIEW */}
 <section className="relative bg-neutral-50 py-28 md:py-36 overflow-hidden">

  {/* Architectural Background Line */}
  <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />

  <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-12 gap-12">

    {/* Left Accent Column */}
    <div className="hidden md:block md:col-span-1 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300" />
    </div>

    {/* Main Content */}
    <div className="md:col-span-8">

      <div className="mb-16">
        <span className="block text-xs tracking-[0.35em] uppercase text-neutral-500 mb-4">
          Service Insight
        </span>

        <h2 className="text-3xl md:text-4xl font-light text-neutral-900">
          Strategic Overview
        </h2>

        <div className="mt-6 w-20 h-[2px] bg-red-600" />
      </div>

      <div className="space-y-10 text-[17px] md:text-lg text-neutral-700 leading-relaxed max-w-3xl">

        {content.overview.map((paragraph, index) => (
          <p
            key={index}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
          >
            {paragraph}
          </p>
        ))}

      </div>
    </div>

  </div>
</section>







{/* DELIVERABLES */}
<section className="relative py-20 md:py-40 overflow-hidden text-white">

  {/* Background System */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/95 to-[#0b1220]">
    <div className="absolute inset-0 opacity-[0.15] 
                      bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] 
                      bg-size-[28px_28px]" />
  </div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-8">
      Deliverables
    </span>

    <h2 className="text-4xl md:text-5xl leading-tight font-semibold mb-20">
      Scope of Services
    </h2>

    <ServiceRotator items={content.deliverables} />

  </div>
</section>






      <section className="relative bg-white py-32 md:py-40">

  {/* Subtle top divider */}
  <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />

  <div className="max-w-7xl mx-auto px-6 md:px-10">

    <div className="grid md:grid-cols-12 gap-y-20 gap-x-16">

      {/* Section Heading */}
      <div className="md:col-span-4">
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
          Why<br />IP-MEX
        </h2>

        <div className="mt-6 w-16 h-[2px] bg-red-600" />
      </div>

      {/* Content Grid */}
      <div className="md:col-span-8 grid md:grid-cols-2 gap-16">

        <div className="border-l-2 border-neutral-200 pl-8">
          <h3 className="text-lg font-semibold mb-4">
            Cross-Border Expertise
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Registered before CIPO and USPTO, we advise on Canadian, U.S., and international filings including PCT and EPO pathways.
          </p>
        </div>

        <div className="border-l-2 border-neutral-200 pl-8">
          <h3 className="text-lg font-semibold mb-4">
            Technical Depth
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Our professionals hold advanced degrees in engineering and applied sciences with decades of industry experience.
          </p>
        </div>

        <div className="border-l-2 border-neutral-200 pl-8 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">
            Strategic Alignment
          </h3>
          <p className="text-neutral-600 leading-relaxed max-w-2xl">
            We integrate patent strategy with business objectives to build defensible and scalable IP portfolios aligned with long-term growth.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>



{/* INDUSTRIES */}
{content.industries && (
  <section className="relative py-20 md:py-44 overflow-hidden text-white">

    {/* Background Base */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/95 to-[#0b1220]" />

    {/* Check / Grid Texture */}
    {/* subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />

    {/* Subtle vignette depth */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

    <div className="relative max-w-7xl mx-auto px-6">

      <div className="text-center mb-24">
        <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-6">
          Expertise
        </span>

        <h2 className="text-4xl md:text-5xl font-semibold">
          Technical Domains
        </h2>
      </div>

      <VerticalSlidingDomains items={content.industries} />

    </div>
  </section>
)}


      

      {/* CONTACT */}
 
        <ContactPrompt />
        


    </main>
  );
}