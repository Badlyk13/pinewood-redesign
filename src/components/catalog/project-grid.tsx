import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  floors?: string;
  sort?: string;
}

export function ProjectGrid({ floors = "all", sort = "popular" }: ProjectGridProps) {
  let filtered = [...projects];

  // Filter by floors
  if (floors !== "all") {
    filtered = filtered.filter((p) => p.floors === parseFloat(floors));
  }

  // Sort
  switch (sort) {
    case "price-asc":
      filtered.sort((a, b) => a.priceFrom - b.priceFrom);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.priceFrom - a.priceFrom);
      break;
    case "area-desc":
      filtered.sort((a, b) => b.area - a.area);
      break;
    case "popular":
    default:
      filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      break;
  }

  if (filtered.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-fg-muted">
          Проекты не найдены. Попробуйте изменить фильтры.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
