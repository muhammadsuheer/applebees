import Link from 'next/link';
import styles from './LocationPromo.module.css';

// Restaurant count: Dine Brands Q2 2026 results (quarter ended June 28, 2026):
// 1,439 franchise + 118 company-owned Applebee's. VERIFY whether the release
// labels these domestic-only before calling them "US restaurants".

export default function LocationPromo() {
  return (
    <section className={styles.section} id="find-your-location">
      <h2>Find an Applebee&apos;s Near You</h2>
      <p>
        Applebee&apos;s had 1,557 restaurants at the end of June 2026. Franchisees ran 1,439 of
        them and the company owned 118, according to Dine Brands&apos; second-quarter report. We
        don&apos;t run any of them.
      </p>
      <p>
        That split explains why the Applebee&apos;s across town can open later, skip weekend happy
        hour or charge a dollar more for the same burger. Our directory lists 129 restaurants in
        Indiana, Michigan, New York, Ohio, California and Texas. Search it, then call before you go.
      </p>
      <ul className={styles.featureList}>
        <li>129 restaurants across 6 states</li>
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
