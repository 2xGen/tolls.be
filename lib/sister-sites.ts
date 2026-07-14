import { i18n, type Locale } from "@/lib/i18n/config";

/** Sister site — consumer news & guides (not competing evergreen reference content). */
export const belgiumVignetteSite = {
  name: "BelgiumVignette.be",
  baseUrl: "https://belgiumvignette.be",
  /** Localised news listing slug per language. */
  newsSlug: {
    nl: "nieuws-updates",
    fr: "actualites",
    en: "news-updates",
    de: "news-updates",
    pl: "aktualnosci",
    es: "noticias",
    cs: "novinky",
  } satisfies Record<Locale, string>,
  homeSlug: {
    nl: "",
    fr: "",
    en: "",
    de: "",
    pl: "",
    es: "",
    cs: "",
  } satisfies Record<Locale, string>,
} as const;

export function getBelgiumVignetteNewsUrl(locale: Locale): string {
  const slug = belgiumVignetteSite.newsSlug[locale];
  return `${belgiumVignetteSite.baseUrl}/${locale}/${slug}`;
}

export function getBelgiumVignetteHomeUrl(locale: Locale): string {
  return `${belgiumVignetteSite.baseUrl}/${locale}`;
}

/** Locale-aware sister-site URL with fallback to Dutch (primary BV locale). */
export function getSisterNewsUrl(locale: Locale): string {
  if (i18n.locales.includes(locale)) {
    return getBelgiumVignetteNewsUrl(locale);
  }
  return getBelgiumVignetteNewsUrl("nl");
}
