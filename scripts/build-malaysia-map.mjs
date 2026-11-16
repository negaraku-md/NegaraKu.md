// Generate projected SVG path data for a clickable Malaysia state map, from the
// committed Natural-Earth-derived TopoJSON (src/data/mys.topo.json, public
// domain). Output: src/data/malaysiaMap.json { viewBox, states:[{id,name,d}] }.
// Decoding is inline (no topojson-client dep); projection uses d3-geo.
//
// Run once (geometry is static); re-run only if the source geometry changes:
//   node scripts/build-malaysia-map.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { geoMercator, geoPath } from 'd3-geo';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const topo = JSON.parse(fs.readFileSync(path.join(root, 'src/data/mys.topo.json'), 'utf8'));

// datamaps MY.XX id → our state id (matches src/lib/malaysiaStates.ts).
const ID = {
  'MY.JH': 'johor', 'MY.KH': 'kedah', 'MY.KN': 'kelantan', 'MY.ME': 'melaka',
  'MY.NS': 'negeri-sembilan', 'MY.PH': 'pahang', 'MY.PG': 'penang', 'MY.PK': 'perak',
  'MY.PL': 'perlis', 'MY.SL': 'selangor', 'MY.TE': 'terengganu', 'MY.SA': 'sabah',
  'MY.SK': 'sarawak', 'MY.KL': 'kuala-lumpur', 'MY.PJ': 'putrajaya', 'MY.LA': 'labuan',
};

const [sx, sy] = topo.transform.scale;
const [tx, ty] = topo.transform.translate;
const decodeArc = (arc) => {
  let x = 0, y = 0;
  return arc.map(([dx, dy]) => { x += dx; y += dy; return [x * sx + tx, y * sy + ty]; });
};
const arcCoords = (i) => (i < 0 ? decodeArc(topo.arcs[~i]).slice().reverse() : decodeArc(topo.arcs[i]));
const ring = (arcIdx) => {
  const out = [];
  for (const i of arcIdx) { const seg = arcCoords(i); out.push(...(out.length ? seg.slice(1) : seg)); }
  return out;
};
const toGeo = (g) =>
  g.type === 'Polygon' ? { type: 'Polygon', coordinates: g.arcs.map(ring) }
  : g.type === 'MultiPolygon' ? { type: 'MultiPolygon', coordinates: g.arcs.map((p) => p.map(ring)) }
  : null;

const geoms = topo.objects[Object.keys(topo.objects)[0]].geometries.filter((g) => ID[g.id]);
const features = geoms.map((g) => ({ type: 'Feature', id: g.id, name: g.properties?.name ?? g.id, geometry: toGeo(g) }));
const fc = { type: 'FeatureCollection', features };

const W = 960, H = 560;
const projection = geoMercator().fitExtent([[8, 8], [W - 8, H - 8]], fc);
const toPath = geoPath(projection);

const states = features
  .map((f) => ({ id: ID[f.id], name: f.name, d: toPath(f.geometry) }))
  .filter((s) => s.d)
  .sort((a, b) => a.id.localeCompare(b.id));

const out = { viewBox: `0 0 ${W} ${H}`, states };
fs.writeFileSync(path.join(root, 'src/data/malaysiaMap.json'), JSON.stringify(out));
console.log(`[malaysia-map] wrote ${states.length} states → src/data/malaysiaMap.json`);
