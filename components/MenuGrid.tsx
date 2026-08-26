import Link from 'next/link';
import Image from 'next/image';
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
                  <Image src={category.image} alt={`Applebee's ${category.title}`} fill sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" style={{ objectFit: 'cover' }} />
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
