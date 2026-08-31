import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import TechStack from "../components/TechStack";
import { capabilityGroups } from "../data/portfolio";

export default function SkillsPage(): JSX.Element {
  return (
    <Layout
      title="Skills"
      description="Technical skills for Adam Nguyen across programming languages, frontend, backend, tools and platforms."
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Technical stack"
          description="Programming languages, frontend, backend, tools and platforms I use across work and projects."
        />
        <div className="mt-10">
          <TechStack groups={capabilityGroups} />
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
