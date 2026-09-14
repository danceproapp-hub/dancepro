import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public", "mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={104} height={104} alt="" />

        <div
          style={{
            fontSize: 26,
            letterSpacing: 12,
            color: "#C9A24B",
            marginTop: 26,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          DANCEPRO
        </div>

        <div
          style={{
            fontSize: 66,
            textAlign: "center",
            padding: "0 90px",
            lineHeight: 1.12,
            marginTop: 20,
          }}
        >
          Find Your Next Dance Partner
        </div>

        <div
          style={{
            fontSize: 25,
            color: "#A8A6A1",
            marginTop: 26,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          The professional network for ballroom &amp; Latin dancers
        </div>

        <div
          style={{
            width: 150,
            height: 1,
            backgroundColor: "#C9A24B",
            opacity: 0.5,
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
