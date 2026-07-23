"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { PROJECTS } from "@/lib/projects";

export function WorkList(): ReactNode {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeProject =
    PROJECTS.find((project) => project.id === hoveredId) ?? PROJECTS[0]!;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_360px] md:items-start md:gap-10">
      <FadeIn>
        <ul className="border-foreground/8 flex flex-col divide-y divide-foreground/8 border-y">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(project.id)}
                onBlur={() => setHoveredId(null)}
                className="focus-ring group flex items-center justify-between gap-6 py-6 sm:py-7"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-[1.65rem] font-medium tracking-tight text-foreground transition-colors duration-300 sm:text-[2.1rem] group-hover:text-foreground/55">
                    {project.iconLabel}
                  </span>
                  <span className="text-[13px] tracking-tight text-foreground/50 sm:text-[14px]">
                    {project.meta.split("·")[0]?.trim()}
                  </span>
                </div>

                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-foreground/5 md:hidden">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <ArrowUpRight
                  className="hidden h-5 w-5 shrink-0 text-foreground/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:block"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="sticky top-28 hidden aspect-[4/3] w-full overflow-hidden rounded-3xl bg-foreground/5 ring-1 ring-foreground/5 md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.imageAlt}
              fill
              sizes="360px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
