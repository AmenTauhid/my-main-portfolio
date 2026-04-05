"use client";

import { motion } from "framer-motion";

export default function TrackThatStreetArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a120a] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Map grid roads */}
        {[40, 80, 120, 160].map((y) => (
          <line key={`h${y}`} x1="20" y1={y} x2="260" y2={y} stroke="#95E78E" strokeWidth="0.5" opacity="0.1" />
        ))}
        {[50, 100, 150, 200, 250].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="170" stroke="#95E78E" strokeWidth="0.5" opacity="0.1" />
        ))}

        {/* Streetcar route line */}
        <path
          d="M30 140 Q80 140 100 100 Q120 60 160 60 Q200 60 220 90 Q240 120 260 120"
          stroke="#95E78E" strokeWidth="2.5" fill="none" opacity="0.25" strokeLinecap="round"
        />

        {/* Moving streetcar dots */}
        {[0, 1.5, 3.5].map((delay, i) => (
          <motion.circle
            key={i} r="5" fill="#95E78E"
            animate={{
              cx: [30, 100, 160, 220, 260],
              cy: [140, 100, 60, 90, 120],
              opacity: [0.5, 0.8, 0.9, 0.8, 0.5],
            }}
            transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        ))}

        {/* Stop markers */}
        {[
          [30, 140], [100, 100], [160, 60], [220, 90], [260, 120],
        ].map(([cx, cy], i) => (
          <rect key={i} x={cx as number - 3} y={cy as number - 3} width="6" height="6" rx="1" fill="#95E78E" opacity="0.15" />
        ))}

        {/* ETA card */}
        <motion.g
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="170" y="30" width="60" height="24" rx="4" fill="#95E78E" opacity="0.1" />
          <rect x="176" y="36" width="20" height="3" rx="1" fill="#95E78E" opacity="0.3" />
          <rect x="176" y="42" width="35" height="3" rx="1" fill="#95E78E" opacity="0.2" />
        </motion.g>

        {/* Location pin */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="160" cy="58" r="8" fill="#95E78E" opacity="0.15" />
          <circle cx="160" cy="58" r="3" fill="#95E78E" opacity="0.4" />
        </motion.g>
      </svg>
    </div>
  );
}
