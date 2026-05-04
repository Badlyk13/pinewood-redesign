"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string; comingSoon?: boolean }[];
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full overflow-y-auto p-0 sm:max-w-sm">
        <SheetHeader className="border-b border-border px-6 py-4">
          <SheetTitle className="flex items-center gap-2">
            <Logo className="h-8 w-auto" variant="mobile" />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 p-6">
          {links.map((link) => (
            <div key={link.href + link.label}>
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-secondary"
              >
                {link.label}
                {link.children && (
                  <svg
                    className="h-4 w-4 text-fg-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </Link>

              {link.children && (
                <div className="ml-4 flex flex-col gap-0.5 border-l border-border pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-secondary hover:text-fg"
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
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto border-t border-border p-6">
          <Link
            href="/katalog"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-fg transition-colors hover:bg-primary/90"
          >
            Подобрать проект
          </Link>
          <a
            href="tel:+74951234567"
            className="mt-3 flex w-full items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            +7 (495) 123-45-67
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
