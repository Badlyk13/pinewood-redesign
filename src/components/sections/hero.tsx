"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.3], [0, 6]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: videoOpacity }}
      >
        {/* Cinematic multi-layer gradient */}
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_155)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-oklch-[0.12_0.06_155/0.9] via-oklch-[0.15_0.03_145/0.6] to-oklch-[0.20_0.05_120/0.4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent" />

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        {/* Decorative accent glow */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </motion.div>

      {/* Content — LEFT ALIGNED */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div
          style={{
            y: titleY,
            filter: useTransform(titleBlur, (v) => `blur(${v}px)`),
            scale: contentScale,
          }}
          className="max-w-3xl"
        >
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

          {/* Title — left-aligned, massive serif */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-display-1 font-bold leading-[1.05] tracking-tight text-white"
          >
            Строим дома,
            <br />
            в которые
            <br />
            <span className="relative inline-block mt-1">
              <span className="text-accent">влюбляются</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-accent/60"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.0 }}
              />
            </span>
          </motion.h1>

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
              <Link href="/katalog">
                <Button
                  size="lg"
                  className="gap-2.5 rounded-xl bg-white px-8 py-6 text-base font-semibold text-fg shadow-xl shadow-black/20 transition-all hover:bg-white/90 hover:shadow-2xl hover:shadow-black/30"
                >
                  Подобрать проект
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
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
        </motion.div>

        {/* Stats bar — bottom, full width */}
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
                  <Counter to={15} suffix="+" />
                </div>
                <div className="mt-1.5 text-sm text-white/40">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <Counter to={600} suffix="+" />
                </div>
                <div className="mt-1.5 text-sm text-white/40">Домов построено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <Counter to={47} />
                </div>
                <div className="mt-1.5 text-sm text-white/40">Регионов России</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <Counter to={4} suffix=".8" />
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
        transition={{ delay: 1.5 }}
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
