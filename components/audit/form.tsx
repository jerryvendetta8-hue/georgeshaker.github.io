"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Loader2, TriangleAlert } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-teal/60 focus:outline-none focus:ring-2 focus:ring-teal/30 aria-[invalid=true]:border-red-500/60";

const roles = ["Practice Manager", "Clinic Owner", "Consultant", "Receptionist/Admin", "Other"];
const clinicTypes = ["Urology", "Men's health", "Private GP", "Dermatology", "Physio", "Other"];
const values = ["Under £100", "£100–£200", "£200–£300", "£300+"];

const UK_PHONE = /^(?:(?:\+44\s?|0)(?:\d\s?){9,10})$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<string, string>>;

function validate(data: Record<string, string>): Errors {
  const e: Errors = {};
  if (!data.name?.trim()) e.name = "Please enter your name.";
  if (!data.role) e.role = "Please select your role.";
  if (!data.clinicName?.trim()) e.clinicName = "Please enter your clinic name.";
  if (!data.clinicPhone?.trim()) e.clinicPhone = "Please enter the clinic phone number.";
  else if (!UK_PHONE.test(data.clinicPhone.replace(/[()-]/g, ""))) e.clinicPhone = "Enter a valid UK number, e.g. 020 7946 0000 or +44 20 7946 0000.";
  if (data.website?.trim() && !/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(data.website.trim()))
    e.website = "Enter a valid website URL.";
  if (!data.email?.trim()) e.email = "Please enter your work email.";
  else if (!EMAIL.test(data.email)) e.email = "Enter a valid email address.";
  if (!data.clinicType) e.clinicType = "Please select your clinic type.";
  if (!data.appointmentValue) e.appointmentValue = "Please select an appointment value.";
  if (!data.authorised) e.authorised = "You must confirm you're authorised to request this audit.";
  if (!data.gdpr) e.gdpr = "Please agree to the privacy policy.";
  return e;
}

function Field({
  id,
  label,
  error,
  optional,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label} {optional && <span className="text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function AuditForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    const webhook = process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL;
    setStatus("loading");
    try {
      if (!webhook) throw new Error("Webhook not configured");
      const utm = {
        utm_source: params.get("utm_source") ?? undefined,
        utm_medium: params.get("utm_medium") ?? undefined,
        utm_campaign: params.get("utm_campaign") ?? undefined,
      };
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          authorised: true,
          gdpr: true,
          ...utm,
          source: "audit_page",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      const firstName = data.name.trim().split(/\s+/)[0];
      router.push(`/audit/thank-you?name=${encodeURIComponent(firstName)}`);
    } catch {
      setStatus("error");
    }
  }

  const invalid = (k: string) => (errors[k] ? true : undefined);
  const describedBy = (k: string) => (errors[k] ? `${k}-error` : undefined);

  return (
    <Section id="audit-form">
      <SectionHeading
        eyebrow="Request your audit"
        title="Request your free audit"
        description="Takes about 60 seconds. We'll confirm by email and start testing within 2 working days."
      />
      <Reveal className="mx-auto max-w-2xl">
        <form onSubmit={onSubmit} noValidate className="gradient-border glass rounded-3xl p-7 md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Your name" error={errors.name}>
              <input id="name" name="name" autoComplete="name" className={inputClass} placeholder="Jane Smith" aria-invalid={invalid("name")} aria-describedby={describedBy("name")} />
            </Field>
            <Field id="role" label="Role" error={errors.role}>
              <select id="role" name="role" defaultValue="" className={inputClass} aria-invalid={invalid("role")} aria-describedby={describedBy("role")}>
                <option value="" disabled>Select…</option>
                {roles.map((r) => <option key={r}>{r}</option>)}
              </select>
            </Field>
            <Field id="clinicName" label="Clinic name" error={errors.clinicName}>
              <input id="clinicName" name="clinicName" autoComplete="organization" className={inputClass} placeholder="Harley Street Urology" aria-invalid={invalid("clinicName")} aria-describedby={describedBy("clinicName")} />
            </Field>
            <Field id="clinicPhone" label="Clinic phone number to test" error={errors.clinicPhone}>
              <input id="clinicPhone" name="clinicPhone" type="tel" inputMode="tel" className={inputClass} placeholder="020 7946 0000" aria-invalid={invalid("clinicPhone")} aria-describedby={describedBy("clinicPhone")} />
            </Field>
            <Field id="website" label="Clinic website URL" optional error={errors.website}>
              <input id="website" name="website" type="url" inputMode="url" autoComplete="url" className={inputClass} placeholder="https://yourclinic.co.uk" aria-invalid={invalid("website")} aria-describedby={describedBy("website")} />
            </Field>
            <Field id="email" label="Work email" error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@clinic.co.uk" aria-invalid={invalid("email")} aria-describedby={describedBy("email")} />
            </Field>
            <Field id="clinicType" label="Clinic type" error={errors.clinicType}>
              <select id="clinicType" name="clinicType" defaultValue="" className={inputClass} aria-invalid={invalid("clinicType")} aria-describedby={describedBy("clinicType")}>
                <option value="" disabled>Select…</option>
                {clinicTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field id="appointmentValue" label="Average new-patient appointment value" error={errors.appointmentValue}>
              <select id="appointmentValue" name="appointmentValue" defaultValue="" className={inputClass} aria-invalid={invalid("appointmentValue")} aria-describedby={describedBy("appointmentValue")}>
                <option value="" disabled>Select…</option>
                {values.map((v) => <option key={v}>{v}</option>)}
              </select>
            </Field>

            <div className="flex flex-col gap-4 sm:col-span-2">
              <label className={cn("flex items-start gap-3 text-sm text-muted", errors.authorised && "text-red-300")}>
                <input type="checkbox" name="authorised" value="yes" className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background accent-teal" aria-invalid={invalid("authorised")} aria-describedby={describedBy("authorised")} />
                <span>
                  I confirm I&apos;m authorised to request this audit for this clinic and agree to test calls being made
                  to the number above.
                </span>
              </label>
              {errors.authorised && <p id="authorised-error" className="-mt-2 text-xs text-red-400" role="alert">{errors.authorised}</p>}

              <label className={cn("flex items-start gap-3 text-sm text-muted", errors.gdpr && "text-red-300")}>
                <input type="checkbox" name="gdpr" value="yes" className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background accent-teal" aria-invalid={invalid("gdpr")} aria-describedby={describedBy("gdpr")} />
                <span>
                  I consent to {site.company} storing my details to run this audit and send my report, as described in the{" "}
                  <Link href="/privacy" className="text-teal underline-offset-2 hover:underline">privacy policy</Link>.
                </span>
              </label>
              {errors.gdpr && <p id="gdpr-error" className="-mt-2 text-xs text-red-400" role="alert">{errors.gdpr}</p>}
            </div>
          </div>

          {status === "error" && (
            <p className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
              <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
              Something went wrong sending your request. Please email{" "}
              <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
            </p>
          )}

          <Button type="submit" size="lg" className="mt-7 w-full" disabled={status === "loading"}>
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
            {status === "loading" ? "Sending…" : "Get my free audit"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted">Free · No obligation · Report within 7 days</p>
        </form>
      </Reveal>
    </Section>
  );
}
