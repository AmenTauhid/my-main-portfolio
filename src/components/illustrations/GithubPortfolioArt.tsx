"use client";

import { motion } from "framer-motion";

export default function GithubPortfolioArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Browser chrome */}
        <rect x="30" y="15" width="220" height="150" rx="8" fill="#95E78E" opacity="0.05" />
        <rect x="30" y="15" width="220" height="20" rx="8" fill="#95E78E" opacity="0.08" />
        <circle cx="44" cy="25" r="3" fill="#95E78E" opacity="0.15" />
        <circle cx="54" cy="25" r="3" fill="#95E78E" opacity="0.15" />
        <circle cx="64" cy="25" r="3" fill="#95E78E" opacity="0.15" />
        {/* URL bar */}
        <rect x="80" y="21" width="120" height="8" rx="4" fill="#95E78E" opacity="0.06" />

        {/* Chat-style layout (Apple iMessage inspired) */}
        {/* Left-aligned bubbles */}
        <motion.rect x="45" y="45" width="80" height="14" rx="7" fill="#95E78E" opacity="0.1"
          animate={{ opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect x="45" y="65" width="110" height="14" rx="7" fill="#95E78E" opacity="0.12"
          animate={{ opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
        />

        {/* Right-aligned bubbles (responses) */}
        <motion.rect x="155" y="85" width="80" height="14" rx="7" fill="#95E78E" opacity="0.18"
          animate={{ opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.rect x="140" y="105" width="95" height="14" rx="7" fill="#95E78E" opacity="0.15"
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.2, ease: "easeInOut" }}
        />

        {/* Typing indicator dots */}
        <motion.g
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="55" cy="132" r="2.5" fill="#95E78E" opacity="0.3" />
          <circle cx="63" cy="132" r="2.5" fill="#95E78E" opacity="0.3" />
          <circle cx="71" cy="132" r="2.5" fill="#95E78E" opacity="0.3" />
        </motion.g>

        {/* Navigation icons at top of "page" */}
        {[50, 75, 100, 125].map((x, i) => (
          <motion.rect key={i} x={x} y="40" width="8" height="3" rx="1" fill="#95E78E" opacity="0.12"
            animate={{ opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}

        {/* Apple-style rounded corners accent */}
        <rect x="195" y="45" width="40" height="18" rx="9" fill="#95E78E" opacity="0.08" />
        <rect x="201" y="50" width="28" height="3" rx="1" fill="#95E78E" opacity="0.15" />
        <rect x="201" y="56" width="20" height="3" rx="1" fill="#95E78E" opacity="0.1" />
      </svg>
    </div>
  );
}
