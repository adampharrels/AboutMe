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
      company: "StevTech",
      role:  "Data Engineering Intern",
      period: "11/2024 - 01/2025",
      bullets: [
        "Reduced drone imagery preparation time from hours to seconds by building a Python data pipeline that processes multi-sensor datasets up to ∼50GB per batch for downstream computer vision weed-detection models.",
        "Improved pipeline extensibility by designing a base class architecture that standardised how new drone and sensor types are integrated without modifying existing processing logic.",
        "Increased metadata consistency across drone payloads by developing sensor-specific processors that standardised timestamps, coordinates, units, and field names into a unified schema.",
      ],
      stack: ["Tech: Python, pandas, exiftool, rasterio, FastAPI, SQLite"]
    },
    {
      company: "NexStox",
      role: "Software Engineering Intern",
      period: "01/2026 - Present",
      bullets: [
        "Owned the migration of a high-traffic game from Next.js to Vite, reducing frontend build time by ∼40–60% and improving local development speed",
        "Developed responsive trading interfaces across NXMarket and NexStox, including Staking, Order History, Funding, and Stake wallet pages, improving usability across desktop and mobile platforms",
        "Shipped fintech product changes across short engineering, product, and business iteration cycles",
        "Built admin dashboard tooling that cut publishing time by ∼50%, reducing dependency on frontend engineers.",
      ],
      stack: ["React", "TypeScript", "Next.js", "REST APIs"],
    },
    {
      company: "TMA Solutions Australia",
      role: "Software Engineering Intern",
      period: "7/2025 - 10/2025",
      bullets: [
        "Improved internal workforce planning by building systems for skills tracking, resource allocation, and project data analysis.",
        "Reduced duplicated frontend logic by ∼30–40% by refactoring Angular data tables with 1,000+ records into reusable components.",
        "Reduced manual query handling by ∼40% by developing a multilingual voice-input module with 90% recognition accuracy in testing.",
        "Improved system reliability by debugging performance issues and validating fixes through structured testing during Agile sprint cycles."
      ],
      stack: ["JavaScript", "TypeScript", "Angular CLI", "Hono", "Next.js", "NestJS", "React", "Agile"],
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
            <Button variant="contained" color="success" href="mailto:adamnguyxn.au@email.com" sx={{ textTransform: 'none' }}>
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
