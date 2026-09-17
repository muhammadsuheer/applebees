import styles from './FAQSection.module.css';

type Faq = { question: string; answer: string };

// Homepage FAQ. Dated facts checked September 2026: O-M-Cheese-adilla Burger launch
// (Aug 31, 2026), Spooky Sips end date (Nov 15, 2026), All You Can Eat price ($15.99,
// summer 2026), Dine Brands Q2 2026 restaurant count. Re-check each season.

const defaultFaqs: Faq[] = [
  {
    question: "What's on the Applebee's 2 for $25 menu right now?",
    answer:
      "One appetizer and two entrées for $25. Since August 31, 2026, the new O-M-Cheese-adilla Burger is one of the entrée choices, and it's dine-in only. Other entrées on the deal include the Grilled Cheese Cheeseburger, Chicken Parmesan Fettuccine and California Grilled Chicken Salad. Each franchise picks its own line-up.",
  },
  {
    question: "What time is Applebee's happy hour?",
    answer:
      "3:00 to 6:00 PM, and again from 9:00 PM to close. Half price appetizers run in both windows, dine-in only. Mozzarella Sticks come to $5.00 and a Chicken Quesadilla to $6.00.",
  },
  {
    question: "How much is Applebee's Really BIG Meal Deal?",
    answer:
      "$9.99. You get one entrée, classic fries and a fountain drink. The three entrées are the Big Cluckin' Chicken Sandwich, the BIG Classic Bacon Cheeseburger and the Big Bangin' Burger.",
  },
  {
    question: "Is Applebee's All You Can Eat back?",
    answer:
      "It came back for summer 2026 at $15.99: unlimited Boneless Wings, Riblets and Double Crunch Shrimp with endless fries, dine-in only. It's a limited-time deal, so call your restaurant before you go.",
  },
  {
    question: 'What is the O-M-Cheese-adilla Burger?',
    answer:
      "It's the Quesadilla Burger, with bacon and Pepper Jack, served sizzling in a skillet of molten queso and melted Cheddar, with tortilla chips, pico and cilantro. Applebee's launched it on August 31, 2026 as part of the 2 for $25.",
  },
  {
    question: "What's the highest calorie item at Applebee's?",
    answer:
      "The Classic Combo appetizer platter, at 2,200 calories. It's heavier than any entrée. The heaviest burger is the Quesadilla Burger at 1,620.",
  },
  {
    question: "Does Applebee's still have the $1 Dollarita?",
    answer:
      "Not right now. It ran in July 2026 and ended July 31. Through November 15, 2026, the featured cocktails are the $6 Spooky Sips, and there's a $4 Tropical Spell Mocktail.",
  },
  {
    question: "Does Applebee's have a gluten-free menu?",
    answer:
      "No. There's no separate gluten-free menu and no gluten-free kitchen. A handful of dishes have no wheat in the standard recipe, but shared grills and fryers mean none of them are safe for celiac disease.",
  },
  {
    question: "Are Applebee's prices the same at every location?",
    answer:
      "No. Most Applebee's are run by local franchise owners, and each one sets its own prices. Treat any published price, including ours, as a close guide.",
  },
  {
    question: "Is Applebee's cheaper on DoorDash or the Applebee's app?",
    answer:
      "The Applebee's app. DoorDash and Uber Eats set their own menu prices and add fees, while Carside To Go through the app charges restaurant prices with no delivery fee.",
  },
];

type Props = {
  faqs?: Faq[];
  title?: string;
  /** Pages that already emit FAQPage inside their own @graph pass false. */
  emitSchema?: boolean;
};

export default function FAQSection({
  faqs,
  title = "Applebee's Menu FAQs",
  emitSchema,
}: Props = {}) {
  const faqData = faqs ?? defaultFaqs;
  const shouldEmitSchema = emitSchema ?? faqs === undefined;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className={styles.section} id="faq">
      {shouldEmitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <h2>{title}</h2>
      <div className={styles.faqList}>
        {faqData.map((faq) => (
          <article key={faq.question} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
