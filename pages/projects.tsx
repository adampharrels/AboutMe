import { useContext, useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import Layout, { cx } from "../components/Layout";
import { projects } from "../data/portfolio";
import { ThemeContext } from "../context/theme";

export default function Projects(): JSX.Element {
  const { light } = useContext(ThemeContext);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((project) =>
      [project.title, project.eyebrow, project.description, project.impact, ...project.tech]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <Layout
      title="Projects - Adam Nguyen"
      description="Selected software projects by Adam Nguyen across data validation, fintech UI, booking systems, and nutrition tracking."
    >
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">Projects</p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-normal">Software with a clear job to do.</h1>
            <p className={cx("mt-5 text-lg leading-8", light ? "text-zinc-700" : "text-slate-300")}>
              A focused selection of applications and systems that show product thinking, backend structure,
              and care for interface quality.
            </p>
          </div>

          <label
            className={cx(
              "flex h-12 min-w-full items-center gap-3 rounded-md border px-3 lg:min-w-[320px]",
              light ? "border-zinc-300 bg-white" : "border-white/15 bg-white/[0.04]"
            )}
          >
            <Search size={18} className={light ? "text-zinc-500" : "text-slate-400"} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects or tech"
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
            />
          </label>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={cx(
                "flex min-h-[320px] flex-col rounded-lg border p-6",
                light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
              )}
            >
              <p className="text-sm font-medium text-emerald-500">{project.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>
              <p className={cx("mt-4 leading-7", light ? "text-zinc-700" : "text-slate-300")}>{project.description}</p>
              <p className={cx("mt-4 text-sm leading-6", light ? "text-zinc-600" : "text-slate-400")}>{project.impact}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={cx(
                      "rounded-md border px-2 py-1 text-xs",
                      light ? "border-zinc-200 bg-zinc-50" : "border-white/10 bg-black/20"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-emerald-500"
              >
                {project.linkLabel}
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={cx("mt-10 rounded-lg border p-6 text-sm", light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]")}>
            No projects match that search.
          </p>
        )}
      </section>
    </Layout>
  );
}
