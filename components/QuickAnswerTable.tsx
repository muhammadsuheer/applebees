import Link from 'next/link';
import styles from './QuickAnswerTable.module.css';
import { categoryStats, formatPriceRange, formatCalorieRange } from '@/data/menuStats';
import { PRICES_LAST_VERIFIED } from '@/data/site';
import { formatLongDate } from '@/lib/dates';

const rows = [
  { slug: 'appetizers', label: 'Appetizers' },
  { slug: 'handcrafted-burgers', label: 'Handcrafted Burgers' },
  { slug: 'steaks-and-ribs', label: 'Steaks & Ribs' },
  { slug: 'chicken', label: 'Chicken' },
  { slug: 'pasta', label: 'Pasta' },
  { slug: 'seafood', label: 'Seafood' },
  { slug: 'salads', label: 'Salads' },
  { slug: 'desserts', label: 'Desserts' },
  { slug: 'kids-menu', label: 'Kids Menu' },
  { slug: 'signature-cocktails', label: 'Signature Cocktails' },
];


export default function QuickAnswerTable() {
  const data = rows
    .map((row) => ({ ...row, stats: categoryStats(row.slug) }))
    .filter((row) => row.stats !== null);

  return (
    <section className={styles.section} id="quick-answer-table">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <h2>Applebee&apos;s Menu Prices at a Glance</h2>
          <p className={styles.subtext}>
            The cheapest and most expensive item in each category, with the calorie range next to
            it. Tap a category for every item.
          </p>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <caption className={styles.srOnly}>
                Applebee&apos;s menu price and calorie ranges by category
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.colCategory}>Menu Category</th>
                  <th scope="col" className={styles.colPrice}>Price Range</th>
                  <th scope="col" className={styles.colCalories}>Calories</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.slug}>
                    <td className={styles.categoryCell} data-label="Category">
                      <Link href={`/menu/${row.slug}`} className={styles.categoryLink}>
                        {row.label}
                      </Link>
                    </td>
                    <td className={styles.priceCell} data-label="Price">
                      <span className={styles.mobileLabel}>Price:</span>
                      <span className={styles.cellValue}>{formatPriceRange(row.stats!.price)}</span>
                    </td>
                    <td className={styles.calorieCell} data-label="Calories">
                      <span className={styles.mobileLabel}>Calories:</span>
                      <span className={styles.cellValue}>{formatCalorieRange(row.stats!.calories)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.cardFooter}>
            <span>
              Prices last checked{' '}
              <time dateTime={PRICES_LAST_VERIFIED}>{formatLongDate(PRICES_LAST_VERIFIED)}</time>. Each restaurant sets its own, so yours may be
              a little different.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
