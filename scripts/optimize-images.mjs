import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("src/assets/img");
const maxSize = Number.parseInt(process.env.IMG_MAX ?? "2400", 10);
const quality = Number.parseInt(process.env.IMG_QUALITY ?? "82", 10);
const keepOriginals = process.env.IMG_KEEP_ORIGINALS === "1";
const supportedExts = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function toWebpPath(filePath) {
  const ext = path.extname(filePath);
  return filePath.slice(0, -ext.length) + ".webp";
}

const files = await walk(root);
const targets = files.filter((file) => supportedExts.has(path.extname(file).toLowerCase()));

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;
let removed = 0;

for (const file of targets) {
  const ext = path.extname(file).toLowerCase();
  const targetPath = toWebpPath(file);
  const beforeStat = await fs.stat(file);
  totalBefore += beforeStat.size;

  const targetExists = await fs
    .stat(targetPath)
    .then(() => true)
    .catch(() => false);

  if (!targetExists) {
    try {
      const image = sharp(file, { failOnError: false });
      await image
        .rotate()
        .resize({
          width: maxSize,
          height: maxSize,
          fit: "inside",
          withoutEnlargement: true
        })
        .webp({ quality, effort: 4 })
        .toFile(targetPath);
      converted += 1;
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
      continue;
    }
  }

  const afterStat = await fs.stat(targetPath);
  totalAfter += afterStat.size;

  if (!keepOriginals) {
    await fs.unlink(file);
    removed += 1;
  }
}

const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);
console.log(`Converted: ${converted}`);
console.log(`Originals removed: ${removed}`);
console.log(`Total before: ${toMB(totalBefore)} MB`);
console.log(`Total after: ${toMB(totalAfter)} MB`);
console.log(`Savings: ${toMB(totalBefore - totalAfter)} MB`);
