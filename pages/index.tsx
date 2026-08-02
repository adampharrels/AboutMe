import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Layout, { cx } from "../components/Layout";
import { focusAreas, metrics, profile, projects, roles, skills } from "../data/portfolio";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export default function Home(): JSX.Element {
  const { light } = useContext(ThemeContext);
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout
      title="Adam Nguyen - Portfolio"
      description="Portfolio for Adam Nguyen, a Computer Science student and full-stack engineer working across data pipelines, fintech interfaces, and internal tools."
    >
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div>
          <div
            className={cx(
              "mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm",
              light
                ? "border-zinc-200 bg-white text-zinc-700"
                : "border-white/10 bg-white/[0.04] text-slate-300"
            )}
          >
            <MapPin size={15} />
            {profile.location}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
            Building reliable software for messy, high-stakes systems.
          </h1>
          <p className={cx("mt-6 max-w-2xl text-lg leading-8", light ? "text-zinc-700" : "text-slate-300")}>
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              View projects
              <ArrowRight size={17} />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className={cx(
                "inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition",
                light ? "border-zinc-300 hover:bg-zinc-100" : "border-white/15 hover:bg-white/10"
              )}
            >
              <Mail size={17} />
              Contact
            </a>
            <a href={profile.github} aria-label="GitHub" className="rounded-md p-3 transition hover:text-emerald-500">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="rounded-md p-3 transition hover:text-emerald-500">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <aside
          className={cx(
            "h-fit rounded-lg border p-5",
            light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
          )}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
            Current Direction
          </p>
          <p className={cx("mt-4 leading-7", light ? "text-zinc-700" : "text-slate-300")}>
            I am focused on product engineering roles where strong frontend craft meets backend judgment,
            data quality, and domain complexity.
          </p>
          <div className="mt-6 grid gap-3">
            {focusAreas.map((item) => (
              <div
                key={item}
                className={cx(
                  "rounded-md border px-3 py-3 text-sm",
                  light ? "border-zinc-200 bg-zinc-50" : "border-white/10 bg-black/20"
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={cx(
                "rounded-lg border p-5",
                light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
              )}
            >
              <p className="text-3xl font-semibold text-emerald-500">{metric.value}</p>
              <p className={cx("mt-2 text-sm", light ? "text-zinc-600" : "text-slate-400")}>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">Background</p>
          <h2 className="mt-3 text-3xl font-semibold">CS, law, and useful systems.</h2>
        </div>
        <div className={cx("space-y-5 leading-8", light ? "text-zinc-700" : "text-slate-300")}>
          <p>
            I am a Computer Science student with a serious interest in law, regulation, and the
            institutions people rely on when outcomes matter. That mix shapes how I build: practical,
            accountable, and clear enough for real users to trust.
          </p>
          <p>
            I care about tools that reduce friction, scale cleanly, and survive contact with actual
            workflows. My recent work spans drone-imagery data processing, fintech product interfaces,
            Angular platform components, and admin tooling.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={cx(
                  "rounded-md border px-3 py-2 text-sm",
                  light ? "border-zinc-200 bg-white text-zinc-700" : "border-white/10 bg-white/[0.04] text-slate-300"
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={cx("border-y py-20", light ? "border-zinc-200 bg-white" : "border-white/10 bg-black/20")}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">Selected Work</p>
              <h2 className="mt-3 text-3xl font-semibold">Experience with measurable outcomes.</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500">
              Full timeline
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.company}
                className={cx(
                  "rounded-lg border p-5",
                  light ? "border-zinc-200 bg-stone-50" : "border-white/10 bg-white/[0.04]"
                )}
              >
                <p className={cx("text-sm", light ? "text-zinc-500" : "text-slate-400")}>{role.period}</p>
                <h3 className="mt-3 text-xl font-semibold">{role.company}</h3>
                <p className="mt-1 text-sm text-emerald-500">{role.role}</p>
                <p className={cx("mt-4 text-sm leading-6", light ? "text-zinc-700" : "text-slate-300")}>
                  {role.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">Projects</p>
            <h2 className="mt-3 text-3xl font-semibold">Proof through shipped interfaces.</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500">
            All projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className={cx(
                "rounded-lg border p-5",
                light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
              )}
            >
              <p className="text-sm font-medium text-emerald-500">{project.eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className={cx("mt-3 text-sm leading-6", light ? "text-zinc-700" : "text-slate-300")}>
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className={cx("rounded-md px-2 py-1 text-xs", light ? "bg-zinc-100" : "bg-black/30")}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
