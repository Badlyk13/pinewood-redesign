"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Shield, Factory, Zap, FileText, Monitor } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Заводское производство",
    description:
      "Все детали изготавливаются в контролируемых условиях на собственном заводе. Прецизионная точность до 0.1 мм.",
    span: "lg:col-span-2",
    gradient: "from-primary/5 via-primary/[0.02] to-transparent",
  },
  {
    icon: Zap,
    title: "Энергоэффективность",
    description: "",
    highlight: "-40%",
    highlightLabel: "расход на отопление",
    span: "lg:col-span-1",
    gradient: "from-accent/5 via-accent/[0.02] to-transparent",
  },
  {
    icon: Shield,
    title: "Гарантия 5 лет",
    description:
      "На несущие конструкции, кровлю и инженерные системы. Бесплатное гарантийное обслуживание.",
    span: "lg:col-span-1",
    gradient: "from-primary/5 via-transparent to-transparent",
  },
  {
    icon: FileText,
    title: "Договор фиксированной цены",
    description:
      "Стоимость в договоре — финальная. Никаких доплат в процессе строительства.",
    span: "lg:col-span-2",
    gradient: "from-primary/[0.03] via-transparent to-accent/[0.03]",
  },
  {
    icon: Monitor,
    title: "Личный кабинет стройки",
    description: "Фото-отчёты, контроль этапов, онлайн-связь с прорабом.",
    soon: true,
    span: "lg:col-span-1",
    gradient: "from-accent/[0.03] via-transparent to-transparent",
  },
];

export function BentoFeatures() {
  return (
    <Container className="py-20 sm:py-24 lg:py-32">
      {/* Header */}
      <FadeUp>
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Преимущества
          </span>
          <h2 className="mt-3 font-serif text-display-3 font-bold text-fg">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-lg text-fg-muted">
            15 лет опыта, собственное производство и более 600 построенных домов
          </p>
        </div>
      </FadeUp>

      {/* Grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
        {features.map((feature, index) => (
          <FadeUp key={feature.title} delay={index * 0.08}>
            <div
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${feature.gradient} p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-xl lg:p-8 ${feature.span}`}
            >
              {/* Hover glow effect */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/0 blur-[60px] transition-all duration-500 group-hover:bg-primary/[0.07]" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-fg">
                  <feature.icon className="h-5 w-5" />
                </div>

                {feature.highlight ? (
                  <div className="mt-6">
                    <div className="font-serif text-5xl font-bold text-primary lg:text-6xl">
                      {feature.highlight}
                    </div>
                    <div className="mt-2 text-sm text-fg-muted">
                      {feature.highlightLabel}
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="mt-5 text-lg font-semibold text-fg">
                      {feature.title}
                      {feature.soon && (
                        <span className="ml-2 text-xs font-medium uppercase tracking-wider text-accent">
                          Скоро
                        </span>
                      )}
                    </h3>
                    {feature.description && (
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                        {feature.description}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  );
}
