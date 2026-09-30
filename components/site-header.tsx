"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navLinks, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "border-b border-line bg-cream/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold text-navy">
            {site.doctorName}
          </span>
          <span className="text-xs text-muted">{site.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-navy/5 hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="whatsapp" size="sm">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل عبر واتساب
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-navy/5"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="whatsapp" className="mt-2">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                تواصل عبر واتساب
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
