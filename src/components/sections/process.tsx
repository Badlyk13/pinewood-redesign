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
      "Аритектор разрабатывает проект с учётом ваших требований. 3D-визуализация, планировки, спецификации.",
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
      <Container className="py-16 sm:py-20 lg:py-24">
        <FadeUp>
          <div className="text-center">
            <h2 className="font-serif text-display-3 font-bold text-fg">
              Как мы строим
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-fg-muted">
              От первого звонка до передачи ключей — каждый этап под контролем
            </p>
          </div>
        </FadeUp>

        <div className="relative mt-16">
          {/* Vertical line (desktop) */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.08}>
                <div
                  className={cn(
                    "relative flex flex-col gap-4 lg:flex-row lg:gap-8 lg:py-8",
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1 lg:w-1/2",
                      index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                    )}
                  >
                    <div className="flex items-center gap-3 lg:justify-end">
                      <span className="font-serif text-3xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-semibold text-fg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute top-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background lg:block" />

                  {/* Duration */}
                  <div className="flex-1 lg:w-1/2 lg:py-2">
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm",
                        index % 2 === 0 ? "lg:ml-12" : "lg:mr-12"
                      )}
                    >
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l4 2"
                        />
                      </svg>
                      {step.duration}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
