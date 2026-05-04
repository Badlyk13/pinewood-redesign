import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import { generatePageSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { productSchema } from "@/lib/schema-org";
import { ProjectDetail } from "./project-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return generatePageSEO({
    title: `${project.name} — ${project.area} м²`,
    description: project.description,
    path: `/katalog/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const breadcrumbJson = generateBreadcrumbSchema([
    { name: "Главная", url: "/" },
    { name: "Каталог", url: "/katalog" },
    { name: project.name, url: `/katalog/${project.slug}` },
  ]);

  const productJson = productSchema(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJson) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
