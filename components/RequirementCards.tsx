import type { Dictionary } from "@/lib/i18n/types";
import { CheckIcon, MinusIcon } from "./icons";

export default function RequirementCards({ dict }: { dict: Dictionary }) {
  const { who } = dict.sections;

  return (
    <section
      id="requirements"
      aria-labelledby="who-title"
      className="section bg-mist"
    >
      <div className="container-gov">
        <h2 id="who-title" className="section-title">
          {who.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-charcoal">
          {who.intro}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-gov border border-line border-t-4 border-t-navy bg-white p-6">
            <h3 className="text-lg font-bold text-navy">{who.requiredTitle}</h3>
            <ul className="mt-4 space-y-3">
              {who.required.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-base text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-gov border border-line border-t-4 border-t-charcoal-light bg-white p-6">
            <h3 className="text-lg font-bold text-navy">{who.exemptTitle}</h3>
            <ul className="mt-4 space-y-3">
              {who.exempt.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-mist text-charcoal-light">
                    <MinusIcon className="h-4 w-4" />
                  </span>
                  <span className="text-base text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
