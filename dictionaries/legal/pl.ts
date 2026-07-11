import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Polityka prywatności",
    breadcrumb: "Polityka prywatności",
    meta: {
      title: "Polityka prywatności | Tolls.be",
      description:
        "Jak Tolls.be zbiera i wykorzystuje dane osobowe: newsletter, pliki cookie, analityka i usługi stron trzecich.",
    },
    h1: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: 11 lipca 2026",
    intro: [
      "Tolls.be to niezależna strona informacyjna o belgijskiej cyfrowej winiecie. Niniejsza polityka prywatności wyjaśnia, jakie dane osobowe zbieramy, dlaczego je wykorzystujemy oraz jakie prawa przysługują Ci na mocy obowiązujących przepisów o ochronie danych, w tym RODO.",
      "Nie sprzedajemy danych osobowych. Przetwarzamy wyłąnie dane niezbędne do działania strony, odpowiadania na zapytania, wysyłania opcjonalnych aktualizacji oraz — za Twoją zgodą — zrozumienia sposobu korzystania ze strony.",
    ],
    sections: [
      {
        heading: "Kto odpowiada za Twoje dane?",
        paragraphs: [
          "Administratorem danych dla tej strony jest Tolls.be, kontakt: info@tolls.be. Tolls.be nie jest stroną rządową i nie jest powiązana z belgijskimi władzami.",
        ],
      },
      {
        heading: "Jakie dane zbieramy",
        bullets: [
          "Adres e-mail — jeśli zapiszesz się na aktualizacje o winiecie",
          "Preferencja językowa — wynikająca z używanego adresu URL (np. /en, /pl)",
          "Wybór zgody na pliki cookie — przechowywany w przeglądarce, aby pamiętać Twoją decyzję",
          "Dane użytkowania — tylko jeśli zaakceptujesz pliki cookie analityczne (wyświetlenia stron, przybliżona lokalizacja, typ urządzenia/przeglądarki)",
          "Dane techniczne — standardowe logi serwera i bezpieczeństwa przetwarzane przez dostawcę hostingu",
        ],
      },
      {
        heading: "Newsletter i aktualizacje e-mail",
        paragraphs: [
          "Jeśli zapiszesz się na aktualizacje o belgijskiej winiecie, zbieramy Twój adres e-mail oraz wersję językową strony używaną przy zapisie.",
          "Używamy Twojego e-maila wyłącznie do okazjonalnego wysyłania aktualizacji o belgijskiej winiecie — na przykład gdy zostaną potwierdzone oficjalne ceny, daty lub zasady. Nie wysyłamy niepowiązanych materiałów marketingowych.",
          "Po wysłaniu formularza Twój adres e-mail jest bezpiecznie przechowywany w naszej bazie danych Supabase (hostowanej w UE). Dostęp do zapisów mają wyłącznie upoważnieni administratorzy strony. Możesz wypisać się w dowolnym momencie, kontaktując info@tolls.be.",
          "Podstawą prawną przetwarzania danych newslettera jest Twoja zgoda, udzielana przez wysłanie formularza. Możesz wycofać zgodę w dowolnym momencie.",
        ],
      },
      {
        heading: "Pliki cookie i analityka",
        paragraphs: [
          "Używamy niezbędnego magazynu przeglądarki, aby zapamiętać Twoją zgodę na pliki cookie. Jest to konieczne, aby nie pytać Cię przy każdej wizycie.",
          "Narzędzia analityczne są ładowane tylko wtedy, gdy wyrazisz zgodę w banerze cookie. Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony.",
        ],
        bullets: [
          "Vercel Analytics — statystyki wyświetleń stron zorientowane na prywatność (typ urządzenia, kraj, odwiedzone strony). Ładowane tylko za zgodą.",
          "Google Analytics — opcjonalne statystyki odwiedzin, jeśli włączone przez właściciela strony. Ładowane tylko za zgodą.",
          "Microsoft Clarity — opcjonalne informacje o sesjach dla analityki związanej z Bingiem, jeśli włączone. Ładowane tylko za zgodą.",
        ],
      },
      {
        heading: "Usługi stron trzecich",
        paragraphs: [
          "Korzystamy z zaufanych podmiotów przetwarzających dane w celu obsługi strony. Przetwarzają dane zgodnie z naszymi instrukcjami i tylko w zakresie niezbędnym do świadczenia usługi.",
        ],
        bullets: [
          "Vercel — hosting strony, CDN i infrastruktura analityczna",
          "Supabase — bezpieczne przechowywanie adresów e-mail newslettera w bazie danych",
          "Google — opcjonalna analityka (Google Analytics), jeśli włączona i zaakceptowana",
          "Microsoft — opcjonalna analityka (Clarity), jeśli włączona i zaakceptowana; weryfikacja witryny Bing używa wyłącznie meta tagu i nie ustawia plików cookie analitycznych",
        ],
      },
      {
        heading: "Linki partnerskie i zewnętrzne",
        paragraphs: [
          "Tolls.be to przede wszystkim strona informacyjna. W przyszłości możemy linkować do usług stron trzecich (np. oficjalnych kanałów zakupu winiet lub partnerów). Te strony mają własne polityki prywatności i mogą ustawiać własne pliki cookie podczas wizyty.",
          "Zaktualizujemy niniejszą politykę, jeśli zostaną wprowadzone relacje partnerskie.",
        ],
      },
      {
        heading: "Jak długo przechowujemy dane",
        bullets: [
          "Adresy e-mail newslettera — do momentu wypisania lub prośby o usunięcie",
          "Preferencja zgody na pliki cookie — do wyczyszczenia magazynu przeglądarki lub aktualizacji wersji zgody",
          "Dane analityczne — przechowywane zgodnie z ustawieniami każdego dostawcy (zazwyczaj zagregowane, ograniczony okres)",
          "Logi serwera — krótkoterminowe przechowywanie przez hosta w celach bezpieczeństwa i niezawodności",
        ],
      },
      {
        heading: "Twoje prawa",
        paragraphs: [
          "W zależności od lokalizacji możesz mieć prawo dostępu do danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, sprzeciwu wobec przetwarzania oraz przenoszenia danych. Gdy przetwarzanie opiera się na zgodzie, możesz ją wycofać w dowolnym momencie bez wpływu na legalność wcześniejszego przetwarzania.",
          "Masz również prawo złożyć skargę do organu nadzorczego. W Belgii jest to Urząd Ochrony Danych (Gegevensbeschermingsautoriteit / APD).",
          "Aby skorzystać ze swoich praw, skontaktuj się z info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Kontakt",
    contactText: "Pytania dotyczące tej polityki prywatności lub Twoich danych osobowych? Skontaktuj się z nami pod adresem",
  },
};

export default legal;
