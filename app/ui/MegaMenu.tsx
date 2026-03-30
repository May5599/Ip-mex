// app/ui/MegaMenu.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "@/app/lib/navigation";

const SERVICE_IMAGES: Record<string, string> = {
  Patents: "/images/services/patents.jpg",
  Trademarks: "/images/services/trademarks.jpg",
  "IP Strategy": "/images/services/strategy.jpg",
  Enforcement: "/images/services/enforcement.jpg",
  Education: "/images/services/education.jpg",
};

export default function MegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const services = NAVIGATION.find(i => i.label === "Services")!;
  const [active, setActive] = useState(services.children?.[0]);

  if (!open) return null;

  return (
    <div className="absolute left-0 top-full w-full bg-[#050b12]/95 backdrop-blur-xl text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-12 gap-20">
        {/* Column 1 */}
        <div className="col-span-3">
          <p className="text-xs tracking-[0.3em] uppercase text-red-500">
            Services
          </p>

          <p className="mt-8 text-base leading-relaxed text-slate-300">
            End-to-end intellectual property legal services for innovation-driven
            organizations.
          </p>

          <Link
            href="/services"
            onClick={onClose}
            className="inline-block mt-10 text-base font-medium text-red-500 hover:text-red-400"
          >
            View all services →
          </Link>
        </div>

        {/* Column 2 */}
        <div className="col-span-5">
          <ul className="space-y-8">
            {services.children?.map(item => (
              <li key={item.label}>
                <button
                  onMouseEnter={() => setActive(item)}
                  onClick={() => {
                    if (item.href) {
                      onClose();
                      window.location.href = item.href;
                    }
                  }}
                  className={`block text-3xl font-semibold tracking-tight transition-colors ${
                    active?.label === item.label
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>

                {active?.label === item.label && item.children && (
                  <ul className="mt-5 ml-2 space-y-3">
                    {item.children.map(sub => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href!}
                          onClick={onClose}
                          className="block text-base text-white/65 hover:text-white transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-4 flex items-start">
          {active && (
            <div className="relative w-full aspect-square border border-white/15">
              <Image
                src={SERVICE_IMAGES[active.label]}
                alt={active.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-semibold">{active.label}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
