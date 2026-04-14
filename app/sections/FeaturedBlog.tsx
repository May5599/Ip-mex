// import { getInsightHref, INSIGHTS } from "@/app/lib/insights"
// import Link from "next/link"

// export default function BlogPreview() {
//   const featuredInsight = INSIGHTS[0]
//   const recentInsights = INSIGHTS.slice(1, 4)

//   return (
//     <section className="relative py-16 md:py-44 bg-[#0b1220] text-white overflow-hidden">
//       {/* subtle texture */}
//       <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] bg-size-[36px_36px]" />
//       <div className="absolute inset-0 bg-linear-to-b from-[#0b1220] via-[#0b1220]/90 to-[#05080f]" />
// {/* subtle grid pattern */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[48px_48px]" />
//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
//           {/* Featured */}
//           <div className="lg:col-span-6">
//             <span className="block text-xs tracking-[0.3em] uppercase text-red-500 mb-8">
//               Featured Insight
//             </span>

//             <div className="relative aspect-4/3 mb-10 overflow-hidden">
//               <img
//                 src="/insights/featured.jpg"
//                 alt={featuredInsight.title}
//                 className="absolute inset-0 w-full h-full object-cover opacity-80"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
//             </div>

//             <h2 className="text-2xl md:text-4xl leading-tight font-semibold max-w-lg">
//               {featuredInsight.title}
//             </h2>

//             <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
//               {featuredInsight.excerpt}
//             </p>

//             <div className="mt-10 flex items-center gap-6">
//               <Link
//                 href={getInsightHref(featuredInsight)}
//                 target={featuredInsight.externalUrl ? "_blank" : undefined}
//                 rel={featuredInsight.externalUrl ? "noreferrer" : undefined}
//                 className="text-sm font-medium underline underline-offset-4 hover:text-red-500 transition-colors"
//               >
//                 Read article
//               </Link>
//               <span className="text-sm text-slate-400">
//                 {featuredInsight.date}
//               </span>
//             </div>
//           </div>

//           {/* Recent */}
//           <div className="lg:col-span-6 space-y-12">
//             <span className="block text-xs tracking-[0.3em] uppercase text-slate-400">
//               Latest
//             </span>

//             {recentInsights.map(insight => (
//               <div
//                 key={insight.id}
//                 className="group grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] gap-5 sm:gap-8 items-start border-t border-white/10 pt-8"
//               >
//                 <div className="relative aspect-square overflow-hidden">
//                   <img
//                     src="/insights/.jpg"
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
//                     {insight.date}
//                   </p>
//                   <h3 className="text-xl font-medium leading-snug group-hover:text-red-500 transition-colors">
//                     <Link
//                       href={getInsightHref(insight)}
//                       target={insight.externalUrl ? "_blank" : undefined}
//                       rel={insight.externalUrl ? "noreferrer" : undefined}
//                     >
//                       {insight.title}
//                     </Link>
//                   </h3>
//                   <p className="mt-2 text-slate-300">
//                     {insight.excerpt}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { getInsightHref, INSIGHTS } from "@/app/lib/insights";
import Link from "next/link";

export default function BlogPreview() {
	const featuredInsight = INSIGHTS[0];
	const recentInsights = INSIGHTS.slice(1, 4);

	return (
		<section className="relative py-16 md:py-44 bg-[#0b1220] text-white overflow-hidden">
			{/* texture */}
			<div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] bg-size-[36px_36px]" />
			<div className="absolute inset-0 bg-linear-to-b from-[#0b1220] via-[#0b1220]/90 to-[#05080f]" />

			{/* grid */}
			<div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[48px_48px]" />

			<div className="relative max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">

					{/* Featured */}
					<div className="lg:col-span-6">
						<span className="block text-xs tracking-[0.3em] uppercase text-red-500 mb-8">
							Featured Insight
						</span>

						<div className="relative aspect-4/3 mb-10 overflow-hidden">
							<img
								src={featuredInsight.image}
								alt={featuredInsight.title}
								className="absolute inset-0 w-full h-full object-cover opacity-80"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
						</div>

						<h2 className="text-2xl md:text-4xl leading-tight font-semibold max-w-lg">
							{featuredInsight.title}
						</h2>

						<p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
							{featuredInsight.excerpt}
						</p>

						<div className="mt-10 flex items-center gap-6">
							<Link
								href={getInsightHref(featuredInsight)}
								target={featuredInsight.externalUrl ? "_blank" : undefined}
								rel={featuredInsight.externalUrl ? "noreferrer" : undefined}
								className="text-sm font-medium underline underline-offset-4 hover:text-red-500 transition-colors"
							>
								Read article
							</Link>
							<span className="text-sm text-slate-400">
								{featuredInsight.date}
							</span>
						</div>
					</div>

					{/* Recent */}
					<div className="lg:col-span-6 space-y-12">
						<span className="block text-xs tracking-[0.3em] uppercase text-slate-400">
							Latest
						</span>

						{recentInsights.map((insight) => (
							<div
								key={insight.id}
								className="group grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] gap-5 sm:gap-8 items-start border-t border-white/10 pt-8"
							>
								<div className="relative aspect-square overflow-hidden">

									{/* 👇 MAIN FIX */}
									{insight.variant === "globe" ? (
										<div className="absolute inset-0 flex items-center justify-center bg-white/5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-10 h-10 text-white/70 group-hover:text-red-500 transition-colors"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={1.5}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c2.5 2.5 2.5 16 0 18m0-18c-2.5 2.5-2.5 16 0 18M3 12h18"
												/>
											</svg>
										</div>
									) : (
										<img
											src={insight.image}
											alt={insight.title}
											className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity"
										/>
									)}

								</div>

								<div>
									<p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
										{insight.date}
									</p>

									<h3 className="text-xl font-medium leading-snug group-hover:text-red-500 transition-colors">
										<Link
											href={getInsightHref(insight)}
											target={insight.externalUrl ? "_blank" : undefined}
											rel={insight.externalUrl ? "noreferrer" : undefined}
										>
											{insight.title}
										</Link>
									</h3>

									<p className="mt-2 text-slate-300">
										{insight.excerpt}
									</p>
								</div>
							</div>
						))}
					</div>

				</div>
			</div>
		</section>
	);
}