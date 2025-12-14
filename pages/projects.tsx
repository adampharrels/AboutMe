import { useContext, useMemo, useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ThemeContext } from "../context/theme";

export default function Projects(): JSX.Element {
  const { light, setLight } = useContext(ThemeContext);
  const [query, setQuery] = useState("");

  const projects = [
    {
      id: "dataflowcheck",
      title: "DataFlowCheck",
      description: "End-to-end data validation pipeline with observability and alerts.",
      tech: ["TypeScript", "Node", "Postgres", "React"],
      github: "https://github.com/adampharrels/DataFlowCheck",
    },
    {
      id: "CryptoWallet",
      title: "CryptoWallet",
      description: "Secure and user-friendly cryptocurrency wallet application.",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://adampharrels.github.io/CryptoWalletFrontend/",
    },
    {
      id: "RoombookingSystem",
      title: "Room Booking System",
      description: "A web application for booking and managing meeting rooms.",
      tech: ["Java", "SpringBoot", "HTML", "CSS"],
      github: "https://github.com/adampharrels/ASD_Project",
    },
  ];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors ${
        light ? "bg-gray-100 text-gray-900" : "bg-zinc-900 text-slate-100"
      }`}
    >
      <Head>
        <title>Projects — Adam Nguyen</title>
      </Head>

      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Adam.</h1>
          <p className="text-sm opacity-70">CS Student · Full-stack</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            About
          </Link>
          <Link href="/projects" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            Projects
          </Link>
          <Link href="/goals" className="bg-emerald-500 text-black px-3 py-1 rounded-md text-sm font-semibold">
            List 100
          </Link>
          <button
            onClick={() => setLight(!light)}
            className="px-3 py-1 border rounded-md text-sm"
          >
            {light ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto p-6 py-12">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Projects</h3>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="bg-slate-800 text-sm px-3 py-2 rounded-md"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-xl border border-slate-700/40"
            >
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="mt-2 opacity-70 text-sm">{p.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-slate-800 px-2 py-1 rounded-md opacity-80">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.github} className="text-sm text-emerald-300 block mt-4">
                GitHub →
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="mt-12 py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Adam Nguyen
      </footer>
    </div>
  );
}
