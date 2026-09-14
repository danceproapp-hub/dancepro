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
    description: "Your styles, role, level, and where you dance — everything a partner actually needs to know.",
  },
  {
    title: "Search or get discovered",
    description: "Find compatible dancers nearby or across the world, or let them find you.",
  },
  {
    title: "Connect",
    description: "Send a connection request. They accept. Connections are mutual, so every conversation starts with a yes.",
  },
  {
    title: "Message inside the app",
    description: "Coordinate practice, competitions, and partnerships in one place.",
  },
];

const PILLARS = [
  {
    title: "Partner search",
    description:
      "Find a competition, practice, or social partner by style, level, role, and where they dance.",
  },
  {
    title: "Marketplace",
    description:
      "Competition gowns listed by other dancers for sale or for rent, alongside new shoes, dresses, and practice wear from the brands you already dance in.",
  },
  {
    title: "Coaching",
    description:
      "Instructors list what they teach and where. Students find them by style, level, and city.",
  },
  {
    title: "Competitions",
    description:
      "See what's coming up, who's going, and what you're training toward.",
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
            The professional network for ballroom and Latin dancers. Partners,
            coaching, competitions, and the marketplace — all in one place.
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
          <Eyebrow>The idea</Eyebrow>
          <h2 className="mb-6 font-serif text-3xl text-paper sm:text-4xl">
            Imagine finding your partner in an afternoon.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-col gap-4 text-paper-dim">
            <p>
              You open DancePro and search for exactly what you need: your style,
              your level, the role you dance, near your studio or anywhere in the
              world. Real dancers come back — each one already showing what they
              dance and the kind of partnership they're after.
            </p>
            <p>
              You send a connection request to the ones who fit. They accept, and
              the conversation starts in the app. By the weekend you've agreed on
              a practice schedule and picked a competition to aim for together.
            </p>
            <p>
              That's the whole idea: the dancers who match what you're looking
              for, in one place, there for the same reason you are.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>More than a partner search</Eyebrow>
          <h2 className="mb-6 font-serif text-3xl text-paper sm:text-4xl">
            The whole dance world, in one place.
          </h2>
          <p className="mb-12 max-w-2xl text-paper-dim">
            Finding a partner is where DancePro starts, not where it ends. It's
            a network for everything a dancer needs.
          </p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <div className="h-full rounded-xl border border-line p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-ink-raised">
                <h3 className="mb-2 font-serif text-xl text-gold">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper-dim">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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
              Reserve your place before we open to the public.
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
