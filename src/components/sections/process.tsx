"use client";

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
  return (
    <section className="bg-surface">
      <Container className="py-20 sm:py-24 lg:py-32">
        {/* Header */}
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

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[23px] w-px bg-border lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-10 lg:space-y-0">
            {steps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.06}>
                <div
                  className={cn(
                    "relative flex gap-6 lg:min-h-[160px] lg:gap-0",
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1 pt-1 lg:w-1/2",
                      index % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    )}
                  >
                    <div className={cn(
                      "flex items-start gap-4 lg:items-start",
                      index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                    )}>
                      <span className="font-serif text-5xl font-bold text-primary/10 lg:text-6xl">
                        {step.number}
                      </span>
                      <div className="pt-1 lg:pt-2">
                        <h3 className="text-lg font-semibold text-fg">
                          {step.title}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
                          {step.description}
                        </p>
                        <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-accent">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="absolute top-1 left-[19px] hidden h-3 w-3 rounded-full border-2 border-primary bg-background lg:left-1/2 lg:block lg:-translate-x-1.5" />

                  {/* Empty space for alternating layout — desktop only */}
                  <div className="hidden flex-1 lg:block lg:w-1/2" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
