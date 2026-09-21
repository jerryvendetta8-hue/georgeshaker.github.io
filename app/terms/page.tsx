import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | QURO",
  description: "Terms governing use of QURO's AI patient capture service.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="21 September 2026">
      <section>
        <h2>The service</h2>
        <p>
          {site.company} Ltd provides missed-call text-back, enquiry auto-reply and related administrative automation
          for private clinics. The service is administrative only and does not provide medical advice, triage or
          clinical decision-making of any kind.
        </p>
      </section>
      <section>
        <h2>Billing and cancellation</h2>
        <p>
          Plans are billed monthly in advance. There is no minimum term and you may cancel at any time; cancellation
          takes effect at the end of the current billing period.
        </p>
      </section>
      <section>
        <h2>Guarantee</h2>
        <p>
          If fewer than 5 appointments are booked through the service in your first 30 days, your first month&apos;s fee
          is refunded in full. The guarantee requires the divert-on-no-answer to remain active throughout the period.
        </p>
      </section>
      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Provide accurate clinic information and a working booking link.</li>
          <li>Inform patients of the automated service in line with your own privacy notice.</li>
          <li>Respond promptly to urgent messages we flag to your team.</li>
        </ul>
      </section>
      <section>
        <h2>Liability</h2>
        <p>
          We are not liable for indirect losses or for outcomes arising from clinical decisions. Nothing in these terms
          limits liability that cannot be limited under English law. These terms are governed by the laws of England and
          Wales.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${site.email}`} className="text-teal hover:underline">
            {site.email}
          </a>
          . A Data Processing Agreement is available on request.
        </p>
      </section>
    </LegalPage>
  );
}
