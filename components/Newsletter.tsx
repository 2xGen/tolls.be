"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";

export default function Newsletter({ dict }: { dict: Dictionary }) {
  const { newsletter } = dict;
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend in this version — capture the intent client-side.
    // Wire this up to an email provider / API route when available.
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section id="updates" aria-labelledby="updates-title" className="section bg-white">
      <div className="container-gov">
        <div className="rounded-gov border-l-4 border-accent border-t border-r border-b border-line bg-mist p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-accent">
            {newsletter.badge}
          </p>
          <h2
            id="updates-title"
            className="mt-2 text-xl font-bold text-navy sm:text-2xl"
          >
            {newsletter.title}
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-charcoal">
            {newsletter.description}
          </p>

          {submitted ? (
            <p
              role="status"
              className="mt-6 rounded-gov border border-navy/20 bg-white px-4 py-3 font-medium text-navy"
            >
              {newsletter.success}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-end"
              noValidate
            >
              <div className="flex-1">
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-semibold text-charcoal"
                >
                  {newsletter.emailLabel}
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.emailPlaceholder}
                  className="mt-1 w-full rounded-gov border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal-light/60 focus:border-navy"
                />
              </div>
              <button type="submit" className="btn-primary shrink-0">
                {newsletter.button}
              </button>
            </form>
          )}

          <p className="mt-3 text-xs text-charcoal-light">
            {newsletter.consent}
          </p>
        </div>
      </div>
    </section>
  );
}
