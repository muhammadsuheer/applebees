import Link from 'next/link';
import styles from './DealsPromo.module.css';

export default function DealsPromo() {
  const promos = [
    {
      id: "all-you-can-eat",
      title: "Applebee's All You Can Eat",
      description: "See the current All You Can Eat menu, available choices, pricing, and offer details.",
      image: "/apple-bees-menu/friends-sharing-appetizers.jpg",
      badge: "UNLIMITED",
      link: "/specials-and-deals",
      cta: "VIEW ALL YOU CAN EAT"
    },
    {
      id: "2-for-25",
      title: "Applebee's 2 for 25",
      description: "Check the current 2 for $25 menu, including available appetizers, entrées, and deal details.",
      image: "/apple-bees-menu/applebees-2-for-25-value-meal-deal-category.webp",
      badge: "VALUE",
      link: "/menu/2-for-25",
      cta: "VIEW 2 FOR $25 MENU"
    },
    {
      id: "happy-hour",
      title: "Applebee's Happy Hour",
      description: "Find Happy Hour menu details, participating times, and available food and drink specials.",
      image: "/apple-bees-menu/applebees-dollarita-house-margarita-cocktail.webp",
      badge: "DRINKS",
      link: "/happy-hour",
      cta: "VIEW HAPPY HOUR"
    },
    {
      id: "half-price-apps",
      title: "Applebee's Half Price Apps",
      description: "Check Half Price Appetizer times, prices, and the appetizers included at participating locations.",
      image: "/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp",
      badge: "APPETIZERS",
      link: "/specials-and-deals",
      cta: "VIEW HALF PRICE APPS"
    }
  ];

  return (
    <section className={styles.section} id="featured-deals">
      <div className={styles.container}>
        <h2>Applebee's Specials & Deals</h2>
        <p className={styles.sectionDescription}>
          Explore the Applebee's specials people search for most, including All You Can Eat, 2 for 25, Happy Hour, and Half Price Apps. Offer availability, menu choices, prices, and times can vary by participating location.
        </p>
        <div className={styles.grid}>
          {promos.map((promo) => (
            <Link href={promo.link} key={promo.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={promo.image} alt={promo.title} loading="lazy" />
                <span className={styles.badge}>{promo.badge}</span>
              </div>
              <div className={styles.content}>
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
                <span className={styles.ctaButton}>{promo.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
