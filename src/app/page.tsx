"use client";

import { useState, useMemo } from "react";
import BlurFade from "@/components/BlurFade";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedAvatar from "@/components/AnimatedAvatar";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import WorkHistory from "@/components/WorkHistory";
import BackstorySection from "@/components/BackstorySection";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";
import { projects } from "@/data/projects";

const allDisciplines = Array.from(
  new Set(projects.flatMap((p) => p.disciplines))
);
const categories = ["All", ...allDisciplines];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.disciplines.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* ====== Hero Section ====== */}
        <BlurFade>
          <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-12 pb-28 md:pb-44">
            {/* Top row: avatar left, buttons right */}
            <div className="flex items-start justify-between mb-12 md:mb-20">
              <AnimatedAvatar />

              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300"
                >
                  Resume
                </a>
                <button
                  onClick={() => setContactOpen(true)}
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent hover:text-accent-dark transition-all duration-300"
                >
                  Get in touch
                </button>
              </div>
            </div>

            {/* Name */}
            <h2 className="font-[family-name:var(--font-jakarta-var)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ayman Tauhid
            </h2>

            {/* Big statement */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.2rem] leading-[1.15] tracking-tight max-w-4xl">
              <span className="font-[family-name:var(--font-crimson-var)] font-light">
                I design and build{" "}
              </span>
              <span className="font-[family-name:var(--font-jakarta-var)] font-semibold bg-accent/20 px-1.5 sm:px-2 rounded-md">
                software
              </span>
              <span className="font-[family-name:var(--font-crimson-var)] font-light">
                {" "}that{" "}
              </span>
              <br className="hidden md:block" />
              <span className="font-[family-name:var(--font-crimson-var)] font-light">
                works well{" "}
              </span>
              <span className="text-accent text-xl sm:text-3xl md:text-5xl">✦</span>
              <span className="font-[family-name:var(--font-crimson-var)] font-light">
                {" "}and feels right{" "}
              </span>
              <span className="text-accent text-lg sm:text-2xl md:text-4xl">✻</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 md:mt-12 text-sm sm:text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
              Full stack, mobile, and ML. I like working across the whole stack
              because the best products come from people who understand every layer.
            </p>

            {/* Links row */}
            <div className="flex flex-wrap items-center gap-3 mt-6 md:mt-8">
              <a
                href="https://www.linkedin.com/in/aymantauhid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                LinkedIn ↗
              </a>
              <span className="text-border">·</span>
              <a
                href="https://github.com/AmenTauhid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                GitHub ↗
              </a>
              <span className="text-border">·</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                Resume ↗
              </a>
              <button
                onClick={() => setContactOpen(true)}
                className="sm:hidden inline-flex items-center gap-2 ml-auto px-5 py-2.5 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent hover:text-accent-dark transition-all duration-300"
              >
                Get in touch
              </button>
            </div>

            {/* Cmd+K hint */}
            <div className="mt-6 flex items-center gap-2">
              <kbd className="px-2 py-1 rounded text-[10px] text-text-secondary/60 border border-border/60 font-[family-name:var(--font-jetbrains-var)]">
                ⌘K
              </kbd>
              <span className="text-[11px] text-text-secondary/50">to navigate quickly</span>
            </div>
          </section>
        </BlurFade>

        {/* ====== Featured Projects ====== */}
        <section id="projects" className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-jetbrains-var)] text-xs uppercase tracking-widest text-text-secondary mb-6">
              Recent Projects
            </h2>
          </ScrollReveal>

          <ProjectFilter
            categories={categories}
            active={activeFilter}
            onChange={setActiveFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                subtitle={project.subtitle}
                disciplines={project.disciplines}
                index={i}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-text-secondary py-16 text-sm">
              No projects match this filter.
            </p>
          )}
        </section>

        {/* ====== Work History ====== */}
        <div id="work" className="pb-24 md:pb-32">
          <WorkHistory />
        </div>

        {/* ====== Tech Stack ====== */}
        <div id="stack" className="pb-24 md:pb-32">
          <TechStack />
        </div>

        {/* ====== Testimonials ====== */}
        <div className="pb-24 md:pb-32">
          <Testimonials />
        </div>

        {/* ====== Backstory ====== */}
        <div id="about" className="pb-24 md:pb-32">
          <BackstorySection />
        </div>

        {/* ====== Contact Modal ====== */}
        <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </PageTransition>
  );
}
