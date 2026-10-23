import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { navLinks, topics, site } from "@/lib/site"

function Instagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function Facebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0014.3 4.3c-2.3 0-3.8 1.4-3.8 3.95v2.25H8v3h2.5V21z" />
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
                <bdi dir="ltr">{site.phoneDisplay}</bdi>
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
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-cream"
              >
                <Instagram className="size-4 text-gold-soft" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-cream"
              >
                <Facebook className="size-4 text-gold-soft" />
                Facebook
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
          <div className="flex flex-wrap items-center justify-center gap-4">
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
