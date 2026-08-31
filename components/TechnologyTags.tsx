type TechnologyTagsProps = {
  technologies: string[];
};

export default function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-2" aria-label="Technologies">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="border-b border-white/10 pb-1 text-xs font-medium text-slate-400"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
