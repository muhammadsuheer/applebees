export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;       // Published date
  modifiedDate: string; // Last updated date for SEO freshness
  author: string;
  authorRole: string; // E-E-A-T Authority
  authorImage: string; // E-E-A-T Authority
  imageUrl: string;   // High-res image for Discover
}

export const blogs: BlogPost[] = [
  {
    slug: 'legendary-dollarita-monthly-drink-specials',
    title: 'The Legendary Dollarita: Applebee\'s Best Drink Deals Explained',
    excerpt: 'Discover the history of Applebee\'s famous $1 margaritas, how to track their Neighborhood Drink of the Month, and tips for ordering.',
    content: `
      <h2>The Birth of the Dollarita</h2>
      <p>In the world of casual dining, few promotions have achieved the legendary, viral status of the Applebee's <strong>Dollarita</strong>. Introduced as a way to celebrate Neighborhood Appreciation Month, this $1 margarita deal essentially broke the internet and resulted in lines out the door at locations nationwide.</p>
      
      <h2>What Exactly is in a Dollarita?</h2>
      <p>While the recipe can vary slightly depending on the franchise and the specific promotion period, a standard Dollarita is a 10-ounce drink poured over ice. It typically consists of:</p>
      <ul>
        <li>Tequila (usually a well brand)</li>
        <li>Triple Sec or a similar orange liqueur substitute</li>
        <li>Applebee's signature sweet and sour margarita mix</li>
      </ul>
      <p>Yes, at $1, it's not a top-shelf craft cocktail, but it offers undeniable value and has become a beloved staple for budget-friendly nights out.</p>

      <h2>The Neighborhood Drink of the Month</h2>
      <p>The overwhelming success of the Dollarita paved the way for Applebee's <em>Neighborhood Drink of the Month</em> program. Over the years, they have offered incredible rotating specials, including:</p>
      <ul>
        <li><strong>The DOLLARMAMATM:</strong> A $1 Bahama Mama tropical cocktail.</li>
        <li><strong>$2 Absolut Vodka Lemonades:</strong> Perfect for the summer months.</li>
        <li><strong>$3 Mucho Margaritas:</strong> Premium, oversized margaritas served in their signature Mucho glasses during holidays like Halloween and Cinco de Mayo.</li>
      </ul>

      <h2>When is the Dollarita Coming Back?</h2>
      <p>Applebee's rarely announces the return of the Dollarita more than a few weeks in advance. Historically, it tends to make a comeback during the month of October or right around Cinco de Mayo (May). The best way to know is to follow their official social media channels or sign up for their email club.</p>

      <h2>Pro Tips for Your Next Visit</h2>
      <p>When you visit during a Dollarita promotion, be prepared for a packed bar area. We recommend grabbing a booth and pairing your cheap drinks with the <strong>Half-Price Appetizers</strong> (usually starting at 9 PM or 10 PM) for the ultimate budget-friendly feast.</p>
    `,
    date: '2026-08-18T08:00:00+00:00', // ISO format for schema
    modifiedDate: '2026-08-18T10:30:00+00:00',
    author: 'Sarah Jenkins',
    authorRole: 'Food & Beverage Editor',
    authorImage: '/images/author-sarah.webp',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200' 
  },
  {
    slug: 'applebees-secret-menu-hacks-revealed',
    title: 'Applebee\'s Secret Menu: Myths, Reality & Best Hacks',
    excerpt: 'Does Applebee\'s really have a secret menu? We uncover the best off-menu hacks and customizations you can order today.',
    content: `
      <h2>The Truth About the Secret Menu</h2>
      <p>If you've spent any time on TikTok or Reddit, you've probably heard wild rumors about an Applebee's "Secret Menu". While Applebee's doesn't have an official, printed secret menu like In-N-Out, their kitchens are incredibly flexible, and savvy diners have created some unbelievable hacks.</p>
      
      <h2>Hack #1: The Loaded Chicken Bacon Ranch Fries</h2>
      <p>Applebee's has all the ingredients for this masterpiece, but it's not on the menu. Simply order a basket of fries, ask for melted cheddar cheese, chopped bacon, and diced grilled chicken on top. Request a side of house-made ranch for drizzling. It's the ultimate appetizer.</p>

      <h2>Hack #2: The Spicy Buffalo Burger</h2>
      <p>Want a burger with a kick? Order a classic Cheeseburger but ask the kitchen to toss the burger patty in their signature Classic Hot Buffalo wing sauce before adding the cheese. It elevates the entire meal.</p>

      <h2>Hack #3: Adult Mac & Cheese</h2>
      <p>Order the Four-Cheese Mac & Cheese with Honey Pepper Chicken Tenders, but ask to substitute the tenders for blackened cajun salmon or grilled shrimp. It completely transforms the dish into a premium seafood pasta.</p>

      <h2>How to Order Without Annoying the Staff</h2>
      <p>The golden rule of ordering secret menu hacks: <strong>Be polite and visit during off-peak hours.</strong> If the restaurant is slammed on a Friday night, the kitchen won't have time to accommodate complex custom requests. Stick to simple ingredient swaps during busy times.</p>
    `,
    date: '2026-08-12T08:00:00+00:00',
    modifiedDate: '2026-08-13T10:30:00+00:00',
    author: 'Sarah Jenkins',
    authorRole: 'Food & Beverage Editor',
    authorImage: '/images/author-sarah.webp',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200'
  },
  {
    slug: 'gluten-free-guide-applebees-menu',
    title: 'The Ultimate Gluten-Free Guide to Applebee\'s',
    excerpt: 'Eating gluten-free at a major chain can be stressful. Here is exactly what you can safely order at Applebee\'s.',
    content: `
      <h2>Navigating the Menu with a Gluten Allergy</h2>
      <p>Dining out with a gluten intolerance or Celiac disease requires careful planning. While Applebee's states that they cannot guarantee a 100% gluten-free environment due to cross-contamination in their shared kitchens, they do offer a surprisingly robust list of menu items made without gluten-containing ingredients.</p>
      
      <h2>Top Gluten-Free Entrées</h2>
      <p>If you're looking for a hearty, safe meal, these are your best bets:</p>
      <ul>
        <li><strong>6 oz. or 8 oz. Top Sirloin:</strong> Perfectly seasoned and grilled. Order it with garlic mashed potatoes and steamed broccoli.</li>
        <li><strong>Grilled Chicken Breast:</strong> A lean, safe option that pairs well with their house salad (no croutons).</li>
        <li><strong>Riblets & Baby Back Ribs:</strong> Interestingly, many of Applebee's signature BBQ sauces, including the Honey BBQ, are made without gluten ingredients.</li>
      </ul>

      <h2>What to Avoid at All Costs</h2>
      <p>Obviously, avoid anything breaded or fried (like the Boneless Wings or Chicken Tenders). However, be aware of hidden gluten. Many soups and gravies use flour as a thickener. Additionally, the French Fries are cooked in shared fryers, making them unsafe for highly sensitive individuals.</p>

      <h2>Communication is Key</h2>
      <p>When you arrive, immediately inform your server about your dietary restrictions. Many Applebee's locations have dedicated allergy protocols and can take extra precautions when preparing your meal to minimize cross-contamination.</p>
    `,
    date: '2026-08-05T08:00:00+00:00',
    modifiedDate: '2026-08-06T10:30:00+00:00',
    author: 'Sarah Jenkins',
    authorRole: 'Food & Beverage Editor',
    authorImage: '/images/author-sarah.webp',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200'
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
