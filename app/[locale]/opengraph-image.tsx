import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Lives inside [locale] because that is where the layout is: a file at
// app/ root never joined the metadata tree, so no og:image was emitted.
// One card for every locale for now — Marcellus has no Cyrillic or CJK
// glyphs, so a localised card would need more vendored fonts.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens, duplicated here because the OG renderer has no access to
// the stylesheet. Keep in step with app/globals.css.
const GROUND = "#101010";
const GOLD = "#E6C17C";
const PAPER = "#F2EFE9";
const MUTED = "#8C867C";

export default async function OpengraphImage() {
  // Both faces are vendored (SIL OFL) so the card renders on-brand with no
  // external font request. Satori cannot parse variable fonts, so Jost is
  // a static Light (300) instance — the body weight.
  const [mark, marcellus, jost] = await Promise.all([
    readFile(join(process.cwd(), "public", "mark.png")),
    readFile(join(process.cwd(), "public", "fonts", "Marcellus-Regular.ttf")),
    readFile(join(process.cwd(), "public", "fonts", "Jost-Light.ttf")),
  ]);
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
          backgroundColor: GROUND,
          color: PAPER,
          fontFamily: "Marcellus",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={104} height={104} alt="" />

        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: GOLD,
            marginTop: 26,
          }}
        >
          DANCEPRO
        </div>

        <div
          style={{
            fontSize: 58,
            letterSpacing: 4,
            textTransform: "uppercase",
            textAlign: "center",
            padding: "0 90px",
            lineHeight: 1.16,
            marginTop: 22,
          }}
        >
          Find Your Next Dance Partner
        </div>

        <div
          style={{
            fontSize: 25,
            color: MUTED,
            marginTop: 26,
            fontFamily: "Jost",
          }}
        >
          The professional network for ballroom &amp; Latin dancers
        </div>

        <div
          style={{
            width: 150,
            height: 1,
            backgroundColor: GOLD,
            opacity: 0.5,
            marginTop: 40,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Marcellus", data: marcellus, weight: 400, style: "normal" },
        { name: "Jost", data: jost, weight: 300, style: "normal" },
      ],
    }
  );
}
