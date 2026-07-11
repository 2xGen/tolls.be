import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: 6,
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
