import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CityHarvest Farm Consulting — Urban Farming Consulting",
  description:
    "Urban farming consulting that turns rooftops, vacant lots and underused land into productive farms. Rooftop design–build, community gardens, greenhouses, hydroponics and farm operations management.",
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Certified experts",
    text: "Licensed agronomists and certified urban agriculture consultants with 10+ years and 120+ farms built.",
  },
  {
    icon: Clock,
    title: "On schedule, every time",
    text: "We show up when we say we will — our on-time record across 120+ builds is over 98%.",
  },
  {
    icon: HeartHandshake,
    title: "Growers first",
    text: "We recommend the cheapest path that works. If a container garden fits, we will never sell you a greenhouse.",
  },
  {
    icon: CheckCircle2,
    title: "5-year warranty",
    text: "Every build is backed by a 5-year workmanship warranty and ongoing grower support.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CityHarvest Farm Consulting",
  description:
    "Urban farming consulting: rooftop farm design and build, community garden planning, greenhouse and high-tunnel installation, hydroponic and aquaponic consulting, soil health and compost programs, farm-to-table partnerships and urban farm operations management.",
  url: "https://cityharvest-farm-consulting.amsitservices.com",
  telephone: "+1-555-012-7890",
  email: "hello@cityharvest.farm",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1207 Greenway Avenue, Suite 210",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97205",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.5152, longitude: -122.6784 },
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
  foundingDate: "2016",
  areaServed: "Portland metro and beyond",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "214",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Urban farming consultants &bull; Serving 40+ cities
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Fresh food grows closer than you think —{" "}
              <span className="text-primary">we design it, build it, and run it.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              CityHarvest Farm Consulting turns rooftops, vacant lots and underused land into
              productive urban farms — from the first feasibility study to full-time farm
              management.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Get a Free Consultation <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Services
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["120+", "farms built"],
                ["1.2M lbs", "grown & counting"],
                ["40+", "cities served"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-rooftop.jpg"
                alt="Lush rooftop farm with raised beds full of leafy greens above a city skyline"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-leaf text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  “They turned our roof into a farm that feeds 200 families.”
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Elena V., Riverside Tower
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="From bare roof to bountiful harvest"
            subtitle="Seven services covering the full life of an urban farm — from feasibility and design to daily operations."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/home-growers.jpg"
                  alt="Hands harvesting ripe tomatoes and leafy greens in a rooftop garden bed"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why CityHarvest"
                title="The team your city grows with"
                subtitle="We have built farms on towers, schoolyards and vacant lots — and run dozens of them season after season. That experience shows up in every detail."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Recent work"
            title="Case studies from the skyline"
            subtitle="Rooftops, schools and food hubs — see how we turn empty space into working harvests."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What our partners say"
            subtitle={`Rated ${testimonials.length ? "4.9" : ""} out of 5 across 214 reviews — because we show up and grow what we promise.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about cost, space, yields and getting started."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
