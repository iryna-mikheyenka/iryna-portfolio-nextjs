import {
  BatteryCharging,
  Cpu,
  GraduationCap,
  HandCoins,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType } from "react";

/**
 * Project imagery below is stylized abstract mockups (no real product
 * screenshots included). Swap in real screenshots from Figma/your work
 * whenever you have them — replace the file at the same path in
 * /public/projects, or update the `image` field to point at a new file.
 *
 * `process` and `metrics` are optional — only fill them in with real
 * numbers/steps you can stand behind. Leave them empty and that section
 * simply won't render on the project page.
 */

export type Metric = { label: string; value: string };

export type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  context: string;
  problem: string;
  solution: string;
  highlights: string[];
  process: string[];
  metrics: Metric[];
};

export const PROJECTS: Project[] = [
  {
    id: "states-of-mind",
    icon: HeartPulse,
    iconLabel: "States of Mind",
    title:
      "A media and community platform for psychedelic-assisted mental health, built 0→1.",
    description:
      "Defined the product from scratch — structure, user journeys and a scalable design system — spanning expert articles, screenings, podcast and community. A redesigned acquisition funnel lifted qualified leads by 16%.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/states-of-mind.png",
    imageAlt: "States of Mind product dashboard mockup",
    context:
      "States of Mind is Pink Elephant Group's platform for psychedelic-assisted mental health — expert articles, screenings, a podcast and a private community, built to support people at every stage of their journey.",
    problem:
      "There was no existing product to build on — just a mission and an audience that needed to trust a sensitive, often stigmatized topic from the first screen they saw.",
    solution:
      "Define the product from 0→1: structure, core user journeys and a design system built to scale across mental health, education and provider-discovery products in the same ecosystem.",
    highlights: [
      "Defined information architecture across articles, screenings, tools, podcast and community",
      "Designed the acquisition funnel and onboarding quiz that qualifies and routes new users",
      "Built and maintain the shared design system used across the Pink Elephant ecosystem (States of Mind, PsyStandard, Mirari)",
      "Use AI tools for concept development, visual exploration and rapid prototyping before production",
    ],
    process: [
      "Define product structure and information architecture",
      "Design core user journeys end to end",
      "Build the shared design system",
      "Design and test the acquisition funnel",
      "Ship, measure, iterate",
    ],
    metrics: [
      { label: "Qualified leads", value: "+16%" },
      { label: "Ecosystem products on this system", value: "3" },
    ],
  },
  {
    id: "psystandard",
    icon: ShieldCheck,
    iconLabel: "PsyStandard",
    title: "A verification and standards platform for psychedelic practitioners.",
    description:
      "Designed provider discovery, verification, onboarding and assessment flows to make a complex credentialing process clearer and more trustworthy. The reworked verification workflow cut cycle time from 7 days to 2.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/psystandard.png",
    imageAlt: "PsyStandard verification dashboard mockup",
    context:
      "PsyStandard is the verification and standards layer of the Pink Elephant ecosystem — a directory and credentialing platform for psychedelic practitioners.",
    problem:
      "Verifying practitioners was a manual, opaque process that took about 7 days, with no clear visibility for applicants and no streamlined tooling for reviewers.",
    solution:
      "Redesign provider discovery, verification, onboarding and assessment flows around how reviewers actually work, not just around the steps in the process.",
    highlights: [
      "Mapped the end-to-end verification workflow with the internal review team",
      "Designed provider discovery and onboarding flows for practitioners applying to the directory",
      "Simplified the reviewer interface to cut unnecessary steps and clarify decision points",
      "Shares the same design system as States of Mind and Mirari",
    ],
    process: [
      "Map the current verification workflow",
      "Interview reviewers about friction points",
      "Redesign discovery and onboarding",
      "Redesign reviewer tooling",
      "Roll out and measure cycle time",
    ],
    metrics: [{ label: "Verification cycle time", value: "7 days → 2 days" }],
  },
  {
    id: "mirari",
    icon: GraduationCap,
    iconLabel: "Mirari",
    title: "Professional education for psychedelic practitioners across Europe.",
    description:
      "Designed the learning experience for a 12-week Foundation Programme and practitioner community, turning a rigorous clinical curriculum into a clear, guided product.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/mirari.png",
    imageAlt: "Mirari learning platform mockup",
    context:
      "Mirari is Pink Elephant Group's education arm — professional training for psychedelic practitioners, built around a 12-week Foundation Programme and an ongoing practitioner community.",
    problem:
      "A rigorous, clinical training curriculum risked feeling intimidating or bureaucratic if translated directly into a digital product.",
    solution:
      "Design a guided learning experience that keeps the credibility of the curriculum without the friction — clear structure, clear progress, a sense of community alongside the coursework.",
    highlights: [
      "Designed the course structure and navigation for a 12-week Foundation Programme",
      "Designed the practitioner community experience alongside the course",
      "Reused and extended the shared Pink Elephant design system",
    ],
    process: [
      "Understand the curriculum and its constraints",
      "Structure the learning journey",
      "Design course and community flows",
      "Test with early practitioners",
      "Refine based on feedback",
    ],
    metrics: [],
  },
  {
    id: "jggl",
    icon: Cpu,
    iconLabel: "JGGL",
    title: "An AI/ML product for human functional-state analysis.",
    description:
      "Designed web and mobile experiences end to end, running interviews, usability testing and competitor research that fed straight into the roadmap.",
    meta: "Product Designer, X Labs · 2024",
    imageRatio: 1024 / 768,
    image: "/projects/jggl.png",
    imageAlt: "JGGL mobile app mockup",
    context:
      "JGGL is an AI/ML product for human functional-state analysis — using behavioral data to surface insights about how someone is really doing.",
    problem:
      "The team had a strong technical concept but limited prior research into which features would actually matter to users.",
    solution:
      "Run interviews, usability testing and competitor research, then turn findings directly into prioritized features rather than assumptions.",
    highlights: [
      "Conducted user interviews and usability testing to surface friction points",
      "Ran competitor research and data analysis to identify product opportunities",
      "Designed web and mobile experiences end to end",
      "Fed findings directly into feature planning and backlog prioritization",
    ],
    process: [
      "User interviews",
      "Usability testing",
      "Competitor and data analysis",
      "Design web and mobile flows",
      "Feed findings into the roadmap",
    ],
    metrics: [],
  },
  {
    id: "qr-charge",
    icon: BatteryCharging,
    iconLabel: "QR Charge",
    title: "A power-bank rental app and website live across Europe.",
    description:
      "Rebuilt the core scan, rent, return and wallet flows, and updated the UI kit for consistency, accessibility and scale.",
    meta: "Product Designer, QR Charge · 2023–2024",
    imageRatio: 1024 / 768,
    image: "/projects/qr-charge.png",
    imageAlt: "QR Charge mobile app mockup",
    context:
      "QR Charge is a power-bank rental network live across European markets — scan a code, grab a charger, drop it off anywhere in the network.",
    problem:
      "The core scan-rent-return flow had friction and inconsistent error handling across markets, which showed up directly in trust and support load.",
    solution:
      "Rebuild the core flows and the UI kit so the product feels reliable and consistent everywhere it operates.",
    highlights: [
      "Redesigned scan, rent, return and wallet flows",
      "Designed and documented error states for edge cases across markets",
      "Updated the design system and UI kit for consistency, accessibility and scale",
      "Created product and marketing visuals for acquisition and brand recognition",
    ],
    process: [
      "Audit existing flows and error states",
      "Redesign the core scan-rent-return flow",
      "Update the UI kit and design system",
      "Design marketing visuals",
      "Ship across European markets",
    ],
    metrics: [],
  },
  {
    id: "qr-tips",
    icon: HandCoins,
    iconLabel: "QR Tips",
    title: "A tipping feature extending the QR Charge product family.",
    description:
      "Designed a lightweight, trust-building tipping flow that plugs into the same QR-based interaction model as QR Charge.",
    meta: "Product Designer, QR Charge · 2023–2024",
    imageRatio: 1024 / 768,
    image: "/projects/qr-tips.png",
    imageAlt: "QR Tips app mockup",
    context:
      "QR Tips extends the QR Charge product family with a lightweight tipping flow, using the same QR-based interaction model people already trust from renting a charger.",
    problem:
      "A tipping feature bolted onto an existing product easily turns into a separate, heavier checkout flow that breaks the speed people expect.",
    solution:
      "Reuse the existing QR interaction pattern and keep the tipping flow to as few steps as possible — a tip should take seconds, not a checkout.",
    highlights: [
      "Designed a lightweight tipping flow using the existing QR interaction pattern",
      "Kept the flow visually and structurally consistent with the QR Charge design system",
    ],
    process: [],
    metrics: [],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
