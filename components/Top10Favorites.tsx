import Link from 'next/link';
import Image from 'next/image';
import styles from './Top10Favorites.module.css';

// Prices and calories match data/menu.ts. Update both together.
// The picks follow research/diner-insights-2026.md: the dishes diners praise most consistently.

const top10Items = [
  {
    id: 'bourbon-street-chicken-shrimp',
    name: 'Bourbon Street Chicken & Shrimp',
    meta: '$17.99 · 1,010 calories',
    description:
      'The best entrée on the menu. Charred Cajun chicken and shrimp on a sizzling skillet, with garlic butter soaking into the potatoes. It’s on the 2 for $25 too.',
    image: '/apple-bees-menu/applebees-bourbon-street-chicken-and-shrimp-skillet.webp',
    link: '/menu/skillets',
  },
  {
    id: 'grilled-cheese-cheeseburger',
    name: 'Grilled Cheese Cheeseburger',
    meta: '$14.99 · 1,420 calories',
    description:
      'The most fun burger Applebee’s makes: four slices of American on toasted potato bread, with a cup of tomato basil soup for dipping.',
    image: '/apple-bees-menu/applebees-grilled-cheese-cheeseburger.webp',
    link: '/menu/handcrafted-burgers',
  },
  {
    id: 'boneless-wings',
    name: 'Boneless Wings',
    meta: '$12.99 · 1,080 calories',
    description:
      'The most popular starter for a reason: soft inside, crisp outside, and $6.50 at happy hour. Getting them To Go? Ask for the sauce on the side.',
    image: '/apple-bees-menu/applebees-boneless-wings-honey-bbq.webp',
    link: '/menu/appetizers',
  },
  {
    id: 'quesadilla-burger',
    name: 'Quesadilla Burger',
    meta: '$15.99 · 1,620 calories',
    description:
      'Grilled tortillas instead of a bun, with pico and Mexi-ranch keeping it bright. It’s messy and a little greasy in the best way, so grab extra napkins.',
    image: '/apple-bees-menu/applebees-quesadilla-burger-signature.webp',
    link: '/menu/handcrafted-burgers',
  },
  {
    id: 'chicken-parm',
    name: 'Chicken Parmesan Fettuccine',
    meta: '$15.99 · 1,480 calories',
    description:
      'The best pasta on the menu: thick noodles and properly crispy chicken. It reheats better than almost anything else, so it’s the leftovers pick.',
    image: '/apple-bees-menu/applebees-chicken-parmesan-fettuccine.webp',
    link: '/menu/pasta',
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    meta: '$9.99 · 860 calories',
    description:
      'The most consistent appetizer: crisp outside, stretchy inside and rarely greasy. At happy hour they drop to $5.00.',
    image: '/apple-bees-menu/applebees-mozzarella-sticks-with-marinara.webp',
    link: '/menu/appetizers',
  },
  {
    id: 'chicken-quesadilla',
    name: 'Chicken Quesadilla',
    meta: '$11.99 · 1,170 calories',
    description:
      'The best-value half price app. It’s $6.00 at happy hour, packs 49g of protein, and holds up better in a To Go box than anything fried.',
    image: '/apple-bees-menu/applebees-chicken-quesadilla-appetizer.webp',
    link: '/menu/appetizers',
  },
  {
    id: 'brew-pub-pretzels',
    name: 'Brew Pub Pretzels & Beer Cheese',
    meta: '$10.99 · 1,160 calories',
    description:
      'The best starter for sharing: warm, buttery pretzel sticks with beer cheese and honey Dijon. Order them at happy hour, when the price makes more sense.',
    image: '/apple-bees-menu/applebees-brew-pub-pretzels-beer-cheese-dip.webp',
    link: '/menu/appetizers',
  },
  {
    id: 'whisky-bacon-burger',
    name: 'Whisky Bacon Burger',
    meta: '$15.99 · 1,590 calories',
    description:
      'For sweet and smoky fans. The whisky glaze leans sweet, and the smoked bacon and crispy onions keep it from tasting one-note.',
    image: '/apple-bees-menu/applebees-whiskey-bacon-burger-premium.webp',
    link: '/menu/handcrafted-burgers',
  },
  {
    id: 'caramel-apple-blondie',
    name: 'Sizzling Caramel Apple Blondie',
    meta: '$9.49 · 990 calories',
    description:
      'The dessert to share. A warm blondie with cinnamon apples and vanilla ice cream, with caramel poured over the hot skillet at your table.',
    image: '/apple-bees-menu/applebees-sizzling-caramel-apple-blondie-dessert.webp',
    link: '/menu/desserts',
  },
];

export default function Top10Favorites() {
  return (
    <section className={styles.section} aria-labelledby="top-10-heading">
      <div className={styles.header}>
        <div className={styles.subtitleWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtitleText}>What to order</span>
          <span className={styles.line}></span>
        </div>
        <h2 id="top-10-heading" className={styles.heading}>
          Best Things to Order at Applebee&apos;s
        </h2>
        <p className={styles.description}>
          The dishes people keep coming back for, and the little things worth knowing before you order them.
        </p>
      </div>

      <ul className={styles.grid}>
        {top10Items.map((item) => (
          <li key={item.id}>
            <Link href={item.link} className={styles.card}>
              <article>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={`Applebee's ${item.name}`}
                    fill
                    sizes="(max-width: 768px) 112px, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <div className={styles.itemMeta}>
                    <strong>{item.meta}</strong>
                  </div>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
