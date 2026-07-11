/**
 * Central site configuration.
 * Update NEXT_PUBLIC_SITE_URL in the environment when deploying to a custom domain.
 */
export const siteConfig = {
  name: "Tolls.be",
  domain: "tolls.be",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://tolls.be",
  tagline: "Belgium road toll information",
  contactEmail: "info@tolls.be",
} as const;
