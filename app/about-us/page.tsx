import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { AboutContent } from '@/components/LegalSections';

const DESCRIPTION = "Applebees Menu Guide is an independent guide to Applebee's prices, calories and allergens. Who runs it, where the figures come from, and how to send a correction.";

export const metadata: Metadata = {
  title: 'About Applebees Menu Guide',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://applebees-menus.us/about-us',
  },
  openGraph: {
    siteName: "Applebees Menu Guide",
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

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Applebees Menu Guide",
    "description": DESCRIPTION,
    "url": "https://applebees-menus.us/about-us"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'About Us', href: '/about-us' }]} />
      <section className={styles.hero}>
        <h1>About Applebees Menu Guide</h1>
        <p>An independent reference for Applebee&apos;s prices, calories and allergens. We aren&apos;t Applebee&apos;s.</p>
      </section>
      <AboutContent />
      <Footer />
    </main>
  );
}
