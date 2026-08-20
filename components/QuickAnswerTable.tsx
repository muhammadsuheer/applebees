import Link from 'next/link';
import styles from './QuickAnswerTable.module.css';

const summaryData = [
  { category: "Appetizers", price: "$9.99 - $12.99", calories: "590 - 1330", link: "/menu/appetizers" },
  { category: "Handcrafted Burgers", price: "$14.49 - $15.99", calories: "1050 - 1620", link: "/menu/handcrafted-burgers" },
  { category: "Steaks & Ribs", price: "$18.99 - $23.99", calories: "630 - 1400", link: "/menu/steaks-and-ribs" },
  { category: "Chicken", price: "$14.99 - $16.49", calories: "1140 - 1610", link: "/menu/chicken" },
  { category: "Pasta", price: "$17.49", calories: "1540", link: "/menu/pasta" },
  { category: "Seafood", price: "$16.49 - $17.49", calories: "820 - 920", link: "/menu/seafood" },
  { category: "Salads", price: "$14.99", calories: "1220", link: "/menu/salads" },
  { category: "Desserts", price: "$8.99", calories: "860", link: "/menu/desserts" },
  { category: "Kids Menu", price: "$6.49 - $7.49", calories: "450 - 680", link: "/menu/kids-menu" },
  { category: "Drinks & Cocktails", price: "$1.00 - $11.99", calories: "0 - 420", link: "/menu/signature-cocktails" },
];

export default function QuickAnswerTable() {
  return (
    <section className={styles.section} id="quick-answer-table">
      <h2>Applebee's Menu Prices at a Glance</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <caption>Average price ranges and calorie counts for popular Applebee's menu categories.</caption>
          <thead>
            <tr>
              <th scope="col">Menu Category</th>
              <th scope="col">Estimated Price Range</th>
              <th scope="col">Calorie Range</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.map((row, index) => (
              <tr key={index}>
                <th scope="row">
                  <Link href={row.link}>{row.category}</Link>
                </th>
                <td>{row.price}</td>
                <td>{row.calories} Cals</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.captionNote}>Prices verified August 2026. Data represents averages from sampled US locations.</p>
    </section>
  );
}
