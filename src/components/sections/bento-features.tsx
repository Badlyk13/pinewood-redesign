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
    span: "col-span-2",
  },
  {
    icon: Zap,
    title: "Энергоэффективность",
    description: "",
    highlight: "-40%",
    highlightLabel: "расход на отопление",
    span: "col-span-1",
  },
  {
    icon: Shield,
    title: "Гарантия 5 лет",
    description:
      "Распространяется на несущие конструкции, кровлю и инженерные системы. Бесплатное гарантийное обслуживание.",
    span: "col-span-1",
  },
  {
    icon: FileText,
    title: "Договор фиксированной цены",
    description:
      "Стоимость в договоре — финальная. Никаких доплат в процессе строительства. Все условия прописаны юридически чисто.",
    span: "col-span-2",
  },
  {
    icon: Monitor,
    title: "Личный кабинет стройки",
    description: "Фото-отчёты, контроль этапов, онлайн-связь с прорабом.",
    soon: true,
    span: "col-span-1",
  },
];

export function BentoFeatures() {
  return (
    <Container>
      <FadeUp>
        <h2 className="font-serif text-display-3 font-bold text-fg">
          Почему мы
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-fg-muted">
          15 лет опыта, собственное производство и более 600 построенных домов
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FadeUp key={feature.title} delay={index * 0.1}>
            <div
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg lg:p-8 ${feature.span}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>

              {feature.highlight ? (
                <div className="mt-4">
                  <div className="font-serif text-5xl font-bold text-primary">
                    {feature.highlight}
                  </div>
                  <div className="mt-1 text-sm text-fg-muted">
                    {feature.highlightLabel}
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="mt-4 text-lg font-semibold text-fg">
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
          </FadeUp>
        ))}
      </div>
    </Container>
  );
}
