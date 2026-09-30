import { Section, SectionHeading } from "@/components/section"
import { GuideCard } from "@/components/guide-card"
import { StaggerGroup, StaggerItem } from "@/components/motion"
import { guides } from "@/lib/site"

export function GuidesSection() {
  return (
    <Section id="guides" className="bg-sand">
      <SectionHeading
        eyebrow="أدلة مجانية"
        title="حمّل أدلتنا الطبية المجانية"
        desc="أدلة PDF مبسّطة تصلك مباشرة على بريدك الإلكتروني، تشرح لك حالتك خطوة بخطوة."
      />
      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <StaggerItem key={g.slug}>
            <GuideCard guide={g} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  )
}
