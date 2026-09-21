import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuditHero } from "@/components/audit/hero";
import { AuditChecks } from "@/components/audit/checks";
import { AuditSample } from "@/components/audit/sample";
import { AuditSteps } from "@/components/audit/steps";
import { AuditFounderStrip } from "@/components/audit/founder-strip";
import { AuditForm } from "@/components/audit/form";
import { AuditFaq } from "@/components/audit/faq";
import { AuditFinalCta } from "@/components/audit/final-cta";

export const metadata: Metadata = {
  title: "Free Missed-Call Audit for Private Clinics | Dr George Shaker",
  description:
    "Get a free missed-call audit for your UK private clinic. We test your phone lines and web enquiries over 5 days, then show you exactly how many patients you're losing and what it costs.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Free Missed-Call Audit for Private Clinics",
    description:
      "We call your clinic like a real patient over 5 days and send a clear report on unanswered calls, slow web enquiries and revenue at risk. Free for UK private clinics.",
    url: "/audit",
  },
};

export default function AuditPage() {
  return (
    <>
      <Navbar minimal ctaHref="#audit-form" ctaLabel="Get my free audit" />
      <main>
        <AuditHero />
        <AuditChecks />
        <AuditSample />
        <AuditSteps />
        <AuditFounderStrip />
        <Suspense fallback={null}>
          <AuditForm />
        </Suspense>
        <AuditFaq />
        <AuditFinalCta />
      </main>
      <Footer />
    </>
  );
}
