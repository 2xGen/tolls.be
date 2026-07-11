import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Privacybeleid",
    breadcrumb: "Privacybeleid",
    meta: {
      title: "Privacybeleid | Tolls.be",
      description:
        "Hoe Tolls.be persoonsgegevens verzamelt en gebruikt: nieuwsbrief, cookies, analytics en diensten van derden.",
    },
    h1: "Privacybeleid",
    updated: "Laatst bijgewerkt: 11 juli 2026",
    intro: [
      "Tolls.be is een onafhankelijke informatiesite over de Belgische digitale vignet. Dit privacybeleid legt uit welke persoonsgegevens we verzamelen, waarom we ze gebruiken en welke rechten u heeft onder de toepasselijke wetgeving inzake gegevensbescherming, waaronder de AVG.",
      "We verkopen geen persoonsgegevens. We verwerken alleen gegevens die nodig zijn om de website te exploiteren, vragen te beantwoorden, optionele updates te versturen en — met uw toestemming — te begrijpen hoe de site wordt gebruikt.",
    ],
    sections: [
      {
        heading: "Wie is verantwoordelijk voor uw gegevens?",
        paragraphs: [
          "De verwerkingsverantwoordelijke voor deze website is Tolls.be, bereikbaar via info@tolls.be. Tolls.be is geen overheidswebsite en is niet gelieerd aan Belgische autoriteiten.",
        ],
      },
      {
        heading: "Welke gegevens we verzamelen",
        bullets: [
          "E-mailadres — als u zich inschrijft voor vignetupdates",
          "Taalvoorkeur — afgeleid van de URL die u gebruikt (bijv. /en, /nl)",
          "Cookievoorkeur — opgeslagen in uw browser zodat we uw keuze onthouden",
          "Gebruiksgegevens — alleen als u analytics-cookies accepteert (paginaweergaven, geschatte locatie, apparaat/browsertype)",
          "Technische gegevens — standaard server- en beveiligingslogs verwerkt door onze hostingprovider",
        ],
      },
      {
        heading: "Nieuwsbrief en e-mailupdates",
        paragraphs: [
          "Als u zich inschrijft voor updates over het Belgische vignet, verzamelen we uw e-mailadres en de taalversie van de site die u gebruikte bij het inschrijven.",
          "We gebruiken uw e-mail alleen om af en toe updates over het Belgische vignet te sturen — bijvoorbeeld wanneer officiële prijzen, data of regels worden bevestigd. We sturen geen ongerelateerde marketing.",
          "Wanneer u het formulier verstuurt, wordt uw e-mailadres veilig opgeslagen in onze Supabase-database (gehost in de EU). Alleen geautoriseerde sitebeheerders hebben toegang tot inschrijvingen. U kunt zich op elk moment uitschrijven via info@tolls.be.",
          "De rechtsgrond voor het verwerken van nieuwsbriefgegevens is uw toestemming, die u geeft door het formulier te verzenden. U kunt die toestemming op elk moment intrekken.",
        ],
      },
      {
        heading: "Cookies en analytics",
        paragraphs: [
          "We gebruiken essentiële browseropslag om uw cookievoorkeur te onthouden. Dit is nodig zodat we u niet bij elk bezoek opnieuw vragen.",
          "Analysediensten worden alleen geladen als u via de cookiebanner instemt. Deze helpen ons te begrijpen hoe bezoekers de site gebruiken.",
        ],
        bullets: [
          "Vercel Analytics — privacyvriendelijke paginaweergavestatistieken (apparaattype, land, bezochte pagina's). Alleen geladen met toestemming.",
          "Google Analytics — optionele bezoekersstatistieken indien ingeschakeld door de site-eigenaar. Alleen geladen met toestemming.",
          "Microsoft Clarity — optionele sessie-inzichten voor Bing-gerelateerde analytics indien ingeschakeld. Alleen geladen met toestemming.",
        ],
      },
      {
        heading: "Diensten van derden",
        paragraphs: [
          "We gebruiken betrouwbare verwerkers om de website te exploiteren. Zij verwerken gegevens volgens onze instructies en alleen voor zover nodig voor hun dienst.",
        ],
        bullets: [
          "Vercel — websitehosting, CDN en analytics-infrastructuur",
          "Supabase — veilige databaseopslag voor nieuwsbrief-e-mailadressen",
          "Google — optionele analytics (Google Analytics) indien ingeschakeld en toegestaan",
          "Microsoft — optionele analytics (Clarity) indien ingeschakeld en toegestaan; Bing-siteverificatie gebruikt alleen een meta-tag en plaatst geen analytics-cookies",
        ],
      },
      {
        heading: "Affiliate- en uitgaande links",
        paragraphs: [
          "Tolls.be is in de eerste plaats een informatiesite. In de toekomst kunnen we linken naar diensten van derden (bijvoorbeeld officiële vignet-aankoopkanalen of partners). Die websites hebben hun eigen privacybeleid en kunnen eigen cookies plaatsen wanneer u ze bezoekt.",
          "We werken dit beleid bij als affiliate-relaties worden ingevoerd.",
        ],
      },
      {
        heading: "Hoe lang we gegevens bewaren",
        bullets: [
          "Nieuwsbrief-e-mailadressen — tot u zich uitschrijft of ons vraagt ze te verwijderen",
          "Cookievoorkeur — tot u browseropslag wist of we de consentversie bijwerken",
          "Analyticsgegevens — bewaard volgens de instellingen van elke provider (meestal geaggregeerd, beperkte bewaartermijn)",
          "Serverlogs — korte bewaartermijn door onze host voor beveiliging en betrouwbaarheid",
        ],
      },
      {
        heading: "Uw rechten",
        paragraphs: [
          "Afhankelijk van uw locatie heeft u mogelijk het recht op inzage, rectificatie, verwijdering of beperking van de verwerking van uw persoonsgegevens, op bezwaar tegen verwerking en op gegevensoverdraagbaarheid. Wanneer verwerking op toestemming is gebaseerd, kunt u die toestemming op elk moment intrekken zonder de rechtmatigheid van eerdere verwerking aan te tasten.",
          "U heeft ook het recht om een klacht in te dienen bij een toezichthoudende autoriteit. In België is dit de Gegevensbeschermingsautoriteit (APD).",
          "Om uw rechten uit te oefenen, neem contact op via info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactText: "Vragen over dit privacybeleid of uw persoonsgegevens? Neem contact met ons op via",
  },
};

export default legal;
