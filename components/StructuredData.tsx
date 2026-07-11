import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

export default function StructuredData({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const pageUrl = `${siteConfig.url}/${locale}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: dict.footer.description,
      email: siteConfig.contactEmail,
      areaServed: "BE",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: locale,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: dict.meta.title,
      description: dict.meta.description,
      inLanguage: locale,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: dict.breadcrumb.home,
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: dict.breadcrumb.current,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: dict.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
