import type { PageContent } from "@/lib/i18n/pages-types";

const liefkenshoekTunnel: PageContent = {
  navLabel: "Tunel Liefkenshoek",
  breadcrumb: "Mýtné tunel Liefkenshoek",
  meta: {
    title: "Mýtné tunel Liefkenshoek 2026 | Tarify Antverpy | Tolls.be",
    description:
      "Oficiální sazby 2026 tunelu Liefkenshoek u Antverp. Kategorie 1 od 4,40 €. Platba Teletol, kartou nebo hotově. Belgické dálnice jsou pro osobní auta jinak bez mýtného.",
  },
  h1: "Mýtné tunelu Liefkenshoek",
  lastUpdated: "Poslední aktualizace: červenec 2026",
  intro: [
    "Belgické dálnice a většina regionálních silnic jsou pro osobní auta a vozidla do 3,5 tuny bez mýtného. Hlavní výjimkou je tunel Liefkenshoek u Antverp — zpoplatněná trasa pod Scheldt.",
    "Tato stránka vysvětluje, kdo platí, oficiální sazby 2026 NV Tunnel Liefkenshoek a rozdíl oproti plánované digitální dálniční známce od roku 2027.",
  ],
  tollTable: {
    title: "Oficiální sazby 2026",
    intro:
      "Tabulka odpovídá ceníku NV Tunnel Liefkenshoek pro rok 2026. Kategorie 1: vozidla do 3 m výšky (24/7). Kategorie 2: nad 3 m, vyšší denní sazby 06:01–21:59.",
    paymentMethod: "Způsob platby",
    category1: "Kategorie 1 (24/7)",
    category2Night: "Kategorie 2 (22:00–06:00)",
    category2Day: "Kategorie 2 (06:01–21:59)",
    paymentTeletol: "Teletol badge & OBU",
    paymentCard: "Banka / čerpací stanice / karta",
    paymentCash: "Hotovost",
    sourceNote:
      "Sazby převzaty z oficiálních stránek tunelu Liefkenshoek za {year}. Ceny se mohou změnit — vždy ověřte aktuální tarify před jízdou.",
    officialLink: "Oficiální sazby na liefkenshoektunnel.be →",
  },
  blocks: [
    {
      heading: "Jsou belgické dálnice pro auta bez mýtného?",
      paragraphs: [
        "Ano. Pro osobní auta, motocykly a vozidla do 3,5 t není v Belgii obecné dálniční mýtné.",
        "Nákladní vozidla pro přepravu zboží nad 3,5 t — a některá N1 s kódem BC — podléhají samostatnému kilomentrovému mýtnému Viapass. Běžná auta ho nepotřebují.",
      ],
    },
    {
      heading: "Co je tunel Liefkenshoek?",
      paragraphs: [
        "Tunel Liefkenshoek (Liefkenshoektunnel) západně od Antverp spojuje břehy Scheldt. Provozovatel je NV Tunnel Liefkenshoek.",
        "Na rozdíl od většiny dálnic je jeho použití zpoplatněné.",
      ],
    },
    {
      heading: "Kategorie vozidel a výška",
      bullets: [
        "Kategorie 1 — do 3 m: jedna sazba 24/7",
        "Kategorie 2 — nad 3 m: nižší noc (22:00–06:00), vyšší den (06:01–21:59)",
        "Obytné vozy a vysoké dodávky v kategorii 2",
      ],
    },
    {
      heading: "Platba",
      bullets: [
        "Teletol — nejnižší sazba pro auta",
        "Karta — banka, čerpací stanice, kreditní karta",
        "Hotovost — nejvyšší publikovaná sazba",
        "OBU — u nákladních vozidel; v tunelu za nejnižší sazbu",
      ],
    },
    {
      heading: "Mýtné pro nákladní vozidla (Viapass)",
      paragraphs: [
        "Kilometrové mýtné Viapass platí pro vozidla nad 3,5 t pro přepravu zboží, ne pro běžná auta. Satellic je jeden ze šesti akreditovaných poskytovatelů OBU.",
      ],
    },
    {
      heading: "Není totéž jako známka 2027",
      paragraphs: [
        "Od května 2027 Belgie plánuje novou digitální známku pro osobní auta — odděleně od dnešního mýtného tunelu Liefkenshoek.",
      ],
    },
    {
      heading: "Zdroje",
      bullets: ["NV Tunnel Liefkenshoek — liefkenshoektunnel.be", "Viapass — viapass.be"],
    },
  ],
  faq: [
    {
      question: "Platím na belgických dálnicích běžným autem mýtné?",
      answer: "Ne, obecně do 3,5 t. Tunel Liefkenshoek u Antverp je známá výjimka.",
    },
    {
      question: "Kolik stojí tunel pro běžné auto?",
      answer: "Kategorie 1 (do 3 m) 2026: 4,40 € (Teletol/OBU), 6,20 € (karta), 8,00 € (hotově) — 24/7.",
    },
    {
      question: "Proč je ve dne dražší pro vysoká vozidla?",
      answer: "Kategorie 2 ve dne: 17,60 € / 21,90 € / 25,00 €. V noci sazby jako kategorie 1.",
    },
    {
      question: "Stejné mýtné pro zahraniční SPZ?",
      answer: "Ano — rozhoduje výška a způsob platby.",
    },
    {
      question: "Je to totéž jako známka 2027?",
      answer: "Ne — tunel je současné mýtné; známka 2027 je samostatný budoucí systém.",
    },
  ],
  relatedTitle: "Související informace",
  cta: {
    title: "Plánovaná belgická známka (2027)",
    text: "Ceny a harmonogram v našem hlavním průvodci.",
    button: "Průvodce známkou",
  },
};

export default liefkenshoekTunnel;
