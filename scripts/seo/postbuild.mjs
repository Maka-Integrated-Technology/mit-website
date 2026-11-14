#!/usr/bin/env node
/**
 * Post-build SEO step for the prerendered static build.
 *
 * - Copies the SPA fallback to 404.html so static hosts (e.g. `serve`) answer
 *   unknown URLs with a real 404 status while the client router renders the
 *   not-found page.
 * - Generates sitemap.xml from every prerendered page and points robots.txt
 *   at it. Both need VITE_SITE_URL; without it the sitemap is skipped.
 */
import {
  copyFileSync,
  existsSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { appendFileSync } from "node:fs";
import path from "node:path";
import { loadEnv } from "vite";

const buildDir = path.resolve("build", "client");
const env = loadEnv("production", process.cwd());
const siteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? "")
  .trim()
  .replace(/\/+$/, "");

function findPages(dir, base = "") {
  const pages = [];
  for (const entry of readdirSync(dir)) {
    const abs = path.join(dir, entry);
    if (entry === "assets") continue;
    if (statSync(abs).isDirectory()) {
      pages.push(...findPages(abs, `${base}/${entry}`));
    } else if (entry === "index.html") {
      pages.push(base || "/");
    }
  }
  return pages;
}

const fallback = path.join(buildDir, "__spa-fallback.html");
if (existsSync(fallback)) {
  copyFileSync(fallback, path.join(buildDir, "404.html"));
  console.log("seo: wrote 404.html");
} else {
  console.warn("seo: __spa-fallback.html not found; 404.html not written");
}

if (!siteUrl) {
  console.warn(
    "seo: VITE_SITE_URL is not set; skipping sitemap.xml and robots.txt Sitemap line"
  );
  process.exit(0);
}

const pages = findPages(buildDir).sort();
const urls = pages
  .map(
    (page) => `  <url><loc>${siteUrl}${page === "/" ? "" : page}</loc></url>`
  )
  .join("\n");
writeFileSync(
  path.join(buildDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
appendFileSync(
  path.join(buildDir, "robots.txt"),
  `\nSitemap: ${siteUrl}/sitemap.xml\n`
);
console.log(`seo: wrote sitemap.xml (${pages.length} pages) and robots.txt`);
