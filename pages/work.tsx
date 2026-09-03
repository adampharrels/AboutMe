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
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Experience" title="Professional work." />
        <div className="mt-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
}
