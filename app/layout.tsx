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
  title: "Applebees Menu",
  description: "Applebees Menu with Prices & Calories",
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
