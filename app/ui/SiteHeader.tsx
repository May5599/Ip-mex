// app/ui/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import { NAVIGATION } from "@/app/lib/navigation";

export default function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
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

  const services = NAVIGATION.find(i => i.label === "Services");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        mounted ? "bg-transparent" : "bg-[#050b12]"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-10 text-sm tracking-widest uppercase">
            <li
              onMouseEnter={() => setMegaOpen(true)}
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

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-50 relative"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Desktop Mega Menu */}
      <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#050b12] z-40 overflow-y-auto">
          <nav className="px-6 py-10">
            <ul className="space-y-2 text-white">

              {/* Services with accordion */}
              <li>
                <button
                  onClick={() => setServicesOpen(prev => !prev)}
                  className="w-full flex items-center justify-between py-4 text-base tracking-widest uppercase text-white/80 border-b border-white/10"
                >
                  Services
                  <span
                    className={`text-lg transition-transform duration-200 ${
                      servicesOpen ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>

                {servicesOpen && services?.children && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {services.children.map(item => (
                      <li key={item.label}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-sm text-white/70 hover:text-white border-b border-white/5"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="block py-3 text-sm text-white/50 font-medium">
                            {item.label}
                          </span>
                        )}

                        {item.children && (
                          <ul className="ml-4 space-y-0.5">
                            {item.children.map(sub => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href!}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-white/55 hover:text-white/90"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}

                    <li>
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-sm text-red-500 hover:text-red-400 font-medium"
                      >
                        View all services →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/industries"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-base tracking-widest uppercase text-white/80 hover:text-white border-b border-white/10"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  href="/insights"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-base tracking-widest uppercase text-white/80 hover:text-white border-b border-white/10"
                >
                  Insights
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-base tracking-widest uppercase text-white/80 hover:text-white border-b border-white/10"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-base tracking-widest uppercase text-white/80 hover:text-white border-b border-white/10"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-4 bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors"
              >
                Speak with IP-MEX
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
