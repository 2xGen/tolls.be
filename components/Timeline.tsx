import type { Dictionary } from "@/lib/i18n/types";

export default function Timeline({ dict }: { dict: Dictionary }) {
  const { timeline } = dict.sections;

  return (
    <section aria-labelledby="timeline-title" className="section bg-white">
      <div className="container-gov">
        <h2 id="timeline-title" className="section-title">
          {timeline.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-charcoal">
          {timeline.intro}
        </p>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {timeline.steps.map((step, index) => (
            <li key={step.date} className="relative">
              {/* Connector line (desktop) */}
              {index < timeline.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-3 hidden h-0.5 w-full bg-line md:block"
                />
              )}
              <div className="relative flex items-center gap-4 md:block">
                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white text-sm font-bold text-navy"
                >
                  {index + 1}
                </span>
                <div className="md:mt-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">
                    {step.date}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-charcoal">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
