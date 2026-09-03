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
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Projects" title="Selected builds." />

        <div className="mt-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Secondary projects"
            title="Smaller work and earlier experiments."
            description="Kept deliberately subdued so the main portfolio stays focused."
          />
          <div className="mt-8">
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
