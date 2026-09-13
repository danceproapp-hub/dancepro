import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { getWaitlistCount } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const HOW_IT_WORKS_STEPS = [
  {
    title: "Create your profile",
    description: "Your styles, role, level, and where you dance — built for dancers, not a dating bio.",
  },
  {
    title: "Search or get discovered",
    description: "Find compatible dancers nearby or across the world, or let them find you.",
  },
  {
    title: "Connect",
    description: "Send a connection request. They accept. No noise, no cold DMs into the void.",
  },
  {
    title: "Message inside the app",
    description: "Coordinate practice, competitions, and partnerships in one place.",
  },
];

const BENEFITS = [
  {
    title: "Founding Member badge",
    description: "A permanent mark on your profile showing you were here first.",
  },
  {
    title: "Early access",
    description: "Into the platform before it opens to the public.",
  },
  {
    title: "Special launch pricing",
    description: "Locked in for as long as you remain a member.",
  },
  {
    title: "Exclusive events",
    description: "Founding member meetups and DancePro-hosted socials.",
  },
  {
    title: "A vote on what we build first",
    description: "Founding members help decide the feature roadmap.",
  },
];

export default async function HomePage() {
  let count = 0;
  try {
    count = await getWaitlistCount();
  } catch {
    count = 0;
  }

  return (
    <div>
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 pt-20 pb-16 text-center sm:pt-28">
        <h1 className="font-serif text-4xl leading-tight text-paper sm:text-6xl">
          Find Your Next Dance Partner.
        </h1>
        <p className="max-w-2xl text-lg text-paper-dim sm:text-xl">
          The professional network connecting ballroom and DanceSport dancers
          worldwide.
        </p>
        <a
          href="#join"
          className="rounded-full bg-gold px-8 py-4 font-medium text-ink transition hover:bg-gold-dim"
        >
          Join the Founding Members
        </a>
        {count >= 25 && (
          <p className="text-sm text-paper-dim">
            Join {count.toLocaleString()} dancers already on the list.
          </p>
        )}
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-6 font-serif text-2xl text-paper sm:text-3xl">
          Right now, finding a partner means luck.
        </h2>
        <div className="flex flex-col gap-4 text-paper-dim">
          <p>
            Dancers looking for a partner are scattered across studios, cities,
            countries, Facebook groups, Instagram DMs, and word of mouth. There is
            no single place to look, so most searches depend on who happens to
            know who.
          </p>
          <p>
            That works occasionally, inside a single studio or a local scene. It
            breaks down the moment you need something more specific: a partner at
            your level, in your discipline, willing to travel for competitions, or
            simply based in a city you are moving to.
          </p>
          <p>
            DancePro is building the place that search should have happened all
            along — a professional network built specifically for ballroom and
            DanceSport, not a general social feed or a dating app repurposed for
            dancers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 font-serif text-2xl text-paper sm:text-3xl">
          How it will work
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <span className="font-serif text-2xl text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-1 text-paper">{step.title}</h3>
                <p className="text-sm text-paper-dim">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/how-it-works"
          className="mt-8 inline-block text-sm text-gold underline-offset-4 hover:underline"
        >
          See the full picture &rarr;
        </Link>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 font-serif text-2xl text-paper sm:text-3xl">
          Founding member benefits
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="border-l border-gold/40 pl-5">
              <h3 className="mb-1 text-paper">{benefit.title}</h3>
              <p className="text-sm text-paper-dim">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="mb-10 text-center font-serif text-2xl text-paper sm:text-3xl">
          Join the founding members
        </h2>
        <WaitlistForm />
      </section>
    </div>
  );
}
