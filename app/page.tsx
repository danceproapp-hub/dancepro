import Link from "next/link";
import Image from "next/image";
import mark from "@/public/mark.png";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
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
      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32">
        <div
          aria-hidden
          className="hero-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,var(--color-gold),transparent)] blur-3xl"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <Image
            src={mark}
            alt="DancePro"
            width={72}
            height={72}
            priority
            className="enter h-16 w-16 sm:h-[72px] sm:w-[72px]"
          />

          <h1
            className="enter font-serif text-5xl leading-[1.05] text-paper sm:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Find Your Next Dance Partner.
          </h1>

          <p
            className="enter max-w-2xl text-lg text-paper-dim sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            The professional network connecting ballroom and DanceSport dancers
            worldwide.
          </p>

          <a
            href="#join"
            className="enter rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.45)]"
            style={{ animationDelay: "360ms" }}
          >
            Join the Founding Members
          </a>

          {count >= 25 && (
            <p
              className="enter text-sm text-paper-dim"
              style={{ animationDelay: "460ms" }}
            >
              Join {count.toLocaleString()} dancers already on the list.
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="rule-fade" />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mb-6 font-serif text-3xl text-paper sm:text-4xl">
            Right now, finding a partner means luck.
          </h2>
        </Reveal>
        <Reveal delay={100}>
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
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>How it will work</Eyebrow>
          <h2 className="mb-12 font-serif text-3xl text-paper sm:text-4xl">
            Four steps, no noise.
          </h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="group flex gap-5">
                <span className="font-serif text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1.5 text-lg text-paper">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-paper-dim">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link
            href="/how-it-works"
            className="mt-10 inline-block text-sm text-gold underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-80"
          >
            See the full picture &rarr;
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>Founding members</Eyebrow>
          <h2 className="mb-12 font-serif text-3xl text-paper sm:text-4xl">
            What you get for being early.
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div className="border-l border-gold/40 pl-5 transition-all duration-500 hover:border-gold hover:pl-6">
                <h3 className="mb-1.5 text-paper">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-paper-dim">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-paper sm:text-4xl">
              Join the founding members
            </h2>
            <p className="mt-3 text-sm text-paper-dim">
              One thousand dancers. Then we build the app.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <WaitlistForm />
        </Reveal>
      </section>
    </div>
  );
}
