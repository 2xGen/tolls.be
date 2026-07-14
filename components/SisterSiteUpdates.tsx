import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import {
  belgiumVignetteSite,
  getSisterNewsUrl,
} from "@/lib/sister-sites";
import { ArrowRightIcon } from "./icons";

export default function SisterSiteUpdates({
  dict,
  locale,
  embedded = false,
}: {
  dict: Dictionary;
  locale: Locale;
  /** Render only the inner card (e.g. stacked under Sources on the homepage). */
  embedded?: boolean;
}) {
  const newsUrl = getSisterNewsUrl(locale);

  const card = (
    <div className="rounded-gov border border-line border-l-4 border-l-accent bg-mist p-6 sm:p-8">
      <h2 id="updates-title" className="text-xl font-bold text-navy sm:text-2xl">
        {dict.sisterSite.updatesTitle}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-charcoal">
        {dict.sisterSite.updatesText}
      </p>
      <p className="mt-4">
        <a
          href={newsUrl}
          className="inline-flex items-center gap-2 font-semibold text-navy underline underline-offset-4 hover:text-accent"
          rel="noopener noreferrer"
        >
          {dict.sisterSite.updatesLink.replace(
            "{site}",
            belgiumVignetteSite.name,
          )}
          <ArrowRightIcon className="h-5 w-5 shrink-0" />
        </a>
      </p>
      <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
        {dict.sisterSite.updatesNote}
      </p>
    </div>
  );

  if (embedded) return card;

  return (
    <section id="updates" aria-labelledby="updates-title" className="section bg-white">
      <div className="container-gov max-w-4xl">{card}</div>
    </section>
  );
}

/** Compact inline link for subpages and footer contexts. */
export function SisterSiteNewsLink({
  dict,
  locale,
  className = "",
}: {
  dict: Dictionary;
  locale: Locale;
  className?: string;
}) {
  const newsUrl = getSisterNewsUrl(locale);

  return (
    <a
      href={newsUrl}
      className={`underline-offset-4 hover:underline ${className}`}
      rel="noopener noreferrer"
    >
      {dict.sisterSite.newsLabel}
    </a>
  );
}
