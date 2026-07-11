import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/lib/i18n/config";

function getLocale(request: NextRequest): string {
  // Lightweight Accept-Language negotiation (no extra dependencies).
  const header = request.headers.get("accept-language");
  if (header) {
    const accepted = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of accepted) {
      const base = tag.split("-")[0];
      const match = i18n.locales.find((locale) => locale === base);
      if (match) return match;
    }
  }
  return i18n.defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals, static files, generated icons and SEO metadata
  // routes so they are not redirected into a locale path.
  matcher: [
    "/((?!_next|api|.*\\..*|robots.txt|sitemap.xml|icon|apple-icon|opengraph-image|manifest.webmanifest).*)",
  ],
};
