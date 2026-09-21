"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarClock, PoundSterling, Stethoscope } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { AuditReportCard } from "@/components/audit/report-card";

const trust = [
  { icon: PoundSterling, label: "No cost" },
  { icon: BadgeCheck, label: "No obligation" },
  { icon: CalendarClock, label: "Report in 7 days" },
  { icon: Stethoscope, label: "Done by a practising urology registrar" },
];

export function AuditHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="animate-drift absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-teal/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="animate-pulse-slow absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            Free for UK private clinics — limited to 10 audits per week
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            How many patients is your phone <span className="gradient-text">losing you?</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            We&apos;ll call your clinic at your busiest times over 5 days — lunchtime, early morning, after hours — just
            like a real patient would. Then we send you a clear report showing exactly how many calls go unanswered and
            what it&apos;s costing you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#audit-form" className={buttonClasses("primary", "lg")}>
              Get my free audit
            </a>
            <a href="#sample" className={buttonClasses("secondary", "lg")}>
              See a sample report
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2.5 text-sm text-muted">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal/10 ring-1 ring-teal/30">
                  <t.icon className="h-3.5 w-3.5 text-cyan" aria-hidden />
                </span>
                {t.label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ perspective: 1400 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-teal/40 to-cyan/30 blur-3xl"
            aria-hidden
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ rotateY: -8, rotateX: 4, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <AuditReportCard compact locked className="shadow-[0_30px_80px_-20px_rgba(20,184,166,0.45)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
