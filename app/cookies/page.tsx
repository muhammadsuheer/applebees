import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { PrivacyPolicyContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Cookie Policy | Applebee\'s Menu Info',
  description: 'Our Cookie Policy and how we use data.',
  alternates: {
    canonical: 'https://applebees-menus.us/privacy-policy',
  },
};

export default function CookiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy | Applebee's Menu Info",
    "description": "Our Cookie Policy and how we use data.",
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
        <p>Information on how we use cookies and tracking technologies.</p>
      </section>
      <PrivacyPolicyContent />
      <Footer />
    </main>
  );
}
