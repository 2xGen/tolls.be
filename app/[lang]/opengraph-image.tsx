import { ImageResponse } from "next/og";
import { i18n } from "@/lib/i18n/config";

export const alt = "Tolls.be — Belgium vignette 2027 information portal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#102A43",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 18,
              height: 44,
              backgroundColor: "#C8102E",
              borderRadius: 3,
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            Tolls.be
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#9FB3C8",
            }}
          >
            Road user information
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Belgium Vignette 2027
          </div>
          <div style={{ fontSize: 32, color: "#BCCCDC", maxWidth: 900 }}>
            Prices, requirements, exemptions and enforcement for Belgium&apos;s
            new digital road vignette.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#9FB3C8",
            borderTop: "2px solid #274b6b",
            paddingTop: 24,
          }}
        >
          Independent Belgium road toll information
        </div>
      </div>
    ),
    { ...size },
  );
}
