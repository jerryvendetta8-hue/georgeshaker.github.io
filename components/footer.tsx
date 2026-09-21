import Link from "next/link";
import { Activity, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/20 ring-1 ring-teal/40">
              <Activity className="h-5 w-5 text-cyan" aria-hidden />
            </span>
            <span className="text-base font-bold tracking-tight">{site.company}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            AI patient capture for UK private clinics. Every missed call texted back in 60 seconds, every enquiry
            answered, every patient sent to your booking page.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-16">
          <nav aria-label="Legal">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Legal</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-muted transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted transition-colors hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li className="text-muted">DPA available on request</li>
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Contact</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-muted transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 text-teal" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 text-muted transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 text-teal" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4 text-teal" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.company} Ltd. Registered in England &amp; Wales.</p>
        <p>Independent service. Not affiliated with or endorsed by the NHS.</p>
      </div>
    </footer>
  );
}
