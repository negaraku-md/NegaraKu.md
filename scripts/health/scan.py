#!/usr/bin/env python3
"""Content-health scanner for negaraku.md.

Reads the article manifest (public/api/articles.json, produced by scripts/sync.mjs)
and reports on the health of the knowledge base:

  * missing citations on reviewed/verified articles
  * hollow content (word count below a threshold)
  * broken `related` links (pointing at slugs that do not exist)
  * translation coverage (ms articles lacking en / zh)

It also scans content that is NOT an article, so the lifecycle does not stop at
the edge of knowledge/ (see docs/CONTENT-MODEL.md):

  * datasets: a "sourced" claim must cite a source and an asOf date; an
    unverified/schematic one must explain itself to the reader; labels must
    exist in all three languages
  * a rendered <DataProvenance dataset="…"> must point at a declared dataset
  * UI strings must exist in all three languages

Exit code is non-zero when ERROR-level issues are found and --strict is set,
so it can gate CI.

Usage:
    python scripts/health/scan.py            # report
    python scripts/health/scan.py --strict   # fail CI on errors
    python scripts/health/scan.py --json      # machine-readable output
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

# Article titles/paths may contain non-Latin text; ensure UTF-8 output on
# consoles that default to a legacy code page (e.g. Windows cp1252).
try:
    sys.stdout.reconfigure(encoding="utf-8")
except (AttributeError, ValueError):
    pass

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "public" / "api" / "articles.json"

HOLLOW_WORDS = 90          # articles shorter than this are "hollow"
# Google renders roughly this many title characters before truncating.
TITLE_BUDGET = 60
# Declared depth per tier, from the article standard. The badge must match the
# depth: a Tier 2 badge on a 550-word page is a claim the article doesn't honour.
# Tier 4 (entity/data) and S (sensitive) are judged on structure, not length.
TIER_WORDS = {"1": (2000, 4000), "2": (1000, 2000), "3": (300, 800)}
# Source count expected on a substantive article, per the standard.
TIER_SOURCES = {"1": (3, 12), "2": (3, 8)}
# A Layer 1 answer outside this range stops working as an extractable snippet.
ANSWER_MIN, ANSWER_MAX = 40, 100
TARGET_LANGS = ("en", "zh")

# Reviewers authorised to sign off content. A named reviewer renders a green
# "Human-reviewed" badge, so an unrecognised name is a false claim of human
# oversight — the one failure that discredits every other trust signal on the
# site. The list is empty because nobody has been onboarded as a reviewer yet;
# add one real name per line to REVIEWERS_FILE when that changes.
REVIEWERS_FILE = ROOT / "scripts" / "health" / "reviewers.txt"


# Subcategory keys are declared in src/lib/subcategories.ts. A key used in content
# but missing there still renders — it just falls back to a Title Cased version of
# the slug, in English, on every locale, and sorts to the end of the category page.
# That is a silent failure: the page looks fine in English and is quietly broken in
# Malay and Chinese. 34 keys had drifted this way before the check existed.
SUBCATS_FILE = ROOT / "src" / "lib" / "subcategories.ts"


def load_declared_subcats() -> set[str]:
    if not SUBCATS_FILE.exists():
        return set()
    text = SUBCATS_FILE.read_text(encoding="utf-8")
    block = text.split("SUBCATEGORY_LABELS", 1)[-1].split("SUBCATEGORY_ORDER", 1)[0]
    # keys look like  foo: { ms: … }  or  'foo-bar': { ms: … }
    return set(re.findall(r"^\s*'?([a-z0-9][a-z0-9-]*)'?\s*:\s*\{", block, re.M))


def load_reviewers() -> set[str]:
    if not REVIEWERS_FILE.exists():
        return set()
    return {
        line.strip()
        for line in REVIEWERS_FILE.read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.startswith("#")
    }


def load_articles() -> list[dict]:
    if not MANIFEST.exists():
        sys.exit(f"[health] manifest not found at {MANIFEST}. Run `npm run sync` first.")
    return json.loads(MANIFEST.read_text(encoding="utf-8")).get("articles", [])


PROVENANCE_FILE = ROOT / "src" / "lib" / "provenance.ts"
I18N_FILE = ROOT / "src" / "lib" / "i18n.ts"
COMPONENTS_DIR = ROOT / "src" / "components"
LOCALES = ("ms", "en", "zh")


def scan_content() -> list[dict]:
    """Health of content that is NOT an article.

    The lifecycle used to stop at the edge of knowledge/: datasets, UI strings
    and page copy reached readers with nothing enforcing sources or translation
    parity. These checks make the content model enforceable rather than
    aspirational — an ungoverned dataset now fails the build instead of quietly
    shipping.
    """
    findings: list[dict] = []

    def add(level, code, path, msg):
        findings.append({"level": level, "code": code, "path": path, "title": "", "message": msg})

    # --- datasets -----------------------------------------------------------
    declared: dict[str, str] = {}
    if PROVENANCE_FILE.exists():
        text = PROVENANCE_FILE.read_text(encoding="utf-8")
        block = text.split("DATASETS", 1)[-1]
        # Each entry:  key: { ... },  — capture the body up to the matching depth-1 close.
        for m in re.finditer(r"^  ([a-z][\w-]*):\s*\{(.*?)^  \},", block, re.S | re.M):
            key, body = m.group(1), m.group(2)
            rel = "src/lib/provenance.ts"
            verification = (re.search(r"verification:\s*'([a-z]+)'", body) or [None, ""])[1]
            declared[key] = verification

            label = re.search(r"label:\s*\{(.*?)\}", body, re.S)
            missing = [l for l in LOCALES if not label or not re.search(rf"\b{l}\s*:", label.group(1))]
            if missing:
                add("ERROR", "dataset-label-lang", rel,
                    f"dataset '{key}' label missing language(s): {', '.join(missing)}")

            if verification == "sourced":
                # A "sourced" claim must be checkable, or the badge lies.
                if "source:" not in body:
                    add("ERROR", "dataset-no-source", rel,
                        f"dataset '{key}' is marked sourced but cites no source")
                if "asOf:" not in body:
                    add("ERROR", "dataset-no-asof", rel,
                        f"dataset '{key}' is marked sourced but has no asOf date")
            elif verification in ("unverified", "schematic"):
                # The reader must be told WHY it is not sourced.
                if "note:" not in body:
                    add("WARN", "dataset-no-note", rel,
                        f"dataset '{key}' is {verification} but gives the reader no explanatory note")
            else:
                add("ERROR", "dataset-verification", rel,
                    f"dataset '{key}' has no valid verification (sourced|unverified|schematic)")

    # Every <DataProvenance dataset="X" /> must point at a declared dataset.
    if COMPONENTS_DIR.exists():
        for comp in COMPONENTS_DIR.glob("*.astro"):
            for used in re.findall(r'<DataProvenance[^>]*dataset="([^"]+)"', comp.read_text(encoding="utf-8")):
                if used not in declared:
                    add("ERROR", "dataset-undeclared", f"src/components/{comp.name}",
                        f"renders provenance for '{used}', which is not declared in provenance.ts")

    # --- UI strings ---------------------------------------------------------
    if I18N_FILE.exists():
        text = I18N_FILE.read_text(encoding="utf-8")
        for m in re.finditer(r"'([\w.\-]+)':\s*\{([^{}]*)\}", text):
            key, body = m.group(1), m.group(2)
            missing = [l for l in LOCALES if not re.search(rf"\b{l}\s*:", body)]
            if missing:
                add("ERROR", "ui-string-lang", "src/lib/i18n.ts",
                    f"UI string '{key}' missing language(s): {', '.join(missing)}")

    return findings


def scan(articles: list[dict]) -> list[dict]:
    findings: list[dict] = []
    reviewers = load_reviewers()
    declared_subcats = load_declared_subcats()

    # canonical slugs that exist (any language)
    slugs = {a["slug"] for a in articles if a.get("slug")}
    # category ids are valid relation targets (e.g. part-of: malaysia)
    categories = {a["category"] for a in articles if a.get("category")}
    # (key -> set of languages present)
    langs_by_key: dict[str, set[str]] = {}
    for a in articles:
        langs_by_key.setdefault(a["key"], set()).add(a.get("lang", "ms"))

    def add(level, code, article, msg):
        findings.append(
            {
                "level": level,
                "code": code,
                "path": article.get("path"),
                "title": article.get("title"),
                "message": msg,
            }
        )

    for a in articles:
        status = a.get("status", "draft")
        # citations (the meta "about" category is exempt)
        if (
            status in ("reviewed", "verified")
            and a.get("sources", 0) == 0
            and a.get("category") != "about"
        ):
            add("ERROR", "no-citation", a, f"status '{status}' but has no sources")
        # hollow content
        if a.get("words", 0) < HOLLOW_WORDS:
            add("WARN", "hollow", a, f"only {a.get('words', 0)} words (< {HOLLOW_WORDS})")
        # broken related links — WARN, not ERROR: the site resolves `related`
        # against real published articles and silently drops any that are missing
        # (no dead link ever reaches a reader), so an unwritten cross-reference is
        # a content-completeness gap, not a build/deploy blocker. Kept visible as a
        # warning so the backlog stays honest without failing `--strict` CI.
        for rel in a.get("related", []):
            if rel not in slugs:
                add("WARN", "broken-link", a, f"related slug '{rel}' does not exist (dropped on render)")
        # search title overflows Google's display budget with no short variant,
        # so the auto-appended review year gets truncated away and earns nothing
        title = a.get("title") or ""
        if len(title) > TITLE_BUDGET and not a.get("seoTitle"):
            add(
                "WARN",
                "title-too-long",
                a,
                f"title is {len(title)} chars (> {TITLE_BUDGET}) and has no seoTitle",
            )
        # the tier badge is a promise about depth — hold every tier to it, not
        # just Tier 1. Ten Tier 2 articles at half depth passed silently while
        # this check only looked at Tier 1.
        tier = a.get("tier")
        words = a.get("words", 0)
        if tier in TIER_WORDS:
            lo, hi = TIER_WORDS[tier]
            if words < lo:
                add(
                    "WARN",
                    "tier-mismatch",
                    a,
                    f"declared Tier {tier} but only {words} words (expected {lo}-{hi})",
                )
            elif words > hi:
                add(
                    "INFO",
                    "tier-mismatch",
                    a,
                    f"declared Tier {tier} but {words} words (expected {lo}-{hi}) — promote?",
                )
        # a substantive article resting on one or two sources isn't sourced,
        # it's paraphrased
        if tier in TIER_SOURCES:
            lo, hi = TIER_SOURCES[tier]
            n = a.get("sources", 0)
            if n < lo:
                add("WARN", "sources-thin", a, f"tier {tier} has {n} source(s) (expected {lo}-{hi})")
        # a subcategory key with no entry in subcategories.ts labels itself in
        # English on every locale and sorts to the end of its category page
        if declared_subcats:
            for sub in a.get("subcategory", []):
                if sub not in declared_subcats:
                    add(
                        "WARN",
                        "subcat-undeclared",
                        a,
                        f"subcategory '{sub}' is not in subcategories.ts — "
                        f"renders untranslated and unordered",
                    )
        # an unrecognised reviewer name renders a green "human-reviewed" badge
        # that nobody actually stands behind
        rvr = a.get("reviewer")
        if rvr and rvr not in reviewers:
            add(
                "ERROR",
                "unknown-reviewer",
                a,
                f"reviewer '{rvr}' is not in {REVIEWERS_FILE.name} — badge claims a sign-off nobody gave",
            )
        # 3R+1 HARD GATE: sensitive content may never reach a published state
        # without a named human reviewer. This is the one rule with legal weight.
        if a.get("sensitivity", "none") != "none":
            if status in ("reviewed", "published") and not a.get("reviewer"):
                add(
                    "ERROR",
                    "sensitive-unreviewed",
                    a,
                    f"sensitivity '{a.get('sensitivity')}' is '{status}' with no named reviewer",
                )
            if a.get("tier") != "S":
                add(
                    "WARN",
                    "sensitive-not-tier-s",
                    a,
                    f"sensitivity '{a.get('sensitivity')}' should be tier S, found '{a.get('tier')}'",
                )
        # Layer 1 is the AEO surface — tiers 1 and 2 must carry a direct answer
        if a.get("tier") in ("1", "2") and not a.get("answer"):
            add("WARN", "answer-missing", a, f"tier {a.get('tier')} has no Layer 1 answer")
        # an answer outside 40–100 words stops working as an extractable snippet
        aw = a.get("answerWords", 0)
        if a.get("answer") and not (ANSWER_MIN <= aw <= ANSWER_MAX):
            add(
                "WARN",
                "answer-length",
                a,
                f"answer is {aw} words (target {ANSWER_MIN}-{ANSWER_MAX})",
            )
        # FAQ is the highest-leverage AEO surface we have — it is the only field
        # that emits FAQPage JSON-LD, which is what assistants extract. Required
        # on every substantive article, not just Tier 1.
        if tier in ("1", "2") and not a.get("faqCount"):
            add("WARN", "faq-missing", a, f"tier {tier} has no FAQ (loses FAQPage structured data)")
        # Typed graph edges may target an article OR a category (e.g. part-of:
        # malaysia). Anything else is a forward reference to content we haven't
        # written — which is a useful backlog signal, not a defect, so it is
        # reported at INFO. The graph builder skips these so readers never see
        # a dead edge.
        for r in a.get("relations", []):
            # Manifest relations are typed edges {rel, to}; tolerate the older
            # bare-slug form too.
            target = r.get("to") if isinstance(r, dict) else r
            if target in slugs or target in categories:
                continue
            add("INFO", "relation-gap", a, f"relation '{target}' has no article yet — content gap")

    # translation coverage (report once per canonical ms article)
    seen: set[str] = set()
    for a in articles:
        if a.get("lang", "ms") != "ms" or a["key"] in seen:
            continue
        seen.add(a["key"])
        present = langs_by_key.get(a["key"], set())
        missing = [l for l in TARGET_LANGS if l not in present]
        if missing:
            add("INFO", "untranslated", a, f"missing translation(s): {', '.join(missing)}")

    return findings


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true", help="exit non-zero on ERROR findings")
    ap.add_argument("--json", action="store_true", help="emit JSON")
    args = ap.parse_args()

    articles = load_articles()
    findings = scan(articles) + scan_content()

    if args.json:
        print(json.dumps({"count": len(articles), "findings": findings}, indent=2, ensure_ascii=False))
    else:
        counts = {"ERROR": 0, "WARN": 0, "INFO": 0}
        icons = {"ERROR": "[ERR ]", "WARN": "[WARN]", "INFO": "[INFO]"}
        for f in findings:
            counts[f["level"]] += 1
            print(f"{icons[f['level']]} [{f['code']}] {f['path']}: {f['message']}")
        total_langs = len({a.get("lang", "ms") for a in articles})
        print(
            f"\n[health] {len(articles)} article file(s), {total_langs} language(s) — "
            f"{counts['ERROR']} error(s), {counts['WARN']} warning(s), {counts['INFO']} info."
        )

    if args.strict and any(f["level"] == "ERROR" for f in findings):
        sys.exit(1)


if __name__ == "__main__":
    main()
