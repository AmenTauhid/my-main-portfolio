"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Sad pet */}
      <motion.svg
        width={80}
        height={96}
        viewBox="0 0 80 96"
        fill="none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Ears */}
        <rect x="20" y="2" width="8" height="28" rx="4" fill="#95E78E" />
        <rect x="52" y="2" width="8" height="28" rx="4" fill="#95E78E" />
        {/* Head */}
        <rect x="16" y="26" width="48" height="44" rx="10" fill="#95E78E" />
        {/* Sad eyes */}
        <path d="M27 46 Q31 42 35 46" stroke="#062C02" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M45 46 Q49 42 53 46" stroke="#062C02" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Nose */}
        <ellipse cx="40" cy="53" rx="3" ry="2" fill="#062C02" />
        {/* Frown */}
        <path d="M34 60 Q40 56 46 60" stroke="#062C02" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Body */}
        <rect x="18" y="68" width="44" height="24" rx="8" fill="#95E78E" />
      </motion.svg>

      <h1 className="font-[family-name:var(--font-jakarta-var)] text-6xl md:text-8xl font-bold mt-8">
        404
      </h1>
      <p className="text-text-secondary mt-3 text-lg">
        This page wandered off somewhere.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent hover:text-accent-dark transition-all duration-300"
      >
        Take me home
      </Link>
    </div>
  );
}
