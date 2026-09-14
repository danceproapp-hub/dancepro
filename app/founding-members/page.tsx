import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Founding Members",
  description:
    "What DancePro founding members get, why the community comes first, and why joining before launch beats joining after.",
  openGraph: {
    title: "DancePro Founding Members",
    description:
      "What DancePro founding members get, and why joining before launch beats joining after.",
  },
};

const PERKS = [
  {
    title: "Founding Member badge",
    description:
      "A permanent mark on your profile, visible for as long as you're a member — proof you were here from the very beginning.",
  },
  {
    title: "Early access",
    description: "First access to DancePro, ahead of everyone else.",
  },
  {
    title: "Special launch pricing",
    description:
      "Locked in for founding members, for as long as you keep your membership active.",
  },
  {
    title: "Exclusive events",
    description:
      "Founding member meetups, socials, and a first look at what's coming before anyone else sees it.",
  },
  {
    title: "A say in what comes next",
    description:
      "What founding members ask for gets built first. You tell us what the network needs.",
  },
];

export default function FoundingMembersPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
      <Eyebrow>The program</Eyebrow>
      <h1 className="mb-4 font-serif text-4xl text-paper sm:text-5xl">
        The founding member program
      </h1>
      <p className="mb-14 text-lg text-paper-dim">
        Founding members are the dancers who join before DancePro opens to the
        public. Here's what that means, and what you get for being one of them.
      </p>
      </Reveal>

      <div className="mb-16 flex flex-col gap-4 text-paper-dim">
        <h2 className="mb-2 font-serif text-2xl text-paper">
          What being first actually means
        </h2>
        <p>
          Founding members shape what DancePro becomes — the cities it's
          strongest in, the styles best represented, what gets built next.
          Join now and you're not just on the network, you're part of the
          reason it's worth being on.
        </p>
        <p>
          You'll be among the first profiles other dancers see when they
          arrive, with a badge that never gets handed out again.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 font-serif text-2xl text-paper">
          What founding members get
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {PERKS.map((perk) => (
            <div key={perk.title} className="border-l border-gold/40 pl-5 transition-all duration-500 hover:border-gold hover:pl-6">
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
          Founding member status closes the day DancePro opens to the public —
          it isn't something you can earn after the fact. Launch pricing, the
          badge, and the say in what gets built all belong to this group and
          this group only. Everyone who joins afterwards starts from zero.
        </p>
      </div>

      <div className="text-center">
        <a
          href="/#join"
          className="inline-block rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.45)]"
        >
          Join the Founding Members
        </a>
      </div>
    </div>
  );
}
