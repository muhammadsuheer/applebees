import Link from 'next/link';
import Image from 'next/image';
import { menuData } from '@/data/menu';
import styles from './FullMenu.module.css';

export default function FullMenu() {
  return (
    <section className={styles.section}>

      {menuData.map((category) => (
        <div key={category.title} className={styles.categoryBlock} id={category.slug}>
          <h2><Link href={`/menu/${category.slug}`}>{category.title}</Link></h2>

          {category.items.length > 0 ? (
            <>
              <div className={styles.itemsGrid}>
                {category.items.map((item) => (
                  <article key={item.id}>
                    <div className={styles.imageContainer}>
                      {item.image ? (
                        <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                      ) : (
                        <span>Item Image</span>
                      )}
                    </div>

                    <div className={styles.itemContent}>
                      <h3>{item.name}</h3>
                      {item.description && (
                        <p>{item.description}</p>
                      )}
                      <div className={styles.itemFooter}>
                        <span>{item.calories}</span>
                        <strong>{item.price}</strong>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.tableCard}>
                <div className={styles.tableBanner}>
                  <span className={styles.bannerTitle}>
                    <strong>{category.title} Menu</strong>  Prices verified August 2026
                  </span>
                  <Link href={`/menu/${category.slug}`} className={styles.bannerLink}>
                    View {category.title} Page &rarr;
                  </Link>
                </div>
                <div className={styles.tableResponsive}>
                  <table className={styles.seoTable}>
                    <caption className={styles.srOnly}>
                      Pricing and nutritional information for {category.title}
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col" className={styles.colName}>Item Name</th>
                        <th scope="col" className={styles.colCalories}>Calories</th>
                        <th scope="col" className={styles.colPrice}>Price</th>
                        <th scope="col" className={styles.colDesc}>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item) => (
                        <tr key={`table-${item.id}`}>
                          <th scope="row" className={styles.nameCell}>{item.name}</th>
                          <td className={styles.calorieCell} data-label="Calories">
                            <span className={styles.mobileLabel}>Calories:</span>
                            <span className={styles.cellValue}>{item.calories}</span>
                          </td>
                          <td className={styles.priceCell} data-label="Price">
                            <span className={styles.mobileLabel}>Price:</span>
                            <span className={styles.cellValue}>{item.price}</span>
                          </td>
                          <td className={styles.descCell} data-label="Description">
                            <span className={styles.descValue}>{item.tableDescription}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <p style={{ fontFamily: 'var(--font-roboto)', color: '#666', marginTop: '10px' }}>
              New items for this category are being updated. Check back soon!
            </p>
          )}

        </div>
      ))}
    </section>
  );
}
