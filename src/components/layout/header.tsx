"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/katalog", label: "Каталог" },
  {
    href: "#",
    label: "Услуги",
    children: [
      { href: "/otdelka", label: "Внутренняя отделка", comingSoon: true },
      { href: "/ipoteka", label: "Ипотека", comingSoon: true },
      { href: "/kalkulyator", label: "Калькулятор", comingSoon: true },
    ],
  },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!isHome) {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm header-scrolled"
            : "bg-transparent header-at-top"
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div key={link.href + link.label} className="group relative">
                <Link
                  href={link.href}
                  className="header-invert-subtle inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-56 rounded-xl border border-border bg-popover p-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
                        >
                          {child.label}
                          {child.comingSoon && (
                            <span className="text-[10px] font-medium uppercase tracking-wider text-fg-muted">
                              Скоро
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle className="header-invert-subtle" />
            <a
              href="tel:+74951234567"
              className="header-invert-subtle hidden items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg sm:flex"
            >
              <Phone className="h-4 w-4" />
              +7 (495) 123-45-67
            </a>
            <Link
              href="/katalog"
              className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-fg transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Подобрать проект
            </Link>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-secondary lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
