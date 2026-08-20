import styles from './FAQSection.module.css';

const faqData = [
  {
    question: "What time does Applebee's close?",
    answer: "Most Applebee's locations close at 11:00 PM on weekdays and midnight on weekends. However, operating hours can vary by location and on holidays. Always check with your local restaurant."
  },
  {
    question: "Are there any Applebee's specials today?",
    answer: "Applebee's offers daily specials, including our famous 2 for $25 menu, half-price appetizers during Late Night Happy Hour, and seasonal drink specials like the $5 Mucho Cocktails."
  },
  {
    question: "Does Applebee's serve breakfast?",
    answer: "Typically, Applebee's does not serve a dedicated breakfast menu. Most locations open at 11:00 AM for lunch and dinner service."
  },
  {
    question: "Is Applebee's menu healthy?",
    answer: "Applebee's provides a variety of menu options to accommodate different dietary needs, including high-protein and lower-calorie choices like the Blackened Cajun Salmon and Grilled Chicken Caesar Salad."
  }
];

export default function FAQSection() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={styles.section} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq, index) => (
          <article key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
