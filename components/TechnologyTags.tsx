type TechnologyTagsProps = {
  technologies: string[];
};

export default function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="border border-white/10 bg-[#0f1115] px-2.5 py-1.5 text-xs font-medium text-slate-300"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
