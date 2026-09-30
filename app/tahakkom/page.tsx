import type { Metadata } from "next"
import { Check, Users, ShieldCheck, Video, ClipboardCheck } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { LeadButton } from "@/components/lead-button"
import { StaggerGroup, StaggerItem } from "@/components/motion"
import { programFeatures, faqs } from "@/lib/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "برنامج «تحكّم»",
  description:
    "برنامج تثقيفي شامل مدته ١٢ أسبوعاً للرجل وزوجته معاً، يجمع بين دروس عملية وجلسات مباشرة ووحدة خاصة للزوجة، بخصوصية تامة.",
}

const forWho = [
  {
    icon: Users,
    title: "للرجل وزوجته",
    desc: "محتوى موجّه للاثنين معاً، لأن الصحة الزوجية مسؤولية مشتركة.",
  },
  {
    icon: Video,
    title: "بدون كاميرا",
    desc: "جلسات مباشرة بالعربي دون الحاجة لإظهار وجهك أو هويتك.",
  },
  {
    icon: ShieldCheck,
    title: "خصوصية تامة",
    desc: "بياناتك ومشاركتك تبقى سرية بالكامل طوال البرنامج.",
  },
  {
    icon: ClipboardCheck,
    title: "أسئلة فحص مسبقة",
    desc: "نتأكد قبل الانضمام أن البرنامج مناسب لحالتك واحتياجك.",
  },
]

export default function TahakkomPage() {
  return (
    <>
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1 text-sm font-semibold text-gold">
            البرنامج الرئيسي
          </span>
          <h1 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            برنامج «تحكّم»
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/80">
            برنامج تثقيفي شامل مدته ١٢ أسبوعاً، مصمم بعناية للرجل وزوجته معاً،
            يساعدكما على فهم الحالة والتعامل معها بثقة — بخطوات عملية وواضحة.
          </p>
          <div className="mt-8 flex justify-center">
            <LeadButton
              variant="gold"
              size="lg"
              source="tahakkom-hero"
              guide="tahakkom-waitlist"
              title="انضم لقائمة انتظار «تحكّم»"
              subtitle="سنخبرك فور فتح باب التسجيل، مع أولوية للانضمام وسعر خاص."
              modalCta="انضم لقائمة الانتظار"
            >
              انضم لقائمة الانتظار
            </LeadButton>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="ماذا ستحصل عليه"
          title="محتوى عملي على مدى ١٢ أسبوعاً"
        />
        <div className="mx-auto grid max-w-3xl gap-3">
          {programFeatures.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-5 text-sm leading-7 text-ink"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <Check className="size-4" />
              </span>
              {f}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeading eyebrow="لمن هذا البرنامج" title="مصمّم ليناسبك أنت وزوجتك" />
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {forWho.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <item.icon className="size-6" />
                </span>
                <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="أسئلة شائعة" title="أسئلة عن البرنامج" />
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 4).map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 text-center">
          <LeadButton
            variant="gold"
            size="lg"
            source="tahakkom-footer"
            guide="tahakkom-waitlist"
            title="انضم لقائمة انتظار «تحكّم»"
            subtitle="سنخبرك فور فتح باب التسجيل، مع أولوية للانضمام وسعر خاص."
            modalCta="انضم لقائمة الانتظار"
          >
            انضم لقائمة الانتظار الآن
          </LeadButton>
        </div>
      </Section>
    </>
  )
}
