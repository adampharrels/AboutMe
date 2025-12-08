import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home(): JSX.Element {
  const [light, setLight] = useState(false);

  return (
    <div
      className={`min-h-screen font-sans transition-colors ${
        light ? "bg-gray-100 text-gray-900" : "bg-zinc-900 text-slate-100"
      }`}
    >
      <Head>
        <title>Adam Nguyen — Portfolio</title>
        <meta name="description" content="Adam Nguyen — Law-tech hybrid · Full-stack" />
      </Head>

      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Adam Nguyen</h1>
          <p className="text-sm opacity-70">Law-tech hybrid · Full-stack</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="/" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            About
          </a>
          <a href="/projects" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            Projects
          </a>
          <a href="/goals" className="bg-emerald-500 text-black px-3 py-1 rounded-md text-sm font-semibold">
            100 Things
          </a>
          <button
            onClick={() => setLight(!light)}
            className="px-3 py-1 border rounded-md text-sm"
          >
            {light ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      {/* ABOUT — Landing */}
      <section className="max-w-6xl mx-auto p-6 py-16 grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2"
        >
          <h2 className="text-4xl font-extrabold">About Me</h2>
          <p className="mt-4 opacity-80 leading-relaxed">
            I'm Adam — a hybrid thinker moving between legal systems and software engineering.
            I build tools that help people think smarter, ship faster, and avoid chaos.
          </p>

          <h3 className="mt-6 font-semibold text-lg">Work Experience</h3>
          <ul className="mt-2 space-y-2 opacity-80 text-sm">
            <li>• IA Group — Legal Tech Intern</li>
            <li>• Yarraland Real Estate — Admin + Ops Tech</li>
            <li>• Nexstox — SWE Intern (Incoming)</li>
          </ul>

          <h3 className="mt-6 font-semibold text-lg">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "C++", "Tailwind", "Docker", "Agile"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs bg-slate-800/50 border border-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <aside className="p-6 rounded-xl border border-slate-700/40 text-sm opacity-80">
          <h4 className="font-semibold">Currently</h4>
          <p>• Building DailyThink</p>
          <p>• Studying C++ + DSA</p>
          <p>• Pursuing JD pathway</p>
        </aside>
      </section>

      <footer className="mt-12 py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Adam Nguyen
      </footer>
    </div>
  );
}
