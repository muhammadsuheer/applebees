import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// Heading typeface. The CSS modules read it as --font-oswald (the original
// heading font's variable name), so swapping the face here restyles every heading.
const oswald = Plus_Jakarta_Sans({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: 'swap',
});

import { SuppressHydrationOverlay } from "@/components/SuppressHydrationOverlay";
import { SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL('https://applebees-menus.us'),
  title: "Applebee's Menu Prices & Calories 2026 | Menu Almanac",
  description: "Applebee's menu prices and calories, the deals worth using, happy hour times and the dishes worth ordering, all in one friendly, independent guide.",
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
  manifest: '/manifest.json',
  openGraph: {
    siteName: SITE_NAME,
    images: [
      {
        url: '/og/og-home.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-home.webp'],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-3598591724087304" />
        {/* Plain script tag so it is in the server-rendered HTML that AdSense's crawler reads. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3598591724087304"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8JCLDJLP8J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8JCLDJLP8J');
          `}
        </Script>
      </head>
      <body className={`${oswald.variable} ${inter.variable} min-h-full flex flex-col font-sans`} suppressHydrationWarning>
        <SuppressHydrationOverlay />
        {children}
      </body>
    </html>
  );
}
