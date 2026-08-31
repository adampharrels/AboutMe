import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { assetBasePath, profile, site } from "../data/portfolio";

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Experience" },
  { href: "/goals", label: "Life List" },
];

export function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Layout({
  title,
  description = site.description,
  children,
}: LayoutProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pageTitle = title ? `${title} | Adam Nguyen` : site.title;

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-100 antialiased">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={site.url} />
        <link rel="icon" href={`${assetBasePath}/favicon.svg`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1115]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            <span className="block text-base font-semibold tracking-normal sm:text-lg">
              {profile.name}
            </span>
            <span className="block text-xs text-slate-400 sm:text-sm">
              {profile.title}
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              const active = isActive(router.pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400",
                    active
                      ? "text-white underline decoration-emerald-400 underline-offset-8"
                      : "text-slate-400 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <HeaderIcon
              href={profile.github}
              label="Open Adam Nguyen's GitHub profile"
            >
              <Github size={18} />
            </HeaderIcon>
            <HeaderIcon
              href={profile.linkedin}
              label="Open Adam Nguyen's LinkedIn profile"
            >
              <Linkedin size={18} />
            </HeaderIcon>
            <a
              href={profile.resume}
              download="Resume_AdamNguyen.pdf"
              className="border border-white/15 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              Download Résumé
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="bg-emerald-400 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-slate-100 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto grid max-w-6xl gap-1 py-3"
            >
              {navItems.map((item) => {
                const active = isActive(router.pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "px-3 py-3 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400",
                      active ? "bg-white/10 text-white" : "text-slate-300",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="border border-white/15 px-3 py-2 text-sm text-slate-100"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-white/15 px-3 py-2 text-sm text-slate-100"
              >
                LinkedIn
              </a>
              <a
                href={profile.resume}
                download="Resume_AdamNguyen.pdf"
                className="border border-white/15 px-3 py-2 text-sm text-slate-100"
              >
                Download Résumé
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="bg-emerald-400 px-3 py-2 text-sm font-semibold text-zinc-950"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-slate-200">{profile.name}</p>
            <p className="mt-1">
              {profile.location} · {profile.availability}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-emerald-300"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              GitHub
            </a>
            <a
              href={profile.resume}
              download="Resume_AdamNguyen.pdf"
              className="hover:text-emerald-300"
            >
              Résumé
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeaderIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center text-slate-300 transition hover:bg-white/10 hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
    >
      {children}
    </a>
  );
}
