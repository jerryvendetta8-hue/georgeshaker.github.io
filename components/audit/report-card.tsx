"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { CheckCircle2, Clock, Lock, PoundSterling } from "lucide-react";
import { cn } from "@/lib/utils";

const slots = [
  { slot: "8am", answered: 1, missed: 2 },
  { slot: "12:30", answered: 0, missed: 2 },
  { slot: "5:30pm", answered: 1, missed: 2 },
  { slot: "Sat", answered: 2, missed: 0 },
];

const fixes = [
  "Add a lunchtime overflow divert",
  "Set up an after-hours text-back",
  "Reply to web enquiries within 10 minutes",
];

function ScoreRing({ score, size = 112, compact = false }: { score: number; size?: number; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div ref={ref} className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#f59e0b"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={inView ? { strokeDashoffset: c - (c * score) / 100 } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn("font-extrabold tabular-nums text-amber-400", compact ? "text-2xl" : "text-3xl")}>
          {score}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-muted">/100</span>
      </div>
    </div>
  );
}

export function AuditReportCard({ compact = false, locked = false, className }: { compact?: boolean; locked?: boolean; className?: string }) {
  return (
    <div className={cn("glass relative overflow-hidden rounded-3xl", compact ? "p-5" : "p-6 sm:p-8", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400/90">
            Sample report — illustrative data
          </p>
          <h3 className={cn("mt-1 font-bold tracking-tight", compact ? "text-lg" : "text-2xl")}>[Sample Clinic]</h3>
          <p className="text-xs text-muted">Missed-Call Audit · 5 working days</p>
        </div>
        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold text-amber-300">
          Needs attention
        </span>
      </div>

      <div className={cn("mt-5 flex items-center gap-5", compact && "gap-4")}>
        <ScoreRing score={42} size={compact ? 92 : 120} compact={compact} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Patient Capture Score</p>
          <p className={cn("mt-1 font-bold", compact ? "text-base" : "text-xl")}>
            <span className="text-amber-400">42</span>
            <span className="text-muted">/100</span>
          </p>
          <p className="mt-1 text-xs text-muted">6 in 10 test calls went unanswered.</p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-4 gap-2">
        {[
          ["Calls made", "10", "text-foreground"],
          ["Answered", "4", "text-teal"],
          ["Unanswered", "6", "text-amber-400"],
          ["Called back", "1", "text-red-400"],
        ].map(([label, value, color]) => (
          <div key={label} className="rounded-xl border border-border bg-background/40 p-2.5 text-center">
            <dt className="text-[10px] uppercase tracking-wide text-muted">{label}</dt>
            <dd className={cn("mt-0.5 text-lg font-bold tabular-nums", color)}>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">Answered vs missed by time slot</p>
        <div className={cn("w-full", compact ? "h-24" : "h-36")}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slots} barGap={2} barCategoryGap="30%" margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
              <XAxis dataKey="slot" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
                labelStyle={{ color: "#f1f5f9" }}
              />
              <Bar dataKey="answered" name="Answered" fill="#14b8a6" radius={[4, 4, 0, 0]} isAnimationActive />
              <Bar dataKey="missed" name="Missed" fill="#f59e0b" radius={[4, 4, 0, 0]} isAnimationActive />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-1 flex gap-4 text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-teal" /> Answered
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-amber-400" /> Missed
          </span>
        </div>
      </div>

      <div className={cn("relative mt-5", locked && "pb-2")}>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3">
            <Clock className="h-5 w-5 shrink-0 text-cyan" aria-hidden />
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted">Web enquiry response</p>
              <p className="text-base font-bold">19 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3">
            <PoundSterling className="h-5 w-5 shrink-0 text-amber-400" aria-hidden />
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted">Est. monthly revenue at risk</p>
              <p className="text-base font-bold">£[X]</p>
              <p className="text-[10px] text-muted">based on your average appointment value</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">Top 3 quick fixes</p>
          <ul className="flex flex-col gap-2">
            {fixes.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {locked && (
          <div className="absolute inset-x-0 -bottom-2 top-0 flex items-end justify-center bg-gradient-to-b from-transparent via-surface/80 to-surface pb-1 pt-16 backdrop-blur-[2px]">
            <div className="flex items-center gap-2 rounded-full border border-teal/30 bg-background/80 px-4 py-2 text-xs font-medium text-foreground">
              <Lock className="h-3.5 w-3.5 text-teal" aria-hidden />
              Your full report includes personalised recommendations
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
