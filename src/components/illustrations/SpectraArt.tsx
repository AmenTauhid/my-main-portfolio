"use client";

import { motion } from "framer-motion";

export default function SpectraArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#080810] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Radial burst lines from center */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const r1 = 20;
          const r2 = 40 + (i % 3) * 15;
          return (
            <motion.line
              key={i}
              x1={140 + Math.cos(angle) * r1}
              y1={90 + Math.sin(angle) * r1}
              x2={140 + Math.cos(angle) * r2}
              y2={90 + Math.sin(angle) * r2}
              stroke="#95E78E"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                x2: [140 + Math.cos(angle) * r2, 140 + Math.cos(angle) * (r2 + 10), 140 + Math.cos(angle) * r2],
                y2: [90 + Math.sin(angle) * r2, 90 + Math.sin(angle) * (r2 + 10), 90 + Math.sin(angle) * r2],
                opacity: [0.1 + (i % 4) * 0.05, 0.2 + (i % 4) * 0.08, 0.1 + (i % 4) * 0.05],
              }}
              transition={{ duration: 2 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            />
          );
        })}

        {/* Center circle pulse */}
        <motion.circle
          cx="140" cy="90" r="15"
          fill="#95E78E" fillOpacity="0.08"
          stroke="#95E78E" strokeWidth="1" strokeOpacity="0.2"
          animate={{ r: [15, 18, 15], fillOpacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Waveform at bottom */}
        <motion.polyline
          points="30,155 45,148 60,158 75,142 90,155 105,140 120,152 135,138 150,155 165,143 180,158 195,145 210,155 225,148 240,155 255,150"
          stroke="#95E78E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[
          [80, 50], [200, 45], [60, 120], [220, 130], [100, 35], [180, 140],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i} cx={cx} cy={cy} r="2" fill="#95E78E"
            animate={{ opacity: [0, 0.3, 0], y: [cy as number, (cy as number) - 8, cy as number] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
