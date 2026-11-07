import type { ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  place: string;
  projects?: string;
  brand: string;
  bullets: string[];
};

const ENTRIES: Entry[] = [
  {
    company: "Pink Elephant Group",
    role: "Senior Product Designer",
    period: "Dec 2024 – Present",
    place: "Remote",
    projects: "States of Mind, PsyStandard, Mirari",
    brand: "#5b6ee1",
    bullets: [
      "Lead end-to-end product design across the Pink Elephant ecosystem: mental health, education and provider discovery products.",
      "Built States of Mind from 0→1 and continue to develop its structure, user journeys, interface logic and scalable design patterns.",
      "Design provider discovery, verification, onboarding, education and assessment flows that make complex mental health products clearer, more trustworthy and easier to use.",
      "Redesigned acquisition funnels and quiz experiences, increasing qualified lead conversion by 16%.",
      "Improved internal provider verification workflows, reducing operational cycle time from 7 days to 2 days.",
      "Use AI tools for concept development, visual exploration, rapid prototyping and early validation of design directions.",
    ],
  },
  {
    company: "X Labs",
    role: "Product Designer",
    period: "Feb 2024 – Dec 2024",
    place: "Minsk, Belarus",
    projects: "JGGL",
    brand: "#2f8f7a",
    bullets: [
      "Designed AI- and ML-driven web and mobile product experiences focused on human functional state analysis and behavioral insights.",
      "Ran user interviews, usability testing, competitor research and data analysis to find user needs, friction points and product opportunities.",
      "Turned research findings and analytics into product improvements, helping the team prioritize design decisions with higher business impact.",
      "Worked closely with product managers, analysts and engineers across discovery, validation and delivery.",
      "Contributed to feature planning and backlog prioritization, improving development speed and user retention.",
    ],
  },
  {
    company: "QR Charge",
    role: "Product Designer",
    period: "Aug 2023 – Dec 2024",
    place: "Remote",
    brand: "#d97a4f",
    bullets: [
      "Designed UX/UI for a mobile app and website for a power bank rental service operating across European markets.",
      "Improved core flows for scanning, renting, returning devices, wallet interactions and error states.",
      "Updated the design system and UI kit for consistency, accessibility and scalability.",
      "Created product and marketing visuals to support acquisition, brand recognition and product communication.",
    ],
  },
  {
    company: "BELHARD Academy",
    role: "UX/UI Design Lecturer",
    period: "Jun 2023 – Jan 2025",
    place: "Part-time",
    brand: "#3c4a63",
    bullets: [
      "Adapted and improved UX/UI course materials to reflect current product design practices.",
      "Mentored beginner designers through practical assignments, portfolio tasks and structured design feedback.",
      "Created project-based learning scenarios that show real product design workflows.",
    ],
  },
  {
    company: "Duck.design",
    role: "UX/UI Designer",
    period: "Sep 2022 – Mar 2023",
    place: "Remote",
    brand: "#c94f6d",
    bullets: [
      "Designed web and mobile interfaces for international clients across community, SaaS and digital platform products.",
      "Improved UX for the Korean platform Momoboard by simplifying navigation and adapting flows to local expectations.",
      "Redesigned information architecture and content hierarchy for Conduit and Clevmate, improving usability and engagement.",
      "Used competitor research, client analytics and UX audits to create clearer, more scalable interface solutions.",
    ],
  },
  {
    company: "SENLA",
    role: "UX/UI Designer",
    period: "Aug 2020 – Nov 2021",
    place: "Minsk, Belarus",
    brand: "#1f2733",
    bullets: [
      "Designed UX/UI for enterprise and insurance products, including dashboards and workflow-based internal tools.",
      "Simplified complex data-heavy screens, map interactions and supervisor workflows to improve operational efficiency.",
      "Ran UX analysis to find navigation and usability issues and turned them into clearer interface solutions.",
      "Worked with developers to ensure accurate implementation and smooth design handoff.",
    ],
  },
  {
    company: "Freelance",
    role: "UX/UI Designer",
    period: "Jan 2019 – Aug 2022",
    place: "Remote",
    brand: "#8a6d3b",
    bullets: [
      "Delivered UX/UI solutions for startups and small businesses across web and mobile products.",
      "Led full design cycles from research and user flows to wireframes, high-fidelity UI and developer handoff.",
      "Designed interfaces across fintech, e-commerce and data-driven platforms.",
    ],
  },
];

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <ul className="flex flex-col gap-3">
        {ENTRIES.map((entry) => (
          <li
            key={`${entry.company}-${entry.period}`}
            className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-2 sm:p-3"
          >
            <div className="bg-background border-foreground/5 rounded-3xl border p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center text-[18px] font-semibold text-white"
                  style={{ borderRadius: 14, backgroundColor: entry.brand }}
                >
                  {entry.company.charAt(0)}
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>
                  <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}
                  </span>
                </div>
              </div>
              <p className="text-foreground/55 mt-3 text-[13px] tracking-tight sm:text-[14px]">
                {entry.period} · {entry.place}
                {entry.projects ? ` · Projects: ${entry.projects}` : ""}
              </p>
              <ul className="text-foreground/75 mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] tracking-tight sm:text-[16px]">
                {entry.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
