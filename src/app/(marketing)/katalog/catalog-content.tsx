"use client";

import { useQueryState } from "nuqs";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { FilterBar } from "@/components/catalog/filter-bar";
import { ProjectGrid } from "@/components/catalog/project-grid";
import { FadeUp } from "@/components/motion/fade-up";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CatalogContent() {
  const [floors, setFloors] = useQueryState("floors", { defaultValue: "all" });
  const [sort, setSort] = useQueryState("sort", { defaultValue: "popular" });
  const [mobileFilters, setMobileFilters] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-surface">
          <Container className="py-12 sm:py-16">
            <FadeUp>
              <h1 className="font-serif text-display-2 font-bold text-fg">
                Каталог проектов
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-fg-muted">
                От 54 м² до 326 м². Цены под ключ. Каждый проект модифицируем
                под ваши пожелания.
              </p>
            </FadeUp>
          </Container>
        </section>

        {/* Filters + Grid */}
        <Container className="py-8 sm:py-12">
          <div className="sticky top-16 z-30 -mx-4 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <FilterBar onMobileOpen={() => setMobileFilters(true)} />
          </div>

          <div className="mt-8">
            <ProjectGrid floors={floors} sort={sort} />
          </div>
        </Container>

        {/* Mobile filters drawer */}
        <Sheet open={mobileFilters} onOpenChange={setMobileFilters}>
          <SheetContent side="bottom" className="rounded-t-2xl">
            <SheetHeader>
              <SheetTitle>Фильтры</SheetTitle>
            </SheetHeader>
            <div className="flex flex-wrap gap-2 p-6">
              {[
                { label: "Все", value: "all" },
                { label: "1 этаж", value: "1" },
                { label: "1.5 этажа", value: "1.5" },
                { label: "2 этажа", value: "2" },
              ].map((option) => (
                <Button
                  key={option.value}
                  variant={floors === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setFloors(option.value);
                    setMobileFilters(false);
                  }}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </main>
      <Footer />
    </>
  );
}
