import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { DisclaimerContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Disclaimer | Applebees Menu Guide',
  description: 'Legal disclaimer. We\'re an independent informational resource and aren\'t officially affiliated with Applebee\'s or Dine Brands Global.',
  alternates: {
    canonical: 'https://applebees-menus.us/disclaimer',
  },
  openGraph: {
    siteName: "Applebees Menu Guide",
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
    "name": "Disclaimer | Applebees Menu Guide",
    "description": "Legal disclaimer. We're an independent informational resource and aren't officially affiliated with Applebee's or Dine Brands Global.",
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
        <p>We&apos;re an independent resource. Prices and availability are estimates and may vary by location.</p>
      </section>
      <DisclaimerContent />
      <Footer />
    </main>
  );
}
