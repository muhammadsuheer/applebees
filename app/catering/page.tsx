import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  CateringOverview,
  EconomicModel,
  MenuBreakdown,
  TwoHourNotice,
  DeliveryPickup,
  PackagingScience,
  SternoGuide,
  CorporateTax,
  EventSpecificOrdering,
  CateringFAQ
} from '@/components/CateringSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Catering 2026 | Party Platters, Pricing & ezCater',
  description: 'The definitive 2026 guide to Applebee\'s Catering. Learn how to feed 100 people for $10 a head, how to use ezCater for delivery, and the secret to setting up Sterno chafing dishes.',
  alternates: {
    canonical: 'https://applebees-menus.us/catering/',
  }
};

export default function CateringPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Catering: The 2026 Masterclass</h1>
        <p>
          Before you order food for a 50-person office party, read this. We break down the aggressive "$10 Per Person" pricing model, expose the "Two-Hour Notice" myth, and provide professional instructions on how to use Sterno chafing dishes to keep your Party Platters hot.
        </p>
      </section>

      <CateringOverview />
      <EconomicModel />
      <MenuBreakdown />
      <TwoHourNotice />
      <DeliveryPickup />
      <PackagingScience />
      <SternoGuide />
      <CorporateTax />
      <EventSpecificOrdering />
      <CateringFAQ />

      <Footer />
    </main>
  );
}
