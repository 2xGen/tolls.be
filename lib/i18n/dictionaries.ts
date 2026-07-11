import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

/**
 * Per-locale dictionary loaders.
 *
 * Each locale (en / nl / fr / de) has its own fully translated dictionary in
 * /dictionaries. To adjust wording for a language, edit that single file —
 * no other code needs to change, and TypeScript enforces a matching shape.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en").then((m) => m.default),
  nl: () => import("@/dictionaries/nl").then((m) => m.default),
  fr: () => import("@/dictionaries/fr").then((m) => m.default),
  de: () => import("@/dictionaries/de").then((m) => m.default),
  pl: () => import("@/dictionaries/pl").then((m) => m.default),
  es: () => import("@/dictionaries/es").then((m) => m.default),
  cs: () => import("@/dictionaries/cs").then((m) => m.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
