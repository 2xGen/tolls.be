import type { Dictionary } from "@/lib/i18n/types";
import { ChevronDownIcon } from "./icons";

export default function FAQ({ dict }: { dict: Dictionary }) {
  const { faq } = dict;

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-mist">
      <div className="container-gov max-w-4xl">
        <h2 id="faq-title" className="section-title">
          {faq.title}
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-charcoal">{faq.intro}</p>

        <div className="mt-8 divide-y divide-line overflow-hidden rounded-gov border border-line bg-white">
          {faq.items.map((item, index) => (
            <details key={index} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-navy marker:content-none hover:bg-mist [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-charcoal-light transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-0 text-base leading-relaxed text-charcoal">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
