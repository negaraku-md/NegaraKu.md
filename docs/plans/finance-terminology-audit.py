import os, re, glob, json, sys
from collections import defaultdict

ROOT = sys.argv[1] if len(sys.argv) > 1 else "knowledge/finance"
LANGS = ["ms","zh","ta","ja","ko","th","vi","id","ar","hi","es","fr"]

# anchor term -> english regex variants (case-insensitive) appearing inside parentheses
ANCHORS = {
 "capital allowance": [r"capital allowance[s]?"],
 "finance lease": [r"finance lease"],
 "operating lease": [r"operating lease"],
 "lessor": [r"\blessor\b"],
 "lessee": [r"\blessee\b"],
 "debt service ratio (DSR)": [r"debt[- ]service ratio", r"\bDSR\b"],
 "factoring": [r"factoring"],
 "invoice financing": [r"invoice financing"],
 "hire purchase": [r"hire[- ]purchase"],
 "recourse / non-recourse": [r"non[- ]recourse", r"\brecourse\b"],
 "term loan": [r"term loan"],
 "overdraft": [r"overdraft"],
 "revolving credit": [r"revolving credit"],
 "bank guarantee": [r"bank guarantee"],
 "letter of credit": [r"letter[s]? of credit", r"\bL/?C\b"],
 "Bai al-Dayn": [r"Bai'? ?al-?Dayn", r"Bay'? ?al-?Dayn"],
}

# per-language trailing-term extraction: grab the coined term immediately before "(anchor)"
SCRIPT = {
 "zh": r'[一-鿿]',
 "ja": r'[一-鿿぀-ヿー々]',
 "ko": r'[가-힣]',
 "th": r'[฀-๿]',
 "ta": r'[஀-௿]',
 "hi": r'[ऀ-ॿ]',
 "ar": r'[؀-ۿ]',
}
LATIN = r"[A-Za-zÀ-ÿĀ-ſ']"

def preceding_coinage(line, m_start, lang):
    pre = line[:m_start].rstrip()
    if lang in SCRIPT:
        cls = SCRIPT[lang]
        # trailing contiguous run of script letters (+ interior hyphen/ZWNJ) — the term glued to the paren
        m = re.search(r'(?:' + cls + r'|[\-‌‍])+$', pre)
        if not m:
            return ""
        return m.group(0).strip('-‌‍ ')[-12:]  # cap length to the term tail
    else:
        m = re.search(r'((?:' + LATIN + r'+[ \-]){0,3}' + LATIN + r'+)$', pre)
        if not m:
            return ""
        return " ".join(m.group(1).split()[-4:]).lower()

results = defaultdict(lambda: defaultdict(lambda: defaultdict(set)))
anchors_seen = defaultdict(set)  # lang -> set(anchor) that appeared at all

for lang in LANGS:
    for fp in sorted(glob.glob(f"{ROOT}/*.{lang}.md")):
        base = os.path.basename(fp).replace(f".{lang}.md", "")
        with open(fp, encoding="utf-8") as f:
            text = f.read()
        for line in text.splitlines():
            for pm in re.finditer(r'[（(]([^）)]{1,45})[）)]', line):
                inner = pm.group(1)
                for anchor, variants in ANCHORS.items():
                    hit = next((v for v in variants if re.search(v, inner, re.IGNORECASE)), None)
                    if not hit:
                        continue
                    # CLEAN-GLOSS filter: parenthetical must be essentially ONLY the anchor
                    residue = re.sub(hit, '', inner, flags=re.IGNORECASE)
                    residue = re.sub(r"[\s,;/．。、，\-'’“”\"()]|or|and|atau|dan|的", '', residue, flags=re.IGNORECASE)
                    if len(residue) > 3:
                        break  # e.g. "(DSR 60%)", "(LC) for Islamic Trade Financing" — not a clean gloss
                    anchors_seen[lang].add(anchor)
                    coin = preceding_coinage(line, pm.start(), lang)
                    if coin:
                        results[lang][anchor][coin].add(base)
                    break

def merge_suffix(coins):
    """Collapse renderings where one ends with (is a suffix of) a shorter one -> keep shorter core term."""
    keys = sorted(coins.keys(), key=len)  # shortest first = candidate cores
    merged = {}
    mapping = {}
    for k in keys:
        core = None
        for c in merged:
            a, b = k.replace(' ', ''), c.replace(' ', '')
            if a and b and (b in a or a in b):  # substring containment either direction
                core = c; break
        if core is None:
            merged[k] = set(coins[k]); mapping[k] = k
        else:
            merged[core] |= coins[k]; mapping[k] = core
    return merged

report = {"divergences": [], "singletons": []}
for lang in LANGS:
    for anchor in ANCHORS:
        raw = results[lang][anchor]
        if not raw:
            continue
        coins = merge_suffix(raw)
        entry = {"lang": lang, "anchor": anchor,
                 "renderings": {c: sorted(fs) for c, fs in sorted(coins.items(), key=lambda kv: -len(kv[1]))}}
        if len(coins) > 1:
            report["divergences"].append(entry)
        else:
            report["singletons"].append(entry)

with open(sys.argv[2] if len(sys.argv) > 2 else "audit_out.json", "w", encoding="utf-8") as f:
    json.dump(report, f, ensure_ascii=False, indent=1)

print(f"Langs scanned: {len(LANGS)}")
print(f"Anchor terms tracked: {len(ANCHORS)}")
print(f"Divergent (lang,anchor) pairs: {len(report['divergences'])}")
print(f"Consistent (singleton) pairs: {len(report['singletons'])}")
print("--- divergence summary (lang: anchor -> #distinct renderings) ---")
for d in report["divergences"]:
    print(f"{d['lang']}: {d['anchor']} -> {len(d['renderings'])} renderings")
