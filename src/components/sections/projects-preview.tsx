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
    <section className="bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <FadeUp>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-display-3 font-bold text-fg">
                Проекты домов
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-fg-muted">
                От компактных 54 м² до просторных 326 м². Выберите проект или
                закажите индивидуальный.
              </p>
            </div>
            <Link href="/katalog" className="hidden sm:block">
              <Button
                variant="ghost"
                className="gap-2 text-fg-muted hover:text-fg"
              >
                Все проекты
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.08}>
              <Link
                href={`/katalog/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl font-serif font-bold text-primary/20">
                      {project.name}
                    </span>
                  </div>
                  {project.popular && (
                    <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-fg">
                      Популярный
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-fg">
                    {project.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-sm text-fg-muted">
                    <span>{project.area} м²</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{project.floors} {project.floors === 1 ? "этаж" : "этажа"}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{project.bedrooms} спальни</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-fg-muted">от</span>
                      <span className="ml-1 text-lg font-bold text-primary">
                        {project.priceFrom.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
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
