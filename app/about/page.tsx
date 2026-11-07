import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-36 pb-16 sm:px-10 sm:pt-48 sm:pb-20">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Iryna Mikheyenka</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">product designer</strong> with 6+ years of experience designing digital products for international markets across <strong className="font-semibold text-foreground">healthcare, AI, fintech, Web3 and consumer platforms</strong>. I specialize in complex user flows, product strategy, UX research and scalable design systems for web and mobile.
              </p>
              <p>
                I&rsquo;m experienced in <strong className="font-semibold text-foreground">0→1 product development</strong> and cross-functional collaboration. At Pink Elephant Group I built States of Mind from scratch and design across its mental health, education and provider-discovery products; earlier I worked on AI products at X Labs and a power bank rental app at QR Charge.
              </p>
              <p>
                I also taught <strong className="font-semibold text-foreground">UX/UI at BELHARD Academy</strong>, mentoring new designers through portfolio projects. I speak Russian (native), English (B2 / professional working) and a little German. Currently open to product design roles.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
