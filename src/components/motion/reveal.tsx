"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

function getInitial(direction: string) {
  switch (direction) {
    case "down":
      return { opacity: 0, y: -30 };
    case "left":
      return { opacity: 0, x: 30 };
    case "right":
      return { opacity: 0, x: -30 };
    default:
      return { opacity: 0, y: 30 };
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial(direction)}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitial(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
