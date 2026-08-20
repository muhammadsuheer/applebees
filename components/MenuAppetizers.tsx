import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuAppetizers() {
  return (
    <section className={styles.menuSection} id="appetizers">
      <h2 className={styles.sectionTitle}>Appetizers & Bar Snacks</h2>
      <p className={styles.sectionDescription}>
        The cornerstone of the Applebee's experience. From late-night Happy Hour sessions to massive family gatherings, these appetizers are engineered for sharing, dipping, and socializing. In 2026, the menu has refined its focus on high-yield crowd favorites.
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: Boneless Wings */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787000534891.png" alt="Boneless Wings" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Double Crunch Boneless Wings</h3>
            <span className={styles.cardCalories}>Approx. 1,040 - 1,160 Cals</span>
            <p className={styles.cardDescription}>
              The undisputed king of the Happy Hour menu. These aren't traditional wings; they are massive chunks of white-meat chicken breast, double-breaded for a deafening crunch, and fried to a golden mahogany. You have the choice to toss them in Classic Hot, Honey BBQ, Sweet Asian Chile, Garlic Parmesan, or Extra Hot sauce. Served with a side of creamy Bleu cheese or house-made ranch dressing for the ultimate cooling contrast.
            </p>
            <p className={styles.cardHistory}>
              <strong>Culinary Note:</strong> The "Double Crunch" breading technique was specifically engineered to withstand being submerged in heavy sauces without becoming soggy during a 20-minute Carside To Go journey.
            </p>
          </div>
        </article>

        {/* Item 2: Spinach Dip */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787000984116.png" alt="Spinach and Artichoke Dip" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Spinach & Artichoke Dip</h3>
            <span className={styles.cardCalories}>Approx. 960 Cals</span>
            <p className={styles.cardDescription}>
              A decadent, molten pool of melted Parmesan and Roman cheeses blended with fresh spinach and tender artichoke hearts. This bubbling crock of rich, savory comfort is served alongside an absolutely massive mountain of freshly fried white corn tortilla chips. It is heavy, it is salty, and it pairs perfectly with a cold, crisp draft beer.
            </p>
            <p className={styles.cardHistory}>
              <strong>Menu Legacy:</strong> This dish has survived over two decades of menu revisions. Franchise owners often cite it as the single most profitable and consistently ordered item across all 50 states.
            </p>
          </div>
        </article>

        {/* Item 3: Wonton Tacos */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787001115613.png" alt="Chicken Wonton Tacos" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Grilled Chicken Wonton Tacos</h3>
            <span className={styles.cardCalories}>Approx. 580 Cals</span>
            <p className={styles.cardDescription}>
              A dramatic departure from traditional American pub fare, these tacos showcase a fusion influence. Zesty grilled chicken is stuffed into delicate, crispy wonton shells, then topped with a vibrant, crunchy Asian slaw and fresh cilantro. The entire dish is heavily drizzled with a sticky, sweet, and slightly spicy dumpling sauce that elevates the flavor profile immensely.
            </p>
            <p className={styles.cardHistory}>
              <strong>Macro Hacker's Choice:</strong> At under 600 calories for a full plate, these tacos are widely celebrated by dietitians and fitness influencers as the best "macro-friendly" order on the appetizer menu.
            </p>
          </div>
        </article>

        {/* Item 4: Mozzarella Sticks */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787001194078.png" alt="Mozzarella Sticks" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Classic Mozzarella Sticks</h3>
            <span className={styles.cardCalories}>Approx. 910 Cals</span>
            <p className={styles.cardDescription}>
              Eight massive, golden-fried sticks of stringy, molten mozzarella cheese. The exterior breading is seasoned with a proprietary blend of Italian herbs to provide a savory, crunchy shell that encases the rich dairy core. Served with a side of warm, robust house-made marinara sauce for dipping.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Tipping Point:</strong> The perfect Mozzarella Stick has a 90-second window of optimal temperature before the cheese coagulates. This dish is the ultimate test of an Applebee's expeditor's speed.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
