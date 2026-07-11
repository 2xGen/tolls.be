import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

export default function CookieBanner({
  dict,
  privacyHref,
  mode,
  draftAnalytics,
  onDraftAnalyticsChange,
  onAcceptAll,
  onRejectNonEssential,
  onSavePreferences,
  onOpenPreferences,
  onClose,
}: {
  dict: Dictionary["cookies"];
  privacyHref: string;
  mode: "banner" | "preferences";
  draftAnalytics: boolean;
  onDraftAnalyticsChange: (value: boolean) => void;
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onSavePreferences: () => void;
  onOpenPreferences: () => void;
  onClose: () => void;
}) {
  const showPreferences = mode === "preferences";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-navy/40 p-4 sm:items-center"
      role="presentation"
      onClick={showPreferences ? onClose : undefined}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-dialog-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-gov border border-line bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-line px-5 py-4 sm:px-6">
          <h2
            id="cookie-dialog-title"
            className="text-lg font-bold text-navy sm:text-xl"
          >
            {showPreferences ? dict.preferencesTitle : dict.bannerTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-charcoal">
            {dict.bannerDescription}{" "}
            <Link href={privacyHref} className="font-semibold text-navy underline">
              {dict.privacyLink}
            </Link>
          </p>
        </div>

        {showPreferences && (
          <div className="space-y-4 px-5 py-4 sm:px-6">
            <div className="rounded-gov border border-line bg-mist p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-navy">{dict.essentialTitle}</h3>
                  <p className="mt-1 text-sm text-charcoal">
                    {dict.essentialDescription}
                  </p>
                </div>
                <span className="shrink-0 rounded-gov bg-navy px-2 py-1 text-xs font-semibold text-white">
                  {dict.essentialAlwaysOn}
                </span>
              </div>
            </div>

            <div className="rounded-gov border border-line p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-bold text-navy">{dict.analyticsTitle}</h3>
                  <p className="mt-1 text-sm text-charcoal">
                    {dict.analyticsDescription}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-charcoal-light">
                    <li>• {dict.services.vercel}</li>
                    <li>• {dict.services.google}</li>
                    <li>• {dict.services.bing}</li>
                  </ul>
                </div>
                <label className="flex shrink-0 cursor-pointer items-center gap-2">
                  <span className="sr-only">{dict.analyticsTitle}</span>
                  <input
                    type="checkbox"
                    checked={draftAnalytics}
                    onChange={(e) => onDraftAnalyticsChange(e.target.checked)}
                    className="h-5 w-5 rounded border-line text-navy focus:ring-accent"
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 border-t border-line px-5 py-4 sm:flex-row sm:flex-wrap sm:px-6">
          {showPreferences ? (
            <>
              <button type="button" onClick={onSavePreferences} className="btn-primary">
                {dict.savePreferences}
              </button>
              <button type="button" onClick={onClose} className="btn-secondary">
                {dict.close}
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={onAcceptAll} className="btn-primary">
                {dict.acceptAll}
              </button>
              <button
                type="button"
                onClick={onRejectNonEssential}
                className="btn-secondary"
              >
                {dict.rejectNonEssential}
              </button>
              <button
                type="button"
                onClick={onOpenPreferences}
                className="btn border border-line bg-white text-navy hover:bg-mist"
              >
                {dict.managePreferences}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
