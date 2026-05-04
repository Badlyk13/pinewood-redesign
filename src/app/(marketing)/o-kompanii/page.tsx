"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Counter } from "@/components/motion/counter";
import { Button } from "@/components/ui/button";

const milestones = [
  { year: "2011", title: "Основание", description: "Компания Pinewood Homes основана в Подмосковье" },
  { year: "2013", title: "Первый дом", description: "Построен первый дом из клееного бруса" },
  { year: "2015", title: "Свой завод", description: "Запуск собственного производства" },
  { year: "2018", title: "100-й дом", description: "Юбилейный сотый построенный дом" },
  { year: "2020", title: "Расширение", description: "Выход в 20+ регионов России" },
  { year: "2023", title: "300+ домов", description: "Преодолён рубеж в 300 построенных домов" },
  { year: "2025", title: "600+ домов", description: "Более 600 семей живут в наших домах" },
];

const teamMembers = [
  {
    name: "Андрей Пайнвуд",
    role: "Основатель и CEO",
    initials: "АП",
  },
  {
    name: "Михаил Леснов",
    role: "Главный архитектор",
    initials: "МЛ",
  },
  {
    name: "Наталья Ершова",
    role: "Руководитель производства",
    initials: "НЕ",
  },
  {
    name: "Дмитрий Орлов",
    role: "Руководитель проектов",
    initials: "ДО",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[4.5rem]">
        {/* Hero */}
        <section className="border-b border-border bg-surface">
          <Container className="py-16 sm:py-20 lg:py-24">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-serif text-display-2 font-bold text-fg">
                  О компании
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-fg-muted">
                  С 2011 года мы проектируем и строим энергоэффективные загородные
                  дома из клееного бруса. Наша миссия — сделать качественное
                  домостроение доступным для каждой семьи.
                </p>
              </div>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.3}>
              <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  { to: 15, suffix: "+", label: "Лет на рынке" },
                  { to: 600, suffix: "+", label: "Домов построено" },
                  { to: 47, suffix: "", label: "Регионов" },
                  { to: 4.8, suffix: "", label: "Средний рейтинг" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary sm:text-4xl">
                      <Counter to={stat.to} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-fg-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </Container>
        </section>

        {/* Timeline */}
        <Container className="py-16 sm:py-20">
          <FadeUp>
            <h2 className="font-serif text-display-3 font-bold text-fg">
              Наш путь
            </h2>
          </FadeUp>
          <div className="relative mt-12">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-border sm:left-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <FadeUp key={milestone.year} delay={index * 0.08}>
                  <div
                    className={`relative flex gap-8 pl-12 sm:pl-0 ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute top-1 left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background sm:top-2 sm:left-1/2" />

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"}`}>
                      <span className="font-serif text-2xl font-bold text-primary/30">
                        {milestone.year}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-fg">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden flex-1 sm:block" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </Container>

        {/* Team */}
        <section className="border-t border-border bg-surface">
          <Container className="py-16 sm:py-20">
            <FadeUp>
              <div className="text-center">
                <h2 className="font-serif text-display-3 font-bold text-fg">
                  Команда
                </h2>
                <p className="mt-4 text-lg text-fg-muted">
                  Профессионалы с опытом от 5 до 15 лет в домостроении
                </p>
              </div>
            </FadeUp>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <FadeUp key={member.name} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
                    {/* Avatar placeholder */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      {member.initials}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-fg">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-fg-muted">{member.role}</p>
                    <p className="mt-1 text-xs text-fg-muted/60">
                      Фото будет заменено
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <Container className="py-16 sm:py-20">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-display-3 font-bold text-fg">
                Приезжайте на производство
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Увидьте своими глазами, как производятся наши дома. Запишитесь
                на экскурсию — это бесплатно и ни к чему не обязывает.
              </p>
              <Button size="lg" className="mt-8 rounded-xl px-8 py-6">
                Записаться на экскурсию
              </Button>
            </div>
          </FadeUp>
        </Container>
      </main>
      <Footer />
    </>
  );
}
