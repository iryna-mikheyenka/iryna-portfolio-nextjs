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
 */

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
  body: string[];
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
    body: [
      "States of Mind is Pink Elephant Group's platform for psychedelic-assisted mental health — expert articles, screenings, a podcast and a private community, built to support people at every stage of their journey.",
      "I joined early enough to define the product from scratch: its structure, core user journeys and a design system built to scale across mental health, education and provider-discovery products in the same ecosystem.",
      "I designed the acquisition funnel and onboarding quiz that qualifies and routes new users — a redesign that lifted qualified leads by 16%. I also use AI tools for concept development, visual exploration and rapid prototyping before production.",
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
    body: [
      "PsyStandard is the verification and standards layer of the Pink Elephant ecosystem — a directory and credentialing platform for psychedelic practitioners.",
      "I designed the provider discovery, verification, onboarding and assessment flows, translating a rigorous and often opaque credentialing process into something clear and trustworthy for both practitioners and the people vetting them.",
      "Reworking the internal verification workflow cut the operational cycle time from 7 days to 2 — a change that came out of simplifying the interface around how reviewers actually work, not just adding steps.",
    ],
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
    body: [
      "Mirari is Pink Elephant Group's education arm — professional training for psychedelic practitioners, built around a 12-week Foundation Programme and an ongoing practitioner community.",
      "I designed the learning experience end to end: how a clinical, rigorous curriculum becomes a guided, approachable product without losing its credibility.",
      "Like States of Mind and PsyStandard, Mirari shares design patterns and a component library with the rest of the ecosystem, so practitioners moving between products feel a consistent, trustworthy experience.",
    ],
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
    body: [
      "JGGL is an AI/ML product for human functional-state analysis — using behavioral data to surface insights about how someone is really doing.",
      "I designed the web and mobile experience end to end, running user interviews, usability testing, competitor research and data analysis to identify friction points and opportunities.",
      "Findings fed directly into feature planning and backlog prioritization, helping the team ship the improvements with the highest impact on retention.",
    ],
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
    body: [
      "QR Charge is a power-bank rental network live across European markets — scan a code, grab a charger, drop it off anywhere in the network.",
      "I redesigned the core scan, rent, return and wallet flows, along with the error states that make or break trust in a physical-digital product like this.",
      "I also updated the design system and UI kit to improve consistency and accessibility, and created product and marketing visuals to support acquisition and brand recognition.",
    ],
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
    body: [
      "QR Tips extends the QR Charge product family with a lightweight tipping flow, using the same QR-based interaction model people already trust from renting a charger.",
      "The goal was to keep the experience just as fast and frictionless as scanning a charger — a tip should take seconds, not a checkout flow.",
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
