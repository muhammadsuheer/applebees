import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  DeliveryOverview,
  DirectVsThirdParty,
  HiddenMarkup,
  CarsideToGo,
  GhostKitchens,
  PartnerBreakdown,
  AlcoholDelivery,
  PackagingScience,
  CateringVsDelivery,
  DeliveryFAQ
} from '@/components/DeliverySections';

export const metadata: Metadata = {
  title: 'Applebee\'s Delivery & To Go 2026 | Avoid DoorDash Hidden Fees',
  description: 'The ultimate 2026 guide to Applebee\'s delivery. Discover the truth about the Cosmic Wings ghost kitchen, the 30% DoorDash markups, and how to get alcohol delivered.',
  alternates: {
    canonical: 'https://applebees-menus.us/delivery/',
  }
};

export default function DeliveryPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Delivery', href: '/delivery' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Delivery & To Go: The Insider 2026 Guide</h1>
        <p>
          Before you blindly open DoorDash or UberEats, read this. We expose the hidden 30% menu markups, reveal the secret "Cosmic Wings" ghost kitchen operating inside your local Applebee's, and provide the ultimate financial hacks for minimizing fees on your next delivery or Carside To Go order.
        </p>
      </section>

      <DeliveryOverview />
      <DirectVsThirdParty />
      <HiddenMarkup />
      <CarsideToGo />
      <GhostKitchens />
      <PartnerBreakdown />
      <AlcoholDelivery />
      <PackagingScience />
      <CateringVsDelivery />
      <DeliveryFAQ />

      <Footer />
    </main>
  );
}
