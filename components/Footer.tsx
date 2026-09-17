import Link from 'next/link';
import styles from './Footer.module.css';
import { SITE_NAME, SITE_EMAIL } from '@/data/site';

const columns = [
  {
    title: 'Menu and deals',
    links: [
      { href: '/menu', label: 'Full menu with prices' },
      { href: '/specials-and-deals', label: 'Specials and deals' },
      { href: '/happy-hour', label: 'Happy hour' },
      { href: '/menu/new-items', label: 'New menu items' },
      { href: '/blog', label: 'Guides and tips' },
    ],
  },
  {
    title: 'Plan your visit',
    links: [
      { href: '/nutrition', label: 'Nutrition' },
      { href: '/allergen-menu', label: 'Allergen menu' },
      { href: '/locations', label: 'Locations' },
      { href: '/operating-hours', label: 'Opening hours' },
      { href: '/takeout', label: 'Takeout' },
      { href: '/delivery', label: 'Delivery' },
    ],
  },
  {
    title: 'About this site',
    links: [
      { href: '/about-us', label: 'About us' },
      { href: '/contact-us', label: 'Contact us' },
      { href: '/catering', label: 'Catering' },
      { href: '/gift-card-deals', label: 'Gift cards' },
      { href: '/careers', label: 'Careers' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
  },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookies', label: 'Cookie Policy' },
  { href: '/terms-and-conditions', label: 'Terms and Conditions' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Link href="/" className={styles.logo} aria-label={`${SITE_NAME} home`}>
            <span className={styles.mark} aria-hidden="true">◈</span>
            <span className={styles.name}>{SITE_NAME}</span>
          </Link>
          <p className={styles.about}>
            A friendly, independent guide to the Applebee&apos;s menu. Prices, calories, deals and
            allergen info in one place, so you can decide what to order before you go.
          </p>
          <p className={styles.contact}>
            Spotted a price that looks out of date? Email{' '}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          </p>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className={styles.colTitle}>{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.notice}>
        <p>
          <strong>An independent website</strong>
          {SITE_NAME} isn&apos;t affiliated with, endorsed by or operated by Applebee&apos;s
          Neighborhood Grill + Bar or Dine Brands Global. Applebee&apos;s is a trademark of its
          owner, named here only to identify the restaurant.
        </p>
        <p>
          <strong>Prices, calories and photos</strong>
          Each restaurant sets its own prices, so treat the figures here as a guide and check with
          your local Applebee&apos;s before ordering. Food photos are for illustration.
        </p>
        <p>
          <strong>Advertising</strong>
          This site is supported by ads served by Google AdSense. Ads don&apos;t affect what we
          write. Read how ads use cookies in our <Link href="/privacy-policy">Privacy Policy</Link>{' '}
          and <Link href="/cookies">Cookie Policy</Link>.
        </p>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
        <ul className={styles.legal} aria-label="Legal">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
