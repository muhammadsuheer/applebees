import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  SpecialsIntroSection,
  TwoForTwentyFiveDeepDive,
  CompetitorShowdown,
  HappyHourGuide,
  DollaritaHistory,
  AllYouCanEatSection,
  MoneySavingHacks,
  DietAndDeliverySection,
  SpecialsFAQSection
} from '@/components/SpecialsSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Specials & Deals (2026) | 2 for $25 & Happy Hour Hacks',
  description: 'The absolute ultimate 3,000-word guide to maximizing your value at Applebee\'s. Deep dive into the 2 for $25 menu, AYCE deals, and competitor comparisons.',
  alternates: {
    canonical: 'https://applebees-menus.us/specials/',
  }
};

export default function SpecialsPage() {
  const specialsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://applebees-menus.us/specials-and-deals/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://applebees-menus.us/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Specials & Deals",
            "item": "https://applebees-menus.us/specials-and-deals"
          }
        ]
      },
      {
        "@type": "SaleEvent",
        "@id": "https://applebees-menus.us/specials-and-deals/#event-2for25",
        "name": "Applebee's 2 for $25 Meal Deal",
        "description": "Get one appetizer and two full-size entrees for just $25.",
        "startDate": "2026-01-01",
        "endDate": "2026-12-31",
        "location": {
          "@type": "Place",
          "name": "All participating Applebee's Locations"
        },
        "offers": {
          "@type": "Offer",
          "name": "2 for $25 Offer",
          "price": "25.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SaleEvent",
        "@id": "https://applebees-menus.us/specials-and-deals/#event-happyhour",
        "name": "Applebee's Late-Night Happy Hour",
        "description": "Half-price appetizers and drink specials every night.",
        "startDate": "2026-01-01",
        "endDate": "2026-12-31",
        "location": {
          "@type": "Place",
          "name": "All participating Applebee's Locations"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/specials-and-deals/#faq",
        "name": "Applebee's Specials FAQ",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in the 2 for $25 deal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 2 for $25 deal includes one full-size appetizer to share and two full-size entrees from a select menu."
            }
          },
          {
            "@type": "Question",
            "name": "When is Applebee's Happy Hour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most locations offer a Late-Night Happy Hour from 9 PM or 10 PM to close, featuring half-price appetizers and drink specials."
            }
          }
        ]
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialsSchema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Specials & Deals', href: '/specials' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Deals & Specials: The Ultimate 2026 Guide</h1>
        <p>
          Forget paying full price. From the legendary Late-Night Happy Hour to the unbeatable 2 for $25 meal, we have compiled a massively comprehensive, rigorously researched guide to getting the absolute most value out of your next visit to the neighborhood grill.
        </p>
      </section>

      <SpecialsIntroSection />
      <TwoForTwentyFiveDeepDive />
      <CompetitorShowdown />
      <HappyHourGuide />
      <DollaritaHistory />
      <AllYouCanEatSection />
      <MoneySavingHacks />
      <DietAndDeliverySection />
      <SpecialsFAQSection />

      <Footer />
    </main>
  );
}
