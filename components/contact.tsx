"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-teal/60 focus:outline-none focus:ring-2 focus:ring-teal/30";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

    setStatus("loading");
    try {
      if (!webhook) throw new Error("Webhook not configured");
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "drgeorgeshaker.com", submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="bg-surface/30">
      <SectionHeading
        eyebrow="Get started"
        title="Ready to stop losing patients?"
        description="Book a 15-minute demo. We'll show you exactly what your clinic is missing — and how to capture it."
      />

      <Reveal className="mx-auto max-w-2xl">
        {status === "success" ? (
          <div className="gradient-border glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center" role="status">
            <CheckCircle2 className="h-12 w-12 text-teal" aria-hidden />
            <h3 className="text-2xl font-bold">Demo request received</h3>
            <p className="text-muted">
              Thank you — Dr Shaker will be in touch within one working day to arrange your demo.
            </p>
            <Button variant="secondary" onClick={() => setStatus("idle")}>
              Send another enquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="glass rounded-3xl p-7 md:p-10" noValidate={false}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Dr Jane Smith" />
              </div>
              <div>
                <label htmlFor="clinic" className="mb-1.5 block text-sm font-medium">
                  Clinic name
                </label>
                <input id="clinic" name="clinic" required autoComplete="organization" className={inputClass} placeholder="Harley Street Urology" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@clinic.co.uk" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+44 7…" />
              </div>
              <div>
                <label htmlFor="clinicType" className="mb-1.5 block text-sm font-medium">
                  Clinic type
                </label>
                <select id="clinicType" name="clinicType" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Urology</option>
                  <option>Men&apos;s health</option>
                  <option>Private GP</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="callsPerWeek" className="mb-1.5 block text-sm font-medium">
                  Approx. calls per week
                </label>
                <input id="callsPerWeek" name="callsPerWeek" type="number" min={0} inputMode="numeric" className={inputClass} placeholder="e.g. 150" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message <span className="text-muted">(optional)</span>
                </label>
                <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Anything we should know before the call?" />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background accent-teal"
                  />
                  <span>
                    I consent to {site.company} storing my details to respond to this enquiry, as described in the{" "}
                    <Link href="/privacy" className="text-teal underline-offset-2 hover:underline">
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </div>

            {status === "error" && (
              <p className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
                Something went wrong sending your request. Please email{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </p>
            )}

            <Button type="submit" size="lg" className="mt-7 w-full" disabled={status === "loading"}>
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
              {status === "loading" ? "Sending…" : "Book my demo"}
            </Button>
          </form>
        )}
      </Reveal>
    </Section>
  );
}
