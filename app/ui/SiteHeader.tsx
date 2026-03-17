// app/ui/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        mounted ? "bg-transparent" : "bg-[#050b12]"
      }`}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between text-white">
        <Link
          href="/"
          className="text-lg tracking-[0.35em] font-semibold"
        >
          IP-MEX
        </Link>

        <nav>
          <ul className="flex gap-10 text-sm tracking-widest uppercase">
            <li
              onMouseEnter={() => setOpen(true)}
              className="relative text-white/80 hover:text-white cursor-default"
            >
              Services
            </li>

            <li>
              <Link href="/industries" className="text-white/80 hover:text-white">
                Industries
              </Link>
            </li>

            <li>
              <Link href="/insights" className="text-white/80 hover:text-white">
                Insights
              </Link>
            </li>

            <li>
              <Link href="/about" className="text-white/80 hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="text-white/80 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
