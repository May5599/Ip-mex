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

import { Industry } from "@/app/lib/industries"

type Props = {
industry: Industry
open: boolean
onToggle: () => void
}

export default function IndustryCard({ industry, open, onToggle }: Props) {
return (

<div
  className="
group
rounded-xl
overflow-hidden
border border-white/10
bg-white/[0.03]
backdrop-blur-xl
transition
duration-500
hover:bg-white/[0.06]
hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
hover:-translate-y-1
"
  
>
  

  {/* IMAGE HEADER */}

<div
  onClick={onToggle}
  className="relative h-44 sm:h-48 overflow-hidden cursor-pointer"
>

  <img
    src={industry.image}
    alt={industry.name}
    className="
      w-full
      h-full
      object-cover
      transition
      duration-700
      group-hover:scale-110
    "
  />

  {/* cinematic gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* industry title on image */}
  <div className="absolute bottom-4 left-6 text-sm tracking-wide text-white/90">
    {industry.name}
  </div>

</div>


  {/* CARD CONTENT */}

 <div
  onClick={onToggle}
  className="px-6 sm:px-8 pt-6 pb-8 cursor-pointer"
>

  <p className="text-sm text-slate-300 leading-relaxed">
    {industry.description}
  </p>

  <div className="mt-6 flex items-center text-xs tracking-widest text-red-500">
    Explore
  </div>

</div>



  {/* EXPANDED PANEL */}

  <div
    className={`
    overflow-hidden
    transition-all
    duration-500
    ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
    `}
  >

   <div className="px-6 sm:px-8 pb-8 pt-6 border-t border-white/10">

  <div className="grid md:grid-cols-2 gap-10 text-sm">

    <div>
      <h4 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">
        Innovation Areas
      </h4>

      <ul className="space-y-3 text-slate-300">
        {industry.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-red-500 mt-[3px]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">
        Strategic Challenges
      </h4>

      <ul className="space-y-3 text-slate-300">
        {industry.challenges.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-red-500 mt-[3px]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>

</div>

  </div>

</div>


)
}
