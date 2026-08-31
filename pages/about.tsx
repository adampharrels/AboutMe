import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import TechStack from "../components/TechStack";
import { capabilityGroups, profile } from "../data/portfolio";

export default function AboutPage(): JSX.Element {
  return (
    <Layout
      title="About"
      description="About Adam Nguyen, a Sydney-based software engineer and final-year UTS Bachelor of Information Technology student."
    >
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="About"
          title="Software, data and product work."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="h-fit border-t border-white/10 pt-5">
            <dl className="divide-y divide-white/10">
              {[
                ["Education", profile.education],
                ["Major", profile.major],
                ["Sub-major", profile.subMajor],
                ["Graduation", profile.graduation],
                ["Location", profile.location],
                ["Current role", "Software Engineer at NexStox"],
              ].map(([label, value]) => (
                <div key={label} className="py-4 first:pt-0">
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-200">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>
              I’m a final-year Bachelor of Information Technology student at
              UTS, majoring in Software Development with a Data Analytics and AI
              sub-major. Professionally, I’ve worked across software consulting,
              fintech and agriculture technology.
            </p>
            <p>
              My strongest interests sit around software, fintech, data and
              legal technology. I like building tools that make complicated
              workflows easier to reason about, especially when the domain has
              real constraints rather than a blank-canvas product brief.
            </p>
            <p>
              I’m also interested in how software, regulation and institutions
              intersect, with a longer-term goal of pursuing legal study. That
              does not make me a law student today; it means I’m paying
              attention to how technical systems meet rules, responsibility and
              public trust.
            </p>
            <p>
              Outside engineering, I’m drawn to classical guitar, public
              speaking and travel. I also have a soft spot for writers and
              interviewers who take people seriously, including Anthony
              Bourdain, mostly for the curiosity and directness rather than the
              mythology.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Technical capabilities"
            description="Grouped by how I use them across work and projects."
          />
          <div className="mt-8">
            <TechStack groups={capabilityGroups} />
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
