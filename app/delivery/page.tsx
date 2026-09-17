import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LocationSearch from '@/components/LocationSearch';
import { locationData } from '@/data/locations';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Delivery: Order Direct, Fees & Coverage (2026)",
  description: "How Applebee's delivery works, ordering direct versus DoorDash and Uber Eats, why app prices run higher, alcohol delivery rules, and how to check coverage.",
  alternates: {
    canonical: 'https://applebees-menus.us/delivery',
  },
  openGraph: {
    siteName: "Applebees Menu Guide",
    images: [
      {
        url: '/og/og-delivery.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-delivery.webp'],
  }
};

const faqData = [
  {
    question: "Does Applebee's have its own delivery drivers?",
    answer: "No. Orders placed directly with Applebee's are prepared by the restaurant and delivered by third-party contract drivers. The advantage of ordering direct is the menu price, not the driver."
  },
  {
    question: "Why is Applebee's more expensive on DoorDash?",
    answer: "Delivery platforms charge restaurants a commission on each order. Restaurants offset it by listing higher prices on those platforms, so the markup sits inside the item price before service and delivery fees are added."
  },
  {
    question: "Is it cheaper to order Applebee's directly?",
    answer: "Usually yes. Direct ordering uses in-restaurant menu pricing with delivery charged as a separate visible fee, rather than the marked-up menus on third-party platforms."
  },
  {
    question: "Can I get half price appetizers delivered?",
    answer: "No. Half price appetizers are dine-in only. Ordering them through a delivery app means paying above menu price for items that would be half price in the restaurant."
  },
  {
    question: "What is Cosmic Wings on Uber Eats?",
    answer: "Cosmic Wings is an Applebee's delivery-only brand launched in 2021, built around Cheetos-flavored wings. The food is cooked in an Applebee's kitchen. It operates from fewer locations now than at launch, so availability varies."
  },
  {
    question: "Can I order Applebee's and Cosmic Wings together?",
    answer: "Generally no. They're listed as separate restaurants on delivery platforms, so combining them means two orders and two delivery fees even though one kitchen prepares both."
  },
  {
    question: "Can I get alcohol delivered from Applebee's?",
    answer: "Only where state and local law permits. Where allowed, drinks arrive sealed, usually require a food order alongside, and the driver must check ID at the door."
  },
  {
    question: "Does every Applebee's offer delivery?",
    answer: "No. Coverage is set per restaurant and depends on area and driver availability. Where delivery is unavailable, Carside To Go usually is."
  },
  {
    question: "What is Carside To Go?",
    answer: "Curbside pickup. Order ahead, park in a marked spot, check in through the app, and the order is brought to your car. No delivery or service fees, and you pay dining-room prices."
  },
  {
    question: "What time does Applebee's stop delivering?",
    answer: "Delivery ends when the kitchen closes, which varies by location and is often earlier than the posted closing time for the restaurant."
  }
];

export default function DeliveryPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/delivery/#webpage",
        "url": "https://applebees-menus.us/delivery",
        "name": "Applebee's Delivery: Order Direct, Fees & Coverage (2026)",
        "description": "How Applebee's delivery works, ordering direct versus DoorDash and Uber Eats, why app prices run higher, alcohol delivery rules, and how to check coverage.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/delivery/#breadcrumb"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/delivery/#faq",
        "name": "Applebee's Delivery Frequently Asked Questions",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://applebees-menus.us/delivery/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://applebees-menus.us/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Delivery",
            "item": "https://applebees-menus.us/delivery"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Delivery', href: '/delivery' }]} />

      <main className={styles.main}>
        {/* H1 & §1 — OPENING */}
        <header className={styles.hero} role="banner" aria-label="Delivery Header">
          <h1>Applebee's Delivery: How to Order and What It Costs</h1>
          <p className={styles.heroLead}>
            Applebee's delivers through two routes: its own website and app, or third-party platforms like DoorDash, Uber Eats and Grubhub. Both end up with a contract driver at your door, but the price you pay isn&apos;t the same.
          </p>
          <p className={styles.heroSub}>
            Ordering direct gets you the restaurant's actual menu price. Ordering through a third-party app gets you a marked-up menu, because platform commission is built into the listed price before any fees are added.
          </p>
          <p className={styles.heroSub}>
            Here&apos;s how each way of ordering works, where delivery reaches, what happens with alcohol, and which dishes travel well.
          </p>
        </header>

        {/* Location Finder Widget Placed Above The Fold */}
        <section className={styles.finderSection}>
          <LocationSearch locationsData={locationData} headingLevel="h2" compact />
        </section>

        {/* §2 — DIRECT VS THIRD-PARTY */}
        <section className={styles.clusterSection} id="direct-vs-third-party">
          <h2>Ordering Direct or Through a Delivery App</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's doesn&apos;t employ its own delivery drivers. Orders placed on the Applebee's site or app are prepared by the restaurant and handed to a third-party contract driver. Orders placed on DoorDash or Uber Eats are prepared the same way. The difference is the menu price and who holds your money.
            </p>
          </div>

          <h3>Why direct costs less</h3>
          <p>
            The food is identical and often the driver network is the same. What changes is the menu.
          </p>
          <p>
            Third-party platforms charge restaurants a commission on every order. Restaurants cover that by listing higher prices on those platforms than they charge in the dining room. So the markup is already inside the item price before the service fee and delivery fee get added on top.
          </p>
          <p>
            Ordering direct means paying the in-restaurant menu price, with delivery charged as a separate visible line rather than hidden inside each item.
          </p>

          <h3>Why direct is easier when something goes wrong</h3>
          <p>
            This is the part people find out the hard way. When you order through a third-party app, your transaction is with the platform, not the restaurant. A missing appetizer can&apos;t be resolved by calling the store. The manager doesn&apos;t hold your payment and can&apos;t refund it. You go through the app's support flow.
          </p>
          <p>
            Order direct and the restaurant holds the transaction, so the location can fix it.
          </p>

          <h3>Where third-party apps still make sense</h3>
          <p>
            If you already pay for a platform subscription that removes delivery fees and reduces service fees, the gap narrows. Coverage also differs. A platform may reach an address the direct route does not, or vice versa. Checking both is worth thirty seconds on a larger order.
          </p>
        </section>

        {/* §3 — CARSIDE TO GO */}
        <section className={styles.clusterSection} id="carside-to-go">
          <h2>Carside To Go: The Cheapest Way to Eat Applebee's at Home</h2>
          <p>
            Carside To Go is Applebee's curbside pickup. You order ahead through the app or site, park in a marked Carside spot, and check in through the app with your spot number and vehicle description. Someone brings the order to your car.
          </p>
          <p>
            <strong>Cost comparison:</strong> No delivery fee, no service fee, no menu markup. You pay exactly the dining-room price. Tipping the person who brings your order out is customary and still far cheaper than the combined premium of a delivery app order.
          </p>
          <p>
            If the drive is short, this is the best-value off-premise option by a wide margin. Full details: see our guide to <Link href="/takeout">takeout and Carside To Go</Link>.
          </p>
        </section>

        {/* §4 — HAPPY HOUR AND DEALS ON DELIVERY */}
        <section className={styles.clusterSection} id="deals-on-delivery">
          <h2>Which Applebee's Deals Work for Delivery</h2>

          <div className={styles.answerBlock}>
            <p>
              Half price appetizers don&apos;t apply to delivery. The promotion is dine-in only, built to fill seats and sell drinks. Most other menu deals do carry over to direct orders.
            </p>
          </div>

          <p>
            <strong>Doesn&apos;t transfer:</strong> <Link href="/happy-hour">Half price appetizers</Link> and happy hour drink pricing. These are dine-in promotions at almost every location.
          </p>
          <p>
            <strong>Usually transfers to direct orders:</strong> <Link href="/menu/2-for-25">2 for $25</Link> and standard menu pricing. Participation varies by location, as with everything franchised.
          </p>
          <p>
            <strong>The trap worth naming:</strong> Ordering happy hour appetizers through a delivery app means paying above dining-room price for items that would have been half price if you had sat down. That&apos;s roughly a 3× swing on the same food. If the appetizer discount is what you want, the trip is worth it.
          </p>
          <p>
            See all current offers: visit our <Link href="/specials-and-deals">specials and deals</Link> page.
          </p>
        </section>

        {/* §5 — GHOST KITCHEN LISTINGS */}
        <section className={styles.clusterSection} id="cosmic-wings">
          <h2>Cosmic Wings: The Applebee's Brand That Isn't Labeled Applebee's</h2>
          <p>
            If you have scrolled a delivery app and seen "Cosmic Wings," that food comes out of an Applebee's kitchen.
          </p>
          <p>
            Cosmic Wings launched in February 2021 as a delivery-only brand built with Uber Eats and Frito-Lay around Cheetos-flavored wings, and it started in about 1,300 Applebee&apos;s kitchens. In August 2022 Applebee&apos;s moved some of those items, including the Cheetos wings and waffle fries, onto its own menu for dine-in and takeout.
          </p>
          <p>
            Fewer restaurants carry the delivery listing now than at launch. Whether it shows up for your address depends on whether your nearest Applebee&apos;s still runs it, so search your delivery app for Cosmic Wings before assuming it&apos;s gone.
          </p>

          <h3>The separate-order problem</h3>
          <p>
            Cosmic Wings and Applebee's are listed as two different restaurants on delivery platforms even when one kitchen cooks both. Items from the two menus generally can&apos;t be combined into one order: two orders, two delivery fees, two tips, same kitchen.
          </p>
          <p>
            If someone at the table wants wings and someone wants a <Link href="/menu/handcrafted-burgers">burger</Link>, ordering everything from the Applebee's listing is usually cheaper than splitting across both.
          </p>
        </section>

        {/* §6 — ALCOHOL DELIVERY */}
        <section className={styles.clusterSection} id="alcohol-delivery">
          <h2>Can You Get Alcohol Delivered from Applebee's?</h2>

          <div className={styles.answerBlock}>
            <p>
              Alcohol delivery depends entirely on state and local law. Where permitted, Applebee's offers sealed drinks for delivery; where not, the option doesn&apos;t appear at checkout.
            </p>
          </div>

          <p>
            Temporary pandemic-era allowances have since expired or been made permanent depending on the state, so rules differ significantly by location.
          </p>
          <p>
            Where alcohol delivery is allowed, three conditions typically apply:
          </p>
          <ul className={styles.textList}>
            <li><strong>Sealed packaging:</strong> Drinks are supplied in tamper-evident containers rather than an open cup.</li>
            <li><strong>A food order alongside it:</strong> Many jurisdictions permit alcohol delivery only with a substantial food purchase.</li>
            <li><strong>ID verification at the door:</strong> The driver checks ID on arrival. Alcohol can&apos;t be left unattended, and a driver who can&apos;t verify ID, or who judges the recipient to be intoxicated, is required to take it back.</li>
          </ul>
          <p>
            The <Link href="/menu/signature-cocktails">drinks menu</Link> shows what is offered in-restaurant; delivery availability is narrower and set locally. Check the <Link href="/locations">location finder</Link> for your area.
          </p>
        </section>

        {/* §7 — WHAT TRAVELS WELL */}
        <section className={styles.clusterSection} id="what-travels-well">
          <h2>Which Applebee's Items Hold Up for Delivery</h2>
          <p>
            Nobody covers this, and it&apos;s the practical question after "how much."
          </p>
          <ul className={styles.textList}>
            <li>
              <strong>Travels well:</strong> Grilled proteins. <Link href="/menu/steaks-and-ribs">Steaks</Link>, <Link href="/menu/chicken">grilled chicken</Link> and <Link href="/menu/seafood">salmon</Link> hold heat and texture. <Link href="/menu/pasta">Pasta</Link> is the most reliable category overall. Sauce protects it, and it reheats.
            </li>
            <li>
              <strong>Travels poorly:</strong> Anything fried and sauced together. Boneless wings tossed in sauce steam in transit and soften. Ordering sauce on the side keeps the coating intact, and most kitchens will do it.
            </li>
            <li>
              <strong>Sides are where orders go wrong:</strong> Fries lose the most in a sealed container. Swapping to <Link href="/menu/sides">steamed vegetables or mashed potatoes</Link> means the side arrives in the condition it left in.
            </li>
            <li>
              <strong>Salads:</strong> <Link href="/menu/salads">Salads</Link> hold up if dressing comes separately. Ask, because it isn&apos;t always default.
            </li>
          </ul>
          <p>
            Some items aren&apos;t offered for delivery at all. Skillet dishes and ice-cream desserts are the usual omissions, because they can&apos;t survive the trip. If something on the <Link href="/menu">full menu</Link> is missing from the delivery menu, that&apos;s generally why.
          </p>
        </section>

        {/* §8 — LARGE ORDERS */}
        <section className={styles.clusterSection} id="delivery-vs-catering">
          <h2>Delivery vs Catering for Groups</h2>
          <p>
            For a party or an office lunch, ordering ten individual entrées through a delivery app is the most expensive possible route. The per-item markup applies to every item, then fees stack on the total.
          </p>
          <p>
            <Link href="/catering">Catering</Link> is priced for volume, with party-size platters of appetizers, salads and entrées. Orders go through the restaurant directly, usually with advance notice and often as pickup. On a large order the saving is substantial enough that collecting it yourself is worth the trip.
          </p>
          <p>
            <strong>Rough threshold:</strong> Past six or seven meals, check catering pricing before defaulting to the app.
          </p>
        </section>

        {/* §9 — COVERAGE */}
        <section className={styles.clusterSection} id="delivery-coverage">
          <h2>Is Applebee's Delivery Available in My Area?</h2>
          <p>
            Delivery coverage is set per restaurant, not nationally. A location eight miles away may deliver to you while one four miles away does not. Radius depends on the store's own settings and driver availability.
          </p>
          <p>
            Coverage can also differ between ordering routes. The direct route and each platform maintain separate delivery zones, so an address outside one may sit inside another.
          </p>
          <p>
            Fastest way to check: enter your address at checkout in the Applebee&apos;s app or on its website, or call your nearest restaurant from the <Link href="/locations">location finder</Link>. If delivery isn&apos;t offered, <Link href="/takeout">Carside To Go</Link> usually is.
          </p>
          <p>
            Hours also apply. Delivery stops when the kitchen does. See <Link href="/operating-hours">operating hours</Link>.
          </p>
        </section>

        {/* §10 — FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Delivery: Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <article key={index} className={styles.faqItem}>
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
