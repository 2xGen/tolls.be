import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.tagline,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#102A43",
    icons: [
      {
        src: "/icon/96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icon/144",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
