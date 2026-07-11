import type { Dictionary } from "@/lib/i18n/types";

export default function PricingTable({ dict }: { dict: Dictionary }) {
  const { prices } = dict.sections;

  return (
    <section id="prices" aria-labelledby="prices-title" className="section bg-white">
      <div className="container-gov">
        <h2 id="prices-title" className="section-title">
          {prices.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-charcoal">
          {prices.intro}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <PriceCard
            heading={prices.annualHeading}
            columns={prices.columns}
            rows={prices.annual}
          />
          <PriceCard
            heading={prices.shortHeading}
            columns={prices.columns}
            rows={prices.short}
          />
        </div>

        <p className="mt-6 text-sm text-charcoal-light">{prices.disclaimer}</p>
      </div>
    </section>
  );
}

function PriceCard({
  heading,
  columns,
  rows,
}: {
  heading: string;
  columns: { period: string; price: string };
  rows: { label: string; price: string; note?: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-gov border border-line">
      <h3 className="bg-mist px-5 py-3 text-base font-bold text-navy">
        {heading}
      </h3>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{heading}</caption>
        <thead>
          <tr className="border-b border-line bg-white">
            <th
              scope="col"
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wide text-charcoal-light"
            >
              {columns.period}
            </th>
            <th
              scope="col"
              className="px-5 py-2 text-right text-xs font-semibold uppercase tracking-wide text-charcoal-light"
            >
              {columns.price}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-line last:border-b-0 even:bg-mist/50"
            >
              <th
                scope="row"
                className="px-5 py-3 text-left font-medium text-charcoal"
              >
                {row.label}
                {row.note && (
                  <span className="ml-2 align-middle text-xs font-normal text-charcoal-light">
                    {row.note}
                  </span>
                )}
              </th>
              <td className="px-5 py-3 text-right text-lg font-bold text-navy">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
