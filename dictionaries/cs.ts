import type { Dictionary } from "@/lib/i18n/types";

const cs: Dictionary = {
  meta: {
    title: "Belgická dálniční známka 2027 | Ceny, pravidla a novinky | Tolls.be",
    description:
      "Vše, co potřebujete vědět o belgické digitální dálniční známce zaváděné v roce 2027. Ceny, podmínky, výjimky, doby platnosti a kontrola.",
    ogAlt: "Tolls.be — informační portál o belgické dálniční známce 2027",
  },
  header: {
    subtitle: "Informace o belgickém mýtném",
    languageLabel: "Jazyk",
    skipToContent: "Přejít na hlavní obsah",
    nav: [
      { label: "Belgická známka", href: "#what" },
      { label: "Ceny", href: "#prices" },
      { label: "Podmínky", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Průvodce belgickou známkou",
    headline: "Belgická dálniční známka 2027",
    subheadline:
      "Vše, co potřebujete vědět o nové belgické digitální dálniční známce pro osobní automobily.",
    supporting:
      "Najděte informace o cenách, dobách platnosti, požadavcích na vozidla, výjimkách a kontrole.",
    primaryCta: "Zobrazit informace o známce",
    secondaryCta: "Nejnovější novinky",
    disclaimer:
      "Tolls.be je nezávislý informační web. Systém belgické dálniční známky belgické úřady stále dokončují.",
    visualAlt:
      "Koncepční ilustrace shrnující plánovanou belgickou digitální dálniční známku: typ vozidla, stav, systém a plánované spuštění",
    visualTitle: "Koncept digitální známky",
    visualSubtitle: "Belgická dálniční známka · 2027",
    visualBadge: "Náhled",
    visualCaption: "Ilustrativní koncept — nejde o úřední dokument",
    visualRows: [
      { label: "Vozidlo", value: "Osobní automobil" },
      { label: "Stav", value: "Informační náhled" },
      { label: "Systém", value: "Propojeno s registrační značkou" },
      { label: "Plánované spuštění", value: "Květen 2027" },
    ],
  },
  infoBox: {
    title: "Belgická digitální známka ve zkratce",
    note: "Klíčová fakta o plánovaném systému. Podrobnosti se mohou před oficiálním spuštěním změnit.",
    rows: [
      { label: "Spuštění", value: "Květen 2027" },
      { label: "Platí pro", value: "Osobní automobily do 3,5 tuny" },
      {
        label: "Systém",
        value: "Digitální známka propojená s registrační značkou",
      },
      { label: "Kontrola", value: "Kontrola kamerami ANPR" },
      { label: "Zahraniční vozidla", value: "Vyžadována" },
    ],
  },
  sections: {
    what: {
      title: "Co je belgická dálniční známka?",
      paragraphs: [
        "Belgie plánuje zavést digitální dálniční známku pro osobní automobily využívající její dálnice a regionální silnice. Namísto fyzické nálepky na čelním skle by známka měla být elektronickou registrací propojenou přímo s registrační značkou vozidla.",
        "V plánovaném systému by zakoupená známka byla uložena v centrální databázi, aniž by bylo nutné cokoli vystavovat ve vozidle. Kontrola by probíhala automaticky porovnáváním registračních značek načtených na silnici s registrem platných známek.",
        "Opatření má zajistit, aby všichni řidiči, kteří využívají belgické silnice — včetně návštěvníků ze zahraničí — spravedlivě přispívali na údržbu silniční sítě. Platnou známku by potřebovaly osobní automobily registrované v Belgii i v zahraničí.",
      ],
    },
    prices: {
      title: "Ceny belgické známky",
      intro:
        "Následující ceny jsou orientační a vycházejí z aktuálního plánu. Roční sazby závisejí na vozidle a pro příležitostné uživatele a návštěvníky jsou k dispozici kratší doby platnosti.",
      annualHeading: "Roční sazby a sazby podle vozidla",
      shortHeading: "Krátkodobé doby platnosti",
      columns: { period: "Kategorie", price: "Cena" },
      annual: [
        { label: "Ročně", price: "100 €" },
        { label: "Elektrická vozidla", price: "90 €", note: "Snížená sazba" },
        { label: "Starší vozidla", price: "125 €", note: "Vyšší emise" },
      ],
      short: [
        { label: "1 den", price: "9 €" },
        { label: "10 dní", price: "12 €" },
        { label: "1 měsíc", price: "19 €" },
        { label: "2 měsíce", price: "30 €" },
      ],
      disclaimer:
        "Ceny jsou předběžné a uvedené pouze pro informaci. Konečné sazby potvrdí příslušné belgické úřady před spuštěním.",
    },
    who: {
      title: "Kdo potřebuje belgickou známku?",
      intro:
        "Známka by měla platit pro většinu osobních automobilů. U některých kategorií vozidel se očekává výjimka.",
      requiredTitle: "Vyžadována",
      required: [
        "Osobní automobily do 3,5 tuny",
        "Vozidla registrovaná v Belgii",
        "Vozidla registrovaná v zahraničí",
      ],
      exemptTitle: "Osvobozeno",
      exempt: [
        "Motocykly",
        "Traktory",
        "Autobusy",
        "Vozidla záchranných složek",
        "Vozidla policie a armády",
      ],
    },
    enforcement: {
      title: "Jak bude probíhat kontrola?",
      intro:
        "Dodržování by se kontrolovalo digitálně, bez nutnosti fyzické kontroly nebo mýtných bran.",
      points: [
        {
          title: "Digitální systém",
          description:
            "Každá známka by byla elektronicky evidována v centrálním registru, bez nálepky k vystavení.",
        },
        {
          title: "Propojení s registrační značkou",
          description:
            "Známka by byla propojena s registrační značkou vozidla, takže platnost je vázána na samotnou značku.",
        },
        {
          title: "Kamery ANPR",
          description:
            "Kamery pro automatické rozpoznávání registračních značek (ANPR) by značky načítaly a porovnávaly s registrem.",
        },
        {
          title: "Mobilní kontrolní jednotky",
          description:
            "Mobilní kontrolní jednotky by mohly provádět další kontroly u silnice v celé síti.",
        },
        {
          title: "Možné pokuty",
          description:
            "Jízda bez platné známky může po skončení tolerančního období vést k pokutě.",
        },
      ],
    },
    timeline: {
      title: "Časová osa",
      intro: "Klíčové milníky zavedení belgické známky.",
      steps: [
        {
          date: "2026",
          title: "Přípravná fáze",
          description:
            "Systémy, registrační platforma a kontrolní infrastruktura se připravují a testují.",
        },
        {
          date: "Květen 2027",
          title: "Zavedení známky",
          description:
            "Digitální známka by měla být dostupná a povinná pro osobní automobily na dotčených silnicích.",
        },
        {
          date: "Červenec 2027",
          title: "Začátek kontroly",
          description:
            "Toleranční období by mělo skončit, poté by pokuty mohly platit pro vozidla bez platné známky.",
        },
      ],
    },
  },
  faq: {
    title: "Časté dotazy",
    intro: "Odpovědi na nejčastější dotazy k belgické známce.",
    items: [
      {
        question: "Co je belgická dálniční známka?",
        answer:
          "Belgická dálniční známka je plánovaná digitální dálniční známka pro osobní automobily využívající belgické dálnice a regionální silnice. Je elektronicky propojena s registrační značkou vozidla, takže není třeba vystavovat žádnou fyzickou nálepku.",
      },
      {
        question: "Kdy Belgie známku zavede?",
        answer:
          "Podle aktuálního plánu by digitální známka měla být spuštěna v květnu 2027, přičemž kontrola a pokuty začnou po tolerančním období od července 2027.",
      },
      {
        question: "Potřebují zahraniční auta belgickou známku?",
        answer:
          "Ano. Osobní automobily registrované v zahraničí by potřebovaly platnou známku pro využívání dotčených belgických silnic, stejně jako vozidla registrovaná v Belgii. Pro návštěvníky by byla k dispozici krátkodobá období.",
      },
      {
        question: "Kolik belgická známka stojí?",
        answer:
          "Orientační roční ceny začínají kolem 100 €, s 90 € pro elektrická vozidla a 125 € pro starší vozidla s vyššími emisemi. Krátkodobé možnosti jsou plánovány od 9 € za jeden den až po 30 € za dva měsíce. Konečné sazby budou potvrzeny před spuštěním.",
      },
      {
        question: "Potřebují motocykly belgickou známku?",
        answer:
          "Ne. U motocyklů se očekává osvobození od známky, stejně jako u traktorů, autobusů, vozidel záchranných složek a vozidel policie a armády.",
      },
      {
        question: "Jak se známka kontroluje?",
        answer:
          "Dodržování by se kontrolovalo automaticky pomocí kamer ANPR (automatické rozpoznávání registračních značek) a mobilních kontrolních jednotek. Značky načtené na silnici by se porovnávaly s centrálním registrem platných známek.",
      },
      {
        question: "Co se stane, když pojedete bez známky?",
        answer:
          "Po skončení tolerančního období v červenci 2027 může jízda bez platné známky vést k pokutě. Přesné výše pokut stanoví příslušné belgické úřady.",
      },
    ],
  },
  sources: {
    title: "Zdroje a ověření",
    paragraphs: [
      "Informace na tomto webu vycházejí z veřejně dostupných oznámení belgických úřadů.",
      "Podrobnosti plánované známky se mohou ještě změnit. Před koupí známky si vždy ověřte nejnovější požadavky prostřednictvím oficiálních kanálů.",
    ],
  },
  newsletter: {
    badge: "Zůstaňte informováni",
    title: "Dostávejte novinky o spuštění belgické známky",
    description:
      "Dostanete upozornění, jakmile budou potvrzeny oficiální ceny, termíny a pravidla. Posíláme pouze relevantní novinky o belgické známce.",
    emailLabel: "E-mailová adresa",
    emailPlaceholder: "vy@priklad.cz",
    button: "Přihlásit se",
    consentBefore:
      "Přihlášením souhlasíte s příležitostným zasíláním e-mailových novinek o belgické známce. Viz naše ",
    consentAfter:
      " pro informace o tom, jak ukládáme a používáme vaši e-mailovou adresu. Kdykoli se můžete odhlásit.",
    success: "Děkujeme. Jste přihlášeni k odběru novinek o belgické známce.",
    error: "Něco se pokazilo. Zkuste to prosím za chvíli znovu.",
    submitting: "Přihlašování…",
  },
  footer: {
    description:
      "Tolls.be je nezávislá informační služba o silničním mýtném a belgické digitální známce. Není spojena s žádným státním orgánem.",
    linksTitle: "Informace",
    links: [
      { label: "O nás", href: "#" },
      { label: "Kontakt", href: "mailto:info@tolls.be" },
      { label: "Zásady ochrany osobních údajů", href: "#privacy" },
    ],
    languagesTitle: "Jazyky",
    disclaimerTitle: "Důležité upozornění",
    disclaimer:
      "Tento web poskytuje pouze obecné informace. Systém belgické známky se stále dokončuje a podrobnosti se mohou změnit. Pro potvrzené informace vždy konzultujte oficiální zdroje belgických úřadů.",
    rights: "Všechna práva vyhrazena.",
  },
  breadcrumb: {
    home: "Domů",
    current: "Belgická dálniční známka 2027",
  },
  cookies: {
    bannerTitle: "Předvolby cookies",
    bannerDescription:
      "Používáme nezbytné uložiště pro zapamatování vaší volby cookies. S vaším souhlasem používáváme analytické nástroje ke sledování zobrazení stránek, typů zařízení a přibližných lokalit. Svou volbu můžete kdykoli změnit.",
    privacyLink: "Zásady ochrany osobních údajů",
    acceptAll: "Přijmout vše",
    rejectNonEssential: "Odmítnout nepodstatné",
    managePreferences: "Spravovat předvolby",
    preferencesTitle: "Správa předvoleb cookies",
    savePreferences: "Uložit předvolby",
    close: "Zavřít",
    essentialTitle: "Nezbytné",
    essentialDescription:
      "Ukládá vaši volbu cookies do prohlížeče, abychom se nemuseli ptát při každé návštěvě znovu.",
    essentialAlwaysOn: "Vždy zapnuto",
    analyticsTitle: "Analytika",
    analyticsDescription:
      "Pomáhá nám pochopit, jak návštěvníci web používají, včetně zobrazení stránek, typů zařízení a přibližné polohy. Načítá se pouze po vašem souhlasu.",
    services: {
      vercel:
        "Vercel Analytics — statistiky zobrazení stránek šetrné k soukromí (bez reklamních cookies).",
      google:
        "Google Analytics — volitelné statistiky návštěvníků, pokud je aktivuje vlastník webu.",
      bing:
        "Microsoft Clarity — volitelné informace o relacích pro analytiku související s Bing, pokud je aktivováno.",
    },
    manageLabel: "Spravovat cookies",
  },
};

export default cs;
