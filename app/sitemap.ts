import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n/config";
import { pageKeys, getSlug } from "@/lib/i18n/pages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Home page per locale.
  for (const locale of i18n.locales) {
    entries.push({
      url: `${siteConfig.url}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: locale === i18n.defaultLocale ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          i18n.locales.map((l) => [l, `${siteConfig.url}/${l}`]),
        ),
      },
    });
  }

  // Keyword landing pages per locale, with localised hreflang alternates.
  for (const key of pageKeys) {
    for (const locale of i18n.locales) {
      entries.push({
        url: `${siteConfig.url}/${locale}/${getSlug(locale, key)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            i18n.locales.map((l) => [
              l,
              `${siteConfig.url}/${l}/${getSlug(l, key)}`,
            ]),
          ),
        },
      });
    }
  }

  return entries;
}
