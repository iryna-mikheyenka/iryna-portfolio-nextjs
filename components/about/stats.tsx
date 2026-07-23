import type { ReactNode } from "react";

/**
 * Every number here is real and traceable to the CV/case studies —
 * no invented client counts or satisfaction percentages.
 */
const STATS = [
  { value: "6+", label: "Years of experience" },
  { value: "6", label: "Case studies shipped" },
  { value: "3", label: "Companies & product teams" },
  { value: "0→1", label: "Products built from scratch" },
];

export function Stats(): ReactNode {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 flex flex-col gap-1 rounded-3xl border p-5 sm:p-6"
        >
          <span className="font-serif text-[2rem] font-medium tracking-tight text-foreground sm:text-[2.5rem]">
            {stat.value}
          </span>
          <span className="text-[13px] leading-tight tracking-tight text-foreground/60 sm:text-[14px]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
