import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { locationData } from '@/data/locations';
import LocationSearch from '@/components/LocationSearch';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Applebee\'s Locations | Find Your Nearest Restaurant',
  description: 'Find an Applebee\'s restaurant near you. View our comprehensive 2026 directory of 1,579 worldwide locations, get directions, and check operating hours.',
  alternates: {
    canonical: 'https://applebees-menus.us/locations/',
  }
};

export default function LocationsPage() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
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
      },
      {
        "@type": "ItemList",
        "@id": "https://applebees-menus.us/locations/#list",
        "name": "Applebee's Locations Directory",
        "description": "A comprehensive directory of Applebee's locations.",
        "itemListElement": locationData.flatMap(stateObj =>
          stateObj.locations.map(loc => ({ ...loc, state: stateObj.stateName }))
        ).map((loc, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Restaurant",
            "name": `Applebee's ${loc.city}`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": loc.address,
              "addressLocality": loc.city,
              "addressRegion": loc.state,
              "postalCode": loc.address.split(', ').pop()?.split(' ').pop() || '',
              "addressCountry": "US"
            },
            "telephone": loc.phone,
            "url": "https://applebees-menus.us/locations",
            "servesCuisine": "American"
          }
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/locations/#faq",
        "name": "Applebee's Locations FAQ",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many Applebee's locations are there?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As of 2026, there are 1,579 Applebee's locations worldwide. The vast majority (1,520) are franchised, while 59 are company-owned."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any Applebee's locations in Hawaii?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, there are no Applebee's locations in Hawaii. However, Applebee's maintains a strong presence across nearly all other U.S. states and territories."
            }
          },
          {
            "@type": "Question",
            "name": "Does Applebee's serve breakfast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional Applebee's locations do not serve breakfast. However, the new 2026 dual-branded Applebee's and IHOP locations serve the full breakfast menu from IHOP alongside the standard Applebee's lunch and dinner menu."
            }
          },
          {
            "@type": "Question",
            "name": "How can I find Applebee's near me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The fastest way to find a location is by using the official Applebee's App, searching 'Applebee's near me' on Google Maps, or consulting our state-by-state directory below to call your local restaurant directly."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Locations', href: '/locations' }]} />
      <main>
        <section className={styles.hero}>
          <h1>Applebee's Locations: The 2026 Worldwide Directory</h1>
          <p>
            Looking for an <strong>"Applebee's near me"</strong> for tonight's dinner or a weekend Happy Hour? You've come to the right place. With exactly <strong>1,579 restaurants worldwide</strong>including 1,520 franchised locations and 59 company-owned spotsfinding your neighborhood grill is easier than ever. Our human-curated guide breaks down everything from finding the closest spot for Curbside To Go, to the real reason you won't find an Applebee's on your Hawaiian vacation.
          </p>
        </section>

        <section className={styles.clusterSection}>
          <h2>Pro Tips: How to Find Your Nearest Applebee's in 2026</h2>
          <p>
            We've all been thereyou're craving Half-Price Apps, but you aren't sure if the location down the street is still open. While our interactive directory below is great for planning, here is our top advice for securing the best dining experience:
          </p>
          <ul className={styles.textList}>
            <li><strong>The "Near Me" Search Strategy:</strong> Google Maps and Apple Maps are your best friends for real-time data. Searching "Applebee's near me" will instantly show you holiday hours, current traffic, and how busy the restaurant is right now. <em>Pro Tip:</em> Always check the "Live" busy meter before heading out for a Friday night dinner.</li>
            <li><strong>Using the Official App for Curbside To Go:</strong> If you're ordering takeout, use the official Applebee's App or website. It ties directly into the kitchen's system, meaning you get real-time tracking for your Carside To Go or Delivery orders. Third-party apps like DoorDash are great, but the official app often has exclusive local coupons.</li>
            <li><strong>When in Doubt, Call Ahead:</strong> Looking to book a large party or wondering if a specific Happy Hour deal is running today? Use our directory below to find the direct phone number. A 30-second phone call to the host stand can save you a lot of hassle.</li>
          </ul>
        </section>

        <section className={styles.clusterSection}>
          <h2>What Services Do Applebee's Locations Offer?</h2>
          <p>
            While every neighborhood grill shares that classic, welcoming vibe, the actual services can vary. When searching for a location, keep an eye out for these specific amenities:
          </p>
          <ul className={styles.textList}>
            <li><strong>Carside To Go®:</strong> Almost all locations now feature designated parking spots where staff will bring your food directly to your window.</li>
            <li><strong>Delivery:</strong> Available at over 90% of locations, either fulfilled by Applebee's own drivers or partners like UberEats.</li>
            <li><strong>Late-Night Happy Hour:</strong> The legendary half-price appetizers are a staple, but the hours (usually 9 PM or 10 PM to close) depend entirely on the local franchise owner.</li>
            <li><strong>Free Wi-Fi:</strong> Perfect for a working lunch; nearly all domestic locations offer free guest Wi-Fi.</li>
          </ul>
        </section>

        <section className={styles.clusterSection}>
          <h2>The Applebee's Footprint: Franchised vs Company-Owned</h2>
          <p>
            Currently, there are <strong>1,579 Applebee's locations</strong> operating globally. But here is something most diners don't realize: the vast majority of these aren't run by a giant corporate office.
          </p>
          <p>
            Out of the total restaurants, <strong>1,520 are franchised locations</strong> operated by independent, local restaurant groups. Only <strong>59 are company-owned spots</strong>. <em>Why does this matter to you?</em> Because it explains why the Applebee's in Texas might have a slightly different drink menu, or a different Happy Hour start time, than the Applebee's in Michigan. The franchise owners have the flexibility to tailor their locations to the local neighborhood.
          </p>
        </section>

        <section className={styles.clusterSection}>
          <h2>The Missing Markets: Does Applebee's Exist in Hawaii or Fiji?</h2>
          <p>
            Two of the most frequently asked questions regarding Applebee's expansion involve tropical islands. Let's set the record straight for 2026:
          </p>
          <ul className={styles.textList}>
            <li><strong>Hawaii:</strong> There are <strong>zero</strong> Applebee's locations in Hawaii. Despite a massive tourism industry, the brutal economics of shipping supplies from the mainland to the islands make the casual dining franchise model difficult to sustain. The closest Applebee's to Hawaii is located in California.</li>
            <li><strong>Fiji:</strong> Similarly, there are no Applebee's restaurants in Fiji. Rumors of a Fiji location often stem from confusion with local island bars or other international chains.</li>
            <li><strong>U.S. Territories:</strong> Applebee's currently has no presence in Guam, American Samoa, the U.S. Virgin Islands, or the Northern Mariana Islands.</li>
          </ul>
        </section>

        <section className={styles.clusterSection}>
          <h2>The 2026 Evolution: Dual-Branded IHOP & Applebee's</h2>
          <p>
            The biggest news for Applebee's locations in 2026 isn't traditional expansionit is the aggressive rollout of the <strong>Dual-Branded Applebee's & IHOP concept</strong>. Dine Brands (the parent company of both chains) is combining these two iconic restaurants under a single roof.
          </p>
          <p>
            If you visit one of these new locations, you will enter through a shared set of doors. One side of the dining room features the classic Applebee's red décor, while the other features IHOP's signature blue. The incredible advantage? You can order from <em>both</em> menus simultaneously. If your local standalone Applebee's recently closed, check the locatorit is highly likely it is being replaced by one of these high-revenue, dual-branded super-centers.
          </p>
        </section>

        <section className={styles.clusterSection} id="interactive-directory">
          <h2>Interactive Applebee's Location Directory</h2>
          <p>
            Use our interactive search tool below to find an Applebee's near you. You can search by city, address, or state. Get direct phone numbers to confirm operating hours or instantly load directions into Google Maps.
          </p>

          <LocationSearch locationsData={locationData} />
        </section>

        <section className={styles.clusterSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqSection}>
            <div className={styles.faqItem}>
              <h3>How many Applebee's locations are there in the U.S.?</h3>
              <p>As of 2026, there are 1,579 Applebee's restaurants operating worldwide. The vast majority (1,520) are franchised, while 59 are company-owned spots. The exact number fluctuates slightly due to the opening of new dual-branded Applebee's/IHOP locations and occasional closures of older standalone units.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Does Applebee's have locations in Hawaii or Fiji?</h3>
              <p>No. Applebee's does not operate any restaurants in Hawaii or Fiji. The logistical and shipping costs required to maintain their casual dining franchise model on these islands have historically prevented expansion into those markets.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Does Applebee's serve breakfast?</h3>
              <p>Traditional Applebee's locations do not serve breakfast. However, the new 2026 dual-branded Applebee's and IHOP locations serve the full breakfast menu from IHOP alongside the standard Applebee's lunch and dinner menu.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>How can I find Applebee's near me?</h3>
              <p>The fastest way to find a location is by using the official Applebee's App, searching "Applebee's near me" on Google Maps, or consulting our state-by-state directory above to call your local restaurant directly.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
