import type { Locale } from "./config";

export type AcquisitionPageKey = "acquisition";

/** Same ASCII slug in every locale — matches BelgiumVignette.be /{lang}/acquisition. */
export const acquisitionSlugs: Record<Locale, Record<AcquisitionPageKey, string>> =
  {
    en: { acquisition: "acquisition" },
    nl: { acquisition: "acquisition" },
    fr: { acquisition: "acquisition" },
    de: { acquisition: "acquisition" },
    pl: { acquisition: "acquisition" },
    es: { acquisition: "acquisition" },
    cs: { acquisition: "acquisition" },
  };

export function getAcquisitionSlug(
  locale: Locale,
  key: AcquisitionPageKey = "acquisition",
): string {
  return acquisitionSlugs[locale][key];
}

export function getAcquisitionKeyBySlug(
  locale: Locale,
  slug: string,
): AcquisitionPageKey | null {
  const entries = acquisitionSlugs[locale];
  const match = (Object.keys(entries) as AcquisitionPageKey[]).find(
    (key) => entries[key] === slug,
  );
  return match ?? null;
}

export function getAcquisitionPath(locale: Locale): string {
  return `/${locale}/${getAcquisitionSlug(locale)}`;
}
