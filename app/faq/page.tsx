import type { Metadata } from "next"
import { Section, SectionHeading } from "@/components/section"
import { CtaBanner } from "@/components/home/cta-banner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/site"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description:
    "إجابات عن أكثر الأسئلة شيوعاً حول الخصوصية، المحتوى التثقيفي، برنامج «تحكّم»، الدفع، وسياسة الاسترجاع.",
}

export default function FaqPage() {
  return (
    <>
      <Section className="bg-white">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="كل ما تريد معرفته"
          desc="جمعنا لك إجابات واضحة عن أكثر الأسئلة التي تصلنا."
        />
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
