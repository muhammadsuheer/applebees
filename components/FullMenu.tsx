import Link from 'next/link';
import { menuData } from '@/data/menu';
import styles from './FullMenu.module.css';

export default function FullMenu() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Applebees Full Menu",
    "hasMenuSection": menuData.map(category => ({
      "@type": "MenuSection",
      "name": category.title,
      "hasMenuItem": category.items.map(item => {
        const menuItemData: any = {
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price.replace('$', ''),
            "priceCurrency": "USD"
          },
          "nutrition": {
            "@type": "NutritionInformation",
            "calories": item.calories
          }
        };

        if (item.image) {
          menuItemData.image = "https://applebees-menus.us" + item.image;
        }

        return menuItemData;
      })
    }))
  };

  return (
    <section className={styles.section}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {menuData.map((category) => (
        <div key={category.title} className={styles.categoryBlock} id={category.slug}>
          <h2><Link href={`/menu/${category.slug}`}>{category.title}</Link></h2>

          {category.items.length > 0 ? (
            <>
              <div className={styles.itemsGrid}>
                {category.items.map((item) => (
                  <article key={item.id}>
                    <div className={styles.imageContainer}>
                      {item.image ? (
                        <img src={item.image} alt={item.name} loading="lazy" />
                      ) : (
                        <span>Item Image</span>
                      )}
                    </div>

                    <div className={styles.itemContent}>
                      <h3>{item.name}</h3>
                      {item.description && (
                        <p>{item.description}</p>
                      )}
                      <div className={styles.itemFooter}>
                        <span>{item.calories}</span>
                        <strong>{item.price}</strong>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <table className={styles.seoTable}>
                <caption>
                  <strong>{category.title} Menu</strong>  Prices verified August 2026. See full <Link href={`/menu/${category.slug}`}>Applebee's {category.title} details</Link>.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item) => (
                    <tr key={`table-${item.id}`}>
                      <th scope="row">{item.name}</th>
                      <td>{item.calories}</td>
                      <td>{item.price}</td>
                      <td>{item.tableDescription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p style={{ fontFamily: 'var(--font-roboto)', color: '#666', marginTop: '10px' }}>
              New items for this category are being updated. Check back soon!
            </p>
          )}

        </div>
      ))}
    </section>
  );
}
