import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FullMenu from '@/components/FullMenu';
import { menuData } from '@/data/menu';
import { categoryStats, formatPriceRange, formatCalorieRange, pricesFrom } from '@/data/menuStats';
import { PRICES_LAST_VERIFIED } from '@/data/site';
import styles from './page.module.css';

// Dated facts checked September 2026: O-M-Cheese-adilla Burger and O-M-Cheese Chicken Nachos
// launched Aug 31, 2026 (Business Wire); Spooky Sips through Nov 15, 2026; National Cheeseburger
// Day $8.99 on Sept 18, 2026; Dine Brands Q2 2026 restaurant count. Veterans Day 2026 offer not yet
// announced. Update this page when it is.
// Every price range and "cheapest" figure below is computed from data/menu.ts, so it can't drift.

const money = (n: number) => `$${n.toFixed(2)}`;
const checked = new Date(PRICES_LAST_VERIFIED).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const ITEM_COUNT = menuData.reduce((n, c) => n + c.items.length, 0);
const CATEGORY_COUNT = menuData.length;

const ENTREE_SLUGS = [
  'really-big-meal-deal',
  'handcrafted-burgers',
  'chicken',
  'pasta',
  'seafood',
  'steaks-and-ribs',
  'salads',
  'irresist-a-bowls',
  'sandwiches-and-more',
  'skillets',
];

// Entrées with a single menu price. Anything under $8 in these categories is a side salad, not a meal.
const entrees = menuData
  .filter((c) => ENTREE_SLUGS.includes(c.slug))
  .flatMap((c) =>
    c.items.map((item) => ({
      name: item.name,
      calories: item.calories,
      category: c.title,
      slug: c.slug,
      price: Math.min(...(pricesFrom(item.price).length ? pricesFrom(item.price) : [Infinity])),
    })),
  )
  .filter((e) => Number.isFinite(e.price) && e.price >= 8);

const cheapestEntrees = [...entrees].sort((a, b) => a.price - b.price).slice(0, 8);
const entreeMin = Math.min(...entrees.map((e) => e.price));
const entreeMax = Math.max(...entrees.map((e) => e.price));

const burgers = categoryStats('handcrafted-burgers')!.price!;
const fountain = categoryStats('non-alcoholic-beverages')!.price!;
const burgerMealLow = burgers.min + fountain.min;
const burgerMealHigh = burgers.max + 2.99; // highest fountain drink price

const categoryRows = menuData.map((c) => {
  const stats = categoryStats(c.slug)!;
  return {
    slug: c.slug,
    title: c.title,
    items: stats.items,
    price: formatPriceRange(stats.price),
    calories: formatCalorieRange(stats.calories),
  };
});

const TITLE = "Applebee's Menu With Prices, Pictures & Calories 2026";
const DESCRIPTION = `The full Applebee's restaurant menu with prices and calories for 2026: price ranges for every category, the cheapest entrées, the deals worth using and what's new this fall.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://applebees-menus.us/menu',
  },
  openGraph: {
    siteName: 'Applebees Menu Guide',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og/og-home.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-home.webp'],
  },
};

const faqData = [
  {
    question: "How much is the Applebee's menu in 2026?",
    answer: `Applebee's entrées cost ${money(entreeMin)} to ${money(entreeMax)}. Burgers are ${formatPriceRange(categoryStats('handcrafted-burgers')!.price)}, steaks and ribs ${formatPriceRange(categoryStats('steaks-and-ribs')!.price)}, appetizers ${formatPriceRange(categoryStats('appetizers')!.price)} and kids meals ${formatPriceRange(categoryStats('kids-menu')!.price)}. Each restaurant sets its own prices, so treat these as a close guide.`,
  },
  {
    question: "What's on the Applebee's full menu?",
    answer: `Appetizers, burgers, steaks and ribs, chicken, pasta, seafood, salads, bowls, sandwiches, sides, desserts, kids meals, cocktails and non-alcoholic drinks, plus the 2 for $25 and the $9.99 Really BIG Meal Deal.`,
  },
  {
    question: "What is the cheapest thing on the Applebee's menu?",
    answer: `A fountain drink or iced tea at ${money(fountain.min)}. The cheapest full meal is the ${money(9.99)} Really BIG Meal Deal, which includes a burger or chicken sandwich, fries and a fountain drink.`,
  },
  {
    question: 'How much does it cost to eat at Applebee\'s?',
    answer: `A burger and a fountain drink come to about ${money(burgerMealLow)} to ${money(burgerMealHigh)} per person before tax and tip. On the 2 for $25 it's $12.50 each without drinks, and the Really BIG Meal Deal is $9.99 with a drink.`,
  },
  {
    question: "What is on Applebee's 2 for $25 menu with prices?",
    answer:
      "One appetizer, or two side salads, plus two full-size entrées for $25. Entrées include the new O-M-Cheese-adilla Burger, Grilled Cheese Cheeseburger, Chicken Parmesan Fettuccine, Fiesta Lime Chicken and Bourbon Street Chicken & Shrimp. Drinks aren't included.",
  },
  {
    question: "What's new on the Applebee's menu?",
    answer:
      "The O-M-Cheese-adilla Burger and O-M-Cheese Chicken Nachos both launched on August 31, 2026. The burger is on the 2 for $25 and is dine-in only. Through November 15, 2026 there are also $6 Spooky Sips cocktails.",
  },
  {
    question: "Does Applebee's have a Veterans Day menu in 2026?",
    answer:
      "Applebee's has offered veterans and active-duty military a free meal from a special menu on Veterans Day for years. As of September 2026 it hasn't announced the 2026 offer. We'll add the menu when it does.",
  },
  {
    question: "How many calories are on the Applebee's menu?",
    answer:
      "From 100 calories for Steamed Broccoli to 2,200 for The Classic Combo appetizer platter. Most entrées with their sides land between 760 and 1,680 calories.",
  },
  {
    question: "What's the healthiest thing on the Applebee's menu?",
    answer:
      "For an entrée, the 8 oz. Top Sirloin: 55g of protein for 830 calories. Order it with Steamed Broccoli (100 calories) instead of a starchy side.",
  },
  {
    question: "Are Applebee's prices the same at every location?",
    answer:
      "No. Most Applebee's are run by local franchise owners who set their own prices, so the same burger can cost a dollar or two more in a big city.",
  },
  {
    question: "Is there an Applebee's menu PDF?",
    answer:
      "Yes. You can download printable PDFs of the full menu with prices, nutrition and allergens, catering, and drinks. They're our own printable versions, not official Applebee's documents.",
  },
];

const menuHighlights = [
  { metric: 'Highest calorie', item: 'The Classic Combo (appetizer)', figure: '2,200 cal' },
  { metric: 'Lowest calorie', item: 'Steamed Broccoli', figure: '100 cal' },
  { metric: 'Highest protein', item: 'Three-Cheese Chicken Penne', figure: '77g' },
  { metric: 'Most protein for the calories', item: '8 oz. Top Sirloin', figure: '55g / 830 cal' },
  { metric: 'Highest sodium', item: 'Boneless Wings (Classic Hot Buffalo)', figure: '4,720mg' },
  { metric: 'Lowest sodium entrée', item: 'Double-Glazed Baby Back Ribs', figure: '1,300mg' },
  { metric: 'Highest sugar', item: 'Triple Chocolate Meltdown', figure: '87g' },
  { metric: 'Most expensive', item: 'Ribeye Steak (12 oz.)', figure: '$23.99' },
];

export default function MenuPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://applebees-menus.us/menu#webpage',
        url: 'https://applebees-menus.us/menu',
        name: TITLE,
        description: DESCRIPTION,
        dateModified: PRICES_LAST_VERIFIED,
        publisher: { '@id': 'https://applebees-menus.us/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://applebees-menus.us/menu#items',
        name: "Applebee's menu items with prices and calories",
        numberOfItems: ITEM_COUNT,
        itemListElement: menuData
          .flatMap((category) => category.items)
          .map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
          })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://applebees-menus.us/menu/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://applebees-menus.us/' },
          { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://applebees-menus.us/menu' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://applebees-menus.us/menu/#faq',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Menu', href: '/menu' }]} />

      <section className={styles.hero}>
        <h1>Applebee&apos;s Menu With Prices, Pictures and Calories (2026)</h1>
        <div className={styles.answerBlock}>
          <p>
            Entrées at Applebee&apos;s cost{' '}
            {money(entreeMin)} to {money(entreeMax)}, appetizers {formatPriceRange(categoryStats('appetizers')!.price)},
            and the cheapest full meal is the $9.99 Really BIG Meal Deal with a drink included. Calories run from
            100 for Steamed Broccoli to 2,200 for The Classic Combo. Every item is below with a picture, its price and its calorie count.
          </p>
        </div>
        <p className={styles.locationNotice}>
          Updated {checked}. Each Applebee&apos;s sets its own prices, so check your{' '}
          <Link href="/locations">local restaurant</Link> for exact prices.
        </p>
      </section>

      <div className={styles.contentContainer}>
        <section className={styles.contentSection} id="prices-by-category">
          <h2>Applebee&apos;s Menu Prices by Category</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              Price and calorie ranges for every section of the Applebee&apos;s restaurant menu. Tap a category for
              every item in it.
            </p>
          </div>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.highlightsTable}>
                <caption className="sr-only">Applebee&apos;s menu price and calorie ranges by category, 2026</caption>
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Price range</th>
                    <th scope="col">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryRows.map((row) => (
                    <tr key={row.slug}>
                      <td className={styles.metricCell}>
                        <Link href={`/menu/${row.slug}`}>{row.title}</Link>
                      </td>
                      <td className={styles.figureCell}>{row.price}</td>
                      <td>{row.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.contentSection} id="specials">
          <h2>Applebee&apos;s Menu Specials Today</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              The 2 for $25, the $9.99 Really BIG Meal Deal and half price apps run every day. The rest
              have a date on them this fall.
            </p>
          </div>

          <div className={styles.specialsGrid}>
            <article className={styles.specialCard}>
              <h3>2 for $25</h3>
              <p>
                One appetizer, or two side salads, plus two full-size entrées. The new O-M-Cheese-adilla Burger is on
                it, dine-in only.
              </p>
              <Link href="/menu/2-for-25">See the entrées &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>Half Price Apps</h3>
              <p>3:00–6:00 PM and 9:00 PM to close, dine-in. Mozzarella Sticks come to $5.00.</p>
              <Link href="/happy-hour">Happy hour times &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>Really BIG Meal Deal</h3>
              <p>$9.99 for a burger or chicken sandwich, fries and a fountain drink.</p>
              <Link href="/menu/really-big-meal-deal">The three entrées &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>$8.99 Cheeseburger Day</h3>
              <p>September 18, 2026 only: a Classic Burger or Cheeseburger with fries, dine-in or To Go.</p>
              <Link href="/specials-and-deals#cheeseburger-day">Deal details &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>$6 Spooky Sips</h3>
              <p>Tipsy Zombie and Dracula&apos;s Juice cocktails through November 15, 2026. $4 mocktail too.</p>
              <Link href="/specials-and-deals#spooky-sips">The drinks &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>All You Can Eat</h3>
              <p>$15.99 for Boneless Wings, Riblets and shrimp with endless fries. A summer 2026 deal, so call first.</p>
              <Link href="/specials-and-deals#all-you-can-eat">Is it running? &rarr;</Link>
            </article>
          </div>
        </section>

        <section className={styles.contentSection} id="cheapest">
          <h2>Cheapest Entrées on the Applebee&apos;s Menu</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              The cheapest entrée is the {cheapestEntrees[0].name} at {money(cheapestEntrees[0].price)}, on the
              Really BIG Meal Deal. From the regular menu, entrées start at{' '}
              {money(cheapestEntrees.find((e) => e.slug !== 'really-big-meal-deal')!.price)}.
            </p>
          </div>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.highlightsTable}>
                <caption className="sr-only">The cheapest entrées at Applebee&apos;s</caption>
                <thead>
                  <tr>
                    <th scope="col">Entrée</th>
                    <th scope="col">Price</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {cheapestEntrees.map((e) => (
                    <tr key={`${e.slug}-${e.name}`}>
                      <td className={styles.metricCell}>{e.name}</td>
                      <td className={styles.figureCell}>{money(e.price)}</td>
                      <td>{e.calories}</td>
                      <td>
                        <Link href={`/menu/${e.slug}`}>{e.category}</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3>How Much Does a Meal at Applebee&apos;s Cost?</h3>
          <p className={styles.textParagraph}>
            A burger and a fountain drink come to {money(burgerMealLow)} to {money(burgerMealHigh)} before tax and tip.
            Two people on the <Link href="/menu/2-for-25">2 for $25</Link> pay $12.50 each for a shared starter and an
            entrée, plus drinks. Eating alone, the <Link href="/menu/really-big-meal-deal">Really BIG Meal Deal</Link>{' '}
            gets you an entrée, fries and a drink for $9.99, the lowest price for a full meal on the menu.
          </p>
        </section>
        <section className={styles.contentSection} id="before-you-order">
          <h2>What to Know Before You Order at Applebee&apos;s</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              The best-liked dishes are the Bourbon Street Chicken &amp; Shrimp, the Grilled Cheese Cheeseburger, the
              Quesadilla Burger and Boneless Wings. The most hit-and-miss are the Riblets, the Spinach &amp; Artichoke
              Dip and anything fried that sits too long.
            </p>
          </div>
          <ul className={styles.infoList}>
            <li>
              <strong>Best entrée: Bourbon Street Chicken &amp; Shrimp.</strong> Charred Cajun chicken and shrimp on a
              sizzling skillet, with garlic butter and potatoes that soak it all up. It eats like a steakhouse plate.
            </li>
            <li>
              <strong>Best burger: the Grilled Cheese Cheeseburger.</strong> Four slices of American on toasted potato
              bread, with tomato basil soup for dipping.
            </li>
            <li>
              <strong>Best pasta: Chicken Parmesan Fettuccine.</strong> Thick noodles and crispy chicken, and it reheats
              better than almost anything else on the menu.
            </li>
            <li>
              <strong>Steak: speak up about doneness.</strong> The Top Sirloin can come out tougher and more done than
              you asked for. Order it a notch rarer than usual, and send it back if it&apos;s overcooked.
            </li>
            <li>
              <strong>Blackened Cajun Salmon: ask for more seasoning.</strong> It can taste plain. Extra Cajun
              seasoning or a sauce on the side fixes it.
            </li>
            <li>
              <strong>Riblets are mostly bone.</strong> Good sauce, not much meat. For ribs you can really eat, get
              the Double-Glazed Baby Back Ribs.
            </li>
            <li>
              <strong>Fried food is table food.</strong> Onion rings, wonton tacos and fries go soggy fast. Eat them
              hot, and pick grilled dishes or pasta for To Go.
            </li>
            <li>
              <strong>Triple Chocolate Meltdown: dig in right away.</strong> The ice cream melts into the warm cake
              within minutes.
            </li>
          </ul>
        </section>
      </div>

      <FullMenu />

      <div className={styles.contentContainer}>
        <section className={styles.contentSection} id="highlights">
          <h2>Applebee&apos;s Menu at a Glance</h2>
          <p className={styles.textParagraph}>The extremes across the menu, in one table:</p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.highlightsTable}>
                <caption className="sr-only">Applebee&apos;s menu extremes by calories, protein, sodium and price</caption>
                <thead>
                  <tr>
                    <th scope="col">Measure</th>
                    <th scope="col">Item</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {menuHighlights.map((row) => (
                    <tr key={row.metric}>
                      <td className={styles.metricCell}>{row.metric}</td>
                      <td>{row.item}</td>
                      <td className={styles.figureCell}>{row.figure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className={styles.textParagraph}>
            Two things in that table surprise people. The heaviest thing you can order is a shared appetizer, not a
            burger or steak. And the most protein isn&apos;t in a steak either. It&apos;s the Three-Cheese Chicken Penne,
            at 77g. Full nutrition is in the <Link href="/nutrition">nutrition guide</Link>, and allergens are on the{' '}
            <Link href="/allergen-menu">allergen menu</Link>.
          </p>
        </section>

        <section className={styles.contentSection} id="seasonal-updates">
          <h2>What&apos;s New on the Applebee&apos;s Menu for Fall 2026</h2>
          <ul className={styles.infoList}>
            <li>
              <strong>O-M-Cheese-adilla Burger:</strong> the Quesadilla Burger, with bacon and Pepper Jack, served
              sizzling in a skillet of molten queso and Cheddar with tortilla chips, pico and cilantro. On the 2 for
              $25, dine-in only, since August 31, 2026.
            </li>
            <li>
              <strong>O-M-Cheese Chicken Nachos:</strong> a new appetizer on the same cheese theme, also since August 31.
            </li>
            <li>
              <strong>Earlier in 2026:</strong> the Grilled Cheese Cheeseburger and Chicken Parmesan Fettuccine joined
              the 2 for $25, and Crispy Pickle Fries joined the Ultimate Trio.
            </li>
          </ul>
          <p className={styles.textParagraph}>
            What&apos;s running and what&apos;s ended, with dates: <Link href="/menu/new-items">new menu items</Link>.
          </p>
        </section>

        <section className={styles.contentSection} id="veterans-day">
          <h2>Applebee&apos;s Veterans Day Menu 2026</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              Applebee&apos;s has given veterans and active-duty service members a free meal from a special Veterans
              Day menu on November 11 for years. It hasn&apos;t announced the 2026 menu yet.
            </p>
          </div>
          <p className={styles.textParagraph}>
            In past years the free meal came from a short list of entrées, was dine-in only, and needed proof of
            service such as a military ID or discharge papers. Don&apos;t assume the same rules for 2026. We&apos;ll add
            the menu here as soon as Applebee&apos;s posts it, usually in late October or early November.
          </p>
        </section>

        <section className={styles.contentSection} id="ordering">
          <h2>How to Order From the Applebee&apos;s Menu</h2>
          <div className={styles.orderingGrid}>
            <article className={styles.orderingCard}>
              <h3>Dine-in</h3>
              <p>The only way to get half price apps and the O-M-Cheese-adilla Burger.</p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Carside To Go</h3>
              <p>
                Order on the app or site, park in a Carside spot, and staff bring it out. Restaurant prices, no
                delivery fee. See <Link href="/takeout">takeout</Link>.
              </p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Delivery</h3>
              <p>
                The Applebee&apos;s app delivers from your local restaurant&apos;s menu. DoorDash and Uber Eats set their
                own prices and add fees. See <Link href="/delivery">delivery</Link>.
              </p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Catering</h3>
              <p>
                Party platters for groups. See <Link href="/catering">catering</Link>.
              </p>
            </article>
          </div>
        </section>
      </div>

      <section className={styles.pdfSection} id="downloads">
        <h2>Applebee&apos;s Menu PDF Downloads</h2>
        <p className={styles.pdfSubtitle}>
          Printable copies of our menu tables to keep on hand. They&apos;re our own versions, not official Applebee&apos;s documents.
        </p>

        <div className={styles.pdfGrid}>
          <a href="/pdfs/applebees-full-menu-with-prices.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>PDF</div>
            <div className={styles.pdfInfo}>
              <strong>Full Menu with Prices</strong>
              <span>Every category, with prices and calories</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-nutrition-and-allergen-guide.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>PDF</div>
            <div className={styles.pdfInfo}>
              <strong>Nutrition &amp; Allergen Guide</strong>
              <span>Calories, macros, sodium and allergens</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-catering-party-platters-menu.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>PDF</div>
            <div className={styles.pdfInfo}>
              <strong>Catering &amp; Party Platters</strong>
              <span>Platter planning for groups</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-drinks-cocktails-happy-hour-menu.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>PDF</div>
            <div className={styles.pdfInfo}>
              <strong>Drinks &amp; Happy Hour</strong>
              <span>Cocktails, fountain drinks and happy hour</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>
        </div>
      </section>

      <section className={styles.faqSection} id="faq">
        <h2>Applebee&apos;s Menu FAQs</h2>
        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <article key={faq.question} className={styles.faqCard}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
