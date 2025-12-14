import Head from "next/head";
import Link from 'next/link';
import { useContext } from "react";
import goalsData from "../data/goals.json";
import { ThemeContext } from "../context/theme";

export default function Goals(): JSX.Element {
  const { light, setLight } = useContext(ThemeContext);
  const goals: string[] = goalsData;

  return (
    <div
      className={`min-h-screen font-sans transition-colors ${
        light ? "bg-gray-100 text-gray-900" : "bg-zinc-900 text-slate-100"
      }`}
    >
      <Head>
        <title>100 Goals — Adam Nguyen</title>
      </Head>

      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Adam.</h1>
          <p className="text-sm opacity-70">CS Student · Full-stack</p>
        </div>
        <nav className="flex items-center gap-4">
                  <Link href="/" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
                    Background
                  </Link>
                  <Link href="/work" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
                    Work
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

      {/* Main Content */}
      <section className="max-w-4xl mx-auto p-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold mb-2">100 Goals I Wanna Do</h2>
          <p className="text-sm opacity-70">
            A list of 100 things I want to achieve in my life, 
            spanning personal, professional, and adventurous aspirations.
          </p>
          <p className="text-sm opacity-70">
            I aim to achieve everything in the list and do not sacrifice my values along the way.
          </p>
        </div>

        {/* Goals List (read-only) */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {goals.map((g, i) => (
            <li
              key={i}
              className="p-3 rounded-md bg-slate-800/60 flex items-center justify-between"
            >
              <span className="text-sm">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Adam Nguyen
      </footer>
    </div>
  );
}
