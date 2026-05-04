export interface Project {
  slug: string;
  name: string;
  area: number;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  ceilingHeight: number;
  facade: string;
  priceFrom: number;
  pricePerSqm: number;
  description: string;
  features: string[];
  images: string[];
  popular: boolean;
}

export const projects: Project[] = [
  {
    slug: "alena",
    name: "Алёна",
    area: 54,
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    ceilingHeight: 2.7,
    facade: "Дерево",
    priceFrom: 851951,
    pricePerSqm: 15777,
    description:
      "Компактный и уютный одноэтажный дом для небольшой семьи. Идеален как загородный дом для выходных или постоянного проживания.",
    features: [
      "Компактная планировка",
      "Тёплый контур",
      "Энергоэффективность класса А",
      "Заводская сборка за 45 дней",
    ],
    images: ["/projects/alena/1.jpg", "/projects/alena/2.jpg"],
    popular: true,
  },
  {
    slug: "varvara",
    name: "Варвара",
    area: 83,
    floors: 1,
    bedrooms: 3,
    bathrooms: 1,
    ceilingHeight: 2.7,
    facade: "Дерево",
    priceFrom: 1727363,
    pricePerSqm: 20812,
    description:
      "Просторный одноэтажный дом с тремя спальнями. Отличное решение для семьи с детьми, ценящей простор и функциональность.",
    features: [
      "3 спальни",
      "Открытая планировка",
      "Терраса 12 м²",
      "Заводская сборка за 60 дней",
    ],
    images: ["/projects/varvara/1.jpg", "/projects/varvara/2.jpg"],
    popular: false,
  },
  {
    slug: "davinchi",
    name: "Давинчи",
    area: 129,
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    ceilingHeight: 2.7,
    facade: "Дерево + камень",
    priceFrom: 2255790,
    pricePerSqm: 17487,
    description:
      "Элегантный двухэтажный дом для большой семьи. продуманная планировка с разделением на дневную и ночную зоны.",
    features: [
      "4 спальни",
      "2 санузла",
      "Второй свет в гостиной",
      "Заводская сборка за 75 дней",
    ],
    images: ["/projects/davinchi/1.jpg", "/projects/davinchi/2.jpg"],
    popular: true,
  },
  {
    slug: "snezhnaya-anna",
    name: "Снежная Анна",
    area: 133,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    ceilingHeight: 2.8,
    facade: "Дерево",
    priceFrom: 2484388,
    pricePerSqm: 18672,
    description:
      "Впечатляющий одноэтажный дом с высокими потолками и просторной гостиной. Сочетание скандинавского стиля и современных технологий.",
    features: [
      "Потолки 2.8 м",
      "Гостиная-студия 40 м²",
      "Хозблок",
      "Заводская сборка за 70 дней",
    ],
    images: [
      "/projects/snezhnaya-anna/1.jpg",
      "/projects/snezhnaya-anna/2.jpg",
    ],
    popular: true,
  },
  {
    slug: "renuar",
    name: "Ренуар",
    area: 164.2,
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    ceilingHeight: 2.7,
    facade: "Дерево + штукатурка",
    priceFrom: 3777958,
    pricePerSqm: 23009,
    description:
      "Роскошный двухэтажный дом французского стиля с мансардой. Продуманная планировка для комфортного проживания большой семьи.",
    features: [
      "Мансардный этаж",
      "Гараж на 2 авто",
      "Каминная зона",
      "Заводская сборка за 90 дней",
    ],
    images: ["/projects/renuar/1.jpg", "/projects/renuar/2.jpg"],
    popular: false,
  },
  {
    slug: "olga",
    name: "Ольга",
    area: 326,
    floors: 2,
    bedrooms: 6,
    bathrooms: 3,
    ceilingHeight: 2.8,
    facade: "Дерево + камень",
    priceFrom: 5986397,
    pricePerSqm: 18363,
    description:
      "Флагманский проект — впечатляющий двухэтажный дом максимальной площади. Способен удовлетворить самые высокие запросы к загородной жизни.",
    features: [
      "6 спален",
      "3 санузла",
      "Бильярдная / кинозал",
      "Заводская сборка за 120 дней",
    ],
    images: ["/projects/olga/1.jpg", "/projects/olga/2.jpg"],
    popular: false,
  },
  {
    slug: "s-264",
    name: "S-264",
    area: 264,
    floors: 2,
    bedrooms: 5,
    bathrooms: 3,
    ceilingHeight: 2.7,
    facade: "Дерево",
    priceFrom: 4200000,
    pricePerSqm: 15909,
    description:
      "Семейный дом серии S с продуманной планировкой и отличным соотношением цены и площади.",
    features: [
      "5 спален",
      "Прачечная",
      "Котельная",
      "Заводская сборка за 100 дней",
    ],
    images: ["/projects/s-264/1.jpg", "/projects/s-264/2.jpg"],
    popular: false,
  },
  {
    slug: "s-113",
    name: "S-113",
    area: 113,
    floors: 1.5,
    bedrooms: 3,
    bathrooms: 1,
    ceilingHeight: 2.7,
    facade: "Дерево",
    priceFrom: 2100000,
    pricePerSqm: 18584,
    description:
      "Компактный дом с мансардой — отличный выбор для тех, кто хочет максимум площади при ограниченном бюджете.",
    features: [
      "Мансардный этаж",
      "Терраса",
      "Высокие потолки в мансарде",
      "Заводская сборка за 65 дней",
    ],
    images: ["/projects/s-113/1.jpg", "/projects/s-113/2.jpg"],
    popular: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPopularProjects(): Project[] {
  return projects.filter((p) => p.popular);
}
