"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { countryCodes, site } from "@/lib/site"

export const LEAD_MODAL_EVENT = "open-lead-modal"

type LeadModalDetail = {
  source?: string
  title?: string
  subtitle?: string
  guide?: string
  cta?: string
}

/** Opens the global lead-capture modal. Safe to call from any client component. */
export function openLeadModal(detail: LeadModalDetail = {}) {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent(LEAD_MODAL_EVENT, { detail }))
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none"

export function LeadModal() {
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState<LeadModalDetail>({})

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dialCode, setDialCode] = useState(countryCodes[0].code)
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("") // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState("")

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function onOpen(e: Event) {
      const d = (e as CustomEvent<LeadModalDetail>).detail ?? {}
      setDetail(d)
      setStatus("idle")
      setError("")
      setOpen(true)
    }
    window.addEventListener(LEAD_MODAL_EVENT, onOpen)
    return () => window.removeEventListener(LEAD_MODAL_EVENT, onOpen)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close()
    }
    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("يرجى إدخال الاسم")
      return
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("يرجى إدخال بريد إلكتروني صحيح")
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone.trim() ? `${dialCode} ${phone.trim()}` : "",
          guide: detail.guide,
          source: detail.source ?? "modal",
          website,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "حدث خطأ، حاول لاحقاً")
        setStatus("error")
        return
      }
      setStatus("done")
    } catch {
      setError("تعذّر الاتصال، تحقق من الشبكة وحاول مجدداً")
      setStatus("error")
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={detail.title ?? "نموذج التواصل"}
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        aria-label="إغلاق"
        onClick={close}
      />

      <div className="relative w-full max-w-md rounded-3xl border border-line bg-white p-6 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={close}
          className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full text-muted transition hover:bg-cream hover:text-navy"
          aria-label="إغلاق"
        >
          <X className="size-5" />
        </button>

        {status === "done" ? (
          <div className="py-4 text-center">
            <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-gold text-white">
              <Check className="size-7" />
            </span>
            <h3 className="font-display text-xl font-bold text-navy">تم الإرسال بنجاح</h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              {detail.guide
                ? "سيصلك الدليل على بريدك الإلكتروني خلال دقائق."
                : "شكراً لتواصلك، سنعود إليك في أقرب وقت."}
            </p>
            <Button variant="outline" className="mt-6" onClick={close}>
              إغلاق
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-5 text-center">
              <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
                {detail.title ?? "ابقَ على تواصل"}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {detail.subtitle ??
                  "اترك بياناتك ليصلك محتوى موثوق عن صحة الرجل، بخصوصية تامة."}
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-3" noValidate>
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              <input
                type="text"
                placeholder="الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
                autoComplete="name"
              />

              <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
                dir="ltr"
                autoComplete="email"
              />

              <div className="flex gap-2" dir="ltr">
                <select
                  value={dialCode}
                  onChange={(e) => setDialCode(e.target.value)}
                  className={cn(inputCls, "w-32 shrink-0 cursor-pointer")}
                  aria-label="مفتاح الدولة"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="رقم الجوال (اختياري)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                  autoComplete="tel"
                />
              </div>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <Button type="submit" variant="gold" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  detail.cta ?? "أرسل"
                )}
              </Button>

              <p className="text-center text-xs text-muted">
                نحترم خصوصيتك ولن نشارك بياناتك مع أي جهة.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
