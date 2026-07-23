import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Services } from "@/components/about/services";
import { Stack } from "@/components/about/stack";
import { Stats } from "@/components/about/stats";
import { Testimonials } from "@/components/about/testimonials";
import { ContactCard } from "@/components/contact/contact-card";
import { WorkHeroPanel } from "@/components/hero/work-hero-panel";
import { WorkGrid } from "@/components/projects/work-grid";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section
        id="work"
        className="scroll-mt-28 mx-auto w-full max-w-275 px-6 pt-44 pb-20 sm:px-10 sm:pt-56 sm:pb-28"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[340px_1fr] md:gap-12 lg:gap-16">
          <WorkHeroPanel />
          <WorkGrid />
        </div>
      </section>

      <section id="about" className="scroll-mt-28 w-full">
        <div className="mx-auto w-full max-w-160 px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-semibold tracking-tight text-foreground/50 uppercase">
              About
            </p>
            <h2 className="mt-3 font-serif text-[2.25rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem]">
              About me.
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">product designer</strong> with 6+ years designing digital products for international markets across <strong className="font-semibold text-foreground">healthcare, AI, fintech and consumer platforms</strong>. I specialize in complex user flows, product strategy and UX research, and in building design systems that keep working as a product grows.
              </p>
              <p>
                I&rsquo;ve taken products from <strong className="font-semibold text-foreground">0→1</strong> and helped mature ones scale, working closely with founders, product managers and engineers along the way. At Pink Elephant Group I built States of Mind from scratch; earlier I designed for QR Charge and X Labs.
              </p>
              <p>
                Alongside client work, I taught <strong className="font-semibold text-foreground">UX/UI at BELHARD Academy</strong>, mentoring new designers through portfolio projects and real product-design workflows. Currently open to product design roles and select freelance projects.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <Stats />
          </FadeIn>
        </div>

        <div className="mx-auto mt-16 w-full max-w-[40rem] px-6 sm:px-10 sm:mt-20">
          <FadeIn className="flex flex-col gap-10">
            <Services />
            <Experience />
            <Education />
            <Stack />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-275 px-6 sm:mt-28 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-5 pb-10 text-center sm:pb-14">
          <p className="text-[13px] font-semibold tracking-tight text-foreground/50 uppercase">
            Testimonials
          </p>
          <h2 className="font-serif text-[2.25rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem]">
            What people say.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Testimonials />
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
