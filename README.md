# ERT Policyholders Advocates website

Marketing site for **ERT Policyholders Advocates, LLC** (ertpolicyholdersadvocates.com).

Built with [Astro](https://astro.build) + Tailwind CSS, based on the
[ScrewFast](https://github.com/mearashadowfax/ScrewFast) theme (MIT, see `LICENSE-SCREWFAST`).
Hosted on Cloudflare Workers (static assets) with automatic deploys from GitHub.

## Where to edit things

| What | File |
| --- | --- |
| Business name, email, phone, licenses, NPN | `src/data/site.ts` |
| Claim types (water, fire, storm, catastrophe) | `src/data/claims.ts` |
| Process steps | `src/data/process.ts` |
| FAQs | `src/data/faqs.ts` |
| Home page sections | `src/pages/index.astro` |
| Amy's bio | `src/pages/about.astro` |
| Colors (navy and gold) and fonts | `src/styles/global.css` |

Adding a phone number: set `phone` in `src/data/site.ts` and it appears in the footer and contact page.

## Contact form (no public email address)

The form posts to `/api/contact`, handled by the Worker in `worker/index.js`. The Worker
checks a Cloudflare Turnstile token (bot protection), then sends the submission to Amy
through [Resend](https://resend.com). Amy's address is never in the site or this repo.

Set these in Cloudflare (Worker > Settings > Variables and Secrets, type **Secret**):

| Name | Value |
| --- | --- |
| `RESEND_API_KEY` | API key from Resend (`re_...`) |
| `TURNSTILE_SECRET_KEY` | Secret key from Cloudflare > Turnstile |
| `CONTACT_TO` | Inbox that receives submissions |
| `CONTACT_FROM` | Sender on the verified Resend domain, e.g. `ERT Website <website@ertpolicyholdersadvocates.com>` |

The Turnstile **site key** is public and goes in `src/data/site.ts` (`TURNSTILE_SITE_KEY`).

For local testing, put the same names in a `.dev.vars` file (git-ignored) and run `npx wrangler dev`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Deploying

Pushing to `main` triggers a Cloudflare build (`npm run build`, then `npx wrangler deploy`).
`wrangler.jsonc` tells Cloudflare to serve the `./dist` folder.
