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
    <section className="bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="text-center">
              <h2 className="font-serif text-display-3 font-bold text-fg">
                Частые вопросы
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Ответы на самые популярные вопросы о строительстве
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Accordion className="mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base">
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
