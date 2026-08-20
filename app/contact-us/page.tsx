import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { ContactContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'Contact Us | Applebee\'s Menu Info',
  description: 'Get in touch with us for inquiries, corrections, or DMCA takedown requests.',
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Contact Us', href: '/contact' }]} />
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Have a question or need to report an inaccuracy? Reach out to our team.</p>
      </section>
      <ContactContent />
      <Footer />
    </main>
  );
}
