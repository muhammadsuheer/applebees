import Link from 'next/link';
import styles from './LocationPromo.module.css';

export default function LocationPromo() {
  return (
    <section className={styles.section} id="find-your-location">
      <h2>Find an Applebee's Near You</h2>
      <p>
        Applebee's has locations across the US, and menu items, prices, and specials can differ between restaurants. If you are looking for the closest Applebee's, want to check if a location is open right now, or need a phone number before heading in  the location finder covers all of that.
      </p>
      <ul className={styles.featureList}>
        <li>Find the nearest Applebee's to your current location</li>
        <li>Check restaurant hours, including holiday schedules</li>
        <li>Confirm Happy Hour times and local specials for your area</li>
        <li>Get directions, phone numbers, and ordering options by location</li>
      </ul>
      <Link href="/locations" className={styles.ctaButton}>
        Find Applebee's Near Me
      </Link>
    </section>
  );
}
