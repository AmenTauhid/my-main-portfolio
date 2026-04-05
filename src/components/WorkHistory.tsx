"use client";

import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    description: "Full stack development",
    company: "Centre for Applied AI (UHN)",
    period: "2025",
  },
  {
    description: "Mobile development, iOS & Android",
    company: "Geotab",
    period: "2025",
  },
  {
    description: "Full stack, deep learning",
    company: "Oakville Centre For Vision",
    period: "2024",
  },
  {
    description: "ML engineering, OCR models",
    company: "Accolite Digital",
    period: "2023",
  },
  {
    description: "ML research, published at ACM",
    company: "Centre for Applied AI (TELUS)",
    period: "2022 - 2023",
  },
  {
    description: "Honours BSc, Mobile Computing",
    company: "Sheridan College",
    period: "2021 - 2025",
  },
];

export default function WorkHistory() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-right font-[family-name:var(--font-crimson-var)] text-4xl md:text-6xl lg:text-7xl mb-16 md:mb-24">
          <span className="font-light">Recent</span>
          <br />
          <span className="italic font-light">adventures</span>
        </h2>
      </ScrollReveal>

      <div className="space-y-0">
        {roles.map((role, i) => (
          <ScrollReveal key={role.company} delay={i * 0.06}>
            <div className="grid grid-cols-1 sm:grid-cols-[45%_40%_15%] gap-2 sm:gap-0 items-baseline py-6 border-b border-border">
              <span className="text-base md:text-lg text-text">
                {role.description}
              </span>
              <span className="font-[family-name:var(--font-jakarta-var)] text-base md:text-lg font-medium">
                {role.company}
              </span>
              <span className="text-base md:text-lg text-text-secondary text-right">
                {role.period}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
