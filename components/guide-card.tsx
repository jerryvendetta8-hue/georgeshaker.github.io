"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/lead-form"
import type { Guide } from "@/lib/site"

export function GuideCard({ guide }: { guide: Guide }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy/5">
        <Image
          src={guide.cover || "/placeholder.svg"}
          alt={guide.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-navy">{guide.title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted">{guide.desc}</p>

        <ul className="mt-4 space-y-2">
          {guide.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-ink">
              <Check className="mt-1 size-4 shrink-0 text-gold" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex-1" />

        {open ? (
          <LeadForm guide={guide.slug} source="guide" cta="أرسل لي الدليل" />
        ) : (
          <Button onClick={() => setOpen(true)} variant="gold" className="w-full">
            <Download className="size-4" />
            حمّل الدليل مجاناً
          </Button>
        )}
      </div>
    </div>
  )
}
