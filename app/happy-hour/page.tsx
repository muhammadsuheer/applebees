import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { PRICES_LAST_VERIFIED } from '@/data/site';
import styles from './page.module.css';

// Sources checked September 2026:
//  - Applebee's restaurant page (3340 S Maryland Pkwy, Las Vegas): "Happy Hour: 3-6pm & 9pm-close.
//    Enjoy a variety of 1/2 price appetizers and more when you dine-in."
//  - Oklahoma Restaurant Association alcohol FAQ, citing 37A O.S. §6-102: happy hour legal,
//    price must stay at least 6% above cost.
//  - Anchorage Daily News (Mar 2024): Alaska's weekly-price rule dates to 1986.
//  - Tasting Table / Fox News: MA 1984, RI 1985, VT 1985, NC 1985, UT 2011; Indiana lifted its ban in 2024.
//  - applebees.com Halloween drinks page: $6 Spooky Sips through 11/15/26.
//  - Business Wire, Aug 31, 2026: O-M-Cheese Chicken Nachos added to the appetizer menu.
// VERIFY each season: which appetizers a franchise excludes. Applebee's publishes no national list.

export const metadata: Metadata = {
  title: "Applebee's Happy Hour Times 2026: Half Price Apps & Drinks",
  description:
    "Applebee's happy hour runs 3–6 PM and 9 PM to close, dine-in only. Half price apps with real prices, the best value pick, and the six states where drink deals are illegal.",
  alternates: {
    canonical: 'https://applebees-menus.us/happy-hour',
  },
  openGraph: {
    siteName: 'Applebees Menu Guide',
    images: [{ url: '/og/og-happy-hour.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-happy-hour.webp'],
  },
};

const apps = [
  { name: 'Chicken Quesadilla', full: 11.99, cal: 1170, protein: 49, sodium: 2590 },
  { name: 'Mozzarella Sticks', full: 9.99, cal: 860, protein: 41, sodium: 2440 },
  { name: 'Boneless Wings (Classic Hot Buffalo)', full: 12.99, cal: 1080, protein: 40, sodium: 4720 },
  { name: 'Brew Pub Pretzels & Beer Cheese Dip', full: 10.99, cal: 1160, protein: 34, sodium: 3540 },
  { name: 'Spinach & Artichoke Dip', full: 10.49, cal: 990, protein: 21, sodium: 2340 },
  { name: 'Chicken Wonton Tacos', full: 11.49, cal: 590, protein: null, sodium: null },
];

const half = (n: number) => Math.round(n * 50) / 100;
const money = (n: number) => `$${n.toFixed(2)}`;

const faqData = [
  {
    question: "What time is Applebee's happy hour?",
    answer:
      "3:00 to 6:00 PM, then again from 9:00 PM until close. That's how Applebee's own restaurant pages list it. It's dine-in only, and a franchise can change the schedule, so call if you're driving across town for it.",
  },
  {
    question: "What time are Applebee's half price appetizers?",
    answer:
      "Same two windows: 3:00 to 6:00 PM and 9:00 PM to close. The half price apps are the happy hour. There isn't a separate time for them.",
  },
  {
    question: "Does Applebee's have late night happy hour?",
    answer:
      "Yes. The late night window starts at 9:00 PM and runs until the restaurant closes. At a location that closes at midnight, that's three hours of half price apps.",
  },
  {
    question: "Does Applebee's have happy hour on weekends?",
    answer:
      "Applebee's lists the same 3–6 PM and 9 PM–close windows without splitting out weekends. Weekends are where franchises most often change things, though, so a Saturday is the day to call ahead.",
  },
  {
    question: 'Which half price appetizer is the best deal?',
    answer:
      'The Chicken Quesadilla. At $6.00 half price you get 49g of protein, which makes it one of the most filling plates for the money. Mozzarella Sticks are just as good a deal at $5.00, but the quesadilla is the bigger plate.',
  },
  {
    question: "Can I get Applebee's half price apps to go?",
    answer:
      "No. Applebee's describes the deal as dine-in. It doesn't apply to Carside To Go, the Applebee's app, DoorDash or Uber Eats.",
  },
  {
    question: "Why doesn't my Applebee's have happy hour drink specials?",
    answer:
      "Your state probably bans them. Massachusetts, Rhode Island, Vermont, North Carolina, Alaska and Utah don't allow time-limited drink discounts. The half price appetizers still run there, because the laws only cover alcohol.",
  },
  {
    question: 'Is happy hour legal in Oklahoma?',
    answer:
      'Yes. Plenty of national lists still say Oklahoma bans it, but bars and restaurants there can run happy hour, as long as the drink price stays at least 6% above cost.',
  },
  {
    question: "Is the Applebee's Dollarita back?",
    answer:
      "Not right now. The $1 Dollarita ran in July 2026 and ended July 31. Through November 15, 2026, the featured drinks are the $6 Spooky Sips: the Tipsy Zombie and Dracula's Juice.",
  },
  {
    question: 'Is the Classic Combo half price during happy hour?',
    answer:
      "Ask before you order it. At $18.99 it's the priciest appetizer, so it's the one restaurants leave off the half price list. If it's excluded, two half price apps cost less than one Classic Combo.",
  },
];

export default function HappyHourPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://applebees-menus.us/happy-hour/#webpage',
        url: 'https://applebees-menus.us/happy-hour',
        name: "Applebee's Happy Hour Times 2026: Half Price Apps & Drinks",
        description:
          "Applebee's happy hour times, half price appetizer prices, drink deals and the states where happy hour drink discounts are illegal.",
        dateModified: PRICES_LAST_VERIFIED,
        publisher: { '@id': 'https://applebees-menus.us/#organization' },
        breadcrumb: { '@id': 'https://applebees-menus.us/happy-hour/#breadcrumb' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://applebees-menus.us/happy-hour/#faq',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://applebees-menus.us/happy-hour/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://applebees-menus.us/' },
          { '@type': 'ListItem', position: 2, name: 'Happy Hour', item: 'https://applebees-menus.us/happy-hour' },
        ],
      },
    ],
  };

  const fullTotal = apps.reduce((n, a) => n + a.full, 0);
  const halfTotal = apps.reduce((n, a) => n + half(a.full), 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Happy Hour', href: '/happy-hour' }]} />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hh-title">
          <h1 id="hh-title">Applebee&apos;s Happy Hour Times and Menu (2026)</h1>
          <p className={styles.heroLead}>
            Applebee&apos;s happy hour runs twice a day: 3:00 to 6:00 PM, and 9:00 PM until close.
            It&apos;s dine-in only. During both windows a set of appetizers drops to half price,
            which puts Mozzarella Sticks at $5.00 and a Chicken Quesadilla at $6.00.
          </p>
          <p className={styles.heroSub}>
            That&apos;s the easy part. Where people get stuck is which apps count, what your bar
            discounts, and whether your state lets it discount drinks at all. Here&apos;s how each of
            those works.
          </p>
        </section>

        <section className={styles.clusterSection} id="happy-hour-times">
          <h2>What Time Is Applebee&apos;s Happy Hour?</h2>

          <div className={styles.tableCard} style={{ maxWidth: '650px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <caption className="sr-only">Applebee&apos;s happy hour windows</caption>
                <thead>
                  <tr>
                    <th scope="col">Window</th>
                    <th scope="col">Time</th>
                    <th scope="col">What&apos;s discounted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Window"><strong>Afternoon</strong></td>
                    <td data-label="Time">3:00 PM – 6:00 PM</td>
                    <td data-label="Discount">Half price apps, local drink deals</td>
                  </tr>
                  <tr>
                    <td data-label="Window"><strong>Late night</strong></td>
                    <td data-label="Time">9:00 PM – close</td>
                    <td data-label="Discount">Half price apps, local drink deals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            If you only care about the food, go at 3:00. The afternoon window lands between lunch
            and dinner, the dining room is close to empty, and your order comes out faster than it
            will at 9:30 on a Friday.
          </p>
          <p>
            Weekends are the one place to check first. Applebee&apos;s lists the same two windows
            every day, but franchisees run their own restaurants, and Saturday afternoon is the slot
            they&apos;re most likely to drop. A two-minute call through the{' '}
            <Link href="/locations">location finder</Link> settles it.
          </p>
        </section>

        <section className={styles.clusterSection} id="late-night-happy-hour">
          <h2>Applebee&apos;s Late Night Happy Hour</h2>
          <p>
            Late night starts at 9:00 PM and ends when the restaurant does. At a location open until
            midnight, that&apos;s a three-hour window. At one that closes at 11:00 PM on a Tuesday,
            it&apos;s two.
          </p>
          <p>
            The catch is the kitchen, not the clock. Kitchens stop taking orders before the doors
            lock, so an order placed at 11:50 PM at a midnight close may not go in. Check{' '}
            <Link href="/operating-hours">operating hours</Link> for your restaurant and order at
            least 30 minutes before close.
          </p>
        </section>

        <section className={styles.clusterSection} id="half-price-apps-list">
          <h2>Applebee&apos;s Happy Hour Menu: Half Price Apps With Prices</h2>

          <div className={styles.answerBlock}>
            <p>
              These appetizers are the heart of the half price deal. Order them all at full price
              and it&apos;s {money(fullTotal)}. At happy hour it&apos;s {money(halfTotal)}.
            </p>
          </div>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <caption className="sr-only">Applebee&apos;s half price appetizers with prices</caption>
                <thead>
                  <tr>
                    <th scope="col">Appetizer</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Regular</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Half price</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {apps.map((a) => (
                    <tr key={a.name}>
                      <td data-label="Appetizer"><strong>{a.name}</strong></td>
                      <td data-label="Regular" style={{ textAlign: 'right' }}>{money(a.full)}</td>
                      <td data-label="Half price" style={{ textAlign: 'right', fontWeight: 700 }}>
                        {money(half(a.full))}
                      </td>
                      <td data-label="Calories" style={{ textAlign: 'right' }}>
                        {a.cal.toLocaleString('en-US')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p>
            Your restaurant&apos;s regular prices should be close to these. Half price is rounded to
            the cent.
          </p>
          <p>
            The one to ask about is The Classic Combo. At $18.99 it&apos;s the most expensive
            appetizer on the menu, and half off would take $9.50 off a single plate, which is why
            restaurants leave platters off the list. Ask before it goes on the ticket. If it&apos;s
            excluded, Mozzarella Sticks and a Chicken Quesadilla together cost $11.00 and beat it on
            protein.
          </p>
          <p>
            New this fall: O-M-Cheese Chicken Nachos joined the appetizer menu on August 31, 2026.
            Applebee&apos;s hasn&apos;t said whether they count toward half price, so that&apos;s
            another one to ask about.
          </p>
        </section>

        <section className={styles.clusterSection} id="best-half-price-app">
          <h2>Which Half Price App Is the Best Deal?</h2>
          <p>
            Order the Chicken Quesadilla. The cheapest plate isn&apos;t always the one that fills you
            up, so it&apos;s worth looking at how much protein each dollar buys you at happy hour
            prices:
          </p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <caption className="sr-only">How much protein each half price app gives you for the money</caption>
                <thead>
                  <tr>
                    <th scope="col">Appetizer</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Protein</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Protein for $1</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  {apps
                    .filter((a) => a.protein !== null)
                    .map((a) => (
                      <tr key={a.name}>
                        <td data-label="Appetizer"><strong>{a.name}</strong></td>
                        <td data-label="Protein" style={{ textAlign: 'right' }}>{a.protein}g</td>
                        <td data-label="Protein for $1" style={{ textAlign: 'right', fontWeight: 700 }}>
                          {((a.protein as number) / half(a.full)).toFixed(1)}g
                        </td>
                        <td data-label="Sodium" style={{ textAlign: 'right' }}>
                          {(a.sodium as number).toLocaleString('en-US')}mg
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <p>
            The quesadilla and the Mozzarella Sticks give you the same protein for your money. The
            quesadilla wins because it&apos;s the bigger plate: 1,170 calories against 860.
            Split between two people, it&apos;s a light dinner for $6.00.
          </p>
          <p>
            Spinach &amp; Artichoke Dip gives you about half as much protein for the money. It
            tastes like a better deal than it is.
          </p>
          <p>
            And watch the Boneless Wings sauce. In Classic Hot Buffalo they carry 4,720mg of sodium,
            more than twice the 2,300mg daily limit the FDA sets for adults. Garlic Parmesan has 180
            more calories and 2,010mg less sodium. If sodium matters to you, pick the sauce before
            you pick the app. The full nutrition breakdown is on the <Link href="/nutrition">nutrition page</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="happy-hour-drinks">
          <h2>Applebee&apos;s Happy Hour Drinks</h2>
          <p>
            Applebee&apos;s restaurant listings say &quot;half price appetizers and more&quot; and stop
            there. Drink pricing at happy hour is set by each restaurant, so there&apos;s no national
            price to quote. Ask for the bar menu when you sit down.
          </p>
          <p>
            What is national right now is the Halloween menu. Through November 15, 2026,
            Applebee&apos;s is selling two $6 Spooky Sips: the Tipsy Zombie, made with Bacardí
            Superior rum, passion fruit, pineapple, cherry and lime, and Dracula&apos;s Juice, with
            Bacardí, Cuervo Tradicional Blanco and prickly pear. For the first time there&apos;s a
            booze-free option too, the $4 Tropical Spell Mocktail. These are a flat limited-time
            price, not a happy hour discount.
          </p>
          <p>
            The $1 Dollarita isn&apos;t running. It came back for July 2026 and ended July 31. If
            you&apos;re watching calories, a house margarita is 310 and a Top Shelf Long Island Iced
            Tea is 380. See the full <Link href="/menu/signature-cocktails">cocktail menu</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="state-liquor-laws">
          <h2>States Where Applebee&apos;s Can&apos;t Discount Drinks</h2>
          <p>
            No drink specials at your Applebee&apos;s? Before you blame the manager, check the state.
            Six states don&apos;t allow time-limited drink discounts:
          </p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <caption className="sr-only">States that ban happy hour drink discounts</caption>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '30%' }}>State</th>
                    <th scope="col">Since</th>
                    <th scope="col">The rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="State"><strong>Massachusetts</strong></td>
                    <td data-label="Since">1984</td>
                    <td data-label="Rule">No reduced drink prices for part of a day. First state to ban happy hour.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Rhode Island</strong></td>
                    <td data-label="Since">1985</td>
                    <td data-label="Rule">No happy hour drink specials.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Vermont</strong></td>
                    <td data-label="Since">1985</td>
                    <td data-label="Rule">A drink can be cheaper for a whole day, not for a few hours.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>North Carolina</strong></td>
                    <td data-label="Since">1985</td>
                    <td data-label="Rule">Drinks sell at one price all day. Food can still be discounted.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Alaska</strong></td>
                    <td data-label="Since">1986</td>
                    <td data-label="Rule">No drink priced below what it cost earlier the same week.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Utah</strong></td>
                    <td data-label="Since">2011</td>
                    <td data-label="Rule">No reduced prices that encourage overconsumption.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            In every one of those states the half price appetizers still run. The laws cover alcohol
            and nothing else.
          </p>

          <h3>Two states most lists get wrong</h3>
          <p>
            <strong>Oklahoma.</strong> Plenty of lists still call it a ban state, but it isn&apos;t. Bars and
            restaurants there can run happy
            hour specials, as long as the price stays at least 6% above what the drink costs them.
          </p>
          <p>
            <strong>Indiana.</strong> It lifted its ban in 2024. If someone told you there&apos;s no
            happy hour in Indianapolis, they&apos;re working from an old list.
          </p>
        </section>

        <section className={styles.clusterSection} id="happy-hour-tips">
          <h2>What to Know Before You Go to Happy Hour</h2>
          <ul className={styles.textList}>
            <li>
              <strong>Ask where to sit.</strong> Some restaurants only give happy hour prices in the bar area. Ask the
              host before you get seated in the dining room.
            </li>
            <li>
              <strong>Call ahead on weekends.</strong> Not every restaurant runs the 3 to 6 PM window on Saturday and
              Sunday. The 9 PM to close window is the safer weekend bet.
            </li>
            <li>
              <strong>Order before the kitchen winds down.</strong> Late-night happy hour runs to close, but the kitchen
              can stop taking food orders before the doors lock. Get your apps in early.
            </li>
            <li>
              <strong>Order in rounds.</strong> Fried apps are at their best in the first few minutes. Two at a time
              means everything arrives hot.
            </li>
            <li>
              <strong>Start with Boneless Wings or Mozzarella Sticks.</strong> They&apos;re the most consistent apps on
              the list. Save the Spinach &amp; Artichoke Dip for a restaurant you know makes it well.
            </li>
            <li>
              <strong>Confirm the list with your server.</strong> Each restaurant decides which apps are half price.
            </li>
          </ul>
        </section>

        <section className={styles.clusterSection} id="dine-in-versus-takeout">
          <h2>Can You Get Half Price Apps To Go?</h2>
          <div className={styles.answerBlock}>
            <p>
              No. Applebee&apos;s says the half price appetizers are for when you dine in. That rules
              out <Link href="/takeout">Carside To Go</Link>, app orders, and{' '}
              <Link href="/delivery">DoorDash or Uber Eats</Link>.
            </p>
          </div>
          <p>
            It&apos;s a seat-filling deal. A $5.00 plate of Mozzarella Sticks makes sense for the
            restaurant when you&apos;re also ordering a drink and maybe an entrée. Eaten on your couch,
            it&apos;s just a discount.
          </p>
          <p>
            Hungry enough for entrées? Compare it with the <Link href="/menu/2-for-25">2 for $25</Link>.
            Two people splitting two half price apps pay about $11. Two people who each want a full
            meal are better off with the 2 for $25.
          </p>
        </section>

        <section className={styles.clusterSection} id="why-location-differs">
          <h2>Why Your Applebee&apos;s Happy Hour Might Be Different</h2>
          <p>
            Most Applebee&apos;s are run by local franchise owners, and each one sets its own schedule
            and prices. So 3–6 PM and 9 PM–close is the default, not a
            guarantee.
          </p>
          <p>
            In practice, three things move: the weekend schedule, whether platters count, and the
            drink list. The core apps rarely change. Your state&apos;s alcohol law can remove
            drink deals entirely.
          </p>
          <p>
            We can&apos;t see your restaurant&apos;s schedule from here, and neither can any site
            that claims to. Call it. Numbers are in the <Link href="/locations">location finder</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee&apos;s Happy Hour FAQs</h2>
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
