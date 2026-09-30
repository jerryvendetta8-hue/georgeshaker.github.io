import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, AlertCircle, Stethoscope, MessageCircle } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/lead-form"
import { topics, site } from "@/lib/site"

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = topics.find((t) => t.slug === slug)
  if (!topic) return { title: "الموضوع غير موجود" }
  return {
    title: topic.title,
    description: topic.short,
  }
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = topics.find((t) => t.slug === slug)
  if (!topic) notFound()

  const related = topics.filter((t) => t.slug !== topic.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="absolute inset-0 arabesque opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-16 md:py-20">
          <Link
            href="/topics"
            className="mb-6 inline-flex items-center gap-1 text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <ArrowLeft className="size-4" />
            كل المواضيع
          </Link>
          <h1 className="font-display text-3xl font-bold md:text-4xl">
            {topic.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-cream/80">{topic.short}</p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.6fr_1fr]">
          <article className="space-y-10">
            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy">
                <Stethoscope className="size-5 text-gold" />
                نظرة عامة
              </h2>
              <p className="mt-3 leading-8 text-ink">{topic.summary}</p>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy">
                <AlertCircle className="size-5 text-gold" />
                الأعراض الشائعة
              </h2>
              <ul className="mt-4 space-y-3">
                {topic.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink">
                    <Check className="mt-1 size-4 shrink-0 text-gold" />
                    <span className="leading-7">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                الأسباب المحتملة
              </h2>
              <ul className="mt-4 space-y-3">
                {topic.causes.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-ink">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="leading-7">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                خيارات العلاج
              </h2>
              <ul className="mt-4 space-y-3">
                {topic.treatments.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-ink">
                    <Check className="mt-1 size-4 shrink-0 text-gold" />
                    <span className="leading-7">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <h2 className="font-display text-lg font-bold text-navy">
                متى تزور الطبيب؟
              </h2>
              <ul className="mt-2 space-y-2">
                {topic.whenToSee.map((w) => (
                  <li key={w} className="flex items-start gap-3 leading-7 text-ink">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-line bg-sand p-6">
                <h3 className="font-display text-lg font-bold text-navy">
                  استشارة سريعة
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  تواصل معنا مباشرة لمناقشة حالتك بسرّية تامة.
                </p>
                <Button asChild variant="whatsapp" className="mt-4 w-full">
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    واتساب
                  </a>
                </Button>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy">
                  احصل على النشرة الطبية
                </h3>
                <p className="mt-2 mb-4 text-sm leading-7 text-muted">
                  نصائح موثوقة عن صحة الرجل على بريدك.
                </p>
                <LeadForm source={`topic:${topic.slug}`} withName={false} cta="اشترك" compact />
              </div>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="mb-6 font-display text-xl font-bold text-navy">
            مواضيع ذات صلة
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/topics/${r.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
              >
                <h3 className="font-display font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{r.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
