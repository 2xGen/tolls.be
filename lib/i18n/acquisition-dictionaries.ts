import "server-only";
import type { Locale } from "./config";
import type { AcquisitionDictionary } from "./acquisition-types";

const acquisitionDictionaries: Record<
  Locale,
  () => Promise<AcquisitionDictionary>
> = {
  en: () => import("@/dictionaries/acquisition/en").then((m) => m.default),
  nl: () => import("@/dictionaries/acquisition/nl").then((m) => m.default),
  fr: () => import("@/dictionaries/acquisition/fr").then((m) => m.default),
  de: () => import("@/dictionaries/acquisition/de").then((m) => m.default),
  pl: () => import("@/dictionaries/acquisition/pl").then((m) => m.default),
  es: () => import("@/dictionaries/acquisition/es").then((m) => m.default),
  cs: () => import("@/dictionaries/acquisition/cs").then((m) => m.default),
};

export const getAcquisitionDictionary = async (
  locale: Locale,
): Promise<AcquisitionDictionary> => acquisitionDictionaries[locale]();
