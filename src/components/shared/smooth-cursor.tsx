"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function SmoothCursor() {
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const counter = useRef(0);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 520, damping: 32 });
  const smoothY = useSpring(y, { stiffness: 520, damping: 32 });

  const ringX = useSpring(x, { stiffness: 260, damping: 26 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      x.set(clientX);
      y.set(clientY);
      setVisible(true);

      const id = counter.current++;
      setParticles((prev) => [
        ...prev.slice(-5),
        { id, x: clientX, y: clientY },
      ]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 450);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <AnimatePresence>
        {particles.map((p, i) => (
          <motion.div
            key={p.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: p.x,
              top: p.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "var(--primary)",
                boxShadow: "0 0 6px var(--primary)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="rounded-full"
          style={{
            width: 28,
            height: 28,
            border: "1px solid color-mix(in oklch, var(--primary), transparent 45%)",
            boxShadow: "0 0 18px color-mix(in oklch, var(--primary), transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="rounded-full"
          style={{
            width: 12,
            height: 12,
            border: "1px solid color-mix(in oklch, var(--primary), transparent 40%)",
            boxShadow: "0 0 10px color-mix(in oklch, var(--primary), transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9999] select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          style={{
            width: 2,
            height: 2,
            borderRadius: "50%",
            background: "var(--primary)",
            boxShadow: "0 0 10px var(--primary)",
          }}
        />
      </motion.div>
    </>
  );
}
