import type { PagesDictionary } from "@/lib/i18n/pages-types";

const crossBorder: Pick<
  PagesDictionary,
  | "belgium-vignette-netherlands"
  | "belgium-vignette-germany"
  | "belgium-vignette-france"
> = {
  "belgium-vignette-netherlands": {
    navLabel: "Kierowcy holenderscy",
    breadcrumb: "Winieta belgijska dla Holendrów",
    meta: {
      title: "Winieta belgijska dla kierowców holenderskich 2027 | Tolls.be",
      description:
        "Przewodnik dla kierowców z Holandii: winieta belgijska od maja 2027, opcje krótkoterminowe od 9 €, kontrole ANPR tablic NL i praktyczne wskazówki na granicy.",
    },
    h1: "Winieta belgijska dla kierowców holenderskich",
    intro: [
      "Jeśli jeździsz z Holandii do Belgii — do pracy, na zakupy, na wakacje lub w tranzyt — planowana cyfrowa winieta belgijska obowiązywać będzie Twój samochód od maja 2027 r., tak jak holenderskich kierowców.",
      "Ta strona wyjaśnia, czego mogą oczekiwać kierowcy z Holandii: dlaczego winieta powstaje, które opcje krótkoterminowe pasują do okazjonalnych przejazdów i jak działać będą automatyczne kontrole tablic rejestracyjnych.",
    ],
    blocks: [
      {
        heading: "Dlaczego to ważne dla Holendrów",
        paragraphs: [
          "Belgia jest ważnym krajem tranzytowym. Duży udział kilometrów na belgijskich autostradach i drogach regionalnych pokonują kierowcy zagraniczni, w tym dziesiątki tysięcy holenderskich pojazdów dziennie.",
          "Przepisy UE wymagają, by Belgia nie pobierała opłat tylko od obcokrajowców — winieta dotyczy jednak każdego holenderskiego auta osobowego na objętych drogach. W opublikowanych planach nie przewidziano specjalnego regime dla pendlerów z południowej Holandii.",
        ],
      },
      {
        heading: "Krótkie przejazdy: winiety dzienna i 10-dniowa",
        paragraphs: [
          "Większość holenderskich gości nie potrzebuje winiety rocznej. Planowane produkty krótkoterminowe są przeznaczone do okazjonalnego użytku:",
        ],
        bullets: [
          "1 dzień — ok. 9 € (idealnie na jednorazowy przejazd lub wycieczkę)",
          "10 dni — ok. 12 € (krótkie wakacje lub wizyta wielodniowa)",
          "1 miesiąc — ok. 19 € · 2 miesiące — ok. 30 €",
        ],
      },
      {
        heading: "Typowe trasy z Holandii",
        bullets: [
          "Wycieczki jednodniowe do Antwerpii, Gandawy lub belgijskich centrów handlowych",
          "Tranzyt do Francji, Luksemburga lub Niemiec przez Belgię",
          "Weekendowe lub urlopowe trasy E19, E40 lub E25",
          "Dojazdy transgraniczne z Limburgii lub innych południowych prowincji",
        ],
      },
      {
        heading: "Kontrola holenderskich tablic",
        paragraphs: [
          "Winieta jest cyfrowa i powiązana z tablicą — bez naklejki na szybie. Kamery ANPR na autostradach i drogach regionalnych mają odczytywać tablice NL i porównywać je z centralnym rejestrem.",
          "Kup i zarejestruj winietę przed wjazdem na objęte drogi. Po okresie tolerancji w lipcu 2027 jazda bez ważnej winiety może skutkować mandatem.",
        ],
      },
      {
        heading: "Bądź na bieżąco",
        paragraphs: [
          "Plany mogą się jeszcze zmienić przed zatwierdzeniem UE i finalną legislacją belgijską. Aktualności i streszczenia źródeł: siostrzana strona BelgiumVignette.be. Ta strona Tolls.be to stabilny przewodnik referencyjny dla kierowców holenderskich.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy holenderskie auta potrzebują winiety belgijskiej?",
        answer:
          "Tak. Holenderskie auta osobowe do 3,5 t będą według planów potrzebować ważnej winiety na objętych belgijskich drogach od maja 2027 r.",
      },
      {
        question: "Czy mogę kupić tylko winietę jednodniową?",
        answer:
          "Planowana jest winieta jednodniowa za ok. 9 € dla okazjonalnych użytkowników. Ostateczne produkty i ceny zostaną potwierdzone przed startem.",
      },
      {
        question: "Czy jest zniżka dla mieszkańców przy granicy?",
        answer:
          "W obecnych opublikowanych planach nie przewidziano specjalnego regime dla pendlerów z południowej Holandii, choć debata polityczna trwa.",
      },
    ],
    relatedTitle: "Powiązane informacje",
    cta: {
      title: "Pełny przewodnik po winiecie belgijskiej",
      text: "Zobacz ceny, zwolnienia, kontrolę i harmonogram na stronach głównych.",
      button: "Zobacz wszystkie informacje o winiecie",
    },
  },
  "belgium-vignette-germany": {
    navLabel: "Kierowcy niemieccy",
    breadcrumb: "Winieta belgijska dla Niemców",
    meta: {
      title: "Winieta belgijska dla kierowców niemieckich 2027 | Tolls.be",
      description:
        "Przewodnik dla kierowców z Niemiec: cyfrowa winieta od maja 2027, stawki krótkoterminowe, trasy tranzytowe i kontrole ANPR tablic DE.",
    },
    h1: "Winieta belgijska dla kierowców niemieckich",
    intro: [
      "Kierowcy z Niemiec korzystający z belgijskich autostrad lub dróg regionalnych — w tranzyt do Francji, Beneluksu, portów promowych lub na wakacje — będą potrzebować planowanej cyfrowej winiety belgijskiej od maja 2027 r.",
      "Ten przewodnik obejmuje opcje ważności, orientacyjne ceny i egzekwowanie przepisów dla pojazdów zarejestrowanych w Niemczech.",
    ],
    blocks: [
      {
        heading: "Belgia jako korytarz tranzytowy",
        paragraphs: [
          "Wiele niemieckich tras do Francji, portów kanału La Manche lub Europy Zachodniej prowadzi przez Belgię. Winieta dotyczy dróg objętych systemem, nie tylko pojazdów zatrzymujących się w Belgii.",
          "Objęte są auta do 3,5 t. Motocykle, ciężarówki (osobny system kilometrowy) i pojazdy ratunkowe powinny być zwolnione.",
        ],
      },
      {
        heading: "Jaki okres ważności wybrać",
        paragraphs: ["Wybierz według częstotliwości korzystania z dróg belgijskich:"],
        bullets: [
          "Roczna — ok. 100 € przy regularnych przejazdach",
          "10 dni — ok. 12 € na urlop lub podróż służbową",
          "1 dzień — ok. 9 € na jednorazowy tranzyt",
        ],
      },
      {
        heading: "Typowe trasy z Niemiec",
        bullets: [
          "Aachen → Liège → zachód (korytarz E40)",
          "Kolonia/Düsseldorf → Bruksela lub Antwerpia",
          "Saarland → Luksemburg/Belgia",
          "Tranzyt do Calais lub Dunkierki przez Belgię",
        ],
      },
      {
        heading: "Rejestracja cyfrowa tablic DE",
        paragraphs: [
          "Rejestrujesz niemiecką tablicę online przy zakupie. Kontrole ANPR planowane na autostradach i wybranych drogach regionalnych. Winieta nie jest jeszcze dostępna.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy niemieckie auta potrzebują winiety belgijskiej?",
        answer:
          "Tak. Zagraniczne auta osobowe, w tym zarejestrowane w Niemczech, będą według planów potrzebować ważnej winiety na objętych drogach.",
      },
      {
        question: "Przejazd przez Belgię tylko jeden dzień — co potrzebuję?",
        answer:
          "Planowana jest winieta jednodniowa do okazjonalnego użytku. Potwierdź ostateczne produkty po uruchomieniu systemu.",
      },
      {
        question: "Czy moja winieta austriacka lub szwajcarska obejmuje Belgię?",
        answer:
          "Nie. Belgia wprowadza własny cyfrowy system, oddzielny od Austrii, Szwajcarii i innych krajów.",
      },
    ],
    relatedTitle: "Powiązane informacje",
    cta: {
      title: "Pełny przewodnik po winiecie belgijskiej",
      text: "Zobacz ceny, zwolnienia, kontrolę i harmonogram na stronach głównych.",
      button: "Zobacz wszystkie informacje o winiecie",
    },
  },
  "belgium-vignette-france": {
    navLabel: "Kierowcy francuscy",
    breadcrumb: "Winieta belgijska dla Francuzów",
    meta: {
      title: "Winieta belgijska dla kierowców francuskich 2027 | Tolls.be",
      description:
        "Przewodnik dla kierowców z Francji: cyfrowa winieta od maja 2027, trasy przez Walonię, ceny krótkoterminowe i kontrola tablic.",
    },
    h1: "Winieta belgijska dla kierowców francuskich",
    intro: [
      "Kierowcy z Francji wjeżdżający do Belgii — z Lille i Hauts-de-France lub trasami wakacyjnymi przez Walonię — będą potrzebować planowanej cyfrowej winiety dla aut osobowych od maja 2027 r.",
      "Ta strona podsumowuje opcje krótkoterminowe i nadzór dla pojazdów zarejestrowanych we Francji.",
    ],
    blocks: [
      {
        heading: "Podróże transgraniczne z Francji",
        paragraphs: [
          "Walonia dzieli długą granicę z Francją. Wielu Francuzów przekracza ją codziennie do pracy, rodziny lub zakupów. Winieta ma dotyczyć tablic belgijskich i zagranicznych na objętych drogach.",
          "System jest cyfrowy — kierowcy francuscy rejestrują tablicę przed podróżą, bez naklejki na granicy.",
        ],
      },
      {
        heading: "Winiet krótkoterminowych",
        bullets: [
          "1 dzień — ok. 9 €",
          "10 dni — ok. 12 €",
          "1 miesiąc — ok. 19 € · 2 miesiące — ok. 30 €",
          "Roczna — ok. 100 € (regularni użytkownicy)",
        ],
      },
      {
        heading: "Częste punkty wjazdu",
        bullets: [
          "Lille → Kortrijk / Gandawa",
          "Charleville-Mézières → Namur / Liège",
          "Reims → Bruksela przez E411/E42",
          "Ruch wakacyjny na belgijskie wybrzeże przez E40",
        ],
      },
      {
        heading: "Mandaty",
        paragraphs: [
          "Po okresie tolerancji do lipca 2027 jazda bez ważnej winiety może skutkować mandatami od 70 € w górę. Kontrole przez kamery ANPR i jednostki mobilne odczytujące tablice francuskie.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy francuskie auta potrzebują winiety belgijskiej?",
        answer:
          "Tak. Francuskie auta osobowe do 3,5 t będą według planów potrzebować winiety na objętych belgijskich drogach od maja 2027 r.",
      },
      {
        question: "Co tydzień przekraczam granicę — jaki produkt?",
        answer:
          "Regularni użytkownicy często wybierają winietę roczną; okazjonalni goście — 10-dniową lub miesięczną.",
      },
      {
        question: "Kiedy mogę kupić winietę?",
        answer:
          "Sprzedaż nie jest jeszcze otwarta. Start planowany na maj 2027. Śledź wiadomości na BelgiumVignette.be.",
      },
    ],
    relatedTitle: "Powiązane informacje",
    cta: {
      title: "Pełny przewodnik po winiecie belgijskiej",
      text: "Zobacz ceny, zwolnienia, kontrolę i harmonogram na stronach głównych.",
      button: "Zobacz wszystkie informacje o winiecie",
    },
  },
};

export default crossBorder;
