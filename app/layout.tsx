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
  title: "Сыграч — выделение инструментов и создание минусовок",
  description: "Выделение инструментов из песни и создание минусовок с помощью искусственного интеллекта. Качественно выделить вокал, аккомпанемент, гитару, ударные и басс из музыки. Создание минуса песни.",
  themeColor: '#4F46E5',
  colorScheme: 'light',
  creator: 'Sygrach Team',
  alternates: {
    canonical: 'https://sygrach.ru'
  },
  openGraph: {
    type: "website",
    url: "https://sygrach.ru",
    title: "Сыграч — выделение инструментов и создание минусовок",
    description: "Выделение инструментов из песни и создание минусовок с помощью искусственного интеллекта. Качественно выделить вокал, аккомпанемент, гитару, ударные и басс из музыки. Создание минуса песни.",
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
    yandex: "cf7c7e4d25d2b45d"
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
