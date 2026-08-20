import Link from 'next/link';
import styles from './HappyHourSection.module.css';

export default function HappyHourSection() {
  const faqs = [
    {
      q: "What time is Applebee's Happy Hour?",
      a: "Applebee's Happy Hour times typically run from 3:00 PM to 6:00 PM and from 9:00 PM to close at participating locations. However, because franchise owners operate independently, exact hours and days can vary. Check with your local Applebee's to confirm their specific schedule."
    },
    {
      q: "Does Applebee's have Happy Hour every day?",
      a: "Happy Hour is available every day at many Applebee's locations, but some restrict deals to Monday through Friday. Weekend and holiday hours frequently vary by franchise location. Contact your nearest restaurant to verify daily specials."
    },
    {
      q: "What is included in the Applebee's Happy Hour menu?",
      a: "The Applebee's Happy Hour menu includes half-price appetizers and discounted signature drinks. Common food items include Boneless Wings, Mozzarella Sticks, Spinach & Artichoke Dip, and Chicken Quesadillas, while drink specials often feature select cocktails, domestic beers, and wine."
    },
    {
      q: "What time are Applebee's half price apps?",
      a: "Applebee's half price apps are available during Late Night Happy Hour, which generally starts at 9:00 PM and lasts until closing time every day. Many locations also offer an afternoon window from 3:00 PM to 6:00 PM."
    },
    {
      q: "Does Applebee's have late night Happy Hour?",
      a: "Yes, Applebee's offers a late night Happy Hour at most locations starting around 9:00 PM until closing. During this time, diners can order select appetizers at half price. Confirm availability with your local restaurant."
    }
  ];

  return (
    <section className={styles.section} id="applebees-happy-hour">
      <h2>Applebee's Happy Hour Times & Menu</h2>

      <p>
        Applebee's Happy Hour is one of the most searched offers in casual dining. Most participating locations run Happy Hour in the afternoon and again late night, with half-price appetizers and drink specials available during both windows. Times and available items can vary by <Link href="/locations">location</Link>.
      </p>

      <p>
        The <Link href="/happy-hour">Applebee's Happy Hour menu</Link> typically includes a selection of half-price apps and discounted drinks. While exact offerings depend on your local restaurant, the items below are commonly available at participating locations:
      </p>

      <ul>
        <li>
          <strong>Half Price Apps:</strong> Select appetizers at 50% off, including{' '}
          <Link href="/menu/appetizers">Boneless Wings, Mozzarella Sticks, Spinach & Artichoke Dip, and Chicken Quesadilla</Link>.
        </li>
        <li>
          <strong>Late Night Half Price Appetizers:</strong> The half-price app window reopens late night at most locations  typically after 9:00 PM until close.
        </li>
        <li>
          <strong>Drink Specials:</strong> Discounted pricing on select cocktails, house margaritas, and draft beers during Happy Hour. Specific drinks and prices vary by location.
        </li>
      </ul>

      <p>
        Happy Hour times and menu availability are set by each franchise location and can shift on weekends or holidays. Use the <Link href="/locations">Applebee's location finder</Link> to check the schedule nearest you before heading in.
      </p>

      <div className={styles.faqBlock}>
        <h3>Applebee's Happy Hour  Common Questions</h3>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faqItem}>
            <h4>{faq.q}</h4>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
