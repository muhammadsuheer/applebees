import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { locationData } from '@/data/locations';
import LocationSearch from '@/components/LocationSearch';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Locations: Find a Restaurant, Hours & Phone Numbers",
  description: "Find Applebee's locations by state or ZIP code, with hours, phone numbers and directions. Plus what changes between restaurants  prices, deals and happy hour times.",
  alternates: {
    canonical: 'https://applebees-menus.us/locations',
  }
};

const faqData = [
  {
    question: "How many Applebee's locations are there?",
    answer: "Around 1,600 restaurants across the United States, plus international locations. The number shifts as restaurants open and close."
  },
  {
    question: "How do I find the closest Applebee's?",
    answer: "Use the search above with a ZIP code or by allowing location access. Results show distance, address, phone number and current open status."
  },
  {
    question: "What time does Applebee's open?",
    answer: "Most locations open at 11:00 AM. Applebee's does not serve a breakfast menu, so there is no earlier opening."
  },
  {
    question: "What time does Applebee's close?",
    answer: "Typically 11:00 PM Sunday through Thursday and midnight or later on Friday and Saturday. Closing times are set per restaurant and the kitchen may stop serving before the posted time."
  },
  {
    question: "Are Applebee's locations open on holidays?",
    answer: "Most open with reduced hours on major holidays. Christmas Day closures are common but decided locally. Call the restaurant to confirm."
  },
  {
    question: "How do I find an Applebee's phone number?",
    answer: "Each restaurant listing in the finder above includes its direct number. Calling the location is the fastest route for hours, wait times or party bookings."
  },
  {
    question: "Do all Applebee's locations have the same menu?",
    answer: "Core items are consistent nationally. Limited-time and regional items vary, and promotion participation is decided by each franchise owner."
  },
  {
    question: "Why do prices differ between Applebee's locations?",
    answer: "Franchise owners set pricing based on local operating costs. Differences of several dollars on the same item between markets are normal."
  },
  {
    question: "Does every Applebee's offer delivery?",
    answer: "No. Delivery is available at participating locations and the coverage area is set per restaurant."
  },
  {
    question: "Do all locations run happy hour?",
    answer: "Most participating locations do, usually Monday through Friday with afternoon and late-night windows. Times and included items are set locally."
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
        "name": "Applebee's Locations: Find a Restaurant, Hours & Phone Numbers",
        "description": "Find Applebee's locations by state or ZIP code, with hours, phone numbers and directions. Plus what changes between restaurants  prices, deals and happy hour times.",
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
        {/* H1 & §1  OPENING */}
        <header className={styles.hero} role="banner" aria-label="Locations Header">
          <h1>Applebee's Locations, Hours and Contact Details</h1>
          <p className={styles.heroLead}>
            Applebee's runs about 1,600 restaurants across the United States. Finding one is usually easy. Knowing what to expect when you get there is the harder part, because Applebee's is franchised  individual owners set their own hours, prices and promotions.
          </p>
          <p className={styles.heroSub}>
            That has a practical consequence most people learn the hard way: the restaurant you visited last month in another town may run different happy hour times, charge a few dollars more for the same burger, or not participate in the deal you drove there for.
          </p>
          <p className={styles.heroHighlight}>
            This page covers finding the nearest restaurant, what varies between them, hours including holidays, and how to reach a specific location directly.
          </p>
        </header>

        {/* §2  FIND YOUR NEAREST RESTAURANT & §3  BROWSE BY STATE */}
        <section className={styles.clusterSection} id="find-nearest">
          <h2>Find an Applebee's Near You</h2>
          <p>
            Search by ZIP code, city, or allow location access. Results return the closest restaurants with distance, address, phone number, and whether each one is currently open.
          </p>

          {/* Location Search Widget Placed Directly Above the Fold */}
          <LocationSearch locationsData={locationData} />

          <p>
            If you are somewhere unfamiliar and just want the nearest option, the ZIP search is faster than browsing by state. If you are planning ahead, the state directory below gives you the full picture for an area.
          </p>
          <p>
            <strong>One habit worth building:</strong> check the phone number and call before a long drive, particularly late in the evening or on a holiday. Kitchens sometimes stop serving before posted closing time, and holiday schedules are decided locally rather than centrally.
          </p>
        </section>

        {/* §3  BROWSE BY STATE */}
        <section className={styles.clusterSection} id="browse-by-state">
          <h2>Applebee's Locations by State</h2>
          <p>
            Applebee's operates in all 50 states, with the largest concentrations in Texas, Florida, Ohio, Pennsylvania, New York and Michigan. Use the quick filter pills in the finder above to instantly view restaurants by state.
          </p>
        </section>

        {/* §4  WHAT CHANGES BETWEEN RESTAURANTS */}
        <section className={styles.clusterSection} id="what-changes">
          <h2>What's Different at Each Applebee's Location</h2>
          <p>
            This is the section that makes the page worth reading, and it is the part almost no competitor covers properly.
          </p>

          <div className={styles.varianceGrid}>
            <div className={styles.varianceCard}>
              <h3>Prices</h3>
              <p>
                Franchise owners set menu pricing against local costs. The same handcrafted burger can differ by several dollars between a small-town location and a major metro. Figures on our <Link href="/menu">menu with prices</Link> reflect commonly listed pricing  treat the local restaurant as authoritative.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Deal Participation</h3>
              <p>
                Value offers like <Link href="/menu/2-for-25">2 for $25</Link> and <Link href="/specials-and-deals">half price appetizers</Link> are corporate promotions that franchisees opt into. Most participate. Not all do, and not always on the same schedule.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Happy Hour Windows</h3>
              <p>
                The common pattern is an afternoon session and a late-night session, but start times, end times and which appetizers are included are all set per restaurant. Details on the <Link href="/happy-hour">happy hour page</Link>.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Menu Availability</h3>
              <p>
                Core items are consistent nationally. Limited-time items roll out on staggered schedules, so a dish advertised nationally may not have reached every kitchen yet. If you are checking whether a specific item is available at a specific restaurant, the location's own ordering page is the only reliable answer.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>Ordering Methods</h3>
              <p>
                <Link href="/delivery">Delivery</Link> coverage depends on the area. <Link href="/takeout">Carside To Go</Link> is available at most locations but not all. <Link href="/catering">Catering</Link> has advance-notice requirements that vary.
              </p>
            </div>

            <div className={styles.varianceCard}>
              <h3>What Doesn't Change</h3>
              <p>
                Recipes, portion sizes, and <Link href="/nutrition">nutrition and allergen data</Link>. Those are set centrally and hold everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* §5  HOURS */}
        <section className={styles.clusterSection} id="hours">
          <h2>Applebee's Hours: Standard and Holiday</h2>
          <p>
            Most locations follow standard casual dining schedules:
          </p>

          <div className={styles.tableCard} style={{ maxWidth: '650px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.hoursTable}>
                <thead>
                  <tr>
                    <th scope="col">Days</th>
                    <th scope="col">Opens</th>
                    <th scope="col">Closes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sunday – Thursday</strong></td>
                    <td>11:00 AM</td>
                    <td>11:00 PM</td>
                  </tr>
                  <tr>
                    <td><strong>Friday – Saturday</strong></td>
                    <td>11:00 AM</td>
                    <td>12:00 AM or later</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            Applebee's does not serve breakfast, which is why opening is consistently late morning rather than early.
          </p>
          <p>
            Two things the table does not capture. Bar service often runs later than the kitchen, so arriving near closing may mean drinks only. And the kitchen sometimes stops taking orders 15 to 30 minutes before the posted close.
          </p>
          <p>
            Holidays are the real variable. Thanksgiving, Christmas Eve, Christmas Day and New Year's Day schedules are set per restaurant. Christmas Day closures are common but not universal. Published hours are unreliable on holidays  calling is the only way to be certain.
          </p>
          <p>
            Full breakdown including holiday schedules: see our complete <Link href="/operating-hours">operating hours</Link> guide.
          </p>
        </section>

        {/* §6  CONTACT A SPECIFIC RESTAURANT */}
        <section className={styles.clusterSection} id="contact-restaurant">
          <h2>Applebee's Phone Numbers and Addresses</h2>
          <p>
            Every restaurant in the finder above lists its direct phone number and street address. Calling the location directly is more useful than a general enquiry line for anything location-specific: current hours, whether a deal is running, wait times, large party bookings, or checking an allergen question with the kitchen manager.
          </p>
          <p>
            For allergen questions in particular, calling ahead lets the manager pull the allergen binder before you arrive rather than during a busy service.
          </p>
        </section>

        {/* §7  ORDERING WITHOUT VISITING */}
        <section className={styles.clusterSection} id="ordering-options">
          <h2>Delivery, Takeout and Catering by Location</h2>
          <p>
            <strong><Link href="/delivery">Delivery</Link>:</strong> Delivery is available at participating restaurants through Applebee's own site and app, and through selected third-party platforms. Coverage radius is set per restaurant, so a location eight miles away may deliver while one four miles away does not. See <Link href="/delivery">delivery</Link>.
          </p>
          <p>
            <strong>Carside To Go:</strong> Carside To Go lets you order ahead and collect from a designated parking spot without going inside. Available at most locations. See <Link href="/takeout">takeout</Link>.
          </p>
          <p>
            <strong>Catering:</strong> Catering covers group and party orders at participating restaurants, with lead times that vary. See <Link href="/catering">catering</Link>.
          </p>
        </section>

        {/* §8  SPANISH SECTION */}
        <section className={styles.clusterSection} id="cerca-de-mi">
          <h2>Applebee's Cerca de Mí</h2>
          <p>
            Applebee's tiene alrededor de 1,600 restaurantes en Estados Unidos. Para encontrar el más cercano, busca por código postal o selecciona tu estado en la sección de arriba. Los resultados muestran la dirección, el teléfono y si el restaurante está abierto en este momento.
          </p>
          <p>
            Algo importante: Applebee's funciona por franquicias. Cada restaurante decide sus propios horarios, precios y promociones. Antes de ir, conviene confirmar el horario del local  sobre todo en días festivos  y verificar si participa en ofertas como <Link href="/menu/2-for-25">2 por $25</Link> o la <Link href="/happy-hour">hora feliz</Link>.
          </p>
          <p>
            La mayoría de los locales abren a las 11:00 AM y cierran alrededor de las 11:00 PM entre domingo y jueves, con horario extendido los viernes y sábados.
          </p>
        </section>

        {/* §9  FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Locations  Common Questions</h2>
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
