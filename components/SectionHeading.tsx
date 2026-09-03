type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-normal text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
