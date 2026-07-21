import {
  ArrowRight,
  BatteryCharging,
  Briefcase,
  Building2,
  Cpu,
  HeartPulse,
  Palette,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is stylized abstract mockups (no real product
 * screenshots included). Swap in real screenshots from Figma/your work
 * whenever you have them — drop images into /public/projects and update
 * the `image` field below.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "states-of-mind",
    icon: HeartPulse,
    iconLabel: "States of Mind",
    title:
      "A mental-health platform built 0→1 — structure, user journeys and a scalable design system.",
    description:
      "I defined the product from scratch and designed provider discovery, verification, onboarding and assessment flows. A redesigned funnel lifted qualified leads by 16%, and a reworked verification workflow cut cycle time from 7 days to 2.",
    meta: "Senior Product Designer, Pink Elephant Group · 2024–Present",
    imageRatio: 1024 / 768,
    image: "/projects/states-of-mind.png",
    imageAlt: "States of Mind product dashboard mockup",
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
  },
  {
    id: "duck-design",
    icon: Palette,
    iconLabel: "Duck.design",
    title:
      "Navigation and information-architecture redesigns for Momoboard, Conduit and Clevmate.",
    description:
      "Reworked IA and content hierarchy for international SaaS and community platforms, including localizing UX for Korean users on Momoboard.",
    meta: "UX/UI Designer, Duck.design · 2022–2023",
    imageRatio: 1024 / 768,
    image: "/projects/duck-design.png",
    imageAlt: "Duck.design project cards mockup",
  },
  {
    id: "senla",
    icon: Building2,
    iconLabel: "SENLA",
    title: "Enterprise and insurance dashboards for daily operational use.",
    description:
      "Simplified dense, data-heavy screens, map interactions and supervisor workflows for internal enterprise tools.",
    meta: "UX/UI Designer, SENLA · 2020–2021",
    imageRatio: 1024 / 768,
    image: "/projects/senla.png",
    imageAlt: "SENLA enterprise dashboard mockup",
  },
  {
    id: "freelance",
    icon: Briefcase,
    iconLabel: "Freelance",
    title: "Full design cycles for startups across fintech and e-commerce.",
    description:
      "Research, user flows, wireframes, high-fidelity UI and developer handoff for startups and small businesses across multiple industries.",
    meta: "Freelance UX/UI Designer · 2019–2022",
    imageRatio: 1024 / 768,
    image: "/projects/freelance.png",
    imageAlt: "Freelance project cards mockup",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
