import Image from "next/image";
import type { ReactNode } from "react";

const LOGOS = [
  { name: "Pink Elephant", src: "/logos/pink.svg", w: 162, h: 24, dark: true },
  { name: "States of Mind", src: "/logos/states.svg", w: 273, h: 40, dark: true },
  { name: "PsyStandard", src: "/logos/psystandard.svg", w: 120, h: 20, dark: false },
  { name: "Mirari", src: "/logos/mirari.svg", w: 132, h: 32, dark: false },
];

export function BrandWork(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Logos and illustration
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 flex flex-col gap-4 rounded-4xl border p-4 sm:p-6">
        <p className="text-foreground/75 text-[15px] leading-[1.65] tracking-tight sm:text-[16px]">
          Alongside product design, I&nbsp;do visual identity: I&nbsp;designed the logos for the
          whole Pink Elephant ecosystem, and I&nbsp;draw illustrations by&nbsp;hand and with AI
          tools for websites and posters.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {LOGOS.map((l) => (
            <div
              key={l.name}
              className={`flex h-24 items-center justify-center rounded-3xl border border-foreground/8 px-6 ${
                l.dark ? "bg-[#1c2024]" : "bg-white"
              }`}
            >
              <Image
                src={l.src}
                alt={`${l.name} logo`}
                width={l.w}
                height={l.h}
                unoptimized
                className="h-auto max-h-9 w-auto max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
