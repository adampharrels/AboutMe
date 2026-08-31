import Link from "next/link";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import { profile } from "../data/portfolio";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 border border-white/10 bg-[#12151b] px-3 py-2 text-sm text-slate-300">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">
            {profile.summary}
            <Link
              href="/about"
              className="ml-2 inline-flex align-middle text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
              aria-label="More about Adam Nguyen"
            >
              <ArrowRight size={22} aria-hidden="true" />
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-emerald-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              View Projects
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.resume}
              download="Resume_AdamNguyen.pdf"
              className="inline-flex items-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Download Résumé
            </a>
          </div>
        </div>

        <aside className="h-fit border border-white/10 bg-[#12151b] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Summary
          </p>
          <dl className="mt-5 space-y-4">
            {[
              ["Current role", "Software Engineer at NexStox"],
              ["Education", profile.education],
              ["Graduation", profile.graduation],
              ["Availability", profile.availability],
              ["Locations", profile.mobility],
            ].map(([label, value]) => (
              <div key={label}>
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
      </section>

      <CallToAction />
    </Layout>
  );
}
