import type { Metadata } from "next"
import { Section, SectionHeading } from "@/components/section"
import { GuideCard } from "@/components/guide-card"
import { CtaBanner } from "@/components/home/cta-banner"
import { guides } from "@/lib/site"

export const metadata: Metadata = {
  title: "الأدلة الطبية المجانية",
  description:
    "حمّل أدلة PDF مجانية عن ضعف الانتصاب، صحة البروستاتا، والوقاية من حصوات الكلى.",
}

export default function GuidesPage() {
  return (
    <>
      <Section className="bg-white">
        <SectionHeading
          eyebrow="أدلة مجانية"
          title="مكتبة الأدلة الطبية"
          desc="أدلة عملية مبنية على الأدلة العلمية، تصلك مباشرة على بريدك الإلكتروني."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
