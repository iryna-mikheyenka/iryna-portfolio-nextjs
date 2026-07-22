import { ArrowLeft } from "lucide-react";
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
          <p className="mt-4 text-[13px] tracking-tight text-foreground/50">
            {project.meta}
          </p>

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

          <div className="mt-10 flex flex-col gap-5 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
            {project.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
