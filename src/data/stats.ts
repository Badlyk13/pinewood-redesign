export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: 15,
    suffix: "+",
    label: "лет опыта",
    description: "На рынке с 2011 года",
  },
  {
    value: 600,
    suffix: "+",
    label: "домов построено",
    description: "По всей центральной России",
  },
  {
    value: 47,
    suffix: "",
    label: "регионов",
    description: "От Калининграда до Сибири",
  },
  {
    value: 4.8,
    suffix: "",
    label: "рейтинг",
    description: "Средняя оценка клиентов",
  },
];
