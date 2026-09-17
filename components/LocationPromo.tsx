import Link from 'next/link';
import styles from './LocationPromo.module.css';

// Restaurant count: Dine Brands Q2 2026 results (quarter ended June 28, 2026):
// 1,557 Applebee's worldwide, 1,439 in the US and 118 international. Nearly all are franchised.

export default function LocationPromo() {
  return (
    <section className={styles.section} id="find-your-location">
      <h2>Find an Applebee&apos;s Near You</h2>
      <p>
        Almost every Applebee&apos;s is run by a local franchise owner rather than the company itself.
        That&apos;s why the one across town might open later, skip weekend happy hour or charge a little
        more for the same burger.
      </p>
      <p>
        So before you head out, look up your restaurant and give it a quick call. It&apos;s the easiest way
        to know tonight&apos;s hours and whether the deal you&apos;re after is running.
      </p>
      <ul className={styles.featureList}>
        <li>Search by city, ZIP code or state</li>
        <li>A direct phone number for every listing</li>
        <li>One tap for directions</li>
      </ul>
      <Link href="/locations" className={styles.ctaButton}>
        Find Applebee&apos;s Near Me
      </Link>
    </section>
  );
}
