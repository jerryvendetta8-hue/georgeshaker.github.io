import { FileCheck2, Lock, ShieldAlert, Database } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { StaggerGroup, StaggerItem } from "@/components/motion";

const items = [
  {
    icon: Lock,
    title: "UK GDPR aligned",
    text: "You stay data controller; we act as processor under a signed DPA.",
  },
  { icon: FileCheck2, title: "ICO registered", text: "Registered with the Information Commissioner's Office." },
  {
    icon: ShieldAlert,
    title: "Admin-only AI",
    text: "No clinical advice or triage. Urgent keywords are directed to 999/111 and flagged to your team.",
  },
  {
    icon: Database,
    title: "Minimal data",
    text: "We collect only what's needed to book, with a clear retention policy.",
  },
];

export function Compliance() {
  return (
    <Section id="compliance">
      <SectionHeading
        eyebrow="Compliance & security"
        title="Built for healthcare from day one"
        description="Designed by a clinician who understands what's at stake when patient data is involved."
      />
      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <StaggerItem key={i.title}>
            <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 ring-1 ring-teal/30">
                <i.icon className="h-5 w-5 text-teal" aria-hidden />
              </span>
              <h3 className="mt-5 font-semibold">{i.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{i.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
