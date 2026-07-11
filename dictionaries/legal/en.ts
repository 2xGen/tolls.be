import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    meta: {
      title: "Privacy Policy | Tolls.be",
      description:
        "How Tolls.be collects and uses personal data: newsletter sign-ups, cookies, analytics and third-party services.",
    },
    h1: "Privacy Policy",
    updated: "Last updated: 11 July 2026",
    intro: [
      "Tolls.be is an independent information website about the Belgium digital vignette. This privacy policy explains what personal data we collect, why we use it, and what rights you have under applicable data protection law, including the GDPR.",
      "We do not sell personal data. We only process data that is necessary to operate the website, respond to enquiries, send optional updates, and — with your consent — understand how the site is used.",
    ],
    sections: [
      {
        heading: "Who is responsible for your data?",
        paragraphs: [
          "The data controller for this website is Tolls.be, contactable at info@tolls.be. Tolls.be is not a government website and is not affiliated with Belgian authorities.",
        ],
      },
      {
        heading: "What data we collect",
        bullets: [
          "Email address — if you subscribe to vignette updates",
          "Language preference — inferred from the page URL you use (e.g. /en, /nl)",
          "Cookie consent choice — stored in your browser so we remember your preference",
          "Usage data — only if you accept analytics cookies (page views, approximate location, device/browser type)",
          "Technical data — standard server and security logs processed by our hosting provider",
        ],
      },
      {
        heading: "Newsletter and email updates",
        paragraphs: [
          "If you subscribe to receive updates about the Belgium vignette, we collect your email address and the language version of the site you used when signing up.",
          "We use your email only to send occasional updates about the Belgium vignette — for example when official prices, dates or rules are confirmed. We do not send unrelated marketing.",
          "When you submit the form, your email address is stored securely in our Supabase database (hosted in the EU). Only authorised site administrators can access subscriber records. You can unsubscribe at any time by contacting info@tolls.be.",
          "The legal basis for processing newsletter data is your consent, which you give by submitting the form. You may withdraw consent at any time.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "We use essential browser storage to remember your cookie consent choice. This is required so we do not ask you on every visit.",
          "Analytics tools are loaded only if you opt in via the cookie banner. These help us understand how visitors use the site.",
        ],
        bullets: [
          "Vercel Analytics — privacy-oriented page view statistics (device type, country, pages visited). Loaded only with consent.",
          "Google Analytics — optional visitor statistics if enabled by the site owner. Loaded only with consent.",
          "Microsoft Clarity — optional session insights for Bing-related analytics if enabled. Loaded only with consent.",
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "We use trusted processors to operate the website. They process data on our instructions and only as needed to provide their service.",
        ],
        bullets: [
          "Vercel — website hosting, CDN and analytics infrastructure",
          "Supabase — secure database storage for newsletter email addresses",
          "Google — optional analytics (Google Analytics) if enabled and consented to",
          "Microsoft — optional analytics (Clarity) if enabled and consented to; Bing site verification uses a meta tag only and does not set analytics cookies",
        ],
      },
      {
        heading: "Affiliate and outbound links",
        paragraphs: [
          "Tolls.be is primarily an information website. In the future we may link to third-party services (for example official vignette purchase channels or partners). Those websites have their own privacy policies and may set their own cookies when you visit them.",
          "We will update this policy if affiliate relationships are introduced.",
        ],
      },
      {
        heading: "How long we keep data",
        bullets: [
          "Newsletter email addresses — until you unsubscribe or ask us to delete them",
          "Cookie consent preference — until you clear browser storage or we update the consent version",
          "Analytics data — retained according to each provider's settings (typically aggregated, limited retention)",
          "Server logs — short-term retention by our host for security and reliability",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on your location, you may have the right to access, correct, delete or restrict processing of your personal data, to object to processing, and to data portability. Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of prior processing.",
          "You also have the right to lodge a complaint with a supervisory authority. In Belgium, this is the Data Protection Authority (Gegevensbeschermingsautoriteit / APD).",
          "To exercise your rights, contact info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactText: "Questions about this privacy policy or your personal data? Contact us at",
  },
};

export default legal;
