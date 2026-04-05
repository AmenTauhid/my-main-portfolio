import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import CaseStudyContent from "./CaseStudyContent";
import CaseStudyCover from "./CaseStudyCover";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Ayman Tauhid`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      {/* Cover with illustration */}
      <CaseStudyCover project={project} />

      {/* Client-side animated content */}
      <CaseStudyContent project={project} nextProject={nextProject} />
    </div>
  );
}
