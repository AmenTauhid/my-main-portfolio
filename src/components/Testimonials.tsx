"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Ayman picks things up fast and isn't afraid to dig into unfamiliar codebases. Solid engineer to work with.",
    name: "Placeholder Name",
    role: "Engineering Manager",
    company: "Company",
  },
  {
    quote:
      "Really impressed with how he handled both the iOS and Android sides. He thinks about the whole system, not just his piece.",
    name: "Placeholder Name",
    role: "Senior Developer",
    company: "Company",
  },
  {
    quote:
      "His research work on indoor localization was thorough and well-executed. The paper practically wrote itself from his results.",
    name: "Placeholder Name",
    role: "Research Supervisor",
    company: "Sheridan College",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-jetbrains-var)] text-xs uppercase tracking-widest text-text-secondary mb-10">
          What people say
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-6 rounded-2xl bg-surface border border-border h-full flex flex-col">
              <p className="font-[family-name:var(--font-crimson-var)] text-lg italic leading-relaxed text-text flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-[family-name:var(--font-jakarta-var)] text-sm font-semibold">
                  {t.name}
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
