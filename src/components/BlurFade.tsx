"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
}

export default function BlurFade({ children, className }: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const filterString = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        filter: filterString,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
