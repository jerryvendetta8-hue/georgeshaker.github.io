import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do we need to change our phone system?",
    a: "No. We set up a simple divert-on-no-answer on your existing line — it takes about 5 minutes and your number stays exactly the same.",
  },
  {
    q: "Does it work with our booking system?",
    a: "Yes. We link patients to your existing booking page — Semble, Cliniko, Heydoc, Doctify, Zesty, Calendly and most others. If you book manually, we collect the patient's details and preferred time for your team.",
  },
  {
    q: "Is it GDPR compliant?",
    a: "Yes. We're aligned with UK GDPR and ICO registered. You remain the data controller and we act as processor under a signed Data Processing Agreement. We collect only the minimum data needed and have a clear retention policy.",
  },
  {
    q: "Does the AI give medical advice?",
    a: "No — it is strictly admin-only. It answers questions about services, availability and logistics, and never triages or advises. Urgent or clinical keywords are directed to 999/111 and immediately flagged to your team.",
  },
  {
    q: "How long does setup take?",
    a: "Most clinics are live within 48 hours of the onboarding call. We configure the messaging, booking links and reporting for you.",
  },
  {
    q: "What if we don't get 5 appointments?",
    a: "Then you don't pay. If we haven't delivered 5 booked appointments in your first 30 days, that month is free — no contracts, cancel anytime.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Questions clinic owners ask us" />
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
