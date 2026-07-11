import type { Dictionary } from "@/lib/i18n/types";

export default function InfoBox({ dict }: { dict: Dictionary }) {
  const { infoBox } = dict;
  return (
    <section aria-labelledby="ataglance-title" className="bg-navy">
      <div className="container-gov py-12 lg:py-14">
        <div className="rounded-gov border border-navy-600 bg-navy-900/40 p-6 sm:p-8">
          <h2
            id="ataglance-title"
            className="text-xl font-bold text-white sm:text-2xl"
          >
            {infoBox.title}
          </h2>
          <p className="mt-2 text-sm text-white/70">{infoBox.note}</p>

          <dl className="mt-6 grid gap-px overflow-hidden rounded-gov border border-navy-600 bg-navy-600 sm:grid-cols-2 lg:grid-cols-5">
            {infoBox.rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 bg-navy px-4 py-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  {row.label}
                </dt>
                <dd className="text-base font-semibold text-white">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
