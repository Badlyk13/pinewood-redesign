import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { settings } from "@/data/settings";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/katalog", label: "Каталог домов" },
    { href: "/otdelka", label: "Внутренняя отделка", soon: true },
    { href: "/ipoteka", label: "Ипотека", soon: true },
    { href: "/kalkulyator", label: "Калькулятор", soon: true },
    { href: "/portfolio", label: "Портфолио", soon: true },
  ],
  company: [
    { href: "/o-kompanii", label: "О компании" },
    { href: "/tekhnologii", label: "Технологии", soon: true },
    { href: "/kontakty", label: "Контакты" },
  ],
  useful: [
    { href: "/katalog", label: "Проекты домов" },
    { href: "/o-kompanii", label: "Производство" },
    { href: "/o-kompanii", label: "Команда" },
    { href: "/kontakty", label: "Частые вопросы" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {settings.company.description}
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href={settings.contacts.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:bg-secondary hover:text-fg"
                aria-label="VKontakte"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.644v3.49c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                </svg>
              </a>
              <a
                href={settings.contacts.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:bg-secondary hover:text-fg"
                aria-label="Telegram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href={settings.contacts.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:bg-secondary hover:text-fg"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">Услуги</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                    {link.soon && (
                      <span className="text-[10px] uppercase tracking-wider text-accent">
                        Скоро
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Компания</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                    {link.soon && (
                      <span className="text-[10px] uppercase tracking-wider text-accent">
                        Скоро
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold">Контакты</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${settings.contacts.phone.replace(/[\s()-]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {settings.contacts.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.contacts.email}`}
                  className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {settings.contacts.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2 text-sm text-fg-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {settings.contacts.address}
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <p className="text-xs text-fg-muted">{settings.contacts.workHours}</p>
            </div>

            {/* Legal */}
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs text-fg-muted">{settings.company.fullName}</p>
              <p className="mt-1 text-xs text-fg-muted">
                ИНН {settings.company.inn}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-fg-muted">
            &copy; {currentYear} {settings.company.name}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="#"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Оферта
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
