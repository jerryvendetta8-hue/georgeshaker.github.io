import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { AuditReportCard } from "@/components/audit/report-card";

export function AuditSample() {
  return (
    <Section id="sample">
      <SectionHeading
        eyebrow="Sample report"
        title="Here's what you'll receive"
        description="A plain-English report your whole team can act on. No jargon, no 40-page PDF."
      />
      <Reveal className="mx-auto max-w-2xl">
        <div className="gradient-border rounded-3xl">
          <AuditReportCard locked />
        </div>
      </Reveal>
    </Section>
  );
}
