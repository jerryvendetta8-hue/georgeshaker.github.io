"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, PhoneOutgoing } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { StaggerGroup, StaggerItem } from "@/components/motion";

const steps = [
  { icon: ClipboardList, step: "01", title: "Request your audit", text: "60-second form. That's it." },
  {
    icon: PhoneOutgoing,
    step: "02",
    title: "We test your clinic",
    text: "10 calls + 1 web enquiry over 5 working days, anonymously.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Get your report",
    text: "Emailed PDF + optional 15-minute walkthrough call.",
  },
];

export function AuditSteps() {
  return (
    <Section id="how-it-works" className="bg-surface/30">
      <SectionHeading eyebrow="How it works" title="Three steps. Zero effort on your side." />
      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-[3.1rem] hidden h-px origin-left bg-gradient-to-r from-teal via-cyan to-teal/20 md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="glass relative h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/10 ring-1 ring-teal/40">
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
