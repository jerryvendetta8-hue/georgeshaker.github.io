import { Phone, Play } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
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
          <div className="glass group relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl lg:h-full lg:aspect-auto">
            <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-cyan/10" aria-hidden />
            <button
              type="button"
              className="relative flex flex-col items-center gap-4 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-2xl p-6"
              aria-label="Play 2-minute demo video (coming soon)"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan text-background shadow-[0_0_50px_-10px_rgba(34,211,238,0.8)] transition-transform group-hover:scale-105">
                <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
              </span>
              <span className="text-sm font-semibold">Watch the 2-minute demo</span>
              <span className="text-xs text-muted">See a real missed call turn into a booking</span>
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
