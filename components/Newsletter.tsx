"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getPrivacyPath } from "@/lib/i18n/legal";

export default function Newsletter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { newsletter } = dict;
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) return;

    setLoading(true);
    try {
      const form = e.currentTarget;
      const website = (
        form.elements.namedItem("website") as HTMLInputElement
      )?.value;

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          locale,
          consent: true,
          website,
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? newsletter.error);
        return;
      }

      setSubmitted(true);
    } catch {
      setError(newsletter.error);
    } finally {
      setLoading(false);
    }
  }

  const privacyPath = getPrivacyPath(locale);

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
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
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
                  disabled={loading}
                  className="mt-1 w-full rounded-gov border border-line bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal-light/60 focus:border-navy disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary shrink-0 disabled:opacity-60"
              >
                {loading ? newsletter.submitting : newsletter.button}
              </button>
            </form>
          )}

          {error && (
            <p role="alert" className="mt-3 text-sm font-medium text-accent">
              {error}
            </p>
          )}

          <p className="mt-3 text-xs text-charcoal-light">
            {newsletter.consentBefore}
            <Link href={privacyPath} className="font-semibold text-navy underline">
              {dict.cookies.privacyLink.toLowerCase()}
            </Link>
            {newsletter.consentAfter}
          </p>
        </div>
      </div>
    </section>
  );
}
