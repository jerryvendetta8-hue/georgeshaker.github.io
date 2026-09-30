import type { Metadata } from "next"
import { CoursesSection } from "@/components/home/courses-section"
import { ProgramBand } from "@/components/home/program-band"
import { CtaBanner } from "@/components/home/cta-banner"

export const metadata: Metadata = {
  title: "الدورات والمكتبة",
  description:
    "دورات مصغّرة، برنامج «تحكّم»، عضوية شهرية، ومكتبة كتب إلكترونية عن صحة الرجل — بالعربي ومبنية على العلم.",
}

export default function CoursesPage() {
  return (
    <>
      <CoursesSection />
      <ProgramBand />
      <CtaBanner />
    </>
  )
}
