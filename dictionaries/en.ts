import type { Dictionary } from "@/lib/i18n/types";

const en: Dictionary = {
  meta: {
    title: "Belgium Vignette 2027 | Prices, Rules & Updates | Tolls.be",
    description:
      "Everything you need to know about Belgium's digital vignette launching in 2027. Prices, requirements, exemptions, validity periods and enforcement information.",
    ogAlt: "Tolls.be — Belgium vignette 2027 information portal",
  },
  header: {
    subtitle: "Belgium road toll information",
    languageLabel: "Language",
    nav: [
      { label: "Belgium Vignette", href: "#what" },
      { label: "Prices", href: "#prices" },
      { label: "Requirements", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Belgium vignette guide",
    headline: "Belgium Vignette 2027",
    subheadline:
      "Everything you need to know about Belgium's new digital road vignette for passenger cars.",
    supporting:
      "Find information about prices, validity periods, vehicle requirements, exemptions, and enforcement.",
    primaryCta: "View vignette information",
    secondaryCta: "Latest updates",
    disclaimer:
      "Tolls.be is an independent information website. The Belgium vignette system is still being finalised by Belgian authorities.",
    visualAlt:
      "Concept illustration summarising the planned Belgium digital vignette: vehicle type, status, system and expected launch",
    visualTitle: "Digital vignette concept",
    visualSubtitle: "Belgium road vignette · 2027",
    visualBadge: "Preview",
    visualCaption: "Illustrative concept — not an official document",
    visualRows: [
      { label: "Vehicle", value: "Passenger car" },
      { label: "Status", value: "Information preview" },
      { label: "System", value: "Licence plate linked" },
      { label: "Expected launch", value: "May 2027" },
    ],
  },
  infoBox: {
    title: "Belgium digital vignette at a glance",
    note: "Key facts about the planned system. Details may change before the official launch.",
    rows: [
      { label: "Launch", value: "May 2027" },
      { label: "Applies to", value: "Passenger cars up to 3.5 tonnes" },
      { label: "System", value: "Digital vignette linked to licence plate" },
      { label: "Enforcement", value: "ANPR camera checks" },
      { label: "Foreign vehicles", value: "Required" },
    ],
  },
  sections: {
    what: {
      title: "What is the Belgium vignette?",
      paragraphs: [
        "Belgium plans to introduce a digital road vignette for passenger cars using its motorways and regional roads. Instead of a physical sticker on the windscreen, the vignette is expected to be an electronic registration linked directly to the vehicle's licence plate.",
        "Under the planned system, a purchased vignette would be stored in a central database, with nothing to display in the vehicle. Enforcement is expected to be carried out automatically by comparing licence plates read on the road against the register of valid vignettes.",
        "The measure is intended to ensure that all drivers who use Belgian roads — including visitors from abroad — contribute fairly to the maintenance of the road network. Both Belgian-registered and foreign-registered passenger cars are expected to need a valid vignette.",
      ],
    },
    prices: {
      title: "Belgium vignette prices",
      intro:
        "The following prices are indicative and based on current planning. Annual rates depend on the vehicle, and shorter validity periods are available for occasional users and visitors.",
      annualHeading: "Annual and vehicle-based rates",
      shortHeading: "Short-term validity periods",
      columns: { period: "Category", price: "Price" },
      annual: [
        { label: "Annual", price: "€100" },
        { label: "Electric vehicles", price: "€90", note: "Reduced rate" },
        { label: "Older vehicles", price: "€125", note: "Higher-emission" },
      ],
      short: [
        { label: "1 day", price: "€9" },
        { label: "10 days", price: "€12" },
        { label: "1 month", price: "€19" },
        { label: "2 months", price: "€30" },
      ],
      disclaimer:
        "Prices are provisional and shown for information only. Final tariffs will be confirmed by the responsible Belgian authorities before launch.",
    },
    who: {
      title: "Who needs a Belgium vignette?",
      intro:
        "The vignette is expected to apply to most passenger cars. Certain vehicle categories are expected to be exempt.",
      requiredTitle: "Required",
      required: [
        "Passenger cars up to 3.5 tonnes",
        "Belgian-registered vehicles",
        "Foreign-registered vehicles",
      ],
      exemptTitle: "Exempt",
      exempt: [
        "Motorcycles",
        "Tractors",
        "Coaches",
        "Emergency vehicles",
        "Police and defence vehicles",
      ],
    },
    enforcement: {
      title: "How will enforcement work?",
      intro:
        "Compliance is planned to be checked digitally, without the need for physical inspection or toll booths.",
      points: [
        {
          title: "Digital system",
          description:
            "Each vignette would be recorded electronically in a central register, with no sticker to display.",
        },
        {
          title: "Licence plate connection",
          description:
            "The vignette is expected to be linked to the vehicle's licence plate, so validity is tied to the plate itself.",
        },
        {
          title: "ANPR cameras",
          description:
            "Automatic Number Plate Recognition cameras are planned to read plates and check them against the register.",
        },
        {
          title: "Mobile control units",
          description:
            "Mobile enforcement units could perform additional roadside checks across the network.",
        },
        {
          title: "Possible fines",
          description:
            "Driving without a valid vignette may result in a fine once the tolerance period ends.",
        },
      ],
    },
    timeline: {
      title: "Timeline",
      intro: "Key milestones for the introduction of the Belgium vignette.",
      steps: [
        {
          date: "2026",
          title: "Preparation phase",
          description:
            "Systems, registration platform and enforcement infrastructure are prepared and tested.",
        },
        {
          date: "May 2027",
          title: "Vignette introduction",
          description:
            "The digital vignette is expected to become available and required for passenger cars on covered roads.",
        },
        {
          date: "July 2027",
          title: "Enforcement begins",
          description:
            "The tolerance period is expected to end, after which fines could apply to vehicles without a valid vignette.",
        },
      ],
    },
  },
  faq: {
    title: "Frequently asked questions",
    intro: "Answers to the most common questions about the Belgium vignette.",
    items: [
      {
        question: "What is the Belgium vignette?",
        answer:
          "The Belgium vignette is a planned digital road vignette for passenger cars using Belgian motorways and regional roads. It is linked electronically to the vehicle's licence plate, so there is no physical sticker to display.",
      },
      {
        question: "When will Belgium introduce the vignette?",
        answer:
          "According to current planning, the digital vignette is expected to launch in May 2027, with enforcement and fines beginning after a tolerance period from July 2027.",
      },
      {
        question: "Do foreign cars need a Belgium vignette?",
        answer:
          "Yes. Foreign-registered passenger cars are expected to need a valid vignette to use covered Belgian roads, in the same way as Belgian-registered vehicles. Short-term periods will be available for visitors.",
      },
      {
        question: "How much does the Belgium vignette cost?",
        answer:
          "Indicative annual prices start at around €100, with €90 for electric vehicles and €125 for older, higher-emission vehicles. Short-term options are planned from €9 for one day up to €30 for two months. Final tariffs will be confirmed before launch.",
      },
      {
        question: "Do motorcycles need a Belgium vignette?",
        answer:
          "No. Motorcycles are expected to be exempt from the vignette, together with tractors, coaches, emergency vehicles, and police and defence vehicles.",
      },
      {
        question: "How is the vignette checked?",
        answer:
          "Compliance is planned to be checked automatically using ANPR (Automatic Number Plate Recognition) cameras and mobile control units. Plates read on the road would be compared against the central register of valid vignettes.",
      },
      {
        question: "What happens if you drive without a vignette?",
        answer:
          "Once the tolerance period ends in July 2027, driving without a valid vignette may result in a fine. The exact penalty amounts will be set by the responsible Belgian authorities.",
      },
    ],
  },
  sources: {
    title: "Sources & verification",
    paragraphs: [
      "Information on this website is based on publicly available announcements from Belgian authorities.",
      "Details of the planned vignette may still change. Before purchasing a vignette, always verify the latest requirements through official channels.",
    ],
  },
  sisterSite: {
    updatesTitle: "Latest updates",
    updatesText:
      "Breaking news, official announcements and editorial summaries are published on our sister site — not duplicated here.",
    updatesLink: "Follow breaking news on {site} → News & updates",
    updatesNote:
      "Tolls.be is the multilingual reference guide. BelgiumVignette.be covers news and consumer-focused updates in Dutch and other languages.",
    newsLabel: "News & updates on BelgiumVignette.be",
    footerTitle: "Sister site",
    footerGuide: "BelgiumVignette.be — news & consumer guide",
  },
  crossBorder: {
    title: "Cross-border drivers",
    intro:
      "Country-specific guides for drivers entering Belgium from neighbouring countries — prices, short-term vignettes and what to expect.",
  },
  newsletter: {
    badge: "Stay informed",
    title: "Receive updates about the Belgium vignette launch",
    description:
      "Get notified when official prices, dates and rules are confirmed. We only send relevant updates about the Belgium vignette.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    button: "Subscribe",
    consentBefore:
      "By subscribing you agree to receive occasional email updates about the Belgium vignette. See our ",
    consentAfter:
      " for how we store and use your email address. You can unsubscribe at any time.",
    success: "Thank you. You are subscribed to Belgium vignette updates.",
    error: "Something went wrong. Please try again in a moment.",
    submitting: "Subscribing…",
  },
  footer: {
    description:
      "Tolls.be is an independent information service about road tolls and the Belgium digital vignette. It is not affiliated with any government body.",
    linksTitle: "Information",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "mailto:info@tolls.be" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
    languagesTitle: "Languages",
    disclaimerTitle: "Important notice",
    disclaimer:
      "This website provides general information only. The Belgium vignette system is still being finalised and details may change. Always consult official Belgian government sources for confirmed information.",
    rights: "All rights reserved.",
  },
  breadcrumb: {
    home: "Home",
    current: "Belgium Vignette 2027",
  },
  cookies: {
    bannerTitle: "Cookie preferences",
    bannerDescription:
      "We use essential storage to remember your cookie choice. With your consent, we use analytics tools to understand page views, device types and approximate locations. You can change your choice at any time.",
    privacyLink: "Privacy policy",
    acceptAll: "Accept all",
    rejectNonEssential: "Reject non-essential",
    managePreferences: "Manage preferences",
    preferencesTitle: "Manage cookie preferences",
    savePreferences: "Save preferences",
    close: "Close",
    essentialTitle: "Essential",
    essentialDescription:
      "Stores your cookie consent choice in your browser so we do not ask again on every visit.",
    essentialAlwaysOn: "Always on",
    analyticsTitle: "Analytics",
    analyticsDescription:
      "Helps us understand how visitors use the site, including page views, device types and approximate location. Loaded only if you opt in.",
    services: {
      vercel:
        "Vercel Analytics — privacy-friendly page view statistics (no advertising cookies).",
      google:
        "Google Analytics — optional visitor statistics if enabled by the site owner.",
      bing:
        "Microsoft Clarity — optional session insights for Bing-related analytics if enabled.",
    },
    manageLabel: "Manage cookies",
  },
};

export default en;
