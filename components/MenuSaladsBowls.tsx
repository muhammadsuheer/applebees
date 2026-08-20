import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuSaladsBowls() {
  return (
    <section className={styles.menuSection} id="salads-bowls">
      <h2 className={styles.sectionTitle}>Salads & Irresist-A-Bowls</h2>
      <p className={styles.sectionDescription}>
        For those seeking lighter, macro-conscious options without sacrificing the aggressive flavor profiles Applebee's is known for. The bowl category, in particular, represents a massive 2026 shift towards customizable, high-protein dining.
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: Oriental Chicken Salad */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787075443436.png" alt="Oriental Chicken Salad" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Oriental Chicken Salad</h3>
            <span className={styles.cardCalories}>Approx. 1,440 Cals</span>
            <p className={styles.cardDescription}>
              Arguably the most famous salad in casual dining history. Fresh Asian greens are tossed in a proprietary, sweet and tangy Oriental vinaigrette, then piled high with crispy breaded chicken tenders, toasted almonds, and crispy rice noodles. It is an absolute textural masterpiece that balances the crunch of the noodles with the tender warmth of the fried chicken.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Calorie Trap:</strong> Despite being a "salad," the heavy dressing and fried chicken push the calorie count higher than many burgers. Fitness enthusiasts often order it with grilled chicken and the dressing strictly on the side to mitigate the caloric load.
            </p>
          </div>
        </article>

        {/* Item 2: Southwest Chicken Bowl */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787075531485.png" alt="Southwest Chicken Bowl" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Southwest Chicken Bowl</h3>
            <span className={styles.cardCalories}>Approx. 820 Cals</span>
            <p className={styles.cardDescription}>
              A modern addition designed for the Chipotle-generation diner. Sliced grilled chicken breast is served over a bed of cilantro rice, house-made pico de gallo, black bean corn salsa, and fresh greens. It is heavily drizzled with chimichurri and a cooling guacamole ranch dressing, creating a highly satisfying, high-protein meal.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Bowl Revolution:</strong> Applebee's introduced the "Irresist-A-Bowl" lineup to capture the millennial and Gen Z market that prefers highly customizable, starch-and-protein based vessels over traditional "meat-and-potatoes" plating.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
