import { Suspense } from "react";
import type { Metadata } from "next";
import { generatePageSEO } from "@/lib/seo";
import { CatalogContent } from "./catalog-content";

export const metadata: Metadata = generatePageSEO({
  title: "Каталог проектов домов",
  description:
    "Каталог проектов загородных домов из клееного бруса. От 54 м² до 326 м². Цены под ключ, модификация под ваши пожелания.",
  path: "/katalog",
});

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  );
}
