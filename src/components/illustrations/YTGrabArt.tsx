"use client";

import { motion } from "framer-motion";

export default function YTGrabArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Play button / video screen */}
        <rect x="60" y="25" width="160" height="90" rx="8" fill="#95E78E" opacity="0.06" />
        <motion.polygon
          points="125,55 125,85 155,70"
          fill="#95E78E" opacity="0.25"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 70px" }}
        />

        {/* Download arrow */}
        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="140" y1="125" x2="140" y2="148" stroke="#95E78E" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
          <polygon points="133,145 140,155 147,145" fill="#95E78E" opacity="0.4" />
        </motion.g>

        {/* Music note */}
        <motion.g
          animate={{ y: [0, -4, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="215" cy="55" r="4" fill="#95E78E" opacity="0.25" />
          <line x1="219" y1="55" x2="219" y2="38" stroke="#95E78E" strokeWidth="1.5" opacity="0.25" />
          <path d="M219 38 Q225 35 225 42" stroke="#95E78E" strokeWidth="1.5" fill="none" opacity="0.25" />
        </motion.g>

        {/* MP3 label */}
        <rect x="110" y="160" width="60" height="16" rx="4" fill="#95E78E" opacity="0.08" />
        <motion.text
          x="140" y="171" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#95E78E" opacity="0.35"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          .mp3
        </motion.text>

        {/* Sound waves */}
        {[55, 65, 75].map((x, i) => (
          <motion.rect
            key={i} x={x} y={130} width="2" rx="1" fill="#95E78E" opacity="0.15"
            animate={{ height: [8, 16, 8], y: [130, 126, 130] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
