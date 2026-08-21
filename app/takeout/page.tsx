import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LocationSearch from '@/components/LocationSearch';
import { locationData } from '@/data/locations';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Takeout: Order Online, Carside To Go & Pickup",
  description: "Order Applebee's takeout for pickup or Carside To Go. How to order, what it costs versus delivery, which dishes travel best, and how to reheat leftovers.",
  alternates: {
    canonical: 'https://applebees-menus.us/takeout',
  }
};

const faqData = [
  {
    question: "Does Applebee's do takeout?",
    answer: "Yes. Takeout is available at essentially every location, either as standard pickup or Carside To Go, where the order is brought to your car. Orders can be placed through the app, the website, or by phone."
  },
  {
    question: "What is Applebee's Carside To Go?",
    answer: "Curbside pickup. You order ahead, park in a marked Carside space, check in through the app with your spot number and vehicle description, and someone brings the order out to you."
  },
  {
    question: "Is Carside To Go free?",
    answer: "The service itself is included in the menu price. Some individual locations apply a separate to-go service or packaging fee, so it is worth checking the total breakdown before submitting an order."
  },
  {
    question: "Is takeout cheaper than delivery at Applebee's?",
    answer: "Yes. Takeout uses in-restaurant menu prices with no delivery or service fees. Third-party delivery platforms list marked-up menu prices and add fees on top."
  },
  {
    question: "How do I stop Applebee's takeout getting soggy?",
    answer: "Order sauces and dressings on the side and toss them at home. For sides, swapping fries for steamed vegetables or mashed potatoes avoids the item that degrades fastest."
  },
  {
    question: "What is the best way to reheat Applebee's leftovers?",
    answer: "An air fryer for anything fried  roughly 4–6 minutes at 375°F for wings. For steak and chicken, slice thin and warm briefly in a hot skillet. Avoid the microwave for fried food and bread."
  },
  {
    question: "Can I get half price appetizers for takeout?",
    answer: "No. Half price appetizers are a dine-in promotion. Most other menu deals, including 2 for $25, do apply to takeout at participating locations."
  },
  {
    question: "Can I use a gift card for an online takeout order?",
    answer: "Yes. There is a field to enter the gift card number and PIN during checkout on the app or website."
  },
  {
    question: "Should I tip for Carside To Go?",
    answer: "It is a judgement call. The person bringing your order out has checked, packed and carried it. Most people tip below the dine-in standard, and go higher for large or complicated orders."
  },
  {
    question: "How long does Applebee's takeout take?",
    answer: "The app gives a pickup time calculated from current kitchen load. Ordering ahead avoids joining the queue behind dine-in tables, which is what makes walk-in to-go orders slow at peak times."
  }
];

export default function TakeoutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/takeout/#webpage",
        "url": "https://applebees-menus.us/takeout",
        "name": "Applebee's Takeout: Order Online, Carside To Go & Pickup",
        "description": "Order Applebee's takeout for pickup or Carside To Go. How to order, what it costs versus delivery, which dishes travel best, and how to reheat leftovers.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/takeout/#breadcrumb"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://applebees-menus.us/takeout/#reheating-guide",
        "name": "How to Reheat Applebee's Leftovers",
        "description": "Step-by-step culinary instructions for reheating Applebee's fried appetizers, steaks, pasta, and burgers.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Reheat Fried Items in an Air Fryer",
            "text": "Place boneless wings or wonton tacos in an air fryer at 375°F for 4–6 minutes to restore crispiness without drying out."
          },
          {
            "@type": "HowToStep",
            "name": "Warm Steaks and Chicken in a Skillet",
            "text": "Slice meat thin and warm in a hot pan with a small amount of oil for under two minutes to prevent moisture loss."
          },
          {
            "@type": "HowToStep",
            "name": "Reheat Pasta on the Stovetop",
            "text": "Warm pasta in a saucepan over medium-low heat with a splash of water or milk to emulsify and restore sauce consistency."
          },
          {
            "@type": "HowToStep",
            "name": "Deconstruct and Reheat Burgers",
            "text": "Separate buns, toppings, and patties. Warm the patty in a hot skillet, toast the buns, and reassemble."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/takeout/#faq",
        "name": "Applebee's Takeout Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/takeout/#breadcrumb",
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
            "name": "Takeout",
            "item": "https://applebees-menus.us/takeout"
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
      <Breadcrumb items={[{ label: 'Takeout', href: '/takeout' }]} />

      <main className={styles.main}>
        {/* H1 & §1  FINDER + OPENING */}
        <header className={styles.hero} role="banner" aria-label="Takeout Header">
          <h1>Applebee's Takeout and Carside To Go</h1>
          <p className={styles.heroLead}>
            Applebee's takeout is available at essentially every location, either as standard pickup inside or as Carside To Go, where the order is brought out to your car. Both use the same in-restaurant menu prices  no markup, no delivery fee.
          </p>
          <p className={styles.heroSub}>
            That makes takeout the cheapest way to eat Applebee's outside the restaurant. This page covers how to order, what it costs compared to <Link href="/delivery">delivery</Link>, which dishes survive the trip, and how to reheat what is left.
          </p>
        </header>

        {/* Location Finder Widget Placed Above The Fold */}
        <section className={styles.finderSection}>
          <LocationSearch locationsData={locationData} />
        </section>

        {/* §2  HOW TO ORDER */}
        <section className={styles.clusterSection} id="how-to-order">
          <h2>How to Order Applebee's Takeout</h2>

          <div className={styles.answerBlock}>
            <p>
              Order Applebee's takeout through the Applebee's app or website, or by phone. Ordering ahead through the app is fastest  it sends the order straight to the kitchen system and gives a pickup time based on current kitchen load.
            </p>
          </div>

          <h3>Carside To Go</h3>
          <p>
            Order ahead, park in a marked Carside space, and check in through the app with your spot number and vehicle description. Someone brings the order to your window. No going inside, no queueing.
          </p>
          <p>
            Applebee's has run curbside pickup since the early 2000s, well before it became standard across the industry, which is why the marked bays and the staffing are set up for it rather than improvised.
          </p>

          <h3>Standard pickup</h3>
          <p>
            Order ahead and collect at the host stand or the to-go counter. Functionally the same; just walk in instead of waiting in the car.
          </p>

          <h3>Ordering at the restaurant</h3>
          <p>
            Placing a to-go order at the host stand without ordering ahead means your ticket joins the queue behind everyone already seated and everyone who ordered online. At 7 PM on a Friday that is a long wait in the lobby. Order ahead even ten minutes out and it changes the experience.
          </p>

          <h3>Phone orders</h3>
          <p>
            Still works, and useful for complicated modifications or allergy questions where speaking to someone is easier than using dropdowns. For a straightforward order, the app is faster and removes the risk of something being misheard.
          </p>
        </section>

        {/* §3  TAKEOUT VS DELIVERY COST */}
        <section className={styles.clusterSection} id="takeout-vs-delivery-cost">
          <h2>Is Takeout Cheaper Than Delivery at Applebee's?</h2>

          <div className={styles.answerBlock}>
            <p>
              Yes, by a wide margin. Takeout uses in-restaurant menu prices with no delivery fee, no service fee and no markup. Third-party delivery platforms list higher menu prices because commission is built in, then add service and delivery fees on top.
            </p>
          </div>

          <div className={styles.tableCard} style={{ maxWidth: '750px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Ordering Channel</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Menu Price</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Delivery Fee</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Service Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Ordering Channel"><strong>Takeout / Carside To Go</strong></td>
                    <td data-label="Menu Price" style={{ textAlign: 'center', color: '#16a34a', fontWeight: 700 }}>In-restaurant</td>
                    <td data-label="Delivery Fee" style={{ textAlign: 'center' }}>None</td>
                    <td data-label="Service Fee" style={{ textAlign: 'right' }}>None</td>
                  </tr>
                  <tr>
                    <td data-label="Ordering Channel"><strong>Direct Delivery (App/Site)</strong></td>
                    <td data-label="Menu Price" style={{ textAlign: 'center', color: '#16a34a', fontWeight: 700 }}>In-restaurant</td>
                    <td data-label="Delivery Fee" style={{ textAlign: 'center' }}>Yes</td>
                    <td data-label="Service Fee" style={{ textAlign: 'right' }}>Usually none</td>
                  </tr>
                  <tr>
                    <td data-label="Ordering Channel"><strong>Third-Party Apps (DoorDash/Uber)</strong></td>
                    <td data-label="Menu Price" style={{ textAlign: 'center', color: '#dc2626', fontWeight: 700 }}>Marked up</td>
                    <td data-label="Delivery Fee" style={{ textAlign: 'center' }}>Yes</td>
                    <td data-label="Service Fee" style={{ textAlign: 'right', color: '#dc2626', fontWeight: 700 }}>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            If the restaurant is a short drive away, takeout wins on cost every time. Full breakdown of the delivery routes: see our complete guide to <Link href="/delivery">Applebee's delivery</Link>.
          </p>

          <h3>Fees worth checking</h3>
          <p>
            Carside To Go itself is not a paid service  bringing the food out is included. Some individual locations do apply a separate to-go service or packaging fee to off-premise orders, since a takeout order does not generate the drink sales a dine-in table does.
          </p>
          <p>
            This is a franchise-level decision rather than a company-wide policy, so it varies. Build the order in the app and check the total breakdown before submitting. If a service fee appears on a takeout order, that is a local charge.
          </p>

          <h3>Tipping</h3>
          <p>
            Takeout tipping is a judgement call rather than a rule. The person handling your order is checking the kitchen's output against the ticket, packing it, verifying modifications, and carrying it out to the car.
          </p>
          <p>
            Most people land somewhere below the dine-in standard. Larger orders, complicated modifications, and bad weather are the situations where people tend to go higher.
          </p>
        </section>

        {/* §4  WHAT TRAVELS WELL */}
        <section className={styles.clusterSection} id="what-travels-well">
          <h2>Which Applebee's Dishes Hold Up for Takeout</h2>
          <p>
            This is the question nobody answers, and it makes more difference to the meal than anything else on this page.
          </p>
          <p>
            The core problem is steam. Hot food in a closed container produces steam, steam condenses, and condensation lands back on the food. Fried items lose their texture within about ten minutes of that.
          </p>

          <h3>Travels well</h3>
          <ul className={styles.textList}>
            <li>
              <strong><Link href="/menu/pasta">Pasta</Link>:</strong> The most reliable category. Sauce protects it, it holds heat, and it reheats better than anything else on the menu.
            </li>
            <li>
              <strong>Grilled proteins:</strong> <Link href="/menu/steaks-and-ribs">Steaks</Link>, <Link href="/menu/chicken">grilled chicken</Link> and <Link href="/menu/seafood">salmon</Link> keep their texture. Sides are the weak point, not the protein.
            </li>
            <li>
              <strong><Link href="/menu/handcrafted-burgers">Handcrafted burgers</Link>:</strong> If you eat them within twenty minutes. Longer than that and the bun starts absorbing moisture.
            </li>
            <li>
              <strong><Link href="/menu/irresist-a-bowls">Irresist-A-Bowls</Link>:</strong> Built as layered dishes, so they travel in the condition they were assembled.
            </li>
          </ul>

          <h3>Needs a modification</h3>
          <ul className={styles.textList}>
            <li>
              <strong>Anything fried and sauced:</strong> Boneless wings tossed in sauce sit in warm liquid for the whole journey and the coating softens. Ordering them plain with sauce in a separate container, then tossing at home, gives you the texture you paid for. This one change makes more difference than any other. See our <Link href="/menu/appetizers">appetizers</Link>.
            </li>
            <li>
              <strong><Link href="/menu/salads">Salads</Link>:</strong> Dressing wilts greens and softens crispy toppings. Ask for dressing and crunchy elements on the side  it is not always the default.
            </li>
            <li>
              <strong>Fries:</strong> The single worst travelling item on the menu. Substituting <Link href="/menu/sides">steamed vegetables or mashed potatoes</Link> means the side arrives in usable condition.
            </li>
          </ul>

          <h3>Not offered for takeout</h3>
          <p>
            Some items are absent from the to-go menu entirely  typically skillet dishes served sizzling and ice-cream desserts. Both depend on temperature contrast that does not survive a container. If something on the <Link href="/menu">full menu</Link> is missing from the takeout menu, this is usually why.
          </p>
        </section>

        {/* §5  REHEATING LEFTOVERS */}
        <section className={styles.clusterSection} id="reheating-guide">
          <h2>How to Reheat Applebee's Leftovers</h2>
          <p>
            Portions are large enough that leftovers are common. The microwave is the wrong tool for most of them.
          </p>

          <div className={styles.reheatGrid}>
            <div className={styles.reheatCard}>
              <h3>Fried items  Air Fryer</h3>
              <p>
                Dry circulating heat re-crisps breading that a microwave turns rubbery. Boneless wings and wonton tacos take about 4–6 minutes at 375°F. Mozzarella sticks need less  around 3 minutes at 350°F, and watch them closely, because the cheese will burst through if left too long. Fries take 3–5 minutes at 400°F, tossed halfway.
              </p>
            </div>

            <div className={styles.reheatCard}>
              <h3>Steak & Chicken  Skillet</h3>
              <p>
                Slice thin first, then warm in a hot pan with a little oil for under two minutes. Reheating a whole piece of meat dries it out; slicing first means it warms through before it overcooks.
              </p>
            </div>

            <div className={styles.reheatCard}>
              <h3>Pasta  Stovetop</h3>
              <p>
                A little water or milk added while reheating brings the sauce back rather than letting it split in the microwave.
              </p>
            </div>

            <div className={styles.reheatCard}>
              <h3>Burgers  Deconstruct</h3>
              <p>
                Separate the components. Warm the patty in a pan, toast the bun, then rebuild. Reheating an assembled burger produces a steamed, soggy bun.
              </p>
            </div>
          </div>

          <p>
            <strong>Golden rule:</strong> Nothing fried should go in the microwave. If an air fryer is not available, a conventional oven at around 375°F does the same job more slowly.
          </p>
        </section>

        {/* §6  DEALS ON TAKEOUT ORDERS */}
        <section className={styles.clusterSection} id="deals-on-takeout">
          <h2>Which Applebee's Deals Apply to Takeout</h2>
          <p>
            <strong>Transfers:</strong> <Link href="/menu/2-for-25">2 for $25</Link> and standard menu deals apply to takeout at most locations. App-based rewards and offers apply directly to a to-go cart.
          </p>
          <p>
            <strong>Does not transfer:</strong> <Link href="/happy-hour">Half price appetizers</Link> and happy hour drink pricing are dine-in promotions.
          </p>
          <p>
            <strong>Gift cards:</strong> <Link href="/gift-card-deals">Gift cards</Link> work normally on app and website orders  there is a field for the card number and PIN at checkout.
          </p>
          <p>
            <strong>Large orders:</strong> For large parties, check <Link href="/catering">catering</Link> first. Past six or seven meals, catering is priced for volume and works out cheaper than assembling individual entrées. See all current offers on our <Link href="/specials-and-deals">specials and deals</Link> page.
          </p>
        </section>

        {/* §7  DUAL-BRANDED LOCATIONS */}
        <section className={styles.clusterSection} id="dual-branded">
          <h2>Applebee's and IHOP Under One Roof</h2>
          <p>
            A small but growing number of locations operate as combined Applebee's and IHOP restaurants under one roof, with a single kitchen and one menu organised by daypart.
          </p>
          <p>
            For takeout this means one order can include items from both brands  an Applebee's burger alongside IHOP pancakes, bagged together and collected in one trip. Some locations also carry items exclusive to the dual-brand format.
          </p>
          <p>
            <strong>Scale check:</strong> The first US dual-branded location opened in Seguin, Texas in February 2025, and the format reached 44 US locations by mid-2026 out of roughly 1,600 Applebee's restaurants. Dine Brands is expanding it quickly, but the odds that your local restaurant is one are still low. The <Link href="/locations">location finder</Link> shows which format a restaurant runs.
          </p>
        </section>

        {/* §8  FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Takeout  Frequently Asked Questions</h2>
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
