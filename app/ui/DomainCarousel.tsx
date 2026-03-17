"use client";

import { useEffect, useState } from "react";

type Props = {
  items: string[];
};

export default function VerticalSlidingDomains({ items }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden">

      <div
        className="flex gap-10 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${active * 25}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[22%] h-[360px] 
                       bg-white/[0.04] 
                       border border-white/15
                       px-8 py-12
                       flex items-center justify-center text-center
                       transition-all duration-500"
          >
            <h3 className="text-xl font-medium leading-snug">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}