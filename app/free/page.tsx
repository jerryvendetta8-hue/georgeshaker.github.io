import type { Metadata } from "next"
import { Section, SectionHeading } from "@/components/section"
import { GuideCard } from "@/components/guide-card"
import { LatestContent } from "@/components/home/latest-content"
import { WeeklyLive } from "@/components/home/weekly-live"
import { CtaBanner } from "@/components/home/cta-banner"
import { guides } from "@/lib/site"

export const metadata: Metadata = {
  title: "المحتوى المجاني",
  description:
    "كل المحتوى المجاني في مكان واحد: أدلة PDF، مقاطع قصيرة موثوقة، وجلسات مباشرة أسبوعية عن صحة الرجل.",
}

export default function FreePage() {
  return (
    <>
      <Section className="bg-white">
        <SectionHeading
          eyebrow="مجاني بالكامل"
          title="كل المحتوى المجاني في مكان واحد"
          desc="ابدأ رحلتك مع محتوى موثوق ومبسّط عن صحة الرجل — أدلة، مقاطع قصيرة، وجلسات مباشرة."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </Section>
      <LatestContent />
      <WeeklyLive />
      <CtaBanner />
    </>
  )
}
