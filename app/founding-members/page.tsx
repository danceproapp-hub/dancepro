import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Members",
  description:
    "What the first 1,000 DancePro members get, why the community comes before the app, and why joining now beats joining later.",
  openGraph: {
    title: "DancePro Founding Members",
    description:
      "What the first 1,000 DancePro members get, and why joining now beats joining later.",
  },
};

const PERKS = [
  {
    title: "Founding Member badge",
    description:
      "A permanent mark on your profile, visible for as long as you're a member — proof you were part of this before it existed.",
  },
  {
    title: "Early access",
    description: "First access to the platform, ahead of the general public launch.",
  },
  {
    title: "Special launch pricing",
    description:
      "Locked in for founding members, for as long as you keep your membership active.",
  },
  {
    title: "Exclusive events",
    description:
      "Founding member meetups, socials, and early previews of features before anyone else sees them.",
  },
  {
    title: "A vote on what gets built first",
    description:
      "Founding members shape the roadmap directly — which features ship first is decided with your input, not just ours.",
  },
];

export default function FoundingMembersPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-4 font-serif text-4xl text-paper sm:text-5xl">
        The founding member program
      </h1>
      <p className="mb-14 text-lg text-paper-dim">
        We're building the first 1,000 members of DancePro before we build the
        app. Here's what that means, and what you get for joining early.
      </p>

      <div className="mb-16 flex flex-col gap-4 text-paper-dim">
        <h2 className="mb-2 font-serif text-2xl text-paper">
          Why the community comes before the app
        </h2>
        <p>
          Most networks fail for one reason: they launch with a beautiful app
          and nobody on it. We're doing this in the opposite order. Before we
          write a line of the iOS app, we want to know that a thousand real
          dancers actually want this — and we want that community in place on
          day one, so the app launches with people already worth connecting
          to.
        </p>
        <p>
          Every founding member is proof of demand and part of the network
          itself. Your signup isn't just a waitlist entry — it's one of the
          first thousand people the app will be built for and around.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 font-serif text-2xl text-paper">
          What founding members get
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {PERKS.map((perk) => (
            <div key={perk.title} className="border-l border-gold/40 pl-5">
              <h3 className="mb-1 text-paper">{perk.title}</h3>
              <p className="text-sm text-paper-dim">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 flex flex-col gap-4 text-paper-dim">
        <h2 className="mb-2 font-serif text-2xl text-paper">
          Why now beats later
        </h2>
        <p>
          Founding member status is fixed to the first 1,000 dancers who join
          — it isn't something you can earn after the fact. Launch pricing,
          the badge, and the feature vote all belong to this list and this
          list only. Everyone who joins after launch starts from zero.
        </p>
      </div>

      <div className="text-center">
        <a
          href="/#join"
          className="inline-block rounded-full bg-gold px-8 py-4 font-medium text-ink transition hover:bg-gold-dim"
        >
          Join the Founding Members
        </a>
      </div>
    </div>
  );
}
