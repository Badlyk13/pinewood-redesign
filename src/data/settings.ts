export const settings = {
  company: {
    name: "Pinewood Homes",
    fullName: "ООО «Пайнвуд Хомс»",
    inn: "7710123456",
    ogrn: "1177746012345",
    legalAddress: "123456, г. Москва, ул. Примерная, д. 1, офис 100",
    description:
      "Проектирование и строительство энергоэффективных загородных домов из клееного бруса. Заводское производство, гарантия 5 лет.",
  },
  contacts: {
    phone: "+7 (495) 123-45-67",
    email: "info@pinewoodhomes.ru",
    address: "Московская область, г. Одинцово, ул. Заводская, д. 15",
    workHours: "Пн–Пт: 9:00–18:00, Сб: 10:00–16:00",
    social: {
      vk: "https://vk.com/pinewoodhomes",
      telegram: "https://t.me/pinewoodhomes",
      youtube: "https://youtube.com/@pinewoodhomes",
    },
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pinewoodhomes.ru",
    name: "Pinewood Homes",
  },
  partners: [
    { name: "Сбербанк", logo: "/partners/sberbank.svg" },
    { name: "ВТБ", logo: "/partners/vtb.svg" },
    { name: "Россельхозбанк", logo: "/partners/rshb.svg" },
    { name: "Газпромбанк", logo: "/providers/gazprombank.svg" },
  ],
} as const;

export type Settings = typeof settings;
