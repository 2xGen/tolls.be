"use client";

import { useCookieConsent } from "./CookieConsentContext";

export default function ManageCookiesButton({ label }: { label: string }) {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-sm text-white/90 underline-offset-4 hover:text-white hover:underline"
    >
      {label}
    </button>
  );
}
