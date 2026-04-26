#!/usr/bin/env node

import { execFile, spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";
import { chromium } from "playwright";

const execFileAsync = promisify(execFile);

const repoRoot = path.resolve(import.meta.dirname, "..");
const siteDir = path.join(repoRoot, "static_website");
const artifactsDir = path.join(repoRoot, ".artifacts", "resume");

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value = "true"] = arg.replace(/^--/, "").split("=");
    return [key, value];
  })
);

const pageName = args.page || "resume-print.html";
const media = args.media || (pageName.includes("print") ? "print" : "screen");
const port = Number(args.port || 4173);
const width = Number(args.width || 1400);
const height = Number(args.height || 2200);
const javascriptDelay = Number(args.delay || 1500);
const renderScreenshot = args.screenshot !== "false";
const renderPdf = args.pdf !== "false" && media === "print";

const slug = pageName.replace(/\.html$/, "");
const baseUrl = `http://127.0.0.1:${port}`;
const url = `${baseUrl}/${pageName}`;
const screenshotPath = path.resolve(
  args["screenshot-output"] || path.join(artifactsDir, `${slug}-${media}.png`)
);
const pdfPath = path.resolve(
  args["pdf-output"] || path.join(artifactsDir, `${slug}-${media}.pdf`)
);
const metricsPath = path.resolve(
  args["metrics-output"] || path.join(artifactsDir, `${slug}-${media}.json`)
);

async function waitForServer(targetUrl) {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(targetUrl, { method: "HEAD" });
      if (response.ok) {
        return;
      }
    } catch {
      // Retry.
    }

    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  throw new Error(`Timed out waiting for ${targetUrl}`);
}

async function fileInfo(filePath) {
  const { stdout } = await execFileAsync("file", [filePath]);
  return stdout.trim();
}

async function pdfPageCount(filePath) {
  const { stdout } = await execFileAsync("pdfinfo", [filePath]);
  const match = stdout.match(/^Pages:\s+(\d+)/m);
  return match ? Number(match[1]) : null;
}

async function main() {
  if (renderScreenshot) {
    await fs.mkdir(path.dirname(screenshotPath), { recursive: true });
  }
  await fs.mkdir(path.dirname(metricsPath), { recursive: true });
  if (renderPdf) {
    await fs.mkdir(path.dirname(pdfPath), { recursive: true });
  }

  const server = spawn(
    "python3",
    ["-m", "http.server", String(port), "--bind", "127.0.0.1"],
    {
      cwd: siteDir,
      stdio: "ignore"
    }
  );

  const cleanup = async () => {
    server.kill("SIGTERM");
  };

  process.on("SIGINT", async () => {
    await cleanup();
    process.exit(1);
  });

  let browser;

  try {
    console.log(`Starting local server for ${url}`);
    await waitForServer(url);

    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width, height },
      deviceScaleFactor: 1
    });

    await page.goto(url, { waitUntil: "load" });
    await page.waitForTimeout(javascriptDelay);
    await page.emulateMedia({ media });

    let screenshot = {
      attempted: false,
      ok: false,
      path: null,
      info: null
    };

    if (renderScreenshot) {
      console.log("Rendering screenshot");
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
        timeout: 120000
      });
      screenshot = {
        attempted: true,
        ok: true,
        path: screenshotPath,
        info: await fileInfo(screenshotPath)
      };
    } else {
      await fs.rm(screenshotPath, { force: true });
    }

    let pdf = {
      attempted: false,
      ok: false,
      path: null,
      pageCount: null
    };

    if (renderPdf) {
      console.log("Rendering Chromium PDF");
      await page.pdf({
        path: pdfPath,
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false
      });

      pdf = {
        attempted: true,
        ok: true,
        path: pdfPath,
        pageCount: await pdfPageCount(pdfPath)
      };
    } else {
      await fs.rm(pdfPath, { force: true });
    }

    const metrics = {
      url,
      page: pageName,
      media,
      viewport: {
        width,
        height
      },
      javascriptDelay,
      screenshot,
      pdf
    };

    await fs.writeFile(metricsPath, `${JSON.stringify(metrics, null, 2)}\n`);

    console.log(`Screenshot: ${screenshotPath}`);
    console.log(`Metrics: ${metricsPath}`);
    if (pdf.attempted) {
      console.log(`PDF: ${pdf.path} (${pdf.pageCount} pages)`);
    }
    console.log(JSON.stringify(metrics, null, 2));
  } finally {
    if (browser) {
      await browser.close();
    }
    await cleanup();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
