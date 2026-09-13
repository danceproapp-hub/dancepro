import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          backgroundColor: "#0A0A0B",
          color: "#F5F1EA",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 10,
            color: "#C9A24B",
            marginBottom: 28,
          }}
        >
          DANCEPRO
        </div>
        <div
          style={{
            fontSize: 64,
            textAlign: "center",
            padding: "0 80px",
            lineHeight: 1.15,
          }}
        >
          Find Your Next Dance Partner
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#A8A6A1",
            marginTop: 32,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          The professional network for ballroom &amp; DanceSport dancers
        </div>
      </div>
    ),
    { ...size }
  );
}
