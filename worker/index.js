/**
 * Cloudflare Worker for ertpolicyholdersadvocates.com
 *
 * - Serves the static Astro site from ./dist (via the ASSETS binding).
 * - Handles POST /api/contact: verifies the Cloudflare Turnstile token, then
 *   emails the submission through Resend.
 *
 * Nothing sensitive lives in this file. Set these in the Cloudflare dashboard
 * (Worker > Settings > Variables and Secrets), all as type "Secret":
 *   RESEND_API_KEY        Resend API key (re_...)
 *   TURNSTILE_SECRET_KEY  Turnstile widget secret key
 *   CONTACT_TO            Where submissions go (Amy's inbox)
 *   CONTACT_FROM          Sender on your verified Resend domain,
 *                         e.g. "ERT Website <website@ertpolicyholdersadvocates.com>"
 */

const FIELDS = {
  name: { label: 'Name', max: 120, required: true },
  email: { label: 'Email', max: 200, required: true },
  phone: { label: 'Phone', max: 40, required: true },
  property_state: { label: 'Property state', max: 60, required: true },
  damage_type: { label: 'Type of damage', max: 60, required: true },
  claim_status: { label: 'Claim status', max: 80 },
  date_of_loss: { label: 'Date of loss', max: 20 },
  insurance_company: { label: 'Insurance company', max: 120 },
  message: { label: 'What happened', max: 5000, required: true },
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const escapeHtml = s =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const EMAIL_RE = /^[^\s@<>()]+@[^\s@<>()]+\.[^\s@<>()]+$/;

async function verifyTurnstile(token, secret, ip) {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = await res.json().catch(() => ({}));
  return data.success === true;
}

async function handleContact(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405);

  // Only accept submissions from this site.
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: 'Forbidden' }, 403);
  }

  const missing = ['RESEND_API_KEY', 'TURNSTILE_SECRET_KEY', 'CONTACT_TO', 'CONTACT_FROM'].filter(k => !env[k]);
  if (missing.length) {
    // Logs names only, never values. View in Cloudflare: Worker > Observability / Logs.
    console.error('Contact form is not configured. Missing: ' + missing.join(', '));
    return json({ ok: false, error: 'The form is temporarily unavailable.' }, 503);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Invalid submission.' }, 400);
  }

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if ((form.get('company_website') || '').toString().trim() !== '') return json({ ok: true });

  const token = (form.get('cf-turnstile-response') || '').toString();
  const ip = request.headers.get('CF-Connecting-IP') || '';
  if (!token || !(await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip))) {
    return json({ ok: false, error: 'Please complete the verification check and try again.' }, 400);
  }

  const data = {};
  for (const [key, def] of Object.entries(FIELDS)) {
    const value = (form.get(key) || '').toString().trim();
    if (def.required && !value) return json({ ok: false, error: `${def.label} is required.` }, 400);
    if (value.length > def.max) return json({ ok: false, error: `${def.label} is too long.` }, 400);
    data[key] = value;
  }
  if (!EMAIL_RE.test(data.email)) return json({ ok: false, error: 'Please enter a valid email address.' }, 400);

  const rows = Object.entries(FIELDS)
    .filter(([key]) => data[key])
    .map(
      ([key, def]) =>
        `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:600;vertical-align:top">${def.label}</td>` +
        `<td style="padding:6px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(data[key])}</td></tr>`
    )
    .join('');
  const text = Object.entries(FIELDS)
    .filter(([key]) => data[key])
    .map(([key, def]) => `${def.label}: ${data[key]}`)
    .join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: data.email,
      subject: `New claim review request: ${data.name} (${data.damage_type}, ${data.property_state})`,
      html: `<p>New request from the website:</p><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`,
      text,
    }),
  });

  if (!res.ok) {
    const raw = await res.text().catch(() => '');
    console.error('Resend error', res.status, raw);
    // Short reason code shown under the error so setup problems are easy to spot.
    // Resend's messages contain no secrets (e.g. "domain is not verified").
    let reason = '';
    try { reason = JSON.parse(raw).message || ''; } catch {}
    return json(
      {
        ok: false,
        error: 'We could not send your request. Please try again in a few minutes.',
        code: `email-${res.status}`,
        detail: reason.slice(0, 200),
      },
      502
    );
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return handleContact(request, env);
    if (url.pathname.startsWith('/api/')) return json({ ok: false, error: 'Not found' }, 404);
    return env.ASSETS.fetch(request);
  },
};
