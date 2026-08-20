import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuChicken() {
  return (
    <section className={styles.menuSection} id="chicken">
      <h2 className={styles.sectionTitle}>Chicken Entrées</h2>
      <p className={styles.sectionDescription}>
        The unsung heroes of the menu. Applebee's chicken dishes utilize a complex array of aggressive marinades and glazes to elevate simple poultry into intensely craveable, high-protein comfort food.
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: Fiesta Lime Chicken */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787004175510.png" alt="Fiesta Lime Chicken" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Fiesta Lime Chicken®</h3>
            <span className={styles.cardCalories}>Approx. 1,140 Cals</span>
            <p className={styles.cardDescription}>
              The dish that defined a generation of casual dining. A massive, tender chicken breast is marinated in a vibrant cilantro-lime glaze, grilled to perfection, and placed upon a bed of crispy tortilla strips. It is then smothered in a rich, tangy Mexi-ranch dressing and crowned with a thick layer of melted Cheddar-Jack cheese. Served with Spanish rice and house-made pico de gallo.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Zesty Legacy:</strong> The cilantro-lime marinade physically tenderizes the chicken protein fibers, ensuring the breast remains incredibly juicy even when subjected to the extreme heat of the cheese-melting salamander oven.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
