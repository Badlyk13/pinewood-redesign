"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - text */}
            <FadeUp>
              <h2 className="font-serif text-display-3 font-bold">
                Готовы начать?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Оставьте заявку и получите бесплатную консультацию. Рассчитаем
                стоимость строительства под ваши параметры за 15 минут.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4" />
                Или позвоните:{' '}
                <a
                  href="tel:+74951234567"
                  className="font-medium text-white hover:underline"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </FadeUp>

            {/* Right - form */}
            <FadeUp delay={0.2}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="cta-name" className="text-white/80">
                    Имя
                  </Label>
                  <Input
                    id="cta-name"
                    placeholder="Ваше имя"
                    className="mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="cta-phone" className="text-white/80">
                    Телефон
                  </Label>
                  <Input
                    id="cta-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <Magnetic>
                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 w-full rounded-xl bg-white px-6 py-5 text-base font-semibold text-primary hover:bg-white/90"
                  >
                    Получить консультацию
                  </Button>
                </Magnetic>
                <p className="text-center text-xs text-white/40">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
