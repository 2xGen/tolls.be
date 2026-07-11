import type { Locale } from "./config";

/**
 * Keyword-targeted landing pages that live under /[lang]/<slug>.
 * The key is a stable, language-neutral identifier used in code; the public
 * URL slug is localised per language in `pageSlugs` below (single source of
 * truth for slugs).
 */
export const pageKeys = [
  "belgium-vignette",
  "belgium-vignette-price",
  "belgium-vignette-foreign-cars",
  "buy-belgium-vignette",
] as const;

export type PageKey = (typeof pageKeys)[number];

/**
 * Localised, SEO-friendly slugs per language. ASCII only (no diacritics or
 * apostrophes) so the URLs stay clean and portable.
 */
export const pageSlugs: Record<Locale, Record<PageKey, string>> = {
  en: {
    "belgium-vignette": "belgium-vignette",
    "belgium-vignette-price": "belgium-vignette-price",
    "belgium-vignette-foreign-cars": "belgium-vignette-foreign-cars",
    "buy-belgium-vignette": "buy-belgium-vignette",
  },
  nl: {
    "belgium-vignette": "belgisch-vignet",
    "belgium-vignette-price": "belgisch-vignet-prijs",
    "belgium-vignette-foreign-cars": "belgisch-vignet-buitenlandse-autos",
    "buy-belgium-vignette": "belgisch-vignet-kopen",
  },
  fr: {
    "belgium-vignette": "vignette-belgique",
    "belgium-vignette-price": "vignette-belgique-prix",
    "belgium-vignette-foreign-cars": "vignette-belgique-vehicules-etrangers",
    "buy-belgium-vignette": "acheter-vignette-belgique",
  },
  de: {
    "belgium-vignette": "belgien-vignette",
    "belgium-vignette-price": "belgien-vignette-preis",
    "belgium-vignette-foreign-cars": "belgien-vignette-auslaendische-fahrzeuge",
    "buy-belgium-vignette": "belgien-vignette-kaufen",
  },
  pl: {
    "belgium-vignette": "belgijska-winieta",
    "belgium-vignette-price": "belgijska-winieta-cena",
    "belgium-vignette-foreign-cars": "belgijska-winieta-pojazdy-zagraniczne",
    "buy-belgium-vignette": "kup-belgijska-winiete",
  },
  es: {
    "belgium-vignette": "vineta-belga",
    "belgium-vignette-price": "vineta-belga-precio",
    "belgium-vignette-foreign-cars": "vineta-belga-vehiculos-extranjeros",
    "buy-belgium-vignette": "comprar-vineta-belga",
  },
  cs: {
    "belgium-vignette": "belgicka-dalnicni-znamka",
    "belgium-vignette-price": "belgicka-dalnicni-znamka-cena",
    "belgium-vignette-foreign-cars": "belgicka-dalnicni-znamka-zahranicni-vozidla",
    "buy-belgium-vignette": "koupit-belgickou-dalnicni-znamku",
  },
};

export function getSlug(locale: Locale, key: PageKey): string {
  return pageSlugs[locale][key];
}

export function getPageKeyBySlug(locale: Locale, slug: string): PageKey | null {
  const entries = pageSlugs[locale];
  const match = (Object.keys(entries) as PageKey[]).find(
    (key) => entries[key] === slug,
  );
  return match ?? null;
}
