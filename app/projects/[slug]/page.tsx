import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { CountUp, ReadingProgress } from "@/components/ui/page-interactions";
import { ProjectImage, Reveal, ScrollList, ScrollText } from "@/components/ui/scroll-text";
import { createMetadata } from "@/lib/metadata";
import { nb } from "@/lib/nbsp";
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
    <Reveal>
      <p
        className="mb-4 text-[13px] font-semibold tracking-tight text-foreground/50 uppercase"
      >
        {children}
      </p>
    </Reveal>
  );
}

function Panel({ children }: { children: ReactNode }): ReactNode {
  return (
    <Reveal>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 hover:border-foreground/12 hover:bg-foreground/[0.04] rounded-4xl border p-6 transition-colors duration-700 ease-out sm:p-8">
        {children}
      </div>
    </Reveal>
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
  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject =
    PROJECTS.length > 1 ? PROJECTS[(index + 1) % PROJECTS.length] : undefined;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ReadingProgress />
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
            Back to&nbsp;projects
          </Link>

          <header className="mb-8 flex items-center gap-2.5">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </header>

          <h1 className="text-balance font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-[2.5rem]">
            {nb(project.title)}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="text-[13px] tracking-tight text-foreground/50">
              {nb(project.meta)}
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


          {/* At a glance */}
          <dl className="mt-8 grid grid-cols-2 gap-3">
            {[
              ["Role", project.role],
              ["Timeline", project.timeline],
              ["Platform", project.platform],
            ].map(([k, v]) => (
              <div
                key={k}
                className={`${k === "Role" ? "col-span-2 " : ""}border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-3xl border p-4`}
              >
                <dt className="text-[12px] font-semibold tracking-tight text-foreground/50 uppercase">
                  {k}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-[1.5] tracking-tight text-foreground/85">
                  {nb(v ?? "")}
                </dd>
              </div>
            ))}
          </dl>

          {project.gallery.length > 1 ? (
            <div className="mt-10 flex flex-col gap-6">
              {project.gallery.map((img, i) => (
                <Reveal key={img.src}><figure className="flex flex-col gap-2">
                  <ProjectImage
                    src={img.src}
                    alt={nb(img.alt)}
                    ratio={i === 0 ? project.imageRatio : 4 / 3}
                    priority={i === 0}
                  />
                  {i > 0 ? (
                    <figcaption className="text-[13px] tracking-tight text-foreground/55">
                      {nb(img.alt)}
                    </figcaption>
                  ) : null}
                </figure></Reveal>
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
            <ScrollText
              text={project.context}
              className="text-[17px] leading-[1.7] tracking-tight text-foreground sm:text-[18px]"
            />
          </div>

          {/* Problem / Solution */}
          <div className="mt-10 flex flex-col gap-4">
            {(
              [
                ["Problem", project.problem],
                ["Solution", project.solution],
              ] as const
            ).map(([label, text]) => (
              <Panel key={label}>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                  <p className="text-[13px] font-semibold tracking-tight text-foreground/50 uppercase sm:w-24 sm:shrink-0 sm:pt-[3px]">
                    {label}
                  </p>
                  <ScrollText
                    text={text}
                    className="flex-1 text-[15px] leading-[1.65] tracking-tight text-foreground"
                  />
                </div>
              </Panel>
            ))}
          </div>


          {/* Product evolution */}
          {project.stages.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Product evolution</SectionLabel>
              <div className="flex flex-col gap-3">
                {project.stages.map((st) => (
                  <Panel key={nb(st.title)}>
                    <p className="text-[16px] font-medium tracking-tight text-foreground">
                      {nb(st.title)}
                    </p>
                    <ScrollText
                      text={st.text}
                      className="mt-2 text-[15px] leading-[1.65] tracking-tight text-foreground"
                    />
                  </Panel>
                ))}
              </div>
            </div>
          ) : null}

          {/* What I did */}
          <div className="mt-10">
            <SectionLabel>What I&nbsp;did</SectionLabel>
            <Panel>
              <ScrollList items={project.highlights} />
            </Panel>
          </div>


          {/* Key decisions */}
          {project.decisions.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Key decisions</SectionLabel>
              <div className="flex flex-col gap-3">
                {project.decisions.map((d) => (
                  <Panel key={nb(d.title)}>
                    <p className="text-[16px] font-medium tracking-tight text-foreground">
                      {nb(d.title)}
                    </p>
                    <ScrollText
                      text={d.text}
                      className="mt-2 text-[15px] leading-[1.65] tracking-tight text-foreground"
                    />
                  </Panel>
                ))}
              </div>
            </div>
          ) : null}

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
                        {nb(step)}
                      </span>
                    </li>
                  ))}
                </ol>
              </Panel>
            </div>
          ) : null}


          {/* Outcomes */}
          {project.outcomes.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Outcomes</SectionLabel>
              <Panel>
                <ScrollList items={project.outcomes} />
              </Panel>
            </div>
          ) : null}

          {/* Results */}
          {project.metrics.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Results</SectionLabel>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, i) => (
                  <Reveal key={i} delay={(i % 2) * 0.08}>
                  <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 hover:border-foreground/12 hover:bg-foreground/[0.04] rounded-3xl border p-6 text-center transition-colors duration-700 ease-out">
                    <CountUp
                      value={metric.value}
                      className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]"
                    />
                    <p className="mt-1 text-[13px] tracking-tight text-foreground/60">
                      {nb(metric.label)}
                    </p>
                  </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}


          {/* Product scale */}
          {project.scale && project.scale.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>The product today</SectionLabel>
              <div className="grid grid-cols-2 gap-4">
                {project.scale.map((metric, i) => (
                  <Reveal key={i} delay={(i % 2) * 0.08}>
                  <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 hover:border-foreground/12 hover:bg-foreground/[0.04] rounded-3xl border p-6 text-center transition-colors duration-700 ease-out">
                    <CountUp
                      value={metric.value}
                      className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]"
                    />
                    <p className="mt-1 text-[13px] tracking-tight text-foreground/60">
                      {nb(metric.label)}
                    </p>
                  </div>
                  </Reveal>
                ))}
              </div>
              {project.scaleSource ? (
                <p className="mt-3 text-[12px] tracking-tight text-foreground/45">
                  Source: {project.scaleSource}
                </p>
              ) : null}
            </div>
          ) : null}

          {/* Challenges */}
          {project.challenges.length > 0 ? (
            <div className="mt-10">
              <SectionLabel>Challenges</SectionLabel>
              <Panel>
                <ScrollList items={project.challenges} />
              </Panel>
            </div>
          ) : null}

          {project.learnings ? (
            <div className="mt-10">
              <SectionLabel>What I&nbsp;learned</SectionLabel>
              <ScrollText
                text={project.learnings}
                className="text-[17px] leading-[1.7] tracking-tight text-foreground"
              />
            </div>
          ) : null}

        </FadeIn>
      </section>

      {nextProject ? (
        <section className="mx-auto w-full max-w-160 px-6 pb-16 sm:px-10 sm:pb-20">
          <Reveal>
            <p className="mb-4 text-[13px] font-semibold tracking-tight text-foreground/50 uppercase">
              Next project
            </p>
            <Link
              href={`/projects/${nextProject.id}`}
              className="focus-ring group border-foreground/8 hover:border-foreground/15 bg-background flex flex-col gap-5 rounded-3xl border p-3 transition-colors duration-500 sm:flex-row sm:items-center sm:gap-6 sm:p-3.5"
            >
              <div className="ring-foreground/5 relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-2xl bg-foreground/5 ring-1 sm:w-56">
                <div className="absolute inset-0 transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]">
                  <Image
                    src={nextProject.image}
                    alt={nextProject.imageAlt}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0 [@media(hover:none)]:grayscale-0"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-1 pb-1 sm:py-2 sm:pr-4">
                <span className="text-sm font-medium tracking-tight text-foreground/60">
                  {nextProject.iconLabel}
                </span>
                <h2 className="text-balance text-[19px] leading-[1.2] font-medium tracking-tight text-foreground sm:text-[21px]">
                  {nb(nextProject.title)}
                </h2>
                <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-medium tracking-tight text-foreground/70 transition-colors duration-500 group-hover:text-foreground">
                  View project
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      ) : null}

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
