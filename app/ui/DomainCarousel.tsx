"use client";

import { useEffect, useState, useRef } from "react";

type Props = {
  items: string[];
};

export default function VerticalSlidingDomains({ items }: Props) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stepPx, setStepPx] = useState(0);

  // Measure first item width + gap for pixel-accurate translation
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const firstItem = trackRef.current.children[0] as HTMLElement;
      if (!firstItem) return;
      const gap = window.innerWidth >= 1024 ? 40 : 16;
      setStepPx(firstItem.offsetWidth + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-4 lg:gap-10 transition-transform duration-700 ease-in-out"
        style={{
          transform: stepPx > 0 ? `translateX(-${active * stepPx}px)` : undefined,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[88%] sm:min-w-[46%] lg:min-w-[22%]
                       h-[260px] sm:h-[300px] md:h-[360px]
                       bg-white/[0.04]
                       border border-white/15
                       px-6 py-8 md:px-8 md:py-12
                       flex items-center justify-center text-center
                       flex-shrink-0
                       transition-all duration-500"
          >
            <h3 className="text-base md:text-xl font-medium leading-snug">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
