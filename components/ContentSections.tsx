import Link from 'next/link';
import styles from './ContentSections.module.css';

export function UniqueSection() {
  return (
    <section className={styles.section} id="what-makes-applebees-unique">
      <h2>What Makes Applebee's Unique?</h2>
      <p>
        Applebee's Neighborhood Grill + Bar is built around one simple idea  good food, real value, and a place that feels like your neighborhood spot. That combination is harder to find in casual dining than most people realize.
      </p>
      <p>
        The <Link href="/menu">menu</Link> strikes a balance that not many chains manage. Classic American comfort food sits alongside bolder, more inventive options, so whether someone wants a straightforward steak or something like the <Link href="/menu/handcrafted-burgers">Quesadilla Burger</Link>, there is a reason to come back.
      </p>
      <p>
        On the value side, the <Link href="/menu/2-for-25"><strong>2 for $25 deal</strong></Link> remains one of the most searched offers in casual dining  one full appetizer, two full entrées, one price. Applebee's <Link href="/happy-hour"><strong>Happy Hour</strong></Link> and <Link href="/specials-and-deals"><strong>Half Price Apps</strong></Link> add another layer for regulars who know when to show up.
      </p>
      <p>
        What keeps the "neighborhood" concept from being just marketing is that many participating locations run their own community specials and regional menu variations. The food and offers can shift depending on where you are, which is worth checking before you visit.
      </p>
    </section>
  );
}

export function HistorySection() {
  return (
    <section className={styles.section} id="applebees-history">
      <h2>Applebee's Growth & History</h2>
      <p>
        Founded in 1980 in Decatur, Georgia, by Bill and T.J. Palmer, Applebee's was originally named "T.J. Applebee's Rx for Edibles & Elixirs." The goal was simple: create a restaurant that felt like a friendly neighborhood pub but offered high-quality food in a family-friendly setting.
      </p>
      <p>
        Over the decades, the <Link href="/menu">Applebee's menu</Link> has evolved significantly  adapting to changing tastes by adding lighter fare, diverse salads, and globally inspired entrées, all while holding on to their core identity as America's kitchen table. Today, with nearly 1,600 locations, it remains one of the largest casual dining chains in the world.
      </p>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className={styles.section} id="the-applebees-experience">
      <h2>The Applebee's Dining Experience</h2>
      <p>
        Dining at Applebee's is about more than just a meal. The atmosphere is deliberately warm, relaxed, and designed to fit whatever kind of visit you are having. Whether you are catching a game at the bar with <Link href="/specials-and-deals">late-night half-price appetizers</Link>, or settling into a booth for a family dinner, the setting adjusts to you.
      </p>
      <p>
        The <Link href="/menu">menu</Link> covers enough ground to satisfy everyone  from kids ordering off the <Link href="/menu/kids-menu">Kids Menu</Link> to health-conscious diners choosing something lighter like the <Link href="/menu/seafood">Blackened Cajun Salmon</Link>. That range is one of the reasons regulars keep returning.
      </p>
    </section>
  );
} export function HowToOrderSection() {
  return (
    <section className={styles.section} id="how-to-order-at-applebees">
      <h2>How to Order at Applebee's</h2>
      <p>
        Applebee's gives you a few different ways to get your food  dine-in, <Link href="/takeout">Carside To Go</Link>, and <Link href="/delivery">delivery</Link>. Here is how each one works so you can pick what fits your situation.
      </p>

      <h3>Dine-In</h3>
      <p>
        Walk in, get seated, and order with your server. Most locations also have in-table tablets if you want to add drinks or dessert without flagging someone down. You get access to the <Link href="/menu">full menu</Link>, including current deals like the <Link href="/menu/2-for-25">2 for $25</Link>.
      </p>

      <h3>Carside To Go</h3>
      <p>
        Order ahead by phone or online, then pull up to the designated spots outside. A team member brings your food to the car  no parking, no waiting inside. Good option if you are picking up during a busy window or just want to skip the dining room.
      </p>

      <h3>Takeout</h3>
      <p>
        Takeout works at all participating locations. You can order from the <Link href="/menu">full menu</Link>  appetizers, burgers, steaks, pasta, drinks  and pick it up inside. Value deals like the <Link href="/menu/really-big-meal-deal">Really BIG Meal Deal</Link> and <Link href="/menu/2-for-25">2 for $25</Link> are available for takeout at most restaurants.
      </p>

      <h3>Delivery</h3>
      <p>
        Delivery is available through the official Applebee's website and app at participating locations, and through select third-party services where available. Ordering through Applebee's directly usually gives you the most accurate prices and avoids extra service fees. Check your <Link href="/locations">nearest location</Link> to see if delivery is offered in your area.
      </p>

      <h3>Ordering Online</h3>
      <p>
        You can place an order online through Applebee's website or app. Browse the <Link href="/menu">menu with current prices</Link>, choose your items, and select pickup or delivery at checkout. Current <Link href="/specials-and-deals">specials</Link> available at your selected restaurant show up during the ordering process.
      </p>
    </section>
  );
}

export function FoodQualitySection() {
  return (
    <section className={styles.section} id="whats-really-in-applebees-food">
      <h2>What's Really in Applebee's Food?</h2>
      <p>
        Applebee's publishes nutritional information across its menu, and we have compiled that data on this page to make it easier to reference. Steaks like the <Link href="/menu/steaks-and-ribs">8 oz. Top Sirloin</Link> are USDA Select and cooked to order. Burgers are made from all-beef patties.
      </p>
      <p>
        Whether you are tracking calories on something indulgent like the <Link href="/menu/desserts">Triple Chocolate Meltdown</Link> or comparing protein in the <Link href="/menu/chicken">Fiesta Lime Chicken</Link>, the calorie and price columns on each category page are there to help you decide before you order.
      </p>
    </section>
  );
}

export function CareersSection() {
  return (
    <section className={styles.section} id="applebees-careers-jobs">
      <h2>Applebee's Careers & Jobs</h2>
      <p>
        As a chain with nearly 1,600 locations, Applebee's is a significant employer in the casual dining industry. Roles span front-of-house positions like servers and bartenders, back-of-house kitchen staff, and restaurant management tracks. The company is known for promoting from within, with many franchise owners and regional managers having started in entry-level positions.
      </p>
      <p>
        If hospitality and working in a neighborhood-focused environment are a draw, the <Link href="/careers">Applebee's careers page</Link> lists current openings by location.
      </p>
    </section>
  );
}

export function ConclusionSection() {
  return (
    <section className={styles.section} id="conclusion">
      <h2>Your Guide to the Applebee's Menu</h2>
      <p>
        From the <Link href="/menu/2-for-25">2 for $25 deal</Link> to the full range of <Link href="/menu/steaks-and-ribs">steaks</Link>, <Link href="/menu/seafood">seafood</Link>, and <Link href="/menu/handcrafted-burgers">handcrafted burgers</Link>, the Applebee's menu covers a wide range of options across different price points and dietary preferences.
      </p>
      <p>
        This guide pulls prices and calorie counts from verified sources and is reviewed for August 2026. Use the <Link href="/menu">full menu page</Link> to browse by category, or check the <Link href="/specials-and-deals">current specials</Link> if you are looking for the best available deal before your next visit. Menu items and prices can vary by location.
      </p>
    </section>
  );
}
