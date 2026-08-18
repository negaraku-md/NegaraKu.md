import type { StringKey } from './i18n';
import { REPO } from './site';

export interface NavItem {
  label: StringKey;
  href: string; // locale-agnostic path; Header applies localePath(). External URLs pass through untouched.
  external?: boolean;
  /** Hidden from the dropdown by default; toggled on/off with Ctrl+Alt+Shift+A
      (persisted in localStorage). The page stays reachable by URL regardless. */
  secret?: boolean;
  /** Non-interactive section label inside a dropdown (href ignored). Groups the
      items that follow it until the next heading. */
  heading?: boolean;
}

export interface NavMenu {
  label: StringKey;
  href?: string; // if set and no items, renders as a plain link
  items?: NavItem[];
  /** Hidden from the nav by default; revealed via a keyboard shortcut
      (Ctrl+Alt+Shift+A). The page stays reachable by URL regardless. */
  secret?: boolean;
}

// The three visitor-intent pillars stay top-level (one click). Everything else is
// grouped into four dropdowns — Explore / About / Contribute / Site — so the bar
// stays scannable as the site grows. Items point at real destinations: existing
// pages, anchors on /contribute, or GitHub for the developer/participation links.
// NOTE (interim): a few labels the design calls for don't have dedicated pages yet
// (Our Team, FAQ, Donate Your AI Token, Support, CLI Tool) — they point at the
// nearest existing hub for now and are flagged to get their own pages.
export const NAV: NavMenu[] = [
  { label: 'nav.understand', href: '/understand' },
  { label: 'nav.living', href: '/living' },
  { label: 'nav.business', href: '/doing-business' },
  {
    label: 'nav.explore',
    // Grouped by intent so the 8 links read as three scannable clusters:
    //  Discover (start + the two highest-value browse paths), By area (the three
    //  pillars in full), Tools (exploratory / power features).
    items: [
      { label: 'nav.grpDiscover', href: '', heading: true },
      { label: 'nav.exploreMalaysia', href: '/explore' },
      { label: 'nav.categories', href: '/categories' },
      { label: 'nav.latest', href: '/latest' },
      { label: 'nav.timeline', href: '/timeline' },
      { label: 'nav.grpByArea', href: '', heading: true },
      { label: 'nav.understandMalaysia', href: '/understand' },
      { label: 'nav.livingMalaysia', href: '/living' },
      { label: 'nav.businessMalaysia', href: '/doing-business' },
      { label: 'nav.grpTools', href: '', heading: true },
      { label: 'nav.graph', href: '/graph' },
      { label: 'nav.articles', href: '/articles', secret: true }, // hidden; Ctrl+Alt+Shift+A toggles it
    ],
  },
  {
    label: 'nav.about',
    items: [
      { label: 'nav.aboutPage', href: '/about' },
      { label: 'nav.team', href: '/about' }, // TODO: dedicated /about team section or page
      { label: 'nav.faq', href: '/about' }, // TODO: dedicated /faq page
    ],
  },
  {
    label: 'nav.contribute',
    items: [
      { label: 'nav.submitArticle', href: '/contribute#contribute' },
      { label: 'nav.donate', href: '/contribute' }, // TODO: dedicated donate/support page
      { label: 'nav.support', href: '/contribute' }, // TODO: dedicated support page
      { label: 'nav.whyContribute', href: '/contribute' },
      { label: 'nav.cli', href: REPO, external: true }, // TODO: point at CLI docs if/when they exist
      { label: 'nav.github', href: REPO, external: true },
    ],
  },
  {
    label: 'nav.site',
    items: [
      { label: 'nav.dashboard', href: '/dashboard' },
      { label: 'nav.reportIssue', href: '/contribute#report' },
      { label: 'nav.suggest', href: '/contribute#suggest' },
      { label: 'nav.changelog', href: '/changelog' },
      { label: 'nav.settings', href: '/settings' },
    ],
  },
];
