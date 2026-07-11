import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { LegalPageContent } from "@/lib/i18n/legal-types";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageStructuredData from "@/components/PageStructuredData";
import { CheckIcon } from "@/components/icons";

export default function LegalPageView({
  dict,
  locale,
  content,
  pageUrl,
}: {
  dict: Dictionary;
  locale: Locale;
  content: LegalPageContent;
  pageUrl: string;
}) {
  return (
    <>
      <PageStructuredData
        locale={locale}
        url={pageUrl}
        title={content.meta.title}
        description={content.meta.description}
        breadcrumb={[
          { name: dict.breadcrumb.home, item: `${siteConfig.url}/${locale}` },
          { name: content.breadcrumb, item: pageUrl },
        ]}
        faq={[]}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-gov focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.header.skipToContent}
      </a>

      <Header dict={dict} locale={locale} />

      <div className="border-b border-line bg-mist">
        <nav aria-label="Breadcrumb" className="container-gov py-2.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href={`/${locale}`} className="hover:text-navy hover:underline">
                {dict.breadcrumb.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-navy" aria-current="page">
              {content.breadcrumb}
            </li>
          </ol>
        </nav>
      </div>

      <main id="main">
        <section className="section bg-white">
          <div className="container-gov max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {content.h1}
            </h1>
            <p className="mt-3 text-sm text-charcoal-light">{content.updated}</p>
            <div className="prose-gov mt-6 space-y-4">
              {content.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              {content.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="section-title">{section.heading}</h2>
                  {section.paragraphs && (
                    <div className="prose-gov mt-3 space-y-3">
                      {section.paragraphs.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.bullets && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                            <CheckIcon className="h-4 w-4" />
                          </span>
                          <span className="text-base text-charcoal">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-gov border border-line border-l-4 border-l-navy bg-mist p-6">
              <h2 className="text-lg font-bold text-navy">{content.contactTitle}</h2>
              <p className="mt-2 text-base text-charcoal">
                {content.contactText}{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-semibold text-navy underline"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dict} locale={locale} />
    </>
  );
}
