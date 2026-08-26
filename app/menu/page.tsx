import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import MenuGrid from '@/components/MenuGrid';
import FullMenu from '@/components/FullMenu';
import { menuData } from '@/data/menu';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Menu with Prices and Calories (2026)",
  description: "The full Applebee's menu with prices and calories  20 categories from appetizers and burgers to steaks, pasta, desserts and drinks, plus current specials.",
  alternates: {
    canonical: 'https://applebees-menus.us/menu',
  },
  openGraph: {
    siteName: "Applebee's Menu Information",
    images: [
      {
        url: '/og/og-home.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-home.webp'],
  }
};

const faqData = [
  {
    question: "What is on the Applebee's menu?",
    answer: "Applebee's serves around 60 items across 20 categories  appetizers, burgers, steaks and ribs, chicken, pasta, seafood, salads, bowls, sandwiches, sides, desserts, kids meals and a full drinks range. Prices run from $2.99 to $29.99."
  },
  {
    question: "What are Applebee's menu specials today?",
    answer: "Recurring specials include 2 for $25, half price appetizers during happy hour windows, and periodic All You Can Eat promotions. Participation and pricing are set per location, so what is running varies between restaurants."
  },
  {
    question: "How much is the Applebee's menu?",
    answer: "Appetizers run $9.99–$18.99, burgers $14.49–$15.99, steaks and ribs $16.99–$23.99, pasta $15.99–$17.49, and kids meals $6.49–$7.49. Prices vary by location."
  },
  {
    question: "Does Applebee's have a Veterans Day menu?",
    answer: "Applebee's has offered a free meal to veterans and active-duty military on Veterans Day, 11 November, for many years. It typically covers a limited menu of entrées, is dine-in only, and requires proof of service. Participation varies by location."
  },
  {
    question: "What is the healthiest thing on the Applebee's menu?",
    answer: "Among entrées, the 8 oz. Top Sirloin delivers 55g of protein for 830 calories  the best ratio on the menu. The lightest items overall are Steamed Broccoli at 100 calories and the House Salad at 160."
  },
  {
    question: "What is the highest calorie item at Applebee's?",
    answer: "The Classic Combo appetizer platter at 2,200 calories  higher than any entrée. Among entrées, the Hand-Battered Fish & Chips is the heaviest."
  },
  {
    question: "Does Applebee's menu have prices?",
    answer: "Yes, prices are listed for every item on this page alongside calorie counts. Applebee's restaurants are independently franchised, so local pricing differs from the figures shown."
  },
  {
    question: "Is there an Applebee's menu PDF?",
    answer: "Downloadable menu, nutrition, catering and drinks PDFs are available on this page. For exact local pricing, the location finder gives the most accurate figures."
  },
  {
    question: "Does Applebee's have new menu items?",
    answer: "Applebee's rotates limited-time items through the year. Current additions include the Whole Lotta Bacon Burger and Sweet & Spicy Chicken Sandwich. See the new items page for what is running now."
  },
  {
    question: "Are Applebee's menu prices the same at every location?",
    answer: "No. Restaurants are independently franchised and owners set their own pricing against local costs. Differences of several dollars on the same item between markets are normal."
  }
];

const menuHighlights = [
  { metric: "Highest calorie", item: "The Classic Combo (appetizer)", figure: "2,200 Cals" },
  { metric: "Lowest calorie", item: "Steamed Broccoli", figure: "100 Cals" },
  { metric: "Highest protein", item: "Three-Cheese Chicken Penne", figure: "77g" },
  { metric: "Best protein per calorie", item: "8 oz. Top Sirloin", figure: "55g / 830 cal" },
  { metric: "Highest sodium", item: "Boneless Wings (Classic Hot Buffalo)", figure: "4,720mg" },
  { metric: "Lowest sodium entrée", item: "Double-Glazed Baby Back Ribs", figure: "1,300mg" },
  { metric: "Highest sugar", item: "Triple Chocolate Meltdown", figure: "87g" },
  { metric: "Highest carbohydrate", item: "Four Cheese Mac & Cheese", figure: "160g" },
  { metric: "Most fiber", item: "Impossible™ Cheeseburger", figure: "12g" },
  { metric: "Cheapest item", item: "Fresh Brewed Iced Tea / Fountain Drinks", figure: "$2.99" },
  { metric: "Most expensive", item: "The Really BIG Meal Deal", figure: "$29.99" }
];

export default function MenuPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Menu",
        "@id": "https://applebees-menus.us/menu/#menu",
        "name": "Applebee's Full Menu with Prices and Calories",
        "description": "Comprehensive guide to the full Applebee's menu spanning 20 categories with verified prices, calories, and nutrition.",
        "mainEntityOfPage": "https://applebees-menus.us/menu",
        "hasMenuSection": menuData.map(category => ({
          "@type": "MenuSection",
          "name": category.title,
          "hasMenuItem": category.items.map(item => {
            const isPromoOnly = item.price.toLowerCase().includes("promo") || item.price.toLowerCase().includes("varies");
            const priceNumber = item.price.replace(/[^0-9.]/g, '');

            const menuItemNode: Record<string, any> = {
              "@type": "MenuItem",
              "name": item.name,
              "description": item.description || item.tableDescription || `Applebee's ${item.name}`,
              "nutrition": {
                "@type": "NutritionInformation",
                "calories": item.calories
              }
            };

            if (item.image) {
              menuItemNode.image = `https://applebees-menus.us${item.image}`;
            }

            // Only add fixed Offer node if price is a standard fixed dollar amount
            if (!isPromoOnly && priceNumber && !isNaN(Number(priceNumber))) {
              menuItemNode.offers = {
                "@type": "Offer",
                "price": priceNumber,
                "priceCurrency": "USD"
              };
            }

            return menuItemNode;
          })
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://applebees-menus.us/menu/#breadcrumb",
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
            "name": "Menu",
            "item": "https://applebees-menus.us/menu"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/menu/#faq",
        "name": "Applebee's Menu Frequently Asked Questions",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Menu', href: '/menu' }]} />

      {/* Hero & Structured Description under H1 (§1) */}
      <section className={styles.hero}>
        <h1>Applebee&apos;s Menu with Prices and Calories</h1>
        <div className={styles.answerBlock}>
          <p>
            The full Applebee&apos;s menu spans 20 categories and roughly 60 items, from $2.99 fountain drinks to a $29.99 meal deal, and 0 to 2,200 calories. Every item below shows its price and calorie count. The lightest item is Steamed Broccoli at 100 calories; the heaviest is The Classic Combo appetizer platter at 2,200  more than any entrée on the menu.
          </p>
        </div>
        <p className={styles.locationNotice}>
          Prices and availability vary by location  Applebee&apos;s restaurants are independently franchised. Use the <Link href="/locations">location finder</Link> to check your nearest restaurant.
        </p>
      </section>

      <div className={styles.contentContainer}>
        {/* §2  Current Specials */}
        <section className={styles.contentSection} id="specials">
          <h2>Applebee&apos;s Menu Specials Today</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              Applebee&apos;s runs several recurring menu specials: 2 for $25, half price appetizers during happy hour windows, and periodic All You Can Eat promotions. Participation and pricing are set by each franchise location, so what is running varies.
            </p>
          </div>

          <div className={styles.specialsGrid}>
            <article className={styles.specialCard}>
              <h3>2 for $25</h3>
              <p>One full-size appetizer plus two full-size entrées. The most consistent offer on the menu.</p>
              <Link href="/menu/2-for-25">Full details &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>Half Price Appetizers</h3>
              <p>Most core appetizers at 50% off during afternoon and late-night windows. Combination platters are excluded.</p>
              <Link href="/happy-hour">Times and inclusions &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>The Really BIG Meal Deal</h3>
              <p>A bundled burger or chicken sandwich with fries and a drink.</p>
              <Link href="/menu/really-big-meal-deal">Details &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>All You Can Eat</h3>
              <p>Runs seasonally rather than year-round during promotional windows.</p>
              <Link href="/specials-and-deals">Current status &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>Drink of the Month</h3>
              <p>A rotating featured cocktail at a promotional price, which is how the $1 Dollarita periodically returns.</p>
              <Link href="/menu/signature-cocktails">Drinks menu &rarr;</Link>
            </article>

            <article className={styles.specialCard}>
              <h3>Local & Daily Specials</h3>
              <p>Some restaurants run kids-eat-free weeknights or local lunch pricing that is not published centrally. Calling your <Link href="/locations">nearest restaurant</Link> is the only reliable way to know.</p>
              <Link href="/locations">Find nearest location &rarr;</Link>
            </article>
          </div>

          <p className={styles.textParagraph}>
            Full breakdown of every current offer: <Link href="/specials-and-deals">specials and deals</Link>.
          </p>
        </section>

        {/* §3  Seasonal Menu Updates */}
        <section className={styles.contentSection} id="seasonal-updates">
          <h2>New and Seasonal Items on the Applebee&apos;s Menu</h2>
          <p className={styles.textParagraph}>
            Applebee&apos;s rotates limited-time items through the year alongside its permanent menu. Current additions:
          </p>
          <ul className={styles.infoList}>
            <li><strong>Whole Lotta Bacon Burger</strong>  1,150 calories, $15.99</li>
            <li><strong>Sweet &amp; Spicy Chicken Sandwich</strong>  980 calories, $13.99</li>
          </ul>
          <p className={styles.textParagraph}>
            Seasonal rotations typically bring new drinks more often than new food  the drink of the month programme changes continuously while food LTOs appear a few times a year.
          </p>
          <p className={styles.textParagraph}>
            What tends to change and when: lighter and fruit-forward drinks in spring and summer, heavier comfort items and warmer drinks in autumn and winter, and a value-offer push in the slower months after the holidays.
          </p>
          <p className={styles.textParagraph}>
            Full current additions: <Link href="/menu/new-items">new items</Link>. <em>(Updated August 2026)</em>
          </p>
        </section>

        {/* §4  Veterans Day */}
        <section className={styles.contentSection} id="veterans-day">
          <h2>Applebee&apos;s Veterans Day Menu</h2>
          <div className={styles.sectionAnswerBlock}>
            <p>
              Applebee&apos;s has run a free meal offer for veterans and active-duty military on Veterans Day, 11 November, for many years. The offer typically covers a limited menu of entrée choices, is dine-in only, and requires proof of military service. Participation is set by each location.
            </p>
          </div>

          <p className={styles.textParagraph}><strong>How it usually works:</strong></p>
          <ul className={styles.infoList}>
            <li><strong>A limited menu, not the full menu:</strong> The free-meal offer covers a selected list of entrées rather than anything on the menu  typically including items from the <Link href="/menu/chicken">chicken</Link>, <Link href="/menu/handcrafted-burgers">burgers</Link> and <Link href="/menu/pasta">pasta</Link> sections.</li>
            <li><strong>Dine-in only:</strong> These offers historically do not extend to <Link href="/takeout">takeout</Link> or <Link href="/delivery">delivery</Link>.</li>
            <li><strong>Proof of service required:</strong> A military ID, discharge paperwork, or similar documentation.</li>
            <li><strong>Beverages and extras:</strong> Not usually included, and gratuity is separate.</li>
            <li><strong>Participation varies by location:</strong> As with every Applebee&apos;s promotion, individual franchises decide whether to take part. Confirming with your <Link href="/locations">local restaurant</Link> before travelling is worth doing.</li>
          </ul>
        </section>
      </div>

      {/* §5  The Menu by Category (Category Grid) */}
      <MenuGrid />

      {/* The Full Detailed Categorized Menu Blocks */}
      <FullMenu />

      <div className={styles.contentContainer}>
        {/* §6  Menu Highlights */}
        <section className={styles.contentSection} id="highlights">
          <h2>Applebee&apos;s Menu at a Glance</h2>
          <p className={styles.textParagraph}>
            A cross-category comparison comparing nutritional and pricing anchors across all 20 categories simultaneously:
          </p>

          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.highlightsTable}>
                <caption className="sr-only">Applebee&apos;s Menu Highlights and Cross-Category Extremes</caption>
                <thead>
                  <tr>
                    <th scope="col">Category Extreme</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Figure</th>
                  </tr>
                </thead>
                <tbody>
                  {menuHighlights.map((row, index) => (
                    <tr key={index}>
                      <td className={styles.metricCell}>{row.metric}</td>
                      <td>{row.item}</td>
                      <td className={styles.figureCell}>{row.figure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className={styles.textParagraph}><strong>Three key insights this comparison reveals:</strong></p>
          <ul className={styles.infoList}>
            <li><strong>The heaviest thing on the menu is an appetizer, not an entrée.</strong> The Classic Combo at 2,200 calories exceeds every burger, steak and pasta dish.</li>
            <li><strong>A pasta dish carries the most protein, at 77g</strong>  more than any steak on the menu.</li>
            <li><strong>Sodium does not track with calories.</strong> The highest-sodium item is a 1,080-calorie appetizer; the lowest-sodium entrée is a rack of barbecue ribs.</li>
          </ul>
          <p className={styles.textParagraph}>
            Full data for every item: see our complete <Link href="/nutrition">nutrition and calories</Link> guide.
          </p>
        </section>

        {/* §7  How to Order */}
        <section className={styles.contentSection} id="ordering">
          <h2>Ordering from the Applebee&apos;s Menu</h2>
          <div className={styles.orderingGrid}>
            <article className={styles.orderingCard}>
              <h3>Dine-In</h3>
              <p>The full menu experience, plus promotions that are strictly dine-in only  including half price appetizers during happy hour.</p>
            </article>

            <article className={styles.orderingCard}>
              <h3>App &amp; Website</h3>
              <p>Direct ordering with live pricing for your selected location and access to loyalty rewards without third-party markups.</p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Carside To Go</h3>
              <p>Order ahead online or by phone, park in a reserved curbside spot, and staff bring your order out. See <Link href="/takeout">takeout</Link>.</p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Delivery</h3>
              <p>Available at participating locations directly and through major delivery platforms with location-specific menus. See <Link href="/delivery">delivery</Link>.</p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Catering</h3>
              <p>Party-sized platters serving 6–8 guests each for family gatherings, office lunches, and events. See <Link href="/catering">catering</Link>.</p>
            </article>

            <article className={styles.orderingCard}>
              <h3>Menu Consistency</h3>
              <p>Menu availability is consistent across ordering methods, though select fried items omit from delivery and dine-in discounts do not transfer.</p>
            </article>
          </div>
        </section>
      </div>

      {/* §8  Downloadable Menus (Moved below menu content) */}
      <section className={styles.pdfSection} id="downloads">
        <h2>Applebee&apos;s Menu PDF Downloads</h2>
        <p className={styles.pdfSubtitle}>
          Download official printable menus, verified nutrition facts, catering packages, and cocktail guides in PDF format.
        </p>

        <div className={styles.pdfGrid}>
          <a href="/pdfs/applebees-full-menu-with-prices.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>📄</div>
            <div className={styles.pdfInfo}>
              <strong>Full Menu with Prices (PDF)</strong>
              <span>Complete 2026 dine-in &amp; takeout menu • Printable</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-nutrition-and-allergen-guide.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>🥗</div>
            <div className={styles.pdfInfo}>
              <strong>Nutrition &amp; Allergen Guide (PDF)</strong>
              <span>Calories, macros, fat, sodium &amp; allergens • Verified</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-catering-party-platters-menu.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>🍱</div>
            <div className={styles.pdfInfo}>
              <strong>Catering &amp; Party Platters (PDF)</strong>
              <span>Platter math, headcount blueprint &amp; event pricing</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>

          <a href="/pdfs/applebees-drinks-cocktails-happy-hour-menu.pdf" download className={styles.pdfCard}>
            <div className={styles.pdfIcon}>🍹</div>
            <div className={styles.pdfInfo}>
              <strong>Drinks &amp; Happy Hour Menu (PDF)</strong>
              <span>Mucho cocktails, Dollarita specials &amp; fountain sips</span>
            </div>
            <span className={styles.downloadBadge}>Download</span>
          </a>
        </div>
      </section>

      {/* §9  Frequently Asked Questions */}
      <section className={styles.faqSection} id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <article key={index} className={styles.faqCard}>
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
