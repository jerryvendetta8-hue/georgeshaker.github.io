import { Reveal } from "@/components/motion";
import { buttonClasses } from "@/components/ui/button";

export function AuditFinalCta() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="gradient-border glass relative overflow-hidden rounded-3xl px-7 py-12 text-center md:px-12 md:py-16">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-teal/20 blur-3xl" aria-hidden />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" aria-hidden />
          <h2 className="relative text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Find out what your phone is <span className="gradient-text">really</span> costing you.
          </h2>
          <a href="#audit-form" className={buttonClasses("primary", "lg", "relative mt-8")}>
            Get my free audit
          </a>
        </div>
      </Reveal>
    </section>
  );
}
