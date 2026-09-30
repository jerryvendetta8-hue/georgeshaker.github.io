import { cn } from "@/lib/utils"

export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-5">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string
  title: string
  desc?: string
  center?: boolean
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="mb-3 inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-bold text-navy md:text-4xl">{title}</h2>
      {desc ? <p className="mt-4 text-base leading-8 text-muted">{desc}</p> : null}
    </div>
  )
}
