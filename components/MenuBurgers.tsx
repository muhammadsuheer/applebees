import styles from './MenuStyles.module.css';
import Image from 'next/image';

export default function MenuBurgers() {
  return (
    <section className={styles.menuSection} id="burgers">
      <h2 className={styles.sectionTitle}>Handcrafted Burgers</h2>
      <p className={styles.sectionDescription}>
        A testament to American diner culture. Applebee's burgers are constructed using 100% fresh, never-frozen ground beef, smashed on a high-heat flat top grill to achieve the perfect Maillard reaction crust. 
      </p>
      
      <div className={styles.grid}>
        {/* Item 1: Quesadilla Burger */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787003387353.png" alt="Quesadilla Burger" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>The Quesadilla Burger</h3>
            <span className={styles.cardCalories}>Approx. 1,060 Cals</span>
            <p className={styles.cardDescription}>
              A structural masterpiece that defies traditional culinary boundaries. This iconic item abandons the standard brioche bun entirely, replacing it with two warm, pepper-jack and cheddar-stuffed flour tortillas. Inside this cheesy fortress lies a juicy beef patty, fresh pico de gallo, crisp shredded lettuce, and a heavy drizzle of proprietary Mexi-ranch sauce. It is chaotic, messy, and absolutely brilliant.
            </p>
            <p className={styles.cardHistory}>
              <strong>The Architecture:</strong> The tortillas are pressed on the flat top just long enough to melt the cheese, effectively fusing the structure together to prevent the burger from disintegrating while eating.
            </p>
          </div>
        </article>

        {/* Item 2: Whisky Bacon Burger */}
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src="/images/media_1787003813416.png" alt="Whisky Bacon Burger" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Whisky Bacon Burger</h3>
            <span className={styles.cardCalories}>Approx. 1,240 Cals</span>
            <p className={styles.cardDescription}>
              An aggressively savory, towering behemoth of a sandwich. A fresh beef patty is crowned with two massive slices of melted Pepper Jack cheese, crispy Applewood-smoked bacon, and crispy onion tanglers. The defining element is a rich, boozy Fireball® Whisky-infused steak sauce that cuts through the intense fat profile with a sharp, sweet heat. Served on a toasted Brioche bun.
            </p>
            <p className={styles.cardHistory}>
              <strong>Flavor Engineering:</strong> The crispy onion tanglers provide crucial structural crunch, preventing the heavy whisky sauce from turning the brioche bun into a soggy sponge.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
