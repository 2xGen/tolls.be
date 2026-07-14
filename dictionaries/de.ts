import type { Dictionary } from "@/lib/i18n/types";

const de: Dictionary = {
  meta: {
    title: "Belgien-Vignette 2027 | Preise, Regeln & Updates | Tolls.be",
    description:
      "Alles Wissenswerte über die digitale belgische Vignette, die 2027 eingeführt wird. Preise, Voraussetzungen, Ausnahmen, Gültigkeitszeiträume und Kontrolle.",
    ogAlt: "Tolls.be — Informationsportal zur Belgien-Vignette 2027",
  },
  header: {
    subtitle: "Informationen zur belgischen Straßenmaut",
    languageLabel: "Sprache",
    nav: [
      { label: "Belgien-Vignette", href: "#what" },
      { label: "Preise", href: "#prices" },
      { label: "Voraussetzungen", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Ratgeber zur Belgien-Vignette",
    headline: "Belgien-Vignette 2027",
    subheadline:
      "Alles Wissenswerte über die neue digitale Straßenvignette Belgiens für Pkw.",
    supporting:
      "Finden Sie Informationen zu Preisen, Gültigkeitszeiträumen, Fahrzeuganforderungen, Ausnahmen und Kontrolle.",
    primaryCta: "Vignette-Informationen ansehen",
    secondaryCta: "Neueste Updates",
    disclaimer:
      "Tolls.be ist eine unabhängige Informationswebsite. Das belgische Vignettensystem wird von den belgischen Behörden noch ausgearbeitet.",
    visualAlt:
      "Konzeptdarstellung der geplanten digitalen Belgien-Vignette: Fahrzeugtyp, Status, System und geplanter Start",
    visualTitle: "Konzept der digitalen Vignette",
    visualSubtitle: "Belgische Straßenvignette · 2027",
    visualBadge: "Vorschau",
    visualCaption: "Illustratives Konzept — kein offizielles Dokument",
    visualRows: [
      { label: "Fahrzeug", value: "Pkw" },
      { label: "Status", value: "Informationsvorschau" },
      { label: "System", value: "Mit Kennzeichen verknüpft" },
      { label: "Geplanter Start", value: "Mai 2027" },
    ],
  },
  infoBox: {
    title: "Die digitale Belgien-Vignette auf einen Blick",
    note: "Wichtige Fakten zum geplanten System. Details können sich vor dem offiziellen Start ändern.",
    rows: [
      { label: "Start", value: "Mai 2027" },
      { label: "Gilt für", value: "Pkw bis 3,5 Tonnen" },
      {
        label: "System",
        value: "Digitale Vignette mit Kennzeichen verknüpft",
      },
      { label: "Kontrolle", value: "Kontrolle mit ANPR-Kameras" },
      { label: "Ausländische Fahrzeuge", value: "Erforderlich" },
    ],
  },
  sections: {
    what: {
      title: "Was ist die Belgien-Vignette?",
      paragraphs: [
        "Belgien plant die Einführung einer digitalen Straßenvignette für Pkw, die die belgischen Autobahnen und Regionalstraßen nutzen. Statt einer physischen Plakette an der Windschutzscheibe soll die Vignette eine elektronische Registrierung sein, die direkt mit dem Kennzeichen des Fahrzeugs verknüpft ist.",
        "Im geplanten System würde eine gekaufte Vignette in einer zentralen Datenbank gespeichert, ohne dass etwas im Fahrzeug angezeigt werden muss. Die Kontrolle würde automatisch erfolgen, indem auf der Straße erfasste Kennzeichen mit dem Register der gültigen Vignetten abgeglichen werden.",
        "Die Maßnahme soll sicherstellen, dass alle Fahrerinnen und Fahrer, die belgische Straßen nutzen — einschließlich Besucher aus dem Ausland — fair zum Unterhalt des Straßennetzes beitragen. Sowohl in Belgien als auch im Ausland zugelassene Pkw würden eine gültige Vignette benötigen.",
      ],
    },
    prices: {
      title: "Preise der Belgien-Vignette",
      intro:
        "Die folgenden Preise sind Richtwerte und beruhen auf der aktuellen Planung. Die Jahrestarife hängen vom Fahrzeug ab, und für Gelegenheitsnutzer und Besucher gibt es kürzere Gültigkeitszeiträume.",
      annualHeading: "Jahres- und fahrzeugbezogene Tarife",
      shortHeading: "Kurzzeitige Gültigkeitszeiträume",
      columns: { period: "Kategorie", price: "Preis" },
      annual: [
        { label: "Jährlich", price: "100 €" },
        { label: "Elektrofahrzeuge", price: "90 €", note: "Ermäßigter Tarif" },
        { label: "Ältere Fahrzeuge", price: "125 €", note: "Höhere Emissionen" },
      ],
      short: [
        { label: "1 Tag", price: "9 €" },
        { label: "10 Tage", price: "12 €" },
        { label: "1 Monat", price: "19 €" },
        { label: "2 Monate", price: "30 €" },
      ],
      disclaimer:
        "Die Preise sind vorläufig und dienen nur zur Information. Die endgültigen Tarife werden vor dem Start von den zuständigen belgischen Behörden bestätigt.",
    },
    who: {
      title: "Wer braucht eine Belgien-Vignette?",
      intro:
        "Die Vignette soll für die meisten Pkw gelten. Bestimmte Fahrzeugkategorien sollen ausgenommen sein.",
      requiredTitle: "Erforderlich",
      required: [
        "Pkw bis 3,5 Tonnen",
        "In Belgien zugelassene Fahrzeuge",
        "Im Ausland zugelassene Fahrzeuge",
      ],
      exemptTitle: "Ausgenommen",
      exempt: [
        "Motorräder",
        "Traktoren",
        "Reisebusse",
        "Einsatzfahrzeuge",
        "Polizei- und Verteidigungsfahrzeuge",
      ],
    },
    enforcement: {
      title: "Wie funktioniert die Kontrolle?",
      intro:
        "Die Einhaltung soll digital überprüft werden, ohne physische Kontrolle oder Mautstationen.",
      points: [
        {
          title: "Digitales System",
          description:
            "Jede Vignette würde elektronisch in einem zentralen Register erfasst, ohne anzuzeigende Plakette.",
        },
        {
          title: "Verknüpfung mit dem Kennzeichen",
          description:
            "Die Vignette soll mit dem Kennzeichen des Fahrzeugs verknüpft sein, sodass die Gültigkeit an das Kennzeichen selbst gebunden ist.",
        },
        {
          title: "ANPR-Kameras",
          description:
            "Kameras zur automatischen Kennzeichenerkennung (ANPR) sollen Kennzeichen erfassen und mit dem Register abgleichen.",
        },
        {
          title: "Mobile Kontrolleinheiten",
          description:
            "Mobile Kontrolleinheiten könnten zusätzliche Kontrollen am Straßenrand im gesamten Netz durchführen.",
        },
        {
          title: "Mögliche Bußgelder",
          description:
            "Das Fahren ohne gültige Vignette kann nach Ablauf der Toleranzfrist ein Bußgeld nach sich ziehen.",
        },
      ],
    },
    timeline: {
      title: "Zeitplan",
      intro: "Wichtige Meilensteine für die Einführung der Belgien-Vignette.",
      steps: [
        {
          date: "2026",
          title: "Vorbereitungsphase",
          description:
            "Systeme, Registrierungsplattform und Kontrollinfrastruktur werden vorbereitet und getestet.",
        },
        {
          date: "Mai 2027",
          title: "Einführung der Vignette",
          description:
            "Die digitale Vignette soll für Pkw auf den betroffenen Straßen verfügbar und verpflichtend werden.",
        },
        {
          date: "Juli 2027",
          title: "Beginn der Kontrolle",
          description:
            "Die Toleranzfrist soll enden, danach könnten Bußgelder für Fahrzeuge ohne gültige Vignette gelten.",
        },
      ],
    },
  },
  faq: {
    title: "Häufig gestellte Fragen",
    intro: "Antworten auf die häufigsten Fragen zur Belgien-Vignette.",
    items: [
      {
        question: "Was ist die Belgien-Vignette?",
        answer:
          "Die Belgien-Vignette ist eine geplante digitale Straßenvignette für Pkw, die belgische Autobahnen und Regionalstraßen nutzen. Sie wird elektronisch mit dem Kennzeichen des Fahrzeugs verknüpft, sodass keine physische Plakette angezeigt werden muss.",
      },
      {
        question: "Wann führt Belgien die Vignette ein?",
        answer:
          "Nach der aktuellen Planung soll die digitale Vignette im Mai 2027 starten, wobei Kontrolle und Bußgelder nach einer Toleranzfrist ab Juli 2027 beginnen.",
      },
      {
        question: "Brauchen ausländische Autos eine Belgien-Vignette?",
        answer:
          "Ja. Im Ausland zugelassene Pkw würden — ebenso wie in Belgien zugelassene Fahrzeuge — eine gültige Vignette benötigen, um die betroffenen belgischen Straßen zu nutzen. Für Besucher wären Kurzzeitzeiträume verfügbar.",
      },
      {
        question: "Wie viel kostet die Belgien-Vignette?",
        answer:
          "Die indikativen Jahrespreise beginnen bei etwa 100 €, mit 90 € für Elektrofahrzeuge und 125 € für ältere Fahrzeuge mit höheren Emissionen. Kurzzeitoptionen sind von 9 € für einen Tag bis 30 € für zwei Monate geplant. Die endgültigen Tarife werden vor dem Start bestätigt.",
      },
      {
        question: "Brauchen Motorräder eine Belgien-Vignette?",
        answer:
          "Nein. Motorräder sollen von der Vignette ausgenommen sein, ebenso wie Traktoren, Reisebusse, Einsatzfahrzeuge sowie Polizei- und Verteidigungsfahrzeuge.",
      },
      {
        question: "Wie wird die Vignette kontrolliert?",
        answer:
          "Die Einhaltung soll automatisch mit ANPR-Kameras (automatische Kennzeichenerkennung) und mobilen Kontrolleinheiten überprüft werden. Auf der Straße erfasste Kennzeichen würden mit dem zentralen Register der gültigen Vignetten abgeglichen.",
      },
      {
        question: "Was passiert, wenn Sie ohne Vignette fahren?",
        answer:
          "Nach Ablauf der Toleranzfrist im Juli 2027 kann das Fahren ohne gültige Vignette ein Bußgeld nach sich ziehen. Die genauen Bußgeldbeträge werden von den zuständigen belgischen Behörden festgelegt.",
      },
    ],
  },
  sources: {
    title: "Quellen & Überprüfung",
    paragraphs: [
      "Die Informationen auf dieser Website beruhen auf öffentlich verfügbaren Ankündigungen der belgischen Behörden.",
      "Details der geplanten Vignette können sich noch ändern. Überprüfen Sie vor dem Kauf einer Vignette stets die aktuellen Anforderungen über die offiziellen Kanäle.",
    ],
  },
  sisterSite: {
    updatesTitle: "Aktuelle Meldungen",
    updatesText:
      "Nachrichten, offizielle Ankündigungen und redaktionelle Zusammenfassungen erscheinen auf unserer Schwesterseite — nicht hier dupliziert.",
    updatesLink: "Aktuelles auf {site} → News & Updates",
    updatesNote:
      "Tolls.be ist der mehrsprachige Referenzführer. BelgiumVignette.be berichtet über News und praktische Updates.",
    newsLabel: "News & Updates auf BelgiumVignette.be",
    footerTitle: "Schwesterseite",
    footerGuide: "BelgiumVignette.be — News & Verbraucherführer",
  },
  crossBorder: {
    title: "Grenzüberschreitende Fahrer",
    intro:
      "Länderspezifische Leitfäden für Fahrer, die aus Nachbarländern nach Belgien einreisen — Preise, Kurzzeitvignetten und was Sie erwartet.",
  },
  newsletter: {
    badge: "Bleiben Sie informiert",
    title: "Erhalten Sie Updates zum Start der Belgien-Vignette",
    description:
      "Werden Sie benachrichtigt, sobald offizielle Preise, Termine und Regeln bestätigt sind. Wir senden nur relevante Updates zur Belgien-Vignette.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "sie@beispiel.be",
    button: "Abonnieren",
    consentBefore:
      "Mit dem Abonnieren stimmen Sie zu, gelegentlich E-Mail-Updates zur Belgien-Vignette zu erhalten. Siehe unsere ",
    consentAfter:
      " für Informationen zur Speicherung und Nutzung Ihrer E-Mail-Adresse. Sie können sich jederzeit abmelden.",
    success: "Vielen Dank. Sie sind für Updates zur Belgien-Vignette angemeldet.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.",
    submitting: "Wird angemeldet…",
  },
  footer: {
    description:
      "Tolls.be ist ein unabhängiger Informationsdienst über Straßenmaut und die digitale Belgien-Vignette. Er steht in keiner Verbindung zu einer Behörde.",
    linksTitle: "Informationen",
    links: [
      { label: "Über uns", href: "#" },
      { label: "Kontakt", href: "mailto:info@tolls.be" },
      { label: "Datenschutzerklärung", href: "#privacy" },
    ],
    languagesTitle: "Sprachen",
    disclaimerTitle: "Wichtiger Hinweis",
    disclaimer:
      "Diese Website bietet nur allgemeine Informationen. Das belgische Vignettensystem wird noch ausgearbeitet und Details können sich ändern. Ziehen Sie für bestätigte Informationen stets die offiziellen Quellen der belgischen Behörden heran.",
    rights: "Alle Rechte vorbehalten.",
  },
  breadcrumb: {
    home: "Startseite",
    current: "Belgien-Vignette 2027",
  },
  cookies: {
    bannerTitle: "Cookie-Einstellungen",
    bannerDescription:
      "Wir verwenden essenzielle Speicherung, um Ihre Cookie-Auswahl zu speichern. Mit Ihrer Einwilligung nutzen wir Analyse-Tools, um Seitenaufrufe, Gerätetypen und ungefähre Standorte zu verstehen. Sie können Ihre Auswahl jederzeit ändern.",
    privacyLink: "Datenschutzerklärung",
    acceptAll: "Alle akzeptieren",
    rejectNonEssential: "Nicht essenzielle ablehnen",
    managePreferences: "Einstellungen verwalten",
    preferencesTitle: "Cookie-Einstellungen verwalten",
    savePreferences: "Einstellungen speichern",
    close: "Schließen",
    essentialTitle: "Essenziell",
    essentialDescription:
      "Speichert Ihre Cookie-Auswahl im Browser, damit wir nicht bei jedem Besuch erneut fragen müssen.",
    essentialAlwaysOn: "Immer aktiv",
    analyticsTitle: "Analyse",
    analyticsDescription:
      "Hilft uns zu verstehen, wie Besucher die Website nutzen, einschließlich Seitenaufrufe, Gerätetypen und ungefährem Standort. Wird nur geladen, wenn Sie zustimmen.",
    services: {
      vercel:
        "Vercel Analytics — datenschutzfreundliche Seitenaufruf-Statistiken (keine Werbe-Cookies).",
      google:
        "Google Analytics — optionale Besucherstatistiken, falls vom Website-Betreiber aktiviert.",
      bing:
        "Microsoft Clarity — optionale Sitzungseinblicke für Bing-bezogene Analysen, falls aktiviert.",
    },
    manageLabel: "Cookies verwalten",
  },
};

export default de;
