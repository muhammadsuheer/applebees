import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Deals & Specials 2026: 2 for $25, Happy Hour & AYCE",
  description: "Every Applebee's deal running in 2026  2 for $25, half price apps, happy hour times, All You Can Eat and lunch specials. What's included and what's excluded.",
  alternates: {
    canonical: 'https://applebees-menus.us/specials-and-deals',
  }
};

const faqData = [
  {
    question: "What is included in Applebee's 2 for $25?",
    answer: "One full-size shared appetizer plus two full-size entrées for $25. Portions match the regular menu. Appetizer and entrée options come from a rotating curated list, and a sirloin upgrade is usually available for a small premium."
  },
  {
    question: "What time are Applebee's half price apps?",
    answer: "Two windows at participating locations: mid-afternoon, typically 3:00 PM to 6:00 PM, and late night, typically from 9:00 PM until close. Weekend start times often run later."
  },
  {
    question: "Are all appetizers half price during happy hour?",
    answer: "No. Combination platters like the Classic Combo are excluded, as are most premium and seasonal appetizers. The core classics  Boneless Wings, Mozzarella Sticks, Chicken Quesadilla and Spinach & Artichoke Dip  are the reliably included ones."
  },
  {
    question: "Why is 2 for $25 priced higher at my location?",
    answer: "Applebee's is franchised, and owners set pricing against local wage and property costs. The deal structure is national; the price is not. Higher-cost metros commonly print a higher figure."
  },
  {
    question: "Can I get half price appetizers for takeout?",
    answer: "Generally no. The promotion is built around dine-in traffic. Some locations extend it to direct orders; third-party delivery apps do not carry it."
  },
  {
    question: "Can I use a coupon with the 2 for $25 deal?",
    answer: "Usually not. Promotional items are already discounted and a second discount on top is typically blocked at the register."
  },
  {
    question: "Does Applebee's have All You Can Eat right now?",
    answer: "All You Can Eat runs as a limited-time promotion rather than permanently, appearing during slower parts of the year. Check current availability at your nearest location."
  },
  {
    question: "What is the best value deal at Applebee's?",
    answer: "For two people, 2 for $25 delivers the most food per dollar  a shared appetizer plus two full entrées. For one person, the half price appetizer window is the cheapest way to eat, and lunch specials are the best-value full plate."
  },
  {
    question: "Does Applebee's have a senior discount?",
    answer: "Senior discounts are set by individual franchise locations rather than nationally. Asking your server is the only reliable way to find out whether a specific restaurant offers one."
  },
  {
    question: "When is Applebee's happy hour?",
    answer: "Monday through Friday at most participating locations, with an afternoon window and a late-night window. Weekend and holiday schedules vary by restaurant."
  }
];

export default function SpecialsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/specials-and-deals/#webpage",
        "url": "https://applebees-menus.us/specials-and-deals",
        "name": "Applebee's Deals & Specials 2026: 2 for $25, Happy Hour & AYCE",
        "description": "Every Applebee's deal running in 2026  2 for $25, half price apps, happy hour times, All You Can Eat and lunch specials. What's included and what's excluded.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/specials-and-deals/#breadcrumb"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/specials-and-deals/#faq",
        "name": "Applebee's Deals & Specials Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/specials-and-deals/#breadcrumb",
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
            "name": "Specials & Deals",
            "item": "https://applebees-menus.us/specials-and-deals"
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
      <Breadcrumb items={[{ label: 'Specials & Deals', href: '/specials-and-deals' }]} />

      <main className={styles.main}>
        {/* H1 & §1  OPENING */}
        <header className={styles.hero} role="banner" aria-label="Specials Header">
          <h1>Applebee's Deals and Specials (2026)</h1>
          <p className={styles.heroLead}>
            Applebee's built its identity on value, and the deals are the reason most people choose it over a competitor on a given night. There are five that run consistently: 2 for $25, half price appetizers, happy hour, All You Can Eat, and lunch specials.
          </p>
          <p className={styles.heroSub}>
            Each one has rules that are not printed on the promotional insert  which appetizers are excluded, which windows the discount actually applies in, why the price on your table might not match the price in the advert. This page covers all of it, including which combinations give you the most food for the money.
          </p>
        </header>

        {/* §2  2 FOR $25 */}
        <section className={styles.clusterSection} id="2-for-25">
          <h2>Applebee's 2 for $25 Menu</h2>

          <div className={styles.answerBlock}>
            <p>
              The Applebee's 2 for $25 deal includes one full-size appetizer to share plus two full-size entrées, for $25 total. Portions are identical to the regular menu  this is not a reduced-size tasting menu. Appetizer and entrée options come from a curated selection that rotates.
            </p>
          </div>

          <h3>What's on the appetizer list</h3>
          <p>
            The shared appetizer is chosen from a core group of classics. Boneless Wings, Mozzarella Sticks, and Spinach & Artichoke Dip appear consistently, with the selection rotating alongside the wider <Link href="/menu/appetizers">appetizer menu</Link>.
          </p>
          <p>
            If you want the most food from this slot, Boneless Wings deliver the highest protein of the group at 40g per serving. Mozzarella Sticks are close at 41g for fewer calories. Spinach & Artichoke Dip is the heaviest per gram of protein  990 calories for 21g. Full figures on the <Link href="/nutrition">nutrition page</Link>.
          </p>

          <h3>What's on the entrée list</h3>
          <p>
            The entrée selection rotates more than the appetizers do. Long-running inclusions have been Fiesta Lime Chicken, the Classic Bacon Cheeseburger, and pasta dishes from the <Link href="/menu/pasta">pasta menu</Link>. A sirloin upgrade is usually available for a small per-steak premium.
          </p>

          <h3>Which combination gives you the most</h3>
          <p>
            This is the part nobody works out, so here it is using actual nutrition data:
          </p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Combination</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Calories</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Protein</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Boneless Wings + 2× Fiesta Lime Chicken</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>3,460</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#16a34a' }}>162g</td>
                  </tr>
                  <tr>
                    <td><strong>Boneless Wings + 2× Three-Cheese Chicken Penne</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>3,780</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#16a34a' }}>194g</td>
                  </tr>
                  <tr>
                    <td><strong>Mozzarella Sticks + 2× Classic Cheeseburger</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>3,300</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#16a34a' }}>141g</td>
                  </tr>
                  <tr>
                    <td><strong>Spinach & Artichoke Dip + 2× 8 oz. Sirloin (upgrade)</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>2,650</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#16a34a' }}>131g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            <strong>For maximum protein per dollar:</strong> Boneless Wings with two Three-Cheese Chicken Penne  194g of protein across the table.
          </p>
          <p>
            <strong>For the best protein-to-calorie ratio:</strong> the sirloin upgrade. Even with the premium, 131g of protein for 2,650 calories is the leanest way to run this deal, and it is the only version that comes in under 3,000 calories for two people. See <Link href="/menu/steaks-and-ribs">steaks and ribs</Link>.
          </p>

          <h3>Why your restaurant charges more than $25</h3>
          <p>
            "2 for $25" is a national marketing name, not a fixed national price. Applebee's is franchised  individual owners set pricing against local wage and rent costs. In higher-cost metros the same deal is commonly printed as 2 for $26 or more.
          </p>
          <p>
            The deal structure stays the same. Only the number changes. Check the physical insert on your table before ordering, or confirm with your <Link href="/locations">local restaurant</Link>.
          </p>
        </section>

        {/* §3  HALF PRICE APPETIZERS */}
        <section className={styles.clusterSection} id="half-price-apps">
          <h2>Applebee's Half Price Apps: Times and What's Included</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's half price appetizers run during two windows  mid-afternoon, typically 3:00 PM to 6:00 PM, and late night, typically from 9:00 PM until close. Select appetizers are 50% off during both. Times are set by each location.
            </p>
          </div>

          <h3>The two windows</h3>
          <p>
            <strong>Mid-afternoon (around 3–6 PM):</strong> Quieter, aimed at the after-work crowd. Easiest window to get a table without waiting.
          </p>
          <p>
            <strong>Late night (from around 9 PM):</strong> The busier of the two, and the one the promotion is known for. Weekend start times often run later than weekdays.
          </p>

          <h3>What is not half price</h3>
          <p>
            This is where people get caught out. The discount does not cover every appetizer:
          </p>
          <ul className={styles.textList}>
            <li>
              <strong>Combination platters are excluded:</strong> The Classic Combo  the shareable platter that brings several appetizers together in one order  is not part of the promotion at most locations. It is already priced as a bundle, so discounting it again does not happen.
            </li>
            <li>
              <strong>Premium and seasonal appetizers are usually excluded:</strong> Anything positioned above the core range, or running as a limited-time item, typically sits outside the deal.
            </li>
            <li>
              <strong>What is reliably included:</strong> The core classics. Boneless Wings, Mozzarella Sticks, Chicken Quesadilla, and Spinach & Artichoke Dip are the workhorses of this promotion.
            </li>
          </ul>

          <h3>Dine-in versus takeout</h3>
          <p>
            Half price appetizers are structured to drive dine-in traffic, and they generally do not carry over to third-party delivery platforms. If you want them, eating in is the reliable route. For <Link href="/takeout">takeout</Link> and <Link href="/delivery">delivery</Link> availability, check with your location directly  some run it for direct orders, none run it through third-party apps.
          </p>
        </section>

        {/* §4  HAPPY HOUR */}
        <section className={styles.clusterSection} id="happy-hour">
          <h2>Applebee's Happy Hour Times and Menu</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's happy hour runs at participating locations Monday through Friday, generally in an afternoon window around 3:00 PM to 6:00 PM and a late-night window from around 9:00 PM until close. It covers half price appetizers plus discounted drinks.
            </p>
          </div>

          <p>
            Happy hour and half price apps run on the same schedule at most locations  the appetizer discount is one half of happy hour, discounted drinks are the other.
          </p>
          <p>
            On the drinks side: discounts typically apply to house margaritas, select cocktails, and draft beer. Applebee's also runs periodic promotional drink campaigns at a fixed low price, which appear as limited-time events rather than as standing menu items.
          </p>
          <p>
            Weekend and holiday schedules vary more than weekday ones. Confirm times with your <Link href="/locations">local restaurant</Link> or see the full <Link href="/happy-hour">happy hour page</Link>.
          </p>
          <p>
            Calorie note for anyone tracking: frozen and blended cocktails carry the highest calorie load on the drinks menu, largely from syrups rather than alcohol. Draft light beer is the lowest. Figures on the <Link href="/nutrition">nutrition page</Link>.
          </p>
        </section>

        {/* §5  ALL YOU CAN EAT */}
        <section className={styles.clusterSection} id="all-you-can-eat">
          <h2>Applebee's All You Can Eat</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's All You Can Eat is a limited-time promotion offering unlimited refills across a rotating selection  most commonly riblets, boneless wings and shrimp  served with sides. It runs seasonally rather than year-round.
            </p>
          </div>

          <h3>How it works</h3>
          <p>
            The value comes from the mix-and-match structure. You are not locked into refilling the same item. Starting with one and switching on the refill is standard, and refills come with sides included.
          </p>
          <p>
            The promotion is used to drive traffic during slower periods, which means it appears and disappears through the year rather than running permanently. Current status: <Link href="/specials-and-deals">specials and deals</Link>.
          </p>

          <h3>Getting the most from it</h3>
          <p>
            The practical tip is straightforward: sides fill you up faster than the protein does, and the protein is the part you are paying for. Asking for refills without the side, or with a lighter side, leaves more room for the item you actually came for.
          </p>
          <p>
            Riblets and shrimp are the two that most often anchor this promotion. See <Link href="/menu/steaks-and-ribs">steaks and ribs</Link> and <Link href="/menu/seafood">seafood</Link> for the standard menu versions.
          </p>
        </section>

        {/* §6  LUNCH SPECIALS */}
        <section className={styles.clusterSection} id="lunch-specials">
          <h2>Applebee's Lunch Specials</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's lunch specials are reduced-price midday portions available during lunch hours at participating locations, typically covering sandwiches, salads and lighter entrées at a lower price point than the dinner menu.
            </p>
          </div>

          <p>
            Lunch pricing is one of the most location-dependent parts of the menu. Some restaurants run a dedicated lunch menu with its own combinations; others apply lunch pricing to standard items during set hours. Because Applebee's opens at 11:00 AM and does not serve breakfast, the lunch window starts at opening.
          </p>
          <p>
            If you are comparing midday options, the lunch combinations are usually better value per plate than ordering the same items in the evening  the portion is smaller and the price drop is larger than the portion drop.
          </p>
          <p>
            Check the current lunch offering at your <Link href="/locations">nearest location</Link>, and see the <Link href="/menu">full menu</Link> for standard pricing comparison.
          </p>
        </section>

        {/* §7  GETTING MORE VALUE */}
        <section className={styles.clusterSection} id="how-to-get-more-value">
          <h2>How to Get the Most from Applebee's Deals</h2>

          <div className={styles.valueTipsGrid}>
            <div className={styles.valueTipCard}>
              <h3>Gift cards work as cash</h3>
              <p>
                Applebee's gift cards are treated as payment, not as a coupon, which means they can be used on promotional items. Warehouse clubs and retailers periodically sell restaurant gift cards below face value. When they do, buying at a discount and spending it on an already-discounted deal compounds the saving  the two do not conflict, because one is a promotion and the other is a payment method. See <Link href="/gift-card-deals">gift cards</Link>.
              </p>
            </div>

            <div className={styles.valueTipCard}>
              <h3>Coupons generally do not stack</h3>
              <p>
                A promotional item is already discounted, so a second discount on top of it is usually blocked at the register. Use coupons on full-price orders and save the promotions for their own visits.
              </p>
            </div>

            <div className={styles.valueTipCard}>
              <h3>Join loyalty before sitting down</h3>
              <p>
                The loyalty programme is worth joining before you sit down. Signing up typically triggers a welcome offer, and it can be done on your phone while waiting to be seated.
              </p>
            </div>

            <div className={styles.valueTipCard}>
              <h3>Weeknight family promotions</h3>
              <p>
                Reduced-price or free kids meals on specific weeknights are run by individual franchises rather than nationally. Calling and asking directly is the only way to know  it is not published centrally. See the <Link href="/menu/kids-menu">kids menu</Link>.
              </p>
            </div>

            <div className={styles.valueTipCard}>
              <h3>Order direct, not third-party</h3>
              <p>
                Menu prices on third-party delivery platforms are usually higher than in-restaurant prices, because platform commission gets built into the listed price. Ordering through Applebee's own <Link href="/delivery">delivery</Link> or <Link href="/takeout">Carside To Go</Link> means paying the restaurant's actual menu price, and promotional deals are far more likely to be honoured.
              </p>
            </div>
          </div>
        </section>

        {/* §8  EATING WELL ON THE DEALS */}
        <section className={styles.clusterSection} id="healthy-deal-options">
          <h2>Value Menu Options Without the Calorie Load</h2>
          <p>
            Value menus lean heavy  fried appetizers and large entrées are inexpensive to produce and satisfying to eat. The deals still work if you are watching what you eat, with a few substitutions:
          </p>
          <ul className={styles.textList}>
            <li>
              <strong>On the appetizer:</strong> Side salads are often available as a substitution at the shared-appetizer slot. A House Salad is 160 calories against roughly 1,000 for most fried appetizers.
            </li>
            <li>
              <strong>On the entrée:</strong> The sirloin upgrade is the strongest move. The 8 oz. Top Sirloin delivers 55g of protein for 830 calories, the best protein-to-calorie ratio on the menu. Substituting a starch side for steamed broccoli or green beans cuts further.
            </li>
            <li>
              <strong>On the drink:</strong> This is the largest single swing available. Frozen cocktails run into the hundreds of calories from syrup alone; unsweetened iced tea is zero.
            </li>
          </ul>
          <p>
            Full figures: see our complete guide on <Link href="/nutrition">nutrition and calories</Link>.
          </p>
        </section>

        {/* §9  FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Deals  Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <article key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>
                  {faq.answer.includes("nearest location") ? (
                    <>
                      All You Can Eat runs as a limited-time promotion rather than permanently, appearing during slower parts of the year. Check current availability at your <Link href="/locations">nearest location</Link>.
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
