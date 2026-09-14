import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How DancePro connects ballroom and Latin dancers: build a profile, search or get discovered, send a connection request, and message inside the app.",
  openGraph: {
    title: "How DancePro Works",
    description:
      "How DancePro connects ballroom and Latin dancers: build a profile, search or get discovered, connect, and message.",
  },
};

const STEPS = [
  {
    title: "Create your profile",
    description:
      "Set up a professional dancer profile: your name, city, the styles you dance, your competitive level, and what kind of partnership you're looking for.",
  },
  {
    title: "Set your styles, role, and level",
    description:
      "Be specific. Leader, follower, or both. Beginner through professional. International Latin or Argentine Tango. The more precise your profile, the better the dancers you find.",
  },
  {
    title: "Search for compatible dancers, or get discovered",
    description:
      "Browse dancers who fit what you're looking for, filtered by style, role, level, and location — or simply keep your profile open and let the right people find you.",
  },
  {
    title: "Send a connection request",
    description:
      "Reach out directly and professionally. They can see what you dance and what you're looking for before they answer.",
  },
  {
    title: "They accept",
    description:
      "Connections are mutual. Nobody is added to your network, and nobody sees your details, without agreeing to connect first.",
  },
  {
    title: "You message inside the app",
    description:
      "Once connected, coordinate practice schedules, competition plans, and logistics in one place built for dancers.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
        <h1 className="mb-4 font-serif text-4xl text-paper sm:text-5xl">
          How DancePro works
        </h1>
        <p className="mb-14 text-lg text-paper-dim">
          Every part of DancePro is built around one thing: finding the right
          partner for your training and competition goals.
        </p>
      </Reveal>

      <ol className="flex flex-col gap-10">
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={index * 70}>
            <li className="group flex gap-6">
              <span className="font-serif text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="mb-2 text-xl text-paper">{step.title}</h2>
                <p className="leading-relaxed text-paper-dim">{step.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Link
        href="/#join"
        className="mt-12 inline-block rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.45)]"
      >
        Join the Founding Members
      </Link>
    </div>
  );
}
