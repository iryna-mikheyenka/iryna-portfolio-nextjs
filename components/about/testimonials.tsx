import type { ReactNode } from "react";

/**
 * Real LinkedIn recommendations, trimmed to a contiguous excerpt each —
 * no wording added or meaning changed, just shortened for the page.
 */
type Testimonial = {
  name: string;
  title: string;
  quote: string;
  bg: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Egor Titok",
    title: "Project & Product Manager · PSM",
    quote:
      "Ira demonstrated strong interface design skills, significantly enhancing the user experience of our products. She also showcased her managerial abilities, successfully gathering and visually representing all the product-related information for the projects.",
    bg: "#5b6ee1",
  },
  {
    name: "Taya Kryzhanouskaya",
    title: "Team Lead of Design Team · UX Engineer",
    quote:
      "Irina's passion for graphic design is evident in her work, which she approaches with natural flair and originality, infusing her unique perspective into each task. She is able to develop any idea and always brings her own variations.",
    bg: "#2f8f7a",
  },
  {
    name: "Yury Fyodorov",
    title: "Team Lead · Flutter Engineer",
    quote:
      "Irina demonstrated exceptional skills and professionalism, quickly creating the initial design for our project within an impressively short timeframe. Her ability to deliver high-quality results under tight deadlines set a strong foundation for our work.",
    bg: "#d97a4f",
  },
  {
    name: "Vadim Bakhar",
    title: "Product Manager · R&D · AI",
    quote:
      "Irina brought exceptional UI/UX design skills to our team, greatly enhancing our product's user experience. Their deep understanding of the product and proactive approach to suggesting improvements made them an invaluable member of our team.",
    bg: "#3c4a63",
  },
  {
    name: "Yuliya Sidor",
    title: "UX Writer · Content Designer",
    quote:
      "A great designer to work with! I loved how she'd ask for my input on her designs, especially from a content perspective. She welcomed suggestions, even when they meant reworking her ideas.",
    bg: "#a85b8f",
  },
];

export function Testimonials(): ReactNode {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((testimonial) => (
        <figure
          key={testimonial.name}
          className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 flex flex-col gap-5 rounded-3xl border p-6 sm:p-7"
        >
          <blockquote className="text-[15px] leading-[1.6] tracking-tight text-foreground/80 sm:text-[16px]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-auto flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-white"
              style={{ backgroundColor: testimonial.bg }}
            >
              {testimonial.name.charAt(0)}
            </span>
            <span className="flex flex-col">
              <span className="text-[14px] font-medium tracking-tight text-foreground">
                {testimonial.name}
              </span>
              <span className="text-[12.5px] tracking-tight text-foreground/55">
                {testimonial.title}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
