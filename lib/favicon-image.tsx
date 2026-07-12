/** Belgian flag stripes for dynamically generated favicons. */
export function FaviconImage({ borderRadius }: { borderRadius?: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        borderRadius: borderRadius ?? 0,
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1, backgroundColor: "#1A1A1A" }} />
      <div style={{ flex: 1, backgroundColor: "#FDDA24" }} />
      <div style={{ flex: 1, backgroundColor: "#C8102E" }} />
    </div>
  );
}
