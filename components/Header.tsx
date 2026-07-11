import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import LanguageSelector from "./LanguageSelector";

export default function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <header className="border-b border-line bg-white">
      {/* Belgian flag accent strip */}
      <div className="flex h-1 w-full" aria-hidden="true">
        <div className="w-1/3 bg-navy" />
        <div className="w-1/3 bg-[#FFD200]" />
        <div className="w-1/3 bg-accent" />
      </div>

      <div className="container-gov flex flex-wrap items-center justify-between gap-4 py-4">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3"
          aria-label={`Tolls.be — ${dict.header.subtitle}`}
        >
          <span
            className="h-9 w-2 rounded-sm bg-accent"
            aria-hidden="true"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-navy">
              Tolls<span className="text-accent">.be</span>
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wide text-charcoal-light">
              {dict.header.subtitle}
            </span>
          </span>
        </Link>

        <div className="ml-auto shrink-0">
          <LanguageSelector current={locale} label={dict.header.languageLabel} />
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="border-t border-line bg-navy text-white"
      >
        <div className="container-gov">
          <ul className="-mx-2 flex items-center gap-1 overflow-x-auto">
            {dict.header.nav.map((item) => (
              <li key={item.label} className="shrink-0">
                <a
                  href={
                    item.href.startsWith("#")
                      ? `/${locale}${item.href}`
                      : item.href
                  }
                  className="block whitespace-nowrap px-4 py-3 text-sm font-semibold text-white/90 hover:bg-navy-700 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
