// build-restaurant-heroes-b1.mjs — representative dish heroes for heroless hawker
// restaurants (Phase B batch 1). Free-licensed Wikimedia, contact-sheet QA'd.
// These are REPRESENTATIVE images of each venue's signature dish (not the exact
// plate), labelled as such in heroAlt. Committed + reproducible.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const UA='NegaraKuBot/1.0 (https://negaraku.md; hero image sourcing)';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function dl(u){for(let i=0;i<4;i++){try{const r=await fetch(u,{headers:{'User-Agent':UA},signal:AbortSignal.timeout(60000)});if(r.ok)return Buffer.from(await r.arrayBuffer());}catch{}await sleep(1500*(i+1));}return null;}
const HEROES=[
 {slug:'bee-hwa-cafe',url:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Char_kway_teow_-_Old_Town_Kopitiam.jpg',lic:'CC BY-SA 2.0',by:'Alpha from Melbourne, Australia',page:'https://commons.wikimedia.org/wiki/File:Char_kway_teow_-_Old_Town_Kopitiam.jpg'},
 {slug:'bridge-street-prawn-noodle',url:'https://upload.wikimedia.org/wikipedia/commons/5/5d/Penang_Har_Mee_Sold_in_Parit_Buntar.jpg',lic:'CC BY 2.0',by:'brown_colour',page:'https://commons.wikimedia.org/wiki/File:Penang_Har_Mee_Sold_in_Parit_Buntar.jpg'},
 {slug:'green-house-prawn-mee-and-loh-mee',url:'https://upload.wikimedia.org/wikipedia/commons/d/d7/Hae_mee_prawn_noodle_sg.JPG',lic:'CC BY-SA 4.0',by:'Chensiyuan',page:'https://commons.wikimedia.org/wiki/File:Hae_mee_prawn_noodle_sg.JPG'},
 {slug:'ghee-lian',url:'https://upload.wikimedia.org/wikipedia/commons/1/15/Tom_Yum_Goong_Noodle_Soup_-_Nok_Nok_Kitchen_at_The_Cow_2024-03-28.jpg',lic:'CC0',by:'Andy Li',page:'https://commons.wikimedia.org/wiki/File:Tom_Yum_Goong_Noodle_Soup_-_Nok_Nok_Kitchen_at_The_Cow_2024-03-28.jpg'},
];
const meta=[];
for(const h of HEROES){const buf=await dl(h.url);if(!buf){console.log('FAIL',h.slug);continue;}const dir=path.join('public','media','food',h.slug);fs.mkdirSync(dir,{recursive:true});let q=82,out;for(;q>=30;q-=6){out=await sharp(buf).resize(1600,900,{fit:'cover',position:'attention'}).modulate({saturation:1.06,brightness:1.02}).webp({quality:q}).toBuffer();if(out.length<=180*1024)break;}fs.writeFileSync(path.join(dir,'hero.webp'),out);meta.push({slug:h.slug,credit:`${h.by} / Wikimedia Commons`,license:h.lic,source:h.page});console.log(`${h.slug}  ${Math.round(out.length/1024)}KB  (${h.by})`);}
fs.writeFileSync('public/media/food/_restaurant-heroes-b1-meta.json',JSON.stringify(meta,null,2));
console.log('done',meta.length);
