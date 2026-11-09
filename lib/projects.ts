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
  /** Case-study facts. Only fill in what is true. */
  role: string;
  timeline: string;
  platform: string;
  /** Key design decisions: what you chose, why, and what you rejected. */
  decisions: { title: string; text: string }[];
  /** Stages of product evolution (title + text). */
  stages: { title: string; text: string }[];
  /** Qualitative outcomes. */
  outcomes: string[];
  challenges: string[];
  /** What you learned or would do differently. */
  learnings?: string | undefined;
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
  /** Product-scale facts from the media kit (not design results). */
  scale?: Metric[] | undefined;
  scaleSource?: string | undefined;
};

const RAW_PROJECTS: Project[] = [
  {
    id: "states-of-mind",
    icon: HeartPulse,
    iconLabel: "States of Mind",
    title: "From a blank page to a content-led mental health platform.",
    description: "A platform about mental health and psychedelic therapy that brings together educational content, self-assessments and a provider marketplace. I built it from 0→1 as the lead designer, then led its UX and visual redesign as the content grew.",
    meta: "Product Designer, Pink Elephant · Dec 2024 – Present",
    role: "Information architecture · UX flows · UI design · self-assessments · provider marketplace · visual system · redesign · CTA and quiz funnels",
    timeline: "Dec 2024 – Present",
    platform: "Responsive web (mobile and desktop)",
    decisions: [
      { title: "A clearer information architecture", text: "I reworked the content structure, navigation and entry points to the main sections so people can find what they need faster." },
      { title: "Contextual CTAs and quizzes", text: "Instead of the same call to action everywhere, each placement offers the next step that fits the topic, for example a path from an article to a related self-assessment. The working hypothesis was that a relevant next step engages people better than a generic one." },
      { title: "A shorter path to a specialist", text: "I connected educational content, quizzes and provider search, aiming to shorten the route from exploring a problem to choosing a professional." },
      { title: "A redesigned content platform", text: "The homepage, positioning, categories, card formats, Stories and podcast experience were redesigned so the platform stays understandable as the amount of content grows." },
    ],
    imageRatio: 1024 / 768,
    image: "/projects/states-of-mind-1.jpg",
    imageAlt: "States of Mind homepage on desktop and mobile",
    gallery: [{ src: "/projects/states-of-mind-1.jpg", alt: "States of Mind homepage on desktop and mobile" },{ src: "/projects/states-of-mind-4.jpg", alt: "States of Mind homepage before the redesign" },{ src: "/projects/states-of-mind-5.jpg", alt: "States of Mind homepage after the redesign" },{ src: "/projects/states-of-mind-8.jpg", alt: "States of Mind preparation tools and self-checks" },{ src: "/projects/states-of-mind-9.jpg", alt: "States of Mind Psychedelic Therapy Legality Map for Europe" }],
    liveUrl: "https://statesofmind.com",
    context: "States of Mind is a platform about mental health, psychedelic therapy and evidence-based approaches to psychological support. It combines educational content, personal stories, self-assessments and tools for finding professional help. I built it from 0→1 as the lead designer and later led its evolution and redesign. Today it works as a video-first media hub: news and research, guides, expert insights, podcasts (Progress in Process, Human Journeys), personal stories and a weekly newsletter, MindShift 101, alongside tools such as self-checks that take under 7 minutes, a Psychedelic Therapy Legality Map and a preparation workbook.",
    problem: "People interested in mental health and psychedelic therapy struggle to navigate a large volume of conflicting information: whom to trust, where to start, what kind of support fits them, and how safe, private and qualified the available specialists are. As the platform grew, the same problem appeared inside the product itself: more content, more navigation, and a visual structure that no longer matched what users needed.",
    solution: "Stage one: unify content, self-assessments and a provider marketplace into one coherent experience. Stage two: simplify the information architecture, make CTAs and quizzes relevant to the context a user is in, and shorten the path from learning about a topic to finding the right specialist.",
    stages: [
      { title: "Stage 1: designing the product from scratch", text: "I built the information architecture and core flows for three parts of the product. Content experience: the structure of educational content, articles and topic sections, and navigation across mental health areas. Self-assessments: question-to-result flows for PHQ-9, GAD-7, PCL-5 and ASRS, and the next steps after a result. Provider marketplace: provider categories (Clinical, Therapeutic, Experience), search and selection, provider profiles and the handover to contacting a specialist." },
      { title: "Stage 2: product evolution and redesign", text: "As content and functionality grew, a product review surfaced several problems: the first screen did not explain the platform's value clearly, different content types looked too similar, navigation had become complicated, the visual system was applied inconsistently, some CTAs did not match the user's context, and a few flows had unnecessary steps. The redesign covered the homepage and positioning, navigation and content categories, card formats, Stories and podcasts, the Learn flows and visual consistency." },
    ],
    highlights: [
      "Built the information architecture and user flows from scratch",
      "Designed self-assessment flows (PHQ-9, GAD-7, PCL-5, ASRS), results and next steps",
      "Designed the provider marketplace: categories, search, profiles and contact flow",
      "Developed the visual system and redesigned the platform as content grew",
      "Optimised CTAs, quizzes and acquisition funnels",
      "Worked with the product team and developers",
    ],
    outcomes: [
      "Designed and launched a content, assessment and provider platform from scratch",
      "Set up an information architecture and flows the product keeps building on",
      "Redesigned the homepage, navigation and content formats as the platform grew",
      "Reworked the CTA and quiz acquisition flows",
    ],
    challenges: [
      "Building a product from zero in a sensitive, complex domain",
      "Many content types and user scenarios in one product",
      "Fast-changing product priorities",
      "Balancing educational content, UX and business goals",
      "Keeping the visual language consistent as the product grew",
    ],
    learnings: "With a large content product, it pays to fix information architecture and design-system principles earlier, to document product hypotheses, and to agree success criteria before development starts.",
    process: [],
    metrics: [
      { label: "Qualified leads in 12 weeks", value: "+16%" },
      { label: "Provider profile views per session", value: "2% → 8%" },
      { label: "Sessions in 3–6 months", value: "+22%" },
    ],
    scale: [
      { label: "Newsletter subscribers", value: "4k+" },
      { label: "Social followers", value: "9.5k+" },
      { label: "Monthly social impressions", value: "120K+" },
      { label: "Engagement rate on social media", value: "12%" },
      { label: "Expert collaborations", value: "80+" },
      { label: "Podcast listeners", value: "500+" },
    ],
    scaleSource: "States of Mind Media & Partnership Kit 2026",
  },
  {
    id: "psystandard",
    icon: ShieldCheck,
    iconLabel: "PsyStandard",
    title: "From a provider directory to a professional verification platform.",
    description: "A B2B membership and verification platform for psychedelic practitioners. It started as a provider marketplace inside States of Mind; I designed the standalone product's structure, UX/UI and visual identity.",
    meta: "Product Designer, Pink Elephant · Summer 2026",
    role: "UX/UI · information architecture · verification and membership flows · key pages · visual identity · responsive UI · developer handoff",
    timeline: "Summer 2026",
    platform: "Responsive web",
    decisions: [
      { title: "From B2C to B2B", text: "I rebuilt the product around a professional audience: instead of searching for a specialist, the primary scenario became learning about the standards and applying." },
      { title: "Transparency by design", text: "To make verification understandable, I used sequential stages, explanations, an FAQ and information about the experts." },
      { title: "Trust-building UX", text: "Expert profiles, partnerships, an explanation of the methodology, a professional visual identity, clear participation criteria and honest limits on what verification covers." },
      { title: "Membership as long-term value", text: "The product communicates more than a one-off check: supervision, community, learning and peer exchange." },
    ],
    imageRatio: 1024 / 768,
    image: "/projects/psystandard-1.jpg",
    imageAlt: "PsyStandard About page on desktop and mobile",
    gallery: [{ src: "/projects/psystandard-1.jpg", alt: "PsyStandard About page on desktop and mobile" },{ src: "/projects/psystandard-2-v2.jpg", alt: "PsyStandard product evolution from directory to membership platform" },{ src: "/projects/psystandard-3-v2.jpg", alt: "PsyStandard four-level verification framework" }],
    liveUrl: "https://psystandard.com",
    context: "PsyStandard is a professional platform for setting quality standards, verifying practitioner competence and building a professional community in psychedelic practice. It began inside States of Mind as a provider marketplace. While developing it, the team saw a deeper market problem and split it out as a separate product.",
    problem: "There was no transparent, widely recognised way to independently check psychedelic practitioners. Clients could not tell how qualified a specialist was: credentials and experience were presented inconsistently and the quality criteria were unclear. Specialists had no independent way to prove their competence or to develop alongside peers, and the market lacked a shared standard, which made trust in a new professional category hard to build.",
    solution: "Rebuild the product around a professional audience: a clear explanation of the standards and the verification journey, trust signals that hold up to scrutiny, and an application flow where the main action is to apply or join.",
    stages: [
      { title: "Stage 1: provider directory", text: "The first concept was a directory inside States of Mind: provider categories, professional profiles and qualification checks." },
      { title: "Stage 2: a standalone product", text: "The team separated the direction from States of Mind. It got its own product structure, UX/UI and visual identity." },
      { title: "Stage 3: verification and membership", text: "Positioning shifted from a directory to professional verification, transparent competence standards, membership, a professional community and continuing professional development. The main change was from a B2C directory to a B2B membership platform." },
      { title: "The verification framework", text: "It has four levels: credential review (L0), a 30-minute structured call (L1), 60 minutes of observed practice across 11 competency dimensions (L2) and membership (L3). The framework and the professional standards were developed with industry experts; my role was to make them understandable through product design." },
      { title: "Information architecture", text: "Instead of Directory, Articles and Verification, the site is organised as Home, Membership, Standards, Articles and About Us, with one primary CTA: apply for verification or join." },
    ],
    highlights: [
      "Designed UX/UI for a standalone platform",
      "Designed the information architecture around verification and membership",
      "Designed user flows, key pages and the application journey",
      "Created the visual identity: minimal and structured, with a green palette and Satoshi and IBM Plex Mono typography, deliberately away from esoteric styling",
      "Designed responsive interfaces and UI components",
      "Handed the designs over to development",
    ],
    outcomes: [
      "Split PsyStandard out of States of Mind as a standalone platform",
      "Reworked the business model and positioning together with the team",
      "Cut the provider verification cycle from 7 to 2 days and grew verified providers from 220 to 500+ in 14 days",
      "Designed UX/UI for a professional audience",
      "Built the information architecture around verification and membership",
      "Created a distinct visual language",
    ],
    challenges: [
      "A complex professional domain",
      "No single industry-wide standard",
      "A business model that changed during development",
      "The importance of professional trust",
      "Legal and ethical constraints",
      "Explaining complex processes in plain language",
    ],
    learnings: "A strong product opportunity can appear inside an existing product. Sometimes the right move is not to extend the current feature but to separate it into its own platform with a different audience and value proposition.",
    process: [],
    metrics: [
      { label: "Provider verification cycle time", value: "7 → 2 days" },
      { label: "Verified providers in 14 days", value: "220 → 500+" },
    ],
  },
  {
    id: "mirari",
    icon: GraduationCap,
    iconLabel: "Mirari",
    title: "Designing an educational platform from 0 to 1.",
    description: "A platform for evidence-informed psychedelic education with expert-led courses. I designed the course catalogue, course pages, the live-first learning experience and the visual identity.",
    meta: "Product Designer, Pink Elephant · Early summer 2026",
    role: "UX/UI from scratch · platform structure · user flows · catalogue and course pages · typography and visual identity · AI-generated visuals · developer handoff",
    timeline: "Early summer 2026",
    platform: "Responsive web",
    decisions: [
      { title: "Course discovery", text: "A catalogue structure that makes courses easy to compare: title, topic, teacher, format, duration and programme." },
      { title: "Course detail pages", text: "Each course has its own page so people can judge the content before registering. The goal is to make a programme's value clear before they commit." },
      { title: "A live-first learning experience", text: "The product combines live sessions, discussion and expert access with self-paced materials, and the UX explains the difference between formats so people can pick the right one. The live-first model is the product's concept; my work was to make it clear in the interface." },
      { title: "A recognisable visual language", text: "Typography, educational content and AI-generated visuals that give a new brand a coherent, credible look." },
    ],
    imageRatio: 1024 / 768,
    image: "/projects/mirari-1.jpg",
    imageAlt: "Mirari homepage on desktop",
    gallery: [{ src: "/projects/mirari-1.jpg", alt: "Mirari homepage on desktop" },{ src: "/projects/mirari-2.jpg", alt: "Mirari microdosing page on desktop" },{ src: "/projects/mirari-3-v2.jpg", alt: "Mirari course discovery flow" }],
    liveUrl: "https://mirari.academy",
    context: "Mirari Academy is an educational platform for evidence-based learning in psychedelic practice and related disciplines. It offers author-led programmes taught by experts. The public site currently lists three courses, including an eight-week programme.",
    problem: "The product had to let people find programmes, understand their content and structure, judge the teachers' expertise, compare learning formats and decide whether to register. A new educational brand also had to look professional and credible from day one.",
    solution: "A clear catalogue for comparing programmes, detailed course pages that show value before enrolment, and a UX that explains live and self-paced formats.",
    stages: [],
    highlights: [
      "Designed the UX/UI of the platform from scratch",
      "Designed the platform structure and user flows",
      "Designed the course catalogue and course pages",
      "Worked on typography and visual identity, and created AI-generated visual content",
      "Prepared the interfaces for development",
    ],
    outcomes: [
      "Designed an educational platform from scratch",
      "Created the catalogue and course structure",
      "Designed UX/UI for presenting programmes",
      "Established the product's visual direction",
      "Prepared the platform for new courses",
    ],
    challenges: [
      "A new educational brand",
      "Explaining complex topics in an accessible way",
      "Building visual trust",
      "Different learning formats",
      "Building a product from zero within limited time",
    ],
    process: [],
    metrics: [],
  },
  {
    id: "jggl",
    icon: Cpu,
    iconLabel: "JGGL",
    title: "Making AI content creation accessible through product design.",
    description: "A social product that brings AI-generated content, virtual artists and social mechanics together. I designed AI artist creation, content generation, the social feed and publishing flows.",
    meta: "Product Designer, X-Labs · 2024",
    role: "User flows · AI artist creation · content generation flows · social feed · publishing and interactions · interactive prototypes · iterations on feedback · developer handoff",
    timeline: "Feb 2024 – Dec 2024",
    platform: "Mobile and web (AI/ML)",
    decisions: [
      { title: "AI artist creation", text: "The creation of a virtual artist had to be understandable for people with no professional experience: an initial setup, personalisation, generation settings and a clear step into creating content." },
      { title: "Content generation", text: "Instead of an overloaded interface, a clear sequence of actions with room for customisation. The trade-off was between a simple first run and the flexibility advanced users expect." },
      { title: "A social feed that joins creation and consumption", text: "The feed supports browsing publications, going to artists, interacting with content and publishing your own results." },
    ],
    imageRatio: 1024 / 768,
    image: "/projects/jggl-2.jpg",
    imageAlt: "JGGL feed post, held in hand",
    gallery: [
      { src: "/projects/jggl-2.jpg", alt: "JGGL feed post, held in hand" },
      { src: "/projects/jggl-3.jpg", alt: "JGGL new publication / content creation screen" },
      { src: "/projects/jggl-4.jpg", alt: "JGGL feed view grid of AI-generated artist content" },
      { src: "/projects/jggl-5.jpg", alt: "JGGL app home screen with favorites and tracks" },
      { src: "/projects/jggl-6.jpg", alt: "JGGL new track publication screen" },
    ],
    liveUrl: "https://jggl.ai/",
    context: "JGGL combines AI-generated content, virtual artists and social mechanics. Users can create AI artists, generate content, publish it and interact with other participants.",
    problem: "Making music and visual content traditionally takes skills, tools and time. AI tools lower the technical barrier, but creating and sharing content often happens in separate products. JGGL's task was to join content creation, artist personalisation and social interaction in one experience.",
    solution: "Design a mobile-first experience around three things: a simple way to create an AI artist, a clear content generation sequence, and a social feed that rewards creating and sharing. Key hypotheses: the simpler the first scenario, the likelier a first generation; users need to see a result quickly; social feedback may motivate them to keep creating; too many settings at the start can hurt onboarding.",
    stages: [],
    highlights: [
      "Designed user flows for the whole product",
      "Designed the UX/UI for creating an AI artist",
      "Designed content generation flows",
      "Designed the social feed, publishing and interactions",
      "Built interactive prototypes and iterated on feedback",
      "Prepared the solutions for development",
    ],
    outcomes: [
      "Designed UX flows for creating an AI artist",
      "Designed content generation interfaces",
      "Designed the social scenarios",
      "Prepared prototypes and development-ready designs",
    ],
    challenges: [
      "Designing an AI product in a new category",
      "Working with uncertainty",
      "Balancing a simple interface against complex generation",
      "Joining creative tools and a social experience",
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
    title: "Simplifying the mobile power bank rental experience.",
    description: "A utility app for renting portable chargers by QR code across European markets. I reworked the rental, payment, active rental, error and return flows and the interface.",
    meta: "Product Designer (Freelance), QR Charge · Aug 2023 – Jan 2024",
    role: "Mobile app and website UX/UI · rental flows · navigation · scanning and payment · error states · UI components · developer handoff",
    timeline: "Aug 2023 – Jan 2024",
    platform: "Mobile app and website",
    decisions: [
      { title: "A sequential rental flow", text: "The core flow had to make four things obvious: how to start a rental, which station to use, what happens after scanning and when the rental counts as active." },
      { title: "Clear payment states", text: "Waiting for payment, successful payment, an error and a retry each have their own state, so people always know where they stand." },
      { title: "Designed error handling", text: "Scenarios for an unrecognised QR code, an unavailable device, an unfinished payment and a problem at return." },
      { title: "A visible active rental", text: "The current rental, its status and the actions available to the user are always easy to see." },
    ],
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
    context: "QR Charge is a service for renting portable chargers by QR code. The main journey: find a station, scan the QR code, rent, pay and return the device.",
    problem: "People rent a charger quickly, often away from home, with a low battery and little time. That makes simple navigation, as few actions as possible, a clear price, a transparent payment status, clear instructions when something fails and a clear return process especially important. As the app grew, its user flows and interface needed reworking.",
    solution: "A mobile-first journey that keeps the main path short and handles the edge cases: a clear scanning entry point, simple rental confirmation, wallet and active rental state in one place, and clear return instructions.",
    stages: [],
    highlights: [
      "Reworked the mobile app flows and navigation",
      "Designed the scanning and rental flows",
      "Designed payment UX and wallet interactions",
      "Designed error states",
      "Updated the UI components for accessibility",
      "Prepared the designs for development",
    ],
    outcomes: [
      "Reworked the main rental and return journeys",
      "Updated the user interface",
      "Designed error states",
      "Improved the structure of the user path at the design level",
    ],
    challenges: [
      "A high-frequency use case under time pressure",
      "Edge cases: failed scans, unavailable devices, payment and return problems",
    ],
    process: [],
    metrics: [],
  },
  {
    id: "qr-tips",
    icon: HandCoins,
    iconLabel: "QR Tips",
    title: "Designing a cashless tipping experience from scratch.",
    description: "A payment product for tipping staff by QR code. I designed it from scratch: the guest flow, payment states and a minimal interface.",
    meta: "Product Designer (Freelance), QR Charge · Aug 2023 – Jan 2024",
    role: "UX structure · core flows · QR-based tipping · UI · payment states · developer handoff",
    timeline: "Aug 2023 – Jan 2024",
    platform: "Mobile web",
    decisions: [
      { title: "A QR-first experience", text: "The QR code is the entry point. A guest gets to the tipping flow without looking for an app or for the employee." },
      { title: "A minimal payment flow", text: "Scan the QR code, select the employee or open their profile, choose an amount, pay, get a confirmation." },
      { title: "Clear payment feedback", text: "The interface shows whether the payment went through and explains what to do next if it failed." },
      { title: "A simple interface", text: "The visual design is built for one main action, with as few distractions and as little navigation as possible." },
    ],
    imageRatio: 1024 / 768,
    image: "/projects/qr-tips-1.jpg",
    imageAlt: "QR Tips flow: QR card, tip selection, payment",
    gallery: [{ src: "/projects/qr-tips-1.jpg", alt: "QR Tips flow: QR card, tip selection, payment" }],
    liveUrl: "https://qrtips.ch/",
    context: "QRTips is a service for cashless tips by QR code. It lets guests leave a tip for staff without cash, and gives venues a way to roll out a convenient tool for their team.",
    problem: "People carry cash less and less, so leaving a tip gets harder. Regular card payments do not always make it easy to pass a tip to a specific employee. The task was to create a simple digital journey that needs no explanation.",
    solution: "Make the QR code the entry point and keep the payment journey to the minimum, while serving three groups: guests who want a quick, safe payment without registration, staff who want to receive tips conveniently and see what they received, and businesses that want transparency.",
    stages: [],
    highlights: [
      "Designed the application from scratch",
      "Developed the UX structure and core flows",
      "Designed the QR-based tipping process",
      "Designed the interface and payment states",
      "Prepared the interface for development",
    ],
    outcomes: [
      "Created the product from scratch",
      "Designed the core cashless tipping flow",
      "Created a single interface for the application",
      "Prepared the main UX/UI decisions for implementation",
    ],
    challenges: [
      "Creating a product from scratch",
      "A very simple payment journey",
      "Building user trust in a payment",
      "Balancing the needs of guests, staff and venues",
      "Making the main scenario as clear as possible",
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
  role: nb(p.role),
  highlights: p.highlights.map(nb),
  stages: p.stages.map((d) => ({ title: nb(d.title), text: nb(d.text) })),
  outcomes: p.outcomes.map(nb),
  challenges: p.challenges.map(nb),
  decisions: p.decisions.map((d) => ({ title: nb(d.title), text: nb(d.text) })),
  learnings: p.learnings ? nb(p.learnings) : undefined,
  process: p.process.map(nb),
}));
