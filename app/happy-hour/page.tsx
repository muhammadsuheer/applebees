import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Happy Hour Times 2026: Half Price Apps & Drinks",
  description: "Applebee's happy hour times, what's half price and what's excluded, plus the six states where drink discounts are illegal. Afternoon and late night windows.",
  alternates: {
    canonical: 'https://applebees-menus.us/happy-hour',
  },
  openGraph: {
    siteName: "Applebee's Menu Information",
    images: [
      {
        url: '/og/og-happy-hour.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-happy-hour.webp'],
  }
};

const faqData = [
  {
    question: "What time is Applebee's happy hour?",
    answer: "Two windows at most participating locations: afternoon from 3:00 PM to 6:00 PM, and late night from 9:00 PM on weeknights or 10:00 PM on weekends until close. Times are set by each franchise."
  },
  {
    question: "What time are Applebee's half price apps?",
    answer: "Half price appetizers run during both happy hour windows  3:00 PM to 6:00 PM and again from 9:00 PM or 10:00 PM until close."
  },
  {
    question: "Does Applebee's have late night happy hour?",
    answer: "Yes. Late night is the main window, typically starting at 9:00 PM Sunday through Thursday and 10:00 PM Friday and Saturday, running until the restaurant closes."
  },
  {
    question: "What appetizers are half price at Applebee's?",
    answer: "Boneless Wings, Mozzarella Sticks, Spinach & Artichoke Dip, Chicken Quesadilla, Chicken Wonton Tacos, and Brew Pub Pretzels & Beer Cheese Dip are the reliably included items."
  },
  {
    question: "Is the Classic Combo half price during happy hour?",
    answer: "No. Combination platters are excluded from the promotion at most locations, because they are already priced as a bundle."
  },
  {
    question: "Why doesn't my Applebee's have happy hour drink specials?",
    answer: "Six states prohibit time-limited alcohol discounts: Massachusetts, Alaska, North Carolina, Rhode Island, Utah and Vermont. In those states the appetizer discount still runs, but timed drink pricing is not legal."
  },
  {
    question: "Does Applebee's have happy hour every day?",
    answer: "Most participating locations run it Monday through Friday. Weekend and holiday availability varies by restaurant."
  },
  {
    question: "Can I get half price appetizers to go?",
    answer: "Generally no. The promotion is dine-in. Third-party delivery apps do not carry it, and they typically list prices above in-restaurant menu price."
  },
  {
    question: "Which half price appetizer is the best value?",
    answer: "The Chicken Quesadilla delivers the most protein at 49g. Mozzarella Sticks have the best protein-to-calorie ratio at 41g for 860 calories. Chicken Wonton Tacos are the lightest at 590 calories."
  },
  {
    question: "How late does Applebee's happy hour run?",
    answer: "Until the restaurant closes  typically 11:00 PM Sunday through Thursday and midnight or later Friday and Saturday, though the kitchen may stop taking orders before the posted closing time."
  }
];

export default function HappyHourPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/happy-hour/#webpage",
        "url": "https://applebees-menus.us/happy-hour",
        "name": "Applebee's Happy Hour Times 2026: Half Price Apps & Drinks",
        "description": "Applebee's happy hour times, what's half price and what's excluded, plus the six states where drink discounts are illegal. Afternoon and late night windows.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/happy-hour/#breadcrumb"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/happy-hour/#faq",
        "name": "Applebee's Happy Hour Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/happy-hour/#breadcrumb",
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
            "name": "Happy Hour",
            "item": "https://applebees-menus.us/happy-hour"
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
      <Breadcrumb items={[{ label: 'Happy Hour', href: '/happy-hour' }]} />

      <main className={styles.main}>
        {/* H1 & §1  OPENING */}
        <header className={styles.hero} role="banner" aria-label="Happy Hour Header">
          <h1>Applebee's Happy Hour Times and Menu (2026)</h1>
          <p className={styles.heroLead}>
            Applebee's happy hour runs in two windows, not one. The afternoon window is typically 3:00 PM to 6:00 PM. The late-night window typically starts at 9:00 PM on weeknights and 10:00 PM on weekends, running until close.
          </p>
          <p className={styles.heroSub}>
            Both windows cover half price appetizers and discounted drinks  but not every appetizer is included, and in six states it is illegal for the drinks half to exist at all.
          </p>
          <p className={styles.heroHighlight}>
            This page covers the exact times, what is included and excluded, why your location may differ, and which items give you the most for the money. Check our <Link href="/specials-and-deals">current specials and deals</Link> for additional promotions.
          </p>
        </header>

        {/* §2  THE TWO WINDOWS */}
        <section className={styles.clusterSection} id="happy-hour-times">
          <h2>Applebee's Happy Hour Times</h2>

          <div className={styles.tableCard} style={{ maxWidth: '650px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Window</th>
                    <th scope="col">Weekdays</th>
                    <th scope="col">Weekends</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Window"><strong>Afternoon</strong></td>
                    <td data-label="Weekdays">3:00 PM – 6:00 PM</td>
                    <td data-label="Weekends">Varies; often not offered</td>
                  </tr>
                  <tr>
                    <td data-label="Window"><strong>Late night</strong></td>
                    <td data-label="Weekdays">From 9:00 PM until close</td>
                    <td data-label="Weekends">From 10:00 PM until close</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Afternoon window</h3>
          <p>
            The quieter of the two. It sits in the gap between the lunch rush and the dinner service, which is exactly why it exists  the restaurant is filling seats that would otherwise be empty.
          </p>
          <p>
            <strong>Practical advantage:</strong> you can usually get a table immediately, hear the person across from you, and get faster service than at 9:30 PM. If the goal is a cheap meal rather than a night out, this is the better window.
          </p>
          <p>
            <strong>One thing worth knowing:</strong> the discount applies based on when the order is rung in, not when you sat down. Ordering at 5:55 PM works. Ordering at 6:05 PM does not, even if you have been sitting there since five.
          </p>

          <h3>Late-night window</h3>
          <p>
            The busier window and the one the promotion is known for. Weekend start times run later than weekdays at most locations  10:00 PM rather than 9:00 PM  because the dinner service runs later.
          </p>
          <p>
            Closing time sets the end, and closing times vary by location and local ordinance. The kitchen also sometimes stops taking orders before the posted close, so the practical end of late-night happy hour can be earlier than the sign suggests. Check your <Link href="/locations">local restaurant</Link> for exact hours.
          </p>
        </section>

        {/* §3  WHAT'S HALF PRICE AND WHAT ISN'T */}
        <section className={styles.clusterSection} id="half-price-apps-list">
          <h2>Applebee's Half Price Appetizers: The Full List</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's half price appetizers cover the core appetizer range  Boneless Wings, Mozzarella Sticks, Spinach & Artichoke Dip, Chicken Quesadilla, Chicken Wonton Tacos, and Brew Pub Pretzels. Combination platters and premium seasonal appetizers are excluded.
            </p>
          </div>

          <h3>Reliably included</h3>
          <p>
            These are the workhorses of the promotion and appear on it consistently:
          </p>
          <ul className={styles.textList}>
            <li><strong>Boneless Wings:</strong> The largest protein portion in the group.</li>
            <li><strong>Mozzarella Sticks:</strong> Served golden-fried with warm marinara.</li>
            <li><strong>Spinach & Artichoke Dip:</strong> Served with freshly made tortilla chips and salsa.</li>
            <li><strong>Chicken Quesadilla:</strong> Chipotle lime chicken with pico and melted Cheddar.</li>
            <li><strong>Chicken Wonton Tacos:</strong> Grilled chicken in crispy wonton shells with slaw.</li>
            <li><strong>Brew Pub Pretzels & Beer Cheese Dip:</strong> Soft pretzel sticks with beer cheese and honey Dijon.</li>
          </ul>
          <p>
            Full descriptions and regular pricing: see our complete <Link href="/menu/appetizers">appetizer menu</Link>.
          </p>

          <h3>Usually excluded</h3>
          <p>
            <strong>Combination platters:</strong> The Classic Combo brings several appetizers into a single shareable order. It is already priced as a bundle, and discounting a bundle again is not how the promotion is structured. If four people plan to split one Classic Combo at half price, that is the scenario the exclusion exists to prevent.
          </p>
          <p>
            <strong>Bone-in traditional wings:</strong> Where a location carries them, they typically sit outside the promotion. Bone-in wings cost restaurants considerably more per portion than boneless, which are made from chicken breast.
          </p>
          <p>
            <strong>Premium and seasonal appetizers:</strong> Limited-time items and anything positioned above the core range are generally not included.
          </p>
          <p>
            <strong>The reliable test:</strong> If it is one of the six classics above, it is almost certainly discounted. If it is a platter, a seasonal special, or premium seafood, assume it is not and ask before ordering.
          </p>
        </section>

        {/* §4  WHERE HAPPY HOUR DRINKS ARE ILLEGAL */}
        <section className={styles.clusterSection} id="state-liquor-laws">
          <h2>Six States Where Applebee's Cannot Discount Drinks</h2>
          <p>
            This section is the reason people bookmark this page. Most competing pages have this wrong.
          </p>
          <p>
            If you sit down at an Applebee's expecting discounted drinks and there are none, it is usually not the restaurant's choice. Six states prohibit time-limited alcohol discounts outright:
          </p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '30%' }}>State</th>
                    <th scope="col">Status & Legal Constraint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="State"><strong>Massachusetts</strong></td>
                    <td data-label="Constraint">Banned since 1984  the first state to do so.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Rhode Island</strong></td>
                    <td data-label="Constraint">Banned since 1985; daily specials allowed, timed discounts not.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Utah</strong></td>
                    <td data-label="Constraint">Banned since 2011.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Alaska</strong></td>
                    <td data-label="Constraint">Prices cannot fall below the rate charged in the same calendar week.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>North Carolina</strong></td>
                    <td data-label="Constraint">A discounted price must apply for a full business day.</td>
                  </tr>
                  <tr>
                    <td data-label="State"><strong>Vermont</strong></td>
                    <td data-label="Constraint">Timed alcohol discounts prohibited.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            <strong>Two states that changed, and most sites still list wrongly:</strong>
          </p>
          <ul className={styles.textList}>
            <li><strong>Indiana</strong> removed its ban  limited happy hour privileges took effect on 1 July 2024.</li>
            <li><strong>Oklahoma</strong> repealed its ban in 2018.</li>
          </ul>
          <p>
            Most articles listing "states where happy hour is banned" are recycled from older lists and still include both. If you were told Indiana bans happy hour, that information is out of date.
          </p>

          <h3>What locations in those states do instead</h3>
          <p>
            Restaurants in ban states pivot to food. Half price appetizers are unaffected by these laws  the restrictions cover alcohol pricing only. So an Applebee's in Massachusetts or North Carolina can and does run the appetizer half of happy hour normally.
          </p>
          <p>
            On drinks, the workaround is all-day pricing. A drink offered at the same price from open to close is legal in most ban states, because the restriction targets time-limited discounting rather than low prices. This is why some locations promote a drink of the month rather than an afternoon special.
          </p>
        </section>

        {/* §5  GETTING THE MOST FROM HALF PRICE APPS */}
        <section className={styles.clusterSection} id="appetizer-value-breakdown">
          <h2>Which Half Price Appetizer Gives You the Most</h2>
          <p>
            Using the verified figures from our <Link href="/nutrition">nutrition page</Link>, here is how the six included appetizers actually compare:
          </p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Appetizer</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Calories</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Protein</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Appetizer"><strong>Chicken Wonton Tacos</strong></td>
                    <td data-label="Calories" style={{ textAlign: 'center' }}>590</td>
                    <td data-label="Protein" style={{ textAlign: 'center' }}>-</td>
                    <td data-label="Sodium" style={{ textAlign: 'right' }}>-</td>
                  </tr>
                  <tr>
                    <td data-label="Appetizer"><strong>Mozzarella Sticks</strong></td>
                    <td data-label="Calories" style={{ textAlign: 'center' }}>860</td>
                    <td data-label="Protein" style={{ textAlign: 'center', fontWeight: 700, color: '#16a34a' }}>41g</td>
                    <td data-label="Sodium" style={{ textAlign: 'right' }}>2,440mg</td>
                  </tr>
                  <tr>
                    <td data-label="Appetizer"><strong>Spinach & Artichoke Dip</strong></td>
                    <td data-label="Calories" style={{ textAlign: 'center' }}>990</td>
                    <td data-label="Protein" style={{ textAlign: 'center' }}>21g</td>
                    <td data-label="Sodium" style={{ textAlign: 'right' }}>2,340mg</td>
                  </tr>
                  <tr>
                    <td data-label="Appetizer"><strong>Boneless Wings (Classic Hot Buffalo)</strong></td>
                    <td data-label="Calories" style={{ textAlign: 'center' }}>1,080</td>
                    <td data-label="Protein" style={{ textAlign: 'center', fontWeight: 700, color: '#16a34a' }}>40g</td>
                    <td data-label="Sodium" style={{ textAlign: 'right', color: '#dc2626', fontWeight: 700 }}>4,720mg</td>
                  </tr>
                  <tr>
                    <td data-label="Appetizer"><strong>Brew Pub Pretzels & Beer Cheese Dip</strong></td>
                    <td data-label="Calories" style={{ textAlign: 'center' }}>1,160</td>
                    <td data-label="Protein" style={{ textAlign: 'center' }}>34g</td>
                    <td data-label="Sodium" style={{ textAlign: 'right' }}>3,540mg</td>
                  </tr>
                  <tr>
                    <td data-label="Appetizer"><strong>Chicken Quesadilla</strong></td>
                    <td data-label="Calories" style={{ textAlign: 'center' }}>1,170</td>
                    <td data-label="Protein" style={{ textAlign: 'center', fontWeight: 700, color: '#16a34a' }}>49g</td>
                    <td data-label="Sodium" style={{ textAlign: 'right' }}>2,590mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            <strong>Most protein:</strong> Chicken Quesadilla at 49g  more than Boneless Wings, which most people assume is the protein pick.
          </p>
          <p>
            <strong>Best protein-to-calorie ratio:</strong> Mozzarella Sticks at 41g for 860 calories  21 calories per gram of protein, the best on the list.
          </p>
          <p>
            <strong>Lightest option:</strong> Chicken Wonton Tacos at 590 calories, roughly half of most others.
          </p>
          <p>
            <strong>The sodium catch:</strong> Boneless Wings in Classic Hot Buffalo carry 4,720mg of sodium  more than double an adult's recommended daily intake, and nearly twice what the Garlic Parmesan version carries at 2,710mg despite the Garlic Parmesan having more calories. If sodium matters to you, the sauce choice matters more than the item choice.
          </p>
          <p>
            <strong>Sharing note:</strong> These figures are per full serving. Split between two people, most of these land in normal appetizer territory. Ordered individually at 10 PM, they are a full meal.
          </p>
        </section>

        {/* §6  THE DRINKS SIDE */}
        <section className={styles.clusterSection} id="happy-hour-drinks">
          <h2>Applebee's Happy Hour Drinks</h2>
          <p>
            Where happy hour drink pricing is legal, discounts typically cover house margaritas, select cocktails, and draft beer. Applebee's also runs periodic drink-of-the-month campaigns at a fixed low price  those run as limited-time events rather than as standing happy hour items, and they are also the format that works in states where timed discounts are prohibited.
          </p>
          <p>
            Applebee's signature cocktails are served in oversized glassware, which is a large part of the perceived value. The volume comes primarily from ice and mixers rather than from spirit  the pour is measured.
          </p>
          <p>
            <strong>Where the calories are:</strong> The mixers. A frozen margarita from our <Link href="/nutrition">drinks data</Link> runs 650 calories and 75g of sugar. That is more sugar than the Triple Chocolate Meltdown dessert. By comparison, a 16 oz draft light beer is 130 calories with zero sugar.
          </p>
          <p>
            If you are watching intake, spirits with soda water or a standard draft light beer keep the number under about 150 per glass. Frozen and blended drinks are where it climbs. Full figures: see <Link href="/nutrition">nutrition and calories</Link>.
          </p>
        </section>

        {/* §7  DINE-IN ONLY */}
        <section className={styles.clusterSection} id="dine-in-versus-takeout">
          <h2>Can You Get Half Price Apps for Takeout or Delivery?</h2>

          <div className={styles.answerBlock}>
            <p>
              Half price appetizers are a dine-in promotion. The discount does not apply to third-party delivery platforms, and generally does not apply to takeout orders either.
            </p>
          </div>

          <p>
            The logic is straightforward: the promotion exists to fill seats. A discounted appetizer eaten at home does not generate the drink order that makes the economics work.
          </p>
          <p>
            <strong>On third-party apps specifically:</strong> Menu prices listed on delivery platforms are typically higher than in-restaurant prices, because platform commission gets built into the listed price. So ordering happy hour appetizers through a delivery app means paying above menu price for an item you could have had at half price by sitting down.
          </p>
          <p>
            If you want Applebee's at home, ordering direct through <Link href="/delivery">delivery</Link> or <Link href="/takeout">Carside To Go</Link> gets you the restaurant's actual menu price. You still will not get the half price discount, but you avoid the platform markup on top of it.
          </p>
        </section>

        {/* §8  WHY YOUR LOCATION IS DIFFERENT */}
        <section className={styles.clusterSection} id="why-location-differs">
          <h2>Why Happy Hour Varies Between Applebee's Locations</h2>
          <p>
            Applebee's is franchised. Individual owners set their own schedules, and the promotion is not identical everywhere:
          </p>
          <ul className={styles.textList}>
            <li><strong>Times vary:</strong> The 3–6 PM and 9 PM patterns are common, not universal. Some locations run only late night. Some run neither.</li>
            <li><strong>Days vary:</strong> Monday through Friday is the standard pattern. Weekend participation is inconsistent, and holiday schedules are set locally.</li>
            <li><strong>The included list varies at the margins:</strong> The six core appetizers are near-universal. Beyond those, inclusion is a local decision.</li>
            <li><strong>Drink pricing varies by law and market:</strong> As covered in our state liquor laws breakdown above.</li>
          </ul>
          <p>
            The only reliable way to confirm any of this is the specific restaurant. Find yours through the <Link href="/locations">location finder</Link>, or see <Link href="/operating-hours">operating hours</Link> for closing times, which set the end of the late-night window. You can also compare value against the <Link href="/menu/2-for-25">2 for $25</Link> meal deal.
          </p>
        </section>

        {/* §9  FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Happy Hour  Frequently Asked Questions</h2>
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
