// "use client";

// import { useEffect, useState } from "react";

// type Props = {
//   items: string[];
// };

// export default function ServiceRotator({ items }: Props) {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   useEffect(() => {
//     if (items.length === 0) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [items.length]);

//   return (
//     <div className="grid md:grid-cols-12 gap-16 items-center">

//       {/* Navigation */}
//       <div className="md:col-span-4 space-y-5">
//         {items.map((item, index) => (
//           <button
//             key={item}
//             onClick={() => setActiveIndex(index)}
//             className={`block text-left w-full transition-colors duration-300 ${
//               activeIndex === index
//                 ? "text-neutral-900 font-medium"
//                 : "text-neutral-400 hover:text-neutral-600"
//             }`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Feature Panel */}
//       <div className="md:col-span-8">
//         <div className="relative bg-white border border-neutral-200 p-14 min-h-[280px] transition-all duration-500">

//           {/* Accent Bar */}
//           <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

//           {/* Number */}
//           <div className="text-5xl font-light text-neutral-200 mb-6">
//             {String(activeIndex + 1).padStart(2, "0")}
//           </div>

//           {/* Content */}
//           <p
//             key={activeIndex}
//             className="text-xl text-neutral-900 leading-relaxed max-w-2xl transition-opacity duration-500"
//           >
//             {items[activeIndex]}
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";

// type Props = {
//   items: string[];
// };

// export default function ServiceRotator({ items }: Props) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Prevent overflow if items change
//   useEffect(() => {
//     if (activeIndex >= items.length) {
//       setActiveIndex(0);
//     }
//   }, [items.length, activeIndex]);

//   useEffect(() => {
//     if (items.length === 0) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [items.length]);

//   if (items.length === 0) return null;

//   return (
//     <div className="grid md:grid-cols-12 gap-16 items-center">

//       {/* Navigation */}
//       <div className="md:col-span-4 space-y-5">
//         {items.map((item, index) => (
//           <button
//             key={`${item}-${index}`}
//             onClick={() => setActiveIndex(index)}
//             className={`block text-left w-full transition-colors duration-300 ${
//               activeIndex === index
//                 ? "text-neutral-900 font-medium"
//                 : "text-neutral-400 hover:text-neutral-600"
//             }`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Feature Panel */}
//       <div className="md:col-span-8">
//         <div className="relative bg-neutral-100 border border-neutral-300 p-16 min-h-[300px] transition-all duration-500">

//           <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

//           <div className="pl-6">
//             <div className="text-6xl font-light text-neutral-300 mb-8">
//               {String(activeIndex + 1).padStart(2, "0")}
//             </div>

//             <p
//               key={activeIndex}
//               className="text-xl md:text-2xl text-neutral-900 leading-relaxed max-w-3xl"
//             >
//               {items[activeIndex]}
//             </p>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// type Props = {
//   items: string[];
// };

// export default function ServiceRotator({ items }: Props) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (items.length === 0) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [items.length]);

//   if (items.length === 0) return null;

//   return (
//     <div className="relative w-full">

//       {/* Main Card */}
//       <div className="relative w-full bg-neutral-100 border border-neutral-300 
//                       shadow-[0_20px_60px_rgba(0,0,0,0.06)] 
//                       px-10 md:px-20 py-20 md:py-28 
//                       min-h-[380px] 
//                       transition-all duration-500">

//         {/* Accent Top Line */}
//         <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />

//         {/* Number */}
//         <div className="text-7xl font-light text-neutral-300 mb-10">
//           {String(activeIndex + 1).padStart(2, "0")}
//         </div>

//         {/* Content */}
//         <p
//           key={activeIndex}
//           className="text-2xl md:text-3xl text-neutral-900 
//                      leading-relaxed max-w-4xl 
//                      transition-all duration-500"
//         >
//           {items[activeIndex]}
//         </p>
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex justify-center items-center gap-6 mt-10">

//         {/* Previous */}
//         <button
//           onClick={() =>
//             setActiveIndex((prev) =>
//               prev === 0 ? items.length - 1 : prev - 1
//             )
//           }
//           className="w-10 h-10 rounded-full border border-neutral-400 
//                      flex items-center justify-center 
//                      hover:bg-neutral-900 hover:text-white transition"
//         >
//           ‹
//         </button>

//         {/* Dots */}
//         <div className="flex gap-3">
//           {items.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 activeIndex === index
//                   ? "bg-neutral-900 scale-110"
//                   : "bg-neutral-400 hover:bg-neutral-600"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Next */}
//         <button
//           onClick={() =>
//             setActiveIndex((prev) => (prev + 1) % items.length)
//           }
//           className="w-10 h-10 rounded-full border border-neutral-400 
//                      flex items-center justify-center 
//                      hover:bg-neutral-900 hover:text-white transition"
//         >
//           ›
//         </button>

//       </div>

//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// type Props = {
//   items: string[];
// };

// export default function ServiceRotator({ items }: Props) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (items.length === 0) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [items.length]);

//   if (items.length === 0) return null;

//   return (
//     <section className="relative py-40 overflow-hidden text-white">

//       {/* Background System */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/95 to-[#0b1220]">
//         <div className="absolute inset-0 opacity-[0.12] 
//                         bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] 
//                         [background-size:28px_28px]" />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6">

//         {/* Main Card */}
//         <div className="relative bg-white/10 backdrop-blur-md 
//                         border border-white/15 
//                         p-16 md:p-24 
//                         min-h-[360px]
//                         transition-all duration-500">

//           {/* Accent Line */}
//           <div className="absolute top-0 left-0 h-[2px] w-full bg-red-500" />

//           <div className="max-w-4xl">

//             {/* Number */}
//             <div className="text-6xl font-light text-white/20 mb-10">
//               {String(activeIndex + 1).padStart(2, "0")}
//             </div>

//             {/* Title */}
//             <p
//               key={activeIndex}
//               className="text-2xl md:text-3xl font-medium leading-relaxed"
//             >
//               {items[activeIndex]}
//             </p>

//           </div>
//         </div>

//         {/* Controls */}
//         <div className="flex justify-center items-center gap-8 mt-14">

//           {/* Prev */}
//           <button
//             onClick={() =>
//               setActiveIndex((prev) =>
//                 prev === 0 ? items.length - 1 : prev - 1
//               )
//             }
//             className="w-9 h-9 rounded-full border border-white/30 
//                        flex items-center justify-center 
//                        hover:border-white transition"
//           >
//             ‹
//           </button>

//           {/* Dots */}
//           <div className="flex gap-3">
//             {items.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all ${
//                   activeIndex === index
//                     ? "bg-red-500"
//                     : "bg-white/30 hover:bg-white/60"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Next */}
//           <button
//             onClick={() =>
//               setActiveIndex((prev) => (prev + 1) % items.length)
//             }
//             className="w-9 h-9 rounded-full border border-white/30 
//                        flex items-center justify-center 
//                        hover:border-white transition"
//           >
//             ›
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

type Props = {
  items: string[];
};

export default function ServiceRotator({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="relative max-w-4xl mx-auto">

      {/* Main Panel */}
      <div className="relative border border-white/15 bg-white/[0.03]">

        {/* Top Accent */}
        <div className="h-[2px] w-full bg-red-500" />

        <div className="px-8 py-12 sm:px-16 sm:py-20 md:px-24 md:py-28 text-center">

          {/* Number */}
          <div className="text-sm tracking-[0.4em] uppercase text-white/40 mb-10">
            {String(activeIndex + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <p
            key={activeIndex}
            className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug"
          >
            {items[activeIndex]}
          </p>

        </div>

      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-12 mt-16">

        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? items.length - 1 : prev - 1
            )
          }
          className="w-10 h-10 border border-white/25 
                     flex items-center justify-center 
                     hover:border-white transition"
        >
          ‹
        </button>

        <div className="flex gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-red-500"
                  : "bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % items.length)
          }
          className="w-10 h-10 border border-white/25 
                     flex items-center justify-center 
                     hover:border-white transition"
        >
          ›
        </button>

      </div>

    </div>
  );
}