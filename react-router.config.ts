import type { Config } from "@react-router/dev/config";
import { loadEnv } from "vite";

Object.assign(process.env, loadEnv(process.env.NODE_ENV!, process.cwd()));

export default {
  ssr: false,
  // Generate static HTML per public route so crawlers and link previews see
  // page-specific content. /browse is a template placeholder and is excluded.
  prerender: [
    "/",
    "/about",
    "/services",
    "/products",
    "/learning",
    "/impact",
    "/bootcamp",
  ],
} satisfies Config;
