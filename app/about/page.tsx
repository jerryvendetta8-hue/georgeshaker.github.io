import type { Metadata } from "next"
import Image from "next/image"
import { GraduationCap, Globe, Stethoscope, HeartPulse } from "lucide-react"
import { Section } from "@/components/section"
import { CtaBanner } from "@/components/home/cta-banner"
import { Reveal } from "@/components/motion"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "عن الطبيب",
  description: `تعرّف على ${site.doctorName}، استشاري جراحة المسالك البولية.`,
}

const credentials = [
  { icon: GraduationCap, title: "زمالة FEBU", text: "زمالة البورد الأوروبي في جراحة المسالك البولية" },
  { icon: Stethoscope, title: "استشاري متخصص", text: "خبرة واسعة في تشخيص وعلاج أمراض الذكورة والمسالك البولية" },
  { icon: Globe, title: "خبرة بريطانية", text: "تدريب وممارسة سريرية داخل الخدمة الصحية البريطانية NHS" },
  { icon: HeartPulse, title: "رعاية إنسانية", text: "نهج يركّز على راحة المريض وفهمه الكامل لحالته" },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="absolute inset-0 arabesque opacity-40" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <Reveal>
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] border border-cream/15">
              <Image
                src="/images/dr-george-shaker.png"
                alt={site.doctorName}
                width={420}
                height={520}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-sm font-semibold text-gold-soft">
                عن الطبيب
              </span>
              <h1 className="font-display text-3xl font-bold md:text-5xl">
                {site.doctorName}
              </h1>
              <p className="mt-4 text-base leading-8 text-cream/80">
                استشاري جراحة المسالك البولية وصحة الرجل. أؤمن أن المريض الذي
                يفهم حالته جيداً يتخذ قرارات أفضل ويحصل على نتائج أفضل. من هنا
                جاءت فكرة هذا الموقع: مرجع عربي موثوق يشرح أمراض الذكورة والمسالك
                البولية بلغة بسيطة وبعيداً عن التهويل.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="flex gap-4 rounded-2xl border border-line bg-sand p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-soft">
                <c.icon className="size-6" />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-navy">
                  {c.title}
                </h2>
                <p className="mt-1 text-sm leading-7 text-muted">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-gold/25 bg-gold/5 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy">رسالتي</h2>
          <p className="mt-4 leading-8 text-ink">
            أن أوفّر لكل رجل عربي معلومة طبية موثوقة عن صحته، تساعده على فهم جسده
            واتخاذ خطوات واثقة نحو حياة أفضل، دون خجل أو تردد.
          </p>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
