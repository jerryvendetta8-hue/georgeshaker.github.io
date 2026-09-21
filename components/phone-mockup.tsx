"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, PhoneMissed } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Step =
  | { kind: "notice"; text: string }
  | { kind: "clinic"; text: string }
  | { kind: "patient"; text: string }
  | { kind: "booked"; text: string };

const steps: Step[] = [
  { kind: "notice", text: "Missed call — 17:52" },
  { kind: "clinic", text: "Hi, this is Harley Urology Clinic. Sorry we missed your call! Are you a new or existing patient?" },
  { kind: "patient", text: "New — looking for a urology appointment" },
  { kind: "clinic", text: "Great — you can pick a time that suits you here: harleyurology.co/book" },
  { kind: "booked", text: "Appointment booked — Thu 10:30" },
];

const delays = [900, 1600, 1500, 1700, 1600, 3200];

export function PhoneMockup() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const run = (index: number) => {
      if (cancelled) return;
      if (index > steps.length) {
        timer = setTimeout(() => {
          setVisible(0);
          run(0);
        }, delays[5]);
        return;
      }
      const next = steps[index];
      const showTyping = next?.kind === "clinic";
      setTyping(showTyping);
      timer = setTimeout(() => {
        setTyping(false);
        setVisible(index + 1);
        run(index + 1);
      }, delays[index] ?? 1500);
    };

    run(0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]" aria-label="Animated demo of an SMS conversation">
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-teal/25 to-cyan/15 blur-3xl animate-pulse-slow" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0d1322] p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#121a2c] to-[#0a0f1c]">
          <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[11px] text-muted">
            <span>17:52</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-muted/60" />
              <span className="h-2 w-2 rounded-full bg-muted/60" />
              <span className="h-2 w-2 rounded-full bg-muted/60" />
            </span>
          </div>
          <div className="border-b border-white/5 px-5 py-2.5 text-center">
            <p className="text-xs font-semibold">Harley Urology Clinic</p>
            <p className="text-[10px] text-muted">Text message</p>
          </div>

          <div className="flex h-[420px] flex-col gap-2.5 overflow-hidden px-4 pb-5 pt-4">
            <AnimatePresence initial={false}>
              {steps.slice(0, visible).map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "max-w-[85%] text-[12.5px] leading-snug",
                    s.kind === "patient" ? "self-end" : "self-start",
                    s.kind === "notice" || s.kind === "booked" ? "w-full max-w-full self-center" : "",
                  )}
                >
                  {s.kind === "notice" && (
                    <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-[11.5px] text-muted">
                      <PhoneMissed className="h-3.5 w-3.5 text-red-400" aria-hidden />
                      {s.text}
                    </div>
                  )}
                  {s.kind === "clinic" && (
                    <div className="rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-2.5 text-foreground">{s.text}</div>
                  )}
                  {s.kind === "patient" && (
                    <div className="rounded-2xl rounded-br-md bg-gradient-to-r from-teal to-cyan px-3.5 py-2.5 font-medium text-background">
                      {s.text}
                    </div>
                  )}
                  {s.kind === "booked" && (
                    <div className="flex items-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-3 py-2.5 text-[12px] font-semibold text-teal">
                      <CheckCircle2 className="h-4 w-4" aria-hidden />
                      {s.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {typing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-3"
                aria-hidden
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
