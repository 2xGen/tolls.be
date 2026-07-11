import "server-only";
import type { Locale } from "./config";
import type { LegalDictionary } from "./legal-types";

const legalDictionaries: Record<Locale, () => Promise<LegalDictionary>> = {
  en: () => import("@/dictionaries/legal/en").then((m) => m.default),
  nl: () => import("@/dictionaries/legal/nl").then((m) => m.default),
  fr: () => import("@/dictionaries/legal/fr").then((m) => m.default),
  de: () => import("@/dictionaries/legal/de").then((m) => m.default),
  pl: () => import("@/dictionaries/legal/pl").then((m) => m.default),
  es: () => import("@/dictionaries/legal/es").then((m) => m.default),
  cs: () => import("@/dictionaries/legal/cs").then((m) => m.default),
};

export const getLegalDictionary = async (
  locale: Locale,
): Promise<LegalDictionary> => legalDictionaries[locale]();
