import {
  Braces,
  Code2,
  GitBranch,
  MonitorSmartphone,
  Server,
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

const techInitials: Record<string, string> = {
  TypeScript: "TS",
  Python: "PY",
  Java: "JV",
  SQL: "SQL",
  React: "R",
  "Next.js": "N",
  Angular: "A",
  "Tailwind CSS": "TW",
  FastAPI: "FA",
  "Node.js": "NO",
  "Express.js": "EX",
  "Hono.js": "HN",
  PostgreSQL: "PG",
  SQLite: "SQ",
  Prisma: "PR",
  SQLAlchemy: "SA",
  pandas: "PD",
  NumPy: "NP",
  Docker: "DK",
  Git: "GT",
  "GitHub Actions": "GA",
  "Azure DevOps": "AZ",
  Vite: "VT",
  Gradle: "GR",
};

export default function TechStack({ groups }: TechStackProps) {
  return (
    <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
      {groups.map((group) => {
        const Icon =
          groupIcons[group.title as keyof typeof groupIcons] ?? fallbackIcon;

        return (
          <section key={group.title} className="border-t border-white/10 pt-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-emerald-300">
                <Icon size={18} aria-hidden="true" />
              </span>
              <h2 className="text-base font-semibold text-white">
                {group.title}
              </h2>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 text-[0.68rem] font-semibold text-slate-300">
                    {techInitials[item] ?? item.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
