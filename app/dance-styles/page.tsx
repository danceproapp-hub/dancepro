import type { Metadata } from "next";
import Link from "next/link";
import { DANCE_STYLES, type DanceStyleCategory } from "@/lib/danceStyles";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Dance Styles",
  description:
    "Find a partner for International Latin, International Standard, American Smooth, American Rhythm, Argentine Tango, Salsa, Bachata, and social ballroom on DancePro.",
  openGraph: {
    title: "Dance Styles on DancePro",
    description:
      "Find a partner for International Latin, International Standard, American Smooth, American Rhythm, Argentine Tango, Salsa, Bachata, and more.",
  },
};

const CATEGORIES: { key: DanceStyleCategory; label: string; blurb: string }[] = [
  {
    key: "International",
    label: "International Style",
    blurb: "The international competitive standard danced worldwide.",
  },
  {
    key: "American",
    label: "American Style",
    blurb: "The American syllabus, with more open choreography and solo work.",
  },
  {
    key: "Other",
    label: "Social & Latin Partner Dances",
    blurb: "Social floors, socials, and everything outside the syllabus.",
  },
];

export default function DanceStylesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <Eyebrow>Disciplines</Eyebrow>
        <h1 className="mb-4 font-serif text-4xl text-paper sm:text-5xl">
          Dance styles on DancePro
        </h1>
        <p className="mb-14 max-w-2xl text-lg text-paper-dim">
          Set your styles precisely and DancePro will help you find partners who
          dance them too — whether you're chasing a competitive title or a
          Friday-night social.
        </p>
      </Reveal>

      <div className="flex flex-col gap-16">
        {CATEGORIES.map((category) => (
          <div key={category.key}>
            <Reveal>
              <h2 className="mb-1 font-serif text-2xl text-paper">{category.label}</h2>
              <p className="mb-6 text-sm text-paper-dim">{category.blurb}</p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {DANCE_STYLES.filter((style) => style.category === category.key).map(
                (style, index) => (
                  <Reveal key={style.name} delay={index * 70}>
                    <div className="h-full rounded-xl border border-line p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-ink-raised">
                      <h3 className="mb-2 text-lg text-gold">{style.name}</h3>
                      <p className="text-sm leading-relaxed text-paper-dim">
                        {style.description}
                      </p>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <p className="mb-4 text-paper-dim">
          Don't see your style listed? Join anyway — tell us what you dance and
          help shape the network from the start.
        </p>
        <Link
          href="/#join"
          className="inline-block rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.45)]"
        >
          Join the Founding Members
        </Link>
      </Reveal>
    </div>
  );
}
