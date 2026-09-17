import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';

// Checked September 2026 (applebees.com catering page summaries and catering listings):
//  - each catering dish serves 6–8 guests; about $10 per person for a basic spread
//  - order up to two weeks ahead, or with as little as two hours' notice; no minimum
//  - plates, serving utensils and cutlery included
// Applebee's doesn't publish national catering prices. Keep figures as ranges.

export const metadata: Metadata = {
  title: "Applebee's Catering Menu 2026: Party Platters, Prices & How Much to Order",
  description:
    "Applebee's catering platters serve 6 to 8 people at about $10 a head, with no minimum and as little as two hours' notice. How many platters to order for 10, 20 or 50 guests.",
  alternates: {
    canonical: 'https://applebees-menus.us/catering',
  },
  openGraph: {
    siteName: 'Applebees Menu Guide',
    images: [{ url: '/og/og-catering.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-catering.webp'],
  },
};

const headcounts = [
  { guests: 10, apps: 1, entrees: 2, sides: 1 },
  { guests: 15, apps: 2, entrees: 2, sides: 2 },
  { guests: 20, apps: 2, entrees: 3, sides: 2 },
  { guests: 30, apps: 3, entrees: 4, sides: 3 },
  { guests: 50, apps: 5, entrees: 7, sides: 5 },
];

const faqData = [
  {
    question: "How many people does an Applebee's catering platter serve?",
    answer:
      "6 to 8 people, as one part of a spread with an appetizer and a side. For a sports team or a group of teenagers, plan on 4 to 5 per platter.",
  },
  {
    question: "How much is Applebee's catering per person?",
    answer:
      "About $10 a head for a basic mix of appetizers, entrées and sides. Rib platters and extra wing trays push it higher. Applebee's doesn't publish national catering prices, so call your restaurant for the real number.",
  },
  {
    question: "Is there a minimum order for Applebee's catering?",
    answer: "No. You can order a single platter.",
  },
  {
    question: "How far ahead do I need to order Applebee's catering?",
    answer:
      "Anywhere from two weeks to two hours. Two hours works for a small weekday order. For 10 or more platters, or anything on a Friday night or a holiday weekend, give the restaurant at least a day.",
  },
  {
    question: "Does Applebee's catering come with plates and utensils?",
    answer: "Yes. Plates, cutlery and serving utensils are included. You don't have to ask for them.",
  },
  {
    question: "Does Applebee's deliver catering?",
    answer:
      "Some restaurants deliver it themselves and many prefer pickup for big orders. Applebee's catering is also listed on ezCater, which schedules delivery with catering couriers.",
  },
  {
    question: "How much Applebee's catering do I need for 20 people?",
    answer:
      "Seven platters: two appetizers, three entrées and two salads or sides. Add one more entrée if the group is mostly teenagers or it's an evening event with drinks.",
  },
  {
    question: "Can Applebee's catering containers go in the oven?",
    answer:
      "No. They're plastic. To keep food hot for longer than about 45 minutes, move it into aluminum pans over a chafing dish.",
  },
  {
    question: "Can I order Applebee's catering tax-exempt?",
    answer:
      "Yes, if your organization qualifies. Ordering direct, bring a printed exemption certificate to the restaurant. On ezCater, upload it to the account once and it applies to every order.",
  },
];

export default function CateringPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://applebees-menus.us/catering/#webpage',
        url: 'https://applebees-menus.us/catering',
        name: "Applebee's Catering Menu 2026: Party Platters, Prices & How Much to Order",
        description:
          "How much Applebee's catering costs, how many platters to order by headcount, lead times, delivery options and keeping food hot.",
        publisher: { '@id': 'https://applebees-menus.us/#organization' },
        breadcrumb: { '@id': 'https://applebees-menus.us/catering/#breadcrumb' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://applebees-menus.us/catering/#faq',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://applebees-menus.us/catering/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://applebees-menus.us/' },
          { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://applebees-menus.us/catering' },
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
      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }]} />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="catering-title">
          <h1 id="catering-title">Applebee&apos;s Catering: Platters, Prices and How Much to Order</h1>
          <p className={styles.heroLead}>
            Applebee&apos;s catering comes by the platter. Each one feeds 6 to 8 people, a basic spread
            works out to about $10 a head, and there&apos;s no minimum order.
          </p>
          <p className={styles.heroSub}>
            You can book up to two weeks out or order with two hours&apos; notice. Plates, cutlery
            and serving utensils come with it.
          </p>
          <p className={styles.heroHighlight}>
            Ordering is the easy part. Working out how many platters 23 people need is where most
            orders go wrong, so let&apos;s start there.
          </p>
        </section>

        <section className={styles.clusterSection} id="ordering-math">
          <h2>How Much Applebee&apos;s Catering to Order</h2>
          <p>
            Start from one rule: a platter feeds 6 to 8 adults only when it&apos;s one part of a
            spread. A pasta tray with an appetizer and a salad next to it covers eight. The same tray
            on its own covers five.
          </p>

          <div className={styles.tableCard} style={{ maxWidth: '750px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <caption className="sr-only">Applebee&apos;s catering platters by headcount</caption>
                <thead>
                  <tr>
                    <th scope="col">Guests</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Appetizers</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Entrées</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Salads / sides</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Platters</th>
                    <th scope="col" style={{ textAlign: 'right' }}>At ~$10 a head</th>
                  </tr>
                </thead>
                <tbody>
                  {headcounts.map((h) => (
                    <tr key={h.guests}>
                      <td data-label="Guests"><strong>{h.guests} guests</strong></td>
                      <td data-label="Appetizers" style={{ textAlign: 'center' }}>{h.apps}</td>
                      <td data-label="Entrées" style={{ textAlign: 'center' }}>{h.entrees}</td>
                      <td data-label="Salads / sides" style={{ textAlign: 'center' }}>{h.sides}</td>
                      <td data-label="Platters" style={{ textAlign: 'right', fontWeight: 700 }}>
                        {h.apps + h.entrees + h.sides}
                      </td>
                      <td data-label="Estimate" style={{ textAlign: 'right' }}>
                        ${(h.guests * 10).toLocaleString('en-US')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3>Adjust for who&apos;s eating</h3>
          <p>
            The table assumes mixed adults at a sit-down meal. A high school football team is not
            that. Plan on 4 to 5 per platter for athletes, teenagers and anyone who&apos;s been doing
            physical work all day, which means roughly 40% more food than the table says.
          </p>
          <p>
            Office lunches go the other way. People eat less at a desk, and 8 per platter holds. At a
            standing party with no seats, cut an entrée and add an appetizer, because guests graze.
            Evening events with alcohol need one extra platter. Every time.
          </p>

          <h3>The split that doesn&apos;t run out</h3>
          <p>
            One appetizer platter for every two entrée platters, and one salad or side for every two
            entrées. The common mistake is four entrée trays and nothing else. The table runs out of
            variety long before it runs out of food.
          </p>
        </section>

        <section className={styles.clusterSection} id="catering-menu">
          <h2>What&apos;s on the Applebee&apos;s Catering Menu</h2>
          <p>
            Catering menus are set by each restaurant, but the same items show up again and again:
            Boneless Wings and Classic Wings platters, Mozzarella Sticks, Spinach &amp; Artichoke Dip,
            a Chicken Quesadilla platter, Riblets, Chicken Alfredo and other pasta trays, and
            cheeseburger sliders. Salads and desserts round it out.
          </p>
          <p>
            Pasta is the best catering item on the menu. Sauce holds heat, the tray survives an hour
            in a chafing dish, and nobody gets a dried-out portion at minute fifty. Riblets and sauced
            chicken come second for the same reason.
          </p>
          <p>
            Fried food is the one to manage. Wings and Mozzarella Sticks steam in a closed container,
            and the coating goes soft on the drive over. Order sauce on the side and toss the wings
            right before people eat. For salads, get the dressing separately or the greens will wilt
            before the second round.
          </p>
          <p>
            You won&apos;t find steaks or anything served sizzling. A steak that rides 30 minutes in a
            container keeps cooking, and that&apos;s why they&apos;re left off.
          </p>
          <p>
            Browse the regular-menu versions: <Link href="/menu/appetizers">appetizers</Link>,{' '}
            <Link href="/menu/pasta">pasta</Link>, <Link href="/menu/steaks-and-ribs">riblets</Link>{' '}
            and <Link href="/menu/salads">salads</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="catering-prices">
          <h2>Applebee&apos;s Catering Prices</h2>
          <div className={styles.answerBlock}>
            <p>
              Plan on about $10 per person for a basic spread of appetizers, entrées and sides.
              Lean on rib platters and extra wing trays and it climbs toward $20 a head. There&apos;s no
              minimum.
            </p>
          </div>
          <p>
            Applebee&apos;s doesn&apos;t publish a national catering price list, and any site that
            prints exact platter prices is guessing at your restaurant. Franchisees price catering the
            same way they price the <Link href="/menu">regular menu</Link>, so a platter in suburban
            Ohio costs less than the same platter in Manhattan.
          </p>
          <p>
            The fastest way to an accurate number is a phone call with three facts ready: headcount,
            pickup or delivery, and the date. Find your restaurant&apos;s number in the{' '}
            <Link href="/locations">location finder</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="lead-times">
          <h2>How Far Ahead to Order Applebee&apos;s Catering</h2>
          <div className={styles.answerBlock}>
            <p>
              As far as two weeks ahead, or with as little as two hours&apos; notice. The right answer
              depends on the size of the order and the time of day you need it.
            </p>
          </div>
          <p>
            A catering order shares a kitchen with every table in the dining room. Four platters
            ordered for 11:30 on a Tuesday is an easy yes. Twelve platters for 6:00 on a Friday lands
            in the middle of the dinner rush, and something gives: your food or someone else&apos;s.
          </p>
          <p>
            So give two hours for a small weekday order, a full day for 10 or more platters or
            anything on a weekend, and the full two weeks for graduations, holiday parties and game
            days, when every restaurant in town is getting the same calls. Then confirm by phone. An
            online order nobody saw doesn&apos;t help anyone.
          </p>
        </section>

        <section className={styles.clusterSection} id="pickup-vs-delivery">
          <h2>Pickup, Delivery or ezCater</h2>
          <p>
            <strong>Pickup</strong> is the cheapest route and the one where you control timing. Order
            direct and collect it, or use <Link href="/takeout">Carside To Go</Link> so staff bring it
            to your car.
          </p>
          <p>
            <strong>Direct delivery</strong> depends on the restaurant. Some deliver catering; plenty
            don&apos;t for large orders. Ask when you call.
          </p>
          <p>
            <strong>ezCater</strong> is the one to use for offices. Applebee&apos;s catering is listed
            there, delivery windows are scheduled instead of as-soon-as-possible, the couriers carry
            insulated gear sized for platters, and tax exemption lives on the account. It costs more
            than pickup, and for a lunch that has to hit a reception desk at noon, the fee is worth it.
            Regular delivery apps are the wrong tool for a big order. The <Link href="/delivery">delivery
            page</Link> explains why.
          </p>
        </section>

        <section className={styles.clusterSection} id="keeping-food-hot">
          <h2>How to Keep Applebee&apos;s Catering Hot</h2>
          <p className={styles.warningBox}>
            <strong>Don&apos;t put the catering containers in the oven.</strong> They&apos;re plastic.
          </p>
          <p>
            The containers keep food hot long enough to travel and serve. Past about 45 minutes of
            open serving, move everything into a chafing dish. You&apos;ll need a wire rack, a full-size
            water pan, half-size aluminum pans and gel fuel cans, all sold at party supply and
            warehouse stores.
          </p>
          <ol className={styles.orderedList}>
            <li>Set the rack on a steady, heat-safe table.</li>
            <li>Put in the water pan with about an inch of hot water.</li>
            <li>Light the fuel cans underneath.</li>
            <li>Move the food into the aluminum pans and set them in the water bath.</li>
          </ol>
          <p>
            Hold hot food above 135°F. Below that, bacteria start multiplying. A chafing dish keeps
            food hot for a couple of hours, but it won&apos;t bring cold food back up. If a tray has
            already cooled, reheat it properly before it goes back out.
          </p>
        </section>

        <section className={styles.clusterSection} id="event-types">
          <h2>What to Order for Your Event</h2>

          <h3>Office lunch for 20</h3>
          <p>
            Two pasta trays, one salad with dressing on the side, one slider platter and one
            appetizer. Skip wings. Nobody wants barbecue sauce on a keyboard.
          </p>

          <h3>Game day or tailgate</h3>
          <p>
            Go heavy on finger food: two wing platters in different sauces, Mozzarella Sticks and a
            Riblets platter. Salads mostly go untouched at these. Bring extra napkins. The ones
            included assume a seated meal.
          </p>

          <h3>Family party</h3>
          <p>
            The widest mix of eaters, so the widest spread: two or three appetizers, three or four
            entrées across chicken and pasta, plus a salad and a side. Kids menu items aren&apos;t
            sold as platters. Order those individually from the <Link href="/menu/kids-menu">kids
            menu</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="corporate-tax-exemption">
          <h2>Tax-Exempt Catering Orders</h2>
          <p>
            Schools, nonprofits and government offices can skip sales tax. Ordering direct, bring a
            printed copy of your exemption certificate to the restaurant. Saying you&apos;re exempt
            isn&apos;t enough, because the franchise has to keep the paperwork.
          </p>
          <p>
            Ordering on ezCater, upload the certificate to the account once and it applies to every
            future order. If your office caters monthly, set that up before the first order.
          </p>
        </section>

        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee&apos;s Catering FAQs</h2>
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
