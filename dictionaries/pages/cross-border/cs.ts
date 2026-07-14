import type { PagesDictionary } from "@/lib/i18n/pages-types";

const crossBorder: Pick<
  PagesDictionary,
  | "belgium-vignette-netherlands"
  | "belgium-vignette-germany"
  | "belgium-vignette-france"
> = {
  "belgium-vignette-netherlands": {
    navLabel: "Nizozemští řidiči",
    breadcrumb: "Belgická známka pro nizozemské řidiče",
    meta: {
      title: "Belgická známka pro nizozemské řidiče 2027 | Tolls.be",
      description:
        "Průvodce pro řidiče z Nizozemska: belgická známka od května 2027, krátkodobé varianty od 9 €, kontroly ANPR na NL registračních značkách a praktické tipy na hranicích.",
    },
    h1: "Belgická známka pro nizozemské řidiče",
    intro: [
      "Pokud jedete z Nizozemska do Belgie — za prací, na nákupy, na dovolenou nebo v tranzitu — plánovaná digitální belgická známka se od května 2027 vztahuje i na vaše auto, stejně jako na belgické motoristy.",
      "Tato stránka vysvětluje, co mohou nizozemští řidiči očekávat: proč známka vzniká, které krátkodobé varianty vyhovují občasným jízdám a jak budou fungovat automatické kontroly registračních značek.",
    ],
    blocks: [
      {
        heading: "Proč je to důležité pro Nizozemce",
        paragraphs: [
          "Belgie je významná tranzitní země. Velkou část kilometrů na belgických dálnicích a regionálních silnicích najedou zahraniční řidiči, včetně desítek tisíc nizozemských vozidel denně.",
          "Pravidla EU vyžadují, aby Belgie neúčtovala pouze cizincům — známka se však týká každého nizozemského osobního auta na zahrnutých silnicích. Ve zveřejněných plánech není zvláštní režim pro pendlera z jižního Nizozemska.",
        ],
      },
      {
        heading: "Krátké cesty: denní a 10denní známka",
        paragraphs: [
          "Většina nizozemských návštěvníků nepotřebuje roční známku. Krátkodobé produkty jsou určeny pro občasné použití:",
        ],
        bullets: [
          "1 den — cca 9 € (ideální pro jednorázový průjezd nebo výlet)",
          "10 dní — cca 12 € (krátká dovolená nebo vícedenní návštěva)",
          "1 měsíc — cca 19 € · 2 měsíce — cca 30 €",
        ],
      },
      {
        heading: "Typické trasy z Nizozemska",
        bullets: [
          "Jednodenní výlety do Antverp, Gentu nebo belgických nákupních zón",
          "Tranzit do Francie, Lucemburska nebo Německa přes Belgii",
          "Víkendové nebo dovolenkové trasy po E19, E40 nebo E25",
          "Přeshraniční dojíždění z Limburka nebo jiných jižních provincií",
        ],
      },
      {
        heading: "Kontrola nizozemských značek",
        paragraphs: [
          "Známka je digitální a vázaná na registrační značku — bez nálepky na čelním skle. Kamery ANPR na dálnicích a regionálních silnicích mají číst NL značky a porovnávat je s centrálním registrem.",
          "Známku kupte a zaregistrujte před vjezdem na zahrnuté silnice. Po toleranční lhůtě v červenci 2027 může jízda bez platné známky znamenat pokutu.",
        ],
      },
      {
        heading: "Zůstaňte informováni",
        paragraphs: [
          "Plány se mohou ještě změnit před schválením EU a konečnou belgickou legislativou. Aktuality a shrnutí zdrojů: sesterský web BelgiumVignette.be. Tato stránka Tolls.be nabízí stabilní referenční fakta pro nizozemské řidiče.",
        ],
      },
    ],
    faq: [
      {
        question: "Potřebují nizozemská auta belgickou známku?",
        answer:
          "Ano. Nizozemská osobní auta do 3,5 t budou podle plánů od května 2027 potřebovat platnou známku na zahrnutých belgických silnicích.",
      },
      {
        question: "Mohu koupit pouze denní známku?",
        answer:
          "Denní známka za cca 9 € je plánována pro občasné uživatele. Konečné produkty a ceny budou potvrzeny před spuštěním.",
      },
      {
        question: "Existuje sleva pro obyvatele u hranic?",
        answer:
          "Ve zveřejněných plánech není zahrnut zvláštní režim pro pendlera z jižního Nizozemska, ačkoliv politická debata pokračuje.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Úplný referenční průvodce",
      text: "Ceny, výjimky, kontrola a harmonogram na hlavních stránkách.",
      button: "Zobrazit všechny informace o známce",
    },
  },
  "belgium-vignette-germany": {
    navLabel: "Němečtí řidiči",
    breadcrumb: "Belgická známka pro německé řidiče",
    meta: {
      title: "Belgická známka pro německé řidiče 2027 | Tolls.be",
      description:
        "Průvodce pro řidiče z Německa: digitální známka od května 2027, krátkodobé sazby, tranzitní trasy a kontroly ANPR pro DE značky.",
    },
    h1: "Belgická známka pro německé řidiče",
    intro: [
      "Němečtí řidiči používající belgické dálnice nebo regionální silnice — v tranzitu do Francie, Beneluxu, přístavů nebo na dovolenou — budou od května 2027 potřebovat plánovanou digitální belgickou známku.",
      "Tento průvodce pokrývá možnosti platnosti, orientační ceny a vymáhání pro vozidla registrovaná v Německu.",
    ],
    blocks: [
      {
        heading: "Belgie jako tranzitní koridor",
        paragraphs: [
          "Mnoho německých tras do Francie, kanálových přístavů nebo západní Evropy vede přes Belgii. Známka se vztahuje na silnice v systému, nejen na vozidla zastavující v Belgii.",
          "Dotčena jsou auta do 3,5 t. Motocykly, kamiony (samostatný kilometrický systém) a záchranné složky by měly být vyjmuty.",
        ],
      },
      {
        heading: "Jakou dobu platnosti zvolit",
        paragraphs: ["Volte podle frekvence používání belgických silnic:"],
        bullets: [
          "Roční — cca 100 € při pravidelných jízdách v Belgii",
          "10 dní — cca 12 € na dovolenou nebo služební cestu",
          "1 den — cca 9 € pro jednorázový tranzit",
        ],
      },
      {
        heading: "Typické trasy z Německa",
        bullets: [
          "Aachen → Lutych → západ (koridor E40)",
          "Kolín/Düsseldorf → Brusel nebo Antverpy",
          "Sársko → Lucembursko/Belgie",
          "Tranzit do Calais nebo Dunkerque přes Belgii",
        ],
      },
      {
        heading: "Digitální registrace DE značek",
        paragraphs: [
          "Německou značku registrujete online při nákupu. Kontroly ANPR jsou plánovány na dálnicích a vybraných regionálních silnicích. Známka zatím není v prodeji.",
        ],
      },
    ],
    faq: [
      {
        question: "Potřebují německá auta belgickou známku?",
        answer:
          "Ano. Zahraniční osobní auta včetně německých budou podle plánů potřebovat platnou známku na zahrnutých silnicích.",
      },
      {
        question: "Projíždím Belgii jen jeden den — co potřebuji?",
        answer:
          "Denní známka je plánována pro občasné použití. Potvrďte konečné produkty po spuštění systému.",
      },
      {
        question: "Platí rakouská nebo švýcarská známka v Belgii?",
        answer:
          "Ne. Belgie zavádí vlastní digitální systém, oddělený od Rakouska, Švýcarska a jiných zemí.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Úplný referenční průvodce",
      text: "Ceny, výjimky, kontrola a harmonogram na hlavních stránkách.",
      button: "Zobrazit všechny informace o známce",
    },
  },
  "belgium-vignette-france": {
    navLabel: "Francouzští řidiči",
    breadcrumb: "Belgická známka pro francouzské řidiče",
    meta: {
      title: "Belgická známka pro francouzské řidiče 2027 | Tolls.be",
      description:
        "Průvodce pro řidiče z Francie: digitální známka od května 2027, trasy přes Valonsko, krátkodobé ceny a kontrola značek.",
    },
    h1: "Belgická známka pro francouzské řidiče",
    intro: [
      "Francouzští řidiči vjíždějící do Belgie — z Lille a Hauts-de-France nebo dovolenkovými trasami přes Valonsko — budou od května 2027 potřebovat plánovanou digitální známku pro osobní auta.",
      "Tato stránka shrnuje krátkodobé možnosti a dohled pro vozidla registrovaná ve Francii.",
    ],
    blocks: [
      {
        heading: "Přeshraniční cesty z Francie",
        paragraphs: [
          "Valonsko sdílí dlouhou hranici s Francií. Mnoho Francouzů denně přejíždí za prací, rodinou nebo nákupy. Známka by se měla vztahovat na belgické i zahraniční značky na zahrnutých silnicích.",
          "Systém je digitální — francouzští řidiči registrují značku před cestou, bez nálepky na hranicích.",
        ],
      },
      {
        heading: "Krátkodobé známky",
        bullets: [
          "1 den — cca 9 €",
          "10 dní — cca 12 €",
          "1 měsíc — cca 19 € · 2 měsíce — cca 30 €",
          "Roční — cca 100 € (pravidelní uživatelé)",
        ],
      },
      {
        heading: "Časté vstupní body",
        bullets: [
          "Lille → koridor Kortrijk / Gent",
          "Charleville-Mézières → Namur / Lutych",
          "Reims → Brusel přes E411/E42",
          "Dovolenkový provoz na belgické pobřeží přes E40",
        ],
      },
      {
        heading: "Pokuty",
        paragraphs: [
          "Po toleranční lhůtě do července 2027 může jízda bez platné známky znamenat pokuty od 70 € výše. Kontroly kamerami ANPR a mobilními jednotkami čtoucími francouzské značky.",
        ],
      },
    ],
    faq: [
      {
        question: "Potřebují francouzská auta belgickou známku?",
        answer:
          "Ano. Francouzská osobní auta do 3,5 t budou podle plánů od května 2027 potřebovat známku na zahrnutých belgických silnicích.",
      },
      {
        question: "Každý týden přejíždím hranici — který produkt?",
        answer:
          "Pravidelní uživatelé volí často roční známku; občasní návštěvníci 10denní nebo měsíční.",
      },
      {
        question: "Kdy si mohu známku koupit?",
        answer:
          "Prodej zatím není otevřen. Spuštění plánováno na květen 2027. Sledujte zprávy na BelgiumVignette.be.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Úplný referenční průvodce",
      text: "Ceny, výjimky, kontrola a harmonogram na hlavních stránkách.",
      button: "Zobrazit všechny informace o známce",
    },
  },
};

export default crossBorder;
