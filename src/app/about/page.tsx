import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Leaf, Wrench } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CityHarvest Farm Consulting is a team of agronomists, builders and farm managers turning rooftops, lots and underused land into productive urban farms since 2016.",
};

const values = [
  {
    icon: Wrench,
    title: "Craftsmanship",
    text: "Every bed is built, every line is leveled, and every system is tested to standards we would want on our own rooftops — because most of us grow on them too.",
  },
  {
    icon: Users,
    title: "Community first",
    text: "Founded in 2016 by growers and builders who believed cities should feed themselves. Our team lives in the neighborhoods where we build.",
  },
  {
    icon: Leaf,
    title: "Stewardship",
    text: "We regenerate soil, harvest rainwater and cut food miles — and we measure it, so every farm we build has a visible environmental return.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Certified urban agriculture consultants and members of the American Society of Agronomy, with 214 five-star reviews and counting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              Cities can feed themselves. We prove it, one rooftop at a time.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                CityHarvest Farm Consulting started in 2016 with one question: why does fresh food
                travel 1,500 miles when there is so much empty roof above our heads? Ten years
                later, that question has become more than 120 working farms across 40+ cities.
              </p>
              <p>
                We are still grower-led, still answer our own phones, and still stand behind every
                bed we build with a five-year warranty. When you call CityHarvest, you talk to the
                people who will actually show up with shovels.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-team.jpg"
                alt="The CityHarvest consulting team standing in a rooftop garden with raised beds"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values under every harvest"
            subtitle="Four principles that have carried us through ten years of rooftops, schoolyards and vacant lots."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-grower.jpg"
                alt="An urban farmer watering leafy greens in a rooftop garden bed at golden hour"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the team that will grow with you"
              subtitle="Our consultants average 9 years with the company — they know the sun angles, soil mixes and city codes of every market we serve."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Maya Lindgren", "Founder & Principal Consultant — agronomist, 12 years in urban agriculture"],
                ["Devon Marsh", "Director of Design & Build — licensed structural coordination lead"],
                ["Nina Okafor", "Hydroponics & Controlled Environment Lead — 60+ indoor systems"],
                ["Sam Whitaker", "Operations & Farm Management Lead — runs 18 client farms"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with a team that loves dirt"
        subtitle="Join 120+ thriving urban farms. Request your free consultation today — we will treat your space like our own."
      />
    </>
  );
}
