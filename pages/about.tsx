import { useState } from "react";
import {
  BookOpen,
  Dumbbell,
  Music2,
  Mountain,
  type LucideIcon,
} from "lucide-react";
import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import { profile } from "../data/portfolio";

type Hobby = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  icon: LucideIcon;
  details: string[];
};

const hobbies: Hobby[] = [
  {
    id: "music",
    title: "Classical music",
    kicker: "Bach, structure and intensity",
    body: "I love classical music. My favourite composer is Bach.",
    icon: Music2,
    details: [
      "Chaconne in D minor is the piece I keep coming back to.",
      "Sinfonia 826 is another Bach work I really like.",
      "I like music that rewards repeated listening instead of giving everything away immediately.",
    ],
  },
  {
    id: "hiking",
    title: "Hiking",
    kicker: "Long trails, clearer head",
    body: "I like hiking because it gets me away from screens and back into a slower rhythm.",
    icon: Mountain,
    details: [
      "I enjoy trails that take a few hours and make the day feel properly used.",
      "It pairs well with travel because it gives a place a bit more texture.",
      "The best hikes are usually simple: good weather, water, decent shoes and no rushing.",
    ],
  },
  {
    id: "gym",
    title: "Gym",
    kicker: "Consistency over noise",
    body: "I like going to the gym and the quiet discipline of showing up consistently.",
    icon: Dumbbell,
    details: [
      "Training gives me a measurable way to build patience.",
      "I like routines where progress is earned slowly and honestly.",
      "It is a useful counterweight to sitting at a desk and working through abstract problems.",
    ],
  },
  {
    id: "reading",
    title: "Reading",
    kicker: "Law, judgement and personal standards",
    body: "I like reading books that sharpen how I think about law, work and responsibility.",
    icon: BookOpen,
    details: [
      "Law, Justice and Other Challenges: Selected Speeches and Papers of Michael Kirby",
      "What Got You Here Won't Get You There by Marshall Goldsmith",
    ],
  },
];

export default function AboutPage(): JSX.Element {
  const [selectedHobbyId, setSelectedHobbyId] = useState(hobbies[0].id);
  const selectedHobby =
    hobbies.find((hobby) => hobby.id === selectedHobbyId) ?? hobbies[0];
  const SelectedIcon = selectedHobby.icon;

  return (
    <Layout
      title="About"
      description="About Adam Nguyen, a Sydney-based software engineer and final-year UTS Bachelor of Information Technology student."
    >
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          About
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="h-fit border-t border-white/10 pt-5">
            <dl className="divide-y divide-white/10">
              {[
                ["Education", profile.education],
                ["Major", profile.major],
                ["Sub-major", profile.subMajor],
                ["Graduation", profile.graduation],
                ["Location", profile.location],
                ["Current role", "Software Engineer at NexStox"],
              ].map(([label, value]) => (
                <div key={label} className="py-4 first:pt-0">
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-200">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>
              I’m a final-year Bachelor of Information Technology student at
              UTS, majoring in Software Development with a Data Analytics and AI
              sub-major. Professionally, I’ve worked across software
              development outsourcing, fintech,
              and agriculture technology.
            </p>
            <p>
              My strongest interests sit around software, fintech, data and
              legal technology. I like building tools that make complicated
              workflows easier to reason about, especially when the domain has
              real constraints rather than a blank-canvas product brief.
            </p>
            <p>
              I’m also interested in how software, regulation and institutions
              intersect, with a longer-term goal of pursuing legal study. That
              does not make me a law student today; it means I’m paying
              attention to how technical systems meet rules, responsibility and
              public trust.
            </p>
            <p>
              Outside engineering, I’m drawn to classical guitar, public
              speaking and travel. I also admire people with good storytelling,
              and have a soft spot for writers and interviewers who take people
              seriously, including Anthony Bourdain, mostly for the curiosity
              and directness rather than the mythology.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Hobbies
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
            <div
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
              role="tablist"
              aria-label="Hobbies"
            >
              {hobbies.map((hobby) => {
                const Icon = hobby.icon;
                const selected = hobby.id === selectedHobby.id;

                return (
                  <button
                    key={hobby.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setSelectedHobbyId(hobby.id)}
                    className={[
                      "grid grid-cols-[2.75rem_1fr] gap-3 border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400",
                      selected
                        ? "border-white/25 bg-white/[0.045]"
                        : "border-white/10 bg-transparent hover:border-white/25",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-11 w-11 items-center justify-center border",
                        selected
                          ? "border-white/20 text-emerald-300"
                          : "border-white/10 text-slate-300",
                      ].join(" ")}
                    >
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-white">
                        {hobby.title}
                      </span>
                      <span className="mt-1 block text-sm leading-5 text-slate-400">
                        {hobby.kicker}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <article className="min-h-[20rem] border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Selected
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {selectedHobby.title}
                  </h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-emerald-300">
                  <SelectedIcon size={24} aria-hidden="true" />
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-300">
                {selectedHobby.body}
              </p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm leading-6 text-slate-300">
                {selectedHobby.details.map((detail) => (
                  <li
                    key={detail}
                    className="grid grid-cols-[0.75rem_1fr] gap-3"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 bg-emerald-300"
                      aria-hidden="true"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
