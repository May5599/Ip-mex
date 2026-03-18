import Link from "next/link"
import { INDUSTRIES } from "@/app/lib/industries"
import { INSIGHTS } from "@/app/lib/insights"

export const metadata = {
  title: "Industries | IP-MEX — IP Law for Technology Companies",
  description:
    "IP-MEX represents technology companies across AI, semiconductors, software, biotech, fintech, telecom, cybersecurity, and autonomous systems.",
}

export default function IndustriesPage() {
  return (
    <main className="bg-[#050b12] text-white">

      {/* HERO */}
      <section className="relative pt-56 pb-40 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>
