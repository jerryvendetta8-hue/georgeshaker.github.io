"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { site } from "@/lib/site"

export function BookingForm({ formUrl }: { formUrl?: string }) {
  const [loaded, setLoaded] = useState(false)
  let embedUrl: string | undefined
  try {
    if (formUrl?.trim()) {
      const url = new URL(formUrl.trim())
      if (url.protocol === "https:") {
        url.searchParams.set("embedded", "true")
        embedUrl = url.toString()
      }
    }
  } catch {
    // An invalid configuration must not prevent booking through WhatsApp.
  }

  if (!embedUrl) {
    return (
      <Button asChild variant="gold" size="lg">
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">احجز عبر واتساب</a>
      </Button>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
        {!loaded && (
          <div role="status" className="absolute inset-0 flex flex-col gap-6 bg-white p-6 md:p-10">
            <span className="sr-only">جارٍ تحميل نموذج الحجز</span>
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-5 w-full" />
            {[0, 1, 2, 3, 4, 5].map((item) => <Skeleton key={item} className="h-28 w-full" />)}
          </div>
        )}
        <iframe src={embedUrl} title="نموذج حجز استشارة مع د. جورج شاكر" onLoad={() => setLoaded(true)} className="block min-h-[1400px] w-full border-0 md:min-h-[1200px]" />
      </div>
      <Button asChild variant="outline" className="self-center">
        <a href={embedUrl} target="_blank" rel="noopener noreferrer">افتح نموذج الحجز في صفحة جديدة</a>
      </Button>
    </div>
  )
}
