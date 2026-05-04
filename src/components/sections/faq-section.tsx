"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section>
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <FadeUp>
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
                FAQ
              </span>
              <h2 className="mt-3 font-serif text-display-3 font-bold text-fg">
                Частые вопросы
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Ответы на самые популярные вопросы о строительстве
              </p>
            </div>
          </FadeUp>

          {/* Accordion */}
          <FadeUp delay={0.15}>
            <Accordion className="mt-12 lg:mt-16">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-fg-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
