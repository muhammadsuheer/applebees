import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import AllergenMatrix from '@/components/AllergenMatrix';
import { SITE_NAME, SITE_URL, BYLINE, MENU_FACTS, PRICES_LAST_VERIFIED } from '@/data/site';
import { formatLongDate, formatMonthYear } from '@/lib/dates';
import styles from './page.module.css';

// Every number in this file is computed from data/nutrition.ts (30 items).
// Re-run the counts if that file changes. Don't add claims about fryers, oils or
// prep practices without a source from Applebee's itself.

const checkedMonth = formatMonthYear(PRICES_LAST_VERIFIED);
export const metadata: Metadata = {
  title: "Applebee's Allergen Menu: Gluten, Dairy, Soy & Nuts (2026)",
  description:
    "Applebee's allergen menu as a filterable table. Hide milk, eggs, wheat, soy, fish, shellfish or tree nuts and see what's left to order, plus the few dishes that carry none of them.",
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
      "No. There's no separate gluten-free menu and no gluten-free kitchen. A handful of dishes have no wheat in the standard recipe, but that isn't the same as safe for celiac disease, because the kitchen is shared.",
  },
  {
    question: "What can I eat at Applebee's with a dairy allergy?",
    answer:
      'Not much. Milk turns up in most dishes, including both Top Sirloin steaks. The easiest dairy-free picks are the House Salad with fat free Italian, Steamed Broccoli and Garlicky Green Beans, and you can filter milk in the table to see the rest.',
  },
  {
    question: "Which Applebee's items have no allergens at all?",
    answer:
      "Only a few, and they're all sides: the House Salad with fat free Italian dressing, Steamed Broccoli and Garlicky Green Beans. None of them is an entrée.",
  },
  {
    question: "Is soy in everything at Applebee's?",
    answer:
      'Nearly. Soy is in almost everything, including the Classic Fries and the Blackened Cajun Salmon. Filter it out in the table and only a short list remains.',
  },
  {
    question: "Does Applebee's have nut-free and shellfish-free options?",
    answer:
      'Yes, most of the menu. Tree nuts mostly come from the almonds on a few salads, and shellfish means the shrimp dishes, like the Bourbon Street Chicken & Shrimp and Double Crunch Shrimp. Tell your server anyway, since every item comes out of the same kitchen.',
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
          By {BYLINE} &middot; updated{' '}
          <time dateTime={PRICES_LAST_VERIFIED}>{formatLongDate(PRICES_LAST_VERIFIED)}</time>
        </p>

        <div className={styles.answer}>
          <p>
            Applebee&apos;s doesn&apos;t have a gluten-free kitchen or a separate allergen menu. If you&apos;re
            avoiding the major allergens, the simplest orders are the House Salad with fat free Italian,
            Steamed Broccoli and Garlicky Green Beans. Soy, milk and wheat turn up in most other dishes,
            so check the table below before you order.
          </p>
        </div>

        <AllergenMatrix />

        <h2>Celiac Disease: Why Careful Ordering Isn&apos;t Enough</h2>
        <p>
          That&apos;s the unpopular answer, so here&apos;s the reasoning. A good handful of
          items have no wheat in the standard recipe, and both Top Sirloin steaks are flagged as
          gluten-free options. On paper, that looks like plenty.
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

        <h2>Soy Is the Hard One</h2>
        <p>
          People show up worried about gluten. Soy is what actually narrows the menu. It&apos;s
          in almost everything, including places you wouldn&apos;t think to look, like the Classic
          Fries and the Blackened Cajun Salmon. Hide soy in the table above and you&apos;re left with
          a short list, mostly vegetables.
        </p>

        <h2>Dairy and Eggs</h2>
        <p>
          Milk is in most dishes too. Both Top Sirloin steaks carry it, which surprises anyone who
          assumes a plain steak is dairy-free. Eggs are much easier to avoid, since they mostly turn
          up in the breaded items.
        </p>

        <h2>Nuts and Shellfish</h2>
        <p>
          These are the easiest two to avoid. Tree nuts mostly come from the almonds on salads like the
          Oriental Chicken Salad. Shellfish means shrimp: the Bourbon Street Chicken &amp; Shrimp, the
          Double Crunch Shrimp and the Tex-Mex Shrimp Bowl.
        </p>

        <h2>What This Table Covers</h2>
        <p>
          Only the dishes Applebee&apos;s publishes full allergen details for. If we can&apos;t check an
          item, it stays out, because an allergen table with guesses in it is worse than a short one.
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
