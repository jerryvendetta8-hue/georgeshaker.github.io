import { PhoneOff, VoicemailIcon, PoundSterling } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Counter, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const stats = [
  {
    icon: PhoneOff,
    value: 30,
    suffix: "%",
    label: "of calls to clinics go unanswered at lunch and after hours",
  },
  {
    icon: VoicemailIcon,
    value: 80,
    suffix: "%",
    label: "of callers won't leave a voicemail — they call the next clinic",
  },
  {
    icon: PoundSterling,
    value: 200,
    prefix: "£",
    suffix: "+",
    label: "average value of one lost private consultation",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="The problem"
        title="Every unanswered call is a patient walking to a competitor"
        description="Your reception team is busy. Patients don't wait."
      />

      <StaggerGroup className="grid gap-5 md:grid-cols-3">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="glass group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_20px_60px_-30px_rgba(20,184,166,0.5)]">
              <s.icon className="h-6 w-6 text-teal" aria-hidden />
              <p className="mt-6 text-5xl font-extrabold tracking-tight">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} className="gradient-text" />
              </p>
              <p className="mt-3 text-pretty text-muted">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-6 text-center text-xs text-muted/70">
        Figures are illustrative industry estimates for UK private clinics and will vary by practice.
      </Reveal>
    </Section>
  );
}
