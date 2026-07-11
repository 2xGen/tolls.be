export interface NavItem {
  label: string;
  href: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  header: {
    subtitle: string;
    languageLabel: string;
    nav: NavItem[];
    skipToContent: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    disclaimer: string;
    visualAlt: string;
    visualTitle: string;
    visualSubtitle: string;
    visualBadge: string;
    visualCaption: string;
    visualRows: { label: string; value: string }[];
  };
  infoBox: {
    title: string;
    note: string;
    rows: { label: string; value: string }[];
  };
  sections: {
    what: {
      title: string;
      paragraphs: string[];
    };
    prices: {
      title: string;
      intro: string;
      annualHeading: string;
      shortHeading: string;
      columns: { period: string; price: string };
      annual: { label: string; price: string; note?: string }[];
      short: { label: string; price: string }[];
      disclaimer: string;
    };
    who: {
      title: string;
      intro: string;
      requiredTitle: string;
      required: string[];
      exemptTitle: string;
      exempt: string[];
    };
    enforcement: {
      title: string;
      intro: string;
      points: { title: string; description: string }[];
    };
    timeline: {
      title: string;
      intro: string;
      steps: { date: string; title: string; description: string }[];
    };
  };
  faq: {
    title: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
  sources: {
    title: string;
    paragraphs: string[];
  };
  newsletter: {
    badge: string;
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    button: string;
    consent: string;
    success: string;
  };
  footer: {
    description: string;
    linksTitle: string;
    links: NavItem[];
    languagesTitle: string;
    disclaimerTitle: string;
    disclaimer: string;
    rights: string;
  };
  breadcrumb: {
    home: string;
    current: string;
  };
}
