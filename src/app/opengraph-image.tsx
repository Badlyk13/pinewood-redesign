import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pinewood Homes — Загородные дома под ключ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a3a2a",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            fontFamily: "serif",
            marginBottom: 16,
          }}
        >
          Pinewood Homes
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Загородные дома под ключ
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: 32,
          }}
        >
          600+ домов &middot; 47 регионов &middot; Гарантия 5 лет
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
