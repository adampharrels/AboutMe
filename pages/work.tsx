import { useContext } from "react";
import { ArrowUpRight } from "lucide-react";
import Layout, { cx } from "../components/Layout";
import { profile, roles } from "../data/portfolio";
import { ThemeContext } from "../context/theme";

export default function WorkPage(): JSX.Element {
  const { light } = useContext(ThemeContext);

  return (
    <Layout
      title="Work - Adam Nguyen"
      description="Work experience for Adam Nguyen across data engineering, fintech interfaces, and internal software tooling."
    >
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">Work</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-normal">Internships with production pressure.</h1>
          <p className={cx("mt-5 text-lg leading-8", light ? "text-zinc-700" : "text-slate-300")}>
            I have worked across data processing, fintech product surfaces, dashboard tooling, and internal
            platforms. The common thread is measurable workflow improvement.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {roles.map((role) => (
            <article
              key={role.company}
              className={cx(
                "grid gap-6 rounded-lg border p-5 sm:p-6 lg:grid-cols-[0.34fr_0.66fr]",
                light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
              )}
            >
              <div>
                <p className={cx("text-sm", light ? "text-zinc-500" : "text-slate-400")}>{role.period}</p>
                <h2 className="mt-3 text-2xl font-semibold">{role.company}</h2>
                <p className="mt-1 text-sm font-medium text-emerald-500">{role.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
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
              </div>

              <div>
                <p className={cx("leading-7", light ? "text-zinc-700" : "text-slate-300")}>{role.summary}</p>
                <ul className="mt-6 space-y-4">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[1.25rem_1fr] gap-3">
                      <ArrowUpRight className="mt-1 text-emerald-500" size={16} />
                      <span className={cx("leading-7", light ? "text-zinc-700" : "text-slate-300")}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div
          className={cx(
            "mt-10 flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center sm:justify-between",
            light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
          )}
        >
          <div>
            <h2 className="text-xl font-semibold">Want the deeper version?</h2>
            <p className={cx("mt-1 text-sm", light ? "text-zinc-600" : "text-slate-400")}>
              I can walk through architecture, tradeoffs, and code samples from the work above.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-fit items-center justify-center rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Get in touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
