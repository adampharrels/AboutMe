import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import Layout from "../components/Layout";
import { profile } from "../data/portfolio";

const timelineItems = [
  {
    period: "Jan 2026 - Present",
    title: "Software Engineer Intern",
    place: "NexStox",
    description:
      "Full-stack fintech product work across trading, wallet and admin flows.",
    type: "work",
  },
  {
    period: "Apr 2026 - Jun 2026",
    title: "Data Engineer Intern (contracted part-time)",
    place: "StevTech",
    description: "UTS Industry Collaboration, built Python ETL pipeline.",
    type: "work",
  },
  {
    period: "Oct 2025 - Jan 2026",
    title: "Software Engineer Intern - Full-stack",
    place: "TMA Solutions",
    description: "Full-time work on workforce systems and admin workflows.",
    type: "work",
  },
  {
    period: "Feb 2024 - Dec 2026",
    title: "Bachelor of Information Technology",
    place: "University of Technology Sydney",
    description: "Software Development major with Data Analytics and AI.",
    type: "education",
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={15} aria-hidden="true" />
              {profile.location} · {profile.graduation}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Projects
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200"
              >
                Full experience
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href={profile.resume}
                download="Resume_AdamNguyen.pdf"
                className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-emerald-200"
              >
                Résumé
              </a>
            </div>
          </div>

          <section aria-labelledby="snapshot-heading" className="lg:pt-2">
            <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Snapshot
                </p>
                <h2
                  id="snapshot-heading"
                  className="mt-2 text-2xl font-semibold text-white"
                >
                  Education and work
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden text-sm font-semibold text-slate-400 transition hover:text-emerald-300 sm:inline-flex"
              >
                Details
              </Link>
            </div>

            <ol className="relative mt-6 space-y-0 before:absolute before:left-[7.45rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-white/10">
              {timelineItems.map((item) => {
                const Icon =
                  item.type === "education" ? GraduationCap : Briefcase;

                return (
                  <li
                    key={`${item.period}-${item.title}-${item.place}`}
                    className="grid grid-cols-[6.5rem_1rem_1fr] gap-4 py-4"
                  >
                    <p className="pt-0.5 text-sm font-medium leading-5 text-slate-500">
                      {item.period}
                    </p>
                    <span className="relative z-10 mt-1 flex h-4 w-4 items-center justify-center bg-[#0d0f12]">
                      <span className="h-2 w-2 bg-emerald-300" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <Icon
                          size={15}
                          className="text-slate-500"
                          aria-hidden="true"
                        />
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.place}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>
      </section>
    </Layout>
  );
}
