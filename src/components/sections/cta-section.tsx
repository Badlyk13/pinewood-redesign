"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { CTAForm } from "@/components/forms/cta-form";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section>
      <Container className="py-20 sm:py-24 lg:py-32">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-oklch-[0.35_0.06_130]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-oklch-[0.25_0.04_145]/50" />

            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-[60px]" />

            {/* Content */}
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              {/* Left - text */}
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-white/60">
                  Начните сейчас
                </span>
                <h2 className="mt-3 font-serif text-display-3 font-bold text-white">
                  Готовы начать?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Оставьте заявку и получите бесплатную консультацию. Рассчитаем
                  стоимость строительства под ваши параметры за 15 минут.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm text-white/50">
                  <Phone className="h-4 w-4" />
                  Или позвоните:{' '}
                  <a
                    href="tel:+74951234567"
                    className="font-medium text-white/80 hover:text-white hover:underline"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              {/* Right - form */}
              <FadeUp delay={0.15}>
                <CTAForm />
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
