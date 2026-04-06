"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stack = [
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Swift", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "SwiftUI", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "PyTorch", category: "ML/AI" },
  { name: "XGBoost", category: "ML/AI" },
  { name: "LangChain", category: "ML/AI" },
  { name: "OpenCV", category: "ML/AI" },
  { name: "scikit-learn", category: "ML/AI" },
];

const categoryOrder = ["Languages", "Frontend", "Backend", "DevOps", "ML/AI"];

export default function TechStack() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-jetbrains-var)] text-xs uppercase tracking-widest text-text-secondary mb-10">
          Tools I use
        </h2>
      </ScrollReveal>

      <div className="space-y-8">
        {categoryOrder.map((category, ci) => (
          <ScrollReveal key={category} delay={ci * 0.08}>
            <div>
              <p className="text-sm text-text-secondary mb-3 font-medium">{category}</p>
              <div className="flex flex-wrap gap-2">
                {stack
                  .filter((t) => t.category === category)
                  .map((tool, i) => (
                    <motion.span
                      key={tool.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="px-4 py-2 rounded-lg bg-surface border border-border text-sm font-medium cursor-default hover:border-accent hover:text-accent transition-colors"
                    >
                      {tool.name}
                    </motion.span>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
