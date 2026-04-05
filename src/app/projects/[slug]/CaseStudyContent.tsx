"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MetricCard from "@/components/MetricCard";
import DisciplineTag from "@/components/DisciplineTag";
import type { Project } from "@/data/projects";

// Simple pixel doodle decoration for sections
function SectionDoodle({ index }: { index: number }) {
  const patterns = [
    // Scattered dots
    <svg key="dots" viewBox="0 0 200 150" className="w-full h-full">
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={20 + (i * 37) % 160}
          y={15 + (i * 23) % 120}
          width="4"
          height="4"
          rx="1"
          fill="#95E78E"
          opacity={0.1 + (i % 4) * 0.1}
        />
      ))}
      <rect x="60" y="40" width="80" height="60" rx="8" fill="#95E78E" opacity="0.06" />
      <rect x="70" y="55" width="40" height="3" rx="1" fill="#95E78E" opacity="0.15" />
      <rect x="70" y="63" width="55" height="3" rx="1" fill="#95E78E" opacity="0.12" />
      <rect x="70" y="71" width="35" height="3" rx="1" fill="#95E78E" opacity="0.1" />
    </svg>,
    // Mini bar chart
    <svg key="bars" viewBox="0 0 200 150" className="w-full h-full">
      {[30, 55, 80, 105, 130, 155].map((x, i) => (
        <rect
          key={i}
          x={x}
          y={90 - (20 + ((i * 17) % 50))}
          width="12"
          height={20 + ((i * 17) % 50)}
          rx="2"
          fill="#95E78E"
          opacity={0.08 + i * 0.03}
        />
      ))}
      <line x1="24" y1="92" x2="176" y2="92" stroke="#95E78E" strokeWidth="1" opacity="0.1" />
    </svg>,
    // Connected nodes
    <svg key="nodes" viewBox="0 0 200 150" className="w-full h-full">
      {[
        [50, 40], [100, 30], [150, 50], [60, 90], [110, 100], [140, 80],
      ].map(([cx, cy], i, arr) => (
        <g key={i}>
          {i < arr.length - 1 && (
            <line
              x1={cx} y1={cy}
              x2={arr[i + 1][0]} y2={arr[i + 1][1]}
              stroke="#95E78E" strokeWidth="1" opacity="0.08"
            />
          )}
          <circle cx={cx} cy={cy} r="6" fill="#95E78E" opacity="0.08" />
          <circle cx={cx} cy={cy} r="3" fill="#95E78E" opacity="0.15" />
        </g>
      ))}
    </svg>,
    // Pixel brackets / code
    <svg key="code" viewBox="0 0 200 150" className="w-full h-full">
      <rect x="40" y="30" width="120" height="90" rx="6" fill="#95E78E" opacity="0.04" />
      {[45, 55, 65, 75, 85, 95].map((y, i) => (
        <rect
          key={i}
          x={55 + (i % 3) * 8}
          y={y}
          width={30 + ((i * 13) % 60)}
          height="3"
          rx="1"
          fill="#95E78E"
          opacity={0.06 + (i % 3) * 0.04}
        />
      ))}
    </svg>,
  ];

  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-surface/50 flex items-center justify-center overflow-hidden">
      {patterns[index % patterns.length]}
    </div>
  );
}

interface CaseStudyContentProps {
  project: Project;
  nextProject: Project;
}

export default function CaseStudyContent({
  project,
  nextProject,
}: CaseStudyContentProps) {
  return (
    <>
      {/* Meta Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((d) => (
                <DisciplineTag key={d} label={d} />
              ))}
            </div>
            <span className="font-[family-name:var(--font-jetbrains-var)] text-sm text-text-secondary">
              {project.year}
            </span>
          </div>
        </ScrollReveal>

        {/* Introduction */}
        <ScrollReveal delay={0.1}>
          <p className="mt-10 md:mt-16 text-lg md:text-xl leading-relaxed text-text-secondary max-w-3xl">
            {project.description}
          </p>
        </ScrollReveal>
      </div>

      {/* Metrics */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 px-8 rounded-2xl bg-surface">
          {project.metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Narrative Sections */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-20 md:space-y-32 pb-20 md:pb-32">
        {project.sections.map((section, i) => (
          <div
            key={section.heading}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 md:gap-16 items-start`}
          >
            <div className="flex-1 space-y-4">
              <ScrollReveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-jakarta-var)] text-2xl md:text-3xl font-bold">
                  {section.heading}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                  {section.body}
                </p>
              </ScrollReveal>
            </div>

            {section.image && (
              <ScrollReveal
                delay={0.15}
                direction={i % 2 === 0 ? "right" : "left"}
                className="flex-1 w-full"
              >
                <SectionDoodle index={i} />
              </ScrollReveal>
            )}
          </div>
        ))}
      </div>

      {/* Learnings */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-32">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains-var)] text-xs uppercase tracking-widest text-text-secondary mb-10">
            What I took away
          </h2>
        </ScrollReveal>

        <div className="space-y-8 max-w-3xl">
          {project.learnings.map((learning, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-6">
                <span className="font-[family-name:var(--font-jakarta-var)] text-3xl font-bold text-accent shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-text-secondary leading-relaxed text-base md:text-lg pt-1">
                  {learning}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-border">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24"
        >
          <ScrollReveal>
            <span className="font-[family-name:var(--font-jetbrains-var)] text-xs uppercase tracking-widest text-text-secondary">
              Next Project
            </span>
            <h3 className="font-[family-name:var(--font-jakarta-var)] text-2xl md:text-4xl font-bold mt-4 group-hover:text-accent transition-colors">
              {nextProject.title}
              <span className="inline-block ml-3 text-accent group-hover:translate-x-2 transition-transform">
                ⟢
              </span>
            </h3>
          </ScrollReveal>
        </Link>
      </div>
    </>
  );
}
