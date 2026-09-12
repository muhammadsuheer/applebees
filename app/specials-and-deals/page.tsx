import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { PRICES_LAST_VERIFIED } from '@/data/site';
import styles from './page.module.css';

// Checked September 2026:
//  - 2 for $25: one appetizer (or two side salads) + two entrées. O-M-Cheese-adilla Burger added
//    Aug 31, 2026, dine-in only (Business Wire).
//  - Really BIG Meal Deal $9.99 since Nov 2024, still $9.99 Aug 2026.
//  - Half price apps: 3–6pm & 9pm–close, dine-in (Applebee's restaurant listing).
//  - National Cheeseburger Day: $8.99 Classic Burger/Cheeseburger + fries, 9/18/26 only,
//    dine-in or To Go via app/site (RestaurantNews.com, Sept 10, 2026).
//  - Spooky Sips: $6 cocktails, $4 mocktail through 11/15/26 (applebees.com).
//  - All You Can Eat: $15.99, announced May 11, 2026, summer limited time, dine-in (applebees.com news).
// Remove or update a row the day a deal ends.

export const metadata: Metadata = {
  title: "Applebee's Specials & Deals 2026: 2 for $25, $9.99 Meal Deal & Happy Hour",
  description:
    "Every Applebee's deal running in fall 2026 with prices and end dates: 2 for $25, the $9.99 Really BIG Meal Deal, half price apps, $6 Spooky Sips and the $8.99 Cheeseburger Day deal.",
  alternates: {
    canonical: 'https://applebees-menus.us/specials-and-deals',
  },
  openGraph: {
    siteName: 'Menu Almanac',
    images: [{ url: '/og/og-specials.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-specials.webp'],
  },
};

const deals = [
  { name: '2 for $25', price: '$25', when: 'Any time', how: 'Dine-in and To Go', ends: 'Ongoing', link: '/menu/2-for-25' },
  { name: 'Really BIG Meal Deal', price: '$9.99', when: 'Any time', how: 'Dine-in (refills) and To Go', ends: 'Ongoing promotion', link: '/menu/really-big-meal-deal' },
  { name: 'Half price apps', price: '50% off', when: '3–6 PM, 9 PM–close', how: 'Dine-in only', ends: 'Ongoing', link: '/happy-hour' },
  { name: 'National Cheeseburger Day', price: '$8.99', when: 'Sept 18, 2026', how: 'Dine-in, or To Go on app/site', ends: 'One day', link: '#cheeseburger-day' },
  { name: 'Spooky Sips', price: '$6 cocktails, $4 mocktail', when: 'Any time', how: 'Where alcohol is served', ends: 'Nov 15, 2026', link: '#spooky-sips' },
  { name: 'All You Can Eat', price: '$15.99', when: 'Summer 2026', how: 'Dine-in only', ends: 'Limited time', link: '#all-you-can-eat' },
];

const faqData = [
  {
    question: "What specials does Applebee's have today?",
    answer:
      "The 2 for $25, the $9.99 Really BIG Meal Deal, and half price appetizers from 3:00 to 6:00 PM and 9:00 PM to close run every day. Through November 15, 2026 there are also $6 Spooky Sips cocktails. On September 18, 2026 only, a Classic Burger or Classic Cheeseburger with fries is $8.99.",
  },
  {
    question: "What's included in Applebee's 2 for $25?",
    answer:
      "One appetizer, or two side salads instead, plus two full-size entrées for $25. Drinks, dessert, tax and tip aren't included.",
  },
  {
    question: "Does Applebee's still have 2 for $20?",
    answer:
      "No. The deal used to be 2 for $20 and is now 2 for $25. Applebee's isn't running a national 2 for $20 in 2026.",
  },
  {
    question: "What is the cheapest meal at Applebee's?",
    answer:
      "The Really BIG Meal Deal at $9.99 for a burger or chicken sandwich, fries and a fountain drink. On September 18, 2026, the $8.99 Cheeseburger Day deal is a dollar cheaper but doesn't include a drink.",
  },
  {
    question: "Is Applebee's All You Can Eat still going?",
    answer:
      "It came back in May 2026 as a summer deal at $15.99 for unlimited Boneless Wings, Riblets and Double Crunch Shrimp with endless fries. It's a limited-time offer, so call your restaurant before you go.",
  },
  {
    question: "What's the National Cheeseburger Day deal at Applebee's?",
    answer:
      "On September 18, 2026 only, a Classic Burger or Classic Cheeseburger with fries costs $8.99. It's good for dine-in, or To Go when you order through the Applebee's app or website.",
  },
  {
    question: "Why is the 2 for $25 more expensive at my Applebee's?",
    answer:
      "Franchisees set their own prices. Franchise owners ran 1,439 of the 1,557 Applebee's at the end of June 2026, and a restaurant in a high-rent city can price the deal above $25.",
  },
  {
    question: 'Which Applebee\'s deal is best for two people?',
    answer:
      "Two Really BIG Meal Deals at $19.98 if neither of you wants an appetizer, since drinks are included. The 2 for $25 if you want a starter or an entrée that isn't a sandwich.",
  },
];

export default function SpecialsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://applebees-menus.us/specials-and-deals/#webpage',
        url: 'https://applebees-menus.us/specials-and-deals',
        name: "Applebee's Specials & Deals 2026",
        description:
          "Every Applebee's deal running in fall 2026 with prices, times and end dates.",
        dateModified: PRICES_LAST_VERIFIED,
        publisher: { '@id': 'https://applebees-menus.us/#organization' },
        breadcrumb: { '@id': 'https://applebees-menus.us/specials-and-deals/#breadcrumb' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://applebees-menus.us/specials-and-deals/#faq',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://applebees-menus.us/specials-and-deals/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://applebees-menus.us/' },
          { '@type': 'ListItem', position: 2, name: 'Specials & Deals', item: 'https://applebees-menus.us/specials-and-deals' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Specials & Deals', href: '/specials-and-deals' }]} />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="deals-title">
          <h1 id="deals-title">Applebee&apos;s Specials and Deals Today</h1>
          <p className={styles.heroLead}>
            Six Applebee&apos;s deals are worth knowing about this fall. Three run every day: the 2 for
            $25, the $9.99 Really BIG Meal Deal and half price apps. Three have an end date: $6 Spooky
            Sips until November 15, a one-day $8.99 burger on September 18, and All You Can Eat, which
            ran as a summer deal.
          </p>
          <p className={styles.heroSub}>
            For one person, the best of them is the Really BIG Meal Deal. For two, it depends on one
            question: do you want an appetizer?
          </p>
        </section>

        <section className={styles.clusterSection} id="all-deals">
          <h2>Every Applebee&apos;s Deal Running Now</h2>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <caption className="sr-only">Applebee&apos;s deals with prices, times and end dates</caption>
                <thead>
                  <tr>
                    <th scope="col">Deal</th>
                    <th scope="col">Price</th>
                    <th scope="col">When</th>
                    <th scope="col">How</th>
                    <th scope="col">Ends</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.map((d) => (
                    <tr key={d.name}>
                      <td data-label="Deal">
                        <strong>
                          {d.link.startsWith('#') ? <a href={d.link}>{d.name}</a> : <Link href={d.link}>{d.name}</Link>}
                        </strong>
                      </td>
                      <td data-label="Price">{d.price}</td>
                      <td data-label="When">{d.when}</td>
                      <td data-label="How">{d.how}</td>
                      <td data-label="Ends">{d.ends}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p>
            Every deal on this list is &quot;price and participation may vary.&quot; Franchisees can
            charge more or skip a promotion. A 30-second call to your{' '}
            <Link href="/locations">nearest Applebee&apos;s</Link> beats showing up for a deal that
            isn&apos;t running there.
          </p>
        </section>

        <section className={styles.clusterSection} id="2-for-25">
          <h2>Applebee&apos;s 2 for $25</h2>
          <div className={styles.answerBlock}>
            <p>
              One appetizer and two full-size entrées for $25. You can swap the appetizer for two side
              salads. Drinks and dessert cost extra.
            </p>
          </div>
          <p>
            The newest entrée is the O-M-Cheese-adilla Burger, added August 31, 2026: the Quesadilla
            Burger served in a skillet of molten queso and Cheddar with tortilla chips. It&apos;s
            dine-in only. Other entrées on the deal include the Grilled Cheese Cheeseburger, Chicken
            Parmesan Fettuccine, California Grilled Chicken Salad and Fiesta Lime Chicken.
          </p>
          <p>
            The saving is real. Spinach &amp; Artichoke Dip ($10.49), a Classic Bacon Cheeseburger
            ($14.49) and Fiesta Lime Chicken ($16.49) come to $41.47 off the regular menu. On the deal
            it&apos;s $25.00, a $16.47 saving. Every entrée choice, calorie counts and the lightest way
            to order it are on the <Link href="/menu/2-for-25">2 for $25 page</Link>.
          </p>
          <p>
            About the old 2 for $20: it&apos;s gone. The deal is $25 now, and there&apos;s no national
            2 for $20 running in 2026.
          </p>
        </section>

        <section className={styles.clusterSection} id="really-big-meal-deal">
          <h2>The $9.99 Really BIG Meal Deal</h2>
          <p>
            A Big Cluckin&apos; Chicken Sandwich, BIG Classic Bacon Cheeseburger or Big Bangin&apos;
            Burger, with Classic Fries and a fountain drink, for $9.99. Dine in and the fries and drink
            refill.
          </p>
          <p>
            It&apos;s the cheapest full meal on the menu. The regular Classic Bacon Cheeseburger with a
            drink runs $16.78 to $17.48. And for two people who don&apos;t want a starter, two of these
            cost $19.98 with drinks, which beats the 2 for $25 by $5.02 before you&apos;ve even ordered
            a soda. <Link href="/menu/really-big-meal-deal">See all three entrées</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="half-price-apps">
          <h2>Half Price Apps</h2>
          <p>
            3:00 to 6:00 PM and 9:00 PM to close, dine-in only. That puts Mozzarella Sticks at $5.00, a
            Chicken Quesadilla at $6.00 and Boneless Wings at $6.50. The Chicken Quesadilla is the best
            of them, with 49g of protein for $6.00.
          </p>
          <p>
            Two half price apps split between two people cost about $11, less than half a 2 for $25.
            If you&apos;re not hungry enough for entrées, that&apos;s the cheapest way to eat at
            Applebee&apos;s. Times, the full list and which states ban the drink side are on the{' '}
            <Link href="/happy-hour">happy hour page</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="cheeseburger-day">
          <h2>National Cheeseburger Day: $8.99 on September 18</h2>
          <p>
            For one day, Friday, September 18, 2026, a Classic Burger or Classic Cheeseburger with fries
            costs $8.99. You can eat in, or order To Go, but To Go has to go through the Applebee&apos;s
            app or website.
          </p>
          <p>
            It&apos;s a dollar cheaper than the Really BIG Meal Deal and doesn&apos;t include a drink.
            If you&apos;d buy a $2.29 soda anyway, the $9.99 deal is still the better value that day.
          </p>
        </section>

        <section className={styles.clusterSection} id="spooky-sips">
          <h2>$6 Spooky Sips Halloween Drinks</h2>
          <p>
            Through November 15, 2026, two cocktails are $6: the Tipsy Zombie, with Bacardí Superior
            rum, passion fruit, pineapple, cherry and lime, and Dracula&apos;s Juice, with Bacardí,
            Cuervo Tradicional Blanco and prickly pear. This is the first year with a booze-free
            option, the $4 Tropical Spell Mocktail, and there&apos;s a Graveyard Dirty Soda topped with
            OREO cookie crumbles.
          </p>
          <p>
            A regular signature cocktail costs $9.99 to $11.99, so the $6 price saves $4 to $6 a drink.
            More on the <Link href="/menu/signature-cocktails">cocktail menu</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="all-you-can-eat">
          <h2>Applebee&apos;s All You Can Eat</h2>
          <p>
            Applebee&apos;s brought All You Can Eat back on May 11, 2026: unlimited Boneless Wings,
            Riblets and Double Crunch Shrimp with endless fries for $15.99, dine-in only. It was
            announced as a summer deal, and we haven&apos;t seen an end date, so call before you plan a
            night around it.
          </p>
          <p>
            If it&apos;s running, order the Riblets or shrimp first. The fries fill you up fastest, and
            they&apos;re the cheapest thing on the plate.
          </p>
        </section>

        <section className={styles.clusterSection} id="more-ways-to-save">
          <h2>More Ways to Save at Applebee&apos;s</h2>
          <div className={styles.valueTipsGrid}>
            <div className={styles.valueTipCard}>
              <h3>Order To Go through the app</h3>
              <p>
                DoorDash and Uber Eats set their own item prices and add fees. Carside To Go through the
                Applebee&apos;s app charges restaurant prices with no delivery fee. See{' '}
                <Link href="/takeout">takeout</Link>.
              </p>
            </div>
            <div className={styles.valueTipCard}>
              <h3>Join the email club</h3>
              <p>
                Club Applebee&apos;s is free and sends offers by email. We don&apos;t quote the birthday
                reward, because its terms vary by restaurant and change from year to year.
              </p>
            </div>
            <div className={styles.valueTipCard}>
              <h3>Buy discounted gift cards</h3>
              <p>
                Gift cards count as payment, not a coupon, so they work on deals. When a warehouse club
                sells them below face value, that discount stacks on top of the 2 for $25. See{' '}
                <Link href="/gift-card-deals">gift cards</Link>.
              </p>
            </div>
            <div className={styles.valueTipCard}>
              <h3>Swap the drink</h3>
              <p>
                A fountain drink costs $2.29 to $2.99. Water on a 2 for $25 for two saves up to $5.98,
                which is most of what the Really BIG Meal Deal saves you.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.clusterSection} id="lunch-specials">
          <h2>Applebee&apos;s Lunch Specials</h2>
          <p>
            We couldn&apos;t find a national Applebee&apos;s lunch menu with a set price for 2026.
            Where lunch combos exist, the franchisee runs them, and they rarely show up online. At
            lunch, the cheapest full meal you can count on is the $9.99 Really BIG Meal Deal. Call your{' '}
            <Link href="/locations">restaurant</Link> to ask about local lunch pricing.
          </p>
        </section>

        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee&apos;s Deals FAQs</h2>
          <div className={styles.faqList}>
            {faqData.map((faq) => (
              <article key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
