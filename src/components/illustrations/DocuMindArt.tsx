"use client";

import { motion } from "framer-motion";

export default function DocuMindArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0a1a] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Dot grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="dots-dm" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="1" fill="#95E78E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-dm)" />
      </svg>

      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Central brain / supervisor node */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 80px" }}
        >
          <circle cx="140" cy="80" r="22" fill="#95E78E" opacity="0.15" />
          <circle cx="140" cy="80" r="14" fill="#95E78E" opacity="0.25" />
          {/* Brain pixel pattern */}
          <rect x="132" y="72" width="4" height="4" fill="#95E78E" opacity="0.8" />
          <rect x="138" y="72" width="4" height="4" fill="#95E78E" opacity="0.8" />
          <rect x="144" y="72" width="4" height="4" fill="#95E78E" opacity="0.8" />
          <rect x="130" y="78" width="4" height="4" fill="#95E78E" opacity="0.6" />
          <rect x="136" y="78" width="4" height="4" fill="#95E78E" />
          <rect x="142" y="78" width="4" height="4" fill="#95E78E" />
          <rect x="148" y="78" width="4" height="4" fill="#95E78E" opacity="0.6" />
          <rect x="132" y="84" width="4" height="4" fill="#95E78E" opacity="0.8" />
          <rect x="138" y="84" width="4" height="4" fill="#95E78E" opacity="0.8" />
          <rect x="144" y="84" width="4" height="4" fill="#95E78E" opacity="0.8" />
        </motion.g>

        {/* Agent nodes in orbit */}
        {[
          { cx: 60, cy: 50, label: "R", delay: 0 },
          { cx: 220, cy: 50, label: "E", delay: 0.5 },
          { cx: 60, cy: 120, label: "A", delay: 1 },
          { cx: 220, cy: 120, label: "W", delay: 1.5 },
        ].map((node) => (
          <g key={node.label}>
            {/* Connection line */}
            <motion.line
              x1="140" y1="80" x2={node.cx} y2={node.cy}
              stroke="#95E78E"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            />

            {/* Traveling dot along line */}
            <motion.circle
              r="2"
              fill="#95E78E"
              animate={{
                cx: [140, node.cx],
                cy: [80, node.cy],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            />

            {/* Node */}
            <motion.g
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            >
              <rect
                x={node.cx - 14} y={node.cy - 14} width="28" height="28" rx="6"
                fill="#95E78E" opacity="0.12"
              />
              <rect
                x={node.cx - 10} y={node.cy - 10} width="20" height="20" rx="4"
                fill="#95E78E" opacity="0.2"
              />
              <text
                x={node.cx} y={node.cy + 4}
                textAnchor="middle" fill="#95E78E" fontSize="11" fontFamily="monospace" opacity="0.8"
              >
                {node.label}
              </text>
            </motion.g>
          </g>
        ))}

        {/* Floating document icons */}
        {[
          { x: 30, y: 140, delay: 0 },
          { x: 120, y: 150, delay: 0.8 },
          { x: 240, y: 145, delay: 1.6 },
        ].map((doc, i) => (
          <motion.g
            key={i}
            animate={{ y: [doc.y, doc.y - 4, doc.y] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: doc.delay }}
          >
            {/* Doc shape */}
            <rect x={doc.x} y={doc.y} width="14" height="18" rx="2" fill="#95E78E" opacity="0.15" />
            <rect x={doc.x + 3} y={doc.y + 4} width="8" height="1.5" rx="0.5" fill="#95E78E" opacity="0.3" />
            <rect x={doc.x + 3} y={doc.y + 7} width="6" height="1.5" rx="0.5" fill="#95E78E" opacity="0.3" />
            <rect x={doc.x + 3} y={doc.y + 10} width="7" height="1.5" rx="0.5" fill="#95E78E" opacity="0.3" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
