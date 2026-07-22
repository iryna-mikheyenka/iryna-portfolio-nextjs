import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import { PROJECTS, getProject } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return createMetadata({ title: "Project not found", path: "/projects" });
  }
  return createMetadata({
    title: project.iconLabel,
    description: project.description,
    path: `/projects/${project.id}`,
  });
}

function SectionLabel({ children }: { children: ReactNode }): ReactNode {
  return (
    <p className="mb-4 text-[13px] font-semibold tracking-tight text-foreground/50 uppercase">
      {children}
    </p>
  );
}

function Panel({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-6 sm:p-8">
      {children}
    </div>
  );
}

export default async function ProjectPage({
  params,
}: PageProps): Promise<ReactNode> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-44 pb-16 sm:px-10 sm:pt-56 sm:pb-20">
        <FadeIn>
          <Link
            href="/projects"
            className="focus-ring group mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back to projects
          </Link>

          <header className="mb-8 flex items-center gap-2.5">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </header>

          <h1 className="font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-[2.5rem]">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="text-[13px] tracking-tight text-foreground/50">
              {project.meta}
            </p>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group border-foreground/10 inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-[12px] font-medium tracking-tight text-foreground/75 transition-colors hover:text-foreground"
              >
                Visit live site
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>

          {project.gallery.length > 1 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={img.src}
                  className={`ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1 ${
                    i === 0 ? "col-span-2" : ""
                  }`}
                  style={{ aspectRatio: i === 0 ? project.imageRatio : 4 / 3 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      i === 0
                        ? "(min-width: 1024px) 640px, 100vw"
                        : "(min-width: 1024px) 320px, 50vw"
                    }
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="ring-foreground/5 relative mt-10 w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
              style={{ aspectRatio: project.imageRatio }}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Context */}
          <div className="mt-12">
            <SectionLabel>Context</SectionLabel>
            <p className="text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              {project.context}
            </p>
          </div>

          {/* Problem / Solution */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Panel>
              <p className="mb-3 text-[13px] font-semibold tracking-tight text-foreground/50 uppercase">
                Problem
              </p>
              <p className="text-[15px] leading-[1.6] tracking-tight text-foreground/80">
                {project.problem}
              </p>
            </Panel>
            <Panel>
              <p className="mb-3 text-[13px] font-semibold tracking-tight text-foreground/50 uppercase">
                Solution
              </p>
              <p className="text-[15px] leading-[1.6] tracking-tight text-foreground/80">
                {project.solution}
              </p>
            </Panel>
          </div>

          {/* What I did */}
          <div className="mt-10">
            <SectionLabel>What I did</SectionLabel>
            <Panel>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-[1.6] tracking-tight text-foreground/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          {/* Process */}
          {project.process.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Process</SectionLabel>
              <Panel>
                <ol className="flex flex-col gap-2">
                  {project.process.map((step, i) => (
                    <li
                      key={i}
                      className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-3"
                    >
                      <span className="border-foreground/10 text-foreground/60 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[13px] font-semibold">
                        {i + 1}
                      </span>
                      <span className="text-[15px] tracking-tight text-foreground">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </Panel>
            </div>
          ) : null}

          {/* Results */}
          {project.metrics.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Results</SectionLabel>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-3xl border p-6 text-center"
                  >
                    <p className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[13px] tracking-tight text-foreground/60">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
