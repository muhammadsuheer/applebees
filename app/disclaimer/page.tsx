import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { DisclaimerContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Disclaimer | Applebee\'s Menu Info',
  description: 'Legal disclaimer. We are an independent informational resource and are not officially affiliated with Applebee\'s or Dine Brands Global.',
  alternates: {
    canonical: 'https://applebees-menus.us/disclaimer',
  },
  openGraph: {
    siteName: "Applebee's Menu Information",
    images: [
      {
        url: '/og/og-legal.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-legal.webp'],
  }
};

export default function DisclaimerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disclaimer | Applebee's Menu Info",
    "description": "Legal disclaimer. We are an independent informational resource and are not officially affiliated with Applebee's or Dine Brands Global.",
    "url": "https://applebees-menus.us/disclaimer"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Disclaimer', href: '/disclaimer' }]} />
      <section className={styles.hero}>
        <h1>Legal Disclaimer</h1>
        <p>We are an independent resource. Prices and availability are estimates and may vary by location.</p>
      </section>
      <DisclaimerContent />
      <Footer />
    </main>
  );
}
