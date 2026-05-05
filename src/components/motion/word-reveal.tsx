"use client";

import { motion } from "motion/react";

type MotionTagType = "span" | "p" | "h1" | "h2" | "h3" | "div";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: MotionTagType;
}

export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  as = "span",
}: WordRevealProps) {
  const words = text.split(" ");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTagMap: Record<MotionTagType, any> = {
    span: motion.span,
    p: motion.p,
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    div: motion.div,
  };

  const MotionTag = MotionTagMap[as];

  return (
    <MotionTag className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + index * stagger,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: "inline-block" }}
        >
          {word}
          {index < words.length - 1 && " "}
        </motion.span>
      ))}
    </MotionTag>
  );
}
