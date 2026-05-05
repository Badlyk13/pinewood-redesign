export interface Room {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "living" | "bedroom" | "kitchen" | "bathroom" | "hallway" | "terrace" | "garage" | "wardrobe";
}

export interface FloorPlan {
  floor: number;
  label: string;
  rooms: Room[];
}

export interface ProjectFloorPlans {
  projectSlug: string;
  plans: FloorPlan[];
}

export const floorPlans: Record<string, FloorPlan[]> = {
  alena: [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "alena-living", name: "Гостиная", x: 1, y: 1, width: 48, height: 48, type: "living" },
        { id: "alena-kitchen", name: "Кухня", x: 51, y: 1, width: 48, height: 28, type: "kitchen" },
        { id: "alena-bedroom1", name: "Спальня 1", x: 1, y: 51, width: 30, height: 48, type: "bedroom" },
        { id: "alena-bedroom2", name: "Спальня 2", x: 32, y: 51, width: 30, height: 48, type: "bedroom" },
        { id: "alena-bathroom", name: "Санузел", x: 64, y: 31, width: 35, height: 28, type: "bathroom" },
        { id: "alena-hallway", name: "Прихожая", x: 64, y: 61, width: 35, height: 38, type: "hallway" },
      ],
    },
  ],
  varvara: [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "varvara-living", name: "Гостиная", x: 1, y: 1, width: 48, height: 48, type: "living" },
        { id: "varvara-kitchen", name: "Кухня", x: 51, y: 1, width: 48, height: 28, type: "kitchen" },
        { id: "varvara-bedroom1", name: "Спальня 1", x: 1, y: 51, width: 28, height: 48, type: "bedroom" },
        { id: "varvara-bedroom2", name: "Спальня 2", x: 31, y: 51, width: 28, height: 48, type: "bedroom" },
        { id: "varvara-bedroom3", name: "Спальня 3", x: 61, y: 31, width: 38, height: 28, type: "bedroom" },
        { id: "varvara-bathroom", name: "Санузел", x: 61, y: 61, width: 38, height: 38, type: "bathroom" },
        { id: "varvara-hallway", name: "Прихожая", x: 51, y: 31, width: 8, height: 68, type: "hallway" },
      ],
    },
  ],
  davinchi: [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "davinchi-living", name: "Гостиная", x: 1, y: 1, width: 48, height: 58, type: "living" },
        { id: "davinchi-kitchen", name: "Кухня", x: 51, y: 1, width: 48, height: 38, type: "kitchen" },
        { id: "davinchi-bathroom1", name: "Санузел 1", x: 51, y: 41, width: 48, height: 18, type: "bathroom" },
        { id: "davinchi-hallway", name: "Прихожая", x: 51, y: 61, width: 48, height: 38, type: "hallway" },
        { id: "davinchi-terrace", name: "Терраса", x: 1, y: 61, width: 48, height: 38, type: "terrace" },
      ],
    },
    {
      floor: 2,
      label: "2 этаж",
      rooms: [
        { id: "davinchi-bedroom1", name: "Спальня 1", x: 1, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "davinchi-bedroom2", name: "Спальня 2", x: 51, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "davinchi-bedroom3", name: "Спальня 3", x: 1, y: 51, width: 48, height: 48, type: "bedroom" },
        { id: "davinchi-bedroom4", name: "Спальня 4", x: 51, y: 51, width: 48, height: 48, type: "bedroom" },
        { id: "davinchi-bathroom2", name: "Санузел 2", x: 26, y: 25, width: 48, height: 50, type: "bathroom" },
      ],
    },
  ],
  "snezhnaya-anna": [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "snezhnaya-living", name: "Гостиная-студия", x: 1, y: 1, width: 68, height: 58, type: "living" },
        { id: "snezhnaya-kitchen", name: "Кухня", x: 71, y: 1, width: 28, height: 28, type: "kitchen" },
        { id: "snezhnaya-bedroom1", name: "Спальня 1", x: 1, y: 61, width: 48, height: 38, type: "bedroom" },
        { id: "snezhnaya-bedroom2", name: "Спальня 2", x: 51, y: 61, width: 48, height: 38, type: "bedroom" },
        { id: "snezhnaya-bedroom3", name: "Спальня 3", x: 71, y: 31, width: 28, height: 28, type: "bedroom" },
        { id: "snezhnaya-bathroom1", name: "Санузел 1", x: 71, y: 61, width: 28, height: 38, type: "bathroom" },
        { id: "snezhnaya-bathroom2", name: "Санузел 2", x: 1, y: 1, width: 28, height: 28, type: "bathroom" },
        { id: "snezhnaya-hallway", name: "Прихожая", x: 51, y: 31, width: 18, height: 28, type: "hallway" },
      ],
    },
  ],
  renuar: [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "renuar-living", name: "Гостиная", x: 1, y: 1, width: 48, height: 48, type: "living" },
        { id: "renuar-kitchen", name: "Кухня", x: 51, y: 1, width: 48, height: 38, type: "kitchen" },
        { id: "renuar-garage", name: "Гараж", x: 1, y: 51, width: 48, height: 48, type: "garage" },
        { id: "renuar-bathroom1", name: "Санузел 1", x: 51, y: 41, width: 48, height: 18, type: "bathroom" },
        { id: "renuar-hallway", name: "Прихожая", x: 51, y: 61, width: 48, height: 38, type: "hallway" },
        { id: "renuar-terrace", name: "Терраса", x: 51, y: 1, width: 48, height: 38, type: "terrace" },
      ],
    },
    {
      floor: 2,
      label: "2 этаж",
      rooms: [
        { id: "renuar-bedroom1", name: "Спальня 1", x: 1, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "renuar-bedroom2", name: "Спальня 2", x: 51, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "renuar-bedroom3", name: "Спальня 3", x: 1, y: 51, width: 48, height: 48, type: "bedroom" },
        { id: "renuar-bedroom4", name: "Спальня 4", x: 51, y: 51, width: 48, height: 48, type: "bedroom" },
        { id: "renuar-bathroom2", name: "Санузел 2", x: 26, y: 26, width: 48, height: 48, type: "bathroom" },
        { id: "renuar-hallway2", name: "Коридор", x: 26, y: 51, width: 48, height: 18, type: "hallway" },
      ],
    },
  ],
  olga: [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "olga-living", name: "Гостиная", x: 1, y: 1, width: 58, height: 48, type: "living" },
        { id: "olga-kitchen", name: "Кухня", x: 61, y: 1, width: 38, height: 28, type: "kitchen" },
        { id: "olga-dining", name: "Столовая", x: 61, y: 31, width: 38, height: 18, type: "living" },
        { id: "olga-garage", name: "Гараж", x: 1, y: 51, width: 48, height: 48, type: "garage" },
        { id: "olga-bathroom1", name: "Санузел 1", x: 61, y: 51, width: 38, height: 28, type: "bathroom" },
        { id: "olga-hallway", name: "Прихожая", x: 61, y: 81, width: 38, height: 18, type: "hallway" },
        { id: "olga-terrace", name: "Терраса", x: 1, y: 81, width: 58, height: 18, type: "terrace" },
      ],
    },
    {
      floor: 2,
      label: "2 этаж",
      rooms: [
        { id: "olga-bedroom1", name: "Спальня 1", x: 1, y: 1, width: 38, height: 48, type: "bedroom" },
        { id: "olga-bedroom2", name: "Спальня 2", x: 41, y: 1, width: 38, height: 48, type: "bedroom" },
        { id: "olga-bedroom3", name: "Спальня 3", x: 81, y: 1, width: 18, height: 48, type: "bedroom" },
        { id: "olga-bedroom4", name: "Спальня 4", x: 1, y: 51, width: 38, height: 48, type: "bedroom" },
        { id: "olga-bedroom5", name: "Спальня 5", x: 41, y: 51, width: 38, height: 48, type: "bedroom" },
        { id: "olga-bedroom6", name: "Спальня 6", x: 81, y: 51, width: 18, height: 48, type: "bedroom" },
        { id: "olga-bathroom2", name: "Санузел 2", x: 41, y: 26, width: 38, height: 48, type: "bathroom" },
        { id: "olga-bathroom3", name: "Санузел 3", x: 41, y: 51, width: 38, height: 48, type: "bathroom" },
      ],
    },
  ],
  "s-264": [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "s264-living", name: "Гостиная", x: 1, y: 1, width: 58, height: 48, type: "living" },
        { id: "s264-kitchen", name: "Кухня", x: 61, y: 1, width: 38, height: 38, type: "kitchen" },
        { id: "s264-bedroom1", name: "Спальня 1", x: 1, y: 51, width: 38, height: 48, type: "bedroom" },
        { id: "s264-bedroom2", name: "Спальня 2", x: 41, y: 51, width: 38, height: 48, type: "bedroom" },
        { id: "s264-bathroom1", name: "Санузел 1", x: 61, y: 41, width: 38, height: 38, type: "bathroom" },
        { id: "s264-hallway", name: "Прихожая", x: 61, y: 81, width: 38, height: 18, type: "hallway" },
        { id: "s264-terrace", name: "Терраса", x: 1, y: 81, width: 58, height: 18, type: "terrace" },
      ],
    },
    {
      floor: 2,
      label: "2 этаж",
      rooms: [
        { id: "s264-bedroom3", name: "Спальня 3", x: 1, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "s264-bedroom4", name: "Спальня 4", x: 51, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "s264-bedroom5", name: "Спальня 5", x: 1, y: 51, width: 48, height: 48, type: "bedroom" },
        { id: "s264-bathroom2", name: "Санузел 2", x: 51, y: 51, width: 48, height: 48, type: "bathroom" },
        { id: "s264-bathroom3", name: "Санузел 3", x: 26, y: 26, width: 48, height: 48, type: "bathroom" },
        { id: "s264-hallway2", name: "Коридор", x: 26, y: 51, width: 48, height: 18, type: "hallway" },
      ],
    },
  ],
  "s-113": [
    {
      floor: 1,
      label: "1 этаж",
      rooms: [
        { id: "s113-living", name: "Гостиная", x: 1, y: 1, width: 58, height: 48, type: "living" },
        { id: "s113-kitchen", name: "Кухня", x: 61, y: 1, width: 38, height: 38, type: "kitchen" },
        { id: "s113-bathroom1", name: "Санузел", x: 61, y: 41, width: 38, height: 28, type: "bathroom" },
        { id: "s113-hallway", name: "Прихожая", x: 61, y: 71, width: 38, height: 28, type: "hallway" },
        { id: "s113-terrace", name: "Терраса", x: 1, y: 51, width: 58, height: 48, type: "terrace" },
      ],
    },
    {
      floor: 1.5,
      label: "Мансарда",
      rooms: [
        { id: "s113-bedroom1", name: "Спальня 1", x: 1, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "s113-bedroom2", name: "Спальня 2", x: 51, y: 1, width: 48, height: 48, type: "bedroom" },
        { id: "s113-bedroom3", name: "Спальня 3", x: 1, y: 51, width: 48, height: 48, type: "bedroom" },
        { id: "s113-hallway2", name: "Коридор", x: 51, y: 51, width: 48, height: 48, type: "hallway" },
      ],
    },
  ],
};

export function getFloorPlansBySlug(slug: string): FloorPlan[] | undefined {
  return floorPlans[slug];
}
