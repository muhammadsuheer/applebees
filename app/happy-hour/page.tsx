import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';
import {
  HappyHourOverview,
  HappyHourWindows,
  HalfPriceAppetizers,
  StateLiquorLaws,
  MuchoCocktails,
  HappyHourDiet,
  DeliveryAppTrap,
  CompetitorComparison,
  HacksAndStacking,
  HappyHourFAQ
} from '@/components/HappyHourSections';

export const metadata: Metadata = {
  title: 'Applebee\'s Happy Hour 2026 | Half-Price Apps & Mucho Cocktails',
  description: 'The definitive 2026 guide to Applebee\'s Happy Hour. Discover exact times, state liquor laws, half-price appetizer exclusions, and the truth about Mucho cocktails.',
  alternates: {
    canonical: 'https://applebees-menus.us/happy-hour/',
  }
};

export default function HappyHourPage() {
  return (
    <main>
      <Header />
      <Breadcrumb items={[{ label: 'Happy Hour', href: '/happy-hour' }]} />
      
      <section className={styles.hero}>
        <h1>Applebee's Happy Hour: The Ultimate 2026 Insider Guide</h1>
        <p>
          It is the most famous promotional window in casual dining history. But mastering Applebee's Happy Hour requires more than just showing up at 9 PM. From decoding the hidden sugar in Mucho cocktails to navigating state ABC laws that ban discounted alcohol, this rigorously researched 3,000-word guide reveals exactly how to maximize your value and avoid the delivery app traps.
        </p>
      </section>

      <HappyHourOverview />
      <HappyHourWindows />
      <HalfPriceAppetizers />
      <StateLiquorLaws />
      <MuchoCocktails />
      <HappyHourDiet />
      <DeliveryAppTrap />
      <CompetitorComparison />
      <HacksAndStacking />
      <HappyHourFAQ />

      <Footer />
    </main>
  );
}
