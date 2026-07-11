import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Zásady ochrany osobních údajů",
    breadcrumb: "Zásady ochrany osobních údajů",
    meta: {
      title: "Zásady ochrany osobních údajů | Tolls.be",
      description:
        "Jak Tolls.be shromažďuje a používá osobní údaje: newsletter, cookies, analytika a služby třetích stran.",
    },
    h1: "Zásady ochrany osobních údajů",
    updated: "Poslední aktualizace: 11. července 2026",
    intro: [
      "Tolls.be je nezávislý informační web o belgické digitální dálniční známce. Tyto zásady ochrany osobních údajů vysvětlují, jaké osobní údaje shromažďujeme, proč je používáme a jaká práva máte podle platných předpisů o ochraně údajů, včetně GDPR.",
      "Osobní údaje neprodáváme. Zpracováváme pouze údaje nezbytné k provozu webu, odpovídání na dotazy, zasílání volitelných aktualizací a — s vaším souhlasem — k pochopení využití webu.",
    ],
    sections: [
      {
        heading: "Kdo je odpovědný za vaše údaje?",
        paragraphs: [
          "Správcem údajů pro tento web je Tolls.be, kontakt info@tolls.be. Tolls.be není vládní web a není spojen s belgickými úřady.",
        ],
      },
      {
        heading: "Jaké údaje shromažďujeme",
        bullets: [
          "E-mailová adresa — pokud se přihlásíte k odběru aktualizací o známce",
          "Jazyková preference — odvozená z URL, kterou používáte (např. /en, /cs)",
          "Volba souhlasu s cookies — uložená v prohlížeči, abychom si pamatovali vaši volbu",
          "Údaje o používání — pouze pokud přijmete analytické cookies (zobrazení stránek, přibližná poloha, typ zařízení/prohlížeče)",
          "Technické údaje — standardní serverové a bezpečnostní logy zpracovávané naším poskytovatelem hostingu",
        ],
      },
      {
        heading: "Newsletter a e-mailové aktualizace",
        paragraphs: [
          "Pokud se přihlásíte k odběru aktualizací o belgické známce, shromažďujeme vaši e-mailovou adresu a jazykovou verzi webu, kterou jste použili při registraci.",
          "Váš e-mail používáme pouze k občasnému zasílání aktualizací o belgické známce — například když budou potvrzeny oficiální ceny, termíny nebo pravidla. Nezasíláme nesouvisející marketing.",
          "Po odeslání formuláře je vaše e-mailová adresa bezpečně uložena v naší databázi Supabase (hostované v EU). Přístup k záznamům odběratelů mají pouze oprávnění administrátoři webu. Odhlásit se můžete kdykoli kontaktováním info@tolls.be.",
          "Právním základem zpracování údajů newsletteru je váš souhlas, který udělíte odesláním formuláře. Souhlas můžete kdykoli odvolat.",
        ],
      },
      {
        heading: "Cookies a analytika",
        paragraphs: [
          "Používáme nezbytné úložiště prohlížeče k zapamatování vaší volby souhlasu s cookies. Je to nutné, abychom se vás neptali při každé návštěvě.",
          "Analytické nástroje se načítají pouze pokud souhlasíte prostřednictvím cookie lišty. Pomáhají nám pochopit, jak návštěvníci web používají.",
        ],
        bullets: [
          "Vercel Analytics — statistiky zobrazení stránek s důrazem na soukromí (typ zařízení, země, navštívené stránky). Načítá se pouze se souhlasem.",
          "Google Analytics — volitelné statistiky návštěvnosti, pokud je povolí majitel webu. Načítá se pouze se souhlasem.",
          "Microsoft Clarity — volitelné informace o relacích pro analytiku související s Bingem, pokud je povolena. Načítá se pouze se souhlasem.",
        ],
      },
      {
        heading: "Služby třetích stran",
        paragraphs: [
          "K provozu webu využíváme důvěryhodné zpracovatele. Údaje zpracovávají podle našich pokynů a pouze v rozsahu nutném pro poskytování služby.",
        ],
        bullets: [
          "Vercel — hosting webu, CDN a analytická infrastruktura",
          "Supabase — bezpečné uložení e-mailových adres newsletteru v databázi",
          "Google — volitelná analytika (Google Analytics), pokud je povolena a odsouhlasena",
          "Microsoft — volitelná analytika (Clarity), pokud je povolena a odsouhlasena; ověření webu Bing používá pouze meta tag a nenastavuje analytické cookies",
        ],
      },
      {
        heading: "Affiliate a odchozí odkazy",
        paragraphs: [
          "Tolls.be je především informační web. V budoucnu můžeme odkazovat na služby třetích stran (například oficiální kanály pro nákup známek nebo partnery). Tyto weby mají vlastní zásady ochrany osobních údajů a mohou při návštěvě nastavovat vlastní cookies.",
          "Tyto zásady aktualizujeme, pokud budou zavedeny affiliate vztahy.",
        ],
      },
      {
        heading: "Jak dlouho údaje uchováváme",
        bullets: [
          "E-mailové adresy newsletteru — do odhlášení nebo žádosti o smazání",
          "Preference souhlasu s cookies — do vymazání úložiště prohlížeče nebo aktualizace verze souhlasu",
          "Analytická data — uchovávána podle nastavení jednotlivých poskytovatelů (obvykle agregovaná, omezená doba)",
          "Serverové logy — krátkodobé uchování hostitelem pro bezpečnost a spolehlivost",
        ],
      },
      {
        heading: "Vaše práva",
        paragraphs: [
          "V závislosti na vaší lokalitě můžete mít právo na přístup k údajům, jejich opravu, výmaz nebo omezení zpracování, právo vznést námitku proti zpracování a právo na přenositelnost údajů. Pokud je zpracování založeno na souhlasu, můžete jej kdykoli odvolat bez dopadu na zákonnost dřívějšího zpracování.",
          "Máte také právo podat stížnost u dozorového úřadu. V Belgii je to Úřad pro ochranu osobních údajů (Gegevensbeschermingsautoriteit / APD).",
          "Pro uplatnění svých práv kontaktujte info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Kontakt",
    contactText: "Dotazy k těmto zásadám ochrany osobních údajů nebo k vašim osobním údajům? Kontaktujte nás na",
  },
};

export default legal;
