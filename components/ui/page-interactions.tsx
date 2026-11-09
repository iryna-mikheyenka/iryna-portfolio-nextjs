"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Thin reading-progress line fixed to the top of the viewport. */
export function ReadingProgress(): ReactNode {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-60 h-0.5 bg-foreground"
    />
  );
}

type TocItem = { id: string; label: string };

/** Floating section index: highlights the section being read, click to jump. */
export function SectionNav(): ReactNode {
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-toc]"),
    );
    const list = nodes.map((el, i) => {
      if (!el.id) el.id = `section-${i}`;
      return {
        id: el.id,
        label: (el.textContent ?? "").replace(/ /g, " ").trim(),
      };
    });
    const raf = requestAnimationFrame(() => setItems(list));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-2.5">
        {items.map((it) => {
          const on = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(it.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`focus-ring group flex items-center gap-3 text-[12px] tracking-tight transition-colors duration-300 ${
                  on
                    ? "text-foreground"
                    : "text-foreground/35 hover:text-foreground/75"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px bg-current transition-all duration-300 ${
                    on ? "w-8" : "w-4 group-hover:w-6"
                  }`}
                />
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Numbers inside a metric string count up when scrolled into view. */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}): ReactNode {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const parts = value.split(/(\d[\d,]*(?:\.\d+)?)/);
  const nums = parts.map((p, i) => (i % 2 === 1 ? p : null));
  const targets = nums.map((p) => (p ? parseFloat(p.replace(/,/g, "")) : 0));
  const [t, setT] = useState(1);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, 1, {
      duration: 1.4,
      ease: EASE,
      onUpdate: setT,
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <p ref={ref} className={className}>
      {parts.map((p, i) => {
        const raw = nums[i];
        if (!raw) return <span key={i}>{p}</span>;
        const decimals = raw.includes(".") ? raw.split(".")[1]!.length : 0;
        const v = (targets[i] ?? 0) * t;
        const text = raw.includes(",")
          ? Math.round(v).toLocaleString("en-US")
          : v.toFixed(decimals);
        return (
          <span key={i} className="tabular-nums">
            {text}
          </span>
        );
      })}
    </p>
  );
}

/** Full-screen viewer for a gallery image. */
export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}): ReactNode {
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
        />
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
