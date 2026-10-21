import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { credentials, site } from "@/lib/site"
import { Reveal } from "@/components/motion"

export function AboutStrip() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        <Reveal>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-[2rem] border border-cream/15">
              <Image
                src="/images/dr-george-shaker-v2.png"
                alt={site.doctorName}
                width={420}
                height={520}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-sm font-semibold text-gold-soft">
              عن الطبيب
            </span>
            <h2 className="font-display text-2xl font-bold md:text-4xl">
              {site.doctorName}
            </h2>
            <p className="mt-4 text-base leading-8 text-cream/80">
              استشاري جراحة المسالك البولية، شغوف بتبسيط المعلومة الطبية للمريض
              العربي. هدفي أن يفهم كل رجل حالته الصحية بوضوح، ويتخذ قراراته بثقة
              بعيداً عن المعلومات المغلوطة المنتشرة على الإنترنت.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {credentials.map((credential) => (
                <li key={credential}><Badge>{credential}</Badge></li>
              ))}
            </ul>

            <Button asChild variant="gold" className="mt-8">
              <Link href="/about">تعرّف على الطبيب أكثر</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
