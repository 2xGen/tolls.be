export const i18n = {
  defaultLocale: "en",
  locales: ["en", "nl", "fr", "de", "pl", "es", "cs"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  fr: "Français",
  de: "Deutsch",
  pl: "Polski",
  es: "Español",
  cs: "Čeština",
};

export function isLocale(value: string): value is Locale {
  return (i18n.locales as readonly string[]).includes(value);
}

/** Open Graph locale codes (used for og:locale metadata). */
export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  nl: "nl_BE",
  fr: "fr_BE",
  de: "de_BE",
  pl: "pl_PL",
  es: "es_ES",
  cs: "cs_CZ",
};
