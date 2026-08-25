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
  title: "Applebees Menu with Prices, Calories & 2 for $25 (Updated August 2026)",
  description: "Browse the full Applebees menu with prices and calories for 2026  appetizers, burgers, steaks, pasta, desserts, drinks, kids menu and the 2 for $25 deal.",
  alternates: {
    canonical: 'https://applebees-menus.us/',
    types: {
      'application/rss+xml': 'https://applebees-menus.us/feed.xml',
    },
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  icons: {
    icon: [
      { url: '/icon1.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json'
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
