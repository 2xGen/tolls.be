/**
 * Hero visual: a neutral *concept* illustration summarising the planned
 * Belgium digital vignette. It is deliberately NOT styled as a real
 * confirmation/receipt — it carries a "Preview" badge and a caption making
 * clear it is illustrative only.
 *
 * Built with HTML/CSS (not SVG text) so all labels and values wrap cleanly
 * in every language. Exposed to assistive tech as a single labelled image.
 */
export default function HeroVisual({
  alt,
  title,
  subtitle,
  badge,
  caption,
  rows,
}: {
  alt: string;
  title: string;
  subtitle: string;
  badge: string;
  caption: string;
  rows: { label: string; value: string }[];
}) {
  const cells = rows.slice(0, 4);

  return (
    <div
      role="img"
      aria-label={alt}
      className="overflow-hidden rounded-xl border border-line bg-white shadow-sm"
    >
      <div aria-hidden="true">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 bg-navy px-5 py-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 h-8 w-1.5 shrink-0 rounded-sm bg-accent" />
            <div className="min-w-0">
              <p className="text-lg font-extrabold leading-tight text-white">
                {title}
              </p>
              <p className="mt-1 text-xs text-white/60">{subtitle}</p>
            </div>
          </div>
          <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full border border-white/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/70">
            {badge}
          </span>
        </div>

        {/* Detail grid */}
        <div className="grid grid-cols-2">
          {cells.map((row, i) => (
            <div
              key={row.label}
              className={[
                "px-5 py-4",
                i % 2 === 0 ? "border-r border-line" : "",
                i < 2 ? "border-b border-line" : "",
              ].join(" ")}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-light">
                {row.label}
              </p>
              <p className="mt-1 font-bold leading-snug text-navy">
                {row.value}
              </p>
            </div>
          ))}
        </div>

        {/* Footer caption */}
        <div className="flex items-center gap-2 border-t border-line px-5 py-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-charcoal-light text-[10px] font-bold text-charcoal-light">
            i
          </span>
          <p className="text-xs text-charcoal-light">{caption}</p>
        </div>
      </div>
    </div>
  );
}
