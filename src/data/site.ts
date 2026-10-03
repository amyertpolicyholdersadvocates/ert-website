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
    'ERT Policyholders Advocates, LLC is a licensed public adjusting firm helping homeowners in Illinois, North Carolina, and Georgia with water, fire, storm, and catastrophe property claims. 10% contingency fee, no upfront cost.',
  url: 'https://ertpolicyholdersadvocates.com',
  email: 'amy@ertpolicyholdersadvocates.com',
  // Leave phone empty to hide it everywhere. Example: '(555) 555-5555'
  phone: '',
  feePercent: 10,
};

/** Where the Request Help form sends submissions (FormSubmit.co, no account needed). */
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`;

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
