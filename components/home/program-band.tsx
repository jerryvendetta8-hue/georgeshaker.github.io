import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { LeadButton } from "@/components/lead-button"
import { Reveal } from "@/components/motion"
import { programFeatures } from "@/lib/site"

export function ProgramBand() {
  return (
    <Section>
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white md:px-14 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1 text-sm font-semibold text-gold">
                البرنامج الرئيسي
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                برنامج «تحكّم»
              </h2>
              <p className="mt-4 max-w-md text-base leading-8 text-white/80">
                برنامج تثقيفي شامل مدته ١٢ أسبوعاً، مصمم للرجل وزوجته معاً، يجمع
                بين دروس عملية وجلسات مباشرة ووحدة خاصة للزوجة — بخصوصية تامة.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LeadButton
                  variant="gold"
                  size="lg"
                  source="program-band"
                  guide="tahakkom-waitlist"
                  title="انضم لقائمة انتظار «تحكّم»"
                  subtitle="سنخبرك فور فتح باب التسجيل، مع أولوية للانضمام."
                  modalCta="انضم لقائمة الانتظار"
                >
                  انضم لقائمة الانتظار
                </LeadButton>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/tahakkom">
                    تفاصيل البرنامج
                    <ArrowLeft className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <ul className="grid gap-3">
              {programFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm leading-7 text-white/90"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                    <Check className="size-4" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
