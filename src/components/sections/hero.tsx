"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { cn } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.3], [0, 8]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {/* Video background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity: videoOpacity }}>
        <div className="absolute inset-0 bg-gradient-to-br from-fg/70 via-fg/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        {/* Video placeholder - will be replaced with actual hero video */}
        <div className="h-full w-full bg-[oklch(0.25_0.03_145)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: titleY, filter: useTransform(titleBlur, (v) => `blur(${v}px)`) }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            Более 600 домов по всей России
          </motion.div>

          {/* Title - serif display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-display-1 font-bold tracking-tight text-white"
          >
            <span className="block">Дом вашей</span>
            <span className="block text-accent">мечты под ключ</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Энергоэффективные дома из клееного бруса. Заводское производство,
            фиксированная цена и гарантия 5 лет на каждый проект.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic>
              <Link href="/katalog">
                <Button
                  size="lg"
                  className="gap-2 rounded-xl bg-white px-8 py-6 text-base font-semibold text-fg shadow-xl hover:bg-white/90"
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
                className="rounded-xl border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
              >
                Рассчитать стоимость
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-24"
        >
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                <Counter to={15} suffix="+" />
              </div>
              <div className="mt-1 text-sm text-white/60">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                <Counter to={600} suffix="+" />
              </div>
              <div className="mt-1 text-sm text-white/60">Домов построено</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                <Counter to={47} />
              </div>
              <div className="mt-1 text-sm text-white/60">Регионов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                <Counter to={4} suffix=".8" />
              </div>
              <div className="mt-1 text-sm text-white/60">Рейтинг</div>
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
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
