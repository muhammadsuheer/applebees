import Link from 'next/link';
import styles from './ContentSections.module.css';

export function DrinksAndCocktailsSection() {
  return (
    <section className={styles.section} id="drinks-and-cocktails">
      <h2>Applebee's Drinks & Cocktails Menu</h2>
      <p>
        The Applebee's drink menu features signature cocktails like the Mucho Blue Hawaiian and Dollarita, alongside non-alcoholic options and seasonal specials. The drink lineup updates frequently, with new specialty items rotating in based on holidays or limited-time campaigns.
      </p>
      <p>
        If you are looking for current specials, many locations offer drink deals during their <Link href="/happy-hour">Happy Hour</Link>. You can browse the full selection of <Link href="/menu/signature-cocktails">signature cocktails</Link> to see current calorie counts and typical pricing. Keep in mind that franchise locations set their own pricing, so local prices differ.
      </p>
    </section>
  );
}

export function NutritionAndCaloriesSection() {
  return (
    <section className={styles.section} id="nutrition-and-calories">
      <h2>Applebee's Menu Calories & Nutrition</h2>
      <p>
        Every item on the Applebee's menu includes a calorie count, from the 100-calorie Steamed Broccoli to the 1620-calorie Quesadilla Burger. This allows diners to make informed choices before arriving at the restaurant.
      </p>
      <p>
        Whether you are balancing a meal with lighter sides or planning ahead for one of the <Link href="/menu/desserts">desserts</Link>, knowing the numbers helps. You can view complete details in our dedicated <Link href="/nutrition">nutrition guide</Link> or browse the <Link href="/menu">full menu</Link> to see calories listed next to every item.
      </p>
    </section>
  );
}

export function HowToOrderSection() {
  return (
    <section className={styles.section} id="how-to-order-at-applebees">
      <h2>How to Order at Applebee's</h2>
      <p>
        Applebee's offers several ordering methods, including dine-in, Carside To Go, and direct delivery. Selecting the right option depends on whether you want to skip the dining room or take advantage of specific in-house specials.
      </p>

      <h3>Dine-In</h3>
      <p>
        Dine-in guests have access to the <Link href="/menu">full menu</Link>, including value deals like the <Link href="/menu/2-for-25">2 for $25</Link>. Many locations feature in-table tablets to quickly add drinks or desserts.
      </p>

      <h3>Carside To Go</h3>
      <p>
        Carside To Go allows you to order ahead and have your food brought directly to your vehicle in a designated spot. It is an efficient way to pick up <Link href="/takeout">takeout</Link> without leaving your car.
      </p>

      <h3>Delivery</h3>
      <p>
        Direct <Link href="/delivery">delivery</Link> through the Applebee's app or website often avoids the steep markups associated with third-party apps. Prices shown reflect typical delivery menus, but franchise locations set their own pricing, so local prices differ.
      </p>
    </section>
  );
}

export function MethodologySection() {
  return (
    <section className={styles.section} id="about-this-guide">
      <h2>Methodology & About This Guide</h2>
      <p>
        This site is an independent, unofficial guide to the Applebee's menu and is not owned by, affiliated with, or endorsed by Applebee's Neighborhood Grill + Bar or Dine Brands Global.
      </p>
      <p>
        Our editorial team collects and standardizes pricing, calorie data, and menu availability by sampling live menus from franchise locations across the United States. Because franchise owners set their own pricing, the prices displayed here are averages and estimates. We re-verify our data periodically to capture major menu updates and structural changes to deals like the <Link href="/specials-and-deals">specials menu</Link>. Prices verified 2026.
      </p>
    </section>
  );
}
