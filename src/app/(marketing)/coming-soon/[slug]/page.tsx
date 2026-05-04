import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { comingSoonPages } from "@/data/coming-soon";
import { generatePageSEO } from "@/lib/seo";
import { ComingSoonContent } from "./coming-soon-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comingSoonPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = comingSoonPages.find((p) => p.slug === slug);
  if (!page) return {};

  return generatePageSEO({
    title: `${page.title} — Скоро`,
    description: page.description,
    path: `/${slug}`,
  });
}

export default async function ComingSoonPage({ params }: PageProps) {
  const { slug } = await params;
  const page = comingSoonPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return <ComingSoonContent page={page} />;
}
