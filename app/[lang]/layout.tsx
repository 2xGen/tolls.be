import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { i18n, isLocale, ogLocales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);

  const path = `/${locale}`;
  const languageAlternates = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    keywords: [
      "Belgium vignette",
      "Belgium vignette 2027",
      "Belgian vignette",
      "Belgium road tax",
      "Belgium toll sticker",
      "Belgium digital vignette",
      "Belgium vignette price",
      "Belgium vignette foreign cars",
    ],
    alternates: {
      canonical: path,
      languages: { ...languageAlternates, "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocales[locale],
      url: path,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={publicSans.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
