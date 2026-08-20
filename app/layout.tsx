import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: 'swap',
});

import { SuppressHydrationOverlay } from "@/components/SuppressHydrationOverlay";

export const metadata: Metadata = {
  title: "Applebees Menu with Prices, Calories & 2 for $25 (2026)",
  description: "Browse the full Applebees menu with prices and calories for 2026  appetizers, burgers, steaks, pasta, desserts, drinks, kids menu and the 2 for $25 deal.",
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${oswald.variable} ${inter.variable} min-h-full flex flex-col font-sans`} suppressHydrationWarning>
        <SuppressHydrationOverlay />
        {children}
      </body>
    </html>
  );
}
