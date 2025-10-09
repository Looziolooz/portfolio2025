import type { Metadata } from "next";
import { Montserrat, Hind } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorenzo Dastoli | Frontend Developer Portfolio",
  description:
    "Portfolio of Lorenzo Dastoli, a Frontend Developer specializing in React, Next.js, and modern web technologies. Explore my projects and blog about web development.",
  keywords: [
    "Lorenzo Dastoli",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Lorenzo Dastoli" }],
  creator: "Lorenzo Dastoli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lorenzodastoli.com",
    siteName: "Lorenzo Dastoli Portfolio",
    title: "Lorenzo Dastoli | Frontend Developer",
    description:
      "Portfolio showcasing projects and skills in modern web development",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lorenzo Dastoli Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Dastoli | Frontend Developer",
    description: "Portfolio and blog about modern web development",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${hind.variable} font-hind antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}