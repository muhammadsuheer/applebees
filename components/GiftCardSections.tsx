import styles from './ContentSections.module.css';

export function GiftCardOverview() {
  return (
    <section className={styles.section} id="gift-card-ecosystem">
      <h2>The 2026 Gift Card Ecosystem</h2>
      <p>The Applebee's gift card is one of the most widely circulated restaurant currencies in the United States. In 2026, it operates as a dual-tier financial system, consisting of both traditional physical plastic cards and instantly deliverable digital eGift cards. Whether you are purchasing a $25 card as a last-minute birthday present or placing a $50,000 corporate order for an employee incentive program, understanding the strict rules governing these cards is essential.</p>
      
      <p>This massive, 3,000-word comprehensive guide strips away the marketing language to provide the definitive manual on how to navigate the Applebee's gift card ecosystem. We will expose the hidden dangers of the "Bonus Card" trap, explain the federal laws preventing your money from expiring, and provide the exact protocols for checking your balance without falling victim to digital phishing scams.</p>
      
      <p>A gift card is treated identically to cash inside the restaurant. If you lose it, the corporation is rarely obligated to replace it. Therefore, treating these cards with the same security protocols as your debit card is the first step in maximizing your off-premise or dine-in value.</p>
    </section>
  );
}

export function CheckingBalance() {
  return (
    <section className={styles.section} id="checking-balance">
      <h2>Checking Your Balance Safely</h2>
      <p>The most common action performed by an Applebee's gift card holder is checking the remaining balance. Unfortunately, this simple action is heavily targeted by digital scammers in 2026.</p>
      
      <h3>The Phishing Threat</h3>
      <p>If you type "Check Applebee's Gift Card Balance" into a search engine, you will likely encounter sponsored ads leading to fraudulent, third-party websites. These websites will prompt you to enter your 19-digit card number and your 4-digit security PIN. The moment you submit this data, an automated script instantly drains the funds from your card and transfers them to a digital wallet. Applebee's will not refund stolen balances in these scenarios.</p>
      
      <h3>The Official Protocols</h3>
      <p>There are only three secure methods to check your balance:</p>
      <ul>
        <li><strong>Online via the Official Portal:</strong> You must navigate explicitly to <em>www.applebees.com/en/gift-cards</em>. Do not trust any URL that does not exactly match the official corporate domain.</li>
        <li><strong>The 1-800 Number:</strong> The safest method is to call the automated corporate balance hotline at <strong>1-800-252-6722</strong>. You will be prompted to punch in your card number on your phone's keypad.</li>
        <li><strong>In-Store POS Audit:</strong> Any bartender or host at a physical Applebee's location can swipe your card at their Point of Sale (POS) terminal and print a receipt detailing your exact remaining funds.</li>
      </ul>
    </section>
  );
}

export function BonusCardTrap() {
  return (
    <section className={styles.section} id="bonus-card-trap">
      <h2>The "Bonus Card" Trap (Expiration Laws)</h2>
      <p>Every holiday season (typically spanning from late November through December), Applebee's runs a massive, nationally televised promotion: <em>Buy a $50 Gift Card, Get a $10 Bonus Card</em>. This promotion generates tens of millions of dollars in revenue, but it is also the source of immense consumer frustration at the host stand.</p>
      
      <h3>The Legal Distinction</h3>
      <p>You must understand the strict legal difference between a "Gift Card" and a "Bonus Card." Under the federal Credit CARD Act of 2009, a purchased gift card (the $50 card you actually paid for) cannot expire for at least five years, and Applebee's corporate policy dictates that they <strong>never expire</strong> and are never subject to dormancy fees.</p>
      
      <p>However, the $10 "Bonus Card" is legally classified as a promotional coupon, not cash. Because you did not purchase it, federal expiration laws do not apply. These Bonus Cards have incredibly strict expiration dates, often expiring just six to eight weeks after the holiday promotion ends (typically around late February or early March).</p>
      
      <h3>The Host Stand Confrontation</h3>
      <p>If you attempt to use a $10 Bonus Card in April, the POS system will aggressively reject it. The manager cannot override this rejection because the promotional code has been purged from the corporate servers. To avoid this trap, you must immediately spend your Bonus Cards in January and save the actual Gift Cards for later in the year.</p>
    </section>
  );
}

export function CorporateBulk() {
  return (
    <section className={styles.section} id="corporate-bulk">
      <h2>Corporate Bulk Ordering (B2B Incentives)</h2>
      <p>Applebee's operates a massive B2B (Business-to-Business) gift card division designed to service Fortune 500 companies, massive school districts, and national charities. If you are an office manager looking to buy 500 gift cards for a company holiday party, you should never buy them at retail price.</p>
      
      <h3>The Volume Discount Tiers</h3>
      <p>Through the official Applebee's corporate portal (or verified third-party partners like eGifter Rewards or PerfectGift), bulk buyers unlock significant financial discounts. While exact percentages fluctuate based on quarterly promotions, typical 2026 discount tiers look like this:</p>
      <ul>
        <li><strong>$1,000 to $4,999:</strong> Typically unlocks a 5% to 8% discount.</li>
        <li><strong>$5,000 to $9,999:</strong> Typically unlocks a 10% discount.</li>
        <li><strong>$10,000+:</strong> Often requires signing a direct corporate contract, but can yield discounts upwards of 15%.</li>
      </ul>
      
      <h3>Custom Branding</h3>
      <p>For large corporate orders, Applebee's allows organizations to co-brand the physical plastic or the digital eGift email template. You can print your company's logo next to the Applebee's logo, turning a generic restaurant gift card into a highly customized corporate incentive reward.</p>
    </section>
  );
}

export function CrossBranding() {
  return (
    <section className={styles.section} id="cross-branding">
      <h2>Cross-Branding: The IHOP Question</h2>
      <p>Because Applebee's is owned by Dine Brands Global, which also owns the massive breakfast chain IHOP, diners frequently assume the currencies are interchangeable. The reality is heavily dependent on the type of card you possess.</p>
      
      <h3>Single-Brand Cards</h3>
      <p>If you possess a standard plastic card that only features the Applebee's logo, it is entirely locked to the Applebee's POS system. If you attempt to hand an Applebee's gift card to an IHOP cashier, the magnetic stripe will return an "Invalid Card Type" error. The backend accounting systems for the two brands remain separate for single-brand cards.</p>
      
      <h3>The Dine Brands "Combo Card"</h3>
      <p>In recent years, to accommodate the rise of dual-branded restaurant locations, Dine Brands began issuing multi-brand gift cards. If your physical card features both the Applebee's and IHOP logos printed on the front plastic, the funds are held in a centralized corporate account. This specific card can be used seamlessly at either restaurant chain, providing ultimate dining flexibility.</p>
    </section>
  );
}

export function ThirdPartyRetailers() {
  return (
    <section className={styles.section} id="third-party">
      <h2>Third-Party Retailers: Costco, Walmart, and Grocery Stores</h2>
      <p>You do not need to walk into a physical Applebee's to purchase a gift card. In fact, purchasing them outside of the restaurant is often a vastly superior financial strategy.</p>
      
      <h3>The Wholesale Club Arbitrage (Costco & Sam's Club)</h3>
      <p>The absolute best place to buy an Applebee's gift card is a wholesale warehouse club. Costco and Sam's Club routinely sell multi-packs of Applebee's gift cards at an aggressive 20% discount. For example, you can frequently purchase a bundle of four $25 gift cards ($100 total value) for exactly $79.99. If you are a frequent Applebee's diner, failing to utilize this wholesale arbitrage is equivalent to throwing a 20% tip in the trash.</p>
      
      <h3>Grocery Store Fuel Points</h3>
      <p>If you lack a Costco membership, purchasing Applebee's cards at your local grocery store (like Kroger, Safeway, or Publix) is the next best strategy. While you will pay face value for the card ($50 for a $50 card), grocery chains frequently offer "4x Fuel Points" promotions on third-party gift cards. You can leverage the purchase of an Applebee's dinner into massive discounts at the gasoline pump.</p>
    </section>
  );
}

export function LostStolen() {
  return (
    <section className={styles.section} id="lost-stolen">
      <h2>Lost or Stolen Cards (Security Protocols)</h2>
      <p>A gift card is an unregistered bearer instrument. If you drop a $100 Applebee's gift card in the parking lot and someone else finds it, they can immediately walk inside and order three Bourbon Street Steaks. By default, your money is gone.</p>
      
      <h3>The Receipt Is Your Only Hope</h3>
      <p>Applebee's corporate policy explicitly states they are not responsible for lost or stolen cards. However, there is a narrow window for recovery if you retained the original activation receipt. The activation receipt contains the card's serial number (distinct from the 19-digit spending number).</p>
      <p>If you realize the card is stolen, you must immediately call 1-800-252-6722. If you can provide the exact serial number from the receipt, the corporate office can freeze the card. If the thief has not already spent the funds, Applebee's will transfer the remaining balance to a newly issued card and mail it to you.</p>
    </section>
  );
}

export function DigitalWallet() {
  return (
    <section className={styles.section} id="digital-wallet">
      <h2>Digital Wallet Integration (Apple Wallet & Google Pay)</h2>
      <p>To mitigate the risk of physical loss, the 2026 standard dictates that all plastic cards should be immediately digitized. Applebee's eGift cards feature seamless integration with both Apple Wallet and Google Pay.</p>
      
      <p>When you purchase an eGift card online, the confirmation email will contain an "Add to Wallet" button. Tapping this button injects a dynamic digital card directly into your phone. When it is time to pay your bill at the restaurant, you simply present the digital barcode on your screen to the server, who will scan it with their handheld POS tablet. This ensures you never leave a physical plastic card sitting on a sticky dining room table.</p>
    </section>
  );
}

export function GiftCardFAQ() {
  const faqData = [
    { question: "Do Applebee's gift cards expire?", answer: "No. Standard Applebee's gift cards never expire and are not subject to any dormancy or maintenance fees. However, promotional 'Bonus Cards' usually expire within 6 to 8 weeks." },
    { question: "How do I check my Applebee's gift card balance?", answer: "You can check your balance safely by calling 1-800-252-6722, visiting the official Applebee's website at applebees.com, or asking a server to swipe the card at any physical Applebee's location." },
    { question: "Can I use an Applebee's gift card to buy alcohol?", answer: "Yes. Unless specifically restricted by a hyper-local state law or a specific corporate B2B contract, standard Applebee's gift cards can be applied to your entire check, including alcohol, taxes, and tips." },
    { question: "Can I use my Applebee's gift card on DoorDash or UberEats?", answer: "No. Third-party delivery apps like DoorDash and UberEats do not possess the API integration required to process Applebee's gift cards. You can only use the gift card for delivery if you order directly through the official Applebee's App or website." },
    { question: "Will Applebee's replace a lost gift card?", answer: "Only if you have the original purchase receipt containing the card's serial number. If you have the receipt, you can call 1-800-252-6722 to freeze the card and have the remaining balance reissued." }
  ];

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
      <h2>Frequently Asked Questions: Gift Cards</h2>
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
