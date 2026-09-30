import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { Reveal } from "@/components/motion"

export function CtaBanner() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-navy to-navy-600 px-6 py-14 text-center text-cream md:px-16">
            <div className="absolute inset-0 arabesque opacity-40" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold md:text-4xl">
                لديك سؤال عن حالتك الصحية؟
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-cream/80">
                لا تتردد في التواصل معنا مباشرة عبر واتساب للحصول على إجابات
                موثوقة أو لحجز استشارتك.
              </p>
              <Button asChild variant="whatsapp" size="lg" className="mt-8">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
