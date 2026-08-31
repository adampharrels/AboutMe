import {
  Braces,
  Code2,
  Database,
  GitBranch,
  MonitorSmartphone,
  Server,
  Workflow,
} from "lucide-react";
import type { CapabilityGroup } from "../data/portfolio";

type TechStackProps = {
  groups: CapabilityGroup[];
};

const groupIcons = {
  "Programming languages": Code2,
  Frontend: MonitorSmartphone,
  Backend: Server,
  "Tools and platforms": GitBranch,
};

const fallbackIcon = Braces;

type TechIconConfig = {
  src?: string;
  color?: string;
  fallback?: typeof Braces;
};

const deviconBase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techIcons: Record<string, TechIconConfig> = {
  TypeScript: { src: `${deviconBase}/typescript/typescript-original.svg` },
  Python: { src: `${deviconBase}/python/python-original.svg` },
  Java: { src: `${deviconBase}/java/java-original.svg` },
  SQL: { color: "#38bdf8", fallback: Database },
  React: { src: `${deviconBase}/react/react-original.svg` },
  "Next.js": { src: `${deviconBase}/nextjs/nextjs-original.svg` },
  Angular: { src: `${deviconBase}/angularjs/angularjs-original.svg` },
  "Tailwind CSS": {
    src: `${deviconBase}/tailwindcss/tailwindcss-original.svg`,
  },
  FastAPI: { src: `${deviconBase}/fastapi/fastapi-original.svg` },
  "Node.js": { src: `${deviconBase}/nodejs/nodejs-original.svg` },
  "Express.js": { src: `${deviconBase}/express/express-original.svg` },
  "Hono.js": { color: "#e36002", fallback: Workflow },
  PostgreSQL: { src: `${deviconBase}/postgresql/postgresql-original.svg` },
  SQLite: { src: `${deviconBase}/sqlite/sqlite-original.svg` },
  Prisma: { src: `${deviconBase}/prisma/prisma-original.svg` },
  SQLAlchemy: { src: `${deviconBase}/sqlalchemy/sqlalchemy-original.svg` },
  pandas: { src: `${deviconBase}/pandas/pandas-original.svg` },
  NumPy: { src: `${deviconBase}/numpy/numpy-original.svg` },
  Docker: { src: `${deviconBase}/docker/docker-original.svg` },
  Git: { src: `${deviconBase}/git/git-original.svg` },
  "GitHub Actions": {
    src: `${deviconBase}/githubactions/githubactions-original.svg`,
  },
  "Azure DevOps": {
    src: `${deviconBase}/azuredevops/azuredevops-original.svg`,
  },
  Vite: { src: `${deviconBase}/vitejs/vitejs-original.svg` },
  Gradle: { src: `${deviconBase}/gradle/gradle-original.svg` },
};

export default function TechStack({ groups }: TechStackProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map((group) => {
        const Icon =
          groupIcons[group.title as keyof typeof groupIcons] ?? fallbackIcon;

        return (
          <section
            key={group.title}
            className="border border-white/10 bg-[#12151b]"
          >
            <div className="flex items-center gap-3 border-b border-white/10 p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-emerald-300/30 bg-emerald-300/10 text-emerald-200">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h2 className="text-lg font-semibold text-white">
                {group.title}
              </h2>
            </div>

            <ul className="grid grid-cols-3 gap-3 p-5 sm:grid-cols-4 lg:grid-cols-5">
              {group.items.map((item) => (
                <li key={item}>
                  <TechIcon name={item} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function TechIcon({ name }: { name: string }) {
  const config = techIcons[name];
  const FallbackIcon = config?.fallback ?? fallbackIcon;

  return (
    <span className="group flex min-h-24 flex-col items-center justify-center gap-3 border border-white/10 bg-[#0f1115] p-3 text-center transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.06]">
      <span className="flex h-10 w-10 items-center justify-center">
        {config?.src ? (
          <img
            src={config.src}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 object-contain"
            loading="lazy"
          />
        ) : (
          <FallbackIcon
            size={34}
            aria-hidden="true"
            color={config?.color ?? "#34d399"}
          />
        )}
      </span>
      <span className="text-xs font-medium leading-4 text-slate-300">
        {name}
      </span>
    </span>
  );
}
