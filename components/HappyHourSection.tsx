import Link from 'next/link';
import styles from './HappyHourSection.module.css';

// Homepage summary only. The full detail and the FAQ live on /happy-hour, so the
// two pages don't compete for the same questions.

export default function HappyHourSection() {
  return (
    <section className={styles.section} id="applebees-happy-hour">
      <h2>Applebee&apos;s Happy Hour Times</h2>

      <p>
        Happy hour runs 3:00 to 6:00 PM and again from 9:00 PM to close. It&apos;s dine-in only.
        That&apos;s when the core appetizers go half price: Mozzarella Sticks drop from $9.99 to
        $5.00, a Chicken Quesadilla from $11.99 to $6.00, and Boneless Wings from $12.99 to $6.50.
      </p>

      <p>
        Drink deals are set by each restaurant, and six states ban them outright: Massachusetts,
        Rhode Island, Vermont, North Carolina, Alaska and Utah. Through November 15, 2026, the
        national drink offer is the $6 Spooky Sips menu instead.
      </p>

      <p>
        <Link href="/happy-hour">The full happy hour guide</Link> covers late night times, which
        half price app is the best deal, and the Oklahoma rule most lists still get wrong.
      </p>
    </section>
  );
}
