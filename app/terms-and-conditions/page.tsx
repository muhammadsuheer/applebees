import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { TermsContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Applebee\'s Menu Info',
  description: 'By accessing our website, you are agreeing to be bound by our Website Terms and Conditions of Use.',
  alternates: {
    canonical: 'https://applebees-menus.us/terms-and-conditions',
  },
};

export default function TermsPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Terms & Conditions', href: '/terms' }]} />
      <section className={styles.hero}>
        <h1>Terms & Conditions</h1>
        <p>Please read these terms and conditions carefully before using our service.</p>
      </section>
      <TermsContent />
      <Footer />
    </main>
  );
}
