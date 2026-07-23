import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { MasonryGrid, MasonryItem } from "@/components/ui/masonry-grid";
import { PROJECTS } from "@/lib/projects";

const RATIOS = [4 / 5, 1 / 1, 3 / 4, 4 / 5, 1 / 1, 3 / 4];

export function WorkGrid(): ReactNode {
  return (
    <MasonryGrid>
      {PROJECTS.map((project, i) => (
        <MasonryItem key={project.id}>
          <Link
            href={`/projects/${project.id}`}
            className="focus-ring group relative block w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1 ring-foreground/5"
            style={{ aspectRatio: RATIOS[i % RATIOS.length] }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div className="flex flex-col gap-0.5 p-4">
                <span className="text-[15px] font-semibold tracking-tight text-white">
                  {project.iconLabel}
                </span>
                <span className="text-[12px] tracking-tight text-white/70">
                  {project.meta.split("·")[0]?.trim()}
                </span>
              </div>
            </div>
          </Link>
        </MasonryItem>
      ))}
    </MasonryGrid>
  );
}
