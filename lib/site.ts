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
  ogImage: {
    url:
      process.env.NEXT_PUBLIC_OG_IMAGE_URL ??
      "https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/sign/foto/belgium%20vignette%20tolls%20be.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjkxZGZkZC1hYTQ1LTQ3NTUtODZiMy1iZDBhY2QyMjlkMjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3RvL2JlbGdpdW0gdmlnbmV0dGUgdG9sbHMgYmUuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4Mzc3MjEyMSwiZXhwIjoyMjU2ODEyMTIxfQ.OP9UJ4Fz7SkwvXu4gU3duNfe3p0jtzQsuyCbgEk_vGU",
    width: 1200,
    height: 630,
    alt: "Belgium Vignette — Tolls.be",
  },
} as const;
