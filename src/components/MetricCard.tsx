"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  index: number;
}

export default function MetricCard({ value, label, index }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.3,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="text-center md:text-left"
    >
      <div className="font-[family-name:var(--font-jakarta-var)] text-4xl md:text-5xl font-bold text-accent">
        {value}
      </div>
      <div className="mt-2 text-sm text-text-secondary">{label}</div>
    </motion.div>
  );
}
