import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for urban farming consulting from CityHarvest Farm Consulting — site assessments, design and build, and ongoing farm operations. Firm written proposals, no surprises.",
};

const plans = [
  {
    name: "Site Assessment",
    price: "$350",
    unit: "from, per site",
    features: [
      "Site walkthrough & measurements",
      "Sun, wind & drainage analysis",
      "Soil or structural feasibility notes",
      "Written findings & recommendations",
      "Plain-English next steps",
      "Credit toward any build",
    ],
    cta: "Book an assessment",
    featured: false,
  },
  {
    name: "Design & Build",
    price: "$9,500",
    unit: "from, per project",
    features: [
      "Full farm design & layout",
      "Structural & permit coordination",
      "Irrigation & growing systems",
      "Procurement & construction management",
      "Crop plan & planting calendar",
      "5-year workmanship warranty",
    ],
    cta: "Start your build",
    featured: true,
  },
  {
    name: "Grow & Operate",
    price: "$1,200",
    unit: "from, per month",
    features: [
      "Seasonal planting calendars",
      "Crew training & scheduling",
      "Irrigation & fertility maintenance",
      "Harvest & sales coordination",
      "Monthly yield reports",
      "Cancel anytime",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Honest numbers, firm proposals"
            subtitle="No vague ranges, no surprise line items. We walk your site, then hand you a firm written price before any work begins."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.09}>
            {plans.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-3xl p-8",
                    p.featured && "border-accent/60 shadow-xl shadow-primary/10"
                  )}
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
                      <Sparkles className="size-3.5" /> Most popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold text-primary">{p.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{p.unit}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-8 w-full rounded-full",
                      p.featured ? "btn-gradient" : "glass border-primary/20 text-primary"
                    )}
                  >
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12">
            <div className="glass-card rounded-3xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Grants & milestone payments available
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Many of our community, school and non-profit projects are fully covered by grants —
                we have written over $2M in successful applications. Larger builds can also be split
                into milestone payments tied to construction phases.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Pricing questions"
            title="What affects your final price"
          />
          <Reveal className="mt-10">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want a firm number for your space?"
        subtitle="Send us photos and rough dimensions — we will respond with a written proposal, typically within one business day."
      />
    </>
  );
}
