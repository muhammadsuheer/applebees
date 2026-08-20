import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuValueDeals() {
  return (
    <section className={styles.menuSection} id="value-deals">
      <h2 className={styles.sectionTitle}>The Legendary Value Deals</h2>
      <p className={styles.sectionDescription}>
        The financial engine that drives Applebee's massive traffic. In an era of rampant dining inflation, these highly engineered promotional deals offer unprecedented caloric value for the dollar, keeping dining rooms packed during off-peak economic cycles.
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: 2 for $2x */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787084720100.png" alt="2 for 20 Deal" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>The "2 For..." Menu</h3>
            <span className={styles.cardCalories}>Varies by Selection</span>
            <p className={styles.cardDescription}>
              Historically known as the "2 for $20," this iconic promotion has adapted to 2026 inflation, often presenting as "2 for $25" or "2 for $30" depending on franchise location. The premise is brilliantly simple: Diners select one massive appetizer to share (like Spinach Dip or Boneless Wings) and two full-sized entrées (like Classic Burgers, Fiesta Lime Chicken, or Riblets). 
            </p>
            <p className={styles.cardHistory}>
              <strong>The Economics:</strong> This deal operates as a "loss leader" for many franchises. They sacrifice massive profit margins on the food itself, banking entirely on the psychological premise that the diner will spend the money they saved on highly profitable alcoholic beverages, like the $6 Mucho Cocktails.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
