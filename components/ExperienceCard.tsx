import type { Experience } from "../data/portfolio";
import TechnologyTags from "./TechnologyTags";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="grid gap-6 border-t border-white/10 py-8 lg:grid-cols-[0.34fr_0.66fr]">
      <div>
        <p className="text-sm leading-6 text-slate-500">{experience.context}</p>
        <div className="mt-6 space-y-5">
          {experience.roles.map((role) => (
            <div key={`${experience.company}-${role.title}`}>
              <h3 className="text-xl font-semibold text-white">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                {experience.company}
              </p>
              <p className="mt-1 text-sm text-slate-400">{role.period}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <ul className="space-y-3 text-sm leading-6 text-slate-300">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="grid grid-cols-[0.75rem_1fr] gap-3">
              <span
                className="mt-2 h-1 w-1 bg-emerald-300"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <TechnologyTags technologies={experience.technologies} />
        </div>
      </div>
    </article>
  );
}
