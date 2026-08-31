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
  const previewImage = project.image ?? project.images?.[0];

  return (
    <article className="border-t border-white/10 py-8">
      <div
        className={previewImage ? "grid gap-6 lg:grid-cols-[1fr_18rem]" : ""}
      >
        <div>
          <div className="flex flex-wrap gap-2">
            {project.category.map((category) => (
              <span
                key={category}
                className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            {project.summary}
          </p>

          {!compact && (
            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
              {project.capabilities.slice(0, 3).map((capability) => (
                <li
                  key={capability}
                  className="grid grid-cols-[0.75rem_1fr] gap-2"
                >
                  <span
                    className="mt-2 h-1 w-1 bg-emerald-300"
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

          <div className="flex flex-wrap items-center gap-4 pt-7">
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

        {previewImage && (
          <div className="overflow-hidden border border-white/10 bg-black/30">
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="h-52 w-full object-cover object-top lg:h-full"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
}
