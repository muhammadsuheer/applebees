import styles from './Hero.module.css';

export default function Hero() {
  // Super SEO Section: Aggressive WebPage and Restaurant Schema Injection
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Applebees Menu with Prices & Calories | Updated August 2026",
    "description": "The complete Applebees menu with prices and calories is on this page, updated for 2026. Every category is here, appetizers, burgers, steaks, pasta, seafood, salads, desserts, kids menu, drinks, sides, and the full 2 for $25 deal.",
    "publisher": {
      "@type": "Organization",
      "name": "Applebee's Menu Guide"
    },
    "dateModified": "2026-08-01T00:00:00+00:00",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Applebee's Grill + Bar",
      "servesCuisine": "American Casual Dining",
      "priceRange": "$$"
    }
  };

  return (
    <header className={styles.heroSection} role="banner" aria-label="Main Applebee's Menu Banner">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h1>Applebees Menu with Prices & Calories August 2026</h1>
      
      <p>
        Check the <strong>Applebees menu with prices and calories</strong> in one place. Browse appetizers, burgers, chicken, steaks and ribs, pasta, seafood, salads, desserts, sides, drinks, the kids menu, and the <strong>2 for $25 menu</strong> with available entrée options.
      </p>

      <p>
        Prices and calorie information are compiled from Applebee's menu sources and reviewed for August 2026. Menu items, prices, and availability can vary by location.
      </p>
      
      <p>
        Use the category links below to jump to the section you need, scroll through the full menu, or <strong>download the printable Applebees menu PDF</strong>.
      </p>
    </header>
  );
}
