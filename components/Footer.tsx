import Link from "next/link";
import type { Dictionary, NavItem } from "@/lib/i18n/types";
import { type Locale } from "@/lib/i18n/config";
import { getPrivacyPath } from "@/lib/i18n/legal";
import {
  getBelgiumVignetteHomeUrl,
  getSisterNewsUrl,
} from "@/lib/sister-sites";
import ManageCookiesButton from "@/components/cookies/ManageCookiesButton";
import FooterLocaleLinks from "@/components/FooterLocaleLinks";

export default function Footer({
  dict,
  locale,
  pathname,
  topicLinks,
  topicTitle,
}: {
  dict: Dictionary;
  locale: Locale;
  pathname?: string;
  topicLinks?: NavItem[];
  topicTitle?: string;
}) {
  const year = new Date().getFullYear();
  const hasTopics = Boolean(topicLinks && topicLinks.length > 0);

  return (
    <footer className="border-t-4 border-accent bg-navy text-white">
      <div
        className={`container-gov grid gap-10 py-12 md:grid-cols-2 ${
          hasTopics ? "lg:grid-cols-5" : "lg:grid-cols-4"
        }`}
      >
        <div>
          <p className="text-lg font-extrabold tracking-tight">
            Tolls<span className="text-accent">.be</span>
          </p>
          <p className="mt-1 text-sm text-white/70">{dict.header.subtitle}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {dict.footer.description}
          </p>
        </div>

        {hasTopics && (
          <nav aria-label={topicTitle}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white/60">
              {topicTitle}
            </h2>
            <ul className="mt-4 space-y-2">
              {topicLinks!.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 underline-offset-4 hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <nav aria-label={dict.footer.linksTitle}>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white/60">
            {dict.footer.linksTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            {dict.footer.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={
                    link.href === "#privacy" ? getPrivacyPath(locale) : link.href
                  }
                  className="text-sm text-white/90 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ManageCookiesButton label={dict.cookies.manageLabel} />
            </li>
          </ul>
        </nav>

        <nav aria-label={dict.sisterSite.footerTitle}>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white/60">
            {dict.sisterSite.footerTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={getBelgiumVignetteHomeUrl(locale)}
                className="text-sm text-white/90 underline-offset-4 hover:text-white hover:underline"
                rel="noopener noreferrer"
              >
                {dict.sisterSite.footerGuide}
              </a>
            </li>
            <li>
              <a
                href={getSisterNewsUrl(locale)}
                className="text-sm text-white/90 underline-offset-4 hover:text-white hover:underline"
                rel="noopener noreferrer"
              >
                {dict.sisterSite.newsLabel}
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label={dict.footer.languagesTitle}>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white/60">
            {dict.footer.languagesTitle}
          </h2>
          <FooterLocaleLinks current={locale} pathname={pathname} />
        </nav>
      </div>

      <div className="border-t border-navy-600">
        <div className="container-gov py-6">
          <p className="text-xs leading-relaxed text-white/60">
            <span className="font-semibold text-white/80">
              {dict.footer.disclaimerTitle}:
            </span>{" "}
            {dict.footer.disclaimer}
          </p>
          <p className="mt-4 text-xs text-white/60">
            &copy; {year} Tolls.be. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
