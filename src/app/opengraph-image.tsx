import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ayman Tauhid - Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#161616",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Green accent bar */}
        <div
          style={{
            width: "60px",
            height: "6px",
            background: "#95E78E",
            borderRadius: "3px",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#e5e5e5",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Ayman Tauhid
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#9ca3af",
            lineHeight: 1.4,
          }}
        >
          I design and build software that works well and feels right.
        </div>

        {/* Bottom bar with links */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "auto",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          <span>github.com/AmenTauhid</span>
          <span>·</span>
          <span>linkedin.com/in/aymantauhid</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
