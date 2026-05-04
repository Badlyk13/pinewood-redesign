"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Magnetic } from "@/components/motion/magnetic";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function ProjectsPreview() {
  const previewProjects = projects.slice(0, 6);

  return (
    <section>
      <Container className="py-20 sm:py-24 lg:py-32">
        {/* Header */}
        <FadeUp>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
                Каталог
              </span>
              <h2 className="mt-3 font-serif text-display-3 font-bold text-fg">
                Проекты домов
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                От компактных 54 м² до просторных 326 м². Выберите проект или
                закажите индивидуальный.
              </p>
            </div>
            <Magnetic>
              <Link href="/katalog" className="hidden shrink-0 sm:block">
                <Button
                  variant="ghost"
                  className="gap-2 text-fg-muted hover:text-fg"
                >
                  Все проекты
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Magnetic>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {previewProjects.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.06}>
              <Link
                href={`/katalog/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/[0.06] via-primary/[0.03] to-accent/[0.06]">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-primary/15 transition-transform duration-500 group-hover:scale-105">
                      {project.name}
                    </span>
                  </div>

                  {/* Popular badge */}
                  {project.popular && (
                    <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-fg">
                      Популярный
                    </span>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
                </div>

                {/* Info */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg font-semibold text-fg">
                    {project.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-sm text-fg-muted">
                    <span>{project.area} м²</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{project.floors} {project.floors === 1 ? "этаж" : "этажа"}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{project.bedrooms} {project.bedrooms === 1 ? "спальня" : project.bedrooms < 5 ? "спальни" : "спален"}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <span className="text-xs text-fg-muted">от</span>
                      <span className="ml-1 text-xl font-bold text-primary">
                        {project.priceFrom.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-fg-muted transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-fg">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Mobile CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-12 text-center sm:hidden">
            <Link href="/katalog">
              <Button variant="outline" className="gap-2">
                Все проекты
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
