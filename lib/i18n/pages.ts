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
  "belgium-vignette-netherlands",
  "belgium-vignette-germany",
  "belgium-vignette-france",
  "liefkenshoek-tunnel",
  "buy-belgium-vignette",
] as const;

export type PageKey = (typeof pageKeys)[number];

/** Cross-border driver guides — high-intent geo pages on Tolls.be. */
export const crossBorderPageKeys = [
  "belgium-vignette-netherlands",
  "belgium-vignette-germany",
  "belgium-vignette-france",
] as const;

export type CrossBorderPageKey = (typeof crossBorderPageKeys)[number];

/**
 * Localised, SEO-friendly slugs per language. ASCII only (no diacritics or
 * apostrophes) so the URLs stay clean and portable.
 */
export const pageSlugs: Record<Locale, Record<PageKey, string>> = {
  en: {
    "belgium-vignette": "belgium-vignette",
    "belgium-vignette-price": "belgium-vignette-price",
    "belgium-vignette-foreign-cars": "belgium-vignette-foreign-cars",
    "belgium-vignette-netherlands":
      "belgium-vignette-dutch-drivers",
    "belgium-vignette-germany":
      "belgium-vignette-german-drivers",
    "belgium-vignette-france":
      "belgium-vignette-french-drivers",
    "liefkenshoek-tunnel": "liefkenshoek-tunnel-toll",
    "buy-belgium-vignette": "buy-belgium-vignette",
  },
  nl: {
    "belgium-vignette": "belgisch-vignet",
    "belgium-vignette-price": "belgisch-vignet-prijs",
    "belgium-vignette-foreign-cars": "belgisch-vignet-buitenlandse-autos",
    "belgium-vignette-netherlands":
      "belgisch-vignet-nederlanders",
    "belgium-vignette-germany":
      "belgisch-vignet-duitsers",
    "belgium-vignette-france":
      "belgisch-vignet-franstaligen",
    "liefkenshoek-tunnel": "liefkenshoektunnel-tol",
    "buy-belgium-vignette": "belgisch-vignet-kopen",
  },
  fr: {
    "belgium-vignette": "vignette-belgique",
    "belgium-vignette-price": "vignette-belgique-prix",
    "belgium-vignette-foreign-cars": "vignette-belgique-vehicules-etrangers",
    "belgium-vignette-netherlands":
      "vignette-belgique-neerlandais",
    "belgium-vignette-germany":
      "vignette-belgique-allemands",
    "belgium-vignette-france":
      "vignette-belgique-francais",
    "liefkenshoek-tunnel": "tunnel-liefkenshoek-peage",
    "buy-belgium-vignette": "acheter-vignette-belgique",
  },
  de: {
    "belgium-vignette": "belgien-vignette",
    "belgium-vignette-price": "belgien-vignette-preis",
    "belgium-vignette-foreign-cars": "belgien-vignette-auslaendische-fahrzeuge",
    "belgium-vignette-netherlands":
      "belgien-vignette-niederlaender",
    "belgium-vignette-germany":
      "belgien-vignette-deutsche-autofahrer",
    "belgium-vignette-france":
      "belgien-vignette-franzosen",
    "liefkenshoek-tunnel": "liefkenshoek-tunnel-maut",
    "buy-belgium-vignette": "belgien-vignette-kaufen",
  },
  pl: {
    "belgium-vignette": "belgijska-winieta",
    "belgium-vignette-price": "belgijska-winieta-cena",
    "belgium-vignette-foreign-cars": "belgijska-winieta-pojazdy-zagraniczne",
    "belgium-vignette-netherlands":
      "belgijska-winieta-kierowcy-holenderscy",
    "belgium-vignette-germany":
      "belgijska-winieta-kierowcy-niemieccy",
    "belgium-vignette-france":
      "belgijska-winieta-kierowcy-francuscy",
    "liefkenshoek-tunnel": "tunel-liefkenshoek-oplaty",
    "buy-belgium-vignette": "kup-belgijska-winiete",
  },
  es: {
    "belgium-vignette": "vineta-belga",
    "belgium-vignette-price": "vineta-belga-precio",
    "belgium-vignette-foreign-cars": "vineta-belga-vehiculos-extranjeros",
    "belgium-vignette-netherlands":
      "vineta-belga-conductores-holandeses",
    "belgium-vignette-germany":
      "vineta-belga-conductores-alemanes",
    "belgium-vignette-france":
      "vineta-belga-conductores-franceses",
    "liefkenshoek-tunnel": "tunel-liefkenshoek-peaje",
    "buy-belgium-vignette": "comprar-vineta-belga",
  },
  cs: {
    "belgium-vignette": "belgicka-dalnicni-znamka",
    "belgium-vignette-price": "belgicka-dalnicni-znamka-cena",
    "belgium-vignette-foreign-cars":
      "belgicka-dalnicni-znamka-zahranicni-vozidla",
    "belgium-vignette-netherlands":
      "belgicka-znamka-pro-nizozemske-ridice",
    "belgium-vignette-germany":
      "belgicka-znamka-pro-nemecke-ridice",
    "belgium-vignette-france":
      "belgicka-znamka-pro-francouzske-ridice",
    "liefkenshoek-tunnel": "tunel-liefkenshoek-mytne",
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
