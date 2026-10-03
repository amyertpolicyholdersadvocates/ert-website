import type { IconName } from '@components/icons';

export interface ClaimType {
  slug: string;
  title: string;
  navLabel: string;
  icon: IconName;
  summary: string;
  carrierIssue: string;
  intro: string[];
  examples: string[];
  issues: string[];
  review: string[];
  firstSteps: string[];
}

export const CLAIMS: ClaimType[] = [
  {
    slug: 'water-damage',
    title: 'Water Damage Claims',
    navLabel: 'Water Damage',
    icon: 'water',
    summary: 'Burst pipes, appliance leaks, plumbing failures, and the hidden damage that follows.',
    carrierIssue: 'Moisture behind walls and under floors is often missed, and claims get labeled as "long-term leakage."',
    intro: [
      'Water rarely stays where it starts. It wicks into drywall, travels under flooring, and soaks insulation and subfloors long before it shows on the surface. An estimate that only covers what you can see is usually an estimate that leaves money on the table.',
      'We help you gather the right evidence, from mitigation moisture logs to your contractor\'s findings, push back on exclusions that do not fit the facts, and make sure drying, mitigation, and rebuild costs are all part of the claim.',
    ],
    examples: [
      'Burst or frozen pipes',
      'Water heater, washer, dishwasher, or refrigerator line failures',
      'Toilet and supply line overflows',
      'Roof leaks after a storm',
      'Sudden ceiling and wall saturation',
    ],
    issues: [
      'Damage limited to visibly wet areas only',
      'Denials citing "wear and tear" or "continuous seepage"',
      'Mitigation and drying invoices disputed or reduced',
      'Matching flooring and cabinets left out of the scope',
      'Mold remediation capped or excluded',
    ],
    review: [
      'Mitigation moisture logs, photos, and drying records',
      'Cause-of-loss facts compared to your policy language',
      'Line-by-line review of the carrier estimate',
      'Mitigation, contents, and additional living expenses',
    ],
    firstSteps: [
      'Stop the source of water if it is safe to do so',
      'Photograph everything before cleanup begins',
      'Call a mitigation company to start drying',
      'Keep damaged materials and receipts until the adjuster sees them',
    ],
  },
  {
    slug: 'fire-smoke',
    title: 'Fire & Smoke Damage Claims',
    navLabel: 'Fire & Smoke',
    icon: 'fire',
    summary: 'Kitchen fires, electrical fires, total losses, smoke and soot throughout the home.',
    carrierIssue: 'Smoke, soot, and odor damage outside the burn area is frequently underestimated or treated as "cleanable."',
    intro: [
      'Fire claims are some of the most complex claims a family can face. Beyond the visible burn area, smoke and soot travel through HVAC systems, wall cavities, and every room in the house. Contents lists can run into the thousands of items.',
      'We build a complete claim covering structure, contents, smoke remediation, code upgrades, and your living expenses while you are out of the home, so you are not left negotiating alone during an already stressful time.',
    ],
    examples: [
      'Kitchen and cooking fires',
      'Electrical and wiring fires',
      'Wildfire and neighboring structure fires',
      'Partial and total losses',
      'Smoke and soot damage from a nearby fire',
    ],
    issues: [
      'Smoke damage outside the burn area marked as clean-only',
      'HVAC and duct systems left out of the scope',
      'Contents undervalued or heavily depreciated',
      'Additional living expense (ALE) limits cut short',
      'Building code upgrade costs not included',
    ],
    review: [
      'Structure and smoke damage evidence, room by room',
      'Detailed contents inventory and valuation support',
      'Ordinance and law (code upgrade) coverage review',
      'ALE, temporary housing, and debris removal costs',
    ],
    firstSteps: [
      'Make sure everyone is safe and the fire department has cleared the property',
      'Notify your insurance company and request a copy of your full policy',
      'Secure the property against weather and theft',
      'Save receipts for hotels, meals, and emergency purchases',
    ],
  },
  {
    slug: 'storm-damage',
    title: 'Storm, Wind & Hail Damage Claims',
    navLabel: 'Storm, Wind & Hail',
    icon: 'storm',
    summary: 'Roof, siding, window, and interior damage from wind, hail, fallen trees, and severe weather.',
    carrierIssue: 'Hail and wind damage is often called "pre-existing" or "cosmetic," and repairs are limited to spot patches.',
    intro: [
      'Storm damage is easy to miss from the ground and easy for an insurance company to minimize. Bruised shingles, lifted tabs, dented gutters, and cracked siding can all lead to leaks and larger problems later.',
      'We review your photos, your roofer\'s or contractor\'s findings, and the insurer\'s estimate side by side, and argue for repairs that actually restore your home, including matching materials when a patch will not do.',
    ],
    examples: [
      'Hail damage to roofs, siding, gutters, and windows',
      'Wind damage and missing shingles',
      'Trees and limbs falling on the home',
      'Water intrusion after a storm',
      'Damaged fences, sheds, and detached structures',
    ],
    issues: [
      'Damage called "wear and tear" or "pre-existing"',
      'Repairs limited to a few shingles instead of a full slope or roof',
      'Matching siding or roofing not addressed',
      'Interior water damage separated from the storm claim',
      'Low pricing for labor and materials in your area',
    ],
    review: [
      'Photos and contractor findings for the roof and exterior',
      'Storm date and weather data supporting the date of loss',
      'Repair vs. replacement and matching arguments',
      'Interior damage, tree removal, and other structures',
    ],
    firstSteps: [
      'Photograph damage from the ground and inside the home',
      'Make temporary repairs such as tarping to prevent more damage',
      'Save receipts for emergency repairs',
      'Be cautious of anyone pressuring you to sign on the spot',
    ],
  },
  {
    slug: 'catastrophe',
    title: 'Catastrophe & Major Loss Claims',
    navLabel: 'Catastrophe Claims',
    icon: 'alert',
    summary: 'Large-scale disasters like tornadoes, hurricanes, derechos, and widespread severe weather events.',
    carrierIssue: 'After a disaster, carriers are overwhelmed, inspections are rushed, and claims sit for weeks.',
    intro: [
      'When a tornado, hurricane, or major storm hits an entire community, insurance companies bring in waves of adjusters who may spend only minutes at each home. Delays stack up, contractors are scarce, and important details get missed.',
      'We give your claim the time and attention a major loss deserves. We organize your evidence, keep the claim moving, and stay on top of deadlines so your recovery does not get lost in the backlog.',
    ],
    examples: [
      'Tornado and straight-line wind damage',
      'Hurricane and tropical storm damage',
      'Derecho and widespread hail events',
      'Declared state or federal disaster events',
      'Major structural losses',
    ],
    issues: [
      'Rushed inspections and incomplete estimates',
      'Long delays in communication and payment',
      'Contractor pricing that does not reflect post-disaster demand',
      'Confusion about deductibles, limits, and separate coverages',
      'Missed policy deadlines and documentation requests',
    ],
    review: [
      'Organized evidence for structure, contents, and other structures',
      'Policy limits, deductibles, and coverage triggers',
      'Pricing that reflects real local conditions',
      'Deadline tracking and steady follow-up with the carrier',
    ],
    firstSteps: [
      'Get to safety and follow local emergency guidance',
      'Report the claim as soon as you can',
      'Photograph and video all damage before cleanup',
      'Keep a log of every call and email with your insurer',
    ],
  },
];

export const getClaim = (slug: string) => CLAIMS.find(c => c.slug === slug);
