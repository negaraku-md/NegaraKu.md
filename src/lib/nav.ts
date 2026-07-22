import type { StringKey } from './i18n';

export interface NavItem {
  label: StringKey;
  href: string; // locale-agnostic path; Header applies localePath()
  external?: boolean;
}

export interface NavMenu {
  label: StringKey;
  href?: string; // if set and no items, renders as a plain link
  items?: NavItem[];
}

export const NAV: NavMenu[] = [
  // The three visitor-intent pillars lead the nav.
  { label: 'nav.understand', href: '/understand' },
  { label: 'nav.living', href: '/living' },
  { label: 'nav.business', href: '/doing-business' },
  {
    label: 'nav.explore',
    items: [
      { label: 'nav.latest', href: '/latest' },
      { label: 'nav.graph', href: '/graph' },
      { label: 'nav.map', href: '/map' },
      { label: 'nav.terminology', href: '/terminology' },
      { label: 'nav.random', href: '/random' },
    ],
  },
  {
    label: 'nav.more',
    items: [
      { label: 'nav.aboutPage', href: '/about' },
      { label: 'nav.dashboard', href: '/dashboard' },
      { label: 'nav.semiont', href: '/semiont' },
      { label: 'nav.dataHub', href: '/data' },
      { label: 'nav.companies', href: '/companies' },
      { label: 'nav.resources', href: '/resources' },
      { label: 'nav.changelog', href: '/changelog' },
      { label: 'nav.mcp', href: '/mcp' },
    ],
  },
  { label: 'nav.contribute', href: '/contribute' },
];
