import { Shield, FlaskConical, Users, type LucideIcon } from "lucide-react"
import { Section } from "@/components/section"
import { StaggerGroup, StaggerItem } from "@/components/motion"
import { promises } from "@/lib/site"

const icons: Record<string, LucideIcon> = {
  shield: Shield,
  flask: FlaskConical,
  users: Users,
}

export function Promises() {
  return (
    <Section className="bg-cream">
      <StaggerGroup className="grid gap-6 md:grid-cols-3">
        {promises.map((p) => {
          const Icon = icons[p.icon] ?? Shield
          return (
            <StaggerItem key={p.title}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-line bg-white p-8 text-center shadow-sm">
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Icon className="size-7" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{p.desc}</p>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerGroup>
    </Section>
  )
}
