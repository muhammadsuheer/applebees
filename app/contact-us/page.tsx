import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Applebees Menu Guide',
  description: 'Email Applebees Menu Guide with a price or nutrition correction, a question about the site, or a copyright notice.',
  alternates: {
    canonical: 'https://applebees-menus.us/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Applebees Menu Guide',
    description: 'Email Applebees Menu Guide with a price or nutrition correction, a question about the site, or a copyright notice.',
    siteName: "Applebees Menu Guide",
    images: [
      {
        url: '/og/og-contact-us.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Applebees Menu Guide',
    description: 'Email Applebees Menu Guide with a price or nutrition correction, a question about the site, or a copyright notice.',
    images: ['/og/og-contact-us.webp'],
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | Applebees Menu Guide",
    "description": "Email Applebees Menu Guide with a price or nutrition correction, a question about the site, or a copyright notice.",
    "url": "https://applebees-menus.us/contact-us"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Contact Us', href: '/contact-us' }]} />
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Have a question, menu price correction, or business inquiry? Reach out to our editorial team.</p>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
