export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  navLabel: string;
  breadcrumb: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  contactTitle: string;
  contactText: string;
}

export type LegalDictionary = {
  privacy: LegalPageContent;
};
