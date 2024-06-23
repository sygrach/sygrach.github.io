import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';

import YaMetricaScript from "@/components/yaMetricaScript";
import YaMetricaPoint from "@/components/yaMetricaPoint";

import "./globals.css";

const IS_PROD = process.env.NODE_ENV === "production";

const font = Montserrat({
  subsets: ['cyrillic', 'latin'],
  style: 'normal',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: "Сыграч — извлечение аудиодорожек из песен, создание минуса",
  description: "Инструмент извлечения звуковых дорожек с помощью искусственного интеллекта. Качественно выделить вокал, аккомпанемент, ударные и басс из музыки. Создание минуса песни.",
  themeColor: '#4F46E5',
  colorScheme: 'light',
  creator: 'Sygrach Team',
  alternates: {
    canonical: 'https://sygrach.ru'
  },
  openGraph: {
    type: "website",
    url: "https://sygrach.ru",
    title: "Сыграч — извлечение аудиодорожек из песен, создание минуса",
    description: "Инструмент извлечения звуковых дорожек с помощью искусственного интеллекта. Качественно выделить вокал, аккомпанемент, ударные и басс из музыки. Создание минусовки песни.",
    siteName: "Сыграч",
    images: [
      {
        url:  "/sygrach_seo_image.png",
        width: 1200,
        height: 630
      }
    ]
  },
  verification: {
    yandex: "d8e89cdb2288a06c"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={ font.className }>
      <head>
        { IS_PROD ? <YaMetricaScript /> : null }
      </head>
      <body>
        { children }
        { IS_PROD ? <YaMetricaPoint /> : null }
      </body>
    </html>
  );
}
