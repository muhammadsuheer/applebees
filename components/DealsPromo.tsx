import Link from 'next/link';
import Image from 'next/image';
import styles from './DealsPromo.module.css';

// Checked September 2026 against Applebee's news posts and specials pages:
//  - O-M-Cheese-adilla Burger joined 2 for $25 on Aug 31, 2026 (dine-in only).
//  - Spooky Sips: $6 cocktails and a $4 mocktail through Nov 15, 2026.
//  - All You Can Eat: $15.99, announced May 11, 2026, summer limited time, dine-in.
// Remove a card the day its promotion ends.

export default function DealsPromo() {
  const promos = [
    {
      id: '2-for-25',
      title: "Applebee's 2 for $25",
      description:
        'One appetizer and two entrées for $25. The new O-M-Cheese-adilla Burger joined the line-up on August 31, 2026, served in a skillet of molten queso. It\'s dine-in only.',
      image: '/apple-bees-menu/applebees-quesadilla-burger-signature.webp',
      badge: 'NEW',
      link: '/menu/2-for-25',
      cta: 'SEE THE 2 FOR $25 MENU',
    },
    {
      id: 'half-price-apps',
      title: 'Half Price Apps',
      description:
        '3:00–6:00 PM and 9:00 PM to close, dine-in. Mozzarella Sticks drop to $5.00 and a Chicken Quesadilla to $6.00.',
      image: '/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp',
      badge: 'HAPPY HOUR',
      link: '/happy-hour',
      cta: 'SEE HAPPY HOUR TIMES',
    },
    {
      id: 'spooky-sips',
      title: '$6 Spooky Sips',
      description:
        'The Tipsy Zombie and Dracula\'s Juice are $6 each through November 15, 2026. The Tropical Spell Mocktail is $4.',
      image: '/apple-bees-menu/applebees-bacardi-blushing-dragon-mucho-cocktail.webp',
      badge: 'UNTIL NOV 15',
      link: '/happy-hour#happy-hour-drinks',
      cta: 'SEE THE DRINKS',
    },
    {
      id: 'really-big-meal-deal',
      title: 'Really BIG Meal Deal',
      description:
        '$9.99 for one of three entrées, classic fries and a fountain drink. The cheapest full meal on the menu.',
      image: '/apple-bees-menu/applebees-really-big-meal-deal-spread.webp',
      badge: '$9.99',
      link: '/menu/really-big-meal-deal',
      cta: 'SEE THE $9.99 DEAL',
    },
    {
      id: 'all-you-can-eat',
      title: 'All You Can Eat',
      description:
        'Boneless Wings, Riblets and Double Crunch Shrimp with endless fries for $15.99. It ran as a summer 2026 deal, so call before you go.',
      image: '/apple-bees-menu/friends-sharing-appetizers.jpg',
      badge: '$15.99',
      link: '/specials-and-deals',
      cta: 'CHECK IF IT\'S RUNNING',
    },
  ];

  return (
    <section className={styles.section} id="featured-deals">
      <div className={styles.container}>
        <h2>Applebee&apos;s Specials and Deals Right Now</h2>
        <p className={styles.sectionDescription}>
          Five deals worth knowing in fall 2026, from the $9.99 Really BIG Meal Deal to the new
          O-M-Cheese-adilla Burger on the 2 for $25. Franchisees can opt out of any of them.
        </p>
        <div className={styles.grid}>
          {promos.map((promo, i) => (
            <Link href={promo.link} key={promo.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                />
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
