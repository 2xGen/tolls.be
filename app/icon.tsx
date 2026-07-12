import { ImageResponse } from "next/og";
import { FaviconImage } from "@/lib/favicon-image";

export const contentType = "image/png";

/** Multiples of 48px — recommended by Google Search for favicons. */
const ICON_SIZES = [48, 96, 144] as const;

export function generateImageMetadata() {
  return ICON_SIZES.map((size) => ({
    contentType: "image/png" as const,
    size: { width: size, height: size },
    id: String(size),
  }));
}

export default async function Icon({
  id,
}: {
  id: Promise<string | number> | string | number;
}) {
  const resolvedId = await id;
  const size = Number(resolvedId) || 96;
  const borderRadius = Math.round(size * 0.125);

  return new ImageResponse(
    <FaviconImage borderRadius={borderRadius} />,
    { width: size, height: size },
  );
}
