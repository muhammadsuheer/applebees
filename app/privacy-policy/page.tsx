import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { PrivacyPolicyContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Privacy Policy | Applebee\'s Menu Info',
  description: 'Our Privacy Policy details how we collect, use, and protect your data, including information on cookies, GDPR, and CCPA compliance.',
  alternates: {
    canonical: 'https://applebees-menus.us/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <section className={styles.hero}>
        <h1>Privacy Policy</h1>
        <p>Last updated: August 2026. This privacy policy applies to our website and its subdomains.</p>
      </section>
      <PrivacyPolicyContent />
      <Footer />
    </main>
  );
}
