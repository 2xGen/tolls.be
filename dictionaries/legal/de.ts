import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Datenschutzerklärung",
    breadcrumb: "Datenschutzerklärung",
    meta: {
      title: "Datenschutzerklärung | Tolls.be",
      description:
        "Wie Tolls.be personenbezogene Daten erhebt und nutzt: Newsletter, Cookies, Analytics und Dienste Dritter.",
    },
    h1: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert: 11. Juli 2026",
    intro: [
      "Tolls.be ist eine unabhängige Informationswebsite über die belgische digitale Vignette. Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir erheben, warum wir sie verwenden und welche Rechte Sie nach geltendem Datenschutzrecht, einschließlich der DSGVO, haben.",
      "Wir verkaufen keine personenbezogenen Daten. Wir verarbeiten nur Daten, die zum Betrieb der Website, zur Beantwortung von Anfragen, zum Versand optionaler Updates und — mit Ihrer Einwilligung — zum Verständnis der Nutzung der Website erforderlich sind.",
    ],
    sections: [
      {
        heading: "Wer ist für Ihre Daten verantwortlich?",
        paragraphs: [
          "Verantwortlicher für diese Website ist Tolls.be, erreichbar unter info@tolls.be. Tolls.be ist keine Regierungswebsite und steht in keiner Verbindung zu belgischen Behörden.",
        ],
      },
      {
        heading: "Welche Daten wir erheben",
        bullets: [
          "E-Mail-Adresse — wenn Sie sich für Vignetten-Updates anmelden",
          "Sprachpräferenz — abgeleitet von der verwendeten URL (z. B. /en, /de)",
          "Cookie-Einwilligung — im Browser gespeichert, damit wir Ihre Wahl merken",
          "Nutzungsdaten — nur wenn Sie Analytics-Cookies akzeptieren (Seitenaufrufe, ungefährer Standort, Gerät-/Browsertyp)",
          "Technische Daten — standardmäßige Server- und Sicherheitsprotokolle unseres Hosting-Anbieters",
        ],
      },
      {
        heading: "Newsletter und E-Mail-Updates",
        paragraphs: [
          "Wenn Sie Updates zur belgischen Vignette abonnieren, erheben wir Ihre E-Mail-Adresse und die Sprachversion der Website, die Sie bei der Anmeldung genutzt haben.",
          "Wir verwenden Ihre E-Mail nur, um gelegentlich Updates zur belgischen Vignette zu senden — zum Beispiel wenn offizielle Preise, Termine oder Regeln bestätigt werden. Wir senden kein unverwandtes Marketing.",
          "Beim Absenden des Formulars wird Ihre E-Mail-Adresse sicher in unserer Supabase-Datenbank (in der EU gehostet) gespeichert. Nur autorisierte Website-Administratoren haben Zugriff auf Abonnentendaten. Sie können sich jederzeit abmelden, indem Sie info@tolls.be kontaktieren.",
          "Rechtsgrundlage für die Verarbeitung von Newsletter-Daten ist Ihre Einwilligung, die Sie durch Absenden des Formulars erteilen. Sie können diese Einwilligung jederzeit widerrufen.",
        ],
      },
      {
        heading: "Cookies und Analytics",
        paragraphs: [
          "Wir verwenden essenzielle Browser-Speicherung, um Ihre Cookie-Einwilligung zu merken. Dies ist erforderlich, damit wir Sie nicht bei jedem Besuch erneut fragen.",
          "Analytics-Tools werden nur geladen, wenn Sie über das Cookie-Banner zustimmen. Sie helfen uns zu verstehen, wie Besucher die Website nutzen.",
        ],
        bullets: [
          "Vercel Analytics — datenschutzfreundliche Seitenaufrufstatistiken (Gerätetyp, Land, besuchte Seiten). Nur mit Einwilligung geladen.",
          "Google Analytics — optionale Besucherstatistiken, falls vom Seitenbetreiber aktiviert. Nur mit Einwilligung geladen.",
          "Microsoft Clarity — optionale Sitzungseinblicke für Bing-bezogene Analytics, falls aktiviert. Nur mit Einwilligung geladen.",
        ],
      },
      {
        heading: "Dienste Dritter",
        paragraphs: [
          "Wir nutzen vertrauenswürdige Auftragsverarbeiter zum Betrieb der Website. Sie verarbeiten Daten nach unseren Weisungen und nur soweit für ihren Dienst erforderlich.",
        ],
        bullets: [
          "Vercel — Website-Hosting, CDN und Analytics-Infrastruktur",
          "Supabase — sichere Datenbankspeicherung für Newsletter-E-Mail-Adressen",
          "Google — optionale Analytics (Google Analytics), falls aktiviert und eingewilligt",
          "Microsoft — optionale Analytics (Clarity), falls aktiviert und eingewilligt; Bing-Site-Verifizierung nutzt nur ein Meta-Tag und setzt keine Analytics-Cookies",
        ],
      },
      {
        heading: "Affiliate- und externe Links",
        paragraphs: [
          "Tolls.be ist in erster Linie eine Informationswebsite. Künftig können wir auf Dienste Dritter verlinken (z. B. offizielle Vignetten-Kaufkanäle oder Partner). Diese Websites haben eigene Datenschutzrichtlinien und können eigene Cookies setzen, wenn Sie sie besuchen.",
          "Wir aktualisieren diese Richtlinie, wenn Affiliate-Beziehungen eingeführt werden.",
        ],
      },
      {
        heading: "Wie lange wir Daten aufbewahren",
        bullets: [
          "Newsletter-E-Mail-Adressen — bis Sie sich abmelden oder uns zur Löschung auffordern",
          "Cookie-Einwilligungspräferenz — bis Sie den Browser-Speicher löschen oder wir die Consent-Version aktualisieren",
          "Analytics-Daten — Aufbewahrung gemäß den Einstellungen jedes Anbieters (typischerweise aggregiert, begrenzte Dauer)",
          "Server-Logs — kurzfristige Aufbewahrung durch unseren Host für Sicherheit und Zuverlässigkeit",
        ],
      },
      {
        heading: "Ihre Rechte",
        paragraphs: [
          "Je nach Standort haben Sie möglicherweise das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten, auf Widerspruch gegen die Verarbeitung und auf Datenübertragbarkeit. Wenn die Verarbeitung auf Einwilligung beruht, können Sie diese jederzeit widerrufen, ohne die Rechtmäßigkeit der bisherigen Verarbeitung zu beeinträchtigen.",
          "Sie haben auch das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen. In Belgien ist dies die Datenschutzbehörde (Gegevensbeschermingsautoriteit / APD).",
          "Zur Ausübung Ihrer Rechte kontaktieren Sie info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Kontakt",
    contactText: "Fragen zu dieser Datenschutzerklärung oder Ihren personenbezogenen Daten? Kontaktieren Sie uns unter",
  },
};

export default legal;
