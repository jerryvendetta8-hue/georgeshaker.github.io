import { Radio, Calendar, MessageCircle } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { LeadButton } from "@/components/lead-button"
import { Reveal } from "@/components/motion"
import { site } from "@/lib/site"

export function WeeklyLive() {
  return (
    <Section className="bg-cream">
      <Reveal>
        <div className="grid items-center gap-8 rounded-[2rem] border border-gold/30 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr_auto] md:p-12">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Radio className="size-8" />
          </span>

          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gold">
              <Calendar className="size-4" />
              جلسة أسبوعية مباشرة
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
              أسئلة وأجوبة مباشرة كل أسبوع
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
              انضم لجلسة مباشرة أسبوعية نجيب فيها على أسئلتك حول صحة الرجل
              بخصوصية تامة — بدون الحاجة لإظهار الكاميرا.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <LeadButton
              variant="gold"
              source="weekly-live"
              guide="weekly-live"
              title="احجز مكانك في الجلسة المباشرة"
              subtitle="سنرسل لك رابط الجلسة القادمة وموعدها على بريدك."
              modalCta="ذكّرني بالجلسة"
            >
              احجز مكانك
            </LeadButton>
            <Button asChild variant="whatsapp">
              <a
                href={site.social.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" />
                قناة واتساب
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
