"use client";

import type { Room } from "@/data/floor-plans";
import { getFloorPlansBySlug } from "@/data/floor-plans";

interface FloorPlanViewProps {
  slug: string;
  className?: string;
}

const roomColors: Record<Room["type"], string> = {
  living: "var(--room-living)",
  bedroom: "var(--room-bedroom)",
  kitchen: "var(--room-kitchen)",
  bathroom: "var(--room-bathroom)",
  hallway: "var(--room-hallway)",
  terrace: "var(--room-terrace)",
  garage: "var(--room-garage)",
  wardrobe: "var(--room-wardrobe)",
};

export function FloorPlanView({ slug, className = "" }: FloorPlanViewProps) {
  const plans = getFloorPlansBySlug(slug);

  if (!plans || plans.length === 0) {
    return (
      <div className="aspect-[4/3] rounded-2xl border border-border bg-surface p-8">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-medium text-fg">Планировка</p>
            <p className="mt-2 text-xs text-fg-muted">Планировка будет доступна в PDF</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${className}`}>
      {plans.map((plan) => (
        <div key={plan.floor} className="aspect-[4/3] rounded-2xl border border-border bg-card p-4">
          <h4 className="text-sm font-medium text-fg">План {plan.label}</h4>
          <svg viewBox="0 0 100 100" className="mt-2 w-full rounded-lg" preserveAspectRatio="xMidYMid meet">
            {plan.rooms.map((room) => (
              <g key={room.id}>
                <rect
                  x={room.x}
                  y={room.y}
                  width={room.width}
                  height={room.height}
                  fill={roomColors[room.type]}
                  stroke="var(--fg-muted)"
                  strokeWidth="0.3"
                  strokeDasharray={room.type === "terrace" ? "1 0.5" : "0"}
                />
                <text
                  x={room.x + room.width / 2}
                  y={room.y + room.height / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="2.5"
                  fill="var(--fg)"
                  style={{ fontFamily: "inherit" }}
                >
                  {room.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
}
