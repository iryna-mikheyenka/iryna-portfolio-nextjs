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
 * `process` and `metrics` are optional — only fill them in with real
 * numbers/steps you can stand behind. Leave them empty and that section
 * simply won't render on the project page.
 *
 * `gallery` holds real product screenshots. `liveUrl` links out to the
 * live product when one exists publicly.
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
  gallery: { src: string; alt: string }[];
  liveUrl?: string;
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
      "A psychedelic news, stories and science hub that supports every stage of the journey.",
    description:
      "Built the product from 0→1: stories, news, podcasts, a toolkit of substance and therapy guides, self-checks and a private community. A redesigned acquisition funnel lifted qualified leads by 16%.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/states-of-mind-1.jpg",
    imageAlt: "States of Mind homepage on desktop and mobile",
    gallery: [
      { src: "/projects/states-of-mind-1.jpg", alt: "States of Mind homepage on desktop and mobile" },
      { src: "/projects/states-of-mind-2.jpg", alt: "States of Mind homepage on desktop" },
      { src: "/projects/states-of-mind-3.jpg", alt: "States of Mind stories feed on mobile" },
    ],
    liveUrl: "https://statesofmind.com",
    context:
      "States of Mind offers expert insights, practical tools and personal stories of healing and growth — supporting every stage of a psychedelic journey. Today it combines Stories, News, podcasts (Human Journeys, Progress in Process), a Toolkit (substance guides, therapy guides, self-checks, preparation and integration tools) and a private Community. I built the product from 0→1 and continue developing its structure, user journeys, interface logic and design patterns.",
    problem:
      "There was no existing product to build on — just a mission to create a clear, supportive digital platform that helps users understand their mental state, explore psychological topics, complete self-assessments and find relevant next steps.",
    solution:
      "Design a product structure that moves users from uncertainty to understanding: clear entry points for awareness, non-clinical quiz and screening flows for assessment, result pages and next-step guidance, and article/guide layouts that make complex topics easier to navigate.",
    highlights: [
      "Defined product architecture, UX flows and information architecture from scratch",
      "Designed quiz logic and assessment result pages for sensitive, non-clinical self-screening",
      "Designed the acquisition funnel and onboarding that qualifies and routes new users",
      "Built and maintain the shared design system used across States of Mind, PsyStandard and Mirari",
      "Use AI-assisted visual exploration for concept development and rapid prototyping",
    ],
    process: [
      "Define product structure and information architecture",
      "Design awareness, assessment, guidance and content flows",
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
    title: "Trust infrastructure for the progressive mental health field.",
    description:
      "Designed provider profiles, verification logic, trust blocks and methodology pages to make a complex credentialing process clearer and more trustworthy. The reworked verification workflow cut cycle time from 7 days to 2.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/psystandard-1.jpg",
    imageAlt: "PsyStandard About page on desktop and mobile",
    gallery: [
      { src: "/projects/psystandard-1.jpg", alt: "PsyStandard About page on desktop and membership page on mobile" },
      { src: "/projects/psystandard-2.jpg", alt: "PsyStandard values and team on desktop" },
      { src: "/projects/psystandard-3.jpg", alt: "PsyStandard membership page on mobile" },
    ],
    liveUrl: "https://psystandard.com",
    context:
      "PsyStandard sets a shared standard for psychedelic practice: a verification framework co-designed with academic institutions, organisations and practitioners, with transparent, verifiable standards across Europe. I designed membership, verification and trust pages, and content structure for standards and credentialing.",
    problem:
      "Verifying practitioners was a manual, opaque process that took about 7 days, with no clear credibility signals for applicants and no streamlined tooling for reviewers.",
    solution:
      "Design provider profiles, verification logic and trust blocks around credibility, structure, standards and action: verified profiles and credentials, clear provider pages and pricing, methodology and verification-logic blocks, and clear CTAs to contact, apply or claim a listing.",
    highlights: [
      "Designed provider profiles, verification logic and trust blocks",
      "Designed methodology pages and content structure for standards and credentialing",
      "Simplified the reviewer workflow to cut unnecessary steps and clarify decision points",
      "Shares the same design system as States of Mind and Mirari",
    ],
    process: [
      "Map the current verification workflow",
      "Design provider profiles and trust blocks",
      "Design methodology and standards pages",
      "Design reviewer tooling",
      "Roll out and measure cycle time",
    ],
    metrics: [{ label: "Verification cycle time", value: "7 days → 2 days" }],
  },
  {
    id: "mirari",
    icon: GraduationCap,
    iconLabel: "Mirari",
    title: "Author-led psychedelic education with live sessions at its core.",
    description:
      "Designed the course catalogue, landing pages, 'how it works' learning model, registration flow and visual system for a platform where researchers, clinicians and practitioners teach live.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/mirari-1.jpg",
    imageAlt: "Mirari homepage on desktop",
    gallery: [
      { src: "/projects/mirari-1.jpg", alt: "Mirari homepage on desktop" },
      { src: "/projects/mirari-2.jpg", alt: "Mirari course page: why practitioners need to understand microdosing now" },
      { src: "/projects/mirari-3.jpg", alt: "Mirari homepage and course page on desktop" },
    ],
    liveUrl: "https://mirari.academy",
    context:
      "Mirari brings psychedelic knowledge to the people who need it, together with the people who hold it: courses by researchers, doctors, therapists and facilitators. Each course goes deep on one subject, includes live sessions with the teacher, and links to the next. I designed the learning experience, landing pages, course structure, registration flow and visual system.",
    problem:
      "Complex educational programs risked feeling intimidating or hard to evaluate if the curriculum, faculty and pricing weren't translated into a clear digital structure.",
    solution:
      "Make the program feel clear, credible and easy to explore: structured curriculum blocks and learning outcomes, faculty and methodology for trust, clear pricing and format for decision-making, and a simple path from exploration to application.",
    highlights: [
      "Designed the course catalogue and course cards: teacher, format, live-session schedule and price at a glance",
      "Designed the 'how a course works' model: live sessions, Q&A, recordings and the next course",
      "Designed registration and 'get notified' flows, plus an FAQ and a 'teach with Mirari' path",
      "Designed trust elements — teacher credentials, evidence-aware positioning, clear disclaimers",
      "Reused and extended the shared Pink Elephant design system",
    ],
    process: [
      "Understand the curriculum and its constraints",
      "Structure the learning journey and program cards",
      "Design trust and decision-making blocks",
      "Design the application flow",
      "Refine based on feedback",
    ],
    metrics: [],
  },
  {
    id: "jggl",
    icon: Cpu,
    iconLabel: "JGGL",
    title: "A social media experience for AI-generated content and digital creators.",
    description:
      "Designed a mobile-first product that makes AI-generated content easy to explore, create and interact with — AI artist creation flows, feed experience, user journeys and interface logic, with usability testing feeding straight into iteration.",
    meta: "Product Designer, X Labs · 2024",
    imageRatio: 1024 / 768,
    image: "/projects/jggl-1.jpg",
    imageAlt: "JGGL AI-generated content post on mobile",
    gallery: [
      { src: "/projects/jggl-1.jpg", alt: "JGGL AI-generated content post on mobile" },
      { src: "/projects/jggl-2.jpg", alt: "JGGL feed post, held in hand" },
      { src: "/projects/jggl-3.jpg", alt: "JGGL new publication / content creation screen" },
      { src: "/projects/jggl-4.jpg", alt: "JGGL feed view grid of AI-generated artist content" },
      { src: "/projects/jggl-5.jpg", alt: "JGGL app home screen with favorites and tracks" },
      { src: "/projects/jggl-6.jpg", alt: "JGGL new track publication screen" },
    ],
    liveUrl: "https://jggl.ai/",
    context:
      "JGGL (X Labs) is a mobile-first social media experience for AI-generated content and digital creator interaction, making it easy to explore, create and interact with AI-generated media.",
    problem:
      "The team had a strong technical concept — AI-generated content and AI-powered artist profiles — but needed the interaction model to feel as familiar and fast as any social feed.",
    solution:
      "Design AI artist creation flows and onboarding logic, a dynamic media feed built for browsing and continuous discovery, and like/save/share/profile interaction patterns adapted from social media, then iterate based on usability testing and user behavior.",
    highlights: [
      "Designed the AI artist creation flow and onboarding for digital creator profiles",
      "Structured the media feed for browsing, engagement and continuous discovery",
      "Designed like, save, share and profile interaction patterns",
      "Ran usability testing and fed findings directly into product iteration",
    ],
    process: [
      "User interviews and competitor research",
      "Design AI artist creation and onboarding flow",
      "Design the media feed and interaction patterns",
      "Usability testing",
      "Iterate based on findings",
    ],
    metrics: [],
  },
  {
    id: "qr-charge",
    icon: BatteryCharging,
    iconLabel: "QR Charge",
    title: "A power-bank rental app and website live across Europe.",
    description:
      "Designed a clear mobile app and website experience for renting power banks — scan, rent, wallet and return flows, error states, an updated UI kit and marketing visuals for acquisition.",
    meta: "Product Designer, QR Charge · 2023–2024",
    imageRatio: 1024 / 768,
    image: "/projects/qr-charge-1.jpg",
    imageAlt: "QR Charge onboarding welcome screen",
    gallery: [
      { src: "/projects/qr-charge-1.jpg", alt: "QR Charge onboarding welcome screen" },
      { src: "/projects/qr-charge-2.jpg", alt: "QR Charge active rental map screen" },
      { src: "/projects/qr-charge-3.jpg", alt: "QR Charge rental activated / ejection screen" },
      { src: "/projects/qr-charge-4.jpg", alt: "QR Charge scan QR code screen" },
      { src: "/projects/qr-charge-5.jpg", alt: "QR Charge 'how to return a power bank' instructions" },
    ],
    liveUrl: "https://qrcharge.eu/",
    context:
      "QR Charge is a power-bank rental network live across European markets, with a mobile app and website built for quick, everyday urban use.",
    problem:
      "The scan-rent-return flow needed to work with zero friction and handle edge cases — failed scans, unavailable devices, payment issues — without confusing or losing users.",
    solution:
      "Design a mobile-first rental flow around scan, rent, wallet and return: a clear scanning entry point, simple rental confirmation with price and time, wallet and active-rental state in one place, and clear return instructions and error handling.",
    highlights: [
      "Redesigned scan, rent, active rental and return journeys",
      "Designed wallet flows covering balance, payment and bonuses",
      "Created clearer error states for failed scans, unavailable devices and payment issues",
      "Updated the UI kit and visual patterns for consistency across markets",
      "Created product and marketing visuals for acquisition and brand recognition",
    ],
    process: [
      "Audit existing flows and error states",
      "Redesign the core scan-rent-return flow",
      "Design wallet and payment flows",
      "Update the UI kit and design system",
      "Design marketing visuals and ship across markets",
    ],
    metrics: [],
  },
  {
    id: "qr-tips",
    icon: HandCoins,
    iconLabel: "QR Tips",
    title: "Cashless QR tipping for restaurants and cafés.",
    description:
      "Designed a lightweight online tipping service: guests scan a waiter's QR code, pick an amount and pay in seconds, while venues get a dashboard with transparent reports.",
    meta: "Product Designer, QR Charge · 2023–2024",
    imageRatio: 1024 / 768,
    image: "/projects/qr-tips-1.jpg",
    imageAlt: "QR Tips flow: QR card, tip selection, payment",
    gallery: [
      { src: "/projects/qr-tips-1.jpg", alt: "QR Tips flow: QR card, tip selection, payment" },
      { src: "/projects/qr-tips-2.jpg", alt: "QR Tips QR table card" },
      { src: "/projects/qr-tips-3.jpg", alt: "QR Tips waiter page with tip amount" },
      { src: "/projects/qr-tips-4.jpg", alt: "QR Tips payment screen with Apple Pay, Google Pay and card" },
    ],
    liveUrl: "https://qrtips.ch/",
    context:
      "QR Tips is an online tipping service with QR codes for hospitality venues, available in English, French and Polish. Every waiter gets an individual QR code; guests tip by card without cash, funds go to the staff member or the venue, and managers track amounts and staff activity in a personal dashboard. It extends the QR Charge product family.",
    problem:
      "A tipping feature bolted onto an existing product easily turns into a separate, heavier checkout flow that breaks the speed people expect.",
    solution:
      "Reuse the existing QR interaction pattern and keep the tipping flow to as few steps as possible — a tip should take seconds, not a checkout.",
    highlights: [
      "Designed a lightweight guest flow: scan the waiter's QR code, choose an amount, pay",
      "Designed the venue dashboard for tipping analytics and staff transparency",
      "Kept the flow visually and structurally consistent with the QR Charge design system",
    ],
    process: [],
    metrics: [],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
