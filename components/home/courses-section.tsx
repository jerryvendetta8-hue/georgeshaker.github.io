"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, GraduationCap, Library, Users, type LucideIcon } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { StaggerGroup, StaggerItem } from "@/components/motion"
import { cn } from "@/lib/utils"
import { courses, SAR_TO_AED, type Course } from "@/lib/site"

const kindIcons: Record<Course["kind"], LucideIcon> = {
  course: BookOpen,
  program: Users,
  membership: GraduationCap,
  library: Library,
}

const arabicNum = (n: number) =>
  n.toLocaleString("ar-EG", { maximumFractionDigits: 0 })

export function CoursesSection() {
  const [currency, setCurrency] = useState<"SAR" | "AED">("SAR")

  function priceLabel(sar: number) {
    if (currency === "SAR") return `${arabicNum(sar)} ريال`
    return `${arabicNum(Math.round(sar * SAR_TO_AED))} درهم`
  }

  return (
    <Section id="courses" className="bg-cream">
      <SectionHeading
        eyebrow="الدورات والمكتبة"
        title="تعلّم بخطوات واضحة"
        desc="برامج ودورات ومكتبة رقمية تساعدك على فهم صحتك والتعامل معها بثقة."
      />

      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-full border border-line bg-white p-1" dir="ltr">
          {(["SAR", "AED"] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCurrency(c)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                currency === c ? "bg-navy text-white" : "text-muted hover:text-navy",
              )}
            >
              {c === "SAR" ? "ريال" : "درهم"}
            </button>
          ))}
        </div>
      </div>

      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => {
          const Icon = kindIcons[c.kind]
          return (
            <StaggerItem key={c.slug}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {c.badge}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted">{c.benefit}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-muted">{c.lessons}</span>
                  <span className="font-display text-sm font-bold text-navy">
                    {c.priceSar != null ? priceLabel(c.priceSar) : "قريبًا"}
                  </span>
                </div>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerGroup>

      <div className="mt-10 text-center">
        <Link href="/courses" className="text-sm font-semibold text-gold hover:underline">
          عرض كل الدورات والمكتبة
        </Link>
      </div>
    </Section>
  )
}
