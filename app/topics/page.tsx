import type { Metadata } from "next"
import { Section, SectionHeading } from "@/components/section"
import { TopicCard } from "@/components/topic-card"
import { CtaBanner } from "@/components/home/cta-banner"
import { topics } from "@/lib/site"

export const metadata: Metadata = {
  title: "المواضيع الطبية",
  description:
    "شروحات طبية مبسّطة عن ضعف الانتصاب، سرعة القذف، تضخم البروستاتا، حصوات الكلى، والتهابات المسالك البولية.",
}

export default function TopicsPage() {
  return (
    <>
      <Section className="bg-white">
        <SectionHeading
          eyebrow="المواضيع الطبية"
          title="مكتبة صحة الرجل"
          desc="اختر الموضوع الذي يهمّك لتقرأ شرحاً وافياً عن الأعراض والأسباب وخيارات العلاج."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <TopicCard key={t.slug} topic={t} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
