import type { Dictionary } from "@/lib/i18n/types";

const pl: Dictionary = {
  meta: {
    title: "Belgijska winieta 2027 | Ceny, zasady i aktualności | Tolls.be",
    description:
      "Wszystko, co musisz wiedzieć o belgijskiej cyfrowej winiecie wprowadzanej w 2027 roku. Ceny, warunki, zwolnienia, okresy ważności i kontrola.",
    ogAlt: "Tolls.be — portal informacyjny o belgijskiej winiecie 2027",
  },
  header: {
    subtitle: "Informacje o belgijskich opłatach drogowych",
    languageLabel: "Język",
    skipToContent: "Przejdź do treści głównej",
    nav: [
      { label: "Belgijska winieta", href: "#what" },
      { label: "Ceny", href: "#prices" },
      { label: "Wymagania", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Przewodnik po belgijskiej winiecie",
    headline: "Belgijska winieta 2027",
    subheadline:
      "Wszystko, co musisz wiedzieć o nowej belgijskiej cyfrowej winiecie drogowej dla samochodów osobowych.",
    supporting:
      "Znajdź informacje o cenach, okresach ważności, wymaganiach dotyczących pojazdów, zwolnieniach i kontroli.",
    primaryCta: "Zobacz informacje o winiecie",
    secondaryCta: "Najnowsze aktualności",
    disclaimer:
      "Tolls.be to niezależna strona informacyjna. System belgijskiej winiety jest wciąż finalizowany przez belgijskie władze.",
    visualAlt:
      "Ilustracja koncepcyjna przedstawiająca planowaną belgijską cyfrową winietę: typ pojazdu, status, system i planowany start",
    visualTitle: "Koncepcja cyfrowej winiety",
    visualSubtitle: "Belgijska winieta drogowa · 2027",
    visualBadge: "Podgląd",
    visualCaption: "Ilustracja poglądowa — nie jest to dokument urzędowy",
    visualRows: [
      { label: "Pojazd", value: "Samochód osobowy" },
      { label: "Status", value: "Podgląd informacyjny" },
      { label: "System", value: "Powiązany z tablicą rejestracyjną" },
      { label: "Planowany start", value: "Maj 2027" },
    ],
  },
  infoBox: {
    title: "Belgijska cyfrowa winieta w skrócie",
    note: "Najważniejsze fakty o planowanym systemie. Szczegóły mogą się zmienić przed oficjalnym startem.",
    rows: [
      { label: "Start", value: "Maj 2027" },
      { label: "Dotyczy", value: "Samochodów osobowych do 3,5 tony" },
      {
        label: "System",
        value: "Cyfrowa winieta powiązana z tablicą rejestracyjną",
      },
      { label: "Kontrola", value: "Kontrola kamerami ANPR" },
      { label: "Pojazdy zagraniczne", value: "Wymagana" },
    ],
  },
  sections: {
    what: {
      title: "Czym jest belgijska winieta?",
      paragraphs: [
        "Belgia planuje wprowadzić cyfrową winietę drogową dla samochodów osobowych korzystających z autostrad i dróg regionalnych. Zamiast fizycznej naklejki na szybie winieta ma być elektroniczną rejestracją powiązaną bezpośrednio z tablicą rejestracyjną pojazdu.",
        "W planowanym systemie zakupiona winieta byłaby przechowywana w centralnej bazie danych, bez konieczności umieszczania czegokolwiek w pojeździe. Kontrola odbywałaby się automatycznie poprzez porównywanie tablic rejestracyjnych odczytanych na drodze z rejestrem ważnych winiet.",
        "Celem tego rozwiązania jest zapewnienie, aby wszyscy kierowcy korzystający z belgijskich dróg — w tym goście z zagranicy — sprawiedliwie przyczyniali się do utrzymania sieci drogowej. Winiety miałyby wymagać zarówno pojazdy zarejestrowane w Belgii, jak i za granicą.",
      ],
    },
    prices: {
      title: "Ceny belgijskiej winiety",
      intro:
        "Poniższe ceny są orientacyjne i oparte na aktualnych planach. Stawki roczne zależą od pojazdu, a dla użytkowników okazjonalnych i gości dostępne są krótsze okresy ważności.",
      annualHeading: "Stawki roczne i według pojazdu",
      shortHeading: "Krótkie okresy ważności",
      columns: { period: "Kategoria", price: "Cena" },
      annual: [
        { label: "Rocznie", price: "100 €" },
        { label: "Pojazdy elektryczne", price: "90 €", note: "Stawka obniżona" },
        { label: "Starsze pojazdy", price: "125 €", note: "Wyższa emisja" },
      ],
      short: [
        { label: "1 dzień", price: "9 €" },
        { label: "10 dni", price: "12 €" },
        { label: "1 miesiąc", price: "19 €" },
        { label: "2 miesiące", price: "30 €" },
      ],
      disclaimer:
        "Ceny są tymczasowe i podane wyłącznie w celach informacyjnych. Ostateczne stawki zostaną potwierdzone przez właściwe belgijskie władze przed startem.",
    },
    who: {
      title: "Kto potrzebuje belgijskiej winiety?",
      intro:
        "Winieta miałaby dotyczyć większości samochodów osobowych. Niektóre kategorie pojazdów mają być zwolnione.",
      requiredTitle: "Wymagana",
      required: [
        "Samochody osobowe do 3,5 tony",
        "Pojazdy zarejestrowane w Belgii",
        "Pojazdy zarejestrowane za granicą",
      ],
      exemptTitle: "Zwolnione",
      exempt: [
        "Motocykle",
        "Ciągniki",
        "Autokary",
        "Pojazdy służb ratunkowych",
        "Pojazdy policji i wojska",
      ],
    },
    enforcement: {
      title: "Jak będzie działać kontrola?",
      intro:
        "Zgodność byłaby sprawdzana cyfrowo, bez kontroli fizycznej i punktów poboru opłat.",
      points: [
        {
          title: "System cyfrowy",
          description:
            "Każda winieta byłaby rejestrowana elektronicznie w centralnym rejestrze, bez naklejki do okazania.",
        },
        {
          title: "Powiązanie z tablicą rejestracyjną",
          description:
            "Winieta byłaby powiązana z tablicą rejestracyjną pojazdu, więc ważność jest przypisana do samej tablicy.",
        },
        {
          title: "Kamery ANPR",
          description:
            "Kamery automatycznego rozpoznawania tablic rejestracyjnych (ANPR) odczytywałyby tablice i porównywały je z rejestrem.",
        },
        {
          title: "Mobilne jednostki kontrolne",
          description:
            "Mobilne jednostki kontrolne mogłyby przeprowadzać dodatkowe kontrole przy drodze w całej sieci.",
        },
        {
          title: "Możliwe kary",
          description:
            "Jazda bez ważnej winiety może skutkować karą po zakończeniu okresu tolerancji.",
        },
      ],
    },
    timeline: {
      title: "Harmonogram",
      intro: "Najważniejsze etapy wprowadzenia belgijskiej winiety.",
      steps: [
        {
          date: "2026",
          title: "Faza przygotowań",
          description:
            "Systemy, platforma rejestracji i infrastruktura kontroli są przygotowywane i testowane.",
        },
        {
          date: "Maj 2027",
          title: "Wprowadzenie winiety",
          description:
            "Cyfrowa winieta ma stać się dostępna i obowiązkowa dla samochodów osobowych na objętych drogach.",
        },
        {
          date: "Lipiec 2027",
          title: "Początek kontroli",
          description:
            "Okres tolerancji ma się zakończyć, po czym kary mogłyby dotyczyć pojazdów bez ważnej winiety.",
        },
      ],
    },
  },
  faq: {
    title: "Najczęściej zadawane pytania",
    intro: "Odpowiedzi na najczęstsze pytania dotyczące belgijskiej winiety.",
    items: [
      {
        question: "Czym jest belgijska winieta?",
        answer:
          "Belgijska winieta to planowana cyfrowa winieta drogowa dla samochodów osobowych korzystających z belgijskich autostrad i dróg regionalnych. Jest elektronicznie powiązana z tablicą rejestracyjną pojazdu, więc nie trzeba okazywać fizycznej naklejki.",
      },
      {
        question: "Kiedy Belgia wprowadzi winietę?",
        answer:
          "Zgodnie z aktualnymi planami cyfrowa winieta ma zostać wprowadzona w maju 2027 r., a kontrola i kary rozpoczną się po okresie tolerancji od lipca 2027 r.",
      },
      {
        question: "Czy samochody zagraniczne potrzebują belgijskiej winiety?",
        answer:
          "Tak. Samochody osobowe zarejestrowane za granicą miałyby potrzebować ważnej winiety, aby korzystać z objętych belgijskich dróg, tak samo jak pojazdy zarejestrowane w Belgii. Dla gości dostępne byłyby krótkie okresy.",
      },
      {
        question: "Ile kosztuje belgijska winieta?",
        answer:
          "Orientacyjne ceny roczne zaczynają się od około 100 €, z 90 € dla pojazdów elektrycznych i 125 € dla starszych pojazdów o wyższej emisji. Opcje krótkoterminowe planowane są od 9 € za jeden dzień do 30 € za dwa miesiące. Ostateczne stawki zostaną potwierdzone przed startem.",
      },
      {
        question: "Czy motocykle potrzebują belgijskiej winiety?",
        answer:
          "Nie. Motocykle mają być zwolnione z winiety, podobnie jak ciągniki, autokary, pojazdy służb ratunkowych oraz pojazdy policji i wojska.",
      },
      {
        question: "Jak sprawdzana jest winieta?",
        answer:
          "Zgodność miałaby być sprawdzana automatycznie za pomocą kamer ANPR (automatyczne rozpoznawanie tablic rejestracyjnych) i mobilnych jednostek kontrolnych. Tablice odczytane na drodze byłyby porównywane z centralnym rejestrem ważnych winiet.",
      },
      {
        question: "Co się stanie, jeśli jedziesz bez winiety?",
        answer:
          "Po zakończeniu okresu tolerancji w lipcu 2027 r. jazda bez ważnej winiety może skutkować karą. Dokładne kwoty kar zostaną ustalone przez właściwe belgijskie władze.",
      },
    ],
  },
  sources: {
    title: "Źródła i weryfikacja",
    paragraphs: [
      "Informacje na tej stronie opierają się na publicznie dostępnych zapowiedziach belgijskich władz.",
      "Szczegóły planowanej winiety mogą się jeszcze zmienić. Przed zakupem winiety zawsze sprawdzaj najnowsze wymagania w oficjalnych kanałach.",
    ],
  },
  newsletter: {
    badge: "Bądź na bieżąco",
    title: "Otrzymuj aktualności o starcie belgijskiej winiety",
    description:
      "Otrzymasz powiadomienie, gdy oficjalne ceny, terminy i zasady zostaną potwierdzone. Wysyłamy tylko istotne aktualności o belgijskiej winiecie.",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "ty@przyklad.pl",
    button: "Zapisz się",
    consent:
      "Zapisując się, zgadzasz się na otrzymywanie okazjonalnych aktualności e-mail. Możesz zrezygnować w dowolnym momencie.",
    success: "Dziękujemy. Sprawdź swoją skrzynkę odbiorczą, aby potwierdzić zapis.",
  },
  footer: {
    description:
      "Tolls.be to niezależny serwis informacyjny o opłatach drogowych i belgijskiej cyfrowej winiecie. Nie jest powiązany z żadnym organem rządowym.",
    linksTitle: "Informacje",
    links: [
      { label: "O nas", href: "#" },
      { label: "Kontakt", href: "mailto:info@tolls.be" },
      { label: "Polityka prywatności", href: "#" },
    ],
    languagesTitle: "Języki",
    disclaimerTitle: "Ważna informacja",
    disclaimer:
      "Ta strona zawiera wyłącznie informacje ogólne. System belgijskiej winiety jest wciąż finalizowany i szczegóły mogą się zmienić. Zawsze sprawdzaj oficjalne źródła belgijskich władz w celu uzyskania potwierdzonych informacji.",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  breadcrumb: {
    home: "Strona główna",
    current: "Belgijska winieta 2027",
  },
};

export default pl;
