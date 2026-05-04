"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <FadeUp>
          <div className="text-center">
            <h2 className="font-serif text-display-3 font-bold text-fg">
              Отзывы клиентов
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Более 600 семей уже живут в наших домах
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial, index) => (
            <FadeUp key={testimonial.id} delay={index * 0.1}>
              <div className="relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg lg:p-8">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />

                <p className="text-sm leading-relaxed text-fg">
                  {testimonial.text}
                </p>

                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
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
                        {testimonial.location} &middot; Проект &laquo;{testimonial.project}&raquo;
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
