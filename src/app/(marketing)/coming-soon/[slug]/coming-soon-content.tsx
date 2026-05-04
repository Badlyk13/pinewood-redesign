"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Bell } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ComingSoonPage as ComingSoonPageType } from "@/data/coming-soon";

export function ComingSoonContent({
  page,
}: {
  page: ComingSoonPageType;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="border-b border-border bg-surface">
          <Container className="py-16 sm:py-20 lg:py-24">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="h-4 w-4" />
              На главную
            </Link>

            <div className="mx-auto max-w-2xl text-center">
              <FadeUp>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Скоро
                </span>
                <h1 className="mt-6 font-serif text-display-2 font-bold text-fg">
                  {page.title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-fg-muted">
                  {page.description}
                </p>

                {/* ETA */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Запуск: <span className="font-semibold">{page.eta}</span>
                </div>
              </FadeUp>

              {/* Progress placeholder */}
              <FadeUp delay={0.2}>
                <div className="mx-auto mt-12 max-w-md">
                  <div className="h-2 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: "35%" }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-fg-muted">В процессе разработки</p>
                </div>
              </FadeUp>

              {/* Features */}
              <FadeUp delay={0.3}>
                <div className="mt-12 text-left rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-fg">Что будет доступно:</h2>
                  <ul className="mt-6 space-y-3">
                    {page.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-fg-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Notify form */}
              <FadeUp delay={0.4}>
                <div className="mt-12">
                  <p className="text-sm text-fg-muted">
                    Оставьте email, и мы уведомим вас при запуске раздела.
                  </p>
                  <form
                    className="mt-4 flex gap-3 sm:mx-auto sm:max-w-sm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Спасибо! Мы уведомим вас при запуске.");
                    }}
                  >
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1"
                    />
                    <Button type="submit" className="gap-2 shrink-0">
                      <Bell className="h-4 w-4" />
                      <span className="hidden sm:inline">Уведомить</span>
                    </Button>
                  </form>
                </div>
              </FadeUp>

              {/* Back CTA */}
              <FadeUp delay={0.5}>
                <div className="mt-16">
                  <Link href="/katalog">
                    <Button variant="outline" size="lg" className="rounded-xl px-8 py-5">
                      Перейти в каталог проектов
                    </Button>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
