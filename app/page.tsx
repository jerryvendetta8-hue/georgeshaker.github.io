import { Hero } from "@/components/home/hero"
import { TopicsSection } from "@/components/home/topics-section"
import { AboutStrip } from "@/components/home/about-strip"
import { GuidesSection } from "@/components/home/guides-section"
import { FaqSection } from "@/components/faq-section"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopicsSection />
      <AboutStrip />
      <GuidesSection />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
