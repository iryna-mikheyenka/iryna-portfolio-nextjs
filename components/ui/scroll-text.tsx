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
    offset: ["start 0.92", "end 0.55"],
  });
  const words = text.split(" ");

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = (i / words.length) * 0.85;
        return (
          <Fragment key={i}>
            <Word
              word={word}
              progress={scrollYProgress}
              start={start}
              end={start + 0.15}
            />
            {i < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </p>
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
      className="group ring-foreground/5 focus-ring relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-foreground/5 ring-1 transition-shadow duration-500 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.35)]"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 640px, 100vw"
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-[opacity,transform,filter] duration-700 ease-out group-hover:scale-[1.03] ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
      />
    </button>
    {open ? (
      <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />
    ) : null}
    </>
  );
}
