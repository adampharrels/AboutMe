import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="border-t border-white/10 pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Contact
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white">
          I’m open to graduate and junior software, data and technology
          opportunities from late 2026.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Send me an email or connect with me on LinkedIn. I’m especially
          interested in Sydney and Melbourne roles across software engineering,
          fintech, full-stack product work, data and technology consulting.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
          >
            <Mail size={17} />
            Email Adam
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-emerald-200"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-emerald-200"
          >
            <Github size={17} />
            GitHub
          </a>
          <a
            href={profile.resume}
            download="Resume_AdamNguyen.pdf"
            className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-emerald-200"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
