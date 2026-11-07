import type { ReactNode } from "react";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Product design",
    items: ["Product Discovery", "User Flows", "Information Architecture", "Wireframing", "Prototyping", "Interaction Design", "Responsive Web & Mobile"],
  },
  {
    title: "Research & data",
    items: ["User Interviews", "Usability Testing", "A/B Testing", "Hypothesis Testing", "Funnel Analytics", "Competitor Research"],
  },
  {
    title: "Systems & delivery",
    items: ["Design Systems", "UI Kits", "Component Libraries", "Accessibility", "Developer Handoff"],
  },
  {
    title: "Visual & graphic design",
    items: ["Hand-drawn Illustration", "Logo Design", "Branding", "Posters", "Website Visuals", "AI Image Generation"],
  },
  {
    title: "Domains",
    items: ["Healthcare & Mental Health", "AI/ML", "Web3", "Fintech", "SaaS", "Consumer Platforms"],
  },
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        Core skills
      </h3>
      <div className="flex flex-col gap-5 rounded-4xl border border-foreground/5 bg-foreground/2 p-4 sm:p-6 dark:bg-foreground/5">
        {GROUPS.map((g) => (
          <div key={g.title} className="flex flex-col gap-2.5">
            <span className="text-[13px] font-medium tracking-tight text-foreground/55">
              {g.title}
            </span>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/8 bg-background px-3.5 py-1.5 text-[14px] tracking-tight text-foreground/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
