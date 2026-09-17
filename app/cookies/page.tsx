import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { CookiePolicyContent } from '@/components/LegalSections';

const TITLE = 'Cookie Policy | Applebees Menu Guide';
const DESCRIPTION = 'The cookies Google Analytics and Google AdSense set on Applebees Menu Guide, what each one does, how long it lasts, and how to turn them off.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://applebees-menus.us/cookies',
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

export default function CookiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": TITLE,
    "description": DESCRIPTION,
    "url": "https://applebees-menus.us/cookies"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Cookies', href: '/cookies' }]} />
      <section className={styles.hero}>
        <h1>Cookie Policy</h1>
        <p>Which cookies this site uses, what they do, and how to control them.</p>
      </section>
      <CookiePolicyContent />
      <Footer />
    </main>
  );
}
