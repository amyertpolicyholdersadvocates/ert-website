/**
 * Business details used across the whole site.
 * Edit here once and every page, the footer and the SEO tags update.
 */
export const SITE = {
  name: 'ERT Policyholders Advocates',
  legalName: 'ERT Policyholders Advocates, LLC',
  shortName: 'ERT',
  tagline: 'Licensed public adjusters working for policyholders, not insurance companies.',
  description:
    'ERT Policyholders Advocates, LLC is a licensed public adjusting firm helping homeowners in Illinois, North Carolina, and Georgia with water, fire, storm, and catastrophe property claims. Contingency fee, no upfront cost.',
  url: 'https://ertpolicyholdersadvocates.com',
  // Leave phone empty to hide it everywhere. Example: '(555) 555-5555'
  phone: '',
};

/**
 * Contact form. Submissions go to the site's own Worker (/api/contact), which
 * emails them to Amy. Her address is stored only as a Cloudflare secret
 * (CONTACT_TO), so it never appears in the website or this repository.
 *
 * TURNSTILE_SITE_KEY is public by design (from Cloudflare > Turnstile).
 * Its matching secret key is stored only as the TURNSTILE_SECRET_KEY secret.
 */
export const FORM_ENDPOINT = '/api/contact';
export const TURNSTILE_SITE_KEY = '0x4AAAAAAFMf8ibvf6mEDvyj';

export const ADJUSTER = {
  name: 'Amy Thorpe',
  title: 'Licensed Public Adjuster',
  initials: 'AT',
  npn: '21476594',
};

export const LICENSES = [
  { state: 'Illinois', abbr: 'IL', number: '21476594' },
  { state: 'North Carolina', abbr: 'NC', number: '21476594' },
  { state: 'Georgia', abbr: 'GA', number: '3807737' },
];

export const STATES_SERVED = LICENSES.map(l => l.state);

/** "Illinois, North Carolina, and Georgia" */
export const statesSentence = (() => {
  const s = STATES_SERVED;
  return s.length < 3 ? s.join(' and ') : `${s.slice(0, -1).join(', ')}, and ${s[s.length - 1]}`;
})();

export const licenseLine =
  LICENSES.map(l => `${l.state} #${l.number}`).join(' · ') + ` · NPN ${ADJUSTER.npn}`;

export const NAV = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Fees', href: '/fees' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
