"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-surface">
      <Container className="py-20 sm:py-24 lg:py-32">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Отзывы
            </span>
            <h2 className="mt-3 font-serif text-display-3 font-bold text-fg">
              Что говорят клиенты
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Более 600 семей уже живут в наших домах
            </p>
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {featured.map((testimonial, index) => (
            <FadeUp key={testimonial.id} delay={index * 0.08}>
              <div className="relative h-full rounded-2xl border border-border bg-gradient-to-br from-card via-card to-surface p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-xl lg:p-8">
                {/* Quote icon */}
                <Quote className="mb-5 h-8 w-8 text-primary/15" />

                {/* Text */}
                <p className="text-sm leading-relaxed text-fg/90">
                  &laquo;{testimonial.text}&raquo;
                </p>

                {/* Stars */}
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="mt-5 border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-fg-muted">
                        {testimonial.location} &middot; &laquo;{testimonial.project}&raquo;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
