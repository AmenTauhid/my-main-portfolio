"use client";

import { projectIllustrations } from "@/components/illustrations";
import type { Project } from "@/data/projects";

export default function CaseStudyCover({ project }: { project: Project }) {
  const Illustration = projectIllustrations[project.slug];

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      {Illustration ? (
        <Illustration />
      ) : (
        <div className="w-full h-full bg-surface" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 max-w-[1400px] mx-auto px-6 md:px-10 pb-10 md:pb-16">
        <h1 className="font-[family-name:var(--font-jakarta-var)] text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-text-secondary max-w-2xl">
          {project.subtitle}
        </p>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          View on GitHub <span>↗</span>
        </a>
      </div>
    </div>
  );
}
