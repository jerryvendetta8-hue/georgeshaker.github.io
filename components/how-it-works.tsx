"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, CalendarCheck, MessageSquareText } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { StaggerGroup, StaggerItem } from "@/components/motion";

const steps = [
  {
    icon: MessageSquareText,
    step: "01",
    title: "Missed call or web enquiry",
    text: "Instant text within 60 seconds — before the patient has time to try the next clinic.",
  },
  {
    icon: Bot,
    step: "02",
    title: "AI assistant",
    text: "Handles admin questions and collects new/existing, service and preferred time. No clinical advice, ever.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Booking",
    text: "Patient books via your existing system — Semble, Cliniko, Heydoc, Doctify and more.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Weekly report",
    text: "Missed calls, leads captured and appointments booked — in your inbox every Monday.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface/30">
      <SectionHeading
        eyebrow="How it works"
        title="Live in 48 hours. Working while you sleep."
        description="Nothing to install. A simple divert-on-no-answer and you're capturing every lead."
      />

      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-[3.1rem] hidden h-px origin-left bg-gradient-to-r from-teal via-cyan to-teal/20 lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="glass group relative h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40">
                <div className="flex items-center justify-between">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/10 ring-1 ring-teal/40">
                    <s.icon className="h-6 w-6 text-cyan" aria-hidden />
                  </span>
                  <span className="text-sm font-bold text-muted/60">{s.step}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
