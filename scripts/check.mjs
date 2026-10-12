import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { content } from '../src/content.mjs';
const files = ['index.html','about/index.html','mission-vision/index.html','404.html'];
const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
for (const file of files) {
 const html = await readFile(`dist/${file}`,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: exactly one H1`);
 assert(!/https?:\/\//.test(html), `${file}: no remote page dependencies or links`);
 assert(!/foundation|foundry/i.test(html), `${file}: Foundation deferred`);
 const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,`${file}: unique IDs`);
 for (const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
   if (url.startsWith('#')) { assert(ids.includes(url.slice(1)),`${file}: missing anchor ${url}`); continue; }
   const pathname = url.split('#')[0];
   await stat(`dist${pathname}${pathname.endsWith('/')?'index.html':''}`);
 }
 for (const [,attrs] of html.matchAll(/<img ([^>]+)>/g)) assert(/alt="[^"]+"/.test(attrs),'Image alt required');
 console.log(`PASS ${file}: headings, IDs, links, local assets, image descriptions.`);
}
const about = await readFile('dist/about/index.html','utf8');
for (const p of [...content.about.paragraphs,...content.founder.paragraphs]) assert(about.includes(escape(p)),'Missing approved copy');
const mission = await readFile('dist/mission-vision/index.html','utf8');
for (const p of [content.mission,content.vision]) assert(mission.includes(escape(p)),'Missing purpose copy');
console.log('PASS complete About/founder copy and exact Mission/Vision.');
