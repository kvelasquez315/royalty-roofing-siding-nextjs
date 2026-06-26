import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "public/images/BiCzvrohQrhLekiI.png";
const OUT = "public/images/hero";
mkdirSync(OUT, { recursive: true });

const widths = [1920, 1024, 640];

for (const w of widths) {
  const base = sharp(SRC).resize({ width: w, withoutEnlargement: true });
  await base.clone().avif({ quality: 50 }).toFile(`${OUT}/hero-${w}.avif`);
  await base.clone().webp({ quality: 62 }).toFile(`${OUT}/hero-${w}.webp`);
  await base.clone().jpeg({ quality: 70, mozjpeg: true }).toFile(`${OUT}/hero-${w}.jpg`);
  console.log(`generated hero-${w} (avif/webp/jpg)`);
}

const meta = await sharp(SRC).metadata();
console.log(`source dimensions: ${meta.width}x${meta.height} (aspect ${(meta.width / meta.height).toFixed(4)})`);
