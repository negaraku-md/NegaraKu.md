// Corpus duplicate/overlap audit — master articles only.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const ROOT = 'knowledge';
function walk(d){const o=[];for(const n of readdirSync(d)){const p=join(d,n);if(statSync(p).isDirectory())o.push(...walk(p));else if(/\.md$/.test(n)&&!/\.[a-z]{2}\.md$/.test(n))o.push(p);}return o;}

const STOP = new Set(['di','dan','yang','the','of','in','an','malaysia','malaysian','untuk','dengan','ke','dari','pada','atau','as','to','and','is','its','what','how','why','vs','a']);
const norm = s => (s||'').toLowerCase().replace(/\([^)]*\)/g,' ').replace(/[^a-z0-9À-￿\s-]/g,' ').split(/[\s-]+/).filter(w=>w&&w.length>2&&!STOP.has(w));
const jac = (a,b)=>{const A=new Set(a),B=new Set(b);if(!A.size||!B.size)return 0;let i=0;for(const x of A)if(B.has(x))i++;return i/(A.size+B.size-i);};

const arts=[];
for(const f of walk(ROOT)){
  try{const d=matter(readFileSync(f,'utf8')).data;
    if(d.status!=='published'||d.hidden===true)continue;
    arts.push({id:d.topicId,slug:d.slug,cat:d.category,title:d.title||'',entity:(d.entity||'').trim(),wd:(d.wikidata||'').trim(),
      kw:(Array.isArray(d.keywords)?d.keywords:[]).map(k=>String(k).toLowerCase()), tt:norm(d.title)});
  }catch{}
}
console.log('published masters:',arts.length);

const byWd={};for(const a of arts)if(a.wd)(byWd[a.wd]||=[]).push(a);
const wdDup=Object.entries(byWd).filter(([,v])=>v.length>1);
console.log('\n=== A. SHARED WIKIDATA QID (same entity) ===',wdDup.length);
for(const [wd,v] of wdDup) console.log(`  ${wd}: `+v.map(a=>`${a.slug}[${a.cat}]`).join('  ·  '));

const byEnt={};for(const a of arts)if(a.entity)(byEnt[a.entity.toLowerCase()]||=[]).push(a);
const entDup=Object.entries(byEnt).filter(([,v])=>v.length>1);
console.log('\n=== B. SHARED ENTITY field ===',entDup.length);
for(const [e,v] of entDup) console.log(`  "${e}": `+v.map(a=>`${a.slug}[${a.cat}]`).join('  ·  '));

const out=[];
for(let i=0;i<arts.length;i++)for(let j=i+1;j<arts.length;j++){
  const a=arts[i],b=arts[j];
  const tj=jac(a.tt,b.tt), kj=jac(a.kw,b.kw);
  if((tj>=0.5)||(kj>=0.55)) out.push({score:+Math.max(tj,kj).toFixed(2),tj:+tj.toFixed(2),kj:+kj.toFixed(2),a,b,xcat:a.cat!==b.cat});
}
out.sort((x,y)=>y.score-x.score);
console.log('\n=== C. HIGH TITLE/KEYWORD SIMILARITY pairs ===',out.length);
for(const o of [...out.filter(o=>o.xcat),...out.filter(o=>!o.xcat)].slice(0,45)){
  console.log(`  ${o.score} (t${o.tj}/k${o.kj}) ${o.xcat?'XCAT':'same'} | ${o.a.slug}[${o.a.cat}] <> ${o.b.slug}[${o.b.cat}]`);
}
