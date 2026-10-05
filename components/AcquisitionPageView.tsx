import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { AcquisitionPageContent } from "@/lib/i18n/acquisition-types";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { getBelgiumVignetteAcquisitionUrl } from "@/lib/sister-sites";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageStructuredData from "@/components/PageStructuredData";
import { CheckIcon } from "@/components/icons";

export default function AcquisitionPageView({
  dict,
  locale,
  content,
  pageUrl,
}: {
  dict: Dictionary;
  locale: Locale;
  content: AcquisitionPageContent;
  pageUrl: string;
}) {
  const pathname = pageUrl.replace(siteConfig.url, "") || `/${locale}`;
  const contactEmail = siteConfig.contactEmail;

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

      <Header dict={dict} locale={locale} pathname={pathname} />

      <div className="border-b border-line bg-mist">
        <nav aria-label="Breadcrumb" className="container-gov py-2.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-navy hover:underline"
              >
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
                          <span className="text-base text-charcoal">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="mt-6 overflow-x-auto rounded-gov border border-line">
                      <table className="w-full min-w-[320px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="bg-navy text-white">
                            <th scope="col" className="px-4 py-3 font-semibold">
                              {section.table.headers[0]}
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3 text-right font-semibold"
                            >
                              {section.table.headers[1]}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr
                              key={row.query}
                              className="border-t border-line bg-white"
                            >
                              <th
                                scope="row"
                                className="px-4 py-3 font-medium text-navy"
                              >
                                {row.query}
                              </th>
                              <td className="px-4 py-3 text-right tabular-nums text-charcoal">
                                {row.position}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.externalLink && (
                    <p className="mt-4">
                      <a
                        href={getBelgiumVignetteAcquisitionUrl(locale)}
                        className="font-semibold text-navy underline underline-offset-4 hover:text-accent"
                        rel="noopener noreferrer"
                      >
                        {section.externalLink.label}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-gov border border-line border-l-4 border-l-accent bg-mist p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                {content.closingTitle}
              </h2>
              {content.closingText.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-base leading-relaxed text-charcoal"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-gov border border-line border-l-4 border-l-navy bg-mist p-6">
              <h2 className="text-lg font-bold text-navy">
                {content.contactTitle}
              </h2>
              <p className="mt-2 text-base text-charcoal">
                {content.contactText}{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-navy underline"
                >
                  {content.contactEmailLabel}
                </a>
                .
              </p>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-charcoal-light">
              {content.disclaimer}
            </p>
          </div>
        </section>
      </main>

      <Footer dict={dict} locale={locale} pathname={pathname} />
    </>
  );
}
