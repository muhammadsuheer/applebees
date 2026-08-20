import styles from './OperatingHours.module.css';

export default function OperatingHours() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Applebee's Grill + Bar",
    "image": "https://example.com/applebees-logo.jpg",
    "servesCuisine": "American",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "11:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "11:00",
        "closes": "24:00"
      }
    ]
  };

  return (
    <section className={styles.section} id="operating-hours">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className={styles.container}>
        <h2 className={styles.title}>Operating Hours</h2>
        
        <table className={styles.hoursTable}>
          <thead>
            <tr>
              <th scope="col">Day of the Week</th>
              <th scope="col">Opening Time</th>
              <th scope="col">Closing Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Monday - Thursday</th>
              <td>11:00 AM</td>
              <td>11:00 PM</td>
            </tr>
            <tr>
              <th scope="row">Friday - Saturday</th>
              <td>11:00 AM</td>
              <td>12:00 AM (Midnight)</td>
            </tr>
            <tr>
              <th scope="row">Sunday</th>
              <td>11:00 AM</td>
              <td>11:00 PM</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.note}>
          *Hours may vary by location and on holidays. Please check with your local Applebee's.
        </p>
      </div>
    </section>
  );
}
