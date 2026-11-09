import { BrandWork } from "@/components/about/brand-work";
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
                A <strong className="font-semibold text-foreground">product designer</strong> with 6+&nbsp;years of&nbsp;experience designing web and mobile products for international markets, from <strong className="font-semibold text-foreground">0→1 launches</strong> to the growth of&nbsp;live products. I&nbsp;turn research, analytics and experiments into simple interfaces that move key metrics: <strong className="font-semibold text-foreground">+16% qualified leads in&nbsp;12&nbsp;weeks, 4× provider profile views per&nbsp;session, +22% sessions</strong>.
              </p>
              <p>
                I&rsquo;m strong in complex user flows, hypothesis testing and design systems, with a graphic design background: hand-drawn illustration, logos, Photoshop and Illustrator, and AI-generated visuals for platforms and marketing. I&nbsp;work closely with product managers, analysts and engineers from concept to launch.
              </p>
              <p>
                I&nbsp;also taught UX/UI as a part-time lecturer at BELHARD Academy (2023&ndash;2025). Based in Málaga, Spain, open to remote work and business trips. I&nbsp;speak Russian (native), English (B2), Polish (elementary) and a&nbsp;little German.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <BrandWork />
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
