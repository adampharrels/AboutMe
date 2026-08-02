import CallToAction from "../components/CallToAction";
import ExperienceCard from "../components/ExperienceCard";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/portfolio";

export default function WorkPage(): JSX.Element {
  return (
    <Layout
      title="Experience"
      description="Professional experience for Adam Nguyen across fintech software engineering, full-stack consulting systems and data engineering."
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Professional work across fintech, full-stack systems and data engineering."
          description="A concise view of what I worked on, what I was responsible for and the outcomes I can discuss without exposing confidential details."
        />
        <div className="mt-10 space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
}
