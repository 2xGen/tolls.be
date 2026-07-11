import type { PageKey } from "./pages";

export interface PageBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
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
}

export type PagesDictionary = Record<PageKey, PageContent>;
