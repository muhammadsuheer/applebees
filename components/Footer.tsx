import Link from 'next/link';
import styles from './Footer.module.css';
import { SITE_NAME, SITE_EMAIL, DISCLAIMER_SHORT } from '@/data/site';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav aria-label="Footer Navigation">
        
        <div>
          <h2>HUNGRY?</h2>
          <ul>
            <li><Link href="/takeout">Takeout</Link></li>
            <li><Link href="/delivery">Delivery</Link></li>
            <li><Link href="/locations">Restaurant List</Link></li>
            <li><Link href="/nutrition">Nutrition & Allergens</Link></li>
            <li><Link href="/careers">Working at Applebee&apos;s</Link></li>
          </ul>
        </div>

        <div>
          <h2>POLICIES</h2>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h2>ABOUT US</h2>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/gift-card-deals">Gift Cards</Link></li>
            <li><Link href="/sitemap">HTML Sitemap</Link></li>
          </ul>
        </div>

        <div className={styles.logoColumn}>
          <Link href="/" aria-label={`${SITE_NAME} home`}>
            <span aria-hidden="true">◈</span>
            <div>
              <strong>{SITE_NAME}</strong>
              <em>MENU RESEARCH</em>
            </div>
          </Link>
        </div>
        
      </nav>

      <p className={styles.disclaimer}>{DISCLAIMER_SHORT}</p>

      <div className={styles.bottomRow}>
        <p>
          &copy; 2026 {SITE_NAME}. All rights reserved.
        </p>
        <ul aria-label="Contact">
          <li><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
        </ul>
      </div>
    </footer>
  );
}
