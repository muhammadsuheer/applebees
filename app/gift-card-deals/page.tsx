import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Applebee's Gift Card Balance: How to Check It Safely",
  description: "Check your Applebee's gift card balance online, by phone or in-restaurant. Plus expiry rules, where cards work, and the scams Applebee's warns about.",
  alternates: {
    canonical: 'https://applebees-menus.us/gift-card-deals',
  }
};

const faqData = [
  {
    question: "How do I check my Applebee's gift card balance?",
    answer: "Three ways: use the balance link on Applebee's official gift card page, call 1-800-252-6722, or ask staff at any Applebee's to run the card at the till. You will need the card number and PIN for the online option."
  },
  {
    question: "Do Applebee's gift cards expire?",
    answer: "No. They never expire and do not decrease in value, with no dormancy or maintenance fees. Promotional bonus cards received during holiday offers are separate and do carry expiry dates."
  },
  {
    question: "Can I use an Applebee's gift card on DoorDash or Uber Eats?",
    answer: "No. Applebee's states that delivery service providers do not accept its gift cards. To pay by gift card for food at home, order through applebees.com or the Applebee's app."
  },
  {
    question: "Can I reload an Applebee's gift card?",
    answer: "No. Applebee's gift cards are not reloadable. Once the balance is spent, you would need a new card."
  },
  {
    question: "Can I buy a gift card using a gift card?",
    answer: "No. Applebee's gift cards are not redeemable for other gift cards."
  },
  {
    question: "Will Applebee's replace a lost gift card?",
    answer: "Call 1-800-252-6722 with the card number or the purchase receipt. Applebee's advises protecting gift cards as you would cash, since anyone holding the card can spend it."
  },
  {
    question: "Can I use my Applebee's gift card in Canada?",
    answer: "Yes. Cards purchased in the US or Canada are accepted in both, including cross-currency redemption between the two countries."
  },
  {
    question: "Is the Applebee's Meal Pass Card real?",
    answer: "No. Applebee's does not have a Meal Pass programme. Any card sold as an \"Applebee's Meal Pass Card\" is not issued by Applebee's and cannot be redeemed at any location."
  },
  {
    question: "Can I buy an Applebee's gift card over the phone?",
    answer: "No. Applebee's does not accept gift card orders by phone for security reasons. Cards can be bought in-restaurant or through the official website."
  },
  {
    question: "How long does a physical gift card take to arrive?",
    answer: "Orders process and ship within two days, with delivery speeds from standard mail to overnight. Cards sent by UPS cannot be delivered to a PO Box."
  },
  {
    question: "Someone asked me to pay them with Applebee's gift cards. Is that legitimate?",
    answer: "No. Applebee's gift cards can only be spent at Applebee's. No government body, utility, hospital or debt collector accepts them. Any such request is a scam — report it at reportfraud.ftc.gov."
  }
];

export default function GiftCardPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://applebees-menus.us/gift-card-deals/#webpage",
        "url": "https://applebees-menus.us/gift-card-deals",
        "name": "Applebee's Gift Card Balance: How to Check It Safely",
        "description": "Check your Applebee's gift card balance online, by phone or in-restaurant. Plus expiry rules, where cards work, and the scams Applebee's warns about.",
        "breadcrumb": {
          "@id": "https://applebees-menus.us/gift-card-deals/#breadcrumb"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://applebees-menus.us/gift-card-deals/#faq",
        "name": "Applebee's Gift Cards Frequently Asked Questions",
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
        "@id": "https://applebees-menus.us/gift-card-deals/#breadcrumb",
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
            "name": "Gift Card Deals",
            "item": "https://applebees-menus.us/gift-card-deals"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Gift Card Deals', href: '/gift-card-deals' }]} />

      <main className={styles.main}>
        {/* H1 & §1 — OPENING */}
        <header className={styles.hero} role="banner" aria-label="Gift Cards Header">
          <h1>Applebee's Gift Card Balance and How to Check It</h1>
          <p className={styles.heroLead}>
            There are three ways to check an Applebee's gift card balance: the balance tool linked from Applebee's own gift card page, a phone call to 1-800-252-6722, or asking staff at any Applebee's to run the card at the till.
          </p>
          <p className={styles.heroSub}>
            Applebee's gift cards never expire and never lose value, so an old card in a drawer is still worth what it says. This page covers how to check safely, where the cards can and cannot be used, and the specific scams Applebee's has publicly flagged.
          </p>
        </header>

        {/* §2 — CHECKING YOUR BALANCE */}
        <section className={styles.clusterSection} id="check-balance">
          <h2>How to Check an Applebee's Gift Card Balance</h2>

          <h3>Online</h3>
          <p>
            Start at Applebee's official gift card page (<strong>applebees.com/en/gift-cards</strong>) and use the "Check Balance" link there. You will need the card number and PIN.
          </p>
          <p>
            <strong>Important, and this catches people out:</strong> The balance checker does not run on applebees.com. It opens on a third-party payments domain, because Applebee's gift cards are powered by CashStar and the balance system sits with its stored-value provider.
          </p>
          <p>
            That is expected and legitimate — but it means "only trust applebees.com URLs" is advice that will make you distrust the real tool. The safe rule is not the domain, it is the path: always start at applebees.com and follow the link from there. Never arrive at a balance checker from a search ad or an emailed link.
          </p>

          <h3>By phone</h3>
          <p>
            Call <strong>1-800-252-6722</strong>. This is the number Applebee's publishes for gift card enquiries, including lost cards. Have the card number, or the purchase receipt, ready before calling.
          </p>
          <p>
            Phone is the most reliable route if you are unsure about a website, because there is no URL to get wrong.
          </p>

          <h3>In a restaurant</h3>
          <p>
            Any Applebee's can run the card at the till and tell you the balance. No account, no website, no typing a number into anything. If you are near a location, this is the simplest option — and the only one where you never enter your card details online at all.
          </p>

          <h3>Which method to use</h3>
          <div className={styles.tableCard} style={{ maxWidth: '650px', margin: '20px auto' }}>
            <div className={styles.tableResponsive}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th scope="col">Situation</th>
                    <th scope="col" style={{ textAlign: 'right' }}>Best Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>You have the card in hand and a location nearby</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>In-restaurant</td>
                  </tr>
                  <tr>
                    <td>You want to check right now from home</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>Official site link</td>
                  </tr>
                  <tr>
                    <td>You are unsure whether a site is genuine</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>Phone (1-800-252-6722)</td>
                  </tr>
                  <tr>
                    <td>The card is lost or stolen</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#c8102e' }}>Phone, immediately</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* §3 — SCAMS */}
        <section className={styles.clusterSection} id="gift-card-scams">
          <h2>Applebee's Gift Card Scams to Know About</h2>
          <p>
            Applebee's publishes its own fraud guidance, which makes this section straightforward: these are not theories, they are the scams the company has named.
          </p>

          <h3>The fake Meal Pass card</h3>
          <p>
            Applebee's has no Meal Pass programme. A card marketed as an "Applebee's Meal Pass Card" is not issued by Applebee's and cannot be redeemed at any location. Applebee's has published an image of the fake card specifically to warn people.
          </p>
          <p>
            If you have been offered one, or bought one, it is worthless at the restaurant. This is the most concrete gift card scam attached to the brand and almost no other page mentions it.
          </p>

          <h3>Payment demand scams</h3>
          <p>
            The pattern is always the same: someone contacts you urgently, and the payment they want is gift cards.
          </p>
          <ul className={styles.textList}>
            <li>
              <strong>The impersonation calls:</strong> Callers claiming to be from a tax authority, a government body, or law enforcement, saying money is owed and gift cards are the way to pay. No legitimate agency accepts restaurant gift cards. Ever.
            </li>
            <li>
              <strong>The family emergency call:</strong> A caller says a relative is in trouble and needs help paid in gift cards. Hang up and call your relative directly. Applebee's specifically flags this one.
            </li>
            <li>
              <strong>The mystery shopper scheme:</strong> A cheque arrives with instructions to deposit it, buy gift cards, and send the numbers back. The cheque bounces after the cards are gone.
            </li>
          </ul>
          <p className={styles.alertBox}>
            <strong>The universal rule:</strong> An Applebee's gift card can only be spent at Applebee's. Nobody — not a utility company, not a hospital, not a debt collector, not a court — takes them as payment. Any request to pay a bill with them is a scam, without exception.
          </p>

          <h3>Fake balance-check sites</h3>
          <p>
            Searching for a balance check surfaces paid ads and lookalike sites. Entering a card number and PIN on one of them empties the card within seconds, and a drained card is not usually refunded. Go through applebees.com every time rather than through a search result.
          </p>

          <h3>Tampered cards on the rack</h3>
          <p>
            Applebee's advises checking the packaging before buying. If it looks opened, resealed, torn, or the PIN panel has been scratched, do not buy it — take it to store management. Cards are sometimes recorded in-store and then drained the moment they are activated.
          </p>

          <h3>"Free" or discounted gift card offers</h3>
          <p>
            Applebee's states plainly that its gift cards are not free, and that ads or sites offering free or heavily discounted cards are scams.
          </p>

          <h3>If you have been targeted</h3>
          <p>
            Report it to the Federal Trade Commission at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a>. Call <strong>1-800-252-6722</strong> about the card itself. Move fast — the window between a scammer getting the number and the balance disappearing is short.
          </p>
        </section>

        {/* §4 — EXPIRY AND VALUE */}
        <section className={styles.clusterSection} id="expiry-and-value">
          <h2>Do Applebee's Gift Cards Expire?</h2>

          <div className={styles.answerBlock}>
            <p>
              No. Applebee's gift cards never expire and do not decrease in value. There are no dormancy fees, maintenance fees, or deductions for non-use.
            </p>
          </div>

          <p>
            Federal law backs this up: under the Credit CARD Act of 2009, funds on a purchased gift card cannot expire for at least five years from the date of issue, and inactivity fees are tightly restricted. Applebee's goes further than the legal minimum by not applying an expiry at all.
          </p>
          <p>
            A card found in a drawer years later is still worth its full face value. If the balance seems wrong, the phone line is the fastest way to resolve it.
          </p>

          <h3>Promotional bonus cards are different</h3>
          <p>
            During holiday promotions, buying a gift card sometimes comes with an additional bonus card. That bonus card is not the same thing.
          </p>
          <p>
            A purchased gift card is money you paid for, and the protections above apply. A bonus card was given away as part of a promotion, which makes it a promotional voucher rather than purchased value — and promotional vouchers carry their own expiry dates and their own terms.
          </p>
          <p>
            <strong>Practical rule:</strong> Spend the bonus card first, keep the purchased card as long as you like. The bonus card is the one with a deadline, and the deadline is printed on it or in the promotion terms. Once it passes, it cannot be reinstated at the till.
          </p>
        </section>

        {/* §5 — WHERE CARDS WORK */}
        <section className={styles.clusterSection} id="where-cards-work">
          <h2>Where You Can Use an Applebee's Gift Card</h2>
          <p><strong>Works:</strong></p>
          <ul className={styles.textList}>
            <li>Any Applebee's restaurant</li>
            <li>applebees.com</li>
            <li>The Applebee's mobile app</li>
          </ul>

          <p><strong>Does not work:</strong></p>
          <ul className={styles.textList}>
            <li>
              <strong>Third-party delivery platforms:</strong> Applebee's states directly that delivery service providers do not accept its gift cards. If you want to pay with a gift card for food at home, order through Applebee's own site or app — see <Link href="/delivery">delivery</Link> and <Link href="/takeout">takeout</Link>.
            </li>
            <li>
              <strong>Any other business:</strong> Applebee's cards are only redeemable at Applebee's.
            </li>
            <li>
              <strong>Buying another gift card:</strong> Applebee's gift cards are not redeemable for gift cards.
            </li>
          </ul>

          <h3>Can you pay for alcohol with it?</h3>
          <p>
            A gift card functions as payment against your bill, so it applies to the check as a whole. Some state or local rules govern how alcohol can be paid for, so if that matters for your visit, the restaurant can confirm. See our <Link href="/menu/signature-cocktails">drinks</Link> menu.
          </p>

          <h3>US and Canada</h3>
          <p>
            Gift cards bought in either the US or Canada are accepted in both countries, and cross-currency redemption works between the two. That does not extend beyond those two markets.
          </p>

          <h3>Not reloadable</h3>
          <p>
            Once a card's balance is spent, it cannot be topped up. Applebee's does not offer reloading — a new card is the only route. Worth knowing before you plan to keep one card as a running balance.
          </p>
        </section>

        {/* §6 — BUYING */}
        <section className={styles.clusterSection} id="how-to-buy">
          <h2>How to Buy an Applebee's Gift Card</h2>
          <ul className={styles.textList}>
            <li><strong>In a restaurant:</strong> Available at any location, for any amount.</li>
            <li><strong>Online, digital:</strong> Sent by email, delivered within minutes or scheduled for a future date. Can also be printed immediately and taken into a restaurant.</li>
            <li><strong>Online, physical:</strong> Orders process and ship within two days, with delivery options from standard mail to overnight. Cards shipped by UPS cannot be delivered to a PO Box — use a street address.</li>
            <li><strong>In bulk:</strong> A separate business ordering route exists for larger volumes, with better value at higher quantities.</li>
            <li><strong>Not by phone:</strong> Applebee's does not take gift card orders over the phone, for security reasons. Anyone calling to sell you one is not Applebee's.</li>
          </ul>

          <h3>Buying from other retailers</h3>
          <p>
            Applebee's gift cards are sold through authorised retail partners as well as directly. Buying from a supermarket or warehouse club rack is legitimate — just check the packaging for tampering first, as covered in §3.
          </p>
          <p>
            The value in buying elsewhere depends on whatever promotion that retailer is running at the time. It is worth checking before a large purchase, since a gift card bought at a discount is spendable at full face value, including on <Link href="/specials-and-deals">promotional deals</Link> — the discount and the promotion do not conflict, because one is a payment method and the other is a menu offer.
          </p>
        </section>

        {/* §7 — LOST OR STOLEN */}
        <section className={styles.clusterSection} id="lost-or-stolen">
          <h2>What to Do If You Lose an Applebee's Gift Card</h2>

          <div className={styles.answerBlock}>
            <p>
              Call 1-800-252-6722 as soon as possible, with the card number or the purchase receipt to hand. Applebee's advises treating gift cards like cash, since anyone holding the card can spend it.
            </p>
          </div>

          <h3>Why the receipt matters</h3>
          <p>
            A gift card is a bearer instrument. Whoever holds it can use it, and there is no name attached to it. That is why Applebee's asks for the card number or the receipt — without one of them there is no way to identify which card is yours among millions in circulation.
          </p>
          <p>
            Keep the activation receipt for any card you are not spending immediately, or photograph it. It costs nothing and it is the only thing standing between a lost card and lost money.
          </p>

          <h3>Digitise it</h3>
          <p>
            Digital gift cards can be stored on your phone rather than carried. A card that lives in your phone does not get left on a restaurant table or fall out of a wallet, and the number stays retrievable in your email if the phone is replaced.
          </p>
        </section>

        {/* §8 — FAQ */}
        <section className={styles.clusterSection} id="faqs">
          <h2>Applebee's Gift Cards — Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <article key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>
                  {faq.answer.includes("reportfraud.ftc.gov") ? (
                    <>
                      No. Applebee's gift cards can only be spent at Applebee's. No government body, utility, hospital or debt collector accepts them. Any such request is a scam — report it at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a>.
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
