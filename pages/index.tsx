import Link from "next/link";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import { profile } from "../data/portfolio";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              View Projects
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200"
            >
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.resume}
              download="Resume_AdamNguyen.pdf"
              className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-emerald-200"
            >
              Download Résumé
            </a>
          </div>
        </div>

        <aside className="h-fit border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Summary
          </p>
          <dl className="mt-5 divide-y divide-white/10">
            {[
              ["Current role", "Software Engineer at NexStox"],
              ["Education", profile.education],
              ["Graduation", profile.graduation],
              ["Availability", profile.availability],
              ["Locations", profile.mobility],
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
      </section>

      <CallToAction />
    </Layout>
  );
}
