import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  CareersOverview,
  FranchiseReality,
  JobRoles,
  HiringProcess,
  PayAndTips,
  AgeRequirements,
  CareersFAQ
} from '@/components/CareersSections';

const TITLE = "Applebee's Careers 2026: Jobs, Hiring Age, Pay & How to Apply";
const DESCRIPTION = "Applebee's hires hosts and cooks from 16. Nearly every restaurant is franchised, so your employer sets pay and benefits. Jobs, tipped wage rules and how to apply in 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://applebees-menus.us/careers',
  },
  openGraph: {
    siteName: "Menu Almanac",
    images: [
      {
        url: '/og/og-careers.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-careers.webp'],
  }
};

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": TITLE,
    "description": DESCRIPTION,
    "url": "https://applebees-menus.us/careers"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Careers', href: '/careers' }]} />

      <section className={styles.hero}>
        <h1>Applebee&apos;s Careers: Jobs, Hiring Age and Pay</h1>
        <p>
          Applebee&apos;s hires hosts, dishwashers and prep cooks from 16, servers usually from 18 and bartenders from 21. Before you apply, know that nearly every Applebee&apos;s is owned by a franchisee. The company that owns your restaurant, not Applebee&apos;s, sets your pay and benefits. This is an independent guide, not an Applebee&apos;s job site.
        </p>
      </section>

      <CareersOverview />
      <FranchiseReality />
      <JobRoles />
      <HiringProcess />
      <PayAndTips />
      <AgeRequirements />
      <CareersFAQ />

      <Footer />
    </main>
  );
}
