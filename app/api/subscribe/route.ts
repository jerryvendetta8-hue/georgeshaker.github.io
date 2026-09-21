import { createHash } from "crypto";
import { NextResponse } from "next/server";

/**
 * POST /api/subscribe
 * Adds a lead to Mailchimp and tags them "free-preview".
 * Ported from the legacy static-site serverless function.
 */
export async function POST(req: Request) {
  let body: { name?: string; email?: string; role?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, role } = body;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const dc = process.env.MAILCHIMP_SERVER_PREFIX;
  const list = process.env.MAILCHIMP_AUDIENCE_ID;
  const key = process.env.MAILCHIMP_API_KEY;

  if (!dc || !list || !key) {
    console.error("[subscribe] Missing Mailchimp env vars");
    // Return success so the user still receives the PDF download
    return NextResponse.json({ ok: true, warn: "Mailchimp not configured" });
  }

  const hash = createHash("md5").update(email.toLowerCase()).digest("hex");

  try {
    const mcRes = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${list}/members/${hash}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey ${key}`,
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: "subscribed",
          merge_fields: { FNAME: name || "", MMERGE3: role || "" },
          tags: ["free-preview"],
        }),
      },
    );

    if (!mcRes.ok) {
      const detail = (await mcRes.json().catch(() => ({}))) as { detail?: string };
      console.error("[subscribe] Mailchimp error:", JSON.stringify(detail));
      return NextResponse.json(
        { ok: false, error: detail.detail || "Mailchimp error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Network error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
