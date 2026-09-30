import { Section, SectionHeading } from "@/components/section"
import { TopicCard } from "@/components/topic-card"
import { StaggerGroup, StaggerItem } from "@/components/motion"
import { topics } from "@/lib/site"

export function TopicsSection() {
  return (
    <Section id="topics" className="bg-white">
      <SectionHeading
        eyebrow="المواضيع الطبية"
        title="تعرّف على أبرز مشاكل صحة الرجل"
        desc="شروحات مبسّطة ومبنية على أسس علمية لأكثر الحالات شيوعاً في عيادات المسالك البولية."
      />
      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => (
          <StaggerItem key={t.slug}>
            <TopicCard topic={t} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  )
}
