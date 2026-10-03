# ERT Policyholders Advocates website

Marketing site for **ERT Policyholders Advocates, LLC** (ertpolicyholdersadvocates.com).

Built with [Astro](https://astro.build) + Tailwind CSS, based on the
[ScrewFast](https://github.com/mearashadowfax/ScrewFast) theme (MIT, see `LICENSE-SCREWFAST`).
Hosted on Cloudflare Workers (static assets) with automatic deploys from GitHub.

## Where to edit things

| What | File |
| --- | --- |
| Business name, email, phone, fee %, licenses, NPN | `src/data/site.ts` |
| Claim types (water, fire, storm, catastrophe) | `src/data/claims.ts` |
| Process steps | `src/data/process.ts` |
| FAQs | `src/data/faqs.ts` |
| Home page sections | `src/pages/index.astro` |
| Amy's bio | `src/pages/about.astro` |
| Colors (navy and gold) and fonts | `src/styles/global.css` |

Adding a phone number: set `phone` in `src/data/site.ts` and it appears in the footer and contact page.

## Contact form

The Request Help form posts to [FormSubmit](https://formsubmit.co) and is emailed to the
address in `src/data/site.ts`. The **first** submission sends an activation email to that
address; click the link in it once to start receiving submissions.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Deploying

Pushing to `main` triggers a Cloudflare build (`npm run build`, then `npx wrangler deploy`).
`wrangler.jsonc` tells Cloudflare to serve the `./dist` folder.
