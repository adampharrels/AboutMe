import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "../data/portfolio";
import ExternalTextLink from "./ExternalTextLink";
import TechnologyTags from "./TechnologyTags";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({
  project,
  compact = false,
}: ProjectCardProps) {
  const caseStudy = project.links.find((link) => link.kind === "case-study");
  const externalLinks = project.links.filter(
    (link) => link.kind !== "case-study",
  );

  return (
    <article className="flex h-full flex-col border border-white/10 bg-[#12151b]">
      {project.image ? (
        <div className="border-b border-white/10 bg-slate-950">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="h-56 w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="border-b border-white/10 bg-[#0f1115] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {project.category.join(" / ")}
          </p>
          <p className="mt-8 text-2xl font-semibold text-white">
            {project.title}
          </p>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {project.category.map((category) => (
            <span
              key={category}
              className="border border-white/10 px-2 py-1 text-xs font-medium text-slate-300"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.summary}
        </p>

        {!compact && (
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
            {project.capabilities.slice(0, 3).map((capability) => (
              <li
                key={capability}
                className="grid grid-cols-[0.75rem_1fr] gap-2"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 bg-emerald-300"
                  aria-hidden="true"
                />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5">
          <TechnologyTags
            technologies={project.technologies.slice(0, compact ? 5 : 8)}
          />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
          {caseStudy && (
            <Link
              href={caseStudy.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              {caseStudy.label}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
          {externalLinks.map((link) => (
            <ExternalTextLink key={link.href} href={link.href}>
              {link.label}
            </ExternalTextLink>
          ))}
        </div>
      </div>
    </article>
  );
}
