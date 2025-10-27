import type { Metadata } from "next";
import { Montserrat, Hind } from "next/font/google";
import "./globals.css";

// Font for Headers - I use Montserrat for all headings as it's modern and professional
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap", // This prevents invisible text during font load
});

// Font for Body Text - Hind is clean and readable for body content
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap", // Same here - prevents layout shift
});

export const metadata: Metadata = {
  title: "Lorenzo Dastoli - Frontend Developer",
  description: "Portfolio of Lorenzo Dastoli, Frontend Developer specialized in React, Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${hind.variable}`}>
      <body className="font-body"
       cz-shortcut-listen="true"
       >{children}</body>
    </html>
  );
}