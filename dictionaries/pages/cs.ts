import type { PagesDictionary } from "@/lib/i18n/pages-types";
import crossBorder from "./cross-border/cs";
import liefkenshoekTunnel from "./liefkenshoek/cs";

const pages = {
  "belgium-vignette": {
    navLabel: "Belgická známka",
    breadcrumb: "Belgická známka",
    meta: {
      title: "Belgická dálniční známka: kompletní průvodce 2027 | Tolls.be",
      description:
        "Kompletní průvodce belgickou dálniční známkou — plánovanou digitální dálniční známkou pro osobní automobily. Co to je, kdo ji potřebuje, ceny a kontrola.",
    },
    h1: "Belgická dálniční známka",
    intro: [
      "Belgická dálniční známka je plánovaná digitální dálniční známka pro osobní automobily využívající belgické dálnice a regionální silnice. Namísto fyzické nálepky na čelním skle by měla být elektronickou registrací propojenou přímo s vaší registrační značkou.",
      "Tento průvodce shrnuje vše, co je o belgické známce v současnosti známo: co to je, kdo ji bude potřebovat, kolik má stát a jak se bude kontrolovat dodržování.",
    ],
    blocks: [
      {
        heading: "Co je belgická dálniční známka",
        paragraphs: [
          "V plánovaném systému koupě známky zaregistruje vaši registrační značku v centrální databázi. Není třeba žádná nálepka k vystavení ani nic, co by se připevňovalo na čelní sklo.",
          "Protože je známka vázána na registrační značku, platnost putuje s vozidlem. Kontrola by měla být plně automatická — porovnáváním značek načtených na silnici s registrem platných známek.",
        ],
      },
      {
        heading: "Kdo bude belgickou známku potřebovat",
        paragraphs: [
          "Známka by měla platit pro osobní automobily do 3,5 tuny, ať už jsou registrovány v Belgii, nebo v zahraničí.",
        ],
        bullets: [
          "Osobní automobily do 3,5 tuny",
          "Vozidla registrovaná v Belgii",
          "Vozidla registrovaná v zahraničí",
          "Motocykly, traktory, autobusy a vozidla záchranných složek by měly být osvobozeny",
        ],
      },
      {
        heading: "Očekávané ceny",
        paragraphs: [
          "Orientační roční ceny začínají kolem 100 €, se sníženou sazbou pro elektrická vozidla a vyšší sazbou pro starší, více emisní vozy. Pro příležitostné uživatele a návštěvníky jsou plánována kratší období.",
          "Úplný přehled ročních a krátkodobých sazeb najdete na samostatné stránce o ceně belgické známky.",
        ],
      },
      {
        heading: "Jak bude kontrola probíhat",
        paragraphs: [
          "Dodržování by se mělo kontrolovat pomocí kamer ANPR (automatické rozpoznávání registračních značek) a mobilních kontrolních jednotek, bez mýtných bran a fyzických kontrol.",
          "Po skončení tolerančního období může jízda bez platné známky vést k pokutě.",
        ],
      },
    ],
    faq: [
      {
        question: "Kdy bude belgická známka spuštěna?",
        answer:
          "Aktuální plán počítá se spuštěním v květnu 2027, přičemž kontrola a pokuty začnou po tolerančním období od července 2027.",
      },
      {
        question: "Je belgická známka fyzická nálepka?",
        answer:
          "Ne. Měla by to být digitální registrace propojená s vaší registrační značkou, takže ve vozidle není co vystavovat.",
      },
      {
        question: "Potřebují zahraniční auta belgickou známku?",
        answer:
          "Ano. Osobní automobily registrované v zahraničí budou pravděpodobně potřebovat platnou známku, stejně jako belgická vozidla.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Zobrazit všechny informace o belgické známce",
      text: "Prozkoumejte ceny, podmínky, výjimky, časovou osu a časté dotazy na hlavní informační stránce.",
      button: "Zobrazit všechny informace o známce",
    },
  },
  "belgium-vignette-price": {
    navLabel: "Cena známky",
    breadcrumb: "Cena belgické známky",
    meta: {
      title: "Cena belgické dálniční známky 2027 | Roční a krátkodobé sazby | Tolls.be",
      description:
        "Ceny belgické známky pro rok 2027: orientační roční sazby od 100 €, snížená sazba pro elektroauta a krátkodobé možnosti od 9 €. Předběžné údaje.",
    },
    h1: "Cena belgické dálniční známky",
    intro: [
      "Kolik bude belgická známka stát? Tato stránka uvádí orientační ceny belgické známky podle aktuálního plánu a zahrnuje jak roční sazby, tak krátkodobá období pro příležitostné řidiče a návštěvníky.",
      "Všechny údaje jsou předběžné. Konečné sazby potvrdí příslušné belgické úřady před spuštěním.",
    ],
    blocks: [
      {
        heading: "Roční sazby a sazby podle vozidla",
        paragraphs: [
          "Standardní roční známka by měla stát kolem 100 €. Elektrická vozidla by měla mít sníženou sazbu, zatímco starší, více emisní vozy by platily více.",
        ],
      },
      {
        heading: "Krátkodobé známky",
        paragraphs: [
          "Pro návštěvníky a příležitostné uživatele jsou plánována kratší období platnosti — od jednoho dne až po dva měsíce — takže platíte jen za dobu, kdy belgické silnice skutečně využíváte.",
        ],
      },
      {
        heading: "Co ovlivňuje cenu",
        bullets: [
          "Typ vozidla (například elektrické oproti více emisním vozům)",
          "Zvolené období platnosti (roční nebo krátkodobé)",
          "Zda se místo roční známky využijí krátkodobé možnosti pro návštěvníky",
        ],
      },
      {
        heading: "Jsou tyto ceny konečné?",
        paragraphs: [
          "Ne. Zde uvedené ceny jsou orientační a pouze informativní. Před koupí známky vždy ověřte aktuální sazby prostřednictvím oficiálních kanálů.",
        ],
      },
    ],
    faq: [
      {
        question: "Kolik stojí belgická známka ročně?",
        answer:
          "Orientační roční cena je kolem 100 €, s přibližně 90 € pro elektrická vozidla a 125 € pro starší, více emisní vozy. Údaje jsou předběžné.",
      },
      {
        question: "Existuje krátkodobá belgická známka?",
        answer:
          "Ano. Krátkodobá období jsou plánována od 9 € za jeden den, 12 € za deset dní, 19 € za měsíc a 30 € za dva měsíce.",
      },
      {
        question: "Zaplatí elektroauta méně?",
        answer:
          "Snížená sazba pro elektrická vozidla se očekává, ale konečné sazby budou potvrzeny před spuštěním.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Zobrazit všechny informace o belgické známce",
      text: "Prozkoumejte podmínky, výjimky, časovou osu a časté dotazy na hlavní informační stránce.",
      button: "Zobrazit všechny informace o známce",
    },
  },
  "belgium-vignette-foreign-cars": {
    navLabel: "Zahraniční vozidla",
    breadcrumb: "Známka pro zahraniční vozidla",
    meta: {
      title: "Belgická známka pro zahraniční vozidla | Pravidla 2027 | Tolls.be",
      description:
        "Potřebují zahraniční auta belgickou známku? Vozidla registrovaná v zahraničí budou pravděpodobně potřebovat platnou digitální známku, s krátkodobými možnostmi.",
    },
    h1: "Belgická známka pro zahraniční vozidla",
    intro: [
      "Potřebují zahraniční auta belgickou známku? Podle aktuálního plánu ano: osobní automobily registrované v zahraničí budou pravděpodobně potřebovat platnou známku pro využívání dotčených belgických silnic, stejně jako vozidla registrovaná v Belgii.",
      "Tato stránka vysvětluje, co plánovaný systém znamená pro návštěvníky přijíždějící do Belgie ze zahraničí.",
    ],
    blocks: [
      {
        heading: "Známka platí pro zahraniční vozidla",
        paragraphs: [
          "Belgická známka by měla platit bez ohledu na to, kde je auto registrováno. Návštěvníci ze sousedních i vzdálenějších zemí by potřebovali platnou známku stejně jako místní řidiči.",
        ],
      },
      {
        heading: "Krátkodobé možnosti pro návštěvníky",
        paragraphs: [
          "Protože mnoho zahraničních řidičů využívá belgické silnice jen pro krátkou cestu, jsou plánovány krátkodobé známky, aby návštěvníci nemuseli kupovat celý rok.",
        ],
        bullets: [
          "1 den — pro rychlý průjezd nebo jednodenní výlet",
          "10 dní — pro krátkou dovolenou",
          "1 nebo 2 měsíce — pro delší pobyty",
        ],
      },
      {
        heading: "Jak funguje kontrola zahraničních značek",
        paragraphs: [
          "Známka je propojena s registrační značkou a kamery ANPR by měly číst zahraniční značky stejně jako belgické. Ve voze není co vystavovat.",
        ],
      },
      {
        heading: "Než vyrazíte",
        paragraphs: [
          "Podrobnosti plánovaného systému se mohou ještě změnit. Před vjezdem do Belgie vždy ověřte aktuální podmínky a případnou požadovanou známku kupujte prostřednictvím oficiálních kanálů.",
        ],
      },
    ],
    faq: [
      {
        question: "Potřebují zahraniční auta belgickou známku?",
        answer:
          "Ano. Osobní automobily registrované v zahraničí budou pravděpodobně potřebovat platnou známku pro využívání dotčených belgických silnic, stejně jako vozidla registrovaná v Belgii.",
      },
      {
        question: "Mohou si návštěvníci koupit krátkodobou známku?",
        answer:
          "Ano. Jsou plánována krátkodobá období od jednoho dne až po dva měsíce, aby návštěvníci platili jen za dobu, kdy belgické silnice využívají.",
      },
      {
        question: "Jak se kontrolují zahraniční značky?",
        answer:
          "Kamery ANPR by měly číst zahraniční registrační značky a porovnávat je s centrálním registrem platných známek.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Zobrazit všechny informace o belgické známce",
      text: "Prozkoumejte ceny, podmínky, výjimky, časovou osu a časté dotazy na hlavní informační stránce.",
      button: "Zobrazit všechny informace o známce",
    },
  },
  ...crossBorder,
  "liefkenshoek-tunnel": liefkenshoekTunnel,
  "buy-belgium-vignette": {
    navLabel: "Koupit známku",
    breadcrumb: "Koupit belgickou známku",
    meta: {
      title: "Koupit belgickou dálniční známku 2027 | Jak a kde | Tolls.be",
      description:
        "Jak koupit belgickou známku, až se digitální systém spustí v roce 2027. Očekávané kroky, co budete potřebovat a jak zůstat informováni. Zatím není v prodeji.",
    },
    h1: "Jak koupit belgickou dálniční známku",
    intro: [
      "Belgická známka zatím není v prodeji. Digitální systém by měl být spuštěn v květnu 2027 a tato stránka vysvětluje, jak bude koupě známky pravděpodobně probíhat, jakmile bude dostupná.",
      "Protože je známka digitální a propojená s vaší registrační značkou, měl by být proces rychlý a plně online.",
    ],
    blocks: [
      {
        heading: "Známka zatím není v prodeji",
        paragraphs: [
          "V současnosti neexistuje žádná oficiální belgická známka ke koupi. Buďte opatrní u jakéhokoli webu, který tvrdí, že ji prodává před oficiálním spuštěním. Tato stránka bude aktualizována, jakmile budou potvrzeny oficiální prodejní kanály.",
        ],
      },
      {
        heading: "Jak by měla koupě probíhat",
        paragraphs: [
          "Po spuštění byste pravděpodobně zadali registrační značku, zvolili období platnosti, zaplatili online a známka by se elektronicky zaregistrovala — bez zaslané nebo vystavené nálepky.",
        ],
        bullets: [
          "Zadejte registrační značku a zemi registrace",
          "Zvolte roční nebo krátkodobé období",
          "Zaplaťte online",
          "Vaše značka je zaregistrována — nic k vystavení",
        ],
      },
      {
        heading: "Co budete potřebovat",
        bullets: [
          "Registrační značku vašeho vozidla",
          "Zemi, kde je vozidlo registrováno",
          "Platební metodu pro online nákup",
        ],
      },
      {
        heading: "Zůstaňte informováni o spuštění",
        paragraphs: [
          "Přihlaste se níže, abyste dostali upozornění, jakmile budou potvrzeny oficiální ceny, termíny a prodejní kanály belgické známky.",
        ],
      },
    ],
    faq: [
      {
        question: "Mohu si belgickou známku koupit už teď?",
        answer:
          "Ne. Belgická známka zatím není dostupná. Digitální systém by měl být spuštěn v květnu 2027.",
      },
      {
        question: "Kde si ji budu moci koupit?",
        answer:
          "Oficiální prodejní kanály zatím nebyly potvrzeny. Tato stránka bude aktualizována, jakmile je belgické úřady oznámí.",
      },
      {
        question: "Dostanu nálepku?",
        answer:
          "Ne. Známka by měla být digitální a propojená s vaší registrační značkou, takže není co dostávat ani vystavovat.",
      },
    ],
    relatedTitle: "Související informace",
    cta: {
      title: "Zobrazit všechny informace o belgické známce",
      text: "Prozkoumejte ceny, podmínky, výjimky, časovou osu a časté dotazy na hlavní informační stránce.",
      button: "Zobrazit všechny informace o známce",
    },
  },
} satisfies PagesDictionary;

export default pages;
