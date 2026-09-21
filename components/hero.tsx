"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope } from "lucide-react";
import { PhoneMockup } from "@/components/phone-mockup";
import { buttonClasses } from "@/components/ui/button";
import { fadeUp, stagger } from "@/components/motion";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40" aria-labelledby="hero-title">
      <div className="grid-bg absolute inset-0 -z-20" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(20,184,166,0.28),transparent)] blur-2xl animate-drift"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 -z-10 h-[420px] w-[520px] translate-x-1/3 translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),transparent)] blur-2xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-start">
          <motion.span
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
          >
            <Stethoscope className="h-3.5 w-3.5 text-teal" aria-hidden />
            Built by a practising urology registrar
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            Never lose another patient to a <span className="gradient-text">missed call.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Our AI texts back every missed call within 60 seconds, answers enquiries 24/7, and sends patients
            straight to your booking page — so they book with you, not the clinic down the road.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className={buttonClasses("primary", "lg")}>
              Book a demo
            </a>
            <a href="#demo" className={buttonClasses("secondary", "lg")}>
              See it in action
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-teal" aria-hidden />
            {site.guarantee}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
