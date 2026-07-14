"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { i18n, localeNames, type Locale } from "@/lib/i18n/config";
import { swapLocalePath } from "@/lib/i18n/swap-locale-path";
import { GlobeIcon, ChevronDownIcon } from "./icons";

export default function LanguageSelector({
  current,
  label,
  pathname: pathnameProp,
}: {
  current: Locale;
  label: string;
  /** Current URL path from the server, e.g. /pl/tunel-liefkenshoek-oplaty */
  pathname?: string;
}) {
  const pathnameFromRouter = usePathname();
  const pathname =
    pathnameProp ?? pathnameFromRouter ?? `/${current}`;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-gov border border-line bg-white px-3 py-2 text-sm font-semibold text-navy hover:bg-mist"
      >
        <GlobeIcon className="h-4 w-4" />
        <span>{localeNames[current]}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 z-50 mt-1 min-w-[11.5rem] w-max rounded-gov border border-line bg-white py-1 shadow-lg"
        >
          {i18n.locales.map((locale) => (
            <li key={locale} role="none">
              <Link
                role="menuitem"
                href={swapLocalePath(pathname, locale)}
                hrefLang={locale}
                onClick={() => setOpen(false)}
                aria-current={locale === current ? "true" : undefined}
                className={`block whitespace-nowrap px-4 py-2 text-sm hover:bg-mist ${
                  locale === current
                    ? "font-semibold text-navy"
                    : "text-charcoal"
                }`}
              >
                {localeNames[locale]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
