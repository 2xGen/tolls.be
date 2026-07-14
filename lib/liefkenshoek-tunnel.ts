import type { Locale } from "@/lib/i18n/config";

/** Official 2026 toll rates published by NV Tunnel Liefkenshoek. */
export const liefkenshoekRates2026 = {
  year: 2026,
  currency: "EUR",
  rows: [
    {
      paymentKey: "teletol" as const,
      category1: 4.4,
      category2Night: 4.4,
      category2Day: 17.6,
    },
    {
      paymentKey: "card" as const,
      category1: 6.2,
      category2Night: 6.2,
      category2Day: 21.9,
    },
    {
      paymentKey: "cash" as const,
      category1: 8.0,
      category2Night: 8.0,
      category2Day: 25.0,
    },
  ],
} as const;

const ratesPaths: Partial<Record<Locale, string>> = {
  en: "/en/rates-subscription",
  nl: "/nl/tarieven-abonnementen",
  fr: "/fr/tarifs-abonnement",
  de: "/de/tarife-abonnement",
};

export function getLiefkenshoekRatesUrl(locale: Locale): string {
  const path = ratesPaths[locale] ?? ratesPaths.en!;
  return `https://www.liefkenshoektunnel.be${path}`;
}

export const liefkenshoekOperator = "NV Tunnel Liefkenshoek";
export const viapassUrl = "https://www.viapass.be/en/";
