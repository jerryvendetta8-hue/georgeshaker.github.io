import { Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { DemoVideo } from "@/components/demo-video";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export function Demo() {
  return (
    <Section id="demo">
      <SectionHeading
        eyebrow="Live demo"
        title="Try it yourself"
        description="The fastest way to understand it is to experience it as a patient would."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="gradient-border glass flex h-full flex-col justify-between rounded-3xl p-8 md:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                Demo line live 24/7
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                Call our demo line and don&apos;t answer yourself — hang up and watch the text arrive.
              </h3>
              <p className="mt-3 text-muted">
                Standard UK number. Your number is only used to send the demo message and is deleted afterwards.
              </p>
            </div>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-teal/30 bg-teal/5 p-5 transition-all hover:border-teal/60 hover:bg-teal/10"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-cyan text-background">
                <Phone className="h-6 w-6" aria-hidden />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted">Tap to call</span>
                <span className="block text-2xl font-extrabold tracking-tight sm:text-3xl">{site.phoneDisplay}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <DemoVideo
            title="Watch the 2-minute demo"
            subtitle="See a real missed call turn into a booking"
            className="rounded-3xl lg:h-full lg:aspect-auto"
          />
        </Reveal>
      </div>
    </Section>
  );
}
