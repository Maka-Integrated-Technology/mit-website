import type { MetaDescriptor } from "react-router";

export const SITE_NAME = "Maka Integrated Technology Limited";

export const DEFAULT_DESCRIPTION =
  "Maka Integrated Technology Limited is a global technology company delivering digital solutions, product development, technology education, and talent growth.";

const DEFAULT_OG_IMAGE = "/og-logo.png";

// Set VITE_SITE_URL (e.g. https://example.com) to emit absolute canonical and
// Open Graph URLs. Without it, those tags are skipped rather than guessed.
const SITE_URL = import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "");

function absoluteUrl(path: string) {
  return SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : undefined;
}

export function organizationJsonLd() {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    ...(url && { url, logo: absoluteUrl("/maka-logo.png") }),
    email: "info@makatechlimited.com",
    description: DEFAULT_DESCRIPTION,
  };
}

type BuildMetaOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>;
};

/**
 * React Router only renders the meta of the deepest matching route, so every
 * page must return the complete set of tags.
 */
export function buildMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  jsonLd,
}: BuildMetaOptions): MetaDescriptor[] {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image) ?? image;

  return [
    { title },
    { name: "description", content: description },
    ...(noIndex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ...(url && !noIndex
      ? [
          { tagName: "link", rel: "canonical", href: url },
          { property: "og:url", content: url },
        ]
      : []),
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    ...(jsonLd ? [{ "script:ld+json": jsonLd }] : []),
  ];
}
