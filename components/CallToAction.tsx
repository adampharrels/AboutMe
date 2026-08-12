import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="border border-white/10 bg-[#12151b] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Contact
        </p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
          I’m open to graduate and junior software, data and technology
          opportunities from late 2026.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Send me an email or connect with me on LinkedIn. I’m especially
          interested in Sydney and Melbourne roles across software engineering,
          fintech, full-stack product work, data and technology consulting.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-emerald-400 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-300"
          >
            <Mail size={17} />
            Email Adam
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
          >
            <Github size={17} />
            GitHub
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
