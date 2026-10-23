import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import { Section } from "@/components/section"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { consultation } from "@/lib/site"

export const metadata: Metadata = pageMetadata("/book", {
  title: "احجز استشارتك",
  description: "احجز استشارة خاصة مع د. جورج شاكر عبر مكالمة فيديو أو صوت لمدة ٣٠ دقيقة، مع تأكيد الموعد عبر واتساب.",
  alternates: { canonical: "/book" },
})

const steps = ["املأ نموذج الحجز", "نتواصل معك على واتساب خلال ٢٤ ساعة لتأكيد الموعد", "تأكيد الدفع", "الاستشارة أونلاين"]
const faqs = [
  { q: "ماذا يشمل الاستشارة؟", a: "مناقشة حالتك وأعراضك وتاريخك الصحي، والإجابة عن أسئلتك وتوضيح الخطوات المناسبة لك خلال جلسة خاصة مدتها ٣٠ دقيقة." },
  { q: "هل الاستشارة سرية؟", a: "نعم، تتم الاستشارة بخصوصية تامة، ونتعامل مع معلوماتك الصحية بسرية." },
  { q: "هل يمكن أن تحضر زوجتي؟", a: "نعم، يمكن أن تحضر زوجتك معك إذا رغبت، لمناقشة الأسئلة وفهم الخطوات معاً." },
  { q: "ماذا لو احتجت فحصاً أو تحاليل؟", a: "نوضح لك الفحوصات المطلوبة ونوجّهك لإجرائها قرب مكان إقامتك" },
  { q: "سياسة الإلغاء", a: "إلغاء مجاني قبل ٢٤ ساعة." },
]
const arabicNumber = (value: number) => value.toLocaleString("ar-EG")

export default function BookingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="absolute inset-0 arabesque" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-5 px-5 py-16 text-center md:py-20">
          <p className="text-sm font-semibold text-gold-soft">وقتك لصحتك، بخصوصية تامة</p>
          <h1 className="text-3xl font-bold md:text-5xl">احجز استشارتك</h1>
          <p className="text-xl font-semibold leading-9">الاستشارة: {arabicNumber(consultation.priceUsd)} دولار أمريكي <span className="inline-block text-base font-normal text-cream/80">(حوالي ٩٤٠ ريال / ٩٢٠ درهم)</span></p>
            <p className="text-lg font-semibold leading-8">للمصريين: ١٬٠٠٠ جنيه مصري</p>
          <p className="text-cream/80">مدة الجلسة: {arabicNumber(consultation.durationMin)} دقيقة · عبر مكالمة فيديو أو صوت بخصوصية تامة</p>
        </div>
      </section>
      <Section className="bg-cream">
        <h2 className="mb-8 text-center text-2xl text-navy">كيف تحجز استشارتك؟</h2>
        <ol className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-gold-soft">{arabicNumber(index + 1)}</span>
              <span className="flex-1 text-sm leading-7 text-navy">{step}</span>
              {index < steps.length - 1 && <ArrowLeft className="mt-2 hidden size-4 shrink-0 text-gold md:block" aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <BookingForm formUrl={process.env.NEXT_PUBLIC_BOOKING_FORM_URL} />
        </div>
      </Section>
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl text-navy">أسئلة عن الاستشارة</h2>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map(({ q, a }, index) => (
              <AccordionItem key={q} value={`booking-${index}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 text-center text-sm leading-7 text-muted">الاستشارة لا تغني عن الطوارئ. في الحالات الطارئة راجع أقرب مستشفى.</p>
        </div>
      </Section>
    </>
  )
}
