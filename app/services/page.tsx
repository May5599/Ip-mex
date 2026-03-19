// import Link from "next/link";
// import { SERVICES } from "@/app/lib/services";

// export const metadata = {
//   title: "Services | IP-MEX",
// };

// export default function ServicesPage() {
//   return (
//     <main className="bg-[#050b12] text-white pt-56 pb-40">
//       <div className="max-w-7xl mx-auto px-6">
//         <span className="block text-xs tracking-[0.3em] uppercase text-red-500 mb-10">
//           Services
//         </span>

//         <h1 className="text-5xl font-semibold mb-20">
//           Intellectual Property Services
//         </h1>

//         <div className="grid md:grid-cols-2 gap-16">
//           {SERVICES.map(service => (
//             <Link
//               key={service.slug}
//               href={`/services/${service.slug}`}
//               className="group border border-white/15 p-12 hover:border-white/40 transition"
//             >
//               <h2 className="text-3xl font-semibold mb-6 group-hover:text-red-500 transition-colors">
//                 {service.title}
//               </h2>
//               <p className="text-slate-300">
//                 {service.shortDescription}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/app/lib/services";

export const metadata = {
  title: "Services | IP-MEX Law Firm - Patents, Trademarks, IP Strategy",
  description: "Comprehensive intellectual property legal services including patent strategy, trademark protection, IP litigation support, and part-time virtual counsel.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#050b12] text-white">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-60 md:pb-40 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center">

          <span className="block text-xs tracking-[0.35em] uppercase text-red-500 mb-8">
            Services
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 md:mb-10 leading-tight">
            Strategic Intellectual Property Advisory
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            We deliver structured, defensible intellectual property strategies 
            aligned with innovation, commercialization, and long-term enterprise value.
          </p>
        </div>
      </section>


      {/* FEATURED SERVICES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {SERVICES.filter(s => s.featured).map(service => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden border border-white/10 hover:border-white/40 transition"
            >
              <div className="relative h-80">
                <Image
                  src={service.heroImage}
                  alt={service.label}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="p-12 relative">
                <h2 className="text-3xl font-semibold mb-4 group-hover:text-red-500 transition">
                  {service.label}
                </h2>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>


      {/* ALL SERVICES GRID */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-semibold mb-20">
            Complete Service Offering
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-white/10 p-10 hover:border-white/40 transition space-y-6"
              >
                <h3 className="text-2xl font-medium group-hover:text-red-500 transition">
                  {service.label}
                </h3>

                <p className="text-neutral-300 leading-relaxed">
                  {service.description}
                </p>

                <span className="text-sm uppercase tracking-wider text-neutral-400 group-hover:text-white transition">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* SUB SERVICES SECTION */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-semibold mb-20">
            Specialized Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {SERVICES.filter(s => s.children).map(parent =>
              parent.children?.map(child => (
                <Link
                  key={child.slug}
                  href={`/services/${child.slug}`}
                  className="group border border-white/10 p-10 hover:border-white/40 transition"
                >
                  <h3 className="text-2xl font-medium mb-4 group-hover:text-red-500 transition">
                    {child.label}
                  </h3>

                  <p className="text-neutral-300 leading-relaxed">
                    {child.description}
                  </p>
                </Link>
              ))
            )}

          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-40 px-6 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            Structure Your Intellectual Property Strategy
          </h2>

          <p className="text-xl text-neutral-300 leading-relaxed mb-12">
            Engage with our advisors to develop a defensible, commercially aligned IP framework tailored to your organization.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 px-12 py-4 text-lg font-medium transition"
          >
            Schedule Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}