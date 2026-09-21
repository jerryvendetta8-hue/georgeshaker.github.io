"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

const quotes = [
  {
    quote:
      "We had no idea how many calls we were missing over lunch. Within the first fortnight the text-back had already paid for itself several times over.",
    name: "Practice Manager",
    clinic: "Private urology clinic, London",
    metric: "11 bookings recovered in 30 days",
  },
  {
    quote:
      "Patients tell us the instant reply feels personal. The booking link means our reception team spends far less time playing phone tag.",
    name: "Clinic Director",
    clinic: "Men's health clinic, Manchester",
    metric: "38% fewer voicemails",
  },
  {
    quote:
      "Set up took one short call. The weekly report is the first thing I open on a Monday — it shows exactly where the leads are coming from.",
    name: "Lead GP",
    clinic: "Private GP practice, Birmingham",
    metric: "Live within 48 hours",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);
  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const q = quotes[index];

  return (
    <Section id="results" className="bg-surface/30">
      <SectionHeading eyebrow="Results" title="What clinics are saying" description="Case studies from founding clinics." />

      <Reveal>
        <div className="relative mx-auto max-w-3xl">
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-teal/10" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <span className="inline-flex rounded-full bg-gradient-to-r from-teal to-cyan px-3 py-1 text-xs font-bold text-background">
                  {q.metric}
                </span>
                <blockquote className="mt-6 text-pretty text-xl leading-relaxed md:text-2xl">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 text-sm text-muted">
                  <span className="font-semibold text-foreground">{q.name}</span> · {q.clinic}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-teal/50 hover:text-cyan"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-8 bg-gradient-to-r from-teal to-cyan" : "w-2 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-teal/50 hover:text-cyan"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-4 text-center text-xs text-muted/60">Illustrative placeholders — replaced with named case studies as founding clinics go live.</p>
        </div>
      </Reveal>
    </Section>
  );
}
