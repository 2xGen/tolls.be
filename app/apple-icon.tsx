import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "#1A1A1A" }} />
        <div style={{ flex: 1, backgroundColor: "#FDDA24" }} />
        <div style={{ flex: 1, backgroundColor: "#C8102E" }} />
      </div>
    ),
    { ...size },
  );
}
