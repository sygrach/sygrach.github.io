import type { Metadata } from "next";

import YaMetricaScript from "@/components/yaMetricaScript";
import YaMetricaPoint from "@/components/yaMetricaPoint";

import "./globals.css";

const IS_PROD = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  title: "Сыграч",
  description: "Сыграч - Извлечение аудиодорожек из песен",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
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
