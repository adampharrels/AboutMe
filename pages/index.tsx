import { useContext } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Github, Linkedin } from "lucide-react";
import { ThemeContext } from "../context/theme";

export default function Home(): JSX.Element {
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
          <a href="/" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            About
          </a>
          <a href="/projects" className="text-sm px-3 py-1 rounded-md hover:opacity-70">
            Projects
          </a>
          <a href="/goals" className="bg-emerald-500 text-black px-3 py-1 rounded-md text-sm font-semibold">
            List 100
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
            I'm Adam - CS student from Sydney, Australia.
            I like building tools.
          </p>

          <h3 className="mt-6 font-semibold text-lg">Work Experience</h3>
          <ul className="mt-2 space-y-2 opacity-80 text-sm">
            <li>• NexStox - Software Engineering Intern</li>
            <li>• TMA Solutions - Software Engineering Intern</li>
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
          <p>• Building a live regulation tracker</p>
          <p>• Studying C++ + DSA</p>
        </aside>
      </section>

      <section className="max-w-6xl mx-auto p-6 py-16 grid md:grid-cols-3 gap-10">
        <Card
          sx={{
            bgcolor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: 'inherit',
            fontFamily: 'inherit'
          }}
        >
          <CardContent sx={{ p: 3, color: 'inherit', fontFamily: 'inherit' }}>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-zinc-400 mb-4">
              Have a project, internship, or something interesting? Let’s align.
            </p>
            <div className="flex flex-wrap gap-3 items-center md:flex-nowrap">
              <Button
                variant="contained"
                color="success"
                href="mailto:adamnguyxn.au@email.com"
                sx={{ textTransform: 'none', maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              >
                adamnguyxn.au@email.com
              </Button>
              <IconButton
                aria-label="github"
                href="https://github.com/adampharrels"
                color="inherit"
                sx={{
                  transition: 'transform 180ms ease, color 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.12)',
                    color: '#10B981'
                  }
                }}
              >
                <Github />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/adam-nguyen-2517222a0/"
                color="inherit"
                sx={{
                  transition: 'transform 180ms ease, color 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.12)',
                    color: '#0A66C2'
                  }
                }}
              >
                <Linkedin />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Adam Nguyen
      </footer>
    </div>
  );
}
