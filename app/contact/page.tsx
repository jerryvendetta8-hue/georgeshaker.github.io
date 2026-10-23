import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import { MessageCircle, Mail, Phone } from "lucide-react"

import { Section, SectionHeading } from "@/components/section"
import { LeadForm } from "@/components/lead-form"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata("/contact", {
  title: "تواصل معنا",
  description: "تواصل مع عيادة صحة الرجل عبر واتساب أو البريد الإلكتروني أو الهاتف.",
})

const channels = [
  {
    icon: MessageCircle,
    label: "واتساب",
    value: `+${site.whatsapp}`,
    href: `https://wa.me/${site.whatsapp}`,
  },
  { icon: Phone, label: "الهاتف", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
  { icon: Mail, label: "البريد الإلكتروني", value: site.email, href: `mailto:${site.email}` },
]

export default function ContactPage() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="تواصل معنا"
        title="نحن هنا للإجابة على أسئلتك"
        desc="اختر وسيلة التواصل الأنسب لك، أو اترك رسالتك وسنعاود التواصل معك."
      />
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-line bg-sand p-5 transition-all hover:border-gold/40 hover:shadow-md"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-soft">
                <c.icon className="size-6" />
              </span>
              <div>
                <p className="font-display font-bold text-navy">{c.label}</p>
                <p dir="ltr" className="mt-0.5 text-sm text-muted">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-3xl border border-line bg-sand p-7">
          <h2 className="font-display text-xl font-bold text-navy">
            أرسل لنا رسالة
          </h2>
          <p className="mt-2 mb-5 text-sm leading-7 text-muted">
            اترك بياناتك وسؤالك وسنعاود التواصل معك في أقرب وقت.
          </p>
          <LeadForm source="contact" withMessage cta="إرسال الرسالة" />
        </div>
      </div>
    </Section>
  )
}
