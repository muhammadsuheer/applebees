import Link from 'next/link';
import styles from './FAQSection.module.css';

const faqData = [
  {
    question: "What is on the Applebee's 2 for $25 menu?",
    answer: "The Applebee's 2 for $25 menu includes one full-size appetizer to share and two full-size entrées. Appetizer choices typically include Mozzarella Sticks, Spinach & Artichoke Dip, or Boneless Wings. Entrée options usually feature the Classic Bacon Cheeseburger, Fiesta Lime Chicken, or an 8 oz. Top Sirloin, though selections and prices vary by location."
  },
  {
    question: "What time are Applebee's half price apps?",
    answer: "Applebee's half price apps typically run during Late Night Happy Hour, which starts at 9:00 PM and lasts until closing time every day. Many locations also offer an afternoon Happy Hour from 3:00 PM to 6:00 PM. Contact your local restaurant to confirm their specific hours."
  },
  {
    question: "How many calories are in Applebee's Quesadilla Burger?",
    answer: "The Applebee's Quesadilla Burger contains 1,620 calories. It is one of the more indulgent items on the handcrafted burgers menu, featuring an all-beef patty, Pepper Jack cheese, Mexi-ranch, bacon, and pico de gallo inside a quesadilla-style tortilla."
  },
  {
    question: "Is Applebee's open on Christmas Day?",
    answer: "Most Applebee's locations are closed on Christmas Day to allow staff to spend time with their families. However, they are typically open on Christmas Eve, Thanksgiving, and other major holidays with adjusted hours. Always verify holiday hours with your nearest location."
  },
  {
    question: "Does Applebee's have a senior discount?",
    answer: "Applebee's does not have a company-wide senior discount policy. Some individual franchise locations may offer a percentage off (often 10% to 15%) to guests aged 60 or older, but you must ask your server before ordering."
  },
  {
    question: "Can I get Applebee's delivery without third-party fees?",
    answer: "Yes, you can order direct delivery through the official Applebee's app or website. While a delivery fee may still apply, direct ordering generally offers standard menu prices and avoids the additional service markups common on third-party delivery apps."
  },
  {
    question: "What is the All You Can Eat special at Applebee's?",
    answer: "The All You Can Eat special is a recurring limited-time promotion featuring unlimited refills on select items, commonly Boneless Wings, Riblets, and Shrimp, served with endless fries. The deal usually costs around $14.99, though pricing varies by market."
  },
  {
    question: "Does Applebee's offer gluten-free menu items?",
    answer: "Applebee's offers several items made without gluten-containing ingredients, such as certain steaks, salads, and sides. However, because kitchens prepare items in shared fryers and prep areas, cross-contamination is highly likely. It is not recommended for diners with celiac disease."
  },
  {
    question: "What time does Applebee's open and close?",
    answer: "Most Applebee's restaurants open daily at 11:00 AM for lunch service. Standard closing times are typically 11:00 PM or midnight from Sunday through Thursday, with extended late-night hours until 1:00 AM or 2:00 AM on Fridays and Saturdays."
  },
  {
    question: "What is the Dollarita at Applebee's?",
    answer: "The Dollarita is a promotional $1 house margarita that Applebee's brings back for limited-time seasonal campaigns. It is not available year-round. When active, it is served in a 10 oz mug and can be ordered during regular dining or Happy Hour."
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
      <h2>Applebee's Menu FAQs</h2>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <article key={index} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
