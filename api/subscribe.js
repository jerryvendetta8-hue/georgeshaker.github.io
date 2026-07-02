/**
 * POST /api/subscribe
 * Adds a lead to Mailchimp and tags them "free-preview".
 *
 * Required env vars:
 *   MAILCHIMP_API_KEY       — e.g. abc123-us6
 *   MAILCHIMP_AUDIENCE_ID   — your list/audience ID
 *   MAILCHIMP_SERVER_PREFIX — the data-centre prefix, e.g. "us6"
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const apiKey    = process.env.MAILCHIMP_API_KEY;
  const listId    = process.env.MAILCHIMP_AUDIENCE_ID;
  const server    = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !listId || !server) {
    // Env vars not configured — fail gracefully so the UX still works
    console.warn('[subscribe] Mailchimp env vars missing; skipping list add.');
    return res.status(200).json({ ok: true });
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    const mcRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name || '',
          ROLE:  role  || '',
        },
        tags: ['free-preview'],
      }),
    });

    const data = await mcRes.json();

    // 400 with title "Member Exists" is not an error for us
    if (!mcRes.ok && data.title !== 'Member Exists') {
      console.error('[subscribe] Mailchimp error:', data);
      // Still return ok=true so the user gets the PDF — don't block on MC errors
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[subscribe] Network error:', err);
    // Fail gracefully — user still gets the PDF
    return res.status(200).json({ ok: true });
  }
}
