import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getPagesDictionary } from "@/lib/i18n/pages-dictionaries";
import { pageKeys, getSlug } from "@/lib/i18n/pages";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoBox from "@/components/InfoBox";
import PricingTable from "@/components/PricingTable";
import RequirementCards from "@/components/RequirementCards";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { CameraIcon, ArrowRightIcon } from "@/components/icons";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const [dict, pagesDict] = await Promise.all([
    getDictionary(lang),
    getPagesDictionary(lang),
  ]);
  const { what, enforcement } = dict.sections;

  const topicLinks = pageKeys.map((key) => ({
    label: pagesDict[key].navLabel,
    href: `/${lang}/${getSlug(lang, key)}`,
  }));

  return (
    <>
      <StructuredData dict={dict} locale={lang} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-gov focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.header.skipToContent}
      </a>

      <Header dict={dict} locale={lang} />

      {/* Breadcrumb */}
      <div className="border-b border-line bg-mist">
        <nav aria-label="Breadcrumb" className="container-gov py-2.5">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href={`/${lang}`} className="hover:text-navy hover:underline">
                {dict.breadcrumb.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-navy" aria-current="page">
              {dict.breadcrumb.current}
            </li>
          </ol>
        </nav>
      </div>

      <main id="main">
        <Hero dict={dict} />
        <InfoBox dict={dict} />

        {/* Section 1 — What is the Belgium vignette? */}
        <section id="what" aria-labelledby="what-title" className="section bg-white">
          <div className="container-gov max-w-4xl">
            <h2 id="what-title" className="section-title">
              {what.title}
            </h2>
            <div className="prose-gov mt-4 space-y-4">
              {what.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Prices */}
        <PricingTable dict={dict} />

        {/* Section 3 — Who needs a vignette? */}
        <RequirementCards dict={dict} />

        {/* Section 4 — Enforcement */}
        <section
          aria-labelledby="enforcement-title"
          className="section bg-white"
        >
          <div className="container-gov">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-gov bg-navy text-white sm:flex"
              >
                <CameraIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 id="enforcement-title" className="section-title">
                  {enforcement.title}
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-relaxed text-charcoal">
                  {enforcement.intro}
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {enforcement.points.map((point) => (
                <li
                  key={point.title}
                  className="rounded-gov border border-line bg-mist p-5"
                >
                  <h3 className="text-base font-bold text-navy">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5 — Timeline */}
        <Timeline dict={dict} />

        <FAQ dict={dict} />

        {/* Sources & verification */}
        <section
          aria-labelledby="sources-title"
          className="section bg-white"
        >
          <div className="container-gov max-w-4xl">
            <div className="rounded-gov border border-line border-l-4 border-l-navy bg-mist p-6 sm:p-8">
              <h2
                id="sources-title"
                className="text-xl font-bold text-navy sm:text-2xl"
              >
                {dict.sources.title}
              </h2>
              <div className="mt-3 space-y-3">
                {dict.sources.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-charcoal">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Belgium vignette topics — internal linking to keyword pages */}
        <section aria-labelledby="topics-title" className="section bg-mist">
          <div className="container-gov">
            <h2 id="topics-title" className="section-title">
              {pagesDict["belgium-vignette"].relatedTitle}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {topicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-full items-center justify-between gap-3 rounded-gov border border-line bg-white p-5 font-semibold text-navy hover:border-navy"
                  >
                    <span>{link.label}</span>
                    <ArrowRightIcon className="h-5 w-5 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Newsletter dict={dict} />
      </main>

      <Footer
        dict={dict}
        locale={lang}
        topicLinks={topicLinks}
        topicTitle={dict.header.nav[0]?.label}
      />
    </>
  );
}
