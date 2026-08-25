import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { AboutContent } from '@/components/LegalSections';

export const metadata: Metadata = {
  title: 'About Us | Applebee\'s Menu Info',
  description: 'Learn about our mission to provide the most accurate, organized, and up-to-date restaurant menu pricing and nutritional data.',
  alternates: {
    canonical: 'https://applebees-menus.us/about-us',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'About Us', href: '/about' }]} />
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Our mission is to bring transparency and organization to the chaotic world of restaurant menus.</p>
      </section>
      <AboutContent />
      <Footer />
    </main>
  );
}
