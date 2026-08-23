import Link from 'next/link';
import { menuData } from '@/data/menu';
import styles from './MenuGrid.module.css';

export default function MenuGrid() {
  return (
    <section className={styles.section} aria-label="Menu Categories" id="categories">
      <h2>Browse the Applebee&apos;s Menu</h2>
      
      <nav className={styles.categoryGrid}>
        {menuData.map((category, index) => (
          <Link href={`/menu/${category.slug}`} key={index} className={styles.categoryCard}>
            <article>
              <div className={styles.imageContainer}>
                {category.image ? (
                  <img src={category.image} alt={`Applebee's ${category.title}`} loading="lazy" />
                ) : (
                  <span>Image</span>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3>{category.title}</h3>
                {category.descriptor && (
                  <p className={styles.descriptor}>{category.descriptor}</p>
                )}
              </div>
            </article>
          </Link>
        ))}
      </nav>
    </section>
  );
}
