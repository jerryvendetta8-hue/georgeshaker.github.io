import { Clock, Globe, PhoneCall, Voicemail } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { StaggerGroup, StaggerItem } from "@/components/motion";

const checks = [
  { icon: PhoneCall, title: "Answer rate", text: "How many of our test calls reach a human." },
  { icon: Clock, title: "Peak-time gaps", text: "Lunch, 8–9am, after 5pm, Saturdays." },
  { icon: Voicemail, title: "Voicemail & follow-up", text: "Is there a voicemail, and does anyone call back?" },
  {
    icon: Globe,
    title: "Web enquiry speed",
    text: "We submit a test enquiry on your website and time the response.",
  },
];

export function AuditChecks() {
  return (
    <Section id="what-we-check" className="bg-surface/30">
      <SectionHeading
        eyebrow="What we check"
        title="Four things every clinic gets wrong without knowing"
        description="We test the exact moments patients are most likely to call — and most likely to give up."
      />
      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {checks.map((c) => (
          <StaggerItem key={c.title}>
            <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/10 ring-1 ring-teal/40">
                <c.icon className="h-6 w-6 text-cyan" aria-hidden />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{c.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
