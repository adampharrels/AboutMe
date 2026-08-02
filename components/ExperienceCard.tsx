import type { Experience } from "../data/portfolio";
import TechnologyTags from "./TechnologyTags";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="grid gap-6 border border-white/10 bg-[#12151b] p-5 sm:p-6 lg:grid-cols-[0.34fr_0.66fr]">
      <div>
        <p className="text-sm leading-6 text-slate-400">{experience.context}</p>
        <div className="mt-5 space-y-4">
          {experience.roles.map((role) => (
            <div key={`${experience.company}-${role.title}`}>
              <h3 className="text-xl font-semibold text-white">{role.title}</h3>
              <p className="mt-1 text-sm text-emerald-300">
                {experience.company}
              </p>
              <p className="mt-1 text-sm text-slate-400">{role.period}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-base leading-7 text-slate-200">
          {experience.responsibility}
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="grid grid-cols-[0.85rem_1fr] gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 bg-emerald-300"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 border border-white/10 bg-[#0f1115] p-4">
          <p className="text-sm font-semibold text-emerald-200">
            Highlighted contribution
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {experience.highlight}
          </p>
        </div>
        <div className="mt-5">
          <TechnologyTags technologies={experience.technologies} />
        </div>
      </div>
    </article>
  );
}
