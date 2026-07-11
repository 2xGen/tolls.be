import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { i18n, isLocale, ogLocales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getPagesDictionary } from "@/lib/i18n/pages-dictionaries";
import { pageKeys, pageSlugs, getSlug, getPageKeyBySlug } from "@/lib/i18n/pages";
import {
  legalSlugs,
  getLegalKeyBySlug,
  getLegalSlug,
  type LegalPageKey,
} from "@/lib/i18n/legal";
import { getLegalDictionary } from "@/lib/i18n/legal-dictionaries";
import { siteConfig } from "@/lib/site";
import { getSharedOgMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import LegalPageView from "@/components/LegalPageView";
import InfoBox from "@/components/InfoBox";
import Timeline from "@/components/Timeline";
import PricingTable from "@/components/PricingTable";
import RequirementCards from "@/components/RequirementCards";
import PageStructuredData from "@/components/PageStructuredData";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from "@/components/icons";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of i18n.locales) {
    for (const key of pageKeys) {
      params.push({ lang, slug: pageSlugs[lang][key] });
    }
    params.push({ lang, slug: legalSlugs[lang].privacy });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const sharedOg = getSharedOgMetadata();
  const legalKey = getLegalKeyBySlug(lang, slug);
  if (legalKey) {
    const legalDict = await getLegalDictionary(lang);
    const content = legalDict[legalKey];
    const path = `/${lang}/${slug}`;
    const languages = Object.fromEntries(
      i18n.locales.map((l) => [l, `/${l}/${getLegalSlug(l, legalKey)}`]),
    );
    return {
      title: content.meta.title,
      description: content.meta.description,
      alternates: {
        canonical: path,
        languages: {
          ...languages,
          "x-default": `/en/${getLegalSlug("en", legalKey)}`,
        },
      },
      openGraph: {
        type: "website",
        siteName: siteConfig.name,
        locale: ogLocales[lang],
        url: path,
        title: content.meta.title,
        description: content.meta.description,
        ...sharedOg.openGraph,
      },
      twitter: {
        title: content.meta.title,
        description: content.meta.description,
        ...sharedOg.twitter,
      },
      robots: { index: true, follow: true },
    };
  }

  const key = getPageKeyBySlug(lang, slug);
  if (!key) return {};

  const pagesDict = await getPagesDictionary(lang);
  const content = pagesDict[key];
  const path = `/${lang}/${slug}`;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/${getSlug(l, key)}`]),
  );

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: path,
      languages: { ...languages, "x-default": `/en/${getSlug("en", key)}` },
    },
    openGraph: {
      type: "article",
      siteName: siteConfig.name,
      locale: ogLocales[lang],
      url: path,
      title: content.meta.title,
      description: content.meta.description,
      ...sharedOg.openGraph,
    },
    twitter: {
      title: content.meta.title,
      description: content.meta.description,
      ...sharedOg.twitter,
    },
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const legalKey = getLegalKeyBySlug(lang, slug);
  if (legalKey) {
    const [dict, legalDict] = await Promise.all([
      getDictionary(lang),
      getLegalDictionary(lang),
    ]);
    const pageUrl = `${siteConfig.url}/${lang}/${slug}`;
    return (
      <LegalPageView
        dict={dict}
        locale={lang}
        content={legalDict[legalKey]}
        pageUrl={pageUrl}
      />
    );
  }

  const key = getPageKeyBySlug(lang, slug);
  if (!key) notFound();

  const [dict, pagesDict] = await Promise.all([
    getDictionary(lang),
    getPagesDictionary(lang),
  ]);
  const content = pagesDict[key];
  const pageUrl = `${siteConfig.url}/${lang}/${slug}`;

  const topicLinks = pageKeys.map((k) => ({
    label: pagesDict[k].navLabel,
    href: `/${lang}/${getSlug(lang, k)}`,
  }));
  const relatedLinks = topicLinks.filter(
    (link) => link.href !== `/${lang}/${slug}`,
  );

  return (
    <>
      <PageStructuredData
        locale={lang}
        url={pageUrl}
        title={content.meta.title}
        description={content.meta.description}
        breadcrumb={[
          { name: dict.breadcrumb.home, item: `${siteConfig.url}/${lang}` },
          { name: content.breadcrumb, item: pageUrl },
        ]}
        faq={content.faq}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-gov focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.header.skipToContent}
      </a>

      <Header dict={dict} locale={lang} />

      <div className="border-b border-line bg-mist">
        <nav aria-label="Breadcrumb" className="container-gov py-2.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href={`/${lang}`} className="hover:text-navy hover:underline">
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
            <p className="mb-4 inline-block border-l-4 border-accent pl-3 text-sm font-semibold uppercase tracking-wide text-charcoal-light">
              {dict.hero.eyebrow}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              {content.h1}
            </h1>
            <div className="prose-gov mt-5 space-y-4">
              {content.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {key === "belgium-vignette" && <InfoBox dict={dict} />}
        {key === "belgium-vignette-price" && <PricingTable dict={dict} />}
        {key === "belgium-vignette-foreign-cars" && (
          <RequirementCards dict={dict} />
        )}

        <section className="section bg-white">
          <div className="container-gov max-w-4xl space-y-10">
            {content.blocks.map((block, i) => (
              <div key={i}>
                <h2 className="section-title">{block.heading}</h2>
                {block.paragraphs && (
                  <div className="prose-gov mt-3 space-y-3">
                    {block.paragraphs.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {block.bullets && (
                  <ul className="mt-4 space-y-3">
                    {block.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
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
        </section>

        {key === "belgium-vignette" && <Timeline dict={dict} />}

        <section aria-labelledby="page-faq-title" className="section bg-mist">
          <div className="container-gov max-w-4xl">
            <h2 id="page-faq-title" className="section-title">
              {dict.faq.title}
            </h2>
            <div className="mt-8 divide-y divide-line overflow-hidden rounded-gov border border-line bg-white">
              {content.faq.map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-navy marker:content-none hover:bg-mist [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-charcoal-light transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-base leading-relaxed text-charcoal">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="related-title" className="section bg-white">
          <div className="container-gov">
            <h2 id="related-title" className="section-title">
              {content.relatedTitle}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-3 rounded-gov border border-line bg-mist p-5 font-semibold text-navy hover:border-navy hover:bg-white"
                  >
                    <span>{link.label}</span>
                    <ArrowRightIcon className="h-5 w-5 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy">
          <div className="container-gov py-12 lg:py-14">
            <div className="rounded-gov border border-navy-600 bg-navy-900/40 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {content.cta.title}
              </h2>
              <p className="mt-2 max-w-2xl text-white/70">{content.cta.text}</p>
              <Link href={`/${lang}`} className="btn-secondary mt-6">
                {content.cta.button}
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Newsletter dict={dict} locale={lang} />
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
