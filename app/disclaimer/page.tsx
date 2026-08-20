import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { DisclaimerContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Disclaimer | Applebee\'s Menu Info',
  description: 'Legal disclaimer. We are an independent informational resource and are not officially affiliated with Applebee\'s or Dine Brands Global.',
};

export default function DisclaimerPage() {
  return (
    <main>
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
