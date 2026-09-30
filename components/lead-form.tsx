"use client"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  guide?: string
  source?: string
  withName?: boolean
  withPhone?: boolean
  withMessage?: boolean
  cta?: string
  compact?: boolean
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LeadForm({
  guide,
  source = "site",
  withName = true,
  withPhone = false,
  withMessage = false,
  cta = "أرسل",
  compact = false,
}: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("") // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (withName && !name.trim()) {
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
        body: JSON.stringify({ name, email, phone, message, guide, source, website }),
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

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-navy">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-white">
          <Check className="size-5" />
        </span>
        <div>
          <p className="font-display font-semibold">تم الإرسال بنجاح</p>
          <p className="text-sm text-muted">
            {guide
              ? "سيصلك الدليل على بريدك الإلكتروني خلال دقائق."
              : "شكراً لتواصلك، سنعود إليك في أقرب وقت."}
          </p>
        </div>
      </div>
    )
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none"

  return (
    <form onSubmit={onSubmit} className={cn("space-y-3", compact && "space-y-2")} noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      {withName ? (
        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
          autoComplete="name"
        />
      ) : null}

      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputCls}
        dir="ltr"
        autoComplete="email"
      />

      {withPhone ? (
        <input
          type="tel"
          placeholder="رقم الهاتف (اختياري)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputCls}
          dir="ltr"
          autoComplete="tel"
        />
      ) : null}

      {withMessage ? (
        <textarea
          placeholder="رسالتك أو استفسارك"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={cn(inputCls, "resize-none")}
        />
      ) : null}

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <Button
        type="submit"
        variant="gold"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            جاري الإرسال...
          </>
        ) : (
          cta
        )}
      </Button>

      <p className="text-center text-xs text-muted">
        نحترم خصوصيتك ولن نشارك بياناتك مع أي جهة.
      </p>
    </form>
  )
}
