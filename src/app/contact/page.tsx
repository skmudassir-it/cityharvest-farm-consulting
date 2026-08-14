import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Contact & Free Consultation",
  description:
    "Request a free consultation from CityHarvest Farm Consulting — rooftop farms, community gardens, greenhouses, hydroponics and farm operations management.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact us"
            title="Tell us about your space"
            subtitle="Request a free consultation or just ask a question. Real humans answer — usually within the hour during business time."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-foreground">Request a free consultation</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what you are dreaming of — a rooftop farm, a community garden, a greenhouse or a hydroponic system.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-bold text-foreground">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Main line</p>
                      <a href="tel:+15550127890" className="hover:text-accent">(555) 012-7890</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@cityharvest.farm" className="hover:text-accent">
                        hello@cityharvest.farm
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Studio & office</p>
                      <p>1207 Greenway Avenue, Suite 210, Portland, OR 97205</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p>Mon–Fri 8am–6pm &bull; Sat 9am–1pm</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/cta-contact.jpg"
                  alt="Freshly harvested vegetables in a wooden crate with gardening gloves in warm sunlight"
                  width={1024}
                  height={640}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-44 w-full rounded-2xl object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-lg font-bold text-foreground">Prefer email?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the quick form below and we will reply within one business day.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a space in mind?"
        subtitle="Send us photos and rough dimensions — we will reply within one business day with next steps."
        image="/images/cta-contact.jpg"
      />
    </>
  );
}
