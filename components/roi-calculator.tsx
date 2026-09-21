"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { Slider } from "@/components/ui/slider";
import { buttonClasses } from "@/components/ui/button";

function formatGBP(n: number) {
  return `£${Math.round(n).toLocaleString("en-GB")}`;
}

function Control({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const id = label.toLowerCase().replace(/\W+/g, "-");
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-sm text-muted">
          {label}
        </label>
        <span className="rounded-md bg-white/5 px-2 py-0.5 text-sm font-semibold tabular-nums">{display}</span>
      </div>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        aria-label={label}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [missed, setMissed] = useState(20);
  const [conversion, setConversion] = useState(30);
  const [value, setValue] = useState(250);

  const monthlyLoss = missed * 4.33 * (conversion / 100) * value;
  const recovered = 5 * value;

  return (
    <Section id="roi" className="bg-surface/30">
      <SectionHeading
        eyebrow="ROI calculator"
        title="What are missed calls costing you?"
        description="Adjust the sliders to your clinic. The numbers update instantly."
      />

      <Reveal>
        <div className="glass grid gap-10 rounded-3xl p-7 md:grid-cols-2 md:p-10">
          <div className="flex flex-col gap-8">
            <Control
              label="Missed calls per week"
              value={missed}
              display={`${missed}`}
              min={1}
              max={100}
              step={1}
              onChange={setMissed}
            />
            <Control
              label="% who would have booked"
              value={conversion}
              display={`${conversion}%`}
              min={5}
              max={80}
              step={5}
              onChange={setConversion}
            />
            <Control
              label="Average appointment value"
              value={value}
              display={formatGBP(value)}
              min={50}
              max={1000}
              step={10}
              onChange={setValue}
            />
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-background/60 p-7">
            <div>
              <p className="flex items-center gap-2 text-sm text-muted">
                <TrendingDown className="h-4 w-4 text-red-400" aria-hidden />
                You could be losing
              </p>
              <motion.p
                key={Math.round(monthlyLoss)}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl"
                aria-live="polite"
              >
                <span className="gradient-text">{formatGBP(monthlyLoss)}</span>
                <span className="ml-2 text-lg font-medium text-muted">/ month</span>
              </motion.p>
            </div>
            <div className="rounded-xl border border-teal/30 bg-teal/5 p-4">
              <p className="text-sm text-muted">Recovering just 5 appointments</p>
              <p className="mt-1 text-2xl font-bold text-teal">= {formatGBP(recovered)}</p>
            </div>
            <a href="#contact" className={buttonClasses("primary", "lg", "w-full")}>
              Stop the leak — book a demo
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
