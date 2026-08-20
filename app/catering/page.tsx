import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Catering: Party Platters, Prices & Ordering",
  description: "Applebee's catering serves 6-8 per platter at about $10 per person. How much food to order for your headcount, lead times, delivery options and keeping it hot.",
  alternates: {
    canonical: 'https://applebees-menus.us/catering',
  }
};

const faqData = [
  {
    question: "How many people does an Applebee's catering platter serve?",
    answer: "Each catering dish is designed to serve 6 to 8 guests as part of a balanced spread. For teenagers, sports teams or heavy eaters, plan closer to 4 to 5 per platter."
  },
  {
    question: "How much does Applebee's catering cost per person?",
    answer: "About $10 per person for a balanced order of appetizers, entrées and sides. Premium items such as rib platters raise it. Pricing varies by location."
  },
  {
    question: "Is there a minimum order for Applebee's catering?",
    answer: "No. There is no minimum order requirement."
  },
  {
    question: "How much notice does Applebee's catering need?",
    answer: "Orders can be placed up to two weeks ahead, and with as little as two hours' notice depending on size. Orders of three platters or more typically need 24 hours."
  },
  {
    question: "Does Applebee's catering include plates and cutlery?",
    answer: "Yes. Plates, serving utensils and cutlery are included in catering orders — you do not need to request them separately."
  },
  {
    question: "Does Applebee's deliver catering orders?",
    answer: "It varies by location. Some restaurants deliver, many prefer pickup for larger orders, and Applebee's catering is also available through business catering platforms that handle scheduled delivery."
  },
  {
    question: "Can Applebee's catering containers go in the oven?",
    answer: "No. The containers are microwave safe but must not be placed in an oven. For extended events, transfer food into aluminium pans in a chafing dish setup."
  },
  {
    question: "How do I keep Applebee's catering hot during an event?",
    answer: "The insulated containers hold temperature for a short window. For anything longer than about forty-five minutes of service, transfer to chafing dishes over a hot water bath with fuel cans, holding food above 135°F."
  },
  {
    question: "How much food should I order for 20 people?",
    answer: "Roughly seven platters — two appetizers, three entrées and two salads or sides. Adjust upward for younger or heavier-eating groups."
  },
  {
    question: "Is Applebee's catering available at every location?",
    answer: "No. Catering availability, pricing and participation vary by location, since restaurants are independently owned. Check with your nearest restaurant."
  },
  {
    question: "Can I order Applebee's catering tax-exempt?",
    answer: "Yes, for qualifying organisations. Ordering directly requires presenting a printed exemption certificate to the restaurant. Business catering platforms allow the certificate to be stored on the account and applied automatically."
  }
];

export default function CateringPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/catering/#webpage",
        "url": "https://applebees-menus.us/catering",
        "name": "Applebee's Catering: Party Platters, Prices & Ordering",
        "description": "Applebee's catering serves 6-8 per platter at about $10 per person. How much food to order for your headcount, lead times, delivery options and keeping it hot.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/catering/#breadcrumb"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://applebees-menus.us/catering/#chafing-dish-setup",
        "name": "How to Set Up a Chafing Dish for Applebee's Catering",
        "description": "Step-by-step instructions for safely setting up a water bath and sterno fuel to keep party platters hot above 135°F.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Position the Wire Rack",
            "text": "Place the wire chafing rack on a stable, heat-tolerant buffet table or surface."
          },
          {
            "@type": "HowToStep",
            "name": "Add Hot Water to the Water Pan",
            "text": "Drop in the full-size aluminium water pan and add roughly one inch of hot water."
          },
          {
            "@type": "HowToStep",
            "name": "Light the Gel Fuel Cans",
            "text": "Uncap and ignite the gel fuel canisters placed safely underneath the water pan."
          },
          {
            "@type": "HowToStep",
            "name": "Transfer Food into Aluminium Pans",
            "text": "Transfer hot food from the plastic catering containers into half-size aluminium food pans, then place them directly into the steaming water bath."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/catering/#faq",
        "name": "Applebee's Catering Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/catering/#breadcrumb",
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
            "name": "Catering",
            "item": "https://applebees-menus.us/catering"
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
      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }]} />

      <main className={styles.main}>
        {/* H1 & §1 — OPENING */}
        <header className={styles.hero} role="banner" aria-label="Catering Header">
          <h1>Applebee's Catering: Platters, Pricing and How Much to Order</h1>
          <p className={styles.heroLead}>
            Applebee's catering works on a platter model. Each dish serves 6 to 8 people, pricing lands at roughly $10 per person for a balanced spread, and there is no minimum order.
          </p>
          <p className={styles.heroSub}>
            Orders can be placed up to two weeks ahead or, depending on size, with as little as two hours' notice. Plates, cutlery and serving utensils are included — you do not need to ask for them.
          </p>
          <p className={styles.heroHighlight}>
            The hard part is not ordering. It is working out how much to order. This page covers the platter math for common headcounts, what holds heat and what does not, lead times that actually work, and how to keep food safe across a two-hour event.
          </p>
        </header>

        {/* §2 — THE ORDERING MATH */}
        <section className={styles.clusterSection} id="ordering-math">
          <h2>How Much Applebee's Catering to Order</h2>
          <p>
            This is the section competitors do not have. Everyone lists the menu. Nobody tells you how many trays to buy.
          </p>
          <p>
            <strong>The base rule:</strong> One platter serves 6–8 adults as one component of a spread, not as the whole meal. A tray of pasta feeds 6–8 people only if there is also an appetizer and a salad. On its own it feeds fewer.
          </p>

          <h3>Platters by headcount</h3>
          <div className={styles.tableCard} style={{ maxWidth: '750px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Guests</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Appetizers</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Entrées</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Sides / Salads</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Rough Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>10 Guests</strong></td>
                    <td style={{ textAlign: 'center' }}>1</td>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'center' }}>1</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#c8102e' }}>4 platters</td>
                  </tr>
                  <tr>
                    <td><strong>15 Guests</strong></td>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#c8102e' }}>6 platters</td>
                  </tr>
                  <tr>
                    <td><strong>20 Guests</strong></td>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'center' }}>3</td>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#c8102e' }}>7 platters</td>
                  </tr>
                  <tr>
                    <td><strong>30 Guests</strong></td>
                    <td style={{ textAlign: 'center' }}>3</td>
                    <td style={{ textAlign: 'center' }}>4</td>
                    <td style={{ textAlign: 'center' }}>3</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#c8102e' }}>10 platters</td>
                  </tr>
                  <tr>
                    <td><strong>50 Guests</strong></td>
                    <td style={{ textAlign: 'center' }}>5</td>
                    <td style={{ textAlign: 'center' }}>7</td>
                    <td style={{ textAlign: 'center' }}>5</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#c8102e' }}>17 platters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Adjust for who is eating</h3>
          <p>
            The 6–8 figure assumes mixed adults at a seated meal. Real groups vary:
          </p>
          <ul className={styles.textList}>
            <li><strong>Sports teams, teenagers, manual crews:</strong> Assume 4–5 per platter, not 6–8. Order about 40% more than the table suggests.</li>
            <li><strong>Office lunch, mixed desk workers:</strong> 6–8 holds. People eat less at a desk than at a table.</li>
            <li><strong>Standing events with no seating:</strong> People eat less overall but graze longer. Fewer entrées, more appetizers.</li>
            <li><strong>Evening events where alcohol is served:</strong> People eat more, and later. Add a platter.</li>
          </ul>

          <h3>The ratio that works</h3>
          <p>
            For most events, the split that avoids both waste and shortage is roughly one appetizer platter for every two entrée platters, plus one salad or side for every two entrées.
          </p>
          <p>
            Skewing heavily to entrées is the common mistake. Pasta and chicken trays are filling, and a table with four entrées and no starter runs out of variety long before it runs out of food.
          </p>
          <p>
            Browse the catering categories: <Link href="/menu/appetizers">appetizers</Link>, <Link href="/menu/chicken">chicken</Link>, <Link href="/menu/pasta">pasta</Link>, <Link href="/menu/salads">salads</Link>, and <Link href="/menu/sides">sides</Link>.
          </p>
        </section>

        {/* §3 — PRICING */}
        <section className={styles.clusterSection} id="catering-prices">
          <h2>Applebee's Catering Prices</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's catering costs about $10 per person for a balanced spread of appetizers, entrées and sides. There is no minimum order. Pricing and participation vary by location, since restaurants are independently franchised.
            </p>
          </div>

          <h3>What moves the number</h3>
          <p>
            The $10 figure describes a balanced order. It goes up when the mix changes:
          </p>
          <ul className={styles.textList}>
            <li><strong>Premium items raise it:</strong> Rib platters and multiple appetizer trays push the per-head cost above the baseline.</li>
            <li><strong>Pasta and rice-based trays lower it:</strong> These are the highest-yield items per dollar, which is why they anchor most catering orders.</li>
            <li><strong>Location changes it:</strong> Franchise pricing varies the same way it does on the <Link href="/menu">regular menu</Link> — a metro location costs more than a rural one.</li>
          </ul>

          <h3>Getting an accurate quote</h3>
          <p>
            Call the restaurant with three pieces of information: headcount, event type, and whether it is pickup or delivery. That gets a real number in a few minutes. Guessing from a published price list will be off, because the list does not know your location or your mix. Find your restaurant in our <Link href="/locations">location finder</Link>.
          </p>
        </section>

        {/* §4 — WHAT HOLDS UP AND WHAT DOESN'T */}
        <section className={styles.clusterSection} id="what-holds-up">
          <h2>Which Applebee's Catering Items Travel and Hold Heat</h2>
          <p>
            Catering menus differ from dine-in menus for one reason: some food survives bulk transport and holding, and some does not.
          </p>

          <h3>Holds heat well</h3>
          <ul className={styles.textList}>
            <li><strong>Pasta trays:</strong> The best-performing catering item on the menu. Sauce insulates, the dish holds temperature, and it survives an hour in a chafing dish without degrading. See <Link href="/menu/pasta">pasta</Link>.</li>
            <li><strong>Braised and sauced proteins:</strong> Rib platters and sauced chicken hold heat far better than grilled cuts, because the sauce keeps moisture in.</li>
            <li><strong>Rice-based dishes:</strong> Dense, high heat retention, reheats without damage.</li>
          </ul>

          <h3>Needs handling</h3>
          <ul className={styles.textList}>
            <li><strong>Fried appetizers:</strong> Boneless wings and mozzarella sticks lose their texture in a sealed container, because trapped steam softens the coating. Sauce on the side is the fix — toss just before serving rather than at the restaurant.</li>
            <li><strong>Salads:</strong> Order dressing separately. ezCater listings flag this directly, suggesting extra dressing be purchased as a side. Dressed salads sitting in a tray for an hour wilt.</li>
          </ul>

          <h3>Not on the catering menu</h3>
          <p>
            Grilled steaks cooked to temperature and anything served sizzling do not appear on catering menus. A steak that arrives is a steak that has continued cooking in its own heat for thirty minutes. Their absence is deliberate, not an oversight.
          </p>

          <h3>Allergen note</h3>
          <p>
            Applebee's catering listings state that shared cooking and prep areas, including common fryer oil, mean items cannot be guaranteed free of animal products. The same applies to allergen cross-contact. For an event with a guest who has a serious allergy, speak to the restaurant directly rather than relying on menu descriptions. Full data: see <Link href="/nutrition">nutrition and allergens</Link>.
          </p>
        </section>

        {/* §5 — LEAD TIMES */}
        <section className={styles.clusterSection} id="lead-times">
          <h2>How Much Notice Does Applebee's Catering Need?</h2>

          <div className={styles.answerBlock}>
            <p>
              Applebee's accepts catering orders up to two weeks in advance, and with as little as two hours' notice depending on order size. Orders of three platters or more typically require 24 hours.
            </p>
          </div>

          <h3>Why size changes the answer</h3>
          <p>
            Two hours works for a small order dropped into a quiet kitchen. It does not work for a large order dropped into a dinner rush.
          </p>
          <p>
            A catering order competes for the same grill and fryer space as every dine-in table. Placed at 10:00 AM on a Tuesday, there is capacity. Placed at 5:00 PM on a Friday, there is not — and a manager who accepts it either delays your food or the dining room's.
          </p>

          <h3>What notice actually buys you</h3>
          <ul className={styles.textList}>
            <li><strong>24 hours:</strong> Lets the restaurant adjust its stock order so it does not run short mid-prep, and schedule prep time for your platters.</li>
            <li><strong>A few days:</strong> The right window for anything over about 10 platters, or anything on a weekend.</li>
            <li><strong>Two weeks:</strong> The maximum booking window and worth using for dated events — holiday parties, graduations, game days — when every restaurant in the area is under the same pressure.</li>
          </ul>

          <h3>The practical rule</h3>
          <p>
            Small and midweek: two hours is genuinely fine. Large, weekend, or dated: give at least 24 hours and confirm by phone. Check <Link href="/locations">your nearest restaurant</Link> for direct numbers.
          </p>
        </section>

        {/* §6 — PICKUP VS DELIVERY */}
        <section className={styles.clusterSection} id="pickup-vs-delivery">
          <h2>Getting Applebee's Catering to Your Event</h2>
          <p>
            <strong>Pickup:</strong> Order direct and collect, often through <Link href="/takeout">Carside To Go</Link>. Cheapest route, and you control the timing — food leaves the kitchen and goes straight to your event rather than sitting in a queue.
          </p>
          <p>
            <strong>Direct delivery:</strong> Availability depends on the location. Some restaurants deliver catering orders; many prefer pickup for larger ones. Ask when ordering.
          </p>
          <p>
            <strong>ezCater:</strong> Applebee's catering is listed on ezCater, the business catering marketplace, which handles delivery through catering-specific couriers rather than standard food delivery drivers. Relevant differences: couriers carry insulated equipment sized for platters, delivery windows are scheduled rather than as-soon-as-possible, and business accounts handle tax exemption at the platform level.
          </p>
          <p>
            <strong>Which to use:</strong> For a personal event, direct pickup is cheapest. For an office order that needs to arrive at a scheduled time in a building with a reception desk, the corporate platform is built for that and the fee buys real logistics. Standard delivery apps are the wrong tool here — see our guide on <Link href="/delivery">delivery</Link> for why per-item markups make large orders expensive.
          </p>
        </section>

        {/* §7 — KEEPING FOOD HOT AND SAFE */}
        <section className={styles.clusterSection} id="keeping-food-hot">
          <h2>How to Keep Applebee's Catering Hot</h2>
          <p>
            Applebee's supplies insulated containers, and its own guidance confirms food can be held hot through chafing dish setups and sterno kits.
          </p>
          <p className={styles.warningBox}>
            <strong>Important Safety Notice:</strong> The plastic catering containers are microwave safe but <strong>must never go in an oven</strong> or directly over a flame.
          </p>

          <h3>The time limit on containers</h3>
          <p>
            Insulated containers hold serving temperature for a short window — enough to travel and serve immediately. For an event running longer than about forty-five minutes of open service, transfer to chafing dishes.
          </p>

          <h3>Chafing dish setup</h3>
          <p>
            What you need: a wire chafing rack, a full-size water pan, half-size aluminium food pans, and gel fuel cans. Party supply and warehouse stores carry all of it.
          </p>
          <ol className={styles.orderedList}>
            <li>Place the wire chafing rack on a stable, heat-tolerant surface.</li>
            <li>Drop in the full-size water pan and add about an inch of hot water.</li>
            <li>Light the gel fuel cans underneath.</li>
            <li>Transfer food from the catering containers into the aluminium food pans, then set those in the steaming water bath.</li>
          </ol>

          <h3>The temperature that matters</h3>
          <p>
            Hot food should be held above 135°F. Below that, a buffet enters the danger zone where bacteria multiply, and time starts counting.
          </p>
          <p>
            A correctly set chafing dish with a water bath holds food safely for a couple of hours. What it will not do is reheat food that has already gone cold — chafing dishes maintain temperature, they do not restore it. Food that has dropped in temperature should be reheated properly before it goes on the line.
          </p>
        </section>

        {/* §8 — ORDERING BY EVENT TYPE */}
        <section className={styles.clusterSection} id="event-types">
          <h2>What to Order for Different Events</h2>

          <h3>Office lunch</h3>
          <p>
            Fork-friendly wins. Pasta trays, a salad with dressing on the side, and a sandwich or wrap platter. Avoid anything requiring both hands or generating mess — people eat at desks and go back to work.
          </p>
          <p>
            <strong>For 20 people:</strong> Two pasta trays, one salad, one sandwich platter, one appetizer. Add a dessert platter if it is a celebration rather than a working lunch.
          </p>

          <h3>Game day or tailgate</h3>
          <p>
            Finger food, minimal cutlery. Multiple wing platters in different sauces, mozzarella sticks, and a rib platter. Salads mostly go untouched at these events.
          </p>
          <p>
            Sauce on the side matters more here than anywhere else, because the food sits out across a long window. Order napkins generously — they are included, but the standard quantity assumes a seated meal.
          </p>

          <h3>Family gathering or party</h3>
          <p>
            The most mixed group, so the widest spread. Two or three appetizers, three or four entrées across chicken and pasta, plus a salad and a side. Something for children matters — <Link href="/menu/kids-menu">kids menu</Link> items are ordered individually rather than as platters.
          </p>

          <h3>Graduation, holiday parties and dated events</h3>
          <p>
            Every restaurant in the area is under the same pressure on these dates. Book early, use the two-week window, and confirm by phone rather than assuming an online order was seen.
          </p>
        </section>

        {/* §9 — CORPORATE AND TAX-EXEMPT ORDERS */}
        <section className={styles.clusterSection} id="corporate-tax-exemption">
          <h2>Corporate Catering and Tax Exemption</h2>
          <p>
            Schools, non-profits and government bodies can order without sales tax, but the process differs by route:
          </p>
          <ul className={styles.textList}>
            <li>
              <strong>Ordering directly:</strong> Bring a printed copy of your organisation's tax exemption certificate to the restaurant. The manager needs the document to record against the transaction — telling them verbally is not enough, because the exemption has to be evidenced for the franchise's own accounting.
            </li>
            <li>
              <strong>Ordering through a business catering platform:</strong> The certificate is uploaded once to the account profile and applied automatically to future orders. For anyone ordering repeatedly, this removes the paperwork from every individual order.
            </li>
          </ul>
          <p>
            <strong>Practical tip for recurring orders:</strong> If your organisation caters regularly, setting up the business account once is worth more than the per-order saving. Repeat ordering, scheduled delivery windows, and consolidated invoicing all become simpler.
          </p>
        </section>

        {/* §10 — FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Catering — Frequently Asked Questions</h2>
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
