import Image from "next/image";
import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";

type Company = { name: string; color: string };

const COMPANIES: Company[] = [
  { name: "Pink Elephant Group", color: "#5b6ee1" },
  { name: "X Labs", color: "#2f8f7a" },
  { name: "QR Charge", color: "#d97a4f" },
];

export function WorkHeroPanel(): ReactNode {
  return (
    <FadeIn className="flex flex-col gap-6 md:sticky md:top-28 md:self-start">
      <div className="flex items-center gap-3.5">
        <div className="ring-foreground/10 relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1">
          <Image
            src="/iryna.webp"
            alt="Iryna Mikheyenka"
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-[16px] font-medium tracking-tight text-foreground">
            Iryna Mikheyenka
          </p>
          <p className="text-[14px] tracking-tight text-foreground/55">
            Product designer, UX/UI enthusiast
          </p>
        </div>
      </div>

      <p className="text-[17px] leading-[1.55] tracking-tight text-foreground/70">
        I design digital products — from complex healthcare and fintech
        platforms to AI-driven consumer apps — focused on clarity, usability
        and design systems that scale.
      </p>

      <div className="flex items-center gap-2 text-[13px] tracking-tight text-foreground/60">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
        Open to select roles &amp; projects
      </div>

      <HeroCtas />

      <div className="border-foreground/8 mt-2 flex flex-col gap-2.5 border-t pt-6">
        <p className="text-[12px] font-semibold tracking-tight text-foreground/45 uppercase">
          Worked with
        </p>
        <div className="flex flex-wrap gap-2">
          {COMPANIES.map((company) => (
            <span
              key={company.name}
              className="border-foreground/8 inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1.5 text-[12.5px] tracking-tight text-foreground/70"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: company.color }}
              />
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
