import type { PageContent } from "@/lib/i18n/pages-types";

const liefkenshoekTunnel: PageContent = {
  navLabel: "Tunel Liefkenshoek",
  breadcrumb: "Opłaty tunel Liefkenshoek",
  meta: {
    title: "Opłaty tunel Liefkenshoek 2026 | Antwerpia cennik | Tolls.be",
    description:
      "Oficjalne stawki 2026 tunelu Liefkenshoek koło Antwerpii. Kategoria 1 od 4,40 €. Płatność Teletol, kartą lub gotówką. Belgijskie autostrady są bezpłatne dla samochodów osobowych.",
  },
  h1: "Opłaty za tunel Liefkenshoek",
  lastUpdated: "Ostatnia aktualizacja: lipiec 2026",
  intro: [
    "Belgijskie autostrady i większość dróg regionalnych są bezpłatne dla samochodów osobowych i pojazdów do 3,5 tony. Głównym wyjątkiem jest tunel Liefkenshoek koło Antwerpii — płatna trasa pod Scheldt.",
    "Ta strona wyjaśnia, kto płaci, oficjalne stawki 2026 NV Tunnel Liefkenshoek oraz różnicę między tą opłatą a planowaną od 2027 cyfrową winietą drogową.",
  ],
  tollTable: {
    title: "Oficjalne stawki 2026",
    intro:
      "Tabela odzwierciedla cennik NV Tunnel Liefkenshoek na 2026. Kategoria 1: pojazdy do 3 m wysokości (24/7). Kategoria 2: powyżej 3 m, wyższe stawki dzienne 06:01–21:59.",
    paymentMethod: "Sposób płatności",
    category1: "Kategoria 1 (24/7)",
    category2Night: "Kategoria 2 (22:00–06:00)",
    category2Day: "Kategoria 2 (06:01–21:59)",
    paymentTeletol: "Teletol badge & OBU",
    paymentCard: "Bank / stacja / karta",
    paymentCash: "Gotówka",
    sourceNote:
      "Stawki z oficjalnej strony tunelu Liefkenshoek za {year}. Ceny mogą się zmienić — sprawdź aktualne tarify przed wyjazdem.",
    officialLink: "Oficjalne stawki na liefkenshoektunnel.be →",
  },
  blocks: [
    {
      heading: "Czy belgijskie autostrady są bezpłatne dla aut?",
      paragraphs: [
        "Tak. Dla samochodów osobowych, motocykli i pojazdów do 3,5 t dopuszczalnej masy całkowitej nie ma ogólnej opłaty autostradowej w Belgii.",
        "Ciężarówki do transportu towarów powyżej 3,5 t — i niektóre N1 z kodem BC — podlegają osobnej opłacie kilometrowej Viapass. System ten nie dotyczy zwykłych aut.",
      ],
    },
    {
      heading: "Czym jest tunel Liefkenshoek?",
      paragraphs: [
        "Tunel Liefkenshoek (Liefkenshoektunnel) na zachodzie Antwerpii łączy brzegi Scheldt. Operatorem jest NV Tunnel Liefkenshoek.",
        "W przeciwieństwie do większości autostrad w Belgii, jego użycie jest płatne.",
      ],
    },
    {
      heading: "Kategorie pojazdów i wysokość",
      bullets: [
        "Kategoria 1 — do 3 m: jedna stawka 24/7",
        "Kategoria 2 — powyżej 3 m: niższa noc (22:00–06:00), wyższa dzień (06:01–21:59)",
        "Kampery i wysokie van-y w kategorii 2",
      ],
    },
    {
      heading: "Płatność",
      bullets: [
        "Teletol — najniższa stawka dla aut",
        "Karta — bank, stacja, karta kredytowa",
        "Gotówka — najwyższa opublikowana stawka",
        "OBU — dla ciężarówek; akceptowany w tunelu po najniższej stawce",
      ],
    },
    {
      heading: "Opłaty dla ciężarówek (Viapass)",
      paragraphs: [
        "Opłata kilometrowa Viapass dotyczy pojazdów towarowych powyżej 3,5 t, nie zwykłych aut. Satellic to jeden z sześciu akredytowanych dostawców OBU.",
      ],
    },
    {
      heading: "To nie to samo co winieta 2027",
      paragraphs: [
        "Od maja 2027 Belgia planuje nową cyfrową winietę dla aut — oddzielnie od dzisiejszej opłaty za tunel Liefkenshoek.",
      ],
    },
    {
      heading: "Źródła",
      bullets: ["NV Tunnel Liefkenshoek — liefkenshoektunnel.be", "Viapass — viapass.be"],
    },
  ],
  faq: [
    {
      question: "Czy płacę autostradą w zwykłym aucie?",
      answer: "Nie, zwykle do 3,5 t. Tunel Liefkenshoek koło Antwerpii to znany wyjątek.",
    },
    {
      question: "Ile kosztuje tunel dla zwykłego auta?",
      answer: "Kategoria 1 (do 3 m) 2026: 4,40 € (Teletol/OBU), 6,20 € (karta), 8,00 € (gotówka) — 24/7.",
    },
    {
      question: "Dlaczego drożej w dzień dla wysokich pojazdów?",
      answer: "Kategoria 2 w dzień: 17,60 € / 21,90 € / 25,00 €. W nocy stawki jak kategoria 1.",
    },
    {
      question: "Taki sam cennik dla aut zagranicznych?",
      answer: "Tak — liczy się wysokość i sposób płatności.",
    },
    {
      question: "Czy to ta sama winieta co w 2027?",
      answer: "Nie — tunel to dzisiejsza opłata; winieta 2027 to osobny przyszły system.",
    },
  ],
  relatedTitle: "Powiązane informacje",
  cta: {
    title: "Planowana winieta belgijska (2027)",
    text: "Zobacz ceny i harmonogram w naszym głównym przewodniku.",
    button: "Przewodnik winiety",
  },
};

export default liefkenshoekTunnel;
