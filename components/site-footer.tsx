import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { navLinks, topics, site } from "@/lib/site"

function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-lg font-bold">{site.doctorName}</p>
          <p className="mt-2 text-sm leading-7 text-cream/70">{site.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold text-gold-soft">
            روابط سريعة
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/70 transition-colors hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold text-gold-soft">
            المواضيع الطبية
          </h3>
          <ul className="space-y-2 text-sm">
            {topics.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/topics/${t.slug}`}
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold text-gold-soft">
            تواصل معنا
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-cream"
              >
                <Phone className="size-4 text-gold-soft" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-cream"
              >
                <Mail className="size-4 text-gold-soft" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-cream"
              >
                <Linkedin className="size-4 text-gold-soft" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.doctorName}. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-cream">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cream">
              الشروط والأحكام
            </Link>
            <Link href="/refunds" className="transition-colors hover:text-cream">
              سياسة الاسترجاع
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 bg-navy-600/40">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-center text-xs leading-6 text-cream/50">
          إخلاء مسؤولية: جميع المعلومات المقدمة في هذا الموقع لأغراض التوعية
          والتثقيف الطبي فقط، ولا تُعد بديلاً عن استشارة الطبيب المختص أو التشخيص
          أو العلاج الطبي.
        </p>
      </div>
    </footer>
  )
}
