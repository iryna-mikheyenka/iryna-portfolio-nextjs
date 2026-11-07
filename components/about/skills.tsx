import type { ReactNode } from "react";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Product & UX Design",
    items: [
      "Product Design",
      "UX/UI Design",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
    ],
  },
  {
    title: "Key industries",
    items: [
      "Mental Health",
      "Healthcare",
      "AI/ML",
      "Fintech",
      "Web3",
      "SaaS",
      "Consumer Platforms",
      "Digital Education",
    ],
  },
  {
    title: "Research & Validation",
    items: [
      "User Research",
      "Competitor Research",
      "Usability Testing",
      "Data Analysis",
      "Hypothesis Testing",
      "User Feedback Analysis",
    ],
  },
  {
    title: "Systems & Delivery",
    items: [
      "Design Systems",
      "UI Kits",
      "Component Libraries",
      "Accessibility",
      "Responsive Design",
      "Developer Handoff",
    ],
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
