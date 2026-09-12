import Link from 'next/link';
import styles from './Hero.module.css';
import { MENU_FACTS, PRICES_LAST_VERIFIED, BYLINE } from '@/data/site';

const checkedLabel = new Date(PRICES_LAST_VERIFIED).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <h1 id="hero-heading">Applebee&apos;s Menu Prices and Calories</h1>

      <p className={styles.lastUpdated}>
        Updated {checkedLabel} &middot; by {BYLINE}
      </p>

      <p>
        There&apos;s no national Applebee&apos;s price list. Franchisees set their own
        prices, so a 12 oz. Ribeye in Carmel, Indiana doesn&apos;t have to cost what it costs
        in Evansville. What you get here is a reference price for all {MENU_FACTS.items}{' '}
        items across {MENU_FACTS.categories} categories, sitting next to the calorie count
        Applebee&apos;s publishes.
      </p>

      <p>
        Chicken entrées start at $13.99. The Ribeye tops the menu at $23.99. A fountain drink
        is $2.29. And the 2 for $25 costs exactly what its name says, which is why it&apos;s
        the one number on this page I&apos;d trust at any location.
      </p>

      <p className={styles.heroLinks}>
        <Link href="/menu">Full menu with prices</Link>
        <Link href="/specials-and-deals">Current deals</Link>
        <Link href="/allergen-menu">Allergen menu</Link>
        <Link href="/happy-hour">Happy hour times</Link>
      </p>
    </section>
  );
}
