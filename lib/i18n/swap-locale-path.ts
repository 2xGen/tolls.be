import { i18n, type Locale } from "./config";
import { getPageKeyBySlug, getSlug } from "./pages";
import { getLegalKeyBySlug, getLegalSlug } from "./legal";

/**
 * Build the equivalent URL in another locale, mapping localised slugs
 * (e.g. /es/vineta-belga → /nl/belgisch-vignet).
 */
export function swapLocalePath(pathname: string, target: Locale): string {
  const normalized = pathname.split("?")[0]?.split("#")[0] ?? pathname;
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0 || !i18n.locales.includes(segments[0] as Locale)) {
    return `/${target}`;
  }

  const currentLocale = segments[0] as Locale;
  const slug = segments[1]?.replace(/\/$/, "");

  if (!slug) {
    return `/${target}`;
  }

  const legalKey = getLegalKeyBySlug(currentLocale, slug);
  if (legalKey) {
    return `/${target}/${getLegalSlug(target, legalKey)}`;
  }

  const pageKey = getPageKeyBySlug(currentLocale, slug);
  if (pageKey) {
    return `/${target}/${getSlug(target, pageKey)}`;
  }

  // Unknown slug — fall back to homepage rather than a broken URL.
  return `/${target}`;
}
