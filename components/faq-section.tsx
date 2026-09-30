import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, SectionHeading } from "@/components/section"
import { faqs } from "@/lib/site"

export function FaqSection() {
  return (
    <Section id="faq" className="bg-cream">
      <SectionHeading
        eyebrow="أسئلة شائعة"
        title="أسئلة يطرحها المرضى كثيراً"
        desc="إجابات موجزة عن أكثر التساؤلات شيوعاً حول صحة الرجل والمسالك البولية."
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-line bg-white px-5"
            >
              <AccordionTrigger className="text-right font-display text-base font-semibold text-navy">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-7 text-muted">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
