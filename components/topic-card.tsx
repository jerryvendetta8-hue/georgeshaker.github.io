import Link from "next/link"
import {
  HeartPulse,
  Timer,
  Activity,
  Gem,
  Droplets,
  Dna,
  FlaskConical,
  Users,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react"
import type { Topic } from "@/lib/site"

const icons: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  timer: Timer,
  activity: Activity,
  gem: Gem,
  droplets: Droplets,
  dna: Dna,
  flask: FlaskConical,
  users: Users,
}

export function TopicCard({ topic }: { topic: Topic }) {
  const Icon = icons[topic.icon] ?? Activity
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
    >
      <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold">
        <Icon className="size-6" />
      </span>
      <h3 className="font-display text-lg font-bold text-navy">{topic.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-muted">{topic.short}</p>
      <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold">
        اقرأ المزيد
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
      </span>
    </Link>
  )
}
