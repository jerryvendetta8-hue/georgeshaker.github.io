import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";

const chips = ["Urology Registrar", "MRCS", "FEBU", "BAUS & EAU member", "AI automation builder"];

export function Founder() {
  return (
    <Section id="about" className="bg-surface/30">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal/30 to-cyan/10 blur-3xl"
              aria-hidden
            />
            <div className="gradient-border overflow-hidden rounded-[2rem] bg-surface">
              <Image
                src="/images/george-shaker.jpg"
                alt="Dr George Shaker, urology registrar, in surgical scrubs in an operating theatre"
                width={640}
                height={960}
                className="h-auto w-full rounded-[2rem] object-cover"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About the founder"
            title="Designed with clinical sense, not just code."
          />
          <Reveal delay={0.1}>
            <blockquote className="text-pretty text-lg leading-relaxed text-muted md:text-xl">
              &ldquo;I&apos;m Dr George Shaker, a urology registrar with 8+ years in urology. I&apos;ve seen
              first-hand how many patients are lost between the phone ringing and someone picking up. I build AI
              systems that fix that — designed with clinical sense, not just code.&rdquo;
            </blockquote>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Credentials">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-teal/30 bg-teal/5 px-3.5 py-1.5 text-sm font-medium text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted/70">
              Independent service. Not affiliated with or endorsed by the NHS.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
