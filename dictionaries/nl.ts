import type { Dictionary } from "@/lib/i18n/types";

const nl: Dictionary = {
  meta: {
    title: "Belgisch vignet 2027 | Prijzen, regels & updates | Tolls.be",
    description:
      "Alles wat u moet weten over het Belgische digitale vignet dat in 2027 wordt ingevoerd. Prijzen, voorwaarden, vrijstellingen, geldigheidsperioden en handhaving.",
    ogAlt: "Tolls.be — informatieportaal Belgisch vignet 2027",
  },
  header: {
    subtitle: "Belgische wegtolinformatie",
    languageLabel: "Taal",
    nav: [
      { label: "Belgisch vignet", href: "#what" },
      { label: "Prijzen", href: "#prices" },
      { label: "Voorwaarden", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Gids Belgisch vignet",
    headline: "Belgisch vignet 2027",
    subheadline:
      "Alles wat u moet weten over het nieuwe digitale wegenvignet van België voor personenwagens.",
    supporting:
      "Vind informatie over prijzen, geldigheidsperioden, voertuigvereisten, vrijstellingen en handhaving.",
    primaryCta: "Bekijk vignetinformatie",
    secondaryCta: "Laatste updates",
    disclaimer:
      "Tolls.be is een onafhankelijke informatiewebsite. Het Belgische vignetsysteem wordt nog uitgewerkt door de Belgische overheid.",
    visualAlt:
      "Conceptillustratie van het geplande Belgische digitale vignet: voertuigtype, status, systeem en verwachte start",
    visualTitle: "Concept digitaal vignet",
    visualSubtitle: "Belgisch wegenvignet · 2027",
    visualBadge: "Voorbeeld",
    visualCaption: "Illustratief concept — geen officieel document",
    visualRows: [
      { label: "Voertuig", value: "Personenwagen" },
      { label: "Status", value: "Informatievoorbeeld" },
      { label: "Systeem", value: "Gekoppeld aan nummerplaat" },
      { label: "Verwachte start", value: "Mei 2027" },
    ],
  },
  infoBox: {
    title: "Het Belgische digitale vignet in het kort",
    note: "Belangrijkste feiten over het geplande systeem. Details kunnen wijzigen vóór de officiële start.",
    rows: [
      { label: "Start", value: "Mei 2027" },
      { label: "Van toepassing op", value: "Personenwagens tot 3,5 ton" },
      {
        label: "Systeem",
        value: "Digitaal vignet gekoppeld aan nummerplaat",
      },
      { label: "Handhaving", value: "Controle met ANPR-camera's" },
      { label: "Buitenlandse voertuigen", value: "Verplicht" },
    ],
  },
  sections: {
    what: {
      title: "Wat is het Belgische vignet?",
      paragraphs: [
        "België is van plan een digitaal wegenvignet in te voeren voor personenwagens die gebruikmaken van de Belgische snelwegen en gewestwegen. In plaats van een fysieke sticker op de voorruit zou het vignet een elektronische registratie zijn die rechtstreeks gekoppeld is aan de nummerplaat van het voertuig.",
        "In het geplande systeem zou een aangekocht vignet worden opgeslagen in een centrale databank, zonder dat er iets in het voertuig moet worden getoond. De handhaving zou automatisch gebeuren door nummerplaten die op de weg worden gelezen te vergelijken met het register van geldige vignetten.",
        "De maatregel moet ervoor zorgen dat alle bestuurders die de Belgische wegen gebruiken — ook bezoekers uit het buitenland — op een eerlijke manier bijdragen aan het onderhoud van het wegennet. Zowel in België als in het buitenland ingeschreven personenwagens zouden een geldig vignet nodig hebben.",
      ],
    },
    prices: {
      title: "Prijzen van het Belgische vignet",
      intro:
        "De onderstaande prijzen zijn indicatief en gebaseerd op de huidige planning. De jaartarieven hangen af van het voertuig, en voor occasionele gebruikers en bezoekers zijn er kortere geldigheidsperioden beschikbaar.",
      annualHeading: "Jaartarieven en tarieven per voertuig",
      shortHeading: "Kortlopende geldigheidsperioden",
      columns: { period: "Categorie", price: "Prijs" },
      annual: [
        { label: "Jaarlijks", price: "€ 100" },
        { label: "Elektrische voertuigen", price: "€ 90", note: "Verlaagd tarief" },
        { label: "Oudere voertuigen", price: "€ 125", note: "Hogere uitstoot" },
      ],
      short: [
        { label: "1 dag", price: "€ 9" },
        { label: "10 dagen", price: "€ 12" },
        { label: "1 maand", price: "€ 19" },
        { label: "2 maanden", price: "€ 30" },
      ],
      disclaimer:
        "De prijzen zijn voorlopig en worden louter ter informatie weergegeven. De definitieve tarieven worden vóór de start bevestigd door de bevoegde Belgische overheid.",
    },
    who: {
      title: "Wie heeft een Belgisch vignet nodig?",
      intro:
        "Het vignet zou van toepassing zijn op de meeste personenwagens. Voor bepaalde voertuigcategorieën is een vrijstelling verwacht.",
      requiredTitle: "Verplicht",
      required: [
        "Personenwagens tot 3,5 ton",
        "In België ingeschreven voertuigen",
        "In het buitenland ingeschreven voertuigen",
      ],
      exemptTitle: "Vrijgesteld",
      exempt: [
        "Motorfietsen",
        "Tractoren",
        "Autocars",
        "Voertuigen van hulpdiensten",
        "Politie- en defensievoertuigen",
      ],
    },
    enforcement: {
      title: "Hoe zal de handhaving verlopen?",
      intro:
        "De naleving zou digitaal worden gecontroleerd, zonder fysieke controle of tolhuisjes.",
      points: [
        {
          title: "Digitaal systeem",
          description:
            "Elk vignet zou elektronisch worden geregistreerd in een centraal register, zonder sticker die getoond moet worden.",
        },
        {
          title: "Koppeling met nummerplaat",
          description:
            "Het vignet zou gekoppeld zijn aan de nummerplaat van het voertuig, zodat de geldigheid aan de plaat zelf is verbonden.",
        },
        {
          title: "ANPR-camera's",
          description:
            "Camera's met automatische nummerplaatherkenning (ANPR) zouden nummerplaten lezen en vergelijken met het register.",
        },
        {
          title: "Mobiele controleploegen",
          description:
            "Mobiele controleploegen zouden bijkomende controles langs de weg kunnen uitvoeren over het hele netwerk.",
        },
        {
          title: "Mogelijke boetes",
          description:
            "Rijden zonder geldig vignet kan een boete tot gevolg hebben zodra de tolerantieperiode afloopt.",
        },
      ],
    },
    timeline: {
      title: "Tijdlijn",
      intro: "Belangrijkste mijlpalen voor de invoering van het Belgische vignet.",
      steps: [
        {
          date: "2026",
          title: "Voorbereidingsfase",
          description:
            "Systemen, registratieplatform en handhavingsinfrastructuur worden voorbereid en getest.",
        },
        {
          date: "Mei 2027",
          title: "Invoering van het vignet",
          description:
            "Het digitale vignet zou beschikbaar en verplicht worden voor personenwagens op de betrokken wegen.",
        },
        {
          date: "Juli 2027",
          title: "Start van de handhaving",
          description:
            "De tolerantieperiode zou aflopen, waarna boetes kunnen gelden voor voertuigen zonder geldig vignet.",
        },
      ],
    },
  },
  faq: {
    title: "Veelgestelde vragen",
    intro: "Antwoorden op de meest gestelde vragen over het Belgische vignet.",
    items: [
      {
        question: "Wat is het Belgische vignet?",
        answer:
          "Het Belgische vignet is een gepland digitaal wegenvignet voor personenwagens die gebruikmaken van de Belgische snelwegen en gewestwegen. Het wordt elektronisch gekoppeld aan de nummerplaat van het voertuig, zodat er geen fysieke sticker getoond hoeft te worden.",
      },
      {
        question: "Wanneer voert België het vignet in?",
        answer:
          "Volgens de huidige planning zou het digitale vignet in mei 2027 van start gaan, waarbij de handhaving en boetes na een tolerantieperiode vanaf juli 2027 beginnen.",
      },
      {
        question: "Hebben buitenlandse wagens een Belgisch vignet nodig?",
        answer:
          "Ja. In het buitenland ingeschreven personenwagens zouden een geldig vignet nodig hebben om de betrokken Belgische wegen te gebruiken, net als in België ingeschreven voertuigen. Voor bezoekers zouden er kortlopende periodes beschikbaar zijn.",
      },
      {
        question: "Hoeveel kost het Belgische vignet?",
        answer:
          "De indicatieve jaarprijzen beginnen rond € 100, met € 90 voor elektrische voertuigen en € 125 voor oudere voertuigen met een hogere uitstoot. Kortlopende opties zijn gepland vanaf € 9 voor één dag tot € 30 voor twee maanden. De definitieve tarieven worden vóór de start bevestigd.",
      },
      {
        question: "Hebben motorfietsen een Belgisch vignet nodig?",
        answer:
          "Nee. Motorfietsen zouden vrijgesteld zijn van het vignet, samen met tractoren, autocars, voertuigen van hulpdiensten en politie- en defensievoertuigen.",
      },
      {
        question: "Hoe wordt het vignet gecontroleerd?",
        answer:
          "De naleving zou automatisch worden gecontroleerd met ANPR-camera's (automatische nummerplaatherkenning) en mobiele controleploegen. Nummerplaten die op de weg worden gelezen, zouden worden vergeleken met het centrale register van geldige vignetten.",
      },
      {
        question: "Wat gebeurt er als u zonder vignet rijdt?",
        answer:
          "Zodra de tolerantieperiode in juli 2027 afloopt, kan rijden zonder geldig vignet een boete tot gevolg hebben. De precieze boetebedragen worden bepaald door de bevoegde Belgische overheid.",
      },
    ],
  },
  sources: {
    title: "Bronnen & verificatie",
    paragraphs: [
      "De informatie op deze website is gebaseerd op openbaar beschikbare aankondigingen van de Belgische overheid.",
      "Details van het geplande vignet kunnen nog wijzigen. Controleer vóór de aankoop van een vignet altijd de meest recente voorwaarden via de officiële kanalen.",
    ],
  },
  newsletter: {
    badge: "Blijf op de hoogte",
    title: "Ontvang updates over de start van het Belgische vignet",
    description:
      "Ontvang een bericht zodra de officiële prijzen, datums en regels bevestigd zijn. We sturen alleen relevante updates over het Belgische vignet.",
    emailLabel: "E-mailadres",
    emailPlaceholder: "u@voorbeeld.be",
    button: "Inschrijven",
    consentBefore:
      "Door in te schrijven gaat u akkoord met het af en toe ontvangen van e-mailupdates over het Belgische vignet. Zie ons ",
    consentAfter:
      " voor hoe we uw e-mailadres opslaan en gebruiken. U kunt zich op elk moment uitschrijven.",
    success: "Bedankt. U bent ingeschreven voor updates over het Belgische vignet.",
    error: "Er is iets misgegaan. Probeer het later opnieuw.",
    submitting: "Inschrijven…",
  },
  footer: {
    description:
      "Tolls.be is een onafhankelijke informatiedienst over wegentol en het Belgische digitale vignet. De website is niet verbonden aan enige overheidsinstantie.",
    linksTitle: "Informatie",
    links: [
      { label: "Over ons", href: "#" },
      { label: "Contact", href: "mailto:info@tolls.be" },
      { label: "Privacybeleid", href: "#privacy" },
    ],
    languagesTitle: "Talen",
    disclaimerTitle: "Belangrijke mededeling",
    disclaimer:
      "Deze website biedt uitsluitend algemene informatie. Het Belgische vignetsysteem wordt nog uitgewerkt en details kunnen wijzigen. Raadpleeg altijd de officiële bronnen van de Belgische overheid voor bevestigde informatie.",
    rights: "Alle rechten voorbehouden.",
  },
  breadcrumb: {
    home: "Home",
    current: "Belgisch vignet 2027",
  },
  cookies: {
    bannerTitle: "Cookievoorkeuren",
    bannerDescription:
      "We gebruiken essentiële opslag om uw cookiekeuze te onthouden. Met uw toestemming gebruiken we analysetools om paginaweergaven, apparaattypen en geschatte locaties te begrijpen. U kunt uw keuze op elk moment wijzigen.",
    privacyLink: "Privacybeleid",
    acceptAll: "Alles accepteren",
    rejectNonEssential: "Niet-essentiële weigeren",
    managePreferences: "Voorkeuren beheren",
    preferencesTitle: "Cookievoorkeuren beheren",
    savePreferences: "Voorkeuren opslaan",
    close: "Sluiten",
    essentialTitle: "Essentieel",
    essentialDescription:
      "Slaat uw cookiekeuze op in uw browser, zodat we niet bij elk bezoek opnieuw vragen.",
    essentialAlwaysOn: "Altijd actief",
    analyticsTitle: "Analyse",
    analyticsDescription:
      "Helpt ons te begrijpen hoe bezoekers de site gebruiken, inclusief paginaweergaven, apparaattypen en geschatte locatie. Alleen geladen als u hiervoor kiest.",
    services: {
      vercel:
        "Vercel Analytics — privacyvriendelijke statistieken over paginaweergaven (geen advertentiecookies).",
      google:
        "Google Analytics — optionele bezoekersstatistieken indien ingeschakeld door de site-eigenaar.",
      bing:
        "Microsoft Clarity — optionele sessie-inzichten voor Bing-gerelateerde analyses indien ingeschakeld.",
    },
    manageLabel: "Cookies beheren",
  },
};

export default nl;
