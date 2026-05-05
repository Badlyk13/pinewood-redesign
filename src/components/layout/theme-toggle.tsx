"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
          className
        )}
        aria-label="Переключить тему"
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={(e) => {
        const x = ((e.clientX / window.innerWidth) * 100).toFixed(1) + '%';
        const y = ((e.clientY / window.innerHeight) * 100).toFixed(1) + '%';
        document.documentElement.style.setProperty('--wipe-x', x);
        document.documentElement.style.setProperty('--wipe-y', y);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      style={{ viewTransitionName: 'theme-toggle' }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-secondary",
        className
      )}
      aria-label={theme === "dark" ? "Светлая тема" : "Тёмная тема"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
