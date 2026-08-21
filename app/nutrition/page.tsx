import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionCalculator from '@/components/NutritionCalculator';
import { nutritionData, kidsMenuData, drinkCaloriesData } from '@/data/nutrition';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Nutrition Facts: Calories, Macros and Allergens (2026)",
  description: "Browse complete Applebee's nutrition facts with calories, macros, sodium, and allergen warnings for 2026. Use our interactive nutrition calculator to plan your meal.",
  alternates: {
    canonical: "https://applebees-menus.us/nutrition"
  }
};

const faqData = [
  {
    question: "What is the lowest calorie meal at Applebee's?",
    answer: "Steamed Broccoli at 100 calories is the lowest single item. For a full meal, a House Salad with fat-free Italian (160 calories) paired with a 6 oz. Top Sirloin ordered without butter comes to roughly 900 calories with 49g of protein."
  },
  {
    question: "What is the highest calorie item at Applebee's?",
    answer: "Hand-Battered Fish & Chips at 1,680 calories, followed by the Whisky Bacon Burger at 1,590 and the Oriental Chicken Salad at 1,560."
  },
  {
    question: "Does Applebee's have a gluten-free menu?",
    answer: "There is no dedicated gluten-free menu and no certified gluten-free kitchen. Several items are naturally wheat-free, including both Top Sirloin steaks, Steamed Broccoli and Garlicky Green Beans. Shared fryers mean fried items carry cross-contact risk regardless of ingredients."
  },
  {
    question: "What allergens does Applebee's track?",
    answer: "Milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame  the nine major U.S. allergens."
  },
  {
    question: "Which Applebee's item has the most protein?",
    answer: "Three-Cheese Chicken Penne at 77g, though it also carries 40g of saturated fat. For protein relative to calories, the 8 oz. Top Sirloin is the stronger option at 55g protein for 830 calories."
  },
  {
    question: "Which Applebee's item has the most sodium?",
    answer: "Boneless Wings in Classic Hot Buffalo at 4,720 mg  roughly double the recommended daily limit for an adult."
  },
  {
    question: "Are there vegan options at Applebee's?",
    answer: "There is no dedicated vegan entrée. The House Salad with fat-free Italian is the only item flagged vegan. A plate can be assembled from a plain baked potato, steamed vegetables requested without butter, and that salad without cheese or croutons."
  },
  {
    question: "Is the Oriental Chicken Salad healthy?",
    answer: "At 1,560 calories, 105g of fat and 45g of sugar, it is the third-highest-calorie item on the menu. The crispy chicken and the vinaigrette account for most of it. The Grilled Chicken Caesar at 950 calories with 57g protein is the lighter salad option, though it contains anchovy."
  },
  {
    question: "Can you eat low carb at Applebee's?",
    answer: "Yes, with modifications. The 8 oz. Top Sirloin carries 45g of carbohydrate; ordered without the potato side and paired with Steamed Broccoli (7g), the plate stays low. Glazed and sauced items are where carbohydrate and sugar climb."
  },
  {
    question: "Does Applebee's publish a nutrition PDF?",
    answer: "The calculator on this page generates a printable PDF of a specific meal and its totals. Applebee's also publishes its own nutrition information, which is the authoritative source for any item where exact figures matter."
  },
  {
    question: "How accurate are these numbers?",
    answer: "They reflect standard recipes as published. Actual servings vary with preparation, portioning and any modifications requested. For a severe allergy or a medically restricted diet, confirming directly with the restaurant is the right step."
  }
];

export default function NutritionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/nutrition/#webpage",
        "url": "https://applebees-menus.us/nutrition",
        "name": "Applebee's Nutrition Facts: Calories, Macros and Allergens (2026)",
        "description": "Browse complete Applebee's nutrition facts with calories, macros, sodium, and allergen warnings for 2026. Use our interactive nutrition calculator to plan your meal.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/nutrition/#breadcrumb"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://applebees-menus.us/nutrition/#calculator",
        "name": "Applebee's Nutrition Calculator & Meal Planner",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/nutrition/#faq",
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
        "@id": "https://applebees-menus.us/nutrition/#breadcrumb",
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
            "name": "Nutrition",
            "item": "https://applebees-menus.us/nutrition"
          }
        ]
      }
    ]
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Nutrition', href: '/nutrition' }]} />

      {/* Hero / Header Section 1 */}
      <header className={styles.hero} role="banner" aria-label="Nutrition Page Header">
        <h1>Applebee's Nutrition Facts: Calories, Macros and Allergens (2026)</h1>
        <p className={styles.heroLead}>
          Applebee's publishes nutrition data for its <Link href="/menu">full menu with prices</Link>, and the range is wider than most people expect. A House Salad with fat-free Italian runs 160 calories. The Hand-Battered Fish & Chips runs 1,680. Same menu, same visit  a tenfold difference depending on what gets ordered.
        </p>
        <p className={styles.heroSub}>
          This page lays out calories, fat, saturated fat, cholesterol, sodium, carbohydrates, fiber, sugar and protein for the most-ordered items across six categories, plus allergen flags for each one. There is also an interactive calculator for building a custom meal and seeing the totals before ordering.
        </p>
        <p className={styles.heroHighlight}>
          The short version: Applebee's is very workable if the target is protein, and harder work if the target is sodium.
        </p>
      </header>

      {/* Section 2  The Thing Most People Miss */}
      <section className={styles.clusterSection} id="sodium-vs-calories">
        <h2>The Number That Matters Most at Applebee's Isn't Calories</h2>
        <p>
          Most people scanning a nutrition page look at calories first. At Applebee's, sodium is the number that will surprise you.
        </p>
        <p>
          The Boneless Wings in Classic Hot Buffalo from the <Link href="/menu/appetizers">appetizer menu</Link> come in at 1,080 calories  high, but not shocking for a shared starter. The sodium figure is 4,720 mg. The FDA's recommended daily limit is 2,300 mg. One appetizer is roughly two days' worth of sodium.
        </p>
        <p>
          It is not an outlier. Fiesta Lime Chicken from the <Link href="/menu/chicken">chicken entrées</Link> carries 3,630 mg. Bourbon Street Steak, 3,430 mg. Brew Pub Pretzels & Beer Cheese Dip, 3,540 mg. The Hand-Battered Fish & Chips, 3,500 mg. Across the menu, sodium tracks with sauces, glazes, marinades and cheese  not with calories.
        </p>
        <p>
          The practical takeaway: the lowest-calorie item is not automatically the lowest-sodium item. Steamed Broccoli is 100 calories and 200 mg sodium. The House Salad with fat-free Italian is 160 calories and 610 mg. Both are light. One carries three times the sodium of the other.
        </p>
        <p>
          Anyone managing blood pressure should read the sodium column first and the calorie column second.
        </p>
      </section>

      {/* Section 3  Nutrition Calculator */}
      <section className={styles.calculatorSection} id="nutrition-calculator">
        <div className={styles.sectionHeader}>
          <h2>Applebee's Nutrition Calculator</h2>
          <p>
            Build a meal below and the totals update as items are added  calories, protein, carbohydrates, fat and sodium. It covers <Link href="/menu/appetizers">appetizers</Link>, <Link href="/menu/salads">salads</Link>, <Link href="/menu/steaks-and-ribs">steaks and ribs</Link>, <Link href="/menu/chicken">chicken</Link>, <Link href="/menu/seafood">seafood</Link>, <Link href="/menu/pasta">pasta dishes</Link>, <Link href="/menu/handcrafted-burgers">burgers</Link>, and <Link href="/menu/sides">sides</Link> and <Link href="/menu/desserts">desserts</Link>.
          </p>
          <p>
            Once a meal is built, "Save PDF" generates a printable summary of the exact items and their totals. Useful for anyone planning a meal ahead of time, checking a day's remaining macro budget, or bringing numbers to a dietitian appointment.
          </p>
          <p>
            One thing worth knowing: the calculator uses standard recipe data. Ordering a steak without butter, or a salad without dressing, changes the figures  sometimes substantially. Butter and dressing are often the single largest fat contributors on an otherwise lean plate.
          </p>
        </div>
        <NutritionCalculator />
      </section>

      {/* Section 4  Full Nutrition Tables */}
      <section className={styles.content} id="nutrition-tables">
        <div className={styles.tableIntro}>
          <h2>Applebee's Nutrition Facts by Category</h2>
          <p>
            Full macro breakdowns below, sorted by category. Each row covers calories, fat, saturated fat, trans fat, cholesterol, sodium, carbohydrates, fiber, sugars and protein, with allergen flags in the final column. Figures are per single serving as listed.
          </p>
        </div>

        {/* Appetizers Table */}
        <section className={styles.categoryBlock} id="appetizers-nutrition">
          <h3>Appetizers Nutrition</h3>
          <p className={styles.categoryLead}>
            Appetizers are the highest-sodium category on the <Link href="/menu/appetizers">appetizer menu</Link>, and most are designed to be shared rather than eaten alone. Check <Link href="/happy-hour">happy hour</Link> or <Link href="/specials-and-deals">current specials</Link> for half-price app availability.
          </p>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.nutritionTable}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.colName}>Item</th>
                    <th scope="col">Cal</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Trans</th>
                    <th scope="col">Chol</th>
                    <th scope="col">Sodium</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fiber</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Protein</th>
                    <th scope="col" className={styles.colAllergens}>Allergens & Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData[0].items.map((item) => (
                    <tr key={item.id}>
                      <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                      <td className={styles.calCell} data-label="Calories">{item.calories}</td>
                      <td data-label="Fat">{item.fat}g</td>
                      <td data-label="Saturated Fat">{item.satFat}g</td>
                      <td data-label="Trans Fat">{item.transFat}g</td>
                      <td data-label="Cholesterol">{item.cholesterol}mg</td>
                      <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString()}mg</td>
                      <td data-label="Carbs">{item.carbs}g</td>
                      <td data-label="Fiber">{item.fiber}g</td>
                      <td data-label="Sugar">{item.sugars}g</td>
                      <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                      <td className={styles.allergenCell} data-label="Allergens & Flags">
                        {item.dietaryTags?.map(t => <span key={t} className={styles.dietTag}>{t}</span>)}
                        {item.allergens?.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={styles.tableInsight}>
            <strong>Reading this table:</strong> the Garlic Parmesan wings carry 180 more calories than Classic Hot Buffalo but roughly half the sodium. If sodium is the constraint, the higher-calorie option is the better one  which is not intuitive.
          </p>
        </section>

        {/* Salads & Soups Table */}
        <section className={styles.categoryBlock} id="salads-soups-nutrition">
          <h3>Salads & Soups Nutrition</h3>
          <p className={styles.categoryLead}>
            The widest spread on the menu. A House Salad and an Oriental Chicken Salad on the <Link href="/menu/salads">salads</Link> list differ by 1,400 calories.
          </p>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.nutritionTable}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.colName}>Item</th>
                    <th scope="col">Cal</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Trans</th>
                    <th scope="col">Chol</th>
                    <th scope="col">Sodium</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fiber</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Protein</th>
                    <th scope="col" className={styles.colAllergens}>Allergens & Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData[1].items.map((item) => (
                    <tr key={item.id}>
                      <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                      <td className={styles.calCell} data-label="Calories">{item.calories}</td>
                      <td data-label="Fat">{item.fat}g</td>
                      <td data-label="Saturated Fat">{item.satFat}g</td>
                      <td data-label="Trans Fat">{item.transFat}g</td>
                      <td data-label="Cholesterol">{item.cholesterol}mg</td>
                      <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString()}mg</td>
                      <td data-label="Carbs">{item.carbs}g</td>
                      <td data-label="Fiber">{item.fiber}g</td>
                      <td data-label="Sugar">{item.sugars}g</td>
                      <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                      <td className={styles.allergenCell} data-label="Allergens & Flags">
                        {item.dietaryTags?.map(t => <span key={t} className={styles.dietTag}>{t}</span>)}
                        {item.allergens?.length ? item.allergens.join(', ') : 'None'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={styles.tableInsight}>
            <strong>Worth flagging:</strong> the Oriental Chicken Salad contains 45g of sugar  more than most <Link href="/menu/desserts">desserts</Link> on the menu. That comes from the vinaigrette and the crispy coating, not from the greens. The word "salad" is doing a lot of work here. Also note the Caesar contains fish (anchovy in the dressing) and the Oriental Chicken Salad contains tree nuts (almonds). Both are easy to miss.
          </p>
        </section>

        {/* Steaks, Ribs & Chicken Table */}
        <section className={styles.categoryBlock} id="steaks-ribs-chicken-nutrition">
          <h3>Steaks, Ribs & Chicken Nutrition</h3>
          <p className={styles.categoryLead}>
            The strongest protein-per-calorie category on the menu, and the best place to start for anyone tracking macros across <Link href="/menu/steaks-and-ribs">steaks and ribs</Link> and <Link href="/menu/chicken">chicken entrées</Link>.
          </p>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.nutritionTable}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.colName}>Item</th>
                    <th scope="col">Cal</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Trans</th>
                    <th scope="col">Chol</th>
                    <th scope="col">Sodium</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fiber</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Protein</th>
                    <th scope="col" className={styles.colAllergens}>Allergens & Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData[2].items.map((item) => (
                    <tr key={item.id}>
                      <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                      <td className={styles.calCell} data-label="Calories">{item.calories}</td>
                      <td data-label="Fat">{item.fat}g</td>
                      <td data-label="Saturated Fat">{item.satFat}g</td>
                      <td data-label="Trans Fat">{item.transFat}g</td>
                      <td data-label="Cholesterol">{item.cholesterol}mg</td>
                      <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString()}mg</td>
                      <td data-label="Carbs">{item.carbs}g</td>
                      <td data-label="Fiber">{item.fiber}g</td>
                      <td data-label="Sugar">{item.sugars}g</td>
                      <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                      <td className={styles.allergenCell} data-label="Allergens & Flags">
                        {item.dietaryTags?.map(t => <span key={t} className={styles.dietTag}>{t}</span>)}
                        {item.allergens?.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={styles.tableInsight}>
            <strong>Best protein ratio on the menu:</strong> the 8 oz. Top Sirloin delivers 55g of protein for 830 calories  about 15 calories per gram of protein. For comparison, the Oriental Chicken Salad delivers 40g for 1,560 calories, or 39 calories per gram. The Baby Back Ribs are the surprise here: 760 calories with the lowest sodium in the category at 1,300 mg, and zero sugar despite the glaze.
          </p>
        </section>

        {/* Seafood & Pasta Table */}
        <section className={styles.categoryBlock} id="seafood-pasta-nutrition">
          <h3>Seafood & Pasta Nutrition</h3>
          <p className={styles.categoryLead}>
            Check our <Link href="/menu/seafood">seafood menu</Link> and <Link href="/menu/pasta">pasta dishes</Link> for detailed recipes and side pairing options.
          </p>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.nutritionTable}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.colName}>Item</th>
                    <th scope="col">Cal</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Trans</th>
                    <th scope="col">Chol</th>
                    <th scope="col">Sodium</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fiber</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Protein</th>
                    <th scope="col" className={styles.colAllergens}>Allergens & Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData[3].items.map((item) => (
                    <tr key={item.id}>
                      <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                      <td className={styles.calCell} data-label="Calories">{item.calories}</td>
                      <td data-label="Fat">{item.fat}g</td>
                      <td data-label="Saturated Fat">{item.satFat}g</td>
                      <td data-label="Trans Fat">{item.transFat}g</td>
                      <td data-label="Cholesterol">{item.cholesterol}mg</td>
                      <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString()}mg</td>
                      <td data-label="Carbs">{item.carbs}g</td>
                      <td data-label="Fiber">{item.fiber}g</td>
                      <td data-label="Sugar">{item.sugars}g</td>
                      <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                      <td className={styles.allergenCell} data-label="Allergens & Flags">
                        {item.dietaryTags?.map(t => <span key={t} className={styles.dietTag}>{t}</span>)}
                        {item.allergens?.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={styles.tableInsight}>
            <strong>Two things stand out:</strong> The Three-Cheese Chicken Penne carries 40g of saturated fat  the highest on the menu, and roughly double the daily recommended limit in a single plate. And the Four-Cheese Mac with Honey Pepper Tenders carries 44g of sugar, almost all of it from the honey pepper glaze. The salmon is the standout for anyone balancing protein against saturated fat: 44g protein, 14g saturated fat, and omega-3s that nothing else on the menu offers.
          </p>
        </section>

        {/* Burgers & Sandwiches Table */}
        <section className={styles.categoryBlock} id="burgers-sandwiches-nutrition">
          <h3>Burgers & Sandwiches Nutrition</h3>
          <p className={styles.categoryLead}>
            Every burger on our <Link href="/menu/handcrafted-burgers">burgers</Link> lineup clears 1,000 calories. The spread between the lightest and heaviest is 500.
          </p>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.nutritionTable}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.colName}>Item</th>
                    <th scope="col">Cal</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Trans</th>
                    <th scope="col">Chol</th>
                    <th scope="col">Sodium</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fiber</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Protein</th>
                    <th scope="col" className={styles.colAllergens}>Allergens & Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData[4].items.map((item) => (
                    <tr key={item.id}>
                      <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                      <td className={styles.calCell} data-label="Calories">{item.calories}</td>
                      <td data-label="Fat">{item.fat}g</td>
                      <td data-label="Saturated Fat">{item.satFat}g</td>
                      <td data-label="Trans Fat">{item.transFat}g</td>
                      <td data-label="Cholesterol">{item.cholesterol}mg</td>
                      <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString()}mg</td>
                      <td data-label="Carbs">{item.carbs}g</td>
                      <td data-label="Fiber">{item.fiber}g</td>
                      <td data-label="Sugar">{item.sugars}g</td>
                      <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                      <td className={styles.allergenCell} data-label="Allergens & Flags">
                        {item.dietaryTags?.map(t => <span key={t} className={styles.dietTag}>{t}</span>)}
                        {item.allergens?.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={styles.tableInsight}>
            <strong>On the Impossible Cheeseburger:</strong> it is the lowest-calorie burger and carries the most fiber on the menu at 12g, plus the lowest cholesterol at 35mg. It is not lower in sodium  at 2,910 mg it is higher than the beef Classic Cheeseburger. Plant-based does not mean low sodium here.
          </p>
        </section>

        {/* Sides & Desserts Table */}
        <section className={styles.categoryBlock} id="sides-desserts-nutrition">
          <h3>Sides & Desserts Nutrition</h3>
          <p className={styles.categoryLead}>
            Explore individual nutritional values for <Link href="/menu/sides">sides</Link> and indulgent <Link href="/menu/desserts">desserts</Link>.
          </p>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.nutritionTable}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.colName}>Item</th>
                    <th scope="col">Cal</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Trans</th>
                    <th scope="col">Chol</th>
                    <th scope="col">Sodium</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fiber</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Protein</th>
                    <th scope="col" className={styles.colAllergens}>Allergens & Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData[5].items.map((item) => (
                    <tr key={item.id}>
                      <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                      <td className={styles.calCell} data-label="Calories">{item.calories}</td>
                      <td data-label="Fat">{item.fat}g</td>
                      <td data-label="Saturated Fat">{item.satFat}g</td>
                      <td data-label="Trans Fat">{item.transFat}g</td>
                      <td data-label="Cholesterol">{item.cholesterol}mg</td>
                      <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString()}mg</td>
                      <td data-label="Carbs">{item.carbs}g</td>
                      <td data-label="Fiber">{item.fiber}g</td>
                      <td data-label="Sugar">{item.sugars}g</td>
                      <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                      <td className={styles.allergenCell} data-label="Allergens & Flags">
                        {item.dietaryTags?.map(t => <span key={t} className={styles.dietTag}>{t}</span>)}
                        {item.allergens?.length ? item.allergens.join(', ') : 'None'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={styles.tableInsight}>
            <strong>If dessert is happening:</strong> the Brownie Bite is 330 calories against the Triple Chocolate Meltdown's 910, and 34g of sugar against 87g. Same craving, roughly a third of the load.
          </p>
          <p className={styles.tableInsight}>
            <strong>Note on sides:</strong> Steamed Broccoli and Garlicky Green Beans carry 8g and 12g of fat respectively, which for plain vegetables indicates butter or oil in preparation. Anyone eating strictly plant-based should ask for them prepared without butter. Classic Fries are cooked in shared fryers alongside breaded items.
          </p>
        </section>
      </section>

      {/* Section 5  Allergen Guide */}
      <section className={styles.clusterSection} id="allergen-guide">
        <h2>Applebee's Allergen Menu: What to Watch For</h2>
        <p>
          Applebee's tracks the nine major U.S. allergens across its menu: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame. The tables above flag them per item. What follows is where they tend to hide.
        </p>

        <h3>Milk and dairy</h3>
        <p>
          The most widespread allergen on this menu. Beyond the obvious cheese dishes, dairy appears in butter-basted steaks, cream-based pasta sauces, and several dressings. Note that both Top Sirloin cuts flag milk despite being plain grilled steak  that is the finishing butter. Ordering "no butter" removes it.
        </p>

        <h3>Wheat and gluten</h3>
        <p>
          Present in every breaded appetizer, all buns, all pasta, and the beer cheese dip. Less obviously, it appears in soy sauce–based marinades and in the beer batter on the Fish & Chips.
        </p>

        <h3>Soy</h3>
        <p>
          The most commonly missed one. Soy appears in frying oil, in marinades, and in items with no obvious soy component  the Baby Back Ribs flag soy as their only allergen, and Classic Fries flag it too, from the fryer oil.
        </p>

        <h3>Tree nuts</h3>
        <p>
          Limited but specific. The Oriental Chicken Salad contains almonds. Anyone with a nut allergy should treat that item as off-limits rather than requesting a modification, since the almonds are mixed through.
        </p>

        <h3>Fish and shellfish</h3>
        <p>
          Two things catch people out. The Grilled Chicken Caesar Salad flags fish  that is anchovy in the Caesar dressing, and it appears in a dish most people would never consider seafood. And Bourbon Street Chicken & Shrimp flags shellfish in what reads as a chicken dish.
        </p>

        <h3>Eggs</h3>
        <p>
          Mainly in dressings, mayonnaise-based sauces, and baked goods. The Garlic Parmesan Boneless Wings flag eggs while the Classic Hot Buffalo version does not  the difference is in the sauce.
        </p>

        <h3>Cross-contact</h3>
        <p>
          Applebee's does not operate an allergen-free kitchen. Shared fryers are the biggest issue: Classic Fries are naturally free of wheat but are fried alongside breaded chicken and fish. For a severe allergy, ask the manager for the allergen binder, request clean utensils and a separate prep surface, and say clearly that it is an allergy rather than a preference  that phrasing changes how kitchens handle it.
        </p>
      </section>

      {/* Section 6  Gluten-Free */}
      <section className={styles.clusterSection} id="gluten-free-options">
        <h2>Applebee's Gluten-Free Options</h2>
        <p>
          Applebee's does not maintain a certified gluten-free kitchen and does not publish a dedicated gluten-free menu. What it does publish is allergen data, and several items are naturally wheat-free.
        </p>
        <p>
          Reasonable starting points: the 6 oz. and 8 oz. Top Sirloin (both flagged "Gluten-Free Options"), Steamed Broccoli, and Garlicky Green Beans. Grilled proteins without sauce are generally the safest category.
        </p>
        <p>
          The main risk is the fryer, not the recipe. Classic Fries contain no wheat but are cooked in oil shared with breaded chicken tenders, mozzarella sticks and beer-battered fish. For coeliac disease, fries should be treated as contaminated.
        </p>
        <p>
          Watch marinades and glazes. Soy sauce contains wheat. Anything described as glazed, marinated or sauced needs checking rather than assuming.
        </p>
        <p>
          For coeliac disease specifically  as opposed to a preference or mild sensitivity  telling the server it is a medical requirement is what triggers the kitchen's separate-prep protocol.
        </p>
      </section>

      {/* Section 7  Dairy-Free */}
      <section className={styles.clusterSection} id="dairy-free-options">
        <h2>Applebee's Dairy-Free Options</h2>
        <p>
          Dairy is harder to avoid here than gluten, because it appears in preparation rather than only in ingredients.
        </p>
        <p>
          The two Top Sirloin steaks flag milk purely from finishing butter  ordered without it, they become dairy-free and remain the highest-protein option on the menu. The same applies to grilled chicken. Garlic mashed potatoes and most grilled vegetables are prepared with butter or cream by default.
        </p>
        <p>
          Practical ordering: ask for grilled proteins with no butter, choose a plain baked potato over mashed, and take oil and vinegar rather than a creamy dressing. The Baby Back Ribs are one of the few items on the menu that flag no dairy at all.
        </p>
      </section>

      {/* Section 8  Vegetarian and Vegan */}
      <section className={styles.clusterSection} id="vegetarian-vegan-options">
        <h2>Vegetarian and Vegan Options at Applebee's</h2>

        <h3>Vegetarian</h3>
        <p>
          Better covered than most casual-dining steakhouses. Items flagged vegetarian include Spinach & Artichoke Dip (990 cal), Mozzarella Sticks (860 cal), Brew Pub Pretzels & Beer Cheese Dip (1,160 cal), Tomato Basil Soup (210 cal) and the Impossible Cheeseburger (1,090 cal).
        </p>
        <p>
          The Impossible Cheeseburger is the only substantial vegetarian main. At 39g protein and 12g fiber it holds up as an actual meal rather than a side-dish workaround.
        </p>
        <p>
          Salads can be made vegetarian by removing the chicken  but check the dressing. The Caesar contains anchovy.
        </p>

        <h3>Vegan</h3>
        <p>
          There is no dedicated vegan entrée, so this requires assembly. The House Salad with fat-free Italian is the only item flagged vegan on the menu at 160 calories.
        </p>
        <p>
          A workable vegan plate: House Salad without cheese or croutons, a plain baked potato with no butter or sour cream, and steamed vegetables requested without butter. The butter request matters  the fat figures on the vegetable sides indicate they are not prepared plant-based by default.
        </p>
        <p>
          Classic Fries are technically free of animal ingredients but share fryer oil with meat and dairy items. Whether that matters is a personal call.
        </p>
      </section>

      {/* Section 9  Highest and Lowest (Snippet Bait) */}
      <section className={styles.clusterSection} id="highest-lowest-calories">
        <h2>Highest and Lowest Calorie Items at Applebee's</h2>
        <p>
          <strong>Highest calorie:</strong> Hand-Battered Fish & Chips at 1,680 calories, followed by the Whisky Bacon Burger at 1,590 and the Oriental Chicken Salad at 1,560.
        </p>
        <p>
          <strong>Lowest calorie:</strong> Steamed Broccoli at 100 calories, Garlicky Green Beans at 150, and the House Salad with fat-free Italian at 160.
        </p>
        <p>
          <strong>Highest protein:</strong> Three-Cheese Chicken Penne at 77g, Bourbon Street Steak at 71g, Bacon Ranch Chicken Sandwich at 64g.
        </p>
        <p>
          <strong>Highest sodium:</strong> Boneless Wings Classic Hot Buffalo at 4,720 mg  more than double the recommended daily limit.
        </p>
        <p>
          <strong>Highest sugar:</strong> Triple Chocolate Meltdown at 87g, followed by the Oriental Chicken Salad at 45g and the Four-Cheese Mac at 44g.
        </p>
        <p>
          <strong>Highest saturated fat:</strong> Three-Cheese Chicken Penne at 40g.
        </p>
        <p>
          <strong>Best protein-to-calorie ratio:</strong> 8 oz. Top Sirloin  55g protein for 830 calories.
        </p>
      </section>

      {/* Section 10  Eating by Goal */}
      <section className={styles.clusterSection} id="ordering-by-goal">
        <h2>How to Order at Applebee's for Specific Goals</h2>
        <p className={styles.framingNote}>
          <em>The figures below are drawn from the tables above. Anyone managing a diagnosed condition should treat this as menu data to bring to their doctor or dietitian, not as a substitute for their advice.</em>
        </p>

        <h3>High protein</h3>
        <p>
          The grill section is where the menu is strongest. The 8 oz. Top Sirloin delivers 55g of protein at 830 calories; the 6 oz. delivers 43g at 760. Both flag "High Protein" on the official data. The Grilled Chicken Caesar Salad reaches 57g at 950 calories, though it carries 2,200 mg of sodium.
        </p>
        <p>
          For a lower-sodium high-protein plate, the Double-Glazed Baby Back Ribs are the outlier: 44g protein, 1,300 mg sodium, the lowest in the category.
        </p>

        <h3>Lower calorie</h3>
        <p>
          Building down rather than up works better than hunting for a light entrée. A House Salad (160) plus Steamed Broccoli (100) plus a 6 oz. Top Sirloin ordered without butter lands around 1,000 calories with 49g protein  comparable to a single burger, but with far more food on the table.
        </p>
        <p>
          The trap is the word "salad." The Oriental Chicken Salad at 1,560 calories is the third-highest item on the menu.
        </p>

        <h3>Watching sodium</h3>
        <p>
          This is the hardest constraint at Applebee's. Almost nothing sauced comes in under 2,000 mg. The lowest-sodium items are Brownie Bite (190 mg), Steamed Broccoli (200 mg), Garlicky Green Beans (550 mg), House Salad (610 mg), Classic Fries (800 mg) and Baby Back Ribs (1,300 mg).
        </p>
        <p>
          Requesting grilled items without added salt or seasoning blend, and taking dressings and sauces on the side, is the highest-impact change available.
        </p>

        <h3>Managing blood sugar</h3>
        <p>
          The relevant columns are carbohydrates and sugars, not calories. Glazes and sweet sauces drive most of the sugar load  the Four-Cheese Mac with Honey Pepper Tenders carries 44g of sugar and 160g of carbohydrate, the highest carb figure on the menu.
        </p>
        <p>
          Lower-carbohydrate combinations exist: the 8 oz. Top Sirloin carries 45g carbs and 7g sugar. Steamed Broccoli adds 7g carbs. Unsweetened iced tea from the <Link href="/menu/non-alcoholic-beverages">non-alcoholic drinks</Link> selection is 0.
        </p>

        <h3>Weight-tracking programmes</h3>
        <p>
          Point and macro systems calculate differently, so the useful thing here is the raw data rather than a point estimate. What the numbers support: grilled beats crispy every time, sauces on the side make a large difference, and vegetable sides cost a fraction of what fries cost.
        </p>
        <p>
          Terms worth treating as flags on this menu: crispy, hand-battered, glazed and loaded. Each one reliably signals a jump in fat, sugar or both.
        </p>
      </section>

      {/* Section 11  Kids Menu Nutrition */}
      <section className={styles.clusterSection} id="kids-menu-nutrition">
        <h2>Applebee's Kids Menu Nutrition</h2>
        <p>
          The <Link href="/menu/kids-menu">kids menu</Link> spans a wider range than its portion sizes suggest  from 90 calories to 510.
        </p>
        <div className={styles.tableCard} style={{ maxWidth: '700px', margin: '25px 0' }}>
          <div className={styles.tableResponsive}>
            <table className={styles.nutritionTable}>
              <thead>
                <tr>
                  <th scope="col" className={styles.colName}>Item</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Calories</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Protein</th>
                  <th scope="col" style={{ textAlign: 'right' }}>Sodium</th>
                </tr>
              </thead>
              <tbody>
                {kidsMenuData.map((k, idx) => (
                  <tr key={idx}>
                    <td className={styles.nameCell} data-label="Item"><strong>{k.name}</strong></td>
                    <td className={styles.calCell} data-label="Calories">{k.calories}</td>
                    <td className={styles.proteinCell} data-label="Protein">{k.protein}</td>
                    <td className={styles.sodiumCell} data-label="Sodium">{k.sodium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p>
          The Kids Grilled Chicken is the standout: 32g of protein for 180 calories, more protein than the fried tenders at less than half the calories.
        </p>
        <p>
          The bigger lever is the drink. Swapping a fountain soda for milk or water removes more sugar from a kids meal than any entrée swap does. Sodium is also worth watching  Kids Macaroni & Cheese carries 1,350 mg, which is most of a child's recommended daily intake in one dish.
        </p>
      </section>

      {/* Section 12  Drink Calories */}
      <section className={styles.clusterSection} id="drink-calories">
        <h2>Applebee's Drink and Cocktail Calories</h2>
        <p>
          Drinks from the <Link href="/menu/signature-cocktails">drink menu</Link> are the easiest place to add a second meal's worth of calories without noticing.
        </p>
        <div className={styles.tableCard} style={{ maxWidth: '700px', margin: '25px 0' }}>
          <div className={styles.tableResponsive}>
            <table className={styles.nutritionTable}>
              <thead>
                <tr>
                  <th scope="col" className={styles.colName}>Drink</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Calories</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Sugar</th>
                  <th scope="col" style={{ textAlign: 'right' }}>ABV</th>
                </tr>
              </thead>
              <tbody>
                {drinkCaloriesData.map((d, idx) => (
                  <tr key={idx}>
                    <td className={styles.nameCell} data-label="Drink"><strong>{d.name}</strong></td>
                    <td className={styles.calCell} data-label="Calories">{d.calories}</td>
                    <td data-label="Sugar" style={{ textAlign: 'center', color: '#4b5563', fontWeight: 600 }}>{d.sugars}</td>
                    <td data-label="ABV" style={{ textAlign: 'right', color: '#4b5563', fontWeight: 600 }}>{d.abv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p>
          The frozen Mucho Margarita at 650 calories and 75g of sugar carries more sugar than the Triple Chocolate Meltdown's dessert-level 87g comes close to matching  in a drink. The Oreo Cookie Shake at 840 calories is close to a full entrée.
        </p>
        <p>
          Draft light beer is the lowest-calorie alcoholic option at 130 calories with zero sugar. Spirits with club soda, or a standard glass of wine, keep the figure in a similar range. Frozen and blended drinks are where the numbers climb, because the calories come from syrup and purée rather than from the alcohol. You can <Link href="/locations">find your local restaurant</Link> to check drink specials.
        </p>
      </section>

      {/* Section 13  FAQ */}
      <section className={styles.clusterSection} id="faqs">
        <h2>Applebee's Nutrition  Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <article key={index} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
