import Link from 'next/link';
import Image from 'next/image';
import styles from './Top10Favorites.module.css';

export default function Top10Favorites() {
  const top10Items = [
    {
      id: "fiesta-lime",
      name: "Fiesta Lime Chicken",
      description: "Grilled chicken served with Mexi-ranch dressing and Jack-cheddar cheese, with the listed sides and accompaniments.",
      image: "/apple-bees-menu/applebees-fiesta-lime-chicken-entree.webp",
      link: "/menu/chicken",
      cta: "View Fiesta Lime Chicken"
    },
    {
      id: "quesadilla-burger",
      name: "Quesadilla Burger",
      description: "A burger served in a quesadilla-style combination with cheese and the item's listed toppings and sauce.",
      image: "/apple-bees-menu/applebees-quesadilla-burger-signature.webp",
      link: "/menu/handcrafted-burgers",
      cta: "View Quesadilla Burger"
    },
    {
      id: "riblets",
      name: "Applebee's Riblets",
      description: "Applebee's riblets are available in the steaks and ribs section, with serving options and sides depending on the menu selection.",
      image: "/apple-bees-menu/applebees-applewood-smoked-baby-back-ribs.webp",
      link: "/menu/steaks-and-ribs",
      cta: "View Riblets"
    },
    {
      id: "chicken-parm",
      name: "Chicken Parmesan Fettuccine",
      description: "A pasta entrée combining chicken parmesan with fettuccine and the listed sauce and toppings.",
      image: "/apple-bees-menu/applebees-broccoli-chicken-alfredo-pasta.webp",
      link: "/menu/pasta",
      cta: "View Chicken Parmesan Fettuccine"
    },
    {
      id: "boneless-wings",
      name: "Boneless Wings",
      description: "Boneless chicken wings available with Applebee's listed sauce options and accompaniments.",
      image: "/apple-bees-menu/applebees-boneless-wings-honey-bbq.webp",
      link: "/menu/appetizers",
      cta: "View Boneless Wings"
    },
    {
      id: "spinach-dip",
      name: "Spinach & Artichoke Dip",
      description: "A warm spinach and artichoke dip served with tortilla chips.",
      image: "/apple-bees-menu/applebees-spinach-artichoke-dip-appetizer.webp",
      link: "/menu/appetizers",
      cta: "View Spinach & Artichoke Dip"
    },
    {
      id: "bourbon-steak",
      name: "Bourbon Street Steak",
      description: "A Bourbon Street-style steak entrée listed in Applebee's steaks and ribs menu.",
      image: "/apple-bees-menu/applebees-bourbon-street-steak-dinner.webp",
      link: "/menu/steaks-and-ribs",
      cta: "View Bourbon Street Steak"
    },
    {
      id: "wonton-tacos",
      name: "Chicken Wonton Tacos",
      description: "Chicken-filled wonton tacos served with the toppings and sauce listed on the current menu.",
      image: "/apple-bees-menu/applebees-chicken-wonton-tacos-appetizer.webp",
      link: "/menu/appetizers",
      cta: "View Chicken Wonton Tacos"
    },
    {
      id: "classic-combo",
      name: "The Classic Combo",
      description: "An appetizer combination that brings several Applebee's appetizer choices together in one order.",
      image: "/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp",
      link: "/menu/appetizers",
      cta: "View The Classic Combo"
    },
    {
      id: "oriental-salad",
      name: "Oriental Chicken Salad",
      description: "A chicken salad with greens and the toppings and dressing included on the current Applebee's menu.",
      image: "/apple-bees-menu/applebees-oriental-chicken-salad-bowl.webp",
      link: "/menu/salads",
      cta: "View Oriental Chicken Salad"
    }
  ];

  return (
    <section className={styles.section} aria-labelledby="top-10-heading">
      <div className={styles.header}>
        <div className={styles.subtitleWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtitleText}>POPULAR MENU PICKS</span>
          <span className={styles.line}></span>
        </div>
        <h2 id="top-10-heading" className={styles.heading}>
          Popular Applebee's Menu Items
        </h2>
        <p className={styles.description}>
          Browse some of the most searched Applebee's dishes across chicken, burgers, appetizers, pasta, steaks, and salads. Select an item to check its current price, calories, and menu details.
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
                <p className={styles.itemDescription}>
                  {item.description}
                </p>
                <div className={styles.itemMeta}>
                  <strong>{item.cta}</strong>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
