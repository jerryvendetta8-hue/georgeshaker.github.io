"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar({
  minimal = false,
  ctaHref = "#contact",
  ctaLabel = "Book a 15-min demo",
}: {
  minimal?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border py-2" : "py-4",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/20 ring-1 ring-teal/40">
            <Activity className="h-5 w-5 text-cyan animate-heartbeat" aria-hidden />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-75" />
            </span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight sm:text-base">Dr George Shaker</span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
              AI Patient Capture
            </span>
          </span>
        </Link>

        {!minimal && (
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className={cn(minimal ? "block" : "hidden md:block")}>
          <a href={ctaHref} className={buttonClasses("primary", "sm")}>
            {ctaLabel}
          </a>
        </div>

        {!minimal && (
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </nav>

      {!minimal && open && (
        <div id="mobile-menu" className="glass mx-4 mt-3 rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-muted hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={ctaHref} onClick={() => setOpen(false)} className={buttonClasses("primary", "md", "mt-3 w-full")}>
            {ctaLabel}
          </a>
        </div>
      )}
    </header>
  );
}
