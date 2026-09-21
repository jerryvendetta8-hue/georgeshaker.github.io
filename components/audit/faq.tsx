import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is it really free?", a: "Yes — no card, no obligation." },
  {
    q: "Will my staff know it's a test?",
    a: "No — calls are made like a normal patient enquiry so the results are realistic. We never pretend to be a specific real patient or book real appointments.",
  },
  { q: "How long does it take?", a: "5 working days of testing, with your report delivered within 7 days." },
  {
    q: "What happens after?",
    a: "You get the report. If you want, we'll show you how to fix the gaps — no pressure.",
  },
  {
    q: "What data do you collect?",
    a: "Only the details in this form, handled under UK GDPR.",
  },
];

export function AuditFaq() {
  return (
    <Section id="faq" className="bg-surface/30">
      <SectionHeading eyebrow="FAQ" title="Questions practice managers ask us" />
      <Reveal className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
