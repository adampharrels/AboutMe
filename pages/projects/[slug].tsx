import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import CallToAction from "../../components/CallToAction";
import ExternalTextLink from "../../components/ExternalTextLink";
import Layout from "../../components/Layout";
import SectionHeading from "../../components/SectionHeading";
import TechnologyTags from "../../components/TechnologyTags";
import {
  caseStudyProjects,
  projects,
  type Project,
} from "../../data/portfolio";

type ProjectImage = NonNullable<Project["images"]>[number];

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps): JSX.Element {
  const caseStudy = project.caseStudy;
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  if (!caseStudy) {
    return (
      <Layout title={project.title} description={project.summary}>
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <h1 className="mt-6 text-4xl font-semibold text-white">
            {project.title}
          </h1>
          <p className="mt-4 text-slate-300">
            No case study is published for this project yet.
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={`${project.title} Case Study`} description={project.summary}>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <SectionHeading
            eyebrow="Case study"
            title={project.title}
            description={project.summary}
          />
          <aside className="h-fit border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Stack
            </p>
            <div className="mt-4">
              <TechnologyTags technologies={project.technologies} />
            </div>
            <div className="mt-6 space-y-3">
              {project.links
                .filter((link) => link.kind !== "case-study")
                .map((link) => (
                  <ExternalTextLink key={link.href} href={link.href}>
                    {link.label}
                  </ExternalTextLink>
                ))}
            </div>
          </aside>
        </div>
      </section>

      {project.images && project.images.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {project.images.map((image) => (
              <figure
                key={image.src}
                className="border border-white/10 bg-[#12151b]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="block w-full border-b border-white/10 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                  aria-label={`Open larger screenshot: ${image.caption}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover object-top transition hover:opacity-90"
                    loading="lazy"
                  />
                </button>
                <figcaption className="p-3 text-sm text-slate-400">
                  {image.caption}. Click to enlarge.
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="border-y border-white/10 bg-black/20 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <CaseBlock title="Overview" body={caseStudy.overview} />
          <CaseBlock title="Problem" body={caseStudy.problem} />
          <CaseBlock title="Users" body={caseStudy.users} />
          <CaseBlock title="Outcome" body={caseStudy.outcome} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2">
        <CaseList
          title="Main capabilities"
          items={caseStudy.mainCapabilities}
        />
        {caseStudy.myContribution && caseStudy.myContribution.length > 0 && (
          <CaseList title="My contribution" items={caseStudy.myContribution} />
        )}
        <CaseList
          title="Technical approach"
          items={caseStudy.technicalApproach}
        />
        <CaseList
          title="Important engineering decisions"
          items={caseStudy.decisions}
        />
        <CaseList
          title="Challenges and trade-offs"
          items={caseStudy.challenges}
        />
      </section>

      <CallToAction />

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.caption}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-slate-200">
              <p className="text-sm font-medium">{selectedImage.caption}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-slate-100 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                aria-label="Close larger screenshot"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[82vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className=" border border-white/10 bg-white/[0.035] p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
    </section>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className=" border border-white/10 bg-white/[0.035] p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[0.85rem_1fr] gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 bg-emerald-300"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudyProjects.map((project) => ({
    params: { slug: project.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectCaseStudyProps> = async ({
  params,
}) => {
  const project = projects.find((item) => item.slug === params?.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};
