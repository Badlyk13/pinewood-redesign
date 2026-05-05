"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "motion/react";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Знакомство и замеры",
    description:
      "Бесплатный выезд на участок. Замеры, оценка рельефа, обсуждение ваших пожеланий и бюджета.",
    duration: "1–2 дня",
  },
  {
    number: "02",
    title: "Проектирование",
    description:
      "Архитектор разрабатывает проект с учётом ваших требований. 3D-визуализация, планировки, спецификации.",
    duration: "7–14 дней",
  },
  {
    number: "03",
    title: "Договор и производство",
    description:
      "Подписание договора с фиксированной ценой. Запуск производства на заводе — все детали изготавливаются с точностью до 0.1 мм.",
    duration: "30–60 дней",
  },
  {
    number: "04",
    title: "Фундамент",
    description:
      "Подготовка участка и устройство фундамента. Мы работаем со всеми типами: свайный, ленточный, плитный.",
    duration: "7–14 дней",
  },
  {
    number: "05",
    title: "Сборка дома",
    description:
      "Бригада из 4–6 человек собирает дом на участке. Сборка каркаса, кровли, установка окон и дверей.",
    duration: "15–30 дней",
  },
  {
    number: "06",
    title: "Инженерные сети и отделка",
    description:
      "Подключение электрики, водоснабжения, канализации и отопления. Чистовая отделка по выбранной комплектации.",
    duration: "14–30 дней",
  },
];

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Высота секции = кол-во шагов * 100vh
  const totalHeight = steps.length * 100;

  // Progress bar animation
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Декоративный элемент — rotate/scale на основе scrollYProgress
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [691.15, 0]);

  // Отслеживаем активный шаг
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepIndex = Math.min(
      Math.floor(latest * steps.length),
      steps.length - 1
    );
    setCurrentStep(stepIndex);
  });

  const activeStep = steps[currentStep];

  return (
    <section className="relative bg-surface">
      <Container className="relative z-10 py-20 sm:py-24 lg:py-32">
        {/* Header — вне sticky container */}
        <FadeUp>
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Процесс
            </span>
            <h2 className="mt-3 font-serif text-display-3 font-bold text-fg">
              От первого звонка до передачи ключей
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Каждый этап прозрачен и контролируется. Вы всегда знаете, что происходит на вашей стройке.
            </p>
          </div>
        </FadeUp>

        {/* Pinned scroll storytelling container */}
        <section
          ref={containerRef}
          className="relative mt-16 lg:mt-20"
          style={{ height: `${totalHeight}vh` }}
        >
          {/* Sticky inner container */}
          <motion.div
            style={{ position: "sticky", top: "4.5rem" }}
            className="min-h-[calc(100vh-4.5rem)] flex items-center"
          >
            {/* Progress bar — тонкая полоска сверху */}
            <motion.div
              style={{ scaleX }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left"
            />

            {/* Left: Step info */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="block font-serif text-7xl font-bold text-primary/10 lg:text-8xl">
                    {activeStep.number}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-fg lg:text-3xl">
                    {activeStep.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-fg-muted lg:text-lg">
                    {activeStep.description}
                  </p>
                  <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wider text-accent">
                    {activeStep.duration}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Visual element — desktop only */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="relative flex items-center justify-center">
                <svg className="h-64 w-64 -rotate-90" viewBox="0 0 256 256">
                  <circle cx="128" cy="128" r="110" fill="none" stroke="color-mix(in oklch, var(--primary), transparent 90%)" strokeWidth="4" />
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="110"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={691.15}
                    style={{ strokeDashoffset }}
                  />
                </svg>
                <motion.div style={{ rotate, scale }} className="absolute flex flex-col items-center">
                  <span className="font-serif text-7xl font-bold text-primary/20">{activeStep.number}</span>
                  <span className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">{activeStep.duration}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute right-0 bottom-4 rounded-xl border border-border/50 bg-surface/80 p-4 shadow-lg backdrop-blur-md"
                >
                  <div className="text-xs font-medium uppercase tracking-wider text-fg-muted">Этап</div>
                  <div className="mt-1 text-2xl font-bold text-fg">{activeStep.number}<span className="text-fg-muted"> / 06</span></div>
                </motion.div>
              </div>
            </div>

            {/* Step indicators — dot navigation */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === currentStep ? "w-8 bg-primary" : "w-1.5 bg-border"
                  )}
                />
              ))}
            </div>
          </motion.div>
        </section>
      </Container>
    </section>
  );
}
