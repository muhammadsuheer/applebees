import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuSteaksAndRibs() {
  return (
    <section className={styles.menuSection} id="steaks-ribs">
      <h2 className={styles.sectionTitle}>Steaks & Ribs</h2>
      <p className={styles.sectionDescription}>
        Applebee's transformed the casual dining industry by making premium cuts of beef accessible to the suburbs. The 2026 steakhouse menu focuses heavily on aggressive seasoning profiles and high-temperature searing to lock in maximum flavor.
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: Bourbon Street Steak */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787002300424.png" alt="Bourbon Street Steak" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Bourbon Street Steak</h3>
            <span className={styles.cardCalories}>Approx. 760 Cals</span>
            <p className={styles.cardDescription}>
              The undeniable crown jewel of the Applebee's entrée lineup. This massive, premium 8 oz. top sirloin is deeply marinated in a proprietary New Orleans-inspired Bourbon Street glaze, rendering it incredibly tender and infusing it with a rich, smoky, and slightly sweet flavor profile. It is aggressively seared and served sizzling alongside sautéed mushrooms, caramelized onions, and a massive portion of garlic mashed potatoes.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Iron Skillet:</strong> The Bourbon Street line is famous for being served on a blistering hot cast-iron skillet, creating an auditory and olfactory spectacle that turns heads across the dining room.
            </p>
          </div>
        </article>

        {/* Item 2: Baby Back Ribs */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787002633384.png" alt="Double-Glazed Baby Back Ribs" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Double-Glazed Baby Back Ribs</h3>
            <span className={styles.cardCalories}>Approx. 1,180 Cals</span>
            <p className={styles.cardDescription}>
              A colossal, slow-cooked rack of premium pork ribs. The secret to their "fall-off-the-bone" tenderness lies in a low-and-slow braising process, followed by a high-heat grilling phase where they are double-glazed with a thick, sticky, smoky Honey BBQ sauce. Served with classic coleslaw and an overflowing portion of crispy French fries. Available in both half-rack and full-rack portions.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Caramelization:</strong> The "double glaze" technique is critical; the first layer is brushed on early to penetrate the meat, while the second layer caramelizes over the open flame to create a slightly charred, sugary crust.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
