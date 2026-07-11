import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/** Shared Open Graph / Twitter image for all public pages. */
export function getSharedOgMetadata(): Pick<Metadata, "openGraph" | "twitter"> {
  const { ogImage } = siteConfig;

  return {
    openGraph: {
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage.url],
    },
  };
}
