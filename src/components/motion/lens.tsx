"use client";

import React, { useRef, useState, type MouseEvent } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
} from "motion/react";

interface LensProps {
  src: string;
  alt?: string;
  zoomLevel?: number;
  lensSize?: number;
  showLensRing?: boolean;
  lensBorderColor?: string;
  lensBackgroundColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Lens({
  src,
  alt = "",
  zoomLevel = 2,
  lensSize = 150,
  showLensRing = true,
  lensBorderColor = "rgba(255, 255, 255, 0.3)",
  lensBackgroundColor = "transparent",
  className = "",
  children,
}: LensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const lens = lensRef.current;
    if (!lens) return;

    lens.style.left = `${x - lensSize / 2}px`;
    lens.style.top = `${y - lensSize / 2}px`;

    const img = imageRef.current;
    if (img) {
      const displayWidth = img.offsetWidth;
      const displayHeight = img.offsetHeight;

      const zoomedWidth = displayWidth * zoomLevel;
      const zoomedHeight = displayHeight * zoomLevel;

      const bgX = (x / displayWidth) * (zoomedWidth - displayWidth);
      const bgY = (y / displayHeight) * (zoomedHeight - displayHeight);

      lens.style.backgroundImage = `url(${src})`;
      lens.style.backgroundSize = `${zoomedWidth}px ${zoomedHeight}px`;
      lens.style.backgroundPosition = `-${bgX}px -${bgY}px`;
      lens.style.backgroundRepeat = "no-repeat";
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children ?? (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="block w-full h-full object-cover"
          draggable={false}
        />
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            ref={lensRef}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: lensSize,
              height: lensSize,
              backgroundColor: lensBackgroundColor,
              border: showLensRing
                ? `1px solid ${lensBorderColor}`
                : "none",
              boxShadow: showLensRing
                ? "0 4px 15px rgba(0, 0, 0, 0.3)"
                : "none",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
