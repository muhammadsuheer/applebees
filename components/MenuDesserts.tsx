import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuDesserts() {
  return (
    <section className={styles.menuSection} id="desserts">
      <h2 className={styles.sectionTitle}>Decadent Desserts</h2>
      <p className={styles.sectionDescription}>
        The grand finale. Applebee's desserts are legendary for their massive portions, extreme temperatures, and unapologetic sugar content. These are engineered specifically for sharing at the center of the table.
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: Triple Chocolate Meltdown */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787084233163.png" alt="Triple Chocolate Meltdown" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Triple Chocolate Meltdown®</h3>
            <span className={styles.cardCalories}>Approx. 850 Cals</span>
            <p className={styles.cardDescription}>
              A marvel of culinary engineering. A rich, moist, incredibly dense chocolate cake is served warm. When your spoon breaches the outer crust, a torrent of dark, molten chocolate fudge erupts from the center. It is served with a massive scoop of premium vanilla bean ice cream to provide a desperately needed temperature contrast against the scalding hot fudge.
            </p>
            <p className={styles.cardHistory}>
              <strong>Timing is Everything:</strong> The kitchen staff must time the microwave heating cycle flawlessly; 5 seconds too short and the center remains solid, 5 seconds too long and the cake structure collapses into a pudding.
            </p>
          </div>
        </article>

        {/* Item 2: Butter Pecan Blondie */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787084277633.png" alt="Sizzling Butter Pecan Blondie" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Sizzling Butter Pecan Blondie</h3>
            <span className={styles.cardCalories}>Approx. 1,070 Cals</span>
            <p className={styles.cardDescription}>
              A massive blonde brownie baked with crunchy pecans, served straight out of the oven on a blistering hot cast-iron skillet. It is crowned with a scoop of vanilla ice cream. When the server delivers it to the table, they pour a rich, warm maple butter sauce over the top, causing the skillet to violently sizzle, caramelizing the edges of the blondie into a chewy, sugary crust.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Sizzle Effect:</strong> Much like the Bourbon Street Steak, the auditory sizzle of the maple butter hitting the cast iron is a calculated psychological tactic that routinely triggers impulse dessert orders from adjacent tables.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
