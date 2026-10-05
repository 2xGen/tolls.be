export interface AcquisitionSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Optional ranking / data table under this section. */
  table?: {
    headers: [string, string];
    rows: { query: string; position: string }[];
  };
  /** Optional external CTA after this section. */
  externalLink?: {
    label: string;
    hrefKey: "belgiumVignetteAcquisition";
  };
}

export interface AcquisitionPageContent {
  navLabel: string;
  breadcrumb: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string[];
  sections: AcquisitionSection[];
  closingTitle: string;
  closingText: string[];
  contactTitle: string;
  contactText: string;
  contactEmailLabel: string;
  disclaimer: string;
}

export type AcquisitionDictionary = {
  acquisition: AcquisitionPageContent;
};
