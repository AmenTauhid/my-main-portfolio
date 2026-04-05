"use client";

import { motion } from "framer-motion";

export default function PharmaTrackArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0f14] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Patient list panel */}
        <rect x="20" y="20" width="100" height="140" rx="6" fill="#95E78E" opacity="0.06" />
        <rect x="20" y="20" width="100" height="18" rx="6" fill="#95E78E" opacity="0.1" />
        <rect x="28" y="26" width="40" height="3" rx="1" fill="#95E78E" opacity="0.25" />

        {/* Patient rows */}
        {[45, 62, 79, 96, 113, 130].map((y, i) => (
          <motion.g key={i}
            animate={{ opacity: [0.1 + i * 0.03, 0.2 + i * 0.04, 0.1 + i * 0.03] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          >
            <circle cx="34" cy={y + 4} r="5" fill="#95E78E" opacity="0.15" />
            <rect x="44" y={y} width="50" height="3" rx="1" fill="#95E78E" opacity="0.2" />
            <rect x="44" y={y + 6} width="35" height="2" rx="1" fill="#95E78E" opacity="0.1" />
          </motion.g>
        ))}

        {/* Detail panel */}
        <rect x="130" y="20" width="130" height="90" rx="6" fill="#95E78E" opacity="0.06" />
        <rect x="140" y="30" width="60" height="4" rx="1" fill="#95E78E" opacity="0.2" />
        <rect x="140" y="40" width="80" height="3" rx="1" fill="#95E78E" opacity="0.12" />
        <rect x="140" y="48" width="70" height="3" rx="1" fill="#95E78E" opacity="0.12" />
        <rect x="140" y="56" width="90" height="3" rx="1" fill="#95E78E" opacity="0.1" />

        {/* Prescription pill icons */}
        {[72, 82, 92].map((y, i) => (
          <motion.g key={i}
            animate={{ x: [0, 2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          >
            <rect x="140" y={y} width="18" height="6" rx="3" fill="#95E78E" opacity="0.15" />
            <rect x="149" y={y} width="9" height="6" rx="3" fill="#95E78E" opacity="0.25" />
          </motion.g>
        ))}

        {/* Chat / messaging panel */}
        <rect x="130" y="118" width="130" height="42" rx="6" fill="#95E78E" opacity="0.06" />

        {/* Chat bubbles */}
        <motion.rect x="140" y="124" width="50" height="10" rx="5" fill="#95E78E" opacity="0.12"
          animate={{ opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect x="195" y="138" width="55" height="10" rx="5" fill="#95E78E" opacity="0.18"
          animate={{ opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Cross / medical icon */}
        <motion.g
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="237" y="26" width="12" height="3" rx="1" fill="#95E78E" />
          <rect x="241.5" y="21.5" width="3" height="12" rx="1" fill="#95E78E" />
        </motion.g>
      </svg>
    </div>
  );
}
