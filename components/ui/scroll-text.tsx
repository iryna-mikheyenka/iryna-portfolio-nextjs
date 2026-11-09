"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { MotionValue } from "motion/react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { Lightbox } from "@/components/ui/page-interactions";
import { nb } from "@/lib/nbsp";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}): ReactNode {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return <motion.span style={{ opacity }}>{word}</motion.span>;
}

/** Text that fills in word by word as it scrolls into view. */
export function ScrollText({
  text,
  className,
}: {
  text: string;
  className?: string;
}): ReactNode {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.72"],
  });
  const clean = nb(text);
  const words = clean.split(" ");

  if (reduce) {
    return <p className={className}>{clean}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = (i / words.length) * 0.9;
        return (
          <Fragment key={i}>
            <Word
              word={word}
              progress={scrollYProgress}
              start={start}
              end={start + 0.1}
            />
            {i < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </p>
  );
}

/** A bullet list that fills in as one continuous reading pass, item after item. */
export function ScrollList({ items }: { items: string[] }): ReactNode {
  const ref = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.72"],
  });
  const split = items.map((t) => nb(t).split(" "));
  const total = split.reduce((n, w) => n + w.length, 0);
  const offsets = split.map((_, k) =>
    split.slice(0, k).reduce((n, w) => n + w.length, 0),
  );

  return (
    <ul ref={ref} className="flex flex-col gap-3">
      {split.map((words, k) => {
        const base = offsets[k] ?? 0;
        return (
          <li
            key={k}
            className="flex gap-3 text-[15px] leading-[1.6] tracking-tight text-foreground"
          >
            <span
              aria-hidden="true"
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
            />
            <p className="flex-1">
              {reduce
                ? words.join(" ")
                : words.map((word, i) => {
                    const start = ((base + i) / total) * 0.9;
                    return (
                      <Fragment key={i}>
                        <Word
                          word={word}
                          progress={scrollYProgress}
                          start={start}
                          end={start + 0.1}
                        />
                        {i < words.length - 1 ? " " : null}
                      </Fragment>
                    );
                  })}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

/** Fades and lifts its children in when they enter the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Gallery image: fades in from blur once loaded, gently zooms on hover. */
export function ProjectImage({
  src,
  alt,
  ratio,
  priority = false,
}: {
  src: string;
  alt: string;
  ratio: number;
  priority?: boolean;
}): ReactNode {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`Enlarge image: ${alt}`}
      className="group ring-foreground/5 focus-ring relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-foreground/5 ring-1 transition-shadow duration-500 hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.3)]"
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          priority={priority}
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-[opacity,filter] duration-700 ease-out ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
        />
      </div>
    </button>
    {open ? (
      <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />
    ) : null}
    </>
  );
}
