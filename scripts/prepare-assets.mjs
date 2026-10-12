import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'C:/Users/mrell/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const source = process.argv[2];
if (!source) throw new Error('Pass the existing resources folder.');
const manifest = JSON.parse(await readFile(path.join(source, 'sources.json'), 'utf8'));
await mkdir('public/assets', { recursive: true });
const records = [];
for (const entry of manifest.images) {
  const input = path.join(source, entry.local_path);
  const name = entry.filename === 'LFW (no background).png' ? 'lfw-logo' : path.parse(entry.filename).name.toLowerCase();
  const output = `public/assets/${name}.webp`;
  let pipeline = sharp(input).rotate();
  if (name === 'lfw-logo') pipeline = pipeline.trim({ threshold: 15 });
  await pipeline.resize({ width: name === 'lfw-logo' ? 1000 : 1920, withoutEnlargement: true }).webp({ quality: 86 }).toFile(output);
  const meta = await sharp(output).metadata();
  records.push({ ...entry, web_path: `/assets/${name}.webp`, width: meta.width, height: meta.height });
}
await writeFile('src/assets.json', JSON.stringify(records, null, 2) + '\n');
console.log(`Prepared ${records.length} local image assets. Originals unchanged.`);
