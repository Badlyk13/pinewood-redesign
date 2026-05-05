import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { BentoFeatures } from "@/components/sections/bento-features";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Process } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageSEO } from "@/lib/seo";
import { faqPageSchema, organizationSchema } from "@/lib/schema-org";

export const metadata: Metadata = generatePageSEO({
  title: "Загородные дома под ключ",
  description:
    "Проектирование и строительство энергоэффективных загородных домов из клееного бруса. Заводское производство, гарантия 5 лет, 600+ построенных домов.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
      <Header />
      <main>
        <Hero />
        <BentoFeatures />
        <ProjectsPreview />
        <Process />
        <TestimonialsSection />
        <FAQSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
