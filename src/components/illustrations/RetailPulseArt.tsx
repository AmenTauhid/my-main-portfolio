"use client";

import { motion } from "framer-motion";

export default function RetailPulseArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a1a0a] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid-rp" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#95E78E" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-rp)" />
      </svg>

      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Bar chart */}
        <motion.rect
          x="30" y="100" width="16" height="50" rx="2" fill="#95E78E" opacity="0.6"
          animate={{ height: [50, 70, 50], y: [100, 80, 100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="52" y="80" width="16" height="70" rx="2" fill="#95E78E" opacity="0.7"
          animate={{ height: [70, 45, 70], y: [80, 105, 80] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.rect
          x="74" y="60" width="16" height="90" rx="2" fill="#95E78E" opacity="0.8"
          animate={{ height: [90, 110, 90], y: [60, 40, 60] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.rect
          x="96" y="45" width="16" height="105" rx="2" fill="#95E78E"
          animate={{ height: [105, 80, 105], y: [45, 70, 45] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.rect
          x="118" y="70" width="16" height="80" rx="2" fill="#95E78E" opacity="0.75"
          animate={{ height: [80, 100, 80], y: [70, 50, 70] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Axis line */}
        <line x1="24" y1="150" x2="140" y2="150" stroke="#95E78E" strokeWidth="1" opacity="0.3" />
        <line x1="24" y1="30" x2="24" y2="150" stroke="#95E78E" strokeWidth="1" opacity="0.3" />

        {/* Floating data points / sparkle line on right side */}
        <motion.polyline
          points="160,110 175,85 190,95 205,60 220,70 235,40 250,50"
          stroke="#95E78E"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dots on the line */}
        {[
          [160, 110], [175, 85], [190, 95], [205, 60], [220, 70], [235, 40], [250, 50],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#95E78E"
            animate={{ r: [3, 4.5, 3], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}

        {/* Weather icon - sun */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 140px" }}
        >
          <circle cx="200" cy="140" r="6" fill="#95E78E" opacity="0.4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={200 + Math.cos((angle * Math.PI) / 180) * 9}
              y1={140 + Math.sin((angle * Math.PI) / 180) * 9}
              x2={200 + Math.cos((angle * Math.PI) / 180) * 12}
              y2={140 + Math.sin((angle * Math.PI) / 180) * 12}
              stroke="#95E78E"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
        </motion.g>

        {/* Shopping cart pixel icon */}
        <rect x="155" y="130" width="3" height="3" fill="#95E78E" opacity="0.3" />
        <rect x="158" y="127" width="12" height="3" fill="#95E78E" opacity="0.3" />
        <rect x="158" y="130" width="12" height="6" fill="#95E78E" opacity="0.2" />
        <circle cx="160" cy="139" r="2" fill="#95E78E" opacity="0.3" />
        <circle cx="168" cy="139" r="2" fill="#95E78E" opacity="0.3" />
      </svg>
    </div>
  );
}
