import { useContext } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { ThemeContext } from "../context/theme";

export default function WorkPage() {
  const roles = [
    {
      company: "NexStox",
      role: "Software Engineering Intern",
      period: "2025",
      bullets: [
        "Built and shipped production frontend features using React and TypeScript",
        "Worked closely with backend APIs and real trading data",
        "Optimised UI flows with a focus on speed, clarity, and correctness",
      ],
      stack: ["React", "TypeScript", "Next.js", "REST APIs"],
    },
    {
      company: "TMA Solutions",
      role: "Software Engineering Intern",
      period: "2024",
      bullets: [
        "Developed internal tools and client-facing features",
        "Collaborated in an Agile team with designers and senior engineers",
        "Focused on writing clean, maintainable, and well-documented code",
      ],
      stack: ["JavaScript", "React", "Agile"],
    },
  ];

  const { light, setLight } = useContext(ThemeContext);

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
          <h1 className="text-3xl font-bold">Adam.</h1>
          <p className="text-sm opacity-70">CS Student· Full-stack</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            About
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

  {/* Timeline */}
  <section className="max-w-6xl mx-auto p-6 py-16 space-y-16">
        {roles.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              sx={{
                bgcolor: 'transparent',
                border: '1px solid rgba(148,163,184,0.12)',
                boxShadow: 'none',
                color: 'inherit',
                fontFamily: 'inherit',
                borderRadius: '0.1rem'
              }}
            >
              <CardContent sx={{ p: 3, color: 'inherit', fontFamily: 'inherit' }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">{r.company}</h2>
                    <p className="text-zinc-400">{r.role}</p>
                  </div>
                  <p className="text-sm text-zinc-500 mt-2 md:mt-0">{r.period}</p>
                </div>

                <ul className="space-y-3 text-zinc-300 mb-6 list-disc list-inside">
                  {r.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      size="small"
                      variant="outlined"
                      sx={{ color: 'inherit', borderColor: 'rgba(148,163,184,0.12)', background: 'transparent' }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto p-6 py-16">
        <Card sx={{ bgcolor: 'transparent', border: '1px solid rgba(148,163,184,0.12)', boxShadow: 'none', color: 'inherit', fontFamily: 'inherit', borderRadius: '0.75rem' }}>
          <CardContent sx={{ p: 3, color: 'inherit', fontFamily: 'inherit' }} className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Want more detail?</h3>
              <p className="text-zinc-400">Happy to walk through my work or share code samples.</p>
            </div>
            <Button variant="contained" color="success" href="mailto:adam.nguyen@email.com" sx={{ textTransform: 'none' }}>
              Get in touch
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Adam Nguyen
      </footer>
    </div>
  );
}
