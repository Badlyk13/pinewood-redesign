import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { comingSoonPages } from "@/data/coming-soon";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pinewoodhomes.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/katalog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/o-kompanii`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kontakty`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/katalog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const comingSoonPages_sitemap: MetadataRoute.Sitemap = comingSoonPages.map(
    (p) => ({
      url: `${SITE_URL}/coming-soon/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })
  );

  return [...staticPages, ...projectPages, ...comingSoonPages_sitemap];
}
