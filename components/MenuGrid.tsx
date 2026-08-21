import Link from 'next/link';
import { menuData } from '@/data/menu';
import styles from './MenuGrid.module.css';

export default function MenuGrid() {
  return (
    <section className={styles.section} aria-label="Menu Categories">
      <h2>APPLEBEES MENU</h2>
      
      <nav>
        {menuData.map((category, index) => (
          <Link href={`/menu/${category.slug}`} key={index}>
            <article>
              <div className={styles.imageContainer}>
                {category.image ? (
                  <img src={category.image} alt={category.title} loading="lazy" />
                ) : (
                  <span>Image</span>
                )}
              </div>
              <h3>{category.title}</h3>
            </article>
          </Link>
        ))}
        {/* Include Catering which wasn't in main image list */}
        <Link href={`/menu/catering`} key="catering">
          <article>
            <div className={styles.imageContainer}>
              <span>Image</span>
            </div>
            <h3>Catering</h3>
          </article>
        </Link>
      </nav>
      
      <div className={styles.pdfDownloadSection}>
        <div className={styles.pdfHeader}>
          <h3>Download Official Applebee's Menus (PDF)</h3>
          <p>Get instant access to complete pricing, full nutritional facts, catering packages, and drink menus in printable PDF format.</p>
        </div>
        
        <div className={styles.pdfGrid}>
          <a href="/pdfs/applebees-full-menu-with-prices.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>📄</div>
            <div className={styles.pdfInfo}>
              <strong>Full Menu with Prices (PDF)</strong>
              <span>Complete 2026 dine-in & takeout menu • Printable</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-nutrition-and-allergen-guide.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>🥗</div>
            <div className={styles.pdfInfo}>
              <strong>Nutrition & Allergen Guide (PDF)</strong>
              <span>Calories, macros, fat, sodium & allergens • Verified</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-catering-party-platters-menu.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>🍱</div>
            <div className={styles.pdfInfo}>
              <strong>Catering & Party Platters (PDF)</strong>
              <span>Platter math, headcount blueprint & event pricing</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-drinks-cocktails-happy-hour-menu.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>🍹</div>
            <div className={styles.pdfInfo}>
              <strong>Drinks & Happy Hour Menu (PDF)</strong>
              <span>Mucho cocktails, Dollarita specials & fountain sips</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>
        </div>
      </div>
    </section>
  );
}
