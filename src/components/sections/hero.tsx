"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { WordReveal } from "@/components/motion/word-reveal";
import { Aurora } from "@/components/motion/aurora";
import { ShinyText } from "@/components/motion/shiny-text";
import { NumberTicker } from "@/components/ui/number-ticker";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_155)] dark:bg-[oklch(0.20_0.05_155)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_155)] dark:from-[oklch(0.16_0.04_155)] to-transparent" />

        <Aurora
          colorStops={["#2d6a4f", "#52b788", "#2d6a4f"]}
          amplitude={0.8}
          blend={0.4}
          speed={0.6}
          className="absolute inset-0"
        />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="inline-block h-px w-8 bg-accent" />
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-white/70">
              Загородные дома под ключ
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-serif text-display-1 font-bold leading-[1.05] tracking-tight text-white">
            <WordReveal text="Строим дома," delay={0.2} />
            <br />
            <WordReveal text="в которые" delay={0.4} />
            <br />
            <span className="relative inline-block mt-1">
              <ShinyText
                text="влюбляются"
                speed={3}
                color="var(--accent)"
                shineColor="#ffffff"
                className="text-accent"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            Энергоэффективные дома из клееного бруса. Заводское производство,
            фиксированная цена и гарантия 5&nbsp;лет.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <Button
                render={<Link href="/katalog" />}
                nativeButton={false}
                size="lg"
                className="gap-2.5 px-8 py-6 text-base font-semibold rounded-xl bg-white text-fg hover:bg-white/90 dark:bg-primary dark:text-primary-fg dark:hover:bg-primary/90"
              >
                Подобрать проект
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Link href="/kontakty">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                Рассчитать стоимость
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-auto pt-16 sm:mt-24"
        >
          <div className="border-t border-white/10 pt-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <NumberTicker value={15} className="text-white sm:text-4xl" />+
                </div>
                <div className="mt-1.5 text-sm text-white/40">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <NumberTicker value={600} className="text-white sm:text-4xl" />+
                </div>
                <div className="mt-1.5 text-sm text-white/40">Домов построено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <NumberTicker value={47} className="text-white sm:text-4xl" />
                </div>
                <div className="mt-1.5 text-sm text-white/40">Регионов России</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <NumberTicker value={4.8} decimalPlaces={1} className="text-white sm:text-4xl" />
                </div>
                <div className="mt-1.5 text-sm text-white/40">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
