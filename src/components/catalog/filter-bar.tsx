"use client";

import { useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

const floorOptions = [
  { label: "Все", value: "all" },
  { label: "1 этаж", value: "1" },
  { label: "1.5 этажа", value: "1.5" },
  { label: "2 этажа", value: "2" },
];

const sortOptions = [
  { label: "По популярности", value: "popular" },
  { label: "Сначала дешевле", value: "price-asc" },
  { label: "Сначала дороже", value: "price-desc" },
  { label: "По площади ↑", value: "area-desc" },
];

interface FilterBarProps {
  onMobileOpen?: () => void;
}

export function FilterBar({ onMobileOpen }: FilterBarProps) {
  const [floors, setFloors] = useQueryState("floors", { defaultValue: "all" });
  const [sort, setSort] = useQueryState("sort", { defaultValue: "popular" });

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        className="gap-2 lg:hidden"
        onClick={onMobileOpen}
      >
        <SlidersHorizontal className="h-4 w-4" />
        Фильтры
      </Button>

      <div className="hidden gap-2 lg:flex">
        {floorOptions.map((option) => (
          <Button
            key={option.value}
            variant={floors === option.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFloors(option.value)}
            className={cn(
              floors === option.value
                ? "bg-primary text-primary-fg"
                : "text-fg-muted"
            )}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="ml-auto">
        <Select value={sort} onValueChange={(v) => setSort(v)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
