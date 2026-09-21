import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-lg text-muted">{description}</p>}
    </Reveal>
  );
}
