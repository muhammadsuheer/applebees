import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Hours: Opening, Closing & Holiday Schedule 2026",
  description: "What time Applebee's opens and closes, why hours differ between locations, holiday schedules for Thanksgiving and Christmas, and how to check before you go.",
  alternates: {
    canonical: 'https://applebees-menus.us/operating-hours',
  }
};

const faqData = [
  {
    question: "What time does Applebee's open?",
    answer: "Most standalone locations open at 11:00 AM, seven days a week. Applebee's does not serve breakfast, so there is no earlier opening. Dual-branded Applebee's and IHOP locations open earlier to serve breakfast."
  },
  {
    question: "What time does Applebee's close?",
    answer: "Commonly 11:00 PM Sunday through Thursday and midnight on Friday and Saturday. Individual franchises set their own closing times, and urban locations often run later."
  },
  {
    question: "Does Applebee's serve breakfast?",
    answer: "No. There is no breakfast menu at standalone locations, which is why they open at 11:00 AM. Dual-branded locations shared with IHOP serve breakfast from the IHOP side of the menu."
  },
  {
    question: "Is Applebee's open on Christmas Day?",
    answer: "Most locations are closed on December 25th. A small number in tourist areas or travel hubs may open. Assume closed unless the restaurant confirms otherwise."
  },
  {
    question: "Is Applebee's open on Thanksgiving?",
    answer: "Many locations open on Thanksgiving with reduced hours, typically opening later and closing earlier. The regular menu is served rather than a holiday menu."
  },
  {
    question: "What time does Applebee's close on Christmas Eve?",
    answer: "Most locations are open on Christmas Eve but close early in the evening rather than running to normal closing time. Confirm with the restaurant before planning a late meal."
  },
  {
    question: "How late does Applebee's kitchen serve food?",
    answer: "The kitchen typically stops taking orders before the posted closing time, often by around thirty minutes. Arriving an hour before close is the safe margin for a full meal."
  },
  {
    question: "Why are Applebee's hours different at each location?",
    answer: "Applebee's is franchised, and owners set schedules against local demand and staffing costs. Locations with late-night trade stay open later; quieter markets close earlier."
  },
  {
    question: "Are Applebee's hours the same every day?",
    answer: "Opening is consistent at 11:00 AM. Closing is later on Friday and Saturday than Sunday through Thursday at most locations."
  },
  {
    question: "Do Applebee's hours change on holidays?",
    answer: "Yes, and holiday schedules are set locally rather than nationally. Thanksgiving, Christmas Eve and New Year's Eve commonly differ from standard hours, and most locations close on Christmas Day."
  }
];

export default function OperatingHoursPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/operating-hours/#webpage",
        "url": "https://applebees-menus.us/operating-hours",
        "name": "Applebee's Hours: Opening, Closing & Holiday Schedule 2026",
        "description": "What time Applebee's opens and closes, why hours differ between locations, holiday schedules for Thanksgiving and Christmas, and how to check before you go.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/operating-hours/#breadcrumb"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/operating-hours/#faq",
        "name": "Applebee's Hours Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/operating-hours/#breadcrumb",
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
            "name": "Operating Hours",
            "item": "https://applebees-menus.us/operating-hours"
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
      <Breadcrumb items={[{ label: 'Operating Hours', href: '/operating-hours' }]} />

      <main className={styles.main}>
        {/* H1 & §1 — OPENING */}
        <header className={styles.hero} role="banner" aria-label="Operating Hours Header">
          <h1>Applebee's Hours: What Time It Opens and Closes</h1>
          <p className={styles.heroLead}>
            Most Applebee's locations open at 11:00 AM and close at 11:00 PM Sunday through Thursday, and midnight on Friday and Saturday. Some run later, particularly in cities and college towns.
          </p>
          <p className={styles.heroSub}>
            Those are the common hours, not fixed national ones. Applebee's is franchised, so each restaurant sets its own schedule based on local demand — which is why two locations an hour apart can close ninety minutes apart.
          </p>
          <p className={styles.heroHighlight}>
            This page covers the standard pattern, why it varies, holiday schedules, and how to check before driving over.
          </p>
        </header>

        {/* §2 — STANDARD HOURS */}
        <section className={styles.clusterSection} id="standard-hours">
          <h2>Applebee's Standard Opening and Closing Times</h2>

          <div className={styles.tableCard} style={{ maxWidth: '650px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Days</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Opens</th>
                    <th scope="col" style={{ textAlign: 'center' }}>Closes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sunday – Thursday</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>11:00 AM</td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>11:00 PM</td>
                  </tr>
                  <tr>
                    <td><strong>Friday – Saturday</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>11:00 AM</td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>12:00 AM (Midnight)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Why 11:00 AM, everywhere</h3>
          <p>
            Opening time is the most consistent thing about Applebee's scheduling. Almost every standalone location opens at 11:00 AM, seven days a week.
          </p>
          <p>
            The reason is that Applebee's does not serve breakfast. There is no breakfast menu, no breakfast prep, and no reason to staff a morning shift. Opening at 11:00 lands just ahead of the lunch rush without paying for the hours before it.
          </p>
          <p>
            This is why searches for Applebee's breakfast hours come up empty — the meal does not exist on the menu. See the <Link href="/menu">full menu</Link> for what is served.
          </p>

          <h3>Closing times vary more than opening times</h3>
          <p>
            Closing is where franchising shows. Staying open late costs a full kitchen crew, a bartender, and the utilities to run a large building. A franchise owner in a quiet suburb where nothing else is open at 11 PM will close earlier than one across from a stadium.
          </p>
          <p>
            Urban locations and college towns commonly run later than the baseline. Rural locations commonly run earlier. Neither is unusual, and neither is wrong — both are local decisions.
          </p>
          <p>
            Confirm your restaurant's actual hours through the <Link href="/locations">location finder</Link>.
          </p>
        </section>

        {/* §3 — LAST CALL AND KITCHEN CLOSE */}
        <section className={styles.clusterSection} id="kitchen-close">
          <h2>The Kitchen Closes Before the Restaurant Does</h2>
          <p>
            This is the detail that catches people out, and it is the most useful thing on this page.
          </p>
          <p>
            Posted closing time is when the doors lock, not when you can still order. Kitchens begin breaking down and cleaning equipment before close, so the last food order goes in earlier than the sign suggests — commonly around half an hour before.
          </p>
          <p>
            Bar last call comes earlier too. Alcohol service stops in advance of closing so drinks can be finished before the restaurant shuts, and in many areas local law sets that boundary rather than the restaurant.
          </p>
          <p>
            <strong>Practical rule:</strong> Arriving within thirty minutes of posted close means you may get drinks but not a full meal, or a limited menu. Arriving an hour before close is the safe margin for a normal sit-down meal.
          </p>
          <p>
            This also affects promotions — the <Link href="/happy-hour">half price appetizer window</Link> runs until close, but the kitchen stopping early sets the real end.
          </p>
        </section>

        {/* §4 — HOLIDAY HOURS */}
        <section className={styles.clusterSection} id="holiday-hours">
          <h2>Applebee's Holiday Hours</h2>
          <p>
            Holidays are where standard hours stop applying entirely. Each franchise decides independently, so the patterns below are tendencies rather than guarantees:
          </p>

          <div className={styles.tableCard} style={{ maxWidth: '750px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '40%' }}>Holiday</th>
                    <th scope="col">Typical Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Thanksgiving</strong></td>
                    <td>Many locations open, reduced hours</td>
                  </tr>
                  <tr>
                    <td><strong>Christmas Eve</strong></td>
                    <td>Open, closing early</td>
                  </tr>
                  <tr>
                    <td><strong>Christmas Day</strong></td>
                    <td>Most locations closed</td>
                  </tr>
                  <tr>
                    <td><strong>New Year's Eve</strong></td>
                    <td>Open, often later than usual</td>
                  </tr>
                  <tr>
                    <td><strong>New Year's Day</strong></td>
                    <td>Usually standard hours</td>
                  </tr>
                  <tr>
                    <td><strong>Easter</strong></td>
                    <td>Varies widely by franchise</td>
                  </tr>
                  <tr>
                    <td><strong>Memorial Day, July 4th, Labor Day</strong></td>
                    <td>Usually standard hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Is Applebee's open on Thanksgiving?</h3>
          <p>
            Many locations open on Thanksgiving, though usually on a shortened schedule — opening later in the afternoon and closing earlier than normal. Applebee's does not typically serve a traditional holiday menu; the regular menu runs.
          </p>
          <p>
            The demand is real but specific: travellers, people who are not cooking, and the evening crowd. Whether your restaurant opens is a local call, so check before assuming either way.
          </p>

          <h3>Is Applebee's open on Christmas Eve?</h3>
          <p>
            Almost always open, and almost always closing early. December 24th is a busy trading day, but most locations shut in the evening rather than running to normal closing time so staff can get home.
          </p>
          <p>
            If you are planning a Christmas Eve meal, plan it early and confirm the closing time first.
          </p>

          <h3>Is Applebee's open on Christmas Day?</h3>
          <p>
            Most locations are closed on Christmas Day. A small number in tourist areas or attached to hotels and travel hubs may open, but closure is the safe assumption.
          </p>

          <h3>New Year's Eve and New Year's Day</h3>
          <p>
            New Year's Eve commonly runs later than a normal Friday or Saturday, since it is one of the busiest bar nights of the year. New Year's Day usually returns to standard hours.
          </p>

          <h3>Summer holidays</h3>
          <p>
            Memorial Day, Independence Day and Labor Day usually run standard hours. Lunch trade tends to be quieter and evening trade busier, but the schedule generally does not change.
          </p>
        </section>

        {/* §5 — DUAL-BRANDED LOCATIONS OPEN EARLIER */}
        <section className={styles.clusterSection} id="dual-branded-hours">
          <h2>Why Some Applebee's Locations Open Before 11:00 AM</h2>
          <p>
            A small number of locations operate as combined Applebee's and IHOP restaurants sharing one kitchen and one building. Because IHOP serves breakfast, these open considerably earlier than a standalone Applebee's.
          </p>
          <p>
            At those locations the menu is organised by daypart — breakfast items in the morning, the full Applebee's range later. Sitting down at 8:00 AM is possible; ordering a steak at 8:00 AM generally is not.
          </p>
          <p>
            <strong>Scale:</strong> The first US dual-branded restaurant opened in Seguin, Texas in February 2025, and the format reached 44 US locations by mid-2026 out of roughly 1,600 Applebee's. Dine Brands is expanding it quickly, but the chances your local restaurant is one remain low.
          </p>
          <p>
            The <Link href="/locations">your local restaurant</Link> directory shows which format a restaurant runs.
          </p>
        </section>

        {/* §6 — CHECKING HOURS BEFORE YOU GO */}
        <section className={styles.clusterSection} id="check-hours">
          <h2>How to Check Your Local Applebee's Hours</h2>
          <p>
            Search engine listings are the least reliable source on holidays. Map listings pull from a mix of scraped data and user submissions. If a manager decides on the day to close early, the listing usually does not reflect it.
          </p>
          <p>
            The restaurant's own listing is more current, because it connects to the store's system rather than a third-party index.
          </p>
          <p>
            Calling is the only real guarantee, and it is the right move for holidays, for late-night visits, and for anything where a wasted trip matters. Direct numbers for every restaurant are in the <Link href="/locations">find your restaurant</Link> finder.
          </p>
          <p>
            <strong>Two things worth asking when you call:</strong>
          </p>
          <ul className={styles.textList}>
            <li>What time the kitchen stops taking orders, not what time the restaurant closes</li>
            <li>Whether the holiday schedule differs from what is published</li>
          </ul>

          <h3>Ordering hours are shorter than restaurant hours</h3>
          <p>
            Takeout and delivery ordering windows close before the restaurant does, because an order placed at closing time still needs cooking and collecting. Details on each: see our guides on <Link href="/takeout">takeout</Link> and <Link href="/delivery">delivery</Link>.
          </p>
        </section>

        {/* §7 — FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Hours — Frequently Asked Questions</h2>
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
