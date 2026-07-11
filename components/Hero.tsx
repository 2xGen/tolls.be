import type { Dictionary } from "@/lib/i18n/types";
import HeroVisual from "./HeroVisual";
import { ArrowRightIcon } from "./icons";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-gov grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16">
        <div>
          <p className="mb-4 inline-block border-l-4 border-accent pl-3 text-sm font-semibold uppercase tracking-wide text-charcoal-light">
            {dict.hero.eyebrow}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {dict.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal sm:text-xl">
            {dict.hero.subheadline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-charcoal-light">
            {dict.hero.supporting}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#what" className="btn-primary">
              {dict.hero.primaryCta}
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a href="#updates" className="btn-secondary">
              {dict.hero.secondaryCta}
            </a>
          </div>

          <p className="mt-6 max-w-xl border-t border-line pt-4 text-sm leading-relaxed text-charcoal-light">
            {dict.hero.disclaimer}
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroVisual
            alt={dict.hero.visualAlt}
            title={dict.hero.visualTitle}
            subtitle={dict.hero.visualSubtitle}
            badge={dict.hero.visualBadge}
            caption={dict.hero.visualCaption}
            rows={dict.hero.visualRows}
          />
        </div>
      </div>
    </section>
  );
}
