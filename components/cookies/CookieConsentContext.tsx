"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Dictionary } from "@/lib/i18n/types";
import {
  defaultConsent,
  hasConsentChoice,
  readConsent,
  writeConsent,
  type CookieConsent,
} from "@/lib/cookies/consent";
import CookieBanner from "./CookieBanner";

type View = "hidden" | "banner" | "preferences";

interface CookieConsentContextValue {
  consent: CookieConsent | null;
  openPreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export function CookieConsentProvider({
  dict,
  privacyHref,
  children,
}: {
  dict: Dictionary;
  privacyHref: string;
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [view, setView] = useState<View>("hidden");
  const [draftAnalytics, setDraftAnalytics] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setConsent(stored);
      setDraftAnalytics(stored.analytics);
      setView("hidden");
    } else {
      setView("banner");
    }
  }, []);

  const persist = useCallback((analytics: boolean) => {
    const previous = readConsent();
    const next = defaultConsent(analytics);
    writeConsent(next);
    setConsent(next);
    setDraftAnalytics(analytics);
    setView("hidden");
    if (previous?.analytics && !analytics) {
      window.location.reload();
    }
  }, []);

  const openPreferences = useCallback(() => {
    const stored = readConsent();
    setDraftAnalytics(stored?.analytics ?? false);
    setView("preferences");
  }, []);

  const value = useMemo(
    () => ({ consent, openPreferences }),
    [consent, openPreferences],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {(view === "banner" || view === "preferences") && (
        <CookieBanner
          dict={dict.cookies}
          privacyHref={privacyHref}
          mode={view}
          draftAnalytics={draftAnalytics}
          onDraftAnalyticsChange={setDraftAnalytics}
          onAcceptAll={() => persist(true)}
          onRejectNonEssential={() => persist(false)}
          onSavePreferences={() => persist(draftAnalytics)}
          onOpenPreferences={() => setView("preferences")}
          onClose={() => setView(hasConsentChoice() ? "hidden" : "banner")}
        />
      )}
    </CookieConsentContext.Provider>
  );
}
