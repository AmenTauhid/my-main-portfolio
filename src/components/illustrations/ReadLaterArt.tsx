"use client";

import { motion } from "framer-motion";

export default function ReadLaterArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0c0d10] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Browser window with tab */}
        <rect x="30" y="18" width="100" height="60" rx="6" fill="#95E78E" opacity="0.06" />
        {/* Tab shape on top */}
        <path
          d="M38 18 L38 14 Q38 11 41 11 L70 11 Q73 11 73 14 L73 18 Z"
          fill="#95E78E"
          opacity="0.18"
        />
        {/* Title line in tab */}
        <rect x="42" y="13" width="22" height="2" rx="1" fill="#95E78E" opacity="0.4" />
        {/* URL bar */}
        <rect x="36" y="24" width="88" height="6" rx="3" fill="#95E78E" opacity="0.1" />
        <rect x="40" y="26" width="40" height="2" rx="1" fill="#95E78E" opacity="0.35" />
        {/* Page content lines */}
        <rect x="36" y="38" width="60" height="2.5" rx="1" fill="#95E78E" opacity="0.22" />
        <rect x="36" y="44" width="80" height="2.5" rx="1" fill="#95E78E" opacity="0.18" />
        <rect x="36" y="50" width="70" height="2.5" rx="1" fill="#95E78E" opacity="0.18" />
        <rect x="36" y="56" width="55" height="2.5" rx="1" fill="#95E78E" opacity="0.14" />
        <rect x="36" y="62" width="76" height="2.5" rx="1" fill="#95E78E" opacity="0.14" />
        <rect x="36" y="68" width="48" height="2.5" rx="1" fill="#95E78E" opacity="0.14" />

        {/* Bookmark icon flying out of the tab into the list */}
        <motion.g
          animate={{ x: [0, 70, 70], y: [0, 25, 25], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.55, 1] }}
        >
          <path
            d="M105 22 L105 38 L111 33 L117 38 L117 22 Z"
            fill="#95E78E"
            fillOpacity="0.35"
            stroke="#95E78E"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        </motion.g>

        {/* Arrow from browser to Notion list */}
        <motion.g
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <line
            x1="135"
            y1="48"
            x2="158"
            y2="48"
            stroke="#95E78E"
            strokeWidth="1.5"
            opacity="0.35"
            strokeDasharray="3 3"
          />
          <polygon points="155,44 162,48 155,52" fill="#95E78E" opacity="0.5" />
        </motion.g>

        {/* Notion-style reading list panel */}
        <rect x="165" y="18" width="90" height="144" rx="6" fill="#95E78E" opacity="0.05" />
        {/* Panel header */}
        <rect x="172" y="25" width="40" height="3" rx="1.5" fill="#95E78E" opacity="0.4" />
        {/* Filter chips */}
        <rect x="172" y="33" width="16" height="6" rx="3" fill="#95E78E" opacity="0.22" />
        <rect x="191" y="33" width="14" height="6" rx="3" fill="#95E78E" opacity="0.1" />
        <rect x="208" y="33" width="12" height="6" rx="3" fill="#95E78E" opacity="0.1" />

        {/* Saved items list */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0.08 }}
            animate={{
              opacity: i === 0 ? [0.08, 0.32, 0.32, 0.18, 0.08] : 0.18,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.55, 0.65, 0.85, 1],
            }}
          >
            <rect
              x="172"
              y={48 + i * 20}
              width="76"
              height="14"
              rx="3"
              fill="#95E78E"
              opacity={i === 0 ? 0.08 : 0.05}
            />
            {/* Item title */}
            <rect
              x="176"
              y={52 + i * 20}
              width={i === 0 ? 50 : 40 + (i % 3) * 8}
              height="2.5"
              rx="1"
              fill="#95E78E"
              opacity="0.4"
            />
            {/* Item meta / tag */}
            <rect
              x="176"
              y={57 + i * 20}
              width="22"
              height="2"
              rx="1"
              fill="#95E78E"
              opacity="0.2"
            />
            {/* Status dot */}
            <circle
              cx="242"
              cy={55 + i * 20}
              r="1.5"
              fill="#95E78E"
              opacity={i < 2 ? 0.6 : 0.2}
            />
          </motion.g>
        ))}

        {/* Subtle pulsing "Saved" check on the new item */}
        <motion.path
          d="M226 54 L229 57 L235 51"
          stroke="#95E78E"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0.5, 0.65, 0.85, 1],
          }}
        />
      </svg>
    </div>
  );
}
