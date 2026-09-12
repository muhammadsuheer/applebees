export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;  // Optimized <60 char title for Google SERP & CTR
  excerpt: string;
  content: string;
  date: string;       // Published date
  modifiedDate: string; // Last updated date for SEO freshness
  author: string;
  authorRole: string; // E-E-A-T Authority
  authorImage: string; // E-E-A-T Authority
  imageUrl: string;   // High-res image for Discover
  faqs?: { question: string; answer: string }[]; // AEO & GEO FAQPage Schema
}

/*
 * Sources checked September 2026.
 * Dollarita: Business Wire "Applebee's DOLLARITA Returns This July" (June 22, 2026): $1, July 1-31, dine-in, 21+,
 *   tequila, triple sec and lime, participation may vary. First run October 2017. Returned October 2023 (Business Wire).
 *   [VERIFY: Applebee's does not publish the Dollarita pour or ABV. Do not state one.]
 * Spooky Sips 2026 through Nov 15, 2026: applebees.com Halloween drinks page.
 * Gluten: Applebee's nutrition and allergen page says shared prep areas and common fryer oil mean it can't guarantee
 *   any item is free of allergens or gluten. Wheat allergen lists: data/nutrition.ts.
 * 2 for $25 and prices: data/content/2-for-25.md and data/menu.ts. Kids meals: data/menu.ts.
 */

export const blogs: BlogPost[] = [
  {
    slug: 'legendary-dollarita-monthly-drink-specials',
    title: "Is the Applebee's Dollarita Back? The $1 Margarita in 2026",
    metaTitle: "Applebee's Dollarita 2026: Is the $1 Margarita Back?",
    excerpt: "The $1 Dollarita ran July 1 to 31, 2026, dine-in only for guests 21 and over. It's over now. Here's what's in it, when it tends to come back, and the cheapest Applebee's cocktails until it does.",
    content: `
      <div class="quickAnswer">
        <strong>Is the Dollarita available right now?</strong>
        No. Applebee's brought back the $1 Dollarita for July 1 to 31, 2026, and it ended on July 31. Until November 15, 2026, the cheapest Applebee's cocktails are the <strong>$6 Spooky Sips</strong>. No return date for the Dollarita has been announced.
      </div>

      <h2>What the Dollarita Is</h2>
      <p>A house margarita for $1. Applebee's describes it as tequila, triple sec and lime. It's a promotion, not a menu item, so it only exists when Applebee's is running it.</p>
      <p>It first ran in October 2017 as the drink of the month and got so much attention that Applebee's has used it again since, including in October 2023 and July 2026. The July 2026 run was timed to America's 250th birthday.</p>

      <h2>The July 2026 Rules</h2>
      <ul>
        <li><strong>$1 each,</strong> plus tax and tip.</li>
        <li><strong>Dine-in only.</strong> No To Go, no delivery.</li>
        <li><strong>21 and over,</strong> with ID.</li>
        <li><strong>Participating restaurants.</strong> Franchisees could opt out, and supplies could run out.</li>
      </ul>
      <p>Expect the same rules next time. Individual restaurants can also limit how many you order, which is a local decision and one worth asking about before you plan a night around it.</p>

      <h2>How Strong Is a Dollarita?</h2>
      <p>Applebee's doesn't publish the pour, so nobody outside the company can tell you the alcohol content. You'll find confident numbers online. They're guesses. What we can say is that it's a house margarita, not a premium one, and it's priced to get you in the door and ordering food.</p>

      <h2>Will the Dollarita Come Back?</h2>
      <p>Probably. Applebee's has brought it back several times since 2017, usually as a limited drink of the month. It hasn't said when. When it returns, Applebee's announces it through a press release and its social accounts, usually a week or two ahead. We update our <a href="/specials-and-deals">specials and deals</a> page when it does.</p>

      <h2>The Cheapest Applebee's Cocktails Right Now</h2>
      <div class="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Drink</th>
              <th>Price</th>
              <th>Until</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tipsy Zombie</strong> (Bacardí rum, passion fruit, pineapple, cherry, lime)</td>
              <td>$6</td>
              <td>Nov 15, 2026</td>
            </tr>
            <tr>
              <td><strong>Dracula's Juice</strong> (Bacardí rum, Cuervo tequila, prickly pear, lemon sour)</td>
              <td>$6</td>
              <td>Nov 15, 2026</td>
            </tr>
            <tr>
              <td><strong>Tropical Spell Mocktail</strong> (no alcohol)</td>
              <td>$4</td>
              <td>Nov 15, 2026</td>
            </tr>
            <tr>
              <td><strong>$10 Don Julio Mucho Margarita</strong></td>
              <td>$10</td>
              <td>Regular menu</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>The Dracula's Juice is the closest thing to a margarita on the Halloween list, since it has tequila in it. For a real margarita at a fair price, the Don Julio Mucho Margarita at $10 is the step up. Every drink with calories is on the <a href="/menu/signature-cocktails">cocktails page</a>.</p>

      <h2>Margarita Calories</h2>
      <p>A House Margarita on the rocks is 310 calories. Frozen, the Mucho Margarita is 650 with 75g of sugar. If you're counting, order it on the rocks. That one change saves more calories than most food swaps on the menu.</p>

      <h2>Happy Hour Isn't the Same as the Dollarita</h2>
      <p>The Dollarita was a national price. Happy hour drink prices are set by each restaurant, and six states ban time-limited drink discounts outright. Half price appetizers, 3:00 to 6:00 PM and 9:00 PM to close, are the reliable part of <a href="/happy-hour">happy hour</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>Is the Applebee's Dollarita back in 2026?</h3>
      <p>It ran from July 1 to July 31, 2026, and has ended. No new date has been announced.</p>

      <h3>What is in an Applebee's Dollarita?</h3>
      <p>Tequila, triple sec and lime, according to Applebee's.</p>

      <h3>Can you get a Dollarita To Go?</h3>
      <p>No. The July 2026 Dollarita was dine-in only, for guests 21 and over.</p>

      <h3>When did the Dollarita start?</h3>
      <p>October 2017.</p>

      <h3>What's the cheapest cocktail at Applebee's right now?</h3>
      <p>The $6 Spooky Sips, the Tipsy Zombie and Dracula's Juice, through November 15, 2026.</p>
    `,
    faqs: [
      {
        question: "Is the Applebee's Dollarita back in 2026?",
        answer: "It ran from July 1 to July 31, 2026, and has ended. No new date has been announced."
      },
      {
        question: "What is in an Applebee's Dollarita?",
        answer: "Tequila, triple sec and lime, according to Applebee's."
      },
      {
        question: "Can you get a Dollarita To Go?",
        answer: "No. The July 2026 Dollarita was dine-in only, for guests 21 and over."
      },
      {
        question: "When did the Dollarita start?",
        answer: "October 2017."
      },
      {
        question: "What's the cheapest cocktail at Applebee's right now?",
        answer: "The $6 Spooky Sips, the Tipsy Zombie and Dracula's Juice, through November 15, 2026."
      }
    ],
    date: '2026-08-18T08:00:00+00:00',
    modifiedDate: '2026-09-11T09:00:00+00:00',
    author: "Menu Almanac Editors",
    authorRole: 'Editorial desk',
    authorImage: '/web-app-manifest-512x512.png',
    imageUrl: '/og/og-blog-dollarita.webp'
  },
  {
    slug: 'applebees-secret-menu-hacks-revealed',
    title: "Applebee's Secret Menu (2026): 9 Orders That Actually Work",
    metaTitle: "Applebee's Secret Menu 2026: 9 Orders That Work",
    excerpt: "Applebee's has no secret menu, and asking for a TikTok nickname gets you a blank look. These nine orders use the real menu and real deals to get you more for less.",
    content: `
      <div class="quickAnswer">
        <strong>Does Applebee's have a secret menu?</strong>
        No. There's no official secret menu, and a server can't ring up an internet nickname. What works is asking for a change to a real menu item, or using a deal most people don't know about. Everything below uses items and prices from the current menu.
      </div>

      <h2>How to Ask</h2>
      <p>Describe the change, not a name. "Sauce on the side" gets rung in. "The Volcano Burger" doesn't. Keep complicated requests for quieter times, not 7 PM on a Friday, and expect add-ons like extra cheese or bacon to cost extra. What they charge is up to your restaurant.</p>

      <h2>1. Take Two Side Salads on the 2 for $25</h2>
      <p>The 2 for $25 lets you swap the shared appetizer for two side salads at the same price. A House Side Salad is 160 calories. The shared appetizers run 590 to 1,170. If you both want your own starter, or want a lighter meal, this is the best-hidden option on the menu. <a href="/menu/2-for-25">2 for $25 details</a>.</p>

      <h2>2. Make Any Soda Dirty for $1</h2>
      <p>You don't have to order one of the preset Dirty Fountain Sodas. Any fountain drink can be topped with whipped cream and a cherry for $1. A dirty Diet Pepsi or a dirty Starry are both fair game. <a href="/menu/dirty-fountain-sodas">Dirty soda flavors</a>.</p>

      <h2>3. Order the Oriental Chicken Salad Grilled</h2>
      <p>It comes crispy unless you say otherwise, and crispy it's 1,560 calories. Grilled, it's 900. Same salad, same price, 660 fewer calories. No other single request changes one dish that much. <a href="/menu/salads">Salads</a>.</p>

      <h2>4. Swap the Fries for Steamed Broccoli</h2>
      <p>Classic Fries are 400 calories. Steamed Broccoli is 100. Any entrée that comes with fries gets 300 lighter. For takeout it's a double win, because fries are the first thing to go soggy in a box. <a href="/menu/sides">Sides</a>.</p>

      <h2>5. Get Boneless Wings Sauce on the Side</h2>
      <p>For dine-in it's a preference. For To Go it matters: wings tossed in sauce steam soft on the drive home. Sauce on the side, toss at home, and they're still crisp. It also lets you try two sauces with one order.</p>

      <h2>6. Don't Spend an Ultimate Trio Pick on Fries</h2>
      <p>The Ultimate Trio lets you pick three appetizers from a list that includes Classic Fries and Waffle Fries. Skip both. Fries come with most entrées anyway, so use your three picks on things like Boneless Wings, Brew Pub Pretzels and Chicken Wonton Tacos. <a href="/menu/ultimate-trio">Ultimate Trio choices</a>.</p>

      <h2>7. Eat Between 3 and 6</h2>
      <p>Half price appetizers run 3:00 to 6:00 PM and 9:00 PM to close at participating restaurants, dine-in only. It's the biggest discount Applebee's offers. Ordering the same appetizers through a delivery app at full price, or higher, is the opposite. <a href="/happy-hour">Happy hour times and prices</a>.</p>

      <h2>8. One Person, Two Meals: the $9.99 Deal</h2>
      <p>The Really BIG Meal Deal is $9.99 for a sandwich or burger entrée with fries and a fountain drink. For one person who doesn't want a starter, it beats half of a 2 for $25 by $2.51 and includes the drink. <a href="/menu/really-big-meal-deal">Really BIG Meal Deal</a>.</p>

      <h2>9. Ask for Dressing and Crunchy Toppings on the Side</h2>
      <p>For any salad going home, ask for the dressing and the crispy toppings separately. Dressed greens wilt within minutes in a closed box. It's the salad version of sauce on the side.</p>

      <h2>What Doesn't Work</h2>
      <ul>
        <li><strong>Internet nicknames.</strong> The register doesn't have them.</li>
        <li><strong>Assuming happy hour applies to delivery.</strong> It doesn't.</li>
        <li><strong>Adults ordering from the kids menu.</strong> Some restaurants allow it and some don't. Ask, don't assume.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Does Applebee's have a secret menu?</h3>
      <p>No. There's no official secret menu. You can ask for changes to menu items, and most kitchens will make simple ones.</p>

      <h3>Can you customize orders in the Applebee's app?</h3>
      <p>Yes. Most items have options for sides, sauces and add-ons when you order through the app or website.</p>

      <h3>Can you get side salads instead of an appetizer on the 2 for $25?</h3>
      <p>Yes. Two side salads can replace the shared appetizer at the same price.</p>

      <h3>How much does it cost to make a soda dirty at Applebee's?</h3>
      <p>$1 for whipped cream and a cherry on any fountain drink.</p>

      <h3>Does Applebee's charge for modifications?</h3>
      <p>Removing something or putting a sauce on the side is normally free. Adding cheese, bacon or extra protein usually costs more, and each restaurant sets the price.</p>
    `,
    faqs: [
      {
        question: "Does Applebee's have a secret menu?",
        answer: "No. There's no official secret menu. You can ask for changes to menu items, and most kitchens will make simple ones."
      },
      {
        question: "Can you customize orders in the Applebee's app?",
        answer: "Yes. Most items have options for sides, sauces and add-ons when you order through the app or website."
      },
      {
        question: "Can you get side salads instead of an appetizer on the 2 for $25?",
        answer: "Yes. Two side salads can replace the shared appetizer at the same price."
      },
      {
        question: "How much does it cost to make a soda dirty at Applebee's?",
        answer: "$1 for whipped cream and a cherry on any fountain drink."
      },
      {
        question: "Does Applebee's charge for modifications?",
        answer: "Removing something or putting a sauce on the side is normally free. Adding cheese, bacon or extra protein usually costs more, and each restaurant sets the price."
      }
    ],
    date: '2026-08-19T08:00:00+00:00',
    modifiedDate: '2026-09-11T09:00:00+00:00',
    author: "Menu Almanac Editors",
    authorRole: 'Editorial desk',
    authorImage: '/web-app-manifest-512x512.png',
    imageUrl: '/og/og-blog-secret-menu.webp'
  },
  {
    slug: 'gluten-free-guide-applebees-menu',
    title: "Applebee's Gluten-Free Menu (2026): What Has No Wheat",
    metaTitle: "Applebee's Gluten-Free Menu 2026: No-Wheat Items",
    excerpt: "Applebee's has no certified gluten-free menu and shares its fryer oil. These entrées and sides list no wheat, with calories, and what to tell your server if you have celiac disease.",
    content: `
      <div class="quickAnswer">
        <strong>Can you eat gluten-free at Applebee's?</strong>
        Not with a guarantee. Applebee's says its kitchens share prep areas and fryer oil, so it can't promise any item is free of gluten. If you avoid wheat by preference, the steaks, ribs, Bourbon Street skillets and Blackened Cajun Salmon list no wheat. If you have celiac disease, treat everything here as a starting point for a talk with the manager, not a safe list.
      </div>

      <h2>Entrées With No Wheat Listed</h2>
      <div class="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Entrée</th>
              <th>Calories</th>
              <th>Protein</th>
              <th>Allergens listed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>6 oz. Top Sirloin</strong></td>
              <td>760</td>
              <td>43g</td>
              <td>Milk, soy</td>
            </tr>
            <tr>
              <td><strong>Double-Glazed Baby Back Ribs (half rack)</strong></td>
              <td>760</td>
              <td>44g</td>
              <td>Soy</td>
            </tr>
            <tr>
              <td><strong>8 oz. Top Sirloin</strong></td>
              <td>830</td>
              <td>55g</td>
              <td>Milk, soy</td>
            </tr>
            <tr>
              <td><strong>Blackened Cajun Salmon</strong></td>
              <td>850</td>
              <td>44g</td>
              <td>Fish, milk, soy</td>
            </tr>
            <tr>
              <td><strong>Bourbon Street Chicken &amp; Shrimp</strong></td>
              <td>1,010</td>
              <td>57g</td>
              <td>Milk, soy, shellfish</td>
            </tr>
            <tr>
              <td><strong>Bourbon Street Steak</strong></td>
              <td>1,430</td>
              <td>71g</td>
              <td>Milk, soy</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Figures are for the plate as served, sides included. "No wheat listed" means wheat isn't among the allergens. It doesn't rule out barley or rye, and it doesn't account for the shared kitchen.</p>
      <p>If you want one order, make it the Double-Glazed Baby Back Ribs. They're the lightest of the group, tied with the 6 oz. sirloin, and soy is the only allergen listed.</p>

      <h2>Sides With No Wheat Listed</h2>
      <ul>
        <li><strong>Steamed Broccoli:</strong> 100 calories, no allergens listed.</li>
        <li><strong>Garlicky Green Beans:</strong> 150 calories, no allergens listed.</li>
        <li><strong>House Salad with Fat Free Italian:</strong> 160 calories, no allergens listed. Confirm there are no croutons.</li>
        <li><strong>Tomato Basil Soup:</strong> 210 calories, milk.</li>
      </ul>

      <h2>The Fryer Problem</h2>
      <div class="warningBox">
        <strong>Classic Fries list soy, not wheat. They still aren't safe for celiac disease.</strong><br>
        Applebee's fries its breaded items, like Mozzarella Sticks and Boneless Wings, in shared oil. Anything that comes out of that fryer can pick up wheat, whatever its own ingredients say. With celiac disease, skip everything fried, including fries and tortilla chips.
      </div>

      <h2>Where Wheat Hides</h2>
      <ul>
        <li><strong>Fiesta Lime Chicken</strong> lists wheat. Removing the tortilla strips doesn't change the allergen list, so ask the manager what else in the dish contains it.</li>
        <li><strong>French Onion Soup</strong> lists wheat. Tomato Basil doesn't.</li>
        <li><strong>Grilled Chicken Caesar Salad</strong> lists wheat, along with milk, eggs and fish.</li>
        <li><strong>Oriental Chicken Salad</strong> lists wheat, soy and tree nuts.</li>
        <li><strong>Every appetizer we track</strong> lists wheat: the Boneless Wings, Brew Pub Pretzels, Spinach &amp; Artichoke Dip, Mozzarella Sticks and Chicken Quesadilla.</li>
      </ul>

      <h2>What to Say When You Order</h2>
      <div class="tipBox">
        <strong>For celiac disease or a wheat allergy:</strong><br>
        1. Say it's a medical need, not a preference, and ask for the manager.<br>
        2. Ask the manager to check the current allergen information for your dish. Recipes change.<br>
        3. Ask for your protein to be cooked away from buns and breaded items, and for no fried sides.<br>
        4. Order simple. The fewer sauces and toppings, the fewer things to check.
      </div>
      <p>Call ahead outside the lunch and dinner rush and the manager has time to go through it properly. Numbers for our listed restaurants are in the <a href="/locations">locations directory</a>.</p>

      <h2>Keto and Low-Carb</h2>
      <p>The Top Sirloin plates are the lowest in carbohydrate on this list, at 45g as served. The Bourbon Street Chicken &amp; Shrimp is close behind at 49g, with more protein, 57g. Most of those carbs are the potatoes, so swap them for Steamed Broccoli. Every figure is on the <a href="/allergen-menu">allergen menu</a> and the <a href="/nutrition">nutrition page</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>Does Applebee's have a gluten-free menu?</h3>
      <p>No. Applebee's says shared prep areas and fryer oil mean it can't guarantee any item is gluten-free.</p>

      <h3>Are Applebee's fries gluten-free?</h3>
      <p>Wheat isn't listed as an allergen, but they're cooked in shared fryer oil with breaded foods, so they aren't safe for celiac disease.</p>

      <h3>What can I eat at Applebee's with no wheat?</h3>
      <p>The Top Sirloin, Double-Glazed Baby Back Ribs, Blackened Cajun Salmon and both Bourbon Street skillets list no wheat, along with Steamed Broccoli and Garlicky Green Beans.</p>

      <h3>Is Fiesta Lime Chicken gluten-free?</h3>
      <p>No. It lists wheat as an allergen.</p>

      <h3>Does Applebee's have gluten-free buns or pasta?</h3>
      <p>We haven't found a national gluten-free bun or pasta at Applebee's. Ask your restaurant whether it can serve a burger without the bun.</p>
    `,
    faqs: [
      {
        question: "Does Applebee's have a gluten-free menu?",
        answer: "No. Applebee's says shared prep areas and fryer oil mean it can't guarantee any item is gluten-free."
      },
      {
        question: "Are Applebee's fries gluten-free?",
        answer: "Wheat isn't listed as an allergen, but they're cooked in shared fryer oil with breaded foods, so they aren't safe for celiac disease."
      },
      {
        question: "What can I eat at Applebee's with no wheat?",
        answer: "The Top Sirloin, Double-Glazed Baby Back Ribs, Blackened Cajun Salmon and both Bourbon Street skillets list no wheat, along with Steamed Broccoli and Garlicky Green Beans."
      },
      {
        question: "Is Fiesta Lime Chicken gluten-free?",
        answer: "No. It lists wheat as an allergen."
      },
      {
        question: "Does Applebee's have gluten-free buns or pasta?",
        answer: "We haven't found a national gluten-free bun or pasta at Applebee's. Ask your restaurant whether it can serve a burger without the bun."
      }
    ],
    date: '2026-08-20T08:00:00+00:00',
    modifiedDate: '2026-09-11T09:00:00+00:00',
    author: "Menu Almanac Editors",
    authorRole: 'Editorial desk',
    authorImage: '/web-app-manifest-512x512.png',
    imageUrl: '/og/og-blog-gluten-free.webp'
  },
  {
    slug: 'applebees-2-for-25-menu-value-guide',
    title: "Applebee's 2 for $25: The Best Combos by Savings, Protein and Calories",
    metaTitle: "Applebee's 2 for $25 (2026): Best Combos Ranked",
    excerpt: "The best Applebee's 2 for $25 order saves you $23.97. The worst saves about $11. Here are the combos that get the most money off, the most protein and the fewest calories.",
    content: `
      <div class="quickAnswer">
        <strong>What's the best 2 for $25 order?</strong>
        For savings: Boneless Wings and two Bourbon Street Chicken &amp; Shrimp skillets. That's $48.97 at regular prices, so you save $23.97. For the fewest calories: two side salads, the California Grilled Chicken Salad and the Bourbon Street Chicken &amp; Shrimp, at 2,250 calories for two people.
      </div>

      <h2>How the Deal Works</h2>
      <p>One appetizer, or two side salads, plus two full-size entrées for $25. Drinks, dessert, tax and tip are extra. Franchisees choose which entrées they offer and some charge more to swap in a steak, so check the menu at your table. The full entrée list is on our <a href="/menu/2-for-25">2 for $25 menu page</a>.</p>

      <h2>Best Combo for Savings</h2>
      <p>The deal is a flat $25, so the most expensive picks save the most. Regular prices from our menu data:</p>
      <div class="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Regular price</th>
              <th>You save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Boneless Wings + 2 Bourbon Street Chicken &amp; Shrimp</strong></td>
              <td>$48.97</td>
              <td>$23.97</td>
            </tr>
            <tr>
              <td><strong>Boneless Wings + 2 Fiesta Lime Chicken</strong></td>
              <td>$45.97</td>
              <td>$20.97</td>
            </tr>
            <tr>
              <td><strong>Spinach &amp; Artichoke Dip + Classic Bacon Cheeseburger + Fiesta Lime Chicken</strong></td>
              <td>$41.47</td>
              <td>$16.47</td>
            </tr>
            <tr>
              <td><strong>Two side salads + 2 Chicken Parmesan Fettuccine</strong></td>
              <td>$41.96</td>
              <td>$16.96</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Prices are reference figures, and your restaurant sets its own. The pattern holds anywhere, though: pick the wings and the skillet and you get the most off.</p>

      <h2>Best Combo for Protein</h2>
      <p><strong>Chicken Quesadilla, Fiesta Lime Chicken and Bourbon Street Chicken &amp; Shrimp.</strong> That's 49g, 61g and 57g, or 167g of protein for two people, at 3,370 calories. The quesadilla is the highest-protein starter on the deal, and the Fiesta Lime Chicken is the highest-protein entrée on the deal that we have figures for.</p>

      <h2>Best Combo for Fewer Calories</h2>
      <p><strong>Two side salads, the California Grilled Chicken Salad and the Bourbon Street Chicken &amp; Shrimp.</strong> 320, 920 and 1,010 calories, or 2,250 in total. Swapping the appetizer for side salads is the biggest single change. The shared starters run 590 to 1,170 calories on their own.</p>
      <div class="warningBox">
        <strong>The salad trap:</strong> the Oriental Chicken Salad comes crispy at 1,560 calories, more than a Grilled Cheese Cheeseburger. Ask for it grilled and it's 900.
      </div>

      <h2>The Combo to Skip</h2>
      <p>Boneless Wings, a crispy Oriental Chicken Salad and a Grilled Cheese Cheeseburger come to 4,060 calories. That's more than two people's worth of dinner, and not because of the burger. The salad is the surprise.</p>

      <h2>2 for $25 or Something Else?</h2>
      <ul>
        <li><strong>Two people who both want a burger or chicken sandwich and no starter:</strong> two <a href="/menu/really-big-meal-deal">$9.99 Really BIG Meal Deals</a> cost $19.98 and include drinks.</li>
        <li><strong>Eating between 3:00 and 6:00 PM:</strong> <a href="/happy-hour">half price appetizers</a> can beat both, if you're happy making a meal of appetizers.</li>
        <li><strong>A family of four:</strong> the 2 for $25 plus two kids meals at $6.49 to $7.49 comes to about $38 to $40 before drinks, tax and tip.</li>
      </ul>

      <h2>To Go and Delivery</h2>
      <p>The 2 for $25 works for Carside To Go and delivery through Applebee's own app. The exception is the O-M-Cheese-adilla Burger, which is dine-in only. Delivery apps set their own prices, so order through Applebee's if you want the $25. If it's traveling, pick pasta over anything fried. More on <a href="/takeout">takeout</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>What's the best value on the Applebee's 2 for $25?</h3>
      <p>Boneless Wings with two Bourbon Street Chicken &amp; Shrimp skillets, which saves $23.97 at our reference prices.</p>

      <h3>What's the lowest calorie 2 for $25 order?</h3>
      <p>Two side salads, the California Grilled Chicken Salad and the Bourbon Street Chicken &amp; Shrimp, at 2,250 calories for two people.</p>

      <h3>What's the highest protein 2 for $25 order?</h3>
      <p>Chicken Quesadilla, Fiesta Lime Chicken and Bourbon Street Chicken &amp; Shrimp, with 167g of protein.</p>

      <h3>Can you get the 2 for $25 To Go?</h3>
      <p>Yes, through Carside To Go and delivery, except the O-M-Cheese-adilla Burger, which is dine-in only.</p>

      <h3>Is there still a 2 for $20 at Applebee's?</h3>
      <p>No. The national deal is 2 for $25 in 2026.</p>
    `,
    faqs: [
      {
        question: "What's the best value on the Applebee's 2 for $25?",
        answer: "Boneless Wings with two Bourbon Street Chicken & Shrimp skillets, which saves $23.97 at our reference prices."
      },
      {
        question: "What's the lowest calorie 2 for $25 order?",
        answer: "Two side salads, the California Grilled Chicken Salad and the Bourbon Street Chicken & Shrimp, at 2,250 calories for two people."
      },
      {
        question: "What's the highest protein 2 for $25 order?",
        answer: "Chicken Quesadilla, Fiesta Lime Chicken and Bourbon Street Chicken & Shrimp, with 167g of protein."
      },
      {
        question: "Can you get the 2 for $25 To Go?",
        answer: "Yes, through Carside To Go and delivery, except the O-M-Cheese-adilla Burger, which is dine-in only."
      },
      {
        question: "Is there still a 2 for $20 at Applebee's?",
        answer: "No. The national deal is 2 for $25 in 2026."
      }
    ],
    date: '2026-08-21T08:00:00+00:00',
    modifiedDate: '2026-09-11T09:00:00+00:00',
    author: "Menu Almanac Editors",
    authorRole: 'Editorial desk',
    authorImage: '/web-app-manifest-512x512.png',
    imageUrl: '/og/og-blog-2-for-25.webp'
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
