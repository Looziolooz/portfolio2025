import type { Metadata } from "next";
import { Montserrat, Hind } from "next/font/google";
import "./globals.css";

// Font for Headers
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// Font for Body Text
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorenzo Dastoli - Frontend Developer",
  description: "Portfolio di Lorenzo Dastoli, Frontend Developer specializzato in React, Next.js e TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${montserrat.variable} ${hind.variable}`}>
      <body className="font-body"
      cz-shortcut-listen="true"
      >{children}</body>
    </html>
  );
}