#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";

const repoRoot = path.resolve(import.meta.dirname, "..");
const siteDir = path.join(repoRoot, "static_website");

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value = "true"] = arg.replace(/^--/, "").split("=");
    return [key, value];
  })
);

const pageName = args.page || "resume-print.html";
const outputPath = args.output;

if (!outputPath) {
  console.error("Missing required --output argument.");
  process.exit(1);
}

const pagePath = path.join(siteDir, pageName);
const html = fs.readFileSync(pagePath, "utf8");
const templateMatch = html.match(/<script type="text\/template" class="template">([\s\S]*?)<\/script>/);

if (!templateMatch) {
  console.error(`Could not find template in ${pagePath}`);
  process.exit(1);
}

const templateText = templateMatch[1];
const context = {
  console,
  window: {}
};

context.window = context;

vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(siteDir, "js", "underscore-min.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(siteDir, "js", "resume-data.js"), "utf8"), context);

context._.templateSettings.variable = "rc";

const rendered = context._.template(templateText)(context.ResumeData);

let out = html.replace(templateMatch[0], rendered);
out = out.replace(
  /\s*<div id="print-actions"[\s\S]*?<\/div>\s*<section id="dynamic_resume">/,
  "\n\n   <section id=\"dynamic_resume\">"
);
out = out.replace(/\s*<footer>[\s\S]*?<\/footer>/, "\n");
out = out.replace(/\n\s*<!-- Java Script[\s\S]*?<\/body>/, "\n</body>");

fs.writeFileSync(outputPath, out);
console.log(outputPath);
