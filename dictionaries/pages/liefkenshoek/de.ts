import type { PageContent } from "@/lib/i18n/pages-types";

const liefkenshoekTunnel: PageContent = {
  navLabel: "Liefkenshoek-Tunnel",
  breadcrumb: "Liefkenshoek-Tunnel Maut",
  meta: {
    title: "Liefkenshoek-Tunnel Maut 2026 | Antwerpen Tarife | Tolls.be",
    description:
      "Offizielle Mauttarife 2026 Liefkenshoek-Tunnel bei Antwerpen. Kategorie 1 ab 4,40 €. Zahlung per Teletol, Karte oder bar. Belgische Autobahnen sind sonst mautfrei für Pkw.",
  },
  h1: "Liefkenshoek-Tunnel Maut",
  lastUpdated: "Zuletzt aktualisiert: Juli 2026",
  intro: [
    "Belgische Autobahnen und die meisten Regionalstraßen sind für Personenkraftwagen und Fahrzeuge bis 3,5 Tonnen zollfrei. Die wichtigste Ausnahme im Alltagsverkehr ist der Liefkenshoek-Tunnel bei Antwerpen — eine mautpflichtige Strecke unter der Schelde.",
    "Diese Seite erklärt, wer zahlt, die offiziellen Tarife 2026 von NV Tunnel Liefkenshoek und wie sich diese bestehende Maut vom geplanten digitalen Straßenvignette ab 2027 unterscheidet.",
  ],
  tollTable: {
    title: "Offizielle Tarife 2026",
    intro:
      "Die Tabelle folgt der von NV Tunnel Liefkenshoek für 2026 veröffentlichten Preisliste. Kategorie 1: Fahrzeuge bis 3 m Höhe (24/7). Kategorie 2: über 3 m, mit höheren Tagessätzen zwischen 06:01 und 21:59.",
    paymentMethod: "Zahlungsmittel",
    category1: "Kategorie 1 (24/7)",
    category2Night: "Kategorie 2 (22:00–06:00)",
    category2Day: "Kategorie 2 (06:01–21:59)",
    paymentTeletol: "Teletol-Badge & OBU",
    paymentCard: "Bank / Tankstelle / Kreditkarte",
    paymentCash: "Bar",
    sourceNote:
      "Tarife von der offiziellen Website des Liefkenshoek-Tunnels für {year}. Preise können sich ändern — prüfen Sie aktuelle Tarife vor der Fahrt.",
    officialLink: "Offizielle Tarife auf liefkenshoektunnel.be →",
  },
  blocks: [
    {
      heading: "Sind belgische Autobahnen für Pkw mautfrei?",
      paragraphs: [
        "Ja. Für Pkw, Motorräder und Fahrzeuge bis 3,5 t zulässiger Gesamtmasse gilt derzeit keine allgemeine Autobahnmaut in Belgien.",
        "Schwerlastwagen für Gütertransport über 3,5 t — und bestimmte N1-Fahrzeuge mit Karosseriecode BC — unterliegen einer separaten kilomerterabhängigen Maut über Viapass. Dieses LKW-System ist für normale Pkw nicht erforderlich.",
      ],
    },
    {
      heading: "Was ist der Liefkenshoek-Tunnel?",
      paragraphs: [
        "Der Liefkenshoek-Tunnel (Liefkenshoektunnel) westlich von Antwerpen verbindet das linke und rechte Schelde-Ufer. Betreiber ist NV Tunnel Liefkenshoek.",
        "Anders als die meisten belgischen Autobahnen ist die Nutzung kostenpflichtig.",
      ],
    },
    {
      heading: "Fahrzeugkategorien und Höhe",
      bullets: [
        "Kategorie 1 — bis 3 m Höhe: einheitlicher Tarif 24/7",
        "Kategorie 2 — über 3 m: niedrigerer Nachttarif (22:00–06:00), höherer Tagtarif (06:01–21:59)",
        "Wohnmobile und hohe Transporter fallen in Kategorie 2",
      ],
    },
    {
      heading: "Bezahlung",
      bullets: [
        "Teletol-Badge — günstigster Pkw-Tarif für Stammnutzer",
        "Automatische Kartenspuren — Bank-, Tankstellen- oder Kreditkarte",
        "Bar — höchster veröffentlichter Tarif",
        "OBU — bei LKW üblich; am Tunnel zum Niedrigtarif akzeptiert",
      ],
    },
    {
      heading: "LKW-Maut (Viapass) — getrennt von der Tunnelmaut",
      paragraphs: [
        "Die Viapass-Kilometermaut gilt für Güterfahrzeuge über 3,5 t (und qualifizierte N1/BC), nicht für normale Pkw im allgemeinen Straßennetz.",
        "Viapass organisiert die Maut in Flandern, Wallonien und Brüssel. Satellic ist einer von sechs akkreditierten OBU-Anbietern.",
      ],
    },
    {
      heading: "Nicht dasselbe wie das geplante Vignette 2027",
      paragraphs: [
        "Ab Mai 2027 plant Belgien ein neues digitales Vignette für Pkw — unabhängig von der heutigen Liefkenshoek-Tunnelmaut.",
      ],
    },
    {
      heading: "Quellen",
      bullets: [
        "NV Tunnel Liefkenshoek — liefkenshoektunnel.be",
        "Viapass — viapass.be",
      ],
    },
  ],
  faq: [
    {
      question: "Zahle ich mit dem Pkw Maut auf belgischen Autobahnen?",
      answer: "Nein, im Allgemeinen bis 3,5 t. Der Liefkenshoek-Tunnel bei Antwerpen ist eine wichtige Ausnahme.",
    },
    {
      question: "Was kostet der Tunnel für einen normalen Pkw?",
      answer: "Kategorie 1 (bis 3 m) 2026: 4,40 € (Teletol/OBU), 6,20 € (Karte), 8,00 € (bar) — 24/7.",
    },
    {
      question: "Warum tagsüber teurer für hohe Fahrzeuge?",
      answer: "Kategorie 2 tagsüber (06:01–21:59): 17,60 € / 21,90 € / 25,00 €. Nachts gelten die Kategorie-1-Tarife.",
    },
    {
      question: "Gleiche Maut für ausländische Kennzeichen?",
      answer: "Ja — Höhe und Zahlungsart entscheiden, nicht das Zulassungsland.",
    },
    {
      question: "Ist das dasselbe wie das Vignette 2027?",
      answer: "Nein — Tunnelmaut ist heute; das Vignette 2027 ist ein separates künftiges System.",
    },
  ],
  relatedTitle: "Verwandte Informationen",
  cta: {
    title: "Geplantes Belgien-Vignette (2027)",
    text: "Preise, Voraussetzungen und Zeitplan in unserem Hauptguide.",
    button: "Vignette-Guide ansehen",
  },
};

export default liefkenshoekTunnel;
