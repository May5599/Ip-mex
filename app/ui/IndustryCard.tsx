// // "use client"

// // import type { Industry } from "@/app/lib/industries"

// // type Props = {
// //   industry: Industry
// //   open: boolean
// //   onToggle: () => void
// // }

// // export default function IndustryCard({ industry, open, onToggle }: Props) {
// //   return (
// //     <div
// //   onClick={onToggle}
// //   className="
// //   cursor-pointer
// //   rounded-xl
// //   p-8

// //   bg-white/[0.04]
// //   backdrop-blur-xl

// //   border border-white/10

// //   shadow-[0_20px_60px_rgba(0,0,0,0.35)]

// //   transition-all duration-300
// //   hover:border-red-500/60
// //   hover:bg-white/[0.06]
// //   hover:-translate-y-1
// // "
// // ><h3 className="text-xl font-semibold tracking-tight mb-3">
// //   {industry.name}
// // </h3>

// // <p className="text-sm text-slate-300 leading-relaxed">
// //   {industry.description}
// // </p>

// //      {open && (
// //   <div className="mt-8 pt-6 border-t border-white/10 space-y-6">

// //     <img
// //       src={industry.image}
// //       className="rounded-lg w-full h-48 object-cover"
// //     />

// //     <div className="grid md:grid-cols-2 gap-6 text-sm">

// //       <div>
// //         <h4 className="text-red-500 text-xs uppercase tracking-wider mb-3">
// //           Innovation Areas
// //         </h4>

// //         <ul className="space-y-2 text-slate-300">
// //           {industry.highlights.map((item) => (
// //             <li key={item}>• {item}</li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div>
// //         <h4 className="text-red-500 text-xs uppercase tracking-wider mb-3">
// //           Challenges
// //         </h4>

// //         <ul className="space-y-2 text-slate-300">
// //           {industry.challenges.map((item) => (
// //             <li key={item}>• {item}</li>
// //           ))}
// //         </ul>
// //       </div>

// //     </div>
// //   </div>
// // )}
// //     </div>
// //   )
// // }

// "use client"

// import { Industry } from "@/app/lib/industries"

// type Props = {
//   industry: Industry
//   open: boolean
//   onToggle: () => void
// }

// export default function IndustryCard({ industry, open, onToggle }: Props) {
//   return (
//     <div
//       onClick={onToggle}
//       className="
//       cursor-pointer
//       rounded-xl
//       p-8
//       bg-white/5
//       backdrop-blur-md
//       border border-white/10
//       transition
//       hover:bg-white/10
//       "
//     >
//       <h3 className="text-xl font-semibold mb-3">
//         {industry.name}
//       </h3>

//       <p className="text-sm text-slate-300">
//         {industry.description}
//       </p>

//       {open && (
//         <div className="mt-8 pt-6 border-t border-white/10 space-y-6">

//           <img
//             src={industry.image}
//             alt={industry.name}
//             className="w-full h-44 object-cover rounded-md"
//           />

//           <div className="grid md:grid-cols-2 gap-6 text-sm">

//             <div>
//               <h4 className="text-slate-400 text-xs uppercase mb-3">
//                 Innovation Areas
//               </h4>

//               <ul className="space-y-1 text-slate-300">
//                 {industry.highlights.map((item) => (
//                   <li key={item}>• {item}</li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-slate-400 text-xs uppercase mb-3">
//                 Challenges
//               </h4>

//               <ul className="space-y-1 text-slate-300">
//                 {industry.challenges.map((item) => (
//                   <li key={item}>• {item}</li>
//                 ))}
//               </ul>
//             </div>

//           </div>

//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { Industry } from "@/app/lib/industries"

type Props = {
  industry: Industry
}

export default function IndustryCard({ industry }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-500 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="block w-full text-left"
      >
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <img
            src={industry.image}
            alt={industry.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute left-6 bottom-5 right-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-red-300 mb-3">
              Industry Focus
            </p>
            <h3 className="text-xl font-semibold text-white leading-tight">
              {industry.name}
            </h3>
          </div>
        </div>

        <div className="px-6 sm:px-7 pt-6 pb-7">
          <p className="text-sm text-neutral-600 leading-relaxed min-h-18">
            {industry.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
            <span className="text-xs uppercase tracking-[0.25em] text-red-600">
              Explore Sector
            </span>
            <span className={`text-sm text-neutral-500 transition-transform ${open ? "rotate-45" : ""}`}>
              +
            </span>
          </div>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-140 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-neutral-200 bg-neutral-50 px-6 sm:px-7 py-6">
          <div className="grid gap-8 text-sm lg:grid-cols-2">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Innovation Areas
              </h4>

              <ul className="space-y-3 text-neutral-700">
                {industry.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.75 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Strategic Challenges
              </h4>

              <ul className="space-y-3 text-neutral-700">
                {industry.challenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.75 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
