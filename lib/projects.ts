import {
  BatteryCharging,
  Cpu,
  GraduationCap,
  HandCoins,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType } from "react";

import { nb } from "@/lib/nbsp";

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

const RAW_PROJECTS: Project[] = [
  {
    id: "states-of-mind",
    icon: HeartPulse,
    iconLabel: "States of Mind",
    title: "A psychedelic news, stories and science hub, built 0→1.",
    description: "A content and guidance platform for people exploring psychedelics: stories, news, podcasts, a toolkit of guides and self-checks, and a private community. I built it from 0→1 and grew it with funnel and content experiments: +16% qualified leads in 12 weeks, provider profile views per session up from 2% to 8%, +22% sessions.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/states-of-mind-1.jpg",
    imageAlt: "States of Mind homepage on desktop and mobile",
    gallery: [{ src: "/projects/states-of-mind-1.jpg", alt: "States of Mind homepage on desktop and mobile" }],
    liveUrl: "https://statesofmind.com",
    context: "States of Mind offers expert insights, practical tools and personal stories of healing and growth, supporting every stage of a psychedelic journey. Today it combines Stories, News, podcasts, a Toolkit (substance guides, therapy guides, self-checks, preparation and integration tools) and a private Community. I built the product from 0→1 and keep developing its structure, user journeys, interface logic and design patterns.",
    problem: "The product started from nothing: a mission to give people clear, trustworthy guidance on a sensitive and often confusing topic, across very different content types and user intents.",
    solution: "A product structure that leads people from curiosity to understanding: clear entry points (Start Here), a toolkit organised by substance, therapy and self-check, editorial layouts that make complex topics easier to read, and quiz and assessment flows with clear next steps.",
    highlights: [
      "Built the product from 0→1: information architecture, user journeys, growth logic and responsive web UI for mobile and desktop",
      "Increased qualified leads by 16% in 12 weeks by redesigning the provider-matching CTA and the quiz acquisition flow",
      "Grew provider profile views per session from 2% to 8% by optimising key funnels and interaction patterns",
      "Validated hypotheses through quizzes, paywall experiments and funnel tests before full-scale development",
      "Increased sessions by 22% in 3–6 months through structured content and an internal linking strategy",
      "Created a unified UI system with component rules, plus visuals and illustrations with Photoshop, Illustrator and AI tools",
    ],
    process: [],
    metrics: [
      { label: "Qualified leads in 12 weeks", value: "+16%" },
      { label: "Provider profile views per session", value: "2% → 8%" },
      { label: "Sessions in 3–6 months", value: "+22%" },
    ],
  },
  {
    id: "psystandard",
    icon: ShieldCheck,
    iconLabel: "PsyStandard",
    title: "A trust standard for psychedelic practice in Europe.",
    description: "PsyStandard is a verification framework for psychedelic practitioners, retreats and clinics, co-designed with academic institutions, harm-reduction experts and practitioners. I built the provider verification system and the site around it: verification cycle time went from 7 to 2 days, and verified providers grew from 220 to 500+ in 14 days.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/psystandard-1.jpg",
    imageAlt: "PsyStandard About page on desktop and mobile",
    gallery: [{ src: "/projects/psystandard-1.jpg", alt: "PsyStandard About page on desktop and mobile" }],
    liveUrl: "https://psystandard.com",
    context: "PsyStandard's vision is a world where the quality of psychedelic practice isn't a matter of luck: shared, transparent, verifiable standards across Europe. The platform brings together a standards framework, membership and an applicant journey for practitioners (clinical, non-clinical, retreats and organisations), a founding cohort, an advisory board with researchers and clinicians, and articles from the field.",
    problem: "The psychedelic field's credibility problem is growing faster than the field itself. People looking for a practitioner can't tell who works safely, and good practitioners have no recognised way to show it. A badge alone wouldn't solve that: the standard had to be explained, believable and easy to engage with.",
    solution: "A site that makes the standard legible: what 'verified' means and what good practice is measured against, why practitioners join (peer community, supervision from recognised specialists, practice tools, a code of ethics), real people behind it (team, founding cohort, advisors, supervisors), and a short, human apply flow where every application is reviewed individually.",
    highlights: [
      "Built a provider verification system: cycle time cut from 7 to 2 days",
      "Verified providers grew from 220 to 500+ in 14 days",
      "Designed the information architecture: Standards, Membership, Articles, About, member login",
      "Designed the pages that explain the standard, its values and what verification means",
      "Designed trust blocks: founding cohort, advisors and supervisors with credentials and affiliations",
      "Designed the apply-for-verification flow for different practice types, with clear expectations on review and response time",
    ],
    process: [],
    metrics: [
      { label: "Verification cycle time", value: "7 → 2 days" },
      { label: "Verified providers in 14 days", value: "220 → 500+" },
    ],
  },
  {
    id: "mirari",
    icon: GraduationCap,
    iconLabel: "Mirari",
    title: "Author-led psychedelic education with live sessions at its core.",
    description: "An online platform where researchers, doctors, therapists and facilitators teach live courses. I designed the course catalogue, landing pages, the 'how a course works' model and the registration flow.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/mirari-1.jpg",
    imageAlt: "Mirari homepage on desktop",
    gallery: [{ src: "/projects/mirari-1.jpg", alt: "Mirari homepage on desktop" }],
    liveUrl: "https://mirari.academy",
    context:
      "Mirari brings psychedelic knowledge to the people who need it, together with the people who hold it: courses by researchers, doctors, therapists and facilitators. Each course goes deep on one subject, includes live sessions with the teacher, and links to the next. I designed the learning experience, landing pages, course structure, registration flow and visual system.",
    problem: "Specialist courses are hard to evaluate: people need to see who teaches, what a course covers, how the live format works and what it costs before they commit.",
    solution: "A clear course structure: a catalogue where teacher, format, schedule and price are visible at a glance, a simple explanation of the live-first learning model, and a short path from browsing to registration or 'get notified'.",
    highlights: [
      "Designed the course catalogue and course cards: teacher, format, live-session schedule and price at a glance",
      "Designed the 'how a course works' model: live sessions, Q&A, recordings and the next course",
      "Designed registration and 'get notified' flows, an FAQ and a 'teach with Mirari' path",
      "Designed trust elements: teacher credentials, evidence-aware positioning, clear disclaimers",
    ],
    process: [],
    metrics: [],
  },
  {
    id: "jggl",
    icon: Cpu,
    iconLabel: "JGGL",
    title: "A social media experience for AI-generated content and digital creators.",
    description:
      "Designed a mobile-first product that makes AI-generated content easy to explore, create and interact with — AI artist creation flows, feed experience, user journeys and interface logic, with usability testing feeding straight into iteration.",
    meta: "Product Designer, X-Labs · 2024",
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
      "Designed AI/ML web and mobile product experiences, from the AI artist creation flow to the media feed, including research on users' functional states",
      "Ran user interviews, usability tests, data analysis and competitor research to find key user needs and friction points",
      "Prioritised the design backlog by business impact",
      "With the PM, defined milestones that shortened launch time and improved retention",
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
    meta: "Product Designer (Freelance), QR Charge · Aug 2023 – Jan 2024",
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
      "Designed the QR Charge mobile app and website from scratch for a power bank rental service across Europe",
      "Designed the scan, rent, return, wallet and error flows",
      "Updated the design system and UI kit for accessibility",
    ],
    process: [],
    metrics: [],
  },
  {
    id: "qr-tips",
    icon: HandCoins,
    iconLabel: "QR Tips",
    title: "Cashless QR tipping for restaurants and cafés.",
    description:
      "Designed a lightweight online tipping service: guests scan a waiter's QR code, pick an amount and pay in seconds, while venues get a dashboard with transparent reports.",
    meta: "Product Designer (Freelance), QR Charge · Aug 2023 – Jan 2024",
    imageRatio: 1024 / 768,
    image: "/projects/qr-tips-1.jpg",
    imageAlt: "QR Tips flow: QR card, tip selection, payment",
    gallery: [{ src: "/projects/qr-tips-1.jpg", alt: "QR Tips flow: QR card, tip selection, payment" }],
    liveUrl: "https://qrtips.ch/",
    context: "QR Tips is an online tipping service with QR codes for hospitality venues, available in English, French and Polish. Every waiter gets an individual QR code; guests tip by card without cash, funds go to the staff member or the venue, and managers track amounts and staff activity in a personal dashboard.",
    problem: "Tips are lost when guests have no cash, and venues have little visibility into who earns what.",
    solution: "A fast cashless flow for guests (scan, pick an amount, pay) and a dashboard that gives managers transparent tipping reports.",
    highlights: [
      "Designed QRTips from scratch: UX structure, QR-based tipping flows and a fast payment interface",
      "Designed the guest flow: scan the waiter's QR code, choose an amount, pay",
      "Designed the venue dashboard for tipping analytics and staff transparency",
    ],
    process: [],
    metrics: [],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export const PROJECTS: Project[] = RAW_PROJECTS.map((p) => ({
  ...p,
  title: nb(p.title),
  description: nb(p.description),
  meta: nb(p.meta),
  context: nb(p.context),
  problem: nb(p.problem),
  solution: nb(p.solution),
  highlights: p.highlights.map(nb),
  process: p.process.map(nb),
}));
