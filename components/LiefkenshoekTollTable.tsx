import {
  getLiefkenshoekRatesUrl,
  liefkenshoekRates2026,
} from "@/lib/liefkenshoek-tunnel";
import type { TollTableLabels } from "@/lib/i18n/pages-types";
import type { Locale } from "@/lib/i18n/config";

function formatEuro(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "en" ? "en-BE" : locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(amount);
}

const paymentLabels: Record<
  (typeof liefkenshoekRates2026.rows)[number]["paymentKey"],
  keyof Pick<TollTableLabels, "paymentTeletol" | "paymentCard" | "paymentCash">
> = {
  teletol: "paymentTeletol",
  card: "paymentCard",
  cash: "paymentCash",
};

export default function LiefkenshoekTollTable({
  labels,
  locale,
}: {
  labels: TollTableLabels;
  locale: Locale;
}) {
  const officialUrl = getLiefkenshoekRatesUrl(locale);

  return (
    <section
      aria-labelledby="liefkenshoek-rates-title"
      className="section bg-white"
    >
      <div className="container-gov max-w-4xl">
        <h2 id="liefkenshoek-rates-title" className="section-title">
          {labels.title}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-charcoal">
          {labels.intro}
        </p>

        <div className="mt-8 overflow-x-auto rounded-gov border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th scope="col" className="px-4 py-3 font-semibold">
                  {labels.paymentMethod}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {labels.category1}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {labels.category2Night}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {labels.category2Day}
                </th>
              </tr>
            </thead>
            <tbody>
              {liefkenshoekRates2026.rows.map((row) => (
                <tr key={row.paymentKey} className="border-t border-line bg-white">
                  <th
                    scope="row"
                    className="px-4 py-3 font-semibold text-navy"
                  >
                    {labels[paymentLabels[row.paymentKey]]}
                  </th>
                  <td className="px-4 py-3 text-charcoal">
                    {formatEuro(row.category1, locale)}
                  </td>
                  <td className="px-4 py-3 text-charcoal">
                    {formatEuro(row.category2Night, locale)}
                  </td>
                  <td className="px-4 py-3 text-charcoal">
                    {formatEuro(row.category2Day, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
          {labels.sourceNote.replace("{year}", String(liefkenshoekRates2026.year))}
        </p>
        <p className="mt-3">
          <a
            href={officialUrl}
            className="font-semibold text-navy underline underline-offset-4 hover:text-accent"
            rel="noopener noreferrer"
          >
            {labels.officialLink}
          </a>
        </p>
      </div>
    </section>
  );
}
