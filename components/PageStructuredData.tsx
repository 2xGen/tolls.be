import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

export default function PageStructuredData({
  locale,
  url,
  title,
  description,
  breadcrumb,
  faq,
}: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
  breadcrumb: { name: string; item: string }[];
  faq: { question: string; answer: string }[];
}) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    },
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
