import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pdfPath = resolve(rootDir, "static_website/downloads/resume.pdf");
const linkFiles = [
  resolve(rootDir, "static_website/index.html"),
  resolve(rootDir, "static_website/resume.html"),
];
const checkOnly = process.argv.includes("--check");

const pdf = await readFile(pdfPath);
const version = createHash("sha256").update(pdf).digest("hex").slice(0, 16);
const currentUrl = `downloads/resume.pdf?v=${version}`;
const resumeUrlPattern = /downloads\/resume\.pdf(?:\?v=[a-f0-9]+)?/g;

for (const linkFile of linkFiles) {
  const html = await readFile(linkFile, "utf8");
  const matches = [...html.matchAll(resumeUrlPattern)];

  if (matches.length === 0) {
    throw new Error(`No resume PDF link found in ${linkFile}`);
  }

  const updatedHtml = html.replace(resumeUrlPattern, currentUrl);

  if (checkOnly && updatedHtml !== html) {
    throw new Error(
      `${linkFile} does not link to the current PDF version (${version})`,
    );
  }

  if (!checkOnly && updatedHtml !== html) {
    await writeFile(linkFile, updatedHtml);
  }
}

console.log(
  checkOnly
    ? `Resume PDF links match version ${version}`
    : `Resume PDF links updated to ${currentUrl}`,
);
