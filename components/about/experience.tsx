import type { ReactNode } from "react";

import { nb } from "@/lib/nbsp";

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
    period: "Spring 2025 \u2013 Present",
    place: "Remote",
    projects: "States of Mind, PsyStandard, Mirari (mental health, education and provider discovery platforms). Pink Elephant Group spun off from AmA Invest",
    brand: "#5b6ee1",
    bullets: [
      "Built States of Mind from 0→1: information architecture, user journeys, growth logic, responsive web UI for mobile and desktop and a unified UI system with component rules.",
      "Increased qualified leads by 16% in 12 weeks by redesigning the provider-matching CTA and the quiz acquisition flow.",
      "Grew provider profile views per session from 2% to 8% by optimising key funnels and interaction patterns.",
      "Validated product hypotheses through quizzes, paywall experiments and funnel tests before full-scale development.",
      "Increased sessions by 22% in 3–6 months through structured content and an internal linking strategy.",
      "Created website visuals, illustrations and posters in Photoshop, Illustrator and AI tools (Midjourney, Higgsfield, ChatGPT), keeping a consistent visual style across products.",
      "Introduced AI-assisted workflows: ~30% less time on analytics and research, 20% less development scope churn.",
    ],
  },
  {
    company: "X-Labs",
    role: "Product Designer",
    period: "Feb 2024 \u2013 Dec 2024",
    place: "Minsk, Belarus",
    projects: "JGGL (AI-powered social network), Blockchain Sports (Web3 football ecosystem)",
    brand: "#2f8f7a",
    bullets: [
      "Designed web and mobile products in AI/ML and Web3, including research on users' functional states.",
      "Ran user interviews, usability tests, data analysis and competitor research to find key user needs and friction points.",
      "Prioritised the design backlog by business impact; with the PM, defined milestones that shortened launch time and improved retention.",
    ],
  },
  {
    company: "Freelance",
    role: "Product Designer",
    period: "Aug 2023 \u2013 Jan 2024",
    place: "Remote",
    projects: "QR Charge (power bank rental, Europe), QRTips (cashless tipping)",
    brand: "#d97a4f",
    bullets: [
      "Designed the QR Charge mobile app and website from scratch: scan, rent, return, wallet and error flows; updated the design system and UI kit for accessibility.",
      "Designed QRTips from scratch: UX structure, QR-based tipping flows and a fast payment interface.",
    ],
  },
  {
    company: "BELHARD Academy",
    role: "UX/UI Design Lecturer",
    period: "Jun 2023 \u2013 Jan 2025",
    place: "Part-time",
    brand: "#3c4a63",
    bullets: [
      "Taught UX/UI design as a part-time lecturer.",
    ],
  },
  {
    company: "Duck.design",
    role: "UX/UI Designer",
    period: "Sep 2022 \u2013 Mar 2023",
    place: "Remote",
    brand: "#c94f6d",
    bullets: [
      "Improved UX of Momoboard (Korean market) for iOS, Android and web.",
      "Reworked information architecture of Conduit and Clevmate, reducing churn and increasing engagement.",
    ],
  },
  {
    company: "SENLA",
    role: "UX/UI Designer",
    period: "Aug 2020 \u2013 Nov 2021",
    place: "Minsk, Belarus",
    brand: "#1f2733",
    bullets: [
      "Designed dashboards, map interactions and supervisor workflows for insurance products.",
      "Improved menu structure and search, speeding up task completion.",
    ],
  },
  {
    company: "Earlier experience",
    role: "Freelance UX/UI Designer, Graphic Designer",
    period: "2016 \u2013 2022",
    place: "",
    brand: "#8a6d3b",
    bullets: [
      "UX/UI Designer, Freelance (Jan 2019 – Jul 2020, Dec 2021 – Aug 2022): web and mobile interfaces for fintech and e-commerce startups, from research to developer handoff.",
      "Graphic Designer, AIDA (Jan 2016 – Jan 2017): branding, advertising and web graphics in Adobe Photoshop and Illustrator.",
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
                {entry.period}{entry.place ? ` · ${entry.place}` : ""}
                {entry.projects ? ` · Projects: ${entry.projects}` : ""}
              </p>
              <ul className="text-foreground/75 mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] tracking-tight sm:text-[16px]">
                {entry.bullets.map((b) => (
                  <li key={b}>{nb(b)}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
