import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { SmoothCursor } from "@/components/shared/smooth-cursor";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Pinewood Homes — Загородные дома под ключ",
    template: "%s | Pinewood Homes",
  },
  description:
    "Проектирование и строительство энергоэффективных загородных домов из клееного бруса. Заводское производство, гарантия 5 лет, 600+ построенных домов.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pinewoodhomes.ru"
  ),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Pinewood Homes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${cormorant.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <div>
          <SmoothCursor />
          <NuqsAdapter>
            <LenisProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </LenisProvider>
          </NuqsAdapter>
        </div>
      </body>
    </html>
  );
}
