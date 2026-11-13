// "Which court?" — route a Malaysian dispute to the right court or tribunal.
// Pure, client-safe, unit-tested. THRESHOLDS ARE DATED + CITED: update
// COURTS.asOf when a monetary jurisdiction limit changes by amendment.
//
// Figures are from our vetted reference article
// knowledge/law/small-claims-tribunal-procedure.md and the statutes it cites:
//   - Subordinate Courts Act 1948 (Act 92), ss.65 (Sessions) & 90 (Magistrates)
//   - Courts of Judicature Act 1964 (Act 91) — High Court, unlimited
//   - Rules of Court 2012, Order 93 — Small Claims (Magistrates), ≤ RM5,000
//   - Consumer Protection Act 1999 (Act 599) — Tribunal for Consumer Claims, ≤ RM50,000
// This routes the FORUM only; it is not legal advice on the merits.

export type Matter = 'money' | 'consumer' | 'criminal' | 'family' | 'employment';

export interface CourtInput {
  matter: Matter;
  /** money / consumer — amount in dispute (RM). */
  amount?: number;
  /** money — the claimant is an individual (Small Claims is individuals-only). */
  individual?: boolean;
  /** family — the parties are Muslim (→ Syariah Court). */
  muslim?: boolean;
  /** criminal — rough severity band (the precise court turns on the offence's
   *  statutory maximum punishment; this is the lay proxy). */
  severity?: 'minor' | 'serious' | 'capital';
  /** employment — nature of the claim. */
  dispute?: 'wages' | 'dismissal';
}

/** Stable forum ids — the view maps these to localised names + descriptions. */
export type ForumKey =
  | 'small-claims'
  | 'magistrates'
  | 'sessions'
  | 'high-court'
  | 'consumer-tribunal'
  | 'homebuyer-tribunal'
  | 'syariah'
  | 'high-court-family'
  | 'labour-court'
  | 'industrial-court';

export interface CourtResult {
  forum: ForumKey;
  /** Statutory basis, shown verbatim (language-neutral citation). */
  basis: string;
  /** Extra routing context for the view (e.g. the ceiling that applied). */
  ceiling?: number;
  /** A secondary forum worth noting (e.g. appeal route / alternative). */
  alsoKey?: ForumKey;
  asOf: string;
}

export interface CourtThresholds {
  asOf: string;
  smallClaims: number; // ≤ → Small Claims (individuals)
  magistrates: number; // ≤ → Magistrates' Court
  sessions: number; // ≤ → Sessions Court (above → High Court)
  consumerTribunal: number; // ≤ → Tribunal for Consumer Claims
  sources: { title: string; url: string }[];
}

export const COURTS: CourtThresholds = {
  asOf: '2026-01-01',
  smallClaims: 5_000,
  magistrates: 100_000,
  sessions: 1_000_000,
  consumerTribunal: 50_000,
  sources: [
    { title: 'Subordinate Courts Act 1948 (Act 92), ss.65 & 90', url: 'https://lom.agc.gov.my/ilims/upload/portal/akta/LOM/EN/Act%2092.pdf' },
    { title: 'Courts of Judicature Act 1964 (Act 91)', url: 'https://lom.agc.gov.my/' },
    { title: 'Rules of Court 2012 — Order 93 (Small Claims)', url: 'https://lom.agc.gov.my/' },
    { title: 'Consumer Protection Act 1999 (Act 599) — Tribunal for Consumer Claims', url: 'https://lom.agc.gov.my/' },
    { title: 'Small Claims & Court Jurisdiction (NegaraKu.md)', url: 'https://negaraku.md/en/law/small-claims-tribunal-procedure' },
  ],
};

/** Route a civil money claim to a court by the amount in dispute. */
function moneyForum(amount: number, individual: boolean, t: CourtThresholds): CourtResult {
  if (individual && amount > 0 && amount <= t.smallClaims) {
    return { forum: 'small-claims', basis: 'Rules of Court 2012, Order 93', ceiling: t.smallClaims, asOf: t.asOf };
  }
  if (amount <= t.magistrates) {
    return { forum: 'magistrates', basis: 'Subordinate Courts Act 1948, s.90', ceiling: t.magistrates, asOf: t.asOf };
  }
  if (amount <= t.sessions) {
    return { forum: 'sessions', basis: 'Subordinate Courts Act 1948, s.65', ceiling: t.sessions, asOf: t.asOf };
  }
  return { forum: 'high-court', basis: 'Courts of Judicature Act 1964, s.23', asOf: t.asOf };
}

export function findCourt(input: CourtInput, t: CourtThresholds = COURTS): CourtResult {
  const amount = Math.max(0, input.amount || 0);

  switch (input.matter) {
    case 'money':
      return moneyForum(amount, input.individual ?? true, t);

    case 'consumer':
      // Goods/services dispute against a business: the Tribunal for Consumer
      // Claims handles claims up to its ceiling; above it, the ordinary courts.
      if (amount > 0 && amount <= t.consumerTribunal) {
        return { forum: 'consumer-tribunal', basis: 'Consumer Protection Act 1999, s.98', ceiling: t.consumerTribunal, asOf: t.asOf };
      }
      return moneyForum(amount, input.individual ?? true, t);

    case 'criminal': {
      // The precise court turns on the offence's maximum punishment; this maps the
      // lay severity band to the usual trial court.
      const sev = input.severity ?? 'serious';
      if (sev === 'capital') return { forum: 'high-court', basis: 'Courts of Judicature Act 1964, s.22', asOf: t.asOf };
      if (sev === 'minor') return { forum: 'magistrates', basis: 'Subordinate Courts Act 1948, ss.85 & 87', alsoKey: 'sessions', asOf: t.asOf };
      return { forum: 'sessions', basis: 'Subordinate Courts Act 1948, ss.63 & 64', asOf: t.asOf };
    }

    case 'family':
      return input.muslim
        ? { forum: 'syariah', basis: 'Federal Constitution, Ninth Schedule, List II (State)', asOf: t.asOf }
        : { forum: 'high-court-family', basis: 'Law Reform (Marriage and Divorce) Act 1976', asOf: t.asOf };

    case 'employment':
      return input.dispute === 'dismissal'
        ? { forum: 'industrial-court', basis: 'Industrial Relations Act 1967, s.20', asOf: t.asOf }
        : { forum: 'labour-court', basis: 'Employment Act 1955, s.69', asOf: t.asOf };

    default:
      return moneyForum(amount, input.individual ?? true, t);
  }
}
