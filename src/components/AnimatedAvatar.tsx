"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const bubbleMessages = [
  "did you know mass of earth is 5.97 × 10²⁴ kg?",
  "mass of earth is 5.97 × 10²⁴ kg?",
  "mass of earth is 5.97 × 10²⁴ kg?",
  "mass of earth is 5.97 × 10²⁴ kg?",
  "mass of earth is 5.97 × 10²⁴ kg?",
  "mass of earth is 5.97 × 10²⁴ kg?",
  "mass of earth is 5.97 × 10²⁴ kg?",
  "octopuses have three hearts",
  "honey never spoils. ever.",
  "a group of flamingos is called a flamboyance",
  "bananas are berries. strawberries aren't.",
  "wombat poop is cube-shaped",
  "the first computer bug was an actual bug",
  "there are more trees on earth than stars in the milky way",
  "venus spins backwards compared to other planets",
  "a cloud can weigh over a million pounds",
  "sharks are older than trees",
  "the moon has moonquakes",
  "scotland's national animal is a unicorn",
  "an octopus has blue blood",
  "cows have best friends",
  "the inventor of the pringles can is buried in one",
  "hot water freezes faster than cold water",
  "there's a species of jellyfish that's immortal",
  "hi :)",
  "you should hire ayman btw",
  "click me again!",
  "i like your vibe",
  "built different (literally, i'm SVG)",
  "fun fact: i have no legs... wait",
  "psst... scroll down, there's cool stuff",
  "i blink ~17,000 times a day. wait, no i don't",
  "TypeScript > JavaScript. fight me.",
  "this portfolio was made with love and too much caffeine",
  "dark mode is the only mode",
  "git commit -m 'clicked the creature again'",
  "404: witty message not found",
  "i'm not a real rabbit but i appreciate the attention",
];

export default function AnimatedAvatar() {
  const [blinking, setBlinking] = useState(false);
  const [expression, setExpression] = useState<"idle" | "happy" | "looking">("idle");
  const [lookDir, setLookDir] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const [usedMessages, setUsedMessages] = useState<Set<number>>(new Set());
  const bodyControls = useAnimation();

  // Blinking
  useEffect(() => {
    const scheduleNextBlink = () => {
      const delay = 1500 + Math.random() * 3000;
      return setTimeout(() => {
        setBlinking(true);
        const isDouble = Math.random() < 0.3;
        setTimeout(() => {
          setBlinking(false);
          if (isDouble) {
            setTimeout(() => {
              setBlinking(true);
              setTimeout(() => setBlinking(false), 120);
            }, 180);
          }
        }, 130);
        timerId = scheduleNextBlink();
      }, delay);
    };
    let timerId = scheduleNextBlink();
    return () => clearTimeout(timerId);
  }, []);

  // Random expressions
  useEffect(() => {
    const interval = setInterval(() => {
      if (bubble) return;
      const roll = Math.random();
      if (roll < 0.25) {
        setExpression("looking");
        setLookDir(Math.random() < 0.5 ? -1 : 1);
        setTimeout(() => {
          setExpression("idle");
          setLookDir(0);
        }, 1500 + Math.random() * 1500);
      } else if (roll < 0.35) {
        setExpression("happy");
        setTimeout(() => setExpression("idle"), 2000);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [bubble]);

  // Pick a random message, avoiding repeats until all are used
  const getRandomMessage = useCallback(() => {
    let available = bubbleMessages
      .map((_, i) => i)
      .filter((i) => !usedMessages.has(i));
    if (available.length === 0) {
      setUsedMessages(new Set());
      available = bubbleMessages.map((_, i) => i);
    }
    const idx = available[Math.floor(Math.random() * available.length)];
    setUsedMessages((prev) => new Set(prev).add(idx));
    return bubbleMessages[idx];
  }, [usedMessages]);

  // Click handler
  const handleClick = useCallback(async () => {
    setExpression("happy");
    setBubble(getRandomMessage());

    await bodyControls.start({
      y: [0, -12, 0, -6, 0],
      transition: { duration: 0.6, ease: "easeOut" },
    });

    setTimeout(() => setExpression("idle"), 600);
    setTimeout(() => setBubble(null), 3500);
  }, [bodyControls, getRandomMessage]);

  const p = 4;
  const eyeOffsetX = lookDir * 2;

  return (
    <div className="relative">
      {/* Speech bubble */}
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="absolute left-[calc(100%+12px)] top-0 z-20 max-w-[220px] min-w-[120px]"
          >
            <div className="relative bg-surface border border-border rounded-xl px-3.5 py-2.5 shadow-lg">
              <p className="text-xs leading-relaxed text-text font-[family-name:var(--font-jetbrains-var)]">
                {bubble}
              </p>
              {/* Tail pointing left */}
              <div className="absolute top-4 -left-[6px] w-3 h-3 bg-surface border-l border-b border-border rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative cursor-pointer select-none"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9, rotate: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        onClick={handleClick}
      >
        {/* Glow behind */}
        <motion.div
          className="absolute -inset-4 rounded-full bg-accent/15 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Shadow underneath */}
        <motion.div
          className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-text/10 blur-sm"
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* The character */}
        <motion.svg
          width={p * 20}
          height={p * 24}
          viewBox="0 0 80 96"
          fill="none"
          className="relative z-10"
          animate={bodyControls}
        >
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Left ear */}
            <motion.g
              animate={{ rotate: [0, -6, 0, 4, 0], y: [0, -1, 0, 1, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "28px 28px" }}
            >
              <rect x="20" y="2" width={p} height={p * 7} rx="2" fill="#95E78E" />
              <rect x="24" y="2" width={p} height={p * 7} rx="2" fill="#7acc74" />
              <rect x="22" y={p * 1 + 2} width={p - 2} height={p * 4} rx="1" fill="#062C02" opacity="0.6" />
            </motion.g>

            {/* Right ear */}
            <motion.g
              animate={{ rotate: [0, 6, 0, -4, 0], y: [0, 1, 0, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{ transformOrigin: "52px 28px" }}
            >
              <rect x="52" y="2" width={p} height={p * 7} rx="2" fill="#95E78E" />
              <rect x="56" y="2" width={p} height={p * 7} rx="2" fill="#7acc74" />
              <rect x="54" y={p * 1 + 2} width={p - 2} height={p * 4} rx="1" fill="#062C02" opacity="0.6" />
            </motion.g>

            {/* Head */}
            <motion.g
              animate={{ rotate: [0, -1, 0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "40px 45px" }}
            >
              <rect x="16" y="26" width={p * 12} height={p * 11} rx="10" fill="#95E78E" />
              <rect x="20" y="30" width={p * 10} height={p * 2} rx="4" fill="#a8f0a1" opacity="0.4" />

              {/* Eyes */}
              {expression === "happy" ? (
                <>
                  <path d="M27 42 Q31 38 35 42" stroke="#062C02" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M45 42 Q49 38 53 42" stroke="#062C02" strokeWidth="2" fill="none" strokeLinecap="round" />
                </>
              ) : blinking ? (
                <>
                  <rect x={28 + eyeOffsetX} y="43" width="7" height="2" rx="1" fill="#062C02" />
                  <rect x={46 + eyeOffsetX} y="43" width="7" height="2" rx="1" fill="#062C02" />
                </>
              ) : (
                <>
                  <rect x={28 + eyeOffsetX} y="38" width="7" height="10" rx="3.5" fill="#062C02" />
                  <rect x={46 + eyeOffsetX} y="38" width="7" height="10" rx="3.5" fill="#062C02" />
                  <motion.rect
                    x={30 + eyeOffsetX} y="40" width="3" height="3" rx="1.5"
                    fill="#ffffff" opacity="0.9"
                    animate={{ y: [40, 39, 40] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.rect
                    x={48 + eyeOffsetX} y="40" width="3" height="3" rx="1.5"
                    fill="#ffffff" opacity="0.9"
                    animate={{ y: [40, 39, 40] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </>
              )}

              {/* Nose */}
              <motion.ellipse
                cx="40" cy="50" rx="3" ry="2" fill="#062C02"
                animate={{ ry: [2, 2.3, 2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Mouth */}
              {expression === "happy" ? (
                <path d="M34 54 Q40 60 46 54" stroke="#062C02" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              ) : (
                <path d="M35 54 Q40 57 45 54" stroke="#062C02" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              )}

              {/* Cheek blush */}
              <motion.circle cx="23" cy="50" r="4.5" fill="#7acc74"
                animate={{ opacity: [0.35, 0.55, 0.35], r: [4.5, 5, 4.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle cx="57" cy="50" r="4.5" fill="#7acc74"
                animate={{ opacity: [0.35, 0.55, 0.35], r: [4.5, 5, 4.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.g>

            {/* Body */}
            <motion.g
              animate={{ scaleY: [1, 1.03, 1, 0.98, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "40px 78px" }}
            >
              <rect x="18" y="66" width={p * 11} height={p * 6} rx="8" fill="#95E78E" />
              <rect x="27" y="70" width={p * 6.5} height={p * 3.5} rx="5" fill="#a8f0a1" opacity="0.35" />
            </motion.g>

            {/* Left arm */}
            <motion.g
              animate={{ rotate: [0, -15, 0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "16px 68px" }}
            >
              <rect x="10" y="68" width={p * 1.5} height={p * 3.5} rx="3" fill="#7acc74" />
              <circle cx="13" cy="83" r="2.5" fill="#7acc74" />
            </motion.g>

            {/* Right arm */}
            <motion.g
              animate={{ rotate: [0, 15, 0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{ transformOrigin: "64px 68px" }}
            >
              <rect x="64" y="68" width={p * 1.5} height={p * 3.5} rx="3" fill="#7acc74" />
              <circle cx="67" cy="83" r="2.5" fill="#7acc74" />
            </motion.g>

            {/* Left foot */}
            <motion.g
              animate={{ rotate: [0, -5, 0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "30px 90px" }}
            >
              <rect x="22" y="88" width={p * 3} height={p * 2} rx="4" fill="#7acc74" />
            </motion.g>

            {/* Right foot */}
            <motion.g
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              style={{ transformOrigin: "50px 90px" }}
            >
              <rect x="46" y="88" width={p * 3} height={p * 2} rx="4" fill="#7acc74" />
            </motion.g>

            {/* Sparkles */}
            {[
              { x: 5, y: 20, delay: 0 },
              { x: 70, y: 15, delay: 2 },
              { x: 68, y: 55, delay: 4 },
            ].map((spark, i) => (
              <motion.g
                key={i}
                animate={{
                  opacity: [0, 0, 1, 1, 0, 0],
                  scale: [0.5, 0.5, 1, 1, 0.5, 0.5],
                  rotate: [0, 0, 0, 45, 45, 45],
                }}
                transition={{
                  duration: 6, repeat: Infinity, delay: spark.delay, ease: "easeInOut",
                }}
                style={{ transformOrigin: `${spark.x + 3}px ${spark.y + 3}px` }}
              >
                <path
                  d={`M${spark.x + 3} ${spark.y} L${spark.x + 4} ${spark.y + 2} L${spark.x + 6} ${spark.y + 3} L${spark.x + 4} ${spark.y + 4} L${spark.x + 3} ${spark.y + 6} L${spark.x + 2} ${spark.y + 4} L${spark.x} ${spark.y + 3} L${spark.x + 2} ${spark.y + 2} Z`}
                  fill="#95E78E"
                  opacity="0.6"
                />
              </motion.g>
            ))}
          </motion.g>
        </motion.svg>
      </motion.div>
    </div>
  );
}
