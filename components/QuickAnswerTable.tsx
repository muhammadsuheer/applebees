import Link from 'next/link';
import styles from './QuickAnswerTable.module.css';

const summaryData = [
  { category: "Appetizers", price: "$9.99 - $12.99", calories: "590 - 1330 Cals", link: "/menu/appetizers" },
  { category: "Handcrafted Burgers", price: "$14.49 - $15.99", calories: "1050 - 1620 Cals", link: "/menu/handcrafted-burgers" },
  { category: "Steaks & Ribs", price: "$18.99 - $23.99", calories: "630 - 1400 Cals", link: "/menu/steaks-and-ribs" },
  { category: "Chicken", price: "$14.99 - $16.49", calories: "1140 - 1610 Cals", link: "/menu/chicken" },
  { category: "Pasta", price: "$17.49", calories: "1540 Cals", link: "/menu/pasta" },
  { category: "Seafood", price: "$15.99 - $18.99", calories: "850 - 1680 Cals", link: "/menu/seafood" },
  { category: "Salads", price: "$14.99", calories: "1220 Cals", link: "/menu/salads" },
  { category: "Desserts", price: "$2.49 - $9.49", calories: "330 - 990 Cals", link: "/menu/desserts" },
  { category: "Kids Menu", price: "$6.49 - $7.49", calories: "180 - 680 Cals", link: "/menu/kids-menu" },
  { category: "Drinks & Cocktails", price: "$1.00 - $11.99", calories: "0 - 420 Cals", link: "/menu/signature-cocktails" },
];

export default function QuickAnswerTable() {
  return (
    <section className={styles.section} id="quick-answer-table">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <h2>Applebee's Menu Prices at a Glance</h2>
          <p className={styles.subtext}>
            Average price ranges and calorie counts for popular Applebee's menu categories.
          </p>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <caption className={styles.srOnly}>
                Average price ranges and calorie counts for popular Applebee's menu categories.
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.colCategory}>Menu Category</th>
                  <th scope="col" className={styles.colPrice}>Estimated Price Range</th>
                  <th scope="col" className={styles.colCalories}>Calorie Range</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row, index) => (
                  <tr key={index}>
                    <td className={styles.categoryCell} data-label="Category">
                      <Link href={row.link} className={styles.categoryLink}>
                        {row.category}
                      </Link>
                    </td>
                    <td className={styles.priceCell} data-label="Estimated Price">
                      <span className={styles.mobileLabel}>Estimated Price:</span>
                      <span className={styles.cellValue}>{row.price}</span>
                    </td>
                    <td className={styles.calorieCell} data-label="Calorie Range">
                      <span className={styles.mobileLabel}>Calorie Range:</span>
                      <span className={styles.cellValue}>{row.calories}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.cardFooter}>
            <span>Prices verified August 2026. Data represents averages from sampled US locations.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
