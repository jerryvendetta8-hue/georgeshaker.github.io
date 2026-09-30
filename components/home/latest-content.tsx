"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { cn } from "@/lib/utils"
import { videoContent, site, type VideoItem } from "@/lib/site"

const tabs: { key: VideoItem["platform"]; label: string; href: string }[] = [
  { key: "tiktok", label: "تيك توك", href: site.social.tiktok },
  { key: "instagram", label: "انستغرام", href: site.social.instagram },
  { key: "youtube", label: "يوتيوب", href: site.social.youtube },
]

export function LatestContent() {
  const [active, setActive] = useState<VideoItem["platform"]>("tiktok")
  const activeTab = tabs.find((t) => t.key === active)!
  const items = videoContent.filter((v) => v.platform === active)

  return (
    <Section id="latest" className="bg-white">
      <SectionHeading
        eyebrow="أحدث المحتوى"
        title="مقاطع قصيرة وموثوقة"
        desc="محتوى مبسّط عن صحة الرجل على منصات التواصل، بلغة سهلة ومبنية على العلم."
      />

      <div className="mb-8 flex justify-center">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-cream p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                active === t.key ? "bg-navy text-white" : "text-muted hover:text-navy",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((v) => (
          <a
            key={v.title}
            href={activeTab.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-navy/85 to-navy p-5 text-white shadow-sm transition-transform hover:-translate-y-1"
          >
            <span className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-gold text-white transition-transform group-hover:scale-110">
              <Play className="size-5 translate-x-[1px]" />
            </span>
            <h3 className="font-display text-base font-semibold leading-7">{v.title}</h3>
            <span className="mt-1 text-xs text-white/60">{activeTab.label}</span>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={activeTab.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gold hover:underline"
        >
          تابعني على {activeTab.label}
        </a>
      </div>
    </Section>
  )
}
