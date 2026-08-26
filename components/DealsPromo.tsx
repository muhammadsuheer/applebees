import Link from 'next/link';
import Image from 'next/image';
import styles from './DealsPromo.module.css';

export default function DealsPromo() {
  const promos = [
    {
      id: "2-for-25",
      title: "Applebee's 2 for $25",
      description: "The Applebee's 2 for $25 deal includes one full-size appetizer and two full-size entrées for a flat price. Options typically feature items like the Classic Bacon Cheeseburger or Fiesta Lime Chicken.",
      image: "/apple-bees-menu/applebees-2-for-25-value-meal-deal-category.webp",
      badge: "VALUE",
      link: "/menu/2-for-25",
      cta: "VIEW 2 FOR $25 MENU"
    },
    {
      id: "all-you-can-eat",
      title: "Applebee's All You Can Eat",
      description: "The All You Can Eat special offers unlimited refills on select entrées like Boneless Wings, Riblets, and Shrimp, paired with endless fries. This limited-time promotion usually starts at $14.99.",
      image: "/apple-bees-menu/friends-sharing-appetizers.jpg",
      badge: "UNLIMITED",
      link: "/specials-and-deals",
      cta: "VIEW ALL YOU CAN EAT"
    },
    {
      id: "half-price-apps",
      title: "Applebee's Half Price Apps",
      description: "Half Price Apps are available daily during Late Night Happy Hour at participating locations. Popular discounted items include Mozzarella Sticks, Boneless Wings, and Spinach & Artichoke Dip.",
      image: "/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp",
      badge: "APPETIZERS",
      link: "/specials-and-deals",
      cta: "VIEW HALF PRICE APPS"
    },
    {
      id: "happy-hour",
      title: "Applebee's Happy Hour",
      description: "Applebee's Happy Hour typically runs from 3:00 PM to 6:00 PM and again from 9:00 PM to close. It features substantial discounts on select domestic beers, wine, and signature cocktails.",
      image: "/apple-bees-menu/applebees-dollarita-house-margarita-cocktail.webp",
      badge: "DRINKS",
      link: "/happy-hour",
      cta: "VIEW HAPPY HOUR"
    },
    {
      id: "really-big-meal-deal",
      title: "The Really BIG Meal Deal",
      description: "The Really BIG Meal Deal combines a qualifying burger or chicken sandwich with classic fries and a fountain drink. It is designed as a complete bundled meal for a single diner.",
      image: "/apple-bees-menu/applebees-really-big-meal-deal-spread.webp",
      badge: "COMBO",
      link: "/menu/really-big-meal-deal",
      cta: "VIEW BIG MEAL DEAL"
    }
  ];

  return (
    <section className={styles.section} id="featured-deals">
      <div className={styles.container}>
        <h2>Applebee's Specials & Deals</h2>
        <p className={styles.sectionDescription}>
          Applebee's is known for high-value promotions like the 2 for $25 and Half Price Apps. Below are the current active and seasonal deals you can find at most franchise locations.
        </p>
        <div className={styles.grid}>
          {promos.map((promo) => (
            <Link href={promo.link} key={promo.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={promo.image} alt={promo.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
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
