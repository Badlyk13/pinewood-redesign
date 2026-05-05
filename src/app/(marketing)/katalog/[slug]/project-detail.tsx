"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Phone, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Lightbox } from "@/components/shared/lightbox";
import { FloorPlanView } from "@/components/shared/floor-plan";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/catalog/project-card";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const similar = projects
    .filter((p) => p.slug !== project.slug && p.floors === project.floors)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-[4.5rem]">
        {/* Hero */}
        <section className="border-b border-border bg-surface">
          <Container className="py-8 sm:py-12">
            <Link
              href="/katalog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к каталогу
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main image placeholder */}
              <div className="lg:col-span-2">
                <FadeUp>
                  <button
                    onClick={() => {
                      setLightboxOpen(true);
                      setLightboxIndex(0);
                    }}
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 cursor-pointer transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-label="Открыть галерею"
                  >
                    <Image
                      src={project.images[0]}
                      alt={`Проект дома ${project.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 60vw"
                    />
                  </button>
                  {/* Thumbnails */}
                  <div className="mt-3 flex gap-3">
                    {project.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setLightboxOpen(true);
                          setLightboxIndex(i);
                        }}
                        className={`relative h-16 w-24 cursor-pointer overflow-hidden rounded-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          i === 0 ? "ring-2 ring-primary" : ""
                        }`}
                        aria-label={`Открыть изображение ${i + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`Миниатюра ${i + 1} — ${project.name}`}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </button>
                    ))}
                  </div>
                </FadeUp>
              </div>

              {/* Sidebar */}
              <FadeUp delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2">
                    <h1 className="font-serif text-2xl font-bold text-fg">
                      {project.name}
                    </h1>
                    {project.popular && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Популярный
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4 space-y-3 text-sm text-fg-muted">
                    <div className="flex justify-between">
                      <span>Площадь</span>
                      <span className="font-medium text-fg">{project.area} м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Этажность</span>
                      <span className="font-medium text-fg">{project.floors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Спальни</span>
                      <span className="font-medium text-fg">{project.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Санузлы</span>
                      <span className="font-medium text-fg">{project.bathrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Потолки</span>
                      <span className="font-medium text-fg">{project.ceilingHeight} м</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Фасад</span>
                      <span className="font-medium text-fg">{project.facade}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <span className="text-sm text-fg-muted">Стоимость от</span>
                    <div className="text-3xl font-bold text-primary">
                      {project.priceFrom.toLocaleString("ru-RU")} ₽
                    </div>
                    <div className="mt-1 text-xs text-fg-muted">
                      {project.pricePerSqm.toLocaleString("ru-RU")} ₽/м²
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button className="w-full gap-2" size="lg">
                      <Phone className="h-4 w-4" />
                      Заказать проект
                    </Button>
                    <Button variant="outline" className="w-full gap-2" size="lg" disabled>
                      <Download className="h-4 w-4" />
                      Скачать PDF
                    </Button>
                  </div>

                  <p className="mt-4 text-center text-xs text-fg-muted">
                    PDF-спецификация будет доступна скоро
                  </p>
                </div>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Tabs */}
        <Container className="py-12 sm:py-16">
          <FadeUp>
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="features">Комплектация</TabsTrigger>
                <TabsTrigger value="plans">Планировки</TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="mt-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-fg">
                      Основные параметры
                    </h3>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Площадь", `${project.area} м²`],
                        ["Этажность", `${project.floors} этажа`],
                        ["Спальни", `${project.bedrooms}`],
                        ["Санузлы", `${project.bathrooms}`],
                        ["Высота потолков", `${project.ceilingHeight} м`],
                        ["Фасад", project.facade],
                        ["Гараж", "Опция"],
                        ["Терраса", "Опция"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex justify-between border-b border-border pb-2"
                        >
                          <span className="text-sm text-fg-muted">{label}</span>
                          <span className="text-sm font-medium text-fg">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-fg">Описание</h3>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                      {project.description}
                    </p>

                    <h3 className="mt-6 text-lg font-semibold text-fg">
                      Преимущества
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-fg-muted"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-8">
                <div className="max-w-2xl space-y-4">
                  {[
                    "Клееный брус (сосна/ель) — несущие стены",
                    "Утепление минеральной ватой 200 мм",
                    "Фундамент — свайно-винтовой или ленточный",
                    "Кровля — металлочерепица или фальц",
                    "Окна — двухкамерный ПВХ профиль",
                    "Двери входные — металлические с термоизоляцией",
                    "Инженерные сети — электрика, водоснабжение, канализация",
                    "Отопление — электрическое или газовое (на выбор)",
                    "Чистовая отделка — по выбранной комплектации",
                    "Гарантия 5 лет на конструктив",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-fg-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="plans" className="mt-8">
                <FloorPlanView slug={project.slug} />
              </TabsContent>
            </Tabs>
          </FadeUp>
        </Container>

        {/* Similar projects */}
        {similar.length > 0 && (
          <section className="border-t border-border bg-surface">
            <Container className="py-12 sm:py-16">
              <FadeUp>
                <h2 className="font-serif text-display-3 font-bold text-fg">
                  Похожие проекты
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {similar.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
                </div>
              </FadeUp>
            </Container>
          </section>
        )}
      </main>
      <Footer />
      <Lightbox
        images={project.images}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
}
