/**
 * POST /api/subscribe
 * Adds a lead to Mailchimp and tags them "free-preview".
 *
 * Required env vars:
 *   MAILCHIMP_API_KEY       — full key including suffix, e.g. abc123-us6
 *   MAILCHIMP_AUDIENCE_ID   — your list/audience ID
 *   MAILCHIMP_SERVER_PREFIX — the data-centre prefix, e.g. "us6"
 */

const crypto = require('crypto');

module.exports = async function handler(req, res) {
  // Allow CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !listId || !server) {
    console.error('[subscribe] Missing env vars — MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID or MAILCHIMP_SERVER_PREFIX not set.');
    // Still return 200 so the user gets the PDF — but log the misconfiguration
    return res.status(200).json({ ok: true, warn: 'Mailchimp not configured' });
  }

  const authHeader = `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`;
  const emailHash  = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  const baseUrl    = `https://${server}.api.mailchimp.com/3.0`;

  try {
    // Step 1: Add or update member (PATCH upserts — works for both new and existing)
    const memberRes = await fetch(`${baseUrl}/lists/${listId}/members/${emailHash}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        status: 'subscribed',
        merge_fields: {
          FNAME: name || '',
        },
      }),
    });

    const memberData = await memberRes.json();

    if (!memberRes.ok) {
      console.error('[subscribe] Mailchimp member error:', JSON.stringify(memberData));
      return res.status(200).json({ ok: true }); // still show success to user
    }

    console.log('[subscribe] Member added/updated:', email);

    // Step 2: Add "free-preview" tag via the member tags endpoint
    const tagRes = await fetch(`${baseUrl}/lists/${listId}/members/${emailHash}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify({
        tags: [{ name: 'free-preview', status: 'active' }],
      }),
    });

    if (!tagRes.ok) {
      const tagData = await tagRes.json().catch(() => ({}));
      console.error('[subscribe] Mailchimp tag error:', JSON.stringify(tagData));
    } else {
      console.log('[subscribe] Tag applied: free-preview');
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[subscribe] Network error:', err.message);
    return res.status(200).json({ ok: true });
  }
};
