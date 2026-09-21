import { Check, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: 197,
    tagline: "Capture every missed call.",
    features: ["Missed-call text-back", "Web enquiry auto-reply", "Booking link delivery", "Weekly report"],
    popular: false,
  },
  {
    name: "Growth",
    price: 297,
    tagline: "Capture, convert and build reputation.",
    features: [
      "Everything in Starter",
      "Automated Google review requests",
      "Monthly performance call",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Full Front Desk",
    price: 497,
    tagline: "Your AI reception, end to end.",
    features: [
      "Everything in Growth",
      "AI voice assistant for overflow calls",
      "Patient reactivation campaigns",
      "Google Business Profile management",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple monthly pricing. No contracts."
        description="Every plan is covered by the 5-appointment guarantee. Cancel anytime."
      />

      <StaggerGroup className="grid items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <StaggerItem key={t.name} className={cn(t.popular && "lg:-my-4")}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1",
                t.popular
                  ? "gradient-border bg-surface shadow-[0_30px_80px_-30px_rgba(20,184,166,0.55)]"
                  : "glass hover:border-white/20",
              )}
            >
              {t.popular && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-teal to-cyan px-3.5 py-1 text-xs font-bold text-background">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted">{t.tagline}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">£{t.price}</span>
                <span className="text-muted">/mo</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span className={t.popular ? "text-foreground" : "text-muted"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={buttonClasses(t.popular ? "primary" : "secondary", "md", "mt-8 w-full")}
              >
                Book a demo
              </a>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-10 text-center">
        <p className="glass mx-auto inline-block rounded-full px-5 py-2.5 text-sm text-muted">
          <span className="font-semibold text-teal">Founding clinic offer:</span> limited places at a reduced rate in
          exchange for a case study.
        </p>
      </Reveal>
    </Section>
  );
}
