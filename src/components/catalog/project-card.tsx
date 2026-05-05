import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/katalog/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <Image
          src={project.images[0]}
          alt={`Проект дома ${project.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {project.popular && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-fg">
            Популярный
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-fg-muted">
          <span>{project.area} м²</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>
            {project.floors}{" "}
            {project.floors === 1
              ? "этаж"
              : project.floors === 1.5
                ? "этажа"
                : "этажа"}
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>
            {project.bedrooms}{" "}
            {project.bedrooms === 1
              ? "спальня"
              : project.bedrooms < 5
                ? "спальни"
                : "спальням"}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs text-fg-muted">от</span>
            <span className="ml-1 text-lg font-bold text-primary">
              {project.priceFrom.toLocaleString("ru-RU")} ₽
            </span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
