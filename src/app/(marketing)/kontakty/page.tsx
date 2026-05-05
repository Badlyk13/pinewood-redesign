import type { Metadata } from "next";
import { generatePageSEO } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema-org";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { YandexMap } from "@/components/shared/yandex-map";
import { FadeUp } from "@/components/motion/fade-up";
import { ContactForm } from "@/components/forms/contact-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata: Metadata = generatePageSEO({
  title: "Контакты",
  description:
    "Свяжитесь с Pinewood Homes: телефон +7 (495) 123-45-67, email info@pinewoodhomes.ru. Производство в Одинцово, Московская область. Запишитесь на экскурсию.",
  path: "/kontakty",
});

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
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

        <Container className="py-10 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <FadeUp>
              <div className="space-y-6 sm:space-y-8">
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

                <YandexMap />

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
              <div className="rounded-2xl border border-border bg-card p-4 sm:p-8">
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
