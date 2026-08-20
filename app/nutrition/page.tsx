import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionCalculator from '@/components/NutritionCalculator';
import { nutritionData, wwData, heartHealthyData, lowSugarData, kidsMenuData, drinkCaloriesData } from '@/data/nutrition';
import styles from './page.module.css';

export default function NutritionsPage() {
  const faqData = [
    { question: "Where can I find nutrition, allergen, and ingredient information for Applebee’s menu items?", answer: "You can find a comprehensive breakdown of Applebee's nutrition facts, including calories, macros, and allergen warnings, right here on this page. We continually update our data based on official sources." },
    { question: "What allergens does Applebee’s track in its menu items?", answer: "Applebee's tracks the top eight major allergens: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, and soybeans, along with sesame." },
    { question: "Are menu items guaranteed to be free of allergens or cross-contamination?", answer: "No. Applebee's kitchens are shared environments. While they take precautions, there is always a risk of cross-contact, especially in shared fryers. Guests with severe allergies should always consult the manager." },
    { question: "Does Applebee’s offer vegetarian and vegan menu guidance?", answer: "Yes, we provide detailed guides on modifying your order. While there are no dedicated vegan entrees, you can build a satisfying meal using sides like steamed broccoli, baked potatoes, and modified house salads." },
    { question: "Does Applebee’s have gluten-free options?", answer: "While there is no dedicated gluten-free menu, several items like the 6 oz. Top Sirloin and Grilled Chicken Breast can be ordered gluten-free. Be sure to avoid all fried items, as fryers are shared." }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/nutrition/#faq",
        "name": "Applebee's Nutrition FAQ",
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
      <Header />
      <Breadcrumb items={[{ label: 'Nutritions', href: '/nutritions' }]} />

      <header className={styles.hero} role="banner" aria-label="Nutrition Page Banner">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <h1>Applebee's Nutrition, Calories, Allergen Information & More</h1>
        <p>
          Curious about exactly what is inside your food before you order at Applebee's? This ultimate 2026 guide breaks down everything you need to know. We have compiled the full calorie counts, macronutrients, hidden ingredients, and comprehensive allergen warnings for the entire menu. Whether you are rigorously tracking macros, searching for low-calorie options, or navigating severe food allergies like gluten and dairy, our detailed charts and guides have you covered.
        </p>
      </header>

      <section className={styles.clusterSection}>
        <h2>Applebee's Nutrition Calculator & Printable Macro Tracker</h2>
        <p>
          Don't want to do the math manually? Use our custom high-end <strong>Applebee's Nutrition Calculator</strong> below to instantly build your meal. Whether you are counting calories, tracking macros for weight loss, or managing your sodium intake, simply select items from the menu categories to calculate your total calories, protein, carbohydrates, fat, and sodium.
        </p>
        <p>
          <strong>Download Applebee's Nutrition PDF:</strong> Once you have built your custom meal, click the <strong>"Save PDF"</strong> button in the summary tray. This will instantly generate a clean, <strong>printable Applebee's dietary menu PDF</strong> of your exact meal and its macros. This is the ultimate tool to plan your meal, calculate your points, and hit your dietary goals before you even step foot in the restaurant.
        </p>
        <NutritionCalculator />
      </section>

      <section className={styles.content}>
        <div className={styles.tableIntro}>
          <h2>Applebee's Nutrition & Calories Menu Data</h2>
          <p>
            Counting calories or tracking your protein intake? Below is our massive, categorized nutrition table. It provides a complete breakdown of every popular Applebee's meal, detailing calories, fat, saturated fat, trans fat, cholesterol, sodium, carbohydrates, fiber, sugars, and protein. Use this guide to make smarter, flavor-packed choices that fit your dietary goals.
          </p>
        </div>

        {nutritionData.map((category) => (
          <section key={category.title} className={styles.categorySection} id={`nutrition-${category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            <h2>{category.title} Nutrition</h2>

            <div className={styles.tableWrapper}>
              <table className={`${styles.nutritionTable} ${styles.mainTable}`}>
                <caption>Complete Macro-nutrient breakdown for Applebee's {category.title}</caption>
                <thead>
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Serving</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Fat (g)</th>
                    <th scope="col">Sat Fat (g)</th>
                    <th scope="col">Trans Fat (g)</th>
                    <th scope="col">Chol (mg)</th>
                    <th scope="col">Sodium (mg)</th>
                    <th scope="col">Carbs (g)</th>
                    <th scope="col">Fiber (g)</th>
                    <th scope="col">Sugars (g)</th>
                    <th scope="col">Protein (g)</th>
                    <th scope="col">Dietary & Allergens</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item) => (
                    <tr key={item.id}>
                      <th scope="row" className={styles.itemName}>{item.name}</th>
                      <td>{item.serving}</td>
                      <td className={styles.highlightCol}>{item.calories}</td>
                      <td>{item.fat}</td>
                      <td>{item.satFat}</td>
                      <td>{item.transFat}</td>
                      <td>{item.cholesterol}</td>
                      <td>{item.sodium}</td>
                      <td>{item.carbs}</td>
                      <td>{item.fiber}</td>
                      <td>{item.sugars}</td>
                      <td className={styles.highlightCol}>{item.protein}</td>
                      <td className={styles.tagsCol}>
                        {item.dietaryTags && item.dietaryTags.length > 0 && (
                          <ul className={styles.tagList} aria-label="Dietary Tags">
                            {item.dietaryTags.map(tag => <li key={tag}>{tag}</li>)}
                          </ul>
                        )}
                        {item.allergens && item.allergens.length > 0 && (
                          <ul className={styles.allergenList} aria-label="Allergens">
                            {item.allergens.map(allergen => <li key={allergen}>{allergen}</li>)}
                          </ul>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </section>

      {/* Massive SEO Content Sections */}
      <section className={styles.clusterSection} id="allergen-info">
        <h2>Applebee’s Allergen Info & Safety Guide</h2>
        <p>
          Dining out with food allergies or sensitivities can be stressful. At Applebee's, guest safety is a massive priority. With a diverse menu spanning cheesy pastas, fried appetizers, and grilled steaks, it is critical to have accurate allergen data before you order. Our guide below is designed to help you quickly identify hidden ingredients so you can navigate the menu safely, whether you are managing a severe nut allergy, a gluten sensitivity, or lactose intolerance.
        </p>

        <h3>Common Allergens Tracked at Applebee’s</h3>
        <p>
          Applebee's rigorously tracks the major U.S. food allergens across its entire menu. Here is a breakdown of the most common allergens and where they typically hide:
        </p>
        <ul className={styles.textList}>
          <li><strong>Milk & Dairy:</strong> Extensively found in cheeses, creamy pasta sauces, butter-basted steaks, and desserts.</li>
          <li><strong>Eggs:</strong> Commonly used as a binder in baked goods, and heavily featured in dressings and sauces (like mayonnaise).</li>
          <li><strong>Peanuts & Tree Nuts:</strong> While less common in main courses, they appear in select desserts, salads (like the Oriental Chicken Salad), and seasonal sauces.</li>
          <li><strong>Fish & Shellfish:</strong> Present in specific seafood dishes; beware of shared fryers if you have a severe shellfish allergy.</li>
          <li><strong>Soy:</strong> A very common hidden ingredient found in marinades, Asian-inspired sauces, and frying oils.</li>
          <li><strong>Wheat/Gluten:</strong> Ubiquitous in breaded appetizers, buns, pasta dishes, and beer-battered foods.</li>
        </ul>

        <h3>Gluten-Free Guide at Applebees</h3>
        <p>
          While Applebee’s does not maintain a certified gluten-free kitchen, many items are naturally free of wheat. Safe starting points generally include the 6 oz. or 8 oz. Top Sirloin, Grilled Chicken Breast, and simple sides like Steamed Broccoli. The biggest risk for celiac guests is <strong>cross-contamination</strong>. Applebee's uses shared fryers, meaning items like French Frieswhich are naturally gluten-freewill likely be contaminated by breaded chicken tenders cooked in the same oil. Always alert your server to a severe gluten sensitivity so the kitchen can take extra precautions.
        </p>

        <h3>Dairy-Free Guide at Applebees</h3>
        <p>
          Navigating a dairy-free diet requires vigilance. Many seemingly dairy-free items, such as the Garlic Mashed Potatoes or grilled vegetables, are often prepared with butter or cream bases. To eat dairy-free, order your steaks and grilled chicken explicitly "without butter", and opt for plain baked potatoes. Be extremely cautious with salad dressings and always ask for oil and vinegar as a safe alternative.
        </p>
      </section>

      <section className={styles.clusterSection} id="vegetarian-vegan">
        <h2>Applebee’s Vegetarian & Vegan Menu Guide</h2>
        <p>
          Finding plant-based options at a casual dining steakhouse requires a bit of creativity, but Applebee's has made significant strides in offering vegetarian and vegan-friendly meals. Not every salad is meat-free by default, and some sides contain hidden animal products, so we have mapped out exactly how to order.
        </p>

        <h3>Vegetarian Options at Applebee’s</h3>
        <p>
          Vegetarians have a wide array of choices, primarily located in the appetizers and sides categories. Fan favorites like the Spinach & Artichoke Dip, Mozzarella Sticks, and Brew Pub Pretzels are completely meat-free. For a main course, the Four Cheese Mac & Cheese (ordered without bacon or chicken) is a heavy, satisfying option. You can also customize almost any salad by removing the chicken and asking for extra cheese or beans.
        </p>

        <h3>Vegan Options at Applebee’s</h3>
        <p>
          Vegans will need to utilize the "Build Your Own" strategy. Because Applebee's does not currently feature a dedicated vegan entree (like a tofu bowl or specific vegan pasta), your best approach is combining sides. A plain Baked Potato (no butter, no sour cream), Steamed Broccoli, and a House Salad (no cheese, no croutons, with Lemon Juice or Fat-Free Italian dressing) makes a complete meal. Be aware that the French Fries are cooked in shared fryers, which may not align with strict vegan preferences.
        </p>
      </section>

      <section className={styles.clusterSection} id="weight-watchers">
        <h2>Applebee's Weight Watchers Points Guide</h2>
        <p>
          If you are utilizing the WW (Weight Watchers) system, dining at a casual restaurant can be daunting. However, <strong>Applebee's WW friendly options</strong> do exist if you know where to look. To keep your SmartPoints or PersonalPoints low, focus heavily on the grill menu. The 6 oz. Top Sirloin and Grilled Chicken Breast are fantastic ZeroPoint or low-point anchors. Avoid anything labeled "Crispy," "Hand-Battered," or "Glazed," as these significantly increase sugar and fat, driving up your points. Always opt for Steamed Broccoli or Garlicky Green Beans over fries to keep your meal strictly within your daily allowance.
        </p>
        <div className={styles.tableWrapper} style={{ marginTop: '20px' }}>
          <table className={styles.nutritionTable}>
            <thead>
              <tr>
                <th scope="col">Suggested Item</th>
                <th scope="col">Calories</th>
                <th scope="col">Protein</th>
                <th scope="col">Sugars</th>
                <th scope="col">WW Estimate</th>
              </tr>
            </thead>
            <tbody>
              {wwData.map((item, idx) => (
                <tr key={idx}>
                  <th scope="row" className={styles.itemName}>{item.name}</th>
                  <td className={styles.highlightCol}>{item.calories}</td>
                  <td>{item.protein}</td>
                  <td>{item.sugars}</td>
                  <td><span className={styles.tagList}><li style={{ backgroundColor: '#dcfce7', color: '#166534' }}>{item.wwPoints}</li></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.clusterSection} id="heart-healthy">
        <h2>Heart-Healthy & Low Sodium Menu Options</h2>
        <p>
          Managing sodium intake is one of the hardest challenges when dining out. Many items on the Applebee's menu, especially soups and wing sauces, contain extremely high sodium levels. For a <strong>heart healthy Applebee's meal</strong>, you must navigate the menu strategically. The Blackened Cajun Salmon is an excellent choice, providing Omega-3 fatty acids with a moderate sodium count. Avoid heavy cheese dips, processed meats (like bacon or sausages), and request that your steaks and chicken be grilled without added salt or heavy seasoning blends.
        </p>
        <div className={styles.tableWrapper} style={{ marginTop: '20px' }}>
          <table className={styles.nutritionTable}>
            <thead>
              <tr>
                <th scope="col">Suggested Item</th>
                <th scope="col">Calories</th>
                <th scope="col">Sodium (mg)</th>
                <th scope="col">Sat. Fat</th>
                <th scope="col">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {heartHealthyData.map((item, idx) => (
                <tr key={idx}>
                  <th scope="row" className={styles.itemName}>{item.name}</th>
                  <td>{item.calories}</td>
                  <td className={styles.highlightCol}>{item.sodium}</td>
                  <td>{item.saturatedFat}</td>
                  <td><span className={styles.tagList}><li style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>{item.tag}</li></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.clusterSection} id="diabetes-friendly">
        <h2>Diabetes-Friendly & Sugar-Free Options</h2>
        <p>
          For guests managing blood sugar, finding <strong>Applebee's diabetes friendly</strong> meals means minimizing refined carbohydrates and hidden sugars. Be extremely wary of BBQ sauces, Honey Glazes, and Sweet Asian Chile sauces, as these can contain over 40 grams of sugar per serving. Instead, prioritize meals high in fiber and lean protein. A classic 8 oz. Sirloin with a side of steamed vegetables and a House Salad (with oil and vinegar) provides steady, slow-digesting energy without spiking glucose levels. For beverages, stick to unsweetened iced tea or water with lemon.
        </p>
        <div className={styles.tableWrapper} style={{ marginTop: '20px' }}>
          <table className={styles.nutritionTable}>
            <thead>
              <tr>
                <th scope="col">Suggested Item</th>
                <th scope="col">Calories</th>
                <th scope="col">Sugars</th>
                <th scope="col">Carbs</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {lowSugarData.map((item, idx) => (
                <tr key={idx}>
                  <th scope="row" className={styles.itemName}>{item.name}</th>
                  <td>{item.calories}</td>
                  <td className={styles.highlightCol}>{item.sugars}</td>
                  <td>{item.carbs}</td>
                  <td><span className={styles.tagList}><li style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>{item.tag}</li></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.clusterSection} id="kids-menu-nutrition">
        <h2>Applebee's Kids Menu Nutrition</h2>
        <p>
          When feeding the family, understanding <strong>Applebee's kids menu nutrition</strong> is essential. The kids' menu offers several standard favorites like Mac & Cheese and Chicken Tenders, but parents looking for healthier alternatives have great options. Opting for the Kids Grilled Chicken meal with a side of applesauce or steamed broccoli provides a balanced, high-protein, and lower-calorie meal compared to the fried alternatives. Always check the beverage choices, as swapping out sodas for milk or water drastically reduces the meal's total sugar content.
        </p>
        <div className={styles.tableWrapper} style={{ marginTop: '20px' }}>
          <table className={styles.nutritionTable}>
            <thead>
              <tr>
                <th scope="col">Kids Item</th>
                <th scope="col">Calories</th>
                <th scope="col">Protein</th>
                <th scope="col">Sodium (mg)</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {kidsMenuData.map((item, idx) => (
                <tr key={idx}>
                  <th scope="row" className={styles.itemName}>{item.name}</th>
                  <td className={styles.highlightCol}>{item.calories}</td>
                  <td>{item.protein}</td>
                  <td>{item.sodium}</td>
                  <td><span className={styles.tagList}><li style={{ backgroundColor: '#e0e7ff', color: '#3730a3' }}>{item.tag}</li></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.clusterSection} id="cocktail-calories">
        <h2>Drink Calories & Cocktail Nutrition</h2>
        <p>
          It is incredibly easy to consume a full meal's worth of calories in beverages alone. The famous Applebee's Mucho Cocktails, while delicious and heavily discounted during Happy Hour, are often loaded with syrups and purees. <strong>Applebee's drink calories</strong> can range from 150 calories for a simple light beer to over 600 calories for a frozen Margarita or creamy dessert shake. If you are watching your caloric intake, opt for spirits mixed with club soda, standard draft light beers, or a simple glass of wine to keep liquid calories to an absolute minimum.
        </p>
        <div className={styles.tableWrapper} style={{ marginTop: '20px' }}>
          <table className={styles.nutritionTable}>
            <thead>
              <tr>
                <th scope="col">Drink / Cocktail Name</th>
                <th scope="col">Calories</th>
                <th scope="col">Sugars</th>
                <th scope="col">ABV</th>
              </tr>
            </thead>
            <tbody>
              {drinkCaloriesData.map((item, idx) => (
                <tr key={idx}>
                  <th scope="row" className={styles.itemName}>{item.name}</th>
                  <td className={styles.highlightCol}>{item.calories}</td>
                  <td>{item.sugars}</td>
                  <td>{item.abv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.clusterSection} id="pregnancy-safe">
        <h2>Pregnancy & Safe Dining Guide</h2>
        <p>
          <strong>Eating at Applebee's while pregnant</strong> requires standard dining-out precautions. Avoid any undercooked meats; always order steaks and burgers cooked to well-done to eliminate the risk of foodborne pathogens. Pass on the Caesar salad dressing if it contains raw egg (check with your specific location). The grilled chicken entrees and fully cooked pastas are excellent, safe choices that provide necessary protein and carbohydrates for expecting mothers.
        </p>
      </section>

      <section className={styles.clusterSection} id="tips-disclaimers">
        <h2>Managing Food Allergies & Important Disclaimers</h2>
        <p>
          If you have a life-threatening allergy, <strong>always inform the staff before ordering</strong>. Most locations have a printed allergen binder that the manager can bring to your table. You should request that your food be prepared with clean utensils and on a separate surface to minimize cross-contact. However, remember that Applebee's kitchens handle massive volumes of allergens daily, and they cannot guarantee a 100% allergen-free environment.
        </p>
        <p>
          <em>Disclaimer: The nutrition and allergen information provided on this page is based on standard recipes and supplier data. Calorie needs vary, but a 2,000-calorie diet is used for general guidance. Ingredients and formulations can change at any time without notice. Always verify directly with your local Applebee's restaurant if you have severe dietary restrictions.</em>
        </p>
      </section>

      <section className={styles.clusterSection} id="faqs">
        <h2>Frequently Asked Questions</h2>
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
