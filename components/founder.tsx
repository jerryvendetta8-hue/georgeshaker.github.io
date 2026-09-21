import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

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
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              Connect on LinkedIn
            </a>
            <p className="mt-8 text-xs text-muted/70">
              Independent service. Not affiliated with or endorsed by the NHS.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
