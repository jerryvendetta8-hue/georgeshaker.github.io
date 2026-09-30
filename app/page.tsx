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

export default function HomePage() {
  return (
    <>
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
