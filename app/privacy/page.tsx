import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | QURO",
  description: "How QURO collects, uses and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 September 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          {site.company} Ltd (&ldquo;we&rdquo;) provides AI patient capture services to UK private clinics. For enquiries
          submitted through this website we are the data controller. For patient messages handled on behalf of a clinic,
          the clinic is the data controller and we act as data processor under a signed Data Processing Agreement.
        </p>
      </section>
      <section>
        <h2>What we collect</h2>
        <ul>
          <li>Contact details you submit via our demo form (name, clinic, email, phone, message).</li>
          <li>Phone numbers and message content sent to our demo line, used solely to send the demo reply.</li>
          <li>Basic technical data (browser, device, pages visited) to keep the site secure and improve it.</li>
        </ul>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          To respond to your enquiry, arrange a demo, deliver the service you have asked for, and meet our legal
          obligations. We do not sell personal data and we do not use it for unrelated marketing without consent.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          Demo-line numbers are deleted within 7 days. Enquiry details are kept for up to 12 months unless you become a
          client, in which case they are retained for the duration of our agreement and as required by law.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          Under UK GDPR you can request access, correction, deletion or restriction of your data, or object to its
          processing. Contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-teal hover:underline">
            {site.email}
          </a>
          . You may also complain to the Information Commissioner&apos;s Office (ico.org.uk).
        </p>
      </section>
    </LegalPage>
  );
}
