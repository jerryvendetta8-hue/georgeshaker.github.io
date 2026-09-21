import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/motion";

export function Guarantee() {
  return (
    <Section className="py-10 md:py-16">
      <Reveal>
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-surface/70 p-8 shadow-[0_0_80px_-30px_rgba(20,184,166,0.6)] md:p-12">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.25),transparent)] blur-2xl"
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-cyan text-background shadow-[0_0_40px_-10px_rgba(34,211,238,0.9)]">
              <ShieldCheck className="h-10 w-10" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Our guarantee</p>
              <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                5 booked appointments in 30 days, <span className="gradient-text">or you don&apos;t pay.</span>
              </h2>
              <p className="mt-3 text-lg text-muted">No contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
