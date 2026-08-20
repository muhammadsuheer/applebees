import styles from './Hero.module.css';

export default function Hero() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Applebees Menu with Prices, Calories & 2 for $25 (2026)",
    "description": "Browse the full Applebees menu with prices and calories for 2026  appetizers, burgers, steaks, pasta, desserts, drinks, kids menu and the 2 for $25 deal.",
    "dateModified": "2026-08-01T00:00:00+00:00"
  };

  return (
    <header className={styles.heroSection} role="banner" aria-label="Main Applebee's Menu Banner">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h1>Applebees Menu with Prices and Calories (2026)</h1>
      <p className={styles.lastUpdated}>Last updated: August 2026</p>
      <p className={styles.disclaimer}><strong>Independent menu guide. Not affiliated with Applebee's. Prices and availability vary by location.</strong></p>

      <p>
        This complete guide covers the full Applebee's menu with prices and calories. It includes over 90 items across 14 categories: appetizers, handcrafted burgers, steaks and ribs, chicken, pasta, seafood, salads, desserts, sides, signature cocktails, non-alcoholic beverages, and the kids menu. You will also find current details on the popular 2 for $25 deal, All You Can Eat promotions, and daily specials like half-price apps. All prices and nutrition data were verified in August 2026 by sampling live menus from franchise locations across the United States. Since Applebee's locations are independently operated, local prices and item availability will differ from these averages.
      </p>

      <p>
        Use the category links below to jump to a specific section, or scroll through the full menu for comprehensive pricing and calorie information.
      </p>
    </header>
  );
}
