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
      
      <div className={styles.pdfButtons}>
        <Link href="/pdf-1">Applebees Menu PDF 1</Link>
        <Link href="/pdf-2">Applebees Menu PDF 2</Link>
      </div>
    </section>
  );
}
