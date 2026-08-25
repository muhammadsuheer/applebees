import Link from 'next/link';
import styles from './Footer.module.css';

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
            <li><Link href="/careers">Applebee's Careers</Link></li>
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
          <Link href="/" aria-label="Applebee's Home">
            <span aria-hidden="true">🍎</span>
            <div>
              <strong>Applebee's</strong>
              <em>MENU</em>
            </div>
          </Link>
        </div>
        
      </nav>

      <div className={styles.bottomRow}>
        <p>
          applebees-menus.us © All Rights Are Reserved "2026"
        </p>
        <ul aria-label="Social Media Links">
          <li><a href="https://twitter.com" aria-label="Twitter">X</a></li>
          <li><a href="https://instagram.com" aria-label="Instagram">In</a></li>
          <li><a href="mailto:contact@applebees-menus.us" aria-label="Email">✉</a></li>
          <li><a href="https://pinterest.com" aria-label="Pinterest">P</a></li>
          <li><a href="https://tiktok.com" aria-label="TikTok">Tk</a></li>
        </ul>
      </div>
    </footer>
  );
}
