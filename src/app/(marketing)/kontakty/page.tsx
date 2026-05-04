"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[4.5rem]">
        {/* Hero */}
        <section className="border-b border-border bg-surface">
          <Container className="py-16 sm:py-20">
            <FadeUp>
              <h1 className="font-serif text-display-2 font-bold text-fg">
                Контакты
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-fg-muted">
                Свяжитесь с нами удобным способом — мы ответим в течение часа
                в рабочее время.
              </p>
            </FadeUp>
          </Container>
        </section>

        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <FadeUp>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fg">Адрес</h3>
                    <p className="mt-1 text-sm text-fg-muted">
                      Московская область, г. Одинцово, ул. Заводская, д. 15
                    </p>
                    <p className="mt-1 text-xs text-fg-muted/60">
                      Производство и офис продаж
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fg">Телефон</h3>
                    <a
                      href="tel:+74951234567"
                      className="mt-1 block text-lg font-semibold text-primary hover:underline"
                    >
                      +7 (495) 123-45-67
                    </a>
                    <p className="mt-1 text-xs text-fg-muted">Пн–Пт: 9:00–18:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fg">Email</h3>
                    <a
                      href="mailto:info@pinewoodhomes.ru"
                      className="mt-1 block text-sm text-primary hover:underline"
                    >
                      info@pinewoodhomes.ru
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fg">Режим работы</h3>
                    <p className="mt-1 text-sm text-fg-muted">
                      Пн–Пт: 9:00–18:00
                    </p>
                    <p className="text-sm text-fg-muted">Сб: 10:00–16:00</p>
                    <p className="text-sm text-fg-muted">Вс: выходной</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-primary/20" />
                      <p className="mt-2 text-sm text-fg-muted">
                        Yandex Map — загрузка при скролле
                      </p>
                    </div>
                  </div>
                </div>

                {/* Legal */}
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs font-medium text-fg-muted">
                    ООО «Пайнвуд Хомс»
                  </p>
                  <p className="mt-1 text-xs text-fg-muted">
                    ИНН 7710123456 (mock)
                  </p>
                  <p className="text-xs text-fg-muted">
                    ОГРН 1177746012345 (mock)
                  </p>
                  <p className="mt-1 text-xs text-fg-muted/60">
                    * Реквизиты будут обновлены
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Contact form */}
            <FadeUp delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-fg">Задать вопрос</h2>
                <p className="mt-2 text-sm text-fg-muted">
                  Опишите ваш вопрос, и мы свяжемся с вами в ближайшее время.
                </p>

                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input
                        id="contact-name"
                        placeholder="Ваше имя"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Телефон</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Ваш вопрос или пожелания..."
                      rows={5}
                      className="mt-1.5"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 rounded-xl">
                    <Send className="h-4 w-4" />
                    Отправить
                  </Button>

                  <p className="text-center text-xs text-fg-muted/60">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
