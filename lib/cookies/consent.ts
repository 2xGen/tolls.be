export const CONSENT_STORAGE_KEY = "tolls-cookie-consent";
export const CONSENT_VERSION = 1;

export interface CookieConsent {
  /** Remembers your cookie choice — always active. */
  essential: true;
  /** Vercel Analytics and optional Google / Bing analytics tools. */
  analytics: boolean;
  version: number;
  updatedAt: string;
}

export function defaultConsent(analytics = false): CookieConsent {
  return {
    essential: true,
    analytics,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
}

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(consent: CookieConsent): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function hasConsentChoice(): boolean {
  return readConsent() !== null;
}
