import Link from 'next/link';
import Image from 'next/image';
import styles from './Top10Favorites.module.css';

// Prices and calories match data/menu.ts. Update both together.

export default function Top10Favorites() {
  const top10Items = [
    {
      id: 'chicken-quesadilla',
      name: 'Chicken Quesadilla',
      meta: '$11.99 · 1,170 calories',
      description:
        'The best half price app on the menu. At $6.00 during happy hour it carries 49g of protein, more than the Boneless Wings.',
      image: '/apple-bees-menu/applebees-chicken-quesadilla-appetizer.webp',
      link: '/menu/appetizers',
    },
    {
      id: 'quesadilla-burger',
      name: 'Quesadilla Burger',
      meta: '$15.99 · 1,620 calories',
      description:
        "Applebee's heaviest burger: bacon, Pepper Jack and Mexi-ranch packed between grilled tortillas. It's the base of the new O-M-Cheese-adilla Burger.",
      image: '/apple-bees-menu/applebees-quesadilla-burger-signature.webp',
      link: '/menu/handcrafted-burgers',
    },
    {
      id: 'top-sirloin',
      name: '8 oz. Top Sirloin',
      meta: '$18.99 · 830 calories',
      description:
        '55g of protein for 830 calories, the best ratio of any entrée. Swap the side for Steamed Broccoli and the plate stays under 1,000.',
      image: '/apple-bees-menu/applebees-8oz-top-sirloin-steak-dinner.webp',
      link: '/menu/steaks-and-ribs',
    },
    {
      id: 'fiesta-lime',
      name: 'Fiesta Lime Chicken',
      meta: '$16.49 · 1,190 calories',
      description:
        'Grilled chicken under Mexi-ranch and melted cheese, with 61g of protein. It also has 3,630mg of sodium, so ask for the Mexi-ranch on the side.',
      image: '/apple-bees-menu/applebees-fiesta-lime-chicken-entree.webp',
      link: '/menu/chicken',
    },
    {
      id: 'riblets',
      name: "Applebee's Riblets",
      meta: '$17.99 · 1,080 calories',
      description:
        'Slow-cooked pork riblets tossed in honey BBQ, with fries and slaw. One of the three proteins on the $15.99 All You Can Eat deal.',
      image: '/apple-bees-menu/applebees-applewood-smoked-baby-back-ribs.webp',
      link: '/menu/steaks-and-ribs',
    },
    {
      id: 'chicken-parm',
      name: 'Chicken Parmesan Fettuccine',
      meta: '$15.99 · 1,480 calories',
      description:
        'Breaded chicken, marinara and mozzarella over fettuccine with a garlic breadstick. It counts as an entrée on the 2 for $25.',
      image: '/apple-bees-menu/applebees-chicken-parmesan-fettuccine.webp',
      link: '/menu/new-items',
    },
    {
      id: 'boneless-wings',
      name: 'Boneless Wings',
      meta: '$12.99 · 1,080 calories',
      description:
        '$6.50 at happy hour. Pick the sauce carefully: Classic Hot Buffalo carries 4,720mg of sodium, Garlic Parmesan 2,710mg.',
      image: '/apple-bees-menu/applebees-boneless-wings-honey-bbq.webp',
      link: '/menu/appetizers',
    },
    {
      id: 'bourbon-steak',
      name: 'Bourbon Street Steak',
      meta: '$19.99 · 1,430 calories',
      description:
        'Cajun-seasoned sirloin with mushrooms and onions. The most protein of any steak at 71g, and 3,430mg of sodium to go with it.',
      image: '/apple-bees-menu/applebees-bourbon-street-steak-dinner.webp',
      link: '/menu/steaks-and-ribs',
    },
    {
      id: 'wonton-tacos',
      name: 'Chicken Wonton Tacos',
      meta: '$11.49 · 590 calories',
      description:
        'The lightest appetizer by a wide margin, about half the calories of anything else in the section.',
      image: '/apple-bees-menu/applebees-chicken-wonton-tacos-appetizer.webp',
      link: '/menu/appetizers',
    },
    {
      id: 'triple-chocolate',
      name: 'Triple Chocolate Meltdown',
      meta: '$8.99 · 910 calories',
      description:
        'Warm chocolate cake with a molten fudge center and vanilla ice cream. 87g of sugar, so bring a second spoon.',
      image: '/apple-bees-menu/applebees-triple-chocolate-meltdown-dessert.webp',
      link: '/menu/desserts',
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="top-10-heading">
      <div className={styles.header}>
        <div className={styles.subtitleWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtitleText}>WHAT TO ORDER</span>
          <span className={styles.line}></span>
        </div>
        <h2 id="top-10-heading" className={styles.heading}>
          Best Things to Order at Applebee&apos;s
        </h2>
        <p className={styles.description}>
          Ten dishes, each with its price, calories and the one number that matters before you
          order it.
        </p>
      </div>

      <div className={styles.grid}>
        {top10Items.map((item) => (
          <Link href={item.link} key={item.id} className={styles.card}>
            <article>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={`Applebee's ${item.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
        ))}
      </div>
    </section>
  );
}
