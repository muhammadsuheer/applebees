import Link from 'next/link';
import styles from './ContentSections.module.css';

export function DrinksAndCocktailsSection() {
  return (
    <section className={styles.section} id="drinks-and-cocktails">
      <h2>Applebee&apos;s Drink Menu Prices</h2>
      <p>
        Drinks come in three price tiers. Fountain drinks and iced tea cost $2.29 to $2.99. A
        Dirty Fountain Soda is $3.99. Signature cocktails start at $9.99 for a Mucho Blue Hawaiian
        and top out at $11.99 for a Top Shelf Long Island Iced Tea.
      </p>
      <p>
        The exception right now is Halloween. Through November 15, 2026, the Tipsy Zombie and
        Dracula&apos;s Juice are $6, and the Tropical Spell Mocktail is $4. The $1 Dollarita ran in
        July and isn&apos;t back yet. See the <Link href="/menu/signature-cocktails">cocktail menu</Link>{' '}
        or what your bar discounts at <Link href="/happy-hour">happy hour</Link>.
      </p>
    </section>
  );
}

export function NutritionAndCaloriesSection() {
  return (
    <section className={styles.section} id="nutrition-and-calories">
      <h2>Applebee&apos;s Menu Calories</h2>
      <p>
        Calories on this menu run from 100 for Steamed Broccoli to 2,200 for The Classic Combo,
        and the heaviest thing you can order is an appetizer, not an entrée. Most entrées land
        above 1,000.
      </p>
      <p>
        The side is the easiest number to move. Swap Classic Fries (400 calories) for Steamed
        Broccoli (100) and you&apos;ve cut 300 without touching the entrée. Every item&apos;s
        calories, protein and sodium are in the <Link href="/nutrition">nutrition guide</Link>, and
        the <Link href="/allergen-menu">allergen menu</Link> filters out milk, wheat, soy and the
        rest.
      </p>
    </section>
  );
}

export function HowToOrderSection() {
  return (
    <section className={styles.section} id="how-to-order-at-applebees">
      <h2>How to Order at Applebee&apos;s</h2>
      <p>
        Where you order decides which deals you get. Half price apps, All You Can Eat and the new
        O-M-Cheese-adilla Burger are dine-in only.
      </p>

      <h3>Dine-in</h3>
      <p>
        The only way to get every promotion on the menu, including happy hour and the{' '}
        <Link href="/menu/2-for-25">2 for $25</Link> with the O-M-Cheese-adilla Burger.
      </p>

      <h3>Carside To Go</h3>
      <p>
        Order ahead on the Applebee&apos;s app or site, park in a Carside spot, and staff bring the
        food out. You pay restaurant prices with no delivery fee. Details on{' '}
        <Link href="/takeout">takeout</Link>.
      </p>

      <h3>Delivery</h3>
      <p>
        Ordering delivery through Applebee&apos;s own app or site gets you the restaurant&apos;s
        menu. DoorDash and Uber Eats set their own item prices and fees on top, so the same order
        costs more there. Compare them on the <Link href="/delivery">delivery page</Link>.
      </p>
    </section>
  );
}

export function MethodologySection() {
  return (
    <section className={styles.section} id="about-this-guide">
      <h2>About This Guide</h2>
      <p>
        This is an independent guide to the Applebee&apos;s menu. It isn&apos;t owned by,
        affiliated with, or endorsed by Applebee&apos;s Neighborhood Grill + Bar or Dine Brands
        Global.
      </p>
      <p>
        Calories and allergens come from Applebee&apos;s published nutrition information. Prices are
        reference figures, not a national price list, because franchisees set their own. Spot something
        out of date? Tell us on the <Link href="/contact-us">contact page</Link>.
      </p>
    </section>
  );
}
