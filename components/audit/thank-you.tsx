"use client";

import { motion } from "framer-motion";
import { CalendarDays, Check, Phone, Play } from "lucide-react";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export function ThankYouContent({ firstName }: { firstName?: string }) {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:pt-40">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="animate-drift absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-teal/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border glass flex flex-col items-center rounded-3xl p-9 text-center md:p-14"
        >
          <motion.span
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan text-background shadow-[0_0_50px_-10px_rgba(34,211,238,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
            aria-hidden
          >
            <motion.svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              />
            </motion.svg>
          </motion.span>
          <h1 className="mt-7 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            You&apos;re booked in{firstName ? `, ${firstName}` : ""}.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
            Your audit starts within 2 working days. You&apos;ll receive your report by email within 7 days.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-muted">
            {["Test calls are anonymous", "No real appointments booked", "UK GDPR compliant"].map((t) => (
              <li key={t} className="flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5">
                <Check className="h-3 w-3 text-teal" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <Reveal delay={0.2} className="mt-12">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Want to see the fix in action now?</h2>
          <p className="mt-2 text-center text-muted">
            Call our demo line, hang up before we answer, and watch the text arrive in seconds.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <a
              href={`tel:${site.phoneTel}`}
              className="glass flex items-center gap-4 rounded-2xl border-teal/30 p-5 transition-all hover:border-teal/60 hover:bg-teal/10"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-cyan text-background">
                <Phone className="h-6 w-6" aria-hidden />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted">Call our demo line</span>
                <span className="block text-xl font-extrabold tracking-tight sm:text-2xl">{site.phoneDisplay}</span>
              </span>
            </a>
            <div className="glass group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl md:aspect-auto">
              <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-cyan/10" aria-hidden />
              <button
                type="button"
                className="relative flex flex-col items-center gap-3 rounded-2xl p-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                aria-label="Play Loom walkthrough video (coming soon)"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan text-background shadow-[0_0_40px_-10px_rgba(34,211,238,0.8)] transition-transform group-hover:scale-105">
                  <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden />
                </span>
                <span className="text-sm font-semibold">Watch the 2-minute Loom</span>
                <span className="text-xs text-muted">Video coming soon</span>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12">
          <div className="glass rounded-3xl p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 ring-1 ring-teal/30">
                <CalendarDays className="h-5 w-5 text-cyan" aria-hidden />
              </span>
              <h2 className="text-xl font-bold tracking-tight">Book your 15-minute report walkthrough now</h2>
            </div>
            <p className="mt-3 text-sm text-muted">
              Optional — pick a slot and we&apos;ll go through your results together once the report is ready.
            </p>
            <div
              className="mt-5 flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-border bg-background/40 text-center text-sm text-muted"
              data-calendly-placeholder
            >
              Calendly / Cal.com inline embed goes here
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
