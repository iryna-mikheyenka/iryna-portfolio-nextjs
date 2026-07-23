import type { ReactNode } from "react";

const SERVICES = [
  {
    title: "Product Design",
    items: [
      "Product & UX design",
      "User flows & wireframing",
      "Prototyping",
      "Responsive UI design",
    ],
  },
  {
    title: "Design Systems",
    items: [
      "Design systems & UI kits",
      "Information architecture",
      "Accessibility",
      "Developer handoff",
    ],
  },
  {
    title: "Research & Testing",
    items: [
      "User research & interviews",
      "Usability testing",
      "Competitor research",
      "Iteration from findings",
    ],
  },
];

export function Services(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Services
      </h3>
      <div className="flex flex-col gap-3">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="font-serif text-[15px] font-medium text-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col gap-3">
                <h4 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground">
                  {service.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-foreground/8 bg-background px-3.5 py-1.5 text-[13px] tracking-tight text-foreground/70 sm:text-[14px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
