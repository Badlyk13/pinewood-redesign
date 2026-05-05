import { settings } from "@/data/settings";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pinewoodhomes.ru";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.company.fullName,
    alternateName: settings.company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.svg`,
    description: settings.company.description,
    telephone: settings.contacts.phone,
    email: settings.contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.contacts.address,
      addressCountry: "RU",
    },
    foundingDate: "2011",
    sameAs: [
      settings.contacts.social.vk,
      settings.contacts.social.telegram,
      settings.contacts.social.youtube,
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: settings.company.fullName,
    image: `${SITE_URL}/brand/logo.svg`,
    telephone: settings.contacts.phone,
    email: settings.contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.contacts.address,
      addressCountry: "RU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "₽₽₽",
  };
}

export function productSchema(project: {
  name: string;
  description: string;
  priceFrom: number;
  area: number;
  slug: string;
  images: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Дом ${project.name}`,
    description: project.description,
    image: `${SITE_URL}${project.images[0]}`,
    offers: {
      "@type": "Offer",
      price: project.priceFrom,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: settings.company.fullName,
      },
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Площадь",
      value: `${project.area} м²`,
    },
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
