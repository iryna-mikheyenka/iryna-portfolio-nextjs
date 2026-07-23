import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MasonryGrid, MasonryItem } from "@/components/ui/masonry-grid";
import { createMetadata } from "@/lib/metadata";
import { PROJECTS, getProject } from "@/lib/projects";

const GALLERY_RATIOS = [4 / 3, 3 / 4, 1 / 1, 4 / 3, 3 / 4];

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
    <p className="mb-3 text-[12px] font-semibold tracking-tight text-foreground/50 uppercase">
      {children}
    </p>
  );
}

/** "Senior Product Designer, Pink Elephant Group · 2024–Present" -> parts */
function parseMeta(meta: string): {
  role: string;
  company: string;
  period: string;
} {
  const [left, period] = meta.split("·").map((s) => s.trim());
  const [role, company] = (left ?? "").split(",").map((s) => s.trim());
  return { role: role ?? "", company: company ?? "", period: period ?? "" };
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
  const { role, company, period } = parseMeta(project.meta);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-56 sm:pb-20">
        <Link
          href="/#work"
          className="focus-ring group mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to projects
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[360px_1fr] md:gap-14 lg:gap-20">
          {/* Left: sticky info column */}
          <FadeIn className="md:sticky md:top-28 md:self-start">
            <header className="mb-6 flex items-center gap-2.5">
              <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
                <Icon
                  className="h-3.5 w-3.5 text-foreground"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-medium tracking-tight text-foreground">
                {project.iconLabel}
              </span>
            </header>

            <h1 className="font-serif text-[1.85rem] font-medium leading-[1.15] tracking-tight text-foreground sm:text-[2.1rem]">
              {project.title}
            </h1>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group border-foreground/10 mt-4 inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-[12px] font-medium tracking-tight text-foreground/75 transition-colors hover:text-foreground"
              >
                Visit live site
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}

            <dl className="border-foreground/8 mt-8 grid grid-cols-2 gap-y-4 border-t pt-6 text-[14px]">
              <div>
                <dt className="text-foreground/45 text-[12px] uppercase tracking-tight">
                  Role
                </dt>
                <dd className="mt-1 text-foreground tracking-tight">
                  {role}
                </dd>
              </div>
              <div>
                <dt className="text-foreground/45 text-[12px] uppercase tracking-tight">
                  Company
                </dt>
                <dd className="mt-1 text-foreground tracking-tight">
                  {company}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-foreground/45 text-[12px] uppercase tracking-tight">
                  Period
                </dt>
                <dd className="mt-1 text-foreground tracking-tight">
                  {period}
                </dd>
              </div>
            </dl>

            <div className="mt-8 space-y-5">
              <div>
                <SectionLabel>Context</SectionLabel>
                <p className="text-[15px] leading-[1.65] tracking-tight text-foreground/75">
                  {project.context}
                </p>
              </div>
              <div>
                <SectionLabel>Problem</SectionLabel>
                <p className="text-[15px] leading-[1.65] tracking-tight text-foreground/75">
                  {project.problem}
                </p>
              </div>
              <div>
                <SectionLabel>Solution</SectionLabel>
                <p className="text-[15px] leading-[1.65] tracking-tight text-foreground/75">
                  {project.solution}
                </p>
              </div>
              <div>
                <SectionLabel>What I did</SectionLabel>
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[14.5px] leading-[1.55] tracking-tight text-foreground/75"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-foreground/35"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.process.length > 0 ? (
                <div>
                  <SectionLabel>Process</SectionLabel>
                  <ol className="flex flex-col gap-1.5">
                    {project.process.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.5] tracking-tight text-foreground/75"
                      >
                        <span className="text-foreground/40 text-[12px] font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              {project.metrics.length > 0 ? (
                <div>
                  <SectionLabel>Results</SectionLabel>
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-2xl border p-4"
                      >
                        <p className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground">
                          {metric.value}
                        </p>
                        <p className="mt-0.5 text-[12px] tracking-tight text-foreground/55">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </FadeIn>

          {/* Right: same masonry grid system as the homepage Work section */}
          <FadeIn delay={0.1}>
            <MasonryGrid>
              {(project.gallery.length > 0
                ? project.gallery
                : [{ src: project.image, alt: project.imageAlt }]
              ).map((img, i) => (
                <MasonryItem key={img.src}>
                  <div
                    className="ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
                    style={{ aspectRatio: GALLERY_RATIOS[i % GALLERY_RATIOS.length] }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </MasonryItem>
              ))}
            </MasonryGrid>
          </FadeIn>
        </div>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
