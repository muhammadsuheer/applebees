import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionCalculator from '@/components/NutritionCalculator';
import { nutritionData, kidsMenuData, drinkCaloriesData } from '@/data/nutrition';
import { PRICES_LAST_VERIFIED } from '@/data/site';
import { formatMonthYear } from '@/lib/dates';
import styles from './page.module.css';

// Every figure on this page is read from data/nutrition.ts or data/menu.ts.
// Daily Values used: sodium 2,300mg, saturated fat 20g (FDA). Kids 4–8 sodium limit 1,500mg (NASEM 2019).
// Don't add causal claims ("that's the butter", "from the fryer oil") without a source from Applebee's.

export const metadata: Metadata = {
  title: "Applebee's Nutrition Facts 2026: Calories, Protein, Sodium & Allergens",
  description:
    "Applebee's nutrition facts for 30 menu items: calories, protein, sodium, sugar and allergens, plus a meal calculator. The saltiest appetizer carries twice a day's sodium.",
  alternates: {
    canonical: 'https://applebees-menus.us/nutrition',
  },
  openGraph: {
    siteName: 'Applebees Menu Guide',
    images: [{ url: '/og/og-nutrition.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-nutrition.webp'],
  },
};

const categoryNotes: Record<string, { lead: React.ReactNode; insight: React.ReactNode }> = {
  Appetizers: {
    lead: (
      <>
        The saltiest part of the menu, and most of these are built to share. Half price at{' '}
        <Link href="/happy-hour">happy hour</Link>.
      </>
    ),
    insight: (
      <>
        <strong>Reading this table:</strong> Garlic Parmesan wings have 180 more calories than
        Classic Hot Buffalo and 2,010mg less sodium, 43% less. If sodium is your limit, the
        higher-calorie wings are the better order.
      </>
    ),
  },
  'Salads & Soups': {
    lead: (
      <>
        The widest spread on the menu. A House Salad and a crispy Oriental Chicken Salad on the{' '}
        <Link href="/menu/salads">salads</Link> list are 1,400 calories apart.
      </>
    ),
    insight: (
      <>
        <strong>Worth flagging:</strong> the crispy Oriental Chicken Salad carries 45g of sugar, 11g
        more than the Brownie Bite dessert. It also contains tree nuts. The Grilled Chicken Caesar
        flags fish, from the dressing. Neither shows up if you only read the item name.
      </>
    ),
  },
  'Steaks, Ribs & Chicken': {
    lead: (
      <>
        The leanest protein on the menu lives here, across <Link href="/menu/steaks-and-ribs">steaks
        and ribs</Link> and <Link href="/menu/chicken">chicken</Link>.
      </>
    ),
    insight: (
      <>
        <strong>The leanest way to get protein:</strong> the 8 oz. Top Sirloin gives you 55g of protein for 830
        calories. Getting the same protein from the crispy Oriental Chicken Salad would cost you more
        than twice the calories. The surprise here is the half rack of Double-Glazed Baby Back Ribs: 760 calories,
        1,300mg of sodium, and 0g of sugar despite the glaze.
      </>
    ),
  },
  'Seafood & Pasta': {
    lead: (
      <>
        Pasta holds the menu&apos;s highest protein and its highest saturated fat. See{' '}
        <Link href="/menu/seafood">seafood</Link> and <Link href="/menu/pasta">pasta</Link>.
      </>
    ),
    insight: (
      <>
        <strong>Two numbers stand out.</strong> The Three-Cheese Chicken Penne has 40g of saturated
        fat, exactly twice the 20g Daily Value, in one plate. The Four-Cheese Mac &amp; Cheese with
        Honey Pepper Tenders has 160g of carbohydrate and 44g of sugar. The Blackened Cajun Salmon is
        the balanced order in this group: 850 calories and 44g of protein.
      </>
    ),
  },
  'Burgers & Sandwiches': {
    lead: (
      <>
        Every burger on the <Link href="/menu/handcrafted-burgers">burger menu</Link> clears 1,000
        calories, from 1,090 for the Impossible to 1,620 for the Quesadilla Burger.
      </>
    ),
    insight: (
      <>
        <strong>On the Impossible Cheeseburger:</strong> it&apos;s the lightest burger, has the most
        fiber of any dish here at 12g, and the least cholesterol at 35mg. It isn&apos;t lower in
        sodium. At 2,910mg it&apos;s saltier than the beef Classic Cheeseburger at 2,640mg.
      </>
    ),
  },
  'Sides & Desserts': {
    lead: (
      <>
        Where a meal gets lighter or heavier fastest. See <Link href="/menu/sides">sides</Link> and{' '}
        <Link href="/menu/desserts">desserts</Link>.
      </>
    ),
    insight: (
      <>
        <strong>If dessert is happening:</strong> the Brownie Bite is 330 calories and 34g of sugar.
        The Triple Chocolate Meltdown is 910 and 87g. Same craving, a third of the load. And swapping
        Classic Fries (400) for Steamed Broccoli (100) takes 300 calories off any entrée.
      </>
    ),
  },
};

const faqData = [
  {
    question: "What is the lowest calorie meal at Applebee's?",
    answer:
      "A 6 oz. Top Sirloin (760 calories) with a House Salad with fat free Italian (160) comes to 920 calories and 49g of protein. The lowest single item is Steamed Broccoli at 100 calories.",
  },
  {
    question: "What is the highest calorie item at Applebee's?",
    answer:
      "The Classic Combo appetizer platter at 2,200 calories, then the Ultimate Trio at 1,850. The heaviest entrée is the Hand-Battered Fish & Chips at 1,680, ahead of the Quesadilla Burger at 1,620.",
  },
  {
    question: "How many calories are in Applebee's Oriental Chicken Salad?",
    answer:
      "1,560 with crispy chicken and 900 grilled. The crispy version also has 45g of sugar, more than the Brownie Bite dessert, and contains tree nuts.",
  },
  {
    question: "Which Applebee's item has the most protein?",
    answer:
      "The Three-Cheese Chicken Penne at 77g, though it also has 40g of saturated fat. For lots of protein without the calories, the 8 oz. Top Sirloin is the pick: 55g for 830.",
  },
  {
    question: "Which Applebee's item has the most sodium?",
    answer:
      "Boneless Wings in Classic Hot Buffalo sauce at 4,720mg, just over twice the 2,300mg Daily Value. Fiesta Lime Chicken is next among entrées at 3,630mg.",
  },
  {
    question: "Does Applebee's have a gluten-free menu?",
    answer:
      "No, and it doesn't run a gluten-free kitchen. A handful of dishes have no wheat in the standard recipe, including both Top Sirloin steaks, but with celiac disease the shared grills and fryers are the real risk. See the allergen menu page.",
  },
  {
    question: "Are there vegan options at Applebee's?",
    answer:
      "The House Salad with fat free Italian dressing is the one dish flagged vegan, at 160 calories. Steamed Broccoli and Garlicky Green Beans carry none of the major allergens, but ask how they're prepared.",
  },
  {
    question: 'Can you eat low carb at Applebee\'s?',
    answer:
      "Yes. The 8 oz. Top Sirloin has 45g of carbohydrate and 7g of sugar. Pair it with Steamed Broccoli (7g carbs) instead of potatoes and add unsweetened iced tea at 0.",
  },
  {
    question: "How many calories are in an Applebee's margarita?",
    answer:
      "A frozen Mucho Margarita is 650 calories with 75g of sugar, 12g short of the Triple Chocolate Meltdown. A 16 oz Miller Lite draft is 130 calories.",
  },
  {
    question: 'How accurate is this nutrition information?',
    answer:
      "It reflects standard recipes as Applebee's publishes them. Modifications, portioning and franchise suppliers change the real numbers. For an allergy or a medical diet, confirm with the restaurant.",
  },
];

export default function NutritionPage() {
  const checked = formatMonthYear(PRICES_LAST_VERIFIED);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://applebees-menus.us/nutrition/#webpage',
        url: 'https://applebees-menus.us/nutrition',
        name: "Applebee's Nutrition Facts 2026: Calories, Protein, Sodium & Allergens",
        description:
          "Calories, protein, sodium, sugar and allergens for 30 Applebee's menu items, with a meal calculator.",
        dateModified: PRICES_LAST_VERIFIED,
        publisher: { '@id': 'https://applebees-menus.us/#organization' },
        breadcrumb: { '@id': 'https://applebees-menus.us/nutrition/#breadcrumb' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://applebees-menus.us/nutrition/#faq',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://applebees-menus.us/nutrition/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://applebees-menus.us/' },
          { '@type': 'ListItem', position: 2, name: 'Nutrition', item: 'https://applebees-menus.us/nutrition' },
        ],
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Nutrition', href: '/nutrition' }]} />

      <section className={styles.hero} aria-labelledby="nutrition-title">
        <h1 id="nutrition-title">Applebee&apos;s Nutrition Facts and Calories</h1>
        <p className={styles.heroLead}>
          A House Salad with fat free Italian is 160 calories. Hand-Battered Fish &amp; Chips is 1,680.
          Same menu, same visit, more than ten times the calories depending on what you order.
        </p>
        <p className={styles.heroSub}>
          Below are calories, fat, saturated fat, cholesterol, sodium, carbs, fiber, sugar and protein
          for the dishes people order most, with allergens for each, from Applebee&apos;s published
          nutrition information (checked {checked}). There&apos;s a calculator too, so you can add up a
          meal before you order it.
        </p>
        <p className={styles.heroHighlight}>
          The short version: Applebee&apos;s is easy if you&apos;re chasing protein and hard if
          you&apos;re watching sodium.
        </p>
      </section>

      <section className={styles.clusterSection} id="sodium-vs-calories">
        <h2>The Number That Matters Most at Applebee&apos;s Isn&apos;t Calories</h2>
        <p>Most people read calories first. At Applebee&apos;s, read sodium first.</p>
        <p>
          Boneless Wings in Classic Hot Buffalo sauce are 1,080 calories. That&apos;s a lot, but
          it&apos;s a shared starter. The sodium is 4,720mg, and the FDA&apos;s Daily Value is 2,300mg.
          One appetizer holds more than two days of sodium.
        </p>
        <p>
          It isn&apos;t a one-off. Fiesta Lime Chicken has 3,630mg. Brew Pub Pretzels &amp; Beer Cheese
          Dip, 3,540mg. Hand-Battered Fish &amp; Chips, 3,500mg. Bourbon Street Steak, 3,430mg. Sodium on
          this menu follows the sauce, the glaze and the cheese, not the calorie count.
        </p>
        <p>
          So the lightest item isn&apos;t always the least salty. Steamed Broccoli is 100 calories and
          200mg. The House Salad is 160 calories and 610mg. Both are light, and one has three times the
          sodium of the other. If you&apos;re managing blood pressure, read the sodium column before the
          calorie column.
        </p>
      </section>

      <section className={styles.calculatorSection} id="nutrition-calculator">
        <div className={styles.sectionHeader}>
          <h2>Applebee&apos;s Nutrition Calculator</h2>
          <p>
            Add items and the totals update as you go: calories, protein, carbs, fat and sodium. It
            covers <Link href="/menu/appetizers">appetizers</Link>, <Link href="/menu/salads">salads</Link>,{' '}
            <Link href="/menu/steaks-and-ribs">steaks and ribs</Link>, <Link href="/menu/chicken">chicken</Link>,{' '}
            <Link href="/menu/seafood">seafood</Link>, <Link href="/menu/pasta">pasta</Link>,{' '}
            <Link href="/menu/handcrafted-burgers">burgers</Link>, <Link href="/menu/sides">sides</Link>{' '}
            and <Link href="/menu/desserts">desserts</Link>.
          </p>
          <p>
            &quot;Save PDF&quot; prints the meal and its totals, which is handy if you track macros or want
            to show a dietitian what you actually eat when you go out. The calculator uses standard
            recipes, so ordering a salad with no dressing moves the real numbers.
          </p>
        </div>
        <NutritionCalculator />
      </section>

      <section className={styles.content} id="nutrition-tables">
        <div className={styles.tableIntro}>
          <h2>Applebee&apos;s Nutrition Facts by Category</h2>
          <p>
            One serving per row, as Applebee&apos;s publishes it. Allergens and dietary tags are in the
            last column.
          </p>
        </div>

        {nutritionData.map((category) => {
          const note = categoryNotes[category.title];
          const slug = category.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-');
          return (
            <section key={category.title} className={styles.categoryBlock} id={`${slug}-nutrition`}>
              <h3>{category.title} Nutrition</h3>
              {note && <p className={styles.categoryLead}>{note.lead}</p>}
              <div className={styles.tableCard}>
                <div className={styles.tableResponsive}>
                  <table className={styles.nutritionTable}>
                    <caption className="sr-only">Applebee&apos;s {category.title} nutrition facts</caption>
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
                        <th scope="col" className={styles.colAllergens}>Allergens &amp; Flags</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item) => (
                        <tr key={item.id}>
                          <td className={styles.nameCell} data-label="Item"><strong>{item.name}</strong></td>
                          <td className={styles.calCell} data-label="Calories">{item.calories.toLocaleString('en-US')}</td>
                          <td data-label="Fat">{item.fat}g</td>
                          <td data-label="Saturated Fat">{item.satFat}g</td>
                          <td data-label="Trans Fat">{item.transFat}g</td>
                          <td data-label="Cholesterol">{item.cholesterol}mg</td>
                          <td className={styles.sodiumCell} data-label="Sodium">{item.sodium.toLocaleString('en-US')}mg</td>
                          <td data-label="Carbs">{item.carbs}g</td>
                          <td data-label="Fiber">{item.fiber}g</td>
                          <td data-label="Sugar">{item.sugars}g</td>
                          <td className={styles.proteinCell} data-label="Protein">{item.protein}g</td>
                          <td className={styles.allergenCell} data-label="Allergens & Flags">
                            {item.dietaryTags?.map((t) => (
                              <span key={t} className={styles.dietTag}>{t}</span>
                            ))}
                            {item.allergens?.length ? item.allergens.join(', ') : 'None of the major allergens'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {note && <p className={styles.tableInsight}>{note.insight}</p>}
            </section>
          );
        })}
      </section>

      <section className={styles.clusterSection} id="allergen-guide">
        <h2>Where Allergens Hide on the Applebee&apos;s Menu</h2>
        <p>
          The allergens to watch here are milk, eggs, wheat, soy, fish, shellfish and tree nuts. None of
          the dishes listed flag peanuts or sesame, the other two FDA major allergens, so ask the kitchen about
          those directly. For a filterable table, use the <Link href="/allergen-menu">allergen menu</Link>.
        </p>

        <h3>Milk</h3>
        <p>
          The most common one. Beyond the obvious cheese dishes, both Top Sirloin steaks flag milk even
          though they read as plain grilled beef. Don&apos;t assume an order modification removes it. Ask
          the kitchen what carries the milk.
        </p>

        <h3>Soy</h3>
        <p>
          The one people miss. It&apos;s in almost everything, including dishes with no obvious soy in
          them. The half rack of Baby Back Ribs lists soy as its only allergen, and Classic Fries flag it
          too.
        </p>

        <h3>Wheat</h3>
        <p>
          In every breaded appetizer, every bun and every pasta. The Hand-Battered Fish
          &amp; Chips carries it along with fish, soy and milk.
        </p>

        <h3>Fish, shellfish and tree nuts</h3>
        <p>
          Three dishes catch people out. The Grilled Chicken Caesar Salad flags fish, from the dressing.
          Bourbon Street Chicken &amp; Shrimp flags shellfish in what reads like a chicken plate. And the
          crispy Oriental Chicken Salad contains tree nuts. With a nut allergy, skip that salad rather
          than asking for it without nuts.
        </p>

        <h3>Eggs</h3>
        <p>
          Less common. The Garlic Parmesan Boneless Wings flag eggs and the Classic Hot Buffalo version
          doesn&apos;t, so the sauce is the difference.
        </p>

        <h3>If your allergy is serious</h3>
        <p>
          Applebee&apos;s kitchens share grills, fryers and prep surfaces. Ask for the manager, say plainly
          that it&apos;s an allergy and not a preference, and ask for clean utensils and a clean pan. With
          celiac disease, treat anything fried as exposed to wheat unless the kitchen tells you its fryer
          is dedicated.
        </p>
      </section>

      <section className={styles.clusterSection} id="vegetarian-vegan-options">
        <h2>Vegetarian and Vegan Options at Applebee&apos;s</h2>
        <p>
          Vegetarians have more to work with than at most steak-and-burger chains. Items flagged
          vegetarian include Spinach &amp; Artichoke Dip (990 calories), Mozzarella Sticks (860), Brew Pub
          Pretzels &amp; Beer Cheese Dip (1,160), Tomato Basil Soup (210) and the Impossible Cheeseburger
          (1,090). The Impossible is the only real vegetarian entrée, and at 39g of protein and 12g of
          fiber it eats like one.
        </p>
        <p>
          Vegans have one flagged item: the House Salad with fat free Italian, at 160 calories. Steamed
          Broccoli and Garlicky Green Beans list none of the major allergens, so they&apos;re the obvious
          sides to add, but ask how they&apos;re cooked before you count them as vegan.
        </p>
      </section>

      <section className={styles.clusterSection} id="highest-lowest-calories">
        <h2>Highest and Lowest Calorie Items at Applebee&apos;s</h2>
        <div className={styles.tableCard} style={{ maxWidth: '760px', margin: '20px 0' }}>
          <div className={styles.tableResponsive}>
            <table className={styles.nutritionTable}>
              <caption className="sr-only">Applebee&apos;s menu extremes</caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.colName}>Measure</th>
                  <th scope="col">Item</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td data-label="Measure"><strong>Highest calorie</strong></td><td>The Classic Combo (appetizer)</td><td>2,200</td></tr>
                <tr><td data-label="Measure"><strong>Highest calorie entrée</strong></td><td>Hand-Battered Fish &amp; Chips</td><td>1,680</td></tr>
                <tr><td data-label="Measure"><strong>Lowest calorie</strong></td><td>Steamed Broccoli</td><td>100</td></tr>
                <tr><td data-label="Measure"><strong>Most protein</strong></td><td>Three-Cheese Chicken Penne</td><td>77g</td></tr>
                <tr><td data-label="Measure"><strong>Most protein for the calories</strong></td><td>8 oz. Top Sirloin</td><td>55g for 830</td></tr>
                <tr><td data-label="Measure"><strong>Most sodium</strong></td><td>Boneless Wings, Classic Hot Buffalo</td><td>4,720mg</td></tr>
                <tr><td data-label="Measure"><strong>Least sodium</strong></td><td>Brownie Bite</td><td>190mg</td></tr>
                <tr><td data-label="Measure"><strong>Most sugar</strong></td><td>Triple Chocolate Meltdown</td><td>87g</td></tr>
                <tr><td data-label="Measure"><strong>Most saturated fat</strong></td><td>Three-Cheese Chicken Penne</td><td>40g</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Behind the Fish &amp; Chips, the heaviest entrées are the Quesadilla Burger (1,620), Honey
          Pepper Chicken Tenders (1,610), the Whisky Bacon Burger (1,590) and the crispy Oriental Chicken
          Salad (1,560). A salad in the top five is the one that surprises people.
        </p>
      </section>

      <section className={styles.clusterSection} id="ordering-by-goal">
        <h2>How to Order at Applebee&apos;s for Your Goal</h2>
        <p className={styles.framingNote}>
          <em>
            These are menu numbers, not medical advice. If you&apos;re managing a condition, take them to
            your doctor or dietitian.
          </em>
        </p>

        <h3>High protein</h3>
        <p>
          Start at the grill. The 8 oz. Top Sirloin has 55g of protein for 830 calories and the 6 oz. has
          43g for 760. The Grilled Chicken Caesar Salad reaches 57g at 950 calories, but carries 2,200mg of
          sodium. For high protein with less salt, the half rack of Baby Back Ribs has 44g and 1,300mg.
        </p>

        <h3>Fewer calories</h3>
        <p>
          Build the plate from parts instead of hunting for a light entrée. A 6 oz. Top Sirloin (760),
          House Salad (160) and Steamed Broccoli (100) come to 1,020 calories and 52g of protein. That&apos;s
          fewer calories than most single burgers, with three dishes on the table. Don&apos;t trust the
          word &quot;salad&quot;: the crispy Oriental is 1,560.
        </p>

        <h3>Watching sodium</h3>
        <p>
          The hardest goal on this menu. Almost every sauced entrée lands above 2,000mg. The lowest-sodium
          choices are the Brownie Bite (190mg), Steamed Broccoli (200mg), Garlicky Green Beans (550mg),
          House Salad (610mg), Classic Fries (800mg), Tomato Basil Soup (1,260mg) and the Baby Back Ribs
          (1,300mg). Get sauces and dressings on the side.
        </p>

        <h3>Managing blood sugar</h3>
        <p>
          Read carbs and sugar, not calories. The Four-Cheese Mac &amp; Cheese with Honey Pepper Tenders
          has 160g of carbohydrate and 44g of sugar, the most carbs on the menu. The 8 oz. Top Sirloin has
          45g of carbs and 7g of sugar. Add Steamed Broccoli for another 7g of carbs, and unsweetened iced
          tea from the <Link href="/menu/non-alcoholic-beverages">drinks menu</Link> for none.
        </p>

        <h3>Counting points or macros</h3>
        <p>
          Every tracking app scores food its own way, so use the raw numbers above. Four words on this
          menu reliably mean more fat, more sugar or both: crispy, hand-battered, glazed and loaded.
        </p>
      </section>

      <section className={styles.clusterSection} id="kids-menu-nutrition">
        <h2>Applebee&apos;s Kids Menu Nutrition</h2>
        <p>
          The <Link href="/menu/kids-menu">kids menu</Link> items below run from 90 calories for
          applesauce to 510 for macaroni and cheese. The Kids Classic Cheeseburger, not in this table, is
          680.
        </p>
        <div className={styles.tableCard} style={{ maxWidth: '700px', margin: '25px 0' }}>
          <div className={styles.tableResponsive}>
            <table className={styles.nutritionTable}>
              <caption className="sr-only">Applebee&apos;s kids menu nutrition</caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.colName}>Item</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Calories</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Protein</th>
                  <th scope="col" style={{ textAlign: 'right' }}>Sodium</th>
                </tr>
              </thead>
              <tbody>
                {kidsMenuData.map((k) => (
                  <tr key={k.name}>
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
          Order the Kids Grilled Chicken. It has 32g of protein for 180 calories, which is more protein
          than the Kids Chicken Tenders (24g) at less than half their 420 calories.
        </p>
        <p>
          Watch the mac and cheese. At 1,350mg of sodium it&apos;s 90% of the 1,500mg daily limit for a
          child aged 4 to 8, in one bowl. And the drink matters more than the entrée: swap the soda for
          milk or water and you remove more sugar than any food swap would.
        </p>
      </section>

      <section className={styles.clusterSection} id="drink-calories">
        <h2>Applebee&apos;s Drink and Cocktail Calories</h2>
        <p>
          Drinks are the easiest way to add a second meal without noticing, especially from the{' '}
          <Link href="/menu/signature-cocktails">cocktail menu</Link>.
        </p>
        <div className={styles.tableCard} style={{ maxWidth: '700px', margin: '25px 0' }}>
          <div className={styles.tableResponsive}>
            <table className={styles.nutritionTable}>
              <caption className="sr-only">Applebee&apos;s drink calories</caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.colName}>Drink</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Calories</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Sugar</th>
                  <th scope="col" style={{ textAlign: 'right' }}>ABV</th>
                </tr>
              </thead>
              <tbody>
                {drinkCaloriesData.map((d) => (
                  <tr key={d.name}>
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
          A frozen Mucho Margarita is 650 calories with 75g of sugar. That&apos;s 12g short of the Triple
          Chocolate Meltdown, in a glass. The Oreo Cookie Shake, at 840 calories, is heavier than the 8 oz.
          Top Sirloin.
        </p>
        <p>
          A 16 oz Miller Lite draft is the lightest alcoholic drink here at 130 calories and no
          sugar. Blue Moon is 220. Frozen and blended drinks are where the numbers jump.
        </p>
      </section>

      <section className={styles.clusterSection} id="faqs">
        <h2>Applebee&apos;s Nutrition FAQs</h2>
        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <article key={faq.question} className={styles.faqItem}>
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
