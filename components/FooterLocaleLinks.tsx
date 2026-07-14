"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, localeNames, type Locale } from "@/lib/i18n/config";
import { swapLocalePath } from "@/lib/i18n/swap-locale-path";

export default function FooterLocaleLinks({
  current,
  pathname: pathnameProp,
}: {
  current: Locale;
  pathname?: string;
}) {
  const pathnameFromRouter = usePathname();
  const pathname =
    pathnameProp ?? pathnameFromRouter ?? `/${current}`;

  return (
    <ul className="mt-4 space-y-2">
      {i18n.locales.map((locale) => (
        <li key={locale}>
          <Link
            href={swapLocalePath(pathname, locale)}
            hrefLang={locale}
            aria-current={locale === current ? "true" : undefined}
            className={`text-sm underline-offset-4 hover:text-white hover:underline ${
              locale === current
                ? "font-semibold text-white"
                : "text-white/90"
            }`}
          >
            {localeNames[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
