"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DisciplineTag from "./DisciplineTag";
import { projectIllustrations } from "./illustrations";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  disciplines: string[];
  index: number;
}

const springConfig = { type: "spring" as const, stiffness: 300, damping: 20 };

export default function ProjectCard({
  slug,
  title,
  subtitle,
  disciplines,
  index,
}: ProjectCardProps) {
  const Illustration = projectIllustrations[slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/projects/${slug}`} className="group block">
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={springConfig}
          className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface"
        >
          {Illustration ? (
            <Illustration className="rounded-2xl" />
          ) : (
            <div className="w-full h-full bg-surface" />
          )}
        </motion.div>

        <div className="mt-4 space-y-2">
          <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary">{subtitle}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {disciplines.slice(0, 3).map((d) => (
              <DisciplineTag key={d} label={d} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
