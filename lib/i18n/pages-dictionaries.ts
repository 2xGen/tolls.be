import "server-only";
import type { Locale } from "./config";
import type { PagesDictionary } from "./pages-types";

/**
 * Per-locale content for the keyword landing pages. Each locale has its own
 * fully translated file in /dictionaries/pages, kept in sync by the shared
 * PagesDictionary type.
 */
const pagesDictionaries: Record<Locale, () => Promise<PagesDictionary>> = {
  en: () => import("@/dictionaries/pages/en").then((m) => m.default),
  nl: () => import("@/dictionaries/pages/nl").then((m) => m.default),
  fr: () => import("@/dictionaries/pages/fr").then((m) => m.default),
  de: () => import("@/dictionaries/pages/de").then((m) => m.default),
  pl: () => import("@/dictionaries/pages/pl").then((m) => m.default),
  es: () => import("@/dictionaries/pages/es").then((m) => m.default),
  cs: () => import("@/dictionaries/pages/cs").then((m) => m.default),
};

export const getPagesDictionary = async (
  locale: Locale,
): Promise<PagesDictionary> => pagesDictionaries[locale]();
