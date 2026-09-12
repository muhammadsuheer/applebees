import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import AllergenMatrix from '@/components/AllergenMatrix';
import { SITE_NAME, SITE_URL, BYLINE, MENU_FACTS, PRICES_LAST_VERIFIED } from '@/data/site';
import styles from './page.module.css';

// Every number in this file is computed from data/nutrition.ts (30 items).
// Re-run the counts if that file changes. Don't add claims about fryers, oils or
// prep practices without a source from Applebee's itself.

const checkedDay = new Date(PRICES_LAST_VERIFIED).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const checkedMonth = new Date(PRICES_LAST_VERIFIED).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
});

export const metadata: Metadata = {
  title: "Applebee's Allergen Menu: Gluten, Dairy, Soy & Nuts (2026)",
  description:
    "Applebee's allergen menu as a filterable table. Hide milk, eggs, wheat, soy, fish, shellfish or tree nuts across 30 items. Only three dishes carry none of the seven.",
  alternates: { canonical: `${SITE_URL}/allergen-menu` },
  openGraph: {
    siteName: SITE_NAME,
    images: [{ url: '/og/og-home.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: { card: 'summary_large_image', images: ['/og/og-home.webp'] },
};

const faqData = [
  {
    question: "Does Applebee's have a gluten-free menu?",
    answer:
      "No. There's no separate gluten-free menu and no gluten-free kitchen. Of the 30 items we track, 11 have no wheat in the standard build. That isn't the same as safe for celiac disease, because the kitchen is shared.",
  },
  {
    question: "What can I eat at Applebee's with a dairy allergy?",
    answer:
      'Very little. Milk is in 24 of the 30 items we track, including both Top Sirloin steaks. The dairy-free options are the House Salad with fat free Italian (160 calories), Steamed Broccoli (100) and Garlicky Green Beans (150), plus three more you can find by filtering milk in the table.',
  },
  {
    question: "Which Applebee's items have no allergens at all?",
    answer:
      "Three of the 30 we track: House Salad with fat free Italian dressing, Steamed Broccoli, and Garlicky Green Beans. None of them is an entrée.",
  },
  {
    question: "Is soy in everything at Applebee's?",
    answer:
      'Nearly. Soy is in 25 of 30 items, including the Classic Fries side and the Blackened Cajun Salmon. Filter it out and five items remain.',
  },
  {
    question: "Does Applebee's have nut-free and shellfish-free options?",
    answer:
      'Yes, most of the menu. Tree nuts appear in one of the 30 items we track, and shellfish only in the Bourbon Street Chicken & Shrimp. Tell your server anyway, since every item comes out of the same kitchen.',
  },
  {
    question: 'How accurate is this allergen table?',
    answer: `It reflects the standard build of each item in Applebee's published nutrition information, last checked in ${checkedMonth}. Franchises change suppliers and recipes, so confirm with the kitchen before you order.`,
  },
];

export default function AllergenMenuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}/allergen-menu#article`,
        headline: "Applebee's Allergen Menu: Gluten, Dairy, Soy and Nuts",
        description:
          "A filterable allergen table for 30 Applebee's items covering the seven major allergens.",
        dateModified: PRICES_LAST_VERIFIED,
        inLanguage: 'en-US',
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: `${SITE_URL}/allergen-menu`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Allergen Menu', item: `${SITE_URL}/allergen-menu` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Allergen Menu', href: '/allergen-menu' }]} />

      <article className={styles.page}>
        <h1>Applebee&apos;s Allergen Menu</h1>

        <p className={styles.byline}>
          By {BYLINE} &middot; updated {checkedDay}
        </p>

        <div className={styles.answer}>
          <p>
            Applebee&apos;s has no gluten-free kitchen and no separate allergen menu. Of the{' '}
            {MENU_FACTS.allergenItems} items we track, three carry none of the seven major
            allergens: the House Salad with fat free Italian, Steamed Broccoli and Garlicky
            Green Beans. Soy is in 25. Milk is in 24. Wheat is in 19.
          </p>
        </div>

        <AllergenMatrix />

        <h2>With celiac disease, eat somewhere else</h2>
        <p>
          That&apos;s the unpopular answer, so here&apos;s the reasoning. Eleven of the 30
          items have no wheat in the standard build, and the 6 oz. and 8 oz. Top Sirloin are
          flagged as gluten-free options. On a table, that looks like plenty.
        </p>
        <p>
          It isn&apos;t. &quot;No wheat in the recipe&quot; and &quot;safe for celiac
          disease&quot; are two separate claims, and this data only supports the first one.
          In any shared kitchen a grill, a pair of tongs or a fryer basket is enough to undo
          a wheat-free recipe, and Applebee&apos;s kitchens are shared. For a mild
          intolerance, the 8 oz. Top Sirloin with Steamed Broccoli is a sound order at 930
          calories combined. For a reaction that costs you two days, no amount of careful
          ordering fixes the kitchen.
        </p>
        <p>Tell the server why, not only what.</p>

        <h2>Soy is the hard one</h2>
        <p>
          People show up worried about gluten. Soy is what actually narrows the menu: it&apos;s
          in 25 of 30 items, and it turns up where you wouldn&apos;t look for it, including
          the Classic Fries side and the Blackened Cajun Salmon. Hide soy in the table above
          and five items survive. Most of them are vegetables.
        </p>

        <h2>Dairy and eggs</h2>
        <p>
          Milk is in 24 of 30. Both Top Sirloin steaks carry it, which catches out anyone who
          assumes a plain steak is dairy-free. Eggs are far easier, at five items, mostly the
          breaded ones.
        </p>

        <h2>Nuts and shellfish</h2>
        <p>
          Tree nuts show up in one item. Shellfish shows up only in the Bourbon Street
          Chicken &amp; Shrimp. Of the seven allergens, these are the two Applebee&apos;s
          menu barely uses.
        </p>

        <h2>What this table covers</h2>
        <p>
          Thirty items, not all {MENU_FACTS.items}. Rows we can&apos;t check against
          published data stay out, because an allergen table with guesses in it&apos;s worse than
          a short one.
        </p>
        <p>
          A franchise can also swap a bun or a dressing supplier without announcing it, and
          that changes the columns for that one restaurant. Use this to plan the conversation
          with your server. If a row is wrong, <Link href="/contact-us">tell us</Link>.
        </p>

        <p className={styles.related}>
          Related: <Link href="/nutrition">calories and nutrition facts</Link>,{' '}
          <Link href="/menu">the full menu with prices</Link>, and{' '}
          <Link href="/menu/salads">the salads breakdown</Link>, where most restricted orders
          end up.
        </p>
      </article>

      <FAQSection faqs={faqData} title="Applebee's Allergen FAQs" />
      <Footer />
    </main>
  );
}
