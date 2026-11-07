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
    title: "A psychedelic news, stories and science hub, built 0→1.",
    description: "A content and guidance platform for people exploring psychedelics: stories, news, podcasts, a toolkit of guides and self-checks, and a private community. I built it from 0→1; a redesigned acquisition funnel and quiz experience raised qualified lead conversion by 16%.",
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
      "Defined product structure, user journeys and information architecture from scratch",
      "Designed quiz and assessment flows and result pages for sensitive, non-clinical self-screening",
      "Redesigned the acquisition funnel and quiz experience, increasing qualified lead conversion by 16%",
      "Designed the content experience: stories, news, podcasts, toolkit guides and community",
      "Use AI tools for concept development, visual exploration and rapid prototyping before production",
    ],
    process: [],
    metrics: [
      { label: "Qualified leads", value: "+16%" },
    ],
  },
  {
    id: "psystandard",
    icon: ShieldCheck,
    iconLabel: "PsyStandard",
    title: "A verification standard for psychedelic practitioners.",
    description: "PsyStandard sets a shared standard for psychedelic practice with a verification framework co-designed with institutions, organisations and practitioners. I designed provider discovery, verification and trust flows and improved the internal verification workflow, cutting cycle time from 7 days to 2.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/psystandard-1.jpg",
    imageAlt: "PsyStandard About page on desktop and mobile",
    gallery: [{ src: "/projects/psystandard-1.jpg", alt: "PsyStandard About page on desktop and mobile" }],
    liveUrl: "https://psystandard.com",
    context:
      "PsyStandard sets a shared standard for psychedelic practice: a verification framework co-designed with academic institutions, organisations and practitioners, with transparent, verifiable standards across Europe. I designed membership, verification and trust pages, and content structure for standards and credentialing.",
    problem: "Practitioner verification was slow: the internal workflow took about 7 days, and people looking for a provider had few clear signals about who could be trusted and why.",
    solution: "Make credibility visible and the process lighter: provider profiles and verification logic built around standards, clear explanations of what 'verified' means, membership and apply flows, and a simplified reviewer workflow with fewer steps and clearer decision points.",
    highlights: [
      "Designed provider discovery, profiles and verification flows",
      "Designed trust blocks and pages that explain the standard and what verification means",
      "Improved the internal provider verification workflow, reducing cycle time from 7 days to 2",
      "Designed onboarding and membership flows for practitioners",
    ],
    process: [],
    metrics: [{ label: "Verification cycle time", value: "7 days → 2 days" }],
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
      "Designed AI-driven web and mobile product experiences, from the AI artist creation flow to the media feed",
      "Ran user interviews, usability testing, competitor research and data analysis to find friction points and opportunities",
      "Turned research findings and analytics into product improvements and helped the team prioritise design decisions",
      "Worked with product managers, analysts and engineers across discovery, validation and delivery",
      "Contributed to feature planning and backlog prioritisation",
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
      "Improved core flows: scanning, renting, returning devices, wallet interactions and error states",
      "Designed the mobile app and website for a service operating across European markets",
      "Updated the design system and UI kit for consistency, accessibility and scalability",
      "Created product and marketing visuals for acquisition, brand recognition and product communication",
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
    meta: "Product Designer, QR Charge · 2023–2024",
    imageRatio: 1024 / 768,
    image: "/projects/qr-tips-1.jpg",
    imageAlt: "QR Tips flow: QR card, tip selection, payment",
    gallery: [{ src: "/projects/qr-tips-1.jpg", alt: "QR Tips flow: QR card, tip selection, payment" }],
    liveUrl: "https://qrtips.ch/",
    context: "QR Tips is an online tipping service with QR codes for hospitality venues, available in English, French and Polish. Every waiter gets an individual QR code; guests tip by card without cash, funds go to the staff member or the venue, and managers track amounts and staff activity in a personal dashboard.",
    problem: "Tips are lost when guests have no cash, and venues have little visibility into who earns what.",
    solution: "A fast cashless flow for guests (scan, pick an amount, pay) and a dashboard that gives managers transparent tipping reports.",
    highlights: [
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
