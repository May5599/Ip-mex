// app/ui/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change / scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        mounted ? "bg-transparent" : "bg-[#050b12]"
      }`}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between text-white">
        <Link
          href="/"
          className="text-lg tracking-[0.35em] font-semibold"
          onClick={() => setMobileOpen(false)}
        >
          IP-MEX
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050b12]/98 backdrop-blur-xl text-white border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="px-6 py-8 space-y-1">
            <div className="pb-4 border-b border-white/10 mb-4">
              <p className="text-xs tracking-[0.3em] uppercase text-red-500 mb-4">Services</p>
              <ul className="space-y-3 pl-2">
                <li>
                  <Link
                    href="/services/patents"
                    className="block text-white/80 hover:text-white py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/trademarks"
                    className="block text-white/80 hover:text-white py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    Trademarks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ip-strategy"
                    className="block text-white/80 hover:text-white py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    IP Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/enforcement"
                    className="block text-white/80 hover:text-white py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    Enforcement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/education"
                    className="block text-white/80 hover:text-white py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block text-red-500 hover:text-red-400 py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    View all services →
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/industries"
              className="block text-white/80 hover:text-white py-3 text-sm tracking-widest uppercase border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/insights"
              className="block text-white/80 hover:text-white py-3 text-sm tracking-widest uppercase border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="block text-white/80 hover:text-white py-3 text-sm tracking-widest uppercase border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-white/80 hover:text-white py-3 text-sm tracking-widest uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
