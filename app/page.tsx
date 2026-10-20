import { Hero } from "@/components/home/hero"
import { Promises } from "@/components/home/promises"
import { TopicsSection } from "@/components/home/topics-section"
import { AboutStrip } from "@/components/home/about-strip"
import { ProgramBand } from "@/components/home/program-band"
import { GuidesSection } from "@/components/home/guides-section"
import { CoursesSection } from "@/components/home/courses-section"
import { LatestContent } from "@/components/home/latest-content"
import { WeeklyLive } from "@/components/home/weekly-live"
import { FaqSection } from "@/components/faq-section"
import { CtaBanner } from "@/components/home/cta-banner"

import { PhysicianSchema } from "@/components/physician-schema"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata("/", { title: `${site.doctorName} — ${site.tagline}`, description: site.description })

export default function HomePage() {
  return (
    <>
      <PhysicianSchema />
      <Hero />
      <Promises />
      <TopicsSection />
      <AboutStrip />
      <ProgramBand />
      <GuidesSection />
      <CoursesSection />
      <LatestContent />
      <WeeklyLive />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
