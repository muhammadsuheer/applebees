import Link from 'next/link';
import styles from './Hero.module.css';
import { PRICES_LAST_VERIFIED } from '@/data/site';

const checkedLabel = new Date(PRICES_LAST_VERIFIED).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const quickLinks = [
  { href: '/happy-hour', label: 'Happy hour times' },
  { href: '/menu/2-for-25', label: '2 for $25 menu' },
  { href: '/allergen-menu', label: 'Allergen menu' },
  { href: '/nutrition', label: 'Nutrition & calories' },
  { href: '/locations', label: 'Find a restaurant' },
];

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Independent menu guide &middot; Updated {checkedLabel}</p>

        <h1 id="hero-heading">Applebee&apos;s Menu Prices and Calories</h1>

        <p className={styles.lead}>
          Heading to Applebee&apos;s? Here&apos;s what the menu costs, what you&apos;re looking at calorie-wise,
          and which dishes are actually worth ordering. Prices shift a little from one restaurant to the
          next, so think of ours as a close guide rather than a receipt.
        </p>

        <div className={styles.ctas}>
          <Link href="/menu" className={styles.primary}>
            See the full menu
          </Link>
          <Link href="/specials-and-deals" className={styles.secondary}>
            Today&apos;s deals
          </Link>
        </div>

        <nav className={styles.quickLinks} aria-label="Popular guides">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
