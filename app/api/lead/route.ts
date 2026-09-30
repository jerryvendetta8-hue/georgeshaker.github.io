import { NextResponse } from "next/server"

type LeadBody = {
  name?: string
  email?: string
  phone?: string
  message?: string
  guide?: string
  source?: string
  website?: string // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: LeadBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "طلب غير صالح" }, { status: 400 })
  }

  // Honeypot: silently accept bots without doing anything.
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  const email = (body.email ?? "").trim().toLowerCase()
  const name = (body.name ?? "").trim()

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "يرجى إدخال بريد إلكتروني صحيح" },
      { status: 422 },
    )
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const prefix = process.env.MAILCHIMP_SERVER_PREFIX

  if (!apiKey || !audienceId || !prefix) {
    console.log("[v0] Mailchimp env vars missing; skipping subscription")
    // Do not fail the user's request if the provider is not configured yet.
    return NextResponse.json({ ok: true, stored: false })
  }

  const tags: string[] = []
  if (body.guide) tags.push(`guide:${body.guide}`)
  if (body.source) tags.push(`source:${body.source}`)

  try {
    const res = await fetch(
      `https://${prefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name,
            PHONE: body.phone ?? "",
          },
          tags,
        }),
      },
    )

    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as {
        title?: string
      }
      // "Member Exists" is fine — treat as success.
      if (data.title === "Member Exists") {
        return NextResponse.json({ ok: true, existing: true })
      }
      console.log("[v0] Mailchimp error:", data.title)
      return NextResponse.json(
        { error: "تعذّر إتمام الاشتراك، حاول لاحقاً" },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, stored: true })
  } catch (err) {
    console.log("[v0] Mailchimp request failed:", (err as Error).message)
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع، حاول لاحقاً" },
      { status: 500 },
    )
  }
}
