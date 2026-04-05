"use client";

import { motion } from "framer-motion";

export default function ForkableArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#1a0f0a] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Warm grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-8">
        <defs>
          <pattern id="grid-fk" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#95E78E" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-fk)" />
      </svg>

      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Git branch lines */}
        {/* Main branch */}
        <line x1="50" y1="90" x2="230" y2="90" stroke="#95E78E" strokeWidth="2" opacity="0.3" />

        {/* Branch off */}
        <motion.path
          d="M 110 90 Q 130 90 140 60"
          stroke="#95E78E" strokeWidth="2" fill="none" opacity="0.3"
          strokeLinecap="round"
        />
        <motion.path
          d="M 140 60 L 200 60"
          stroke="#95E78E" strokeWidth="2" fill="none" opacity="0.3"
          strokeLinecap="round"
        />
        {/* Merge back */}
        <motion.path
          d="M 200 60 Q 210 60 220 90"
          stroke="#95E78E" strokeWidth="2" fill="none" opacity="0.3"
          strokeLinecap="round"
        />

        {/* Commit dots on main */}
        {[50, 80, 110, 230].map((x, i) => (
          <motion.circle
            key={`main-${i}`}
            cx={x} cy={90} r="5"
            fill="#95E78E" opacity="0.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}

        {/* Commit dots on branch */}
        {[140, 170, 200].map((x, i) => (
          <motion.circle
            key={`branch-${i}`}
            cx={x} cy={60} r="5"
            fill="#95E78E" opacity="0.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 + i * 0.3 }}
          />
        ))}

        {/* Fork icon - pixel style */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Fork handle */}
          <rect x="135" y="110" width="4" height="20" rx="1" fill="#95E78E" opacity="0.6" />
          {/* Fork prongs */}
          <rect x="127" y="100" width="4" height="14" rx="1" fill="#95E78E" opacity="0.6" />
          <rect x="135" y="100" width="4" height="14" rx="1" fill="#95E78E" opacity="0.6" />
          <rect x="143" y="100" width="4" height="14" rx="1" fill="#95E78E" opacity="0.6" />
          {/* Prong tips */}
          <circle cx="129" cy="99" r="2" fill="#95E78E" opacity="0.6" />
          <circle cx="137" cy="99" r="2" fill="#95E78E" opacity="0.6" />
          <circle cx="145" cy="99" r="2" fill="#95E78E" opacity="0.6" />
        </motion.g>

        {/* Recipe card left */}
        <motion.g
          animate={{ y: [0, -2, 0], rotate: [-2, -2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "45px 140px" }}
        >
          <rect x="20" y="115" width="50" height="55" rx="4" fill="#95E78E" opacity="0.1" />
          <rect x="20" y="115" width="50" height="14" rx="4" fill="#95E78E" opacity="0.15" />
          {/* Text lines */}
          <rect x="26" y="135" width="30" height="2" rx="1" fill="#95E78E" opacity="0.25" />
          <rect x="26" y="141" width="38" height="2" rx="1" fill="#95E78E" opacity="0.2" />
          <rect x="26" y="147" width="25" height="2" rx="1" fill="#95E78E" opacity="0.2" />
          <rect x="26" y="153" width="32" height="2" rx="1" fill="#95E78E" opacity="0.15" />
          <rect x="26" y="159" width="20" height="2" rx="1" fill="#95E78E" opacity="0.15" />
        </motion.g>

        {/* Recipe card right (the fork) */}
        <motion.g
          animate={{ y: [0, -2, 0], rotate: [2, 2, 2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "235px 140px" }}
        >
          <rect x="210" y="115" width="50" height="55" rx="4" fill="#95E78E" opacity="0.1" />
          <rect x="210" y="115" width="50" height="14" rx="4" fill="#95E78E" opacity="0.15" />
          {/* Text lines - some highlighted as "changed" */}
          <rect x="216" y="135" width="30" height="2" rx="1" fill="#95E78E" opacity="0.25" />
          <rect x="216" y="141" width="38" height="2" rx="1" fill="#95E78E" opacity="0.5" />
          <rect x="216" y="147" width="25" height="2" rx="1" fill="#95E78E" opacity="0.2" />
          <rect x="216" y="153" width="32" height="2" rx="1" fill="#95E78E" opacity="0.5" />
          <rect x="216" y="159" width="28" height="2" rx="1" fill="#95E78E" opacity="0.15" />
        </motion.g>

        {/* Arrow between cards */}
        <motion.g
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="75" y1="142" x2="205" y2="142" stroke="#95E78E" strokeWidth="1" strokeDasharray="4 4" />
          <polygon points="205,139 211,142 205,145" fill="#95E78E" />
        </motion.g>
      </svg>
    </div>
  );
}
