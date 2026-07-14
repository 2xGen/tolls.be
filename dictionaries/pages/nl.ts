import type { PagesDictionary } from "@/lib/i18n/pages-types";
import liefkenshoekTunnel from "./liefkenshoek/nl";

const pages: PagesDictionary = {
  "belgium-vignette": {
    navLabel: "Belgisch vignet",
    breadcrumb: "Belgisch vignet",
    meta: {
      title: "Belgisch vignet: volledige gids 2027 | Tolls.be",
      description:
        "Een volledige gids over het Belgische vignet — het geplande digitale wegenvignet voor personenwagens. Wat het is, wie het nodig heeft, prijzen en controle.",
    },
    h1: "Het Belgische vignet",
    intro: [
      "Het Belgische vignet is een gepland digitaal wegenvignet voor personenwagens die gebruikmaken van Belgische snelwegen en gewestwegen. In plaats van een fysieke sticker op de voorruit wordt het naar verwachting een elektronische registratie die rechtstreeks aan uw nummerplaat is gekoppeld.",
      "Deze gids bundelt alles wat momenteel bekend is over het Belgische vignet: wat het is, wie er een nodig heeft, hoeveel het naar verwachting kost en hoe de naleving wordt gecontroleerd.",
    ],
    blocks: [
      {
        heading: "Wat het Belgische vignet is",
        paragraphs: [
          "In het geplande systeem registreert het kopen van een vignet uw nummerplaat in een centrale database. Er is geen sticker om te tonen en niets om op uw voorruit te bevestigen.",
          "Omdat het vignet aan de nummerplaat is gekoppeld, reist de geldigheid mee met het voertuig. De controle verloopt naar verwachting volledig automatisch door nummerplaten die op de weg worden gelezen te vergelijken met het register van geldige vignetten.",
        ],
      },
      {
        heading: "Wie een Belgisch vignet nodig heeft",
        paragraphs: [
          "Het vignet zal naar verwachting gelden voor personenwagens tot 3,5 ton, of ze nu in België of in het buitenland zijn geregistreerd.",
        ],
        bullets: [
          "Personenwagens tot 3,5 ton",
          "In België geregistreerde voertuigen",
          "In het buitenland geregistreerde voertuigen",
          "Motorfietsen, tractoren, autocars en hulpdiensten zijn naar verwachting vrijgesteld",
        ],
      },
      {
        heading: "Verwachte prijzen",
        paragraphs: [
          "Indicatieve jaarprijzen beginnen rond 100 €, met een verlaagd tarief voor elektrische voertuigen en een hoger tarief voor oudere, meer vervuilende wagens. Voor occasionele gebruikers en bezoekers zijn kortere periodes gepland.",
          "Bekijk de specifieke pagina over de prijs van het Belgische vignet voor de volledige uitsplitsing van jaar- en kortlopende tarieven.",
        ],
      },
      {
        heading: "Hoe de controle zal werken",
        paragraphs: [
          "De naleving wordt naar verwachting gecontroleerd met ANPR-camera's (automatische nummerplaatherkenning) en mobiele controle-eenheden, zonder tolhuisjes of fysieke controles.",
          "Zodra de tolerantieperiode afloopt, kan rijden zonder geldig vignet leiden tot een boete.",
        ],
      },
    ],
    faq: [
      {
        question: "Wanneer wordt het Belgische vignet ingevoerd?",
        answer:
          "Volgens de huidige planning wordt een lancering in mei 2027 verwacht, waarbij controle en boetes na een tolerantieperiode vanaf juli 2027 beginnen.",
      },
      {
        question: "Is het Belgische vignet een fysieke sticker?",
        answer:
          "Nee. Het wordt naar verwachting een digitale registratie die aan uw nummerplaat is gekoppeld, dus er is niets om in het voertuig te tonen.",
      },
      {
        question: "Hebben buitenlandse wagens een Belgisch vignet nodig?",
        answer:
          "Ja. In het buitenland geregistreerde personenwagens hebben naar verwachting een geldig vignet nodig, net als Belgische voertuigen.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Bekijk alle informatie over het Belgische vignet",
      text: "Ontdek prijzen, voorwaarden, vrijstellingen, de tijdlijn en veelgestelde vragen op de hoofdpagina met informatie.",
      button: "Alle vignetinformatie bekijken",
    },
  },
  "belgium-vignette-price": {
    navLabel: "Vignetprijs",
    breadcrumb: "Prijs Belgisch vignet",
    meta: {
      title: "Prijs Belgisch vignet 2027 | Jaar- en kortlopende tarieven | Tolls.be",
      description:
        "Prijzen van het Belgische vignet voor 2027: indicatieve jaartarieven vanaf 100 €, een verlaagd tarief voor elektrische wagens en kortlopende opties vanaf 9 €.",
    },
    h1: "Prijs van het Belgische vignet",
    intro: [
      "Hoeveel zal het Belgische vignet kosten? Deze pagina zet de indicatieve prijzen van het Belgische vignet uiteen op basis van de huidige planning, met zowel jaartarieven als kortlopende periodes voor occasionele bestuurders en bezoekers.",
      "Alle bedragen zijn voorlopig. De definitieve tarieven worden vóór de lancering bevestigd door de bevoegde Belgische overheden.",
    ],
    blocks: [
      {
        heading: "Jaartarieven en tarieven per voertuig",
        paragraphs: [
          "Het standaard jaarvignet zal naar verwachting rond 100 € kosten. Elektrische voertuigen genieten naar verwachting een verlaagd tarief, terwijl oudere, meer vervuilende wagens meer zouden betalen.",
        ],
      },
      {
        heading: "Kortlopende vignetten",
        paragraphs: [
          "Voor bezoekers en occasionele gebruikers zijn kortere geldigheidsperiodes gepland — van één dag tot twee maanden — zodat u alleen betaalt voor de tijd dat u de Belgische wegen daadwerkelijk gebruikt.",
        ],
      },
      {
        heading: "Wat de prijs beïnvloedt",
        bullets: [
          "Type voertuig (bijvoorbeeld elektrisch versus meer vervuilende wagens)",
          "Gekozen geldigheidsperiode (jaar of kortlopend)",
          "Of kortlopende bezoekersopties worden gebruikt in plaats van een jaarvignet",
        ],
      },
      {
        heading: "Zijn deze prijzen definitief?",
        paragraphs: [
          "Nee. De hier getoonde prijzen zijn indicatief en louter ter informatie. Bevestig de actuele tarieven altijd via officiële kanalen voordat u een vignet koopt.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoeveel kost het Belgische vignet per jaar?",
        answer:
          "De indicatieve jaarprijs bedraagt ongeveer 100 €, met ongeveer 90 € voor elektrische voertuigen en 125 € voor oudere, meer vervuilende wagens. De cijfers zijn voorlopig.",
      },
      {
        question: "Bestaat er een kortlopend Belgisch vignet?",
        answer:
          "Ja. Kortlopende periodes zijn gepland vanaf 9 € voor één dag, 12 € voor tien dagen, 19 € voor één maand en 30 € voor twee maanden.",
      },
      {
        question: "Betalen elektrische wagens minder?",
        answer:
          "Een verlaagd tarief voor elektrische voertuigen wordt verwacht, maar de definitieve tarieven worden vóór de lancering bevestigd.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Bekijk alle informatie over het Belgische vignet",
      text: "Ontdek voorwaarden, vrijstellingen, de tijdlijn en veelgestelde vragen op de hoofdpagina met informatie.",
      button: "Alle vignetinformatie bekijken",
    },
  },
  "belgium-vignette-foreign-cars": {
    navLabel: "Buitenlandse wagens",
    breadcrumb: "Vignet voor buitenlandse wagens",
    meta: {
      title: "Belgisch vignet voor buitenlandse wagens | Regels 2027 | Tolls.be",
      description:
        "Hebben buitenlandse wagens een Belgisch vignet nodig? In het buitenland geregistreerde personenwagens hebben naar verwachting een geldig digitaal vignet nodig.",
    },
    h1: "Belgisch vignet voor buitenlandse wagens",
    intro: [
      "Hebben buitenlandse wagens een Belgisch vignet nodig? Op basis van de huidige planning wel: in het buitenland geregistreerde personenwagens hebben naar verwachting een geldig vignet nodig om de betrokken Belgische wegen te gebruiken, net als in België geregistreerde voertuigen.",
      "Deze pagina legt uit wat het geplande systeem betekent voor bezoekers die vanuit het buitenland België binnenrijden.",
    ],
    blocks: [
      {
        heading: "Het vignet geldt voor buitenlandse voertuigen",
        paragraphs: [
          "Het Belgische vignet zal naar verwachting gelden ongeacht waar een wagen is geregistreerd. Bezoekers uit buurlanden en daarbuiten zouden op dezelfde manier als lokale bestuurders een geldig vignet nodig hebben.",
        ],
      },
      {
        heading: "Kortlopende opties voor bezoekers",
        paragraphs: [
          "Omdat veel buitenlandse bestuurders de Belgische wegen slechts voor een korte rit gebruiken, zijn kortlopende vignetten gepland zodat bezoekers geen volledig jaar hoeven te kopen.",
        ],
        bullets: [
          "1 dag — voor een snelle doorrit of dagtrip",
          "10 dagen — voor een korte vakantie",
          "1 of 2 maanden — voor langere verblijven",
        ],
      },
      {
        heading: "Hoe controles werken voor buitenlandse nummerplaten",
        paragraphs: [
          "Het vignet is gekoppeld aan de nummerplaat, en ANPR-camera's zullen naar verwachting buitenlandse platen lezen net zoals ze Belgische lezen. Er is niets om in de wagen te tonen.",
        ],
      },
      {
        heading: "Voor u vertrekt",
        paragraphs: [
          "Details van het geplande systeem kunnen nog wijzigen. Bevestig vóór u België binnenrijdt altijd de actuele voorwaarden en koop een eventueel vereist vignet via officiële kanalen.",
        ],
      },
    ],
    faq: [
      {
        question: "Hebben buitenlandse wagens een Belgisch vignet nodig?",
        answer:
          "Ja. In het buitenland geregistreerde personenwagens hebben naar verwachting een geldig vignet nodig om de betrokken Belgische wegen te gebruiken, net als in België geregistreerde voertuigen.",
      },
      {
        question: "Kunnen bezoekers een kortlopend vignet kopen?",
        answer:
          "Ja. Kortlopende periodes van één dag tot twee maanden zijn gepland, zodat bezoekers alleen betalen voor de tijd dat ze de Belgische wegen gebruiken.",
      },
      {
        question: "Hoe worden buitenlandse nummerplaten gecontroleerd?",
        answer:
          "ANPR-camera's zullen naar verwachting buitenlandse nummerplaten lezen en vergelijken met het centrale register van geldige vignetten.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Bekijk alle informatie over het Belgische vignet",
      text: "Ontdek prijzen, voorwaarden, vrijstellingen, de tijdlijn en veelgestelde vragen op de hoofdpagina met informatie.",
      button: "Alle vignetinformatie bekijken",
    },
  },
  "belgium-vignette-netherlands": {
    navLabel: "Nederlandse bestuurders",
    breadcrumb: "Belgisch vignet voor Nederlanders",
    meta: {
      title: "Belgisch vignet voor Nederlanders 2027 | Tolls.be",
      description:
        "Gids voor Nederlandse bestuurders: Belgisch vignet vanaf mei 2027, dagvignetten vanaf €9, ANPR-controles op NL-kentekens en wat grensoverschrijders moeten weten.",
    },
    h1: "Belgisch vignet voor Nederlandse bestuurders",
    intro: [
      "Rijdt u vanuit Nederland België in — voor werk, winkelen, vakantie of doorgaande reizen — dan geldt het geplande digitale Belgische vignet vanaf mei 2027 voor uw auto, net als voor Belgische automobilisten.",
      "Deze pagina legt uit wat Nederlanders kunnen verwachten: waarom het vignet er komt, welke kortetermijnopties passen bij occasionele ritten en hoe automatische kentekencontroles werken voor voertuigen met een Nederlands kenteken.",
    ],
    blocks: [
      {
        heading: "Waarom dit relevant is voor Nederlanders",
        paragraphs: [
          "België is een belangrijk transitland. Een groot deel van de kilometers op Belgische autosnelwegen en regionale wegen wordt gereden door buitenlandse automobilisten, waaronder tienduizenden Nederlandse voertuigen per dag.",
          "EU-regels vereisen dat België niet alleen buitenlanders laat betalen — maar het vignet raakt wel elke Nederlandse personenauto op de gedekte wegen. In de gepubliceerde plannen zit momenteel geen speciaal verlaagd tarief voor grensbewoners in Zuid-Nederland.",
        ],
      },
      {
        heading: "Korte ritten: dag- en 10-dagenvignet",
        paragraphs: ["De meeste Nederlandse bezoekers hebben geen jaarvignet nodig. Geplande kortetermijnproducten zijn bedoeld voor occasioneel gebruik:"],
        bullets: [
          "1 dag — circa €9 (ideaal voor een enkele crossing of dagtrip)",
          "10 dagen — circa €12 (korte vakantie of meerdaags bezoek)",
          "1 maand — circa €19 · 2 maanden — circa €30",
        ],
      },
      {
        heading: "Veelvoorkomende reispatronen",
        bullets: [
          "Dagtrips naar Antwerpen, Gent of Belgische winkelgebieden",
          "Doorgaande reizen naar Frankrijk, Luxemburg of Duitsland via België",
          "Weekend- of vakantieroutes via de E19, E40 of E25",
          "Grensoverschrijdend woon-werkverkeer vanuit Limburg of andere zuidelijke provincies",
        ],
      },
      {
        heading: "Hoe uw NL-kenteken wordt gecontroleerd",
        paragraphs: [
          "Het vignet is digitaal en gekoppeld aan uw kenteken — geen sticker op de voorruit. ANPR-camera's op autosnelwegen en regionale wegen moeten Nederlandse kentekens kunnen lezen en afzetten tegen het centrale register.",
          "Koop en registreer het vignet vóór u gedekte wegen gebruikt. Na de tolerantieperiode in juli 2027 kan rijden zonder geldig vignet tot een boete leiden.",
        ],
      },
      {
        heading: "Blijf op de hoogte",
        paragraphs: [
          "Plannen kunnen nog wijzigen vóór EU-goedkeuring en definitieve Belgische wetgeving. Voor actueel nieuws en samenvattingen van bronnen: zustersite BelgiumVignette.be. Deze Tolls.be-pagina richt zich op stabiele referentiefeiten voor Nederlandse bestuurders.",
        ],
      },
    ],
    faq: [
      {
        question: "Hebben Nederlandse auto's een Belgisch vignet nodig?",
        answer:
          "Ja. Nederlandse personenauto's tot 3,5 ton moeten naar de plannen vanaf mei 2027 een geldig vignet hebben op gedekte Belgische wegen, net als Belgische auto's.",
      },
      {
        question: "Kan ik alleen een dagvignet kopen?",
        answer:
          "Een dagvignet van circa €9 is gepland voor occasionele gebruikers. Definitieve producten en prijzen worden vóór de lancering bevestigd.",
      },
      {
        question: "Is er korting voor Nederlandse grensbewoners?",
        answer:
          "In de huidige gepubliceerde plannen zit geen speciaal regime voor Zuid-Nederlandse pendelaars, hoewel politieke discussie doorgaat.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Volledige referentie Belgisch vignet",
      text: "Bekijk prijzen, vrijstellingen, handhaving en de volledige tijdlijn op de hoofdpagina's.",
      button: "Alle vignetinformatie bekijken",
    },
  },
  "belgium-vignette-germany": {
    navLabel: "Duitse bestuurders",
    breadcrumb: "Belgisch vignet voor Duitse bestuurders",
    meta: {
      title: "Belgisch vignet voor Duitse bestuurders 2027 | Tolls.be",
      description:
        "Gids voor Duitse bestuurders in België: digitaal vignet vanaf mei 2027, kortetermijntarieven, transitroutes en ANPR-handhaving voor DE-kentekens.",
    },
    h1: "Belgisch vignet voor Duitse bestuurders",
    intro: [
      "Duitse bestuurders die Belgische autosnelwegen of regionale wegen gebruiken — voor transit naar Frankrijk, Benelux, ferryhavens of vakantie — hebben vanaf mei 2027 het geplande digitale Belgische vignet nodig.",
      "Deze gids behandelt geldigheidsopties, indicatieve prijzen en handhaving voor voertuigen met een Duits kenteken.",
    ],
    blocks: [
      {
        heading: "België als transitcorridor",
        paragraphs: [
          "Veel Duitse routes naar Frankrijk, Kanaalhavens of West-Europa lopen via België. Het vignet geldt voor wegen binnen het systeem, niet alleen voor voertuigen die in België stoppen.",
        ],
      },
      {
        heading: "Welke periode past bij u",
        bullets: [
          "Jaar — circa €100 bij regelmatig rijden in België",
          "10 dagen — circa €12 voor vakantie of zakenrit",
          "1 dag — circa €9 voor een enkele transit",
        ],
      },
      {
        heading: "Typische routes uit Duitsland",
        bullets: [
          "Aachen → Luik → westwaarts (E40-corridor)",
          "Keulen/Düsseldorf richting Brussel of Antwerpen",
          "Saarland → Luxemburg/België",
          "Transit naar Calais of Dunkirk via België",
        ],
      },
      {
        heading: "Digitale registratie voor DE-kentekens",
        paragraphs: [
          "U registreert uw Duitse kenteken online bij aankoop. ANPR-handhaving is gepland op autosnelwegen en geselecteerde regionale wegen. Het vignet is nog niet te koop.",
        ],
      },
    ],
    faq: [
      {
        question: "Hebben Duitse auto's een Belgisch vignet nodig?",
        answer: "Ja. Buitenlandse personenauto's moeten naar de plannen een geldig vignet hebben op gedekte wegen.",
      },
      {
        question: "Ik rijd één dag door België — wat heb ik nodig?",
        answer: "Een dagvignet is gepland voor occasioneel gebruik. Bevestig definitieve producten zodra het systeem live is.",
      },
      {
        question: "Dekt mijn Oostenrijkse of Zwitserse vignet België?",
        answer: "Nee. België krijgt een eigen digitaal vignetsysteem, los van andere landen.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Volledige referentie Belgisch vignet",
      text: "Bekijk prijzen, vrijstellingen, handhaving en de volledige tijdlijn.",
      button: "Alle vignetinformatie bekijken",
    },
  },
  "belgium-vignette-france": {
    navLabel: "Franse bestuurders",
    breadcrumb: "Belgisch vignet voor Franse bestuurders",
    meta: {
      title: "Belgisch vignet voor Franse bestuurders 2027 | Tolls.be",
      description:
        "Gids voor Franse bestuurders in België: digitaal vignet vanaf mei 2027, routes via Wallonië, kortetermijntarieven en kentekencontroles.",
    },
    h1: "Belgisch vignet voor Franse bestuurders",
    intro: [
      "Franse bestuurders die België binnenrijden — vanuit Rijsel en Hauts-de-France, of vakantieroutes via Wallonië — hebben vanaf mei 2027 het geplande digitale vignet nodig.",
      "Deze pagina behandelt kortetermijnopties en handhaving voor voertuigen met een Frans kenteken.",
    ],
    blocks: [
      {
        heading: "Grensoverschrijdend vanuit Frankrijk",
        paragraphs: [
          "Wallonië deelt een lange grens met Frankrijk. Het vignet geldt naar de plannen voor Belgische en buitenlandse kentekens op gedekte wegen. Registratie verloopt digitaal — geen sticker aan de grens.",
        ],
      },
      {
        heading: "Kortetermijnvignetten",
        bullets: [
          "1 dag — circa €9",
          "10 dagen — circa €12",
          "1 maand — circa €19 · 2 maanden — circa €30",
          "Jaar — circa €100 (regelmatige gebruikers)",
        ],
      },
      {
        heading: "Veelgebruikte toegangsroutes",
        bullets: [
          "Rijsel → Kortrijk / Gent",
          "Charleville-Mézières → Namen / Luik",
          "Reims → Brussel via E411/E42",
          "Vakantieverkeer naar de Belgische kust via E40",
        ],
      },
      {
        heading: "Boetes",
        paragraphs: [
          "Na de tolerantieperiode tot juli 2027 kan rijden zonder geldig vignet leiden tot boetes vanaf €70. Controles via ANPR-camera's en mobiele eenheden.",
        ],
      },
    ],
    faq: [
      {
        question: "Hebben Franse auto's een Belgisch vignet nodig?",
        answer: "Ja. Franse personenauto's tot 3,5 ton moeten naar de plannen vanaf mei 2027 een vignet hebben.",
      },
      {
        question: "Ik rij wekelijks over de grens — welk product?",
        answer: "Regelmatige gebruikers kiezen vaak een jaarvignet; occasionele bezoekers een 10-dagen- of maandvignet.",
      },
      {
        question: "Wanneer kan ik het vignet kopen?",
        answer: "Verkoop is nog niet open. Verwachte lancering: mei 2027. Volg nieuws op BelgiumVignette.be.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Volledige referentie Belgisch vignet",
      text: "Bekijk prijzen, vrijstellingen, handhaving en de volledige tijdlijn.",
      button: "Alle vignetinformatie bekijken",
    },
  },
  "liefkenshoek-tunnel": liefkenshoekTunnel,
  "buy-belgium-vignette": {
    navLabel: "Vignet kopen",
    breadcrumb: "Belgisch vignet kopen",
    meta: {
      title: "Belgisch vignet kopen 2027 | Hoe en waar | Tolls.be",
      description:
        "Hoe u een Belgisch vignet koopt zodra het digitale systeem in 2027 van start gaat. De verwachte stappen, wat u nodig hebt en hoe u op de hoogte blijft.",
    },
    h1: "Hoe u een Belgisch vignet koopt",
    intro: [
      "Het Belgische vignet is nog niet te koop. Het digitale systeem gaat naar verwachting in mei 2027 van start, en deze pagina legt uit hoe het kopen van een vignet waarschijnlijk zal verlopen zodra het beschikbaar is.",
      "Omdat het vignet digitaal is en aan uw nummerplaat is gekoppeld, verloopt het proces naar verwachting snel en volledig online.",
    ],
    blocks: [
      {
        heading: "Het vignet is nog niet te koop",
        paragraphs: [
          "Er is momenteel geen officieel Belgisch vignet te koop. Wees voorzichtig met websites die beweren er een te verkopen vóór de officiële lancering. Deze pagina wordt bijgewerkt zodra de officiële verkoopkanalen zijn bevestigd.",
        ],
      },
      {
        heading: "Hoe het kopen naar verwachting werkt",
        paragraphs: [
          "Zodra het live is, geeft u naar verwachting uw nummerplaat in, kiest u een geldigheidsperiode, betaalt u online en wordt het vignet elektronisch geregistreerd — zonder dat er een sticker wordt verzonden of getoond.",
        ],
        bullets: [
          "Geef uw nummerplaat en land van registratie in",
          "Kies een jaar- of kortlopende periode",
          "Betaal online",
          "Uw nummerplaat is geregistreerd — niets om te tonen",
        ],
      },
      {
        heading: "Wat u nodig hebt",
        bullets: [
          "Het nummerplaatnummer van uw voertuig",
          "Het land waar het voertuig is geregistreerd",
          "Een betaalmethode voor de online aankoop",
        ],
      },
      {
        heading: "Blijf op de hoogte van de lancering",
        paragraphs: [
          "Schrijf u hieronder in om verwittigd te worden zodra de officiële prijzen, data en verkoopkanalen voor het Belgische vignet zijn bevestigd.",
        ],
      },
    ],
    faq: [
      {
        question: "Kan ik nu al een Belgisch vignet kopen?",
        answer:
          "Nee. Het Belgische vignet is nog niet beschikbaar. Het digitale systeem gaat naar verwachting in mei 2027 van start.",
      },
      {
        question: "Waar zal ik het kunnen kopen?",
        answer:
          "De officiële verkoopkanalen zijn nog niet bevestigd. Deze pagina wordt bijgewerkt zodra ze door de Belgische overheden worden aangekondigd.",
      },
      {
        question: "Ontvang ik een sticker?",
        answer:
          "Nee. Het vignet wordt naar verwachting digitaal en aan uw nummerplaat gekoppeld, dus er is niets te ontvangen of te tonen.",
      },
    ],
    relatedTitle: "Gerelateerde informatie",
    cta: {
      title: "Bekijk alle informatie over het Belgische vignet",
      text: "Ontdek prijzen, voorwaarden, vrijstellingen, de tijdlijn en veelgestelde vragen op de hoofdpagina met informatie.",
      button: "Alle vignetinformatie bekijken",
    },
  },
};

export default pages;
