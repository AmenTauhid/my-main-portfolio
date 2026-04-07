"use client";

import { motion } from "framer-motion";

export default function LinkCleanerArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0d0a14] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Dirty URL bar */}
        <rect x="20" y="30" width="240" height="28" rx="6" fill="#95E78E" opacity="0.06" />
        <rect x="28" y="38" width="60" height="4" rx="2" fill="#95E78E" opacity="0.3" />
        {/* Tracking params highlighted red-ish */}
        <rect x="92" y="38" width="25" height="4" rx="2" fill="#95E78E" opacity="0.12" />
        <rect x="120" y="38" width="35" height="4" rx="2" fill="#95E78E" opacity="0.12" />
        <rect x="158" y="38" width="28" height="4" rx="2" fill="#95E78E" opacity="0.12" />
        <rect x="189" y="38" width="22" height="4" rx="2" fill="#95E78E" opacity="0.12" />
        {/* Strikethrough lines on tracking params */}
        <motion.line
          x1="90" y1="40" x2="215" y2="40"
          stroke="#95E78E" strokeWidth="1.5" opacity="0.5"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        />

        {/* Arrow down */}
        <motion.g
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="140" y1="68" x2="140" y2="88" stroke="#95E78E" strokeWidth="1.5" opacity="0.3" />
          <polygon points="134,85 140,93 146,85" fill="#95E78E" opacity="0.3" />
        </motion.g>

        {/* Clean URL bar */}
        <motion.g
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="40" y="100" width="200" height="28" rx="6" fill="#95E78E" opacity="0.08" />
        </motion.g>
        <rect x="48" y="108" width="60" height="4" rx="2" fill="#95E78E" opacity="0.4" />
        {/* Checkmark */}
        <motion.path
          d="M220 112 L224 116 L232 108"
          stroke="#95E78E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3.5, ease: "easeOut" }}
        />

        {/* Shield icon */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 152px" }}
        >
          <path
            d="M130 142 L140 136 L150 142 L150 158 Q140 164 130 158 Z"
            fill="#95E78E" fillOpacity="0.1"
            stroke="#95E78E" strokeWidth="1" strokeOpacity="0.2"
          />
          <path
            d="M136 152 L139 155 L145 149"
            stroke="#95E78E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"
          />
        </motion.g>

        {/* Floating param labels being removed */}
        {["utm", "fbclid", "gclid", "ref"].map((label, i) => (
          <motion.text
            key={label}
            x={30 + i * 65}
            y={78}
            fontSize="8"
            fontFamily="monospace"
            fill="#95E78E"
            opacity={0.15}
            animate={{
              opacity: [0.15, 0.3, 0, 0, 0.15],
              y: [78, 75, 70, 70, 78],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          >
            {label}
          </motion.text>
        ))}
      </svg>
    </div>
  );
}
