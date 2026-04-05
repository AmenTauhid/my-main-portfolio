"use client";

import ScrollReveal from "./ScrollReveal";

export default function BackstorySection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10">
      {/* Multi-column prose */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-crimson-var)] text-2xl md:text-3xl font-light italic leading-snug">
            Grew up building
            <br />
            things on screens
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-sm leading-relaxed text-text-secondary">
            I&apos;ve worked across full-stack web, native
            mobile (iOS and Android), and machine learning.
            At UHN I built patient analytics dashboards
            for clinical research. At Geotab I worked on
            device measurement modules. Before that I built
            deep learning models for medical eye-tracking
            software.
          </p>
          <p className="text-sm leading-relaxed text-text-secondary mt-4">
            I tend to gravitate toward problems where I get
            to build the whole thing, from the data layer
            up to what the user actually sees.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm leading-relaxed text-text-secondary">
            My earliest memory of building is messing around
            with code on a family computer, trying to make
            things move on screen. That curiosity turned into
            a computer science degree and a published research
            paper at ACM MSWIM &apos;23 on Bluetooth indoor
            localization.
          </p>
          <p className="text-sm leading-relaxed text-text-secondary mt-4">
            Since then, I&apos;ve been chasing that same feeling
            of making something work for the first time.
          </p>
        </ScrollReveal>
      </div>

    </section>
  );
}
