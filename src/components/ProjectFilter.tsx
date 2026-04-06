"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat
              ? "text-accent-dark"
              : "text-text-secondary hover:text-text"
          }`}
        >
          {active === cat && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 bg-accent rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
