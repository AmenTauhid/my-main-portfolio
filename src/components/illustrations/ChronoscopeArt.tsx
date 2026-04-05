"use client";

import { motion } from "framer-motion";

export default function ChronoscopeArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0d0d1a] flex items-center justify-center overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-8">
        <defs>
          <pattern id="dots-ch" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="7" cy="7" r="0.8" fill="#95E78E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-ch)" />
      </svg>

      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Timeline bar */}
        <line x1="30" y1="120" x2="250" y2="120" stroke="#95E78E" strokeWidth="2" opacity="0.3" />

        {/* Snapshot dots along timeline */}
        {[40, 70, 95, 115, 140, 165, 195, 220, 240].map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={120} r="4" fill="#95E78E"
            opacity={0.2 + (i / 9) * 0.6}
            animate={{ r: [4, 5, 4], opacity: [0.2 + (i / 9) * 0.6, 0.4 + (i / 9) * 0.5, 0.2 + (i / 9) * 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}

        {/* Playhead */}
        <motion.g
          animate={{ x: [0, 180, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="38" y="110" width="2" height="20" fill="#95E78E" opacity="0.8" />
          <polygon points="35,108 43,108 39,104" fill="#95E78E" opacity="0.8" />
        </motion.g>

        {/* Code window */}
        <rect x="60" y="25" width="160" height="75" rx="6" fill="#95E78E" opacity="0.06" />
        <rect x="60" y="25" width="160" height="16" rx="6" fill="#95E78E" opacity="0.1" />
        <circle cx="72" cy="33" r="3" fill="#95E78E" opacity="0.2" />
        <circle cx="82" cy="33" r="3" fill="#95E78E" opacity="0.2" />
        <circle cx="92" cy="33" r="3" fill="#95E78E" opacity="0.2" />

        {/* Code lines that change */}
        {[48, 56, 64, 72, 80].map((y, i) => (
          <motion.rect
            key={i} x="70" y={y} height="2.5" rx="1" fill="#95E78E"
            animate={{ width: [20 + i * 12, 35 + i * 8, 20 + i * 12], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}

        {/* Clock icon */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "30px 50px" }}
        >
          <circle cx="30" cy="50" r="12" stroke="#95E78E" strokeWidth="1" fill="none" opacity="0.2" />
          <line x1="30" y1="50" x2="30" y2="42" stroke="#95E78E" strokeWidth="1" opacity="0.3" />
          <line x1="30" y1="50" x2="36" y2="53" stroke="#95E78E" strokeWidth="1" opacity="0.3" />
        </motion.g>
      </svg>
    </div>
  );
}
