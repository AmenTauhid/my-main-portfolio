"use client";

import { motion } from "framer-motion";

export default function BattleRoyaleArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0d0a] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 280 180" fill="none" className="relative z-10 w-[85%] h-[85%]">
        {/* Grid floor */}
        {[40, 70, 100, 130, 160].map((y) => (
          <line key={`h${y}`} x1="30" y1={y} x2="250" y2={y} stroke="#95E78E" strokeWidth="0.3" opacity="0.08" />
        ))}
        {[60, 100, 140, 180, 220].map((x) => (
          <line key={`v${x}`} x1={x} y1="30" x2={x} y2="165" stroke="#95E78E" strokeWidth="0.3" opacity="0.08" />
        ))}

        {/* Shrinking zone circle */}
        <motion.circle
          cx="140" cy="95" r="70"
          stroke="#95E78E" strokeWidth="1" strokeDasharray="4 4" fill="none"
          animate={{ r: [70, 50, 70], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="140" cy="95" r="45"
          stroke="#95E78E" strokeWidth="0.5" fill="none" opacity="0.1"
          animate={{ r: [45, 30, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Agent dots moving around */}
        {[
          { cx: 100, cy: 70, delay: 0 },
          { cx: 170, cy: 60, delay: 0.5 },
          { cx: 130, cy: 110, delay: 1 },
          { cx: 160, cy: 100, delay: 1.5 },
          { cx: 110, cy: 130, delay: 2 },
          { cx: 180, cy: 120, delay: 0.8 },
          { cx: 90, cy: 95, delay: 1.2 },
          { cx: 150, cy: 80, delay: 0.3 },
        ].map((agent, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#95E78E"
            animate={{
              cx: [agent.cx, agent.cx + (i % 2 === 0 ? 12 : -12), agent.cx],
              cy: [agent.cy, agent.cy + (i % 3 === 0 ? -8 : 8), agent.cy],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: agent.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Combat flash */}
        <motion.circle
          cx="145" cy="85" r="6"
          fill="#95E78E"
          animate={{ opacity: [0, 0, 0.4, 0, 0], scale: [0.5, 0.5, 1.5, 1.5, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeOut" }}
          style={{ transformOrigin: "145px 85px" }}
        />

        {/* DNA helix hint for genetic algo */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "240px 45px" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <circle
              key={i}
              cx={240 + Math.cos((angle * Math.PI) / 180) * 10}
              cy={45 + Math.sin((angle * Math.PI) / 180) * 4}
              r="1.5"
              fill="#95E78E"
              opacity={0.15 + (i % 2) * 0.1}
            />
          ))}
        </motion.g>

        {/* Stats bar chart bottom right */}
        {[200, 212, 224, 236, 248].map((x, i) => (
          <motion.rect
            key={i} x={x} width="8" rx="1" fill="#95E78E"
            animate={{
              height: [10 + i * 5, 15 + i * 6, 10 + i * 5],
              y: [165 - (10 + i * 5), 165 - (15 + i * 6), 165 - (10 + i * 5)],
            }}
            opacity={0.1 + i * 0.03}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
