"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const hidden = { opacity: 0, y: 24 };
const visible = { opacity: 1, y: 0 };

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? visible : hidden}
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
