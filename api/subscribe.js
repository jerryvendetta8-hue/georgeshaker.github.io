/**
 * POST /api/subscribe
 * Adds a lead to Mailchimp and tags them "free-preview".
 *
 * Required env vars:
 *   MAILCHIMP_API_KEY       — full key e.g. abc123abc123-us6
 *   MAILCHIMP_AUDIENCE_ID   — your list/audience ID
 *   MAILCHIMP_SERVER_PREFIX — data-centre prefix e.g. "us6"
 */

const crypto = require('crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ ok: false, error: 'Invalid email' });
  }

  const dc   = process.env.MAILCHIMP_SERVER_PREFIX;
  const list = process.env.MAILCHIMP_AUDIENCE_ID;
  const key  = process.env.MAILCHIMP_API_KEY;

  if (!dc || !list || !key) {
    console.error('[subscribe] Missing Mailchimp env vars');
    // Return success so user still gets PDF download
    return res.status(200).json({ ok: true, warn: 'Mailchimp not configured' });
  }

  const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

  try {
    const mcRes = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${list}/members/${hash}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${key}`,
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: 'subscribed',
          merge_fields: { FNAME: name || '', MMERGE3: role || '' },
          tags: ['free-preview'],
        }),
      }
    );

    if (!mcRes.ok) {
      const detail = await mcRes.json().catch(() => ({}));
      console.error('[subscribe] Mailchimp error:', JSON.stringify(detail));
      return res.status(502).json({ ok: false, error: detail.detail || 'Mailchimp error' });
    }

    console.log('[subscribe] Subscribed:', email);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[subscribe] Network error:', err.message);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
};
