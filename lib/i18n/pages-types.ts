import type { PageKey } from "./pages";

export interface PageBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TollTableLabels {
  title: string;
  intro: string;
  paymentMethod: string;
  category1: string;
  category2Night: string;
  category2Day: string;
  paymentTeletol: string;
  paymentCard: string;
  paymentCash: string;
  sourceNote: string;
  officialLink: string;
}

export interface PageContent {
  /** Short label used in navigation, footer and related-page links. */
  navLabel: string;
  /** Current-page label shown in the breadcrumb. */
  breadcrumb: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string[];
  blocks: PageBlock[];
  faq: { question: string; answer: string }[];
  relatedTitle: string;
  cta: {
    title: string;
    text: string;
    button: string;
  };
  /** Optional toll rate table (Liefkenshoek Tunnel page). */
  tollTable?: TollTableLabels;
  /** Visible freshness note, e.g. "Last updated: July 2026". */
  lastUpdated?: string;
}

export type PagesDictionary = Record<PageKey, PageContent>;

/** Partial page set (e.g. cross-border module split across files). */
export type LocalizedPagesDictionary = Partial<PagesDictionary>;
