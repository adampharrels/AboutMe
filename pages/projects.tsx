import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { featuredProjects, secondaryProjects } from "../data/portfolio";

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Selected projects by Adam Nguyen across fintech, legal technology, data and AI, mobile development and frontend engineering."
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Projects
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Secondary projects"
            title="Smaller work and earlier experiments."
            description="Kept deliberately subdued so the main portfolio stays focused."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
