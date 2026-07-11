import type { Locale } from "./config";

export type LegalPageKey = "privacy";

export const legalSlugs: Record<Locale, Record<LegalPageKey, string>> = {
  en: { privacy: "privacy-policy" },
  nl: { privacy: "privacybeleid" },
  fr: { privacy: "politique-de-confidentialite" },
  de: { privacy: "datenschutz" },
  pl: { privacy: "polityka-prywatnosci" },
  es: { privacy: "politica-de-privacidad" },
  cs: { privacy: "ochrana-osobnich-udaju" },
};

export function getLegalSlug(locale: Locale, key: LegalPageKey): string {
  return legalSlugs[locale][key];
}

export function getLegalKeyBySlug(
  locale: Locale,
  slug: string,
): LegalPageKey | null {
  const entries = legalSlugs[locale];
  const match = (Object.keys(entries) as LegalPageKey[]).find(
    (key) => entries[key] === slug,
  );
  return match ?? null;
}

export function getPrivacyPath(locale: Locale): string {
  return `/${locale}/${getLegalSlug(locale, "privacy")}`;
}
