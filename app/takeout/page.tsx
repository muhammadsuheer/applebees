import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  TakeoutOverview,
  JunkFeeLawsuits,
  TippingDilemma,
  AppVsPhone,
  ArtOfModification,
  ReheatingScience,
  LoyaltyRewards,
  PackagingEngineering,
  DualBrandedTakeout,
  TakeoutFAQ
} from '@/components/TakeoutSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Takeout 2026 | Carside To Go Tips & Hidden Fees',
  description: 'Master Applebee\'s takeout in 2026. Discover the truth about the hidden 2024 carryout fee lawsuits, Carside To Go tipping etiquette, and how to perfectly reheat leftovers.',
  alternates: {
    canonical: 'https://applebees-menus.us/takeout/',
  }
};

export default function TakeoutPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Takeout', href: '/takeout' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Carside To Go: The 2026 Takeout Masterclass</h1>
        <p>
          Applebee's invented modern curbside pickup in 2004, but ordering takeout in 2026 is a completely different game. In this comprehensive guide, we expose the recent "Junk Fee" lawsuits, break down exactly how much you should tip the To-Go specialist, and reveal the culinary science behind perfectly reheating your leftovers in an air fryer.
        </p>
      </section>

      <TakeoutOverview />
      <JunkFeeLawsuits />
      <TippingDilemma />
      <AppVsPhone />
      <ArtOfModification />
      <ReheatingScience />
      <LoyaltyRewards />
      <PackagingEngineering />
      <DualBrandedTakeout />
      <TakeoutFAQ />

      <Footer />
    </main>
  );
}
