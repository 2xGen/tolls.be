"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { i18n, localeNames, type Locale } from "@/lib/i18n/config";
import { GlobeIcon, ChevronDownIcon } from "./icons";

function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  // segments[0] is "" because pathname starts with "/"
  if (segments.length > 1 && i18n.locales.includes(segments[1] as Locale)) {
    segments[1] = target;
  } else {
    segments.splice(1, 0, target);
  }
  return segments.join("/") || `/${target}`;
}

export default function LanguageSelector({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname() || `/${current}`;
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
                href={swapLocale(pathname, locale)}
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
