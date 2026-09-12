import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { locationData } from '@/data/locations';
import { MENU_FACTS } from '@/data/site';
import LocationSearch from '@/components/LocationSearch';
import styles from './page.module.css';

// Restaurant counts: Dine Brands Q2 2026 results (1,557 total, 1,439 US, 118 international).
// Dual-brand count: 45 US at end of Q2 2026 (Dine Brands / FSR).

export const metadata: Metadata = {
  title: "Applebee's Locations Near Me: Addresses, Phone Numbers & Hours",
  description: "Applebee's has 1,439 US restaurants. Search 129 addresses and phone numbers in 6 states, and see what changes from one Applebee's to the next: prices, deals, happy hour and hours.",
  alternates: {
    canonical: 'https://applebees-menus.us/locations',
  },
  openGraph: {
    siteName: "Menu Almanac",
    images: [
      {
        url: '/og/og-locations.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-locations.webp'],
  }
};

const faqData = [
  {
    question: "How many Applebee's locations are there?",
    answer: "1,557 at the end of June 2026: 1,439 in the US and 118 in other countries, according to Dine Brands' second-quarter results."
  },
  {
    question: "How do I find the closest Applebee's?",
    answer: "Type your city, street or ZIP code into the search on this page. It covers the 129 restaurants we list in 6 states. Outside those states, use a map app or the official Applebee's restaurant finder."
  },
  {
    question: "What time does Applebee's open?",
    answer: "Most open at 11:00 AM. Applebee's doesn't serve breakfast, so there's no earlier opening, except at the dual-branded Applebee's and IHOP restaurants."
  },
  {
    question: "What time does Applebee's close?",
    answer: "Many close around 11:00 PM Sunday through Thursday and later on Friday and Saturday, but each restaurant sets its own hours. The kitchen often stops taking orders before the posted close."
  },
  {
    question: "Are Applebee's prices the same at every location?",
    answer: "No. Franchisees set their own prices, so the same burger can cost a few dollars more in one town than the next."
  },
  {
    question: "Do all Applebee's locations run happy hour?",
    answer: "The official windows are 3:00 to 6:00 PM and 9:00 PM to close, but each restaurant decides whether and when it runs them, and six states ban time-limited drink discounts."
  },
  {
    question: "Is Applebee's open on Christmas Day?",
    answer: "Most are closed. Thanksgiving and Christmas Eve usually mean shorter hours. Call the restaurant before you go on any holiday."
  },
  {
    question: "Does every Applebee's offer delivery?",
    answer: "No. Delivery depends on the restaurant and your address. Carside To Go pickup is more widely available."
  }
];

export default function LocationsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/locations/#webpage",
        "url": "https://applebees-menus.us/locations",
        "name": "Applebee's Locations Near Me: Addresses, Phone Numbers & Hours",
        "description": "Applebee's has 1,439 US restaurants. Search 129 addresses and phone numbers in 6 states, and see what changes from one Applebee's to the next: prices, deals, happy hour and hours.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/locations/#breadcrumb"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/locations/#faq",
        "name": "Applebee's Locations Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/locations/#breadcrumb",
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
            "name": "Locations",
            "item": "https://applebees-menus.us/locations"
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
      <Breadcrumb items={[{ label: 'Locations', href: '/locations' }]} />

      <main className={styles.main}>
        <header className={styles.hero} role="banner" aria-label="Locations Header">
          <h1>Applebee&apos;s Locations Near Me: Addresses and Phone Numbers</h1>
          <p className={styles.heroLead}>
            Applebee&apos;s had 1,439 restaurants in the US at the end of June 2026, and 1,557 worldwide. Our directory lists {MENU_FACTS.locationsListed} of them across {MENU_FACTS.statesListed} states, each with an address, a phone number and a directions link.
          </p>
          <p className={styles.heroSub}>
            Finding the nearest one is the easy part. Nearly every Applebee&apos;s is run by a franchisee, and each one sets its own hours, prices and deal participation, so the restaurant across town may not match the one you know.
          </p>
        </header>

        <section className={styles.clusterSection} id="find-nearest">
          <h2>Find an Applebee&apos;s Near You</h2>
          <p>
            Type a city, street name or ZIP code, or tap a state to see every restaurant we list there. Tap a phone number to call, or &quot;Get directions&quot; to open the address in Google Maps.
          </p>

          <LocationSearch locationsData={locationData} />

          <p>
            Not in one of these states? Use a map app or the restaurant finder on Applebee&apos;s own site. Then call before a long drive. It&apos;s the only way to be sure of tonight&apos;s hours and whether the kitchen is still taking orders.
          </p>
        </section>

        <section className={styles.clusterSection} id="what-changes">
          <h2>What Changes From One Applebee&apos;s to the Next</h2>

          <div className={styles.varianceGrid}>
            <div className={styles.varianceCard}>
              <h3>Prices</h3>
              <p>
                Franchisees price for local rent and wages. A burger can cost a few dollars more in a big city than in a small town. The prices on our <Link href="/menu">menu with prices</Link> are reference figures, so your restaurant&apos;s menu wins.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Deals</h3>
              <p>
                National offers like the <Link href="/menu/2-for-25">2 for $25</Link> and the <Link href="/menu/really-big-meal-deal">$9.99 Really BIG Meal Deal</Link> say &quot;at participating restaurants&quot; for a reason. Most take part. Some don&apos;t, or charge more.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Happy Hour</h3>
              <p>
                The official windows are 3:00 to 6:00 PM and 9:00 PM to close. Your restaurant can change the times and the drink prices, and six states ban happy hour drink discounts. Details on the <Link href="/happy-hour">happy hour page</Link>.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Menu</h3>
              <p>
                The core menu is the same everywhere. New items reach some kitchens later than others, and a few are dine-in only, like the O-M-Cheese-adilla Burger skillet.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Breakfast</h3>
              <p>
                Standalone Applebee&apos;s don&apos;t serve it. The 45 dual-branded Applebee&apos;s and IHOP restaurants in the US do, because they share a kitchen with IHOP.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>What Stays the Same</h3>
              <p>
                Recipes, portions and the <Link href="/nutrition">nutrition and allergen figures</Link>. Those are set nationally.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.clusterSection} id="hours">
          <h2>Applebee&apos;s Hours</h2>
          <p>
            Most Applebee&apos;s open at 11:00 AM. Closing is where they differ: many close around 11:00 PM on weeknights and later on Friday and Saturday, while some close earlier. The kitchen usually stops taking food orders before the doors close, so arriving in the last half hour can mean drinks only.
          </p>
          <p>
            On holidays, don&apos;t trust a map listing. Most restaurants close on Christmas Day, and Thanksgiving and Christmas Eve usually run short. Call the restaurant. The full breakdown is in our <Link href="/operating-hours">Applebee&apos;s hours guide</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="contact-restaurant">
          <h2>Calling a Specific Restaurant</h2>
          <p>
            Call the restaurant directly, not a corporate line, for anything local: tonight&apos;s hours, whether a deal is running, a large party, or an allergy question. For an allergy, call outside the lunch and dinner rush and ask for the manager, who can go through the ingredients with you properly.
          </p>
        </section>

        <section className={styles.clusterSection} id="ordering-options">
          <h2>Delivery, Takeout and Catering</h2>
          <p>
            <strong><Link href="/delivery">Delivery</Link>:</strong> through Applebee&apos;s own app and site, or DoorDash and Uber Eats, where menu prices usually run higher. Coverage depends on the restaurant.
          </p>
          <p>
            <strong><Link href="/takeout">Carside To Go</Link>:</strong> order ahead, park and check in, and they bring it out. You pay dining-room prices.
          </p>
          <p>
            <strong><Link href="/catering">Catering</Link>:</strong> party platters at participating restaurants. Give them at least a day&apos;s notice.
          </p>
        </section>

        <section className={styles.clusterSection} id="cerca-de-mi">
          <h2>Applebee&apos;s Cerca de Mí</h2>
          <p>
            Applebee&apos;s tenía 1,439 restaurantes en Estados Unidos a finales de junio de 2026. En esta página puedes buscar {MENU_FACTS.locationsListed} de ellos en {MENU_FACTS.statesListed} estados por ciudad, calle o código postal, con dirección y teléfono.
          </p>
          <p>
            Cada restaurante es de un franquiciado que fija sus propios horarios, precios y promociones. Antes de ir, llama para confirmar el horario, sobre todo en días festivos, y pregunta si participa en ofertas como <Link href="/menu/2-for-25">2 por $25</Link> o la <Link href="/happy-hour">hora feliz</Link>.
          </p>
        </section>

        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee&apos;s Locations: Common Questions</h2>
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
