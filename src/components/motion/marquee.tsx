"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 30,
  pauseOnHover = true,
  reverse = false,
}: MarqueeProps) {
  const [animationDuration, setAnimationDuration] = useState(`${speed}s`);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const scrollWidth = scrollerRef.current.scrollWidth;
    const viewWidth = scrollerRef.current.clientWidth;
    const contentWidth = scrollWidth - viewWidth;
    if (contentWidth > 0) {
      const duration = contentWidth / (speed * 16);
      setAnimationDuration(`${duration}s`);
    }
  }, [speed]);

  return (
    <div
      className={`overflow-hidden ${pauseOnHover ? "hover:[--pause:paused]" : ""}`}
      style={
        {
          "--pause": "running",
        } as React.CSSProperties
      }
    >
      <div
        ref={scrollerRef}
        className={`flex w-max gap-8 [animation:marquee_var(--duration)_linear_infinite] [animation-play-state:var(--pause)] ${className || ""}`}
        style={
          {
            "--duration": animationDuration,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}
