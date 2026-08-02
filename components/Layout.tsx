import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/theme";
import { profile } from "../data/portfolio";

type LayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Background" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/goals", label: "List 100" },
];

export function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ title, description, children }: LayoutProps) {
  const { light, setLight } = useContext(ThemeContext);
  const router = useRouter();
  const pageDescription = description ?? profile.summary;

  return (
    <div
      className={cx(
        "min-h-screen font-sans antialiased transition-colors",
        light
          ? "bg-stone-50 text-zinc-950"
          : "bg-[#101113] text-slate-100"
      )}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header
        className={cx(
          "sticky top-0 z-40 border-b backdrop-blur-xl",
          light
            ? "border-zinc-200/80 bg-stone-50/88"
            : "border-white/10 bg-[#101113]/88"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="group w-fit">
            <p className="text-xl font-semibold tracking-normal">{profile.name}</p>
            <p className={cx("text-sm", light ? "text-zinc-600" : "text-slate-400")}>
              CS student / full-stack engineer
            </p>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <nav className="flex flex-wrap items-center gap-1">
              {navItems.map((item) => {
                const active = router.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-md px-3 py-2 text-sm font-medium transition",
                      active
                        ? light
                          ? "bg-zinc-950 text-white"
                          : "bg-white text-zinc-950"
                        : light
                        ? "text-zinc-700 hover:bg-zinc-200/70"
                        : "text-slate-300 hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={() => setLight(!light)}
              className={cx(
                "inline-flex h-10 w-10 items-center justify-center rounded-md border transition",
                light
                  ? "border-zinc-300 hover:bg-zinc-200"
                  : "border-white/15 hover:bg-white/10"
              )}
            >
              {light ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer
        className={cx(
          "mt-20 border-t px-4 py-8 sm:px-6",
          light ? "border-zinc-200" : "border-white/10"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className={light ? "text-zinc-600" : "text-slate-400"}>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} aria-label="Email Adam" className="transition hover:text-emerald-500">
              <Mail size={18} />
            </a>
            <a href={profile.github} aria-label="GitHub" className="transition hover:text-emerald-500">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition hover:text-emerald-500">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
