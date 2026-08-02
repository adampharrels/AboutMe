import Link from "next/link";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import CallToAction from "../components/CallToAction";
import ExperienceCard from "../components/ExperienceCard";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import TechnologyTags from "../components/TechnologyTags";
import {
  capabilityGroups,
  experiences,
  featuredProjects,
  profile,
  proofPoints,
} from "../data/portfolio";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 border border-white/10 bg-[#12151b] px-3 py-2 text-sm text-slate-300">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">
            {profile.summary}
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
              ["Current role", "Junior Software Engineer at NexStox"],
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="divide-y divide-white/10 border-y border-white/10 md:grid md:grid-cols-4 md:divide-x md:divide-y-0">
          {proofPoints.map((point) => (
            <div key={point} className="p-5">
              <p className="text-sm leading-6 text-slate-300">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured projects"
            title="Selected project work"
            description="The projects below are included for technical scope, not volume. Each one links to source or a case study."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
          >
            View all projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Experience"
              title="Engineering experience"
              description="Reverse-chronological work across fintech, internal tooling and data engineering."
            />
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Full experience
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 space-y-5">
            {experiences.slice(0, 2).map((experience) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Technical capabilities"
          title="Technical capabilities"
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="border border-white/10 bg-[#12151b] p-5"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-4">
                <TechnologyTags technologies={group.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="About"
            title="Software, institutions and people."
          />
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I’m interested in software that has to behave well inside real
              institutions: finance, operations, regulation, education and legal
              systems. I like products where clarity and accountability matter
              as much as implementation speed.
            </p>
            <p>
              I’m also interested in how software, regulation and institutions
              intersect, with a longer-term goal of pursuing legal study. Away
              from the keyboard, I care about classical guitar, public speaking,
              travel and staying curious about culture without turning that into
              a personality brochure.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Read more about Adam
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
