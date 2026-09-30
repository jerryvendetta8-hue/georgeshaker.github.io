import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Stethoscope, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { Reveal } from "@/components/motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 arabesque" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-white" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
              <Stethoscope className="size-4" />
              صحة الرجل بين يديك
            </span>
            <h1 className="text-3xl font-bold leading-snug text-navy md:text-5xl md:leading-tight">
              معلومات طبية موثوقة عن صحة الرجل والمسالك البولية
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
              مصدرك العربي الموثوق لفهم مشاكل ضعف الانتصاب، سرعة القذف، تضخم
              البروستاتا، حصوات الكلى وغيرها — بإشراف {site.doctorName}، استشاري
              جراحة المسالك البولية.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/topics">تصفّح المواضيع الطبية</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/guides">حمّل الأدلة المجانية</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-gold" />
                معلومات مبنية على أسس علمية
              </span>
              <span className="flex items-center gap-2">
                <Award className="size-5 text-gold" />
                خبرة استشارية معتمدة
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold/15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-xl">
              <Image
                src="/images/dr-george-portrait.png"
                alt={`${site.doctorName} — ${site.tagline}`}
                width={520}
                height={620}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5">
                <p className="font-display text-lg font-bold text-cream">
                  {site.doctorName}
                </p>
                <p className="text-sm text-cream/80">{site.tagline}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
