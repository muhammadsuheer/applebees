import styles from './ContentSections.module.css';

// Sources checked September 2026:
// - Dine Brands Q2 2026: 1,439 US Applebee's; about 98% of the system franchised.
// - Flynn Group: 430+ Applebee's in 44 states, the largest Applebee's franchisee (flynn.com, April 2026).
// - Federal tipped cash wage $2.13 with tips making up $7.25 (US Department of Labor, FLSA).
//   States requiring full minimum wage before tips: AK, CA, MN, MT, NV, OR, WA.
// - Hiring at 16 for host, dishwasher, carside and prep roles at most locations; about 8 days from application to offer (Glassdoor, 2026).
// [VERIFY: pay ranges, employee discounts and benefits at a named franchisee before publishing any figures.]

export function CareersOverview() {
  return (
    <section className={styles.section} id="overview">
      <h2>Working at Applebee&apos;s in 2026</h2>
      <p>Here&apos;s the thing most people don&apos;t realize before applying: almost every Applebee&apos;s is owned by a franchise company, not by Applebee&apos;s itself. That one fact shapes everything below: your pay, your benefits, your schedule and even how you apply depend on the company that owns your restaurant.</p>
      <p>The jobs themselves are the same everywhere. Hosts and Carside To Go staff, servers and bartenders out front. Cooks, prep and dishwashers in the kitchen. Managers above both.</p>
    </section>
  );
}

export function FranchiseReality() {
  return (
    <section className={styles.section} id="franchise-reality">
      <h2>Who You&apos;d Actually Work For</h2>
      <p>When you take a job at Applebee&apos;s, you&apos;re usually hired by a franchise company, not by Applebee&apos;s or its parent, Dine Brands. The biggest is Flynn Group, which runs hundreds of Applebee&apos;s across the country. Others run just a handful.</p>
      <p>Why it matters: the franchisee sets the pay, the benefits, the uniform and the scheduling rules. Two Applebee&apos;s in the same city can offer quite different jobs. Moving from one to the other can mean leaving one employer and joining another. Ask in your interview who the employer is and what benefits come with the job.</p>
    </section>
  );
}

export function JobRoles() {
  return (
    <section className={styles.section} id="jobs">
      <h2>Applebee&apos;s Jobs: What Each One Involves</h2>

      <h3>Host and Carside To Go</h3>
      <p>The usual first job. Hosts seat guests and manage the wait. Carside To Go staff check, bag and carry out takeout orders, which at a busy restaurant is a big share of the evening. It&apos;s on your feet, it&apos;s outside in any weather, and it&apos;s where mistakes like a missing sauce get caught or don&apos;t.</p>

      <h3>Server</h3>
      <p>Take orders, run food, keep several tables happy at once. Most of your income is tips, so your shifts matter: evenings and weekends pay better than a Tuesday lunch. You&apos;ll need to know the menu well, including the current deals and which items contain common allergens.</p>

      <h3>Bartender</h3>
      <p>Makes drinks for the whole restaurant and serves guests at the bar. Happy hour and late evenings are the busiest times. You&apos;ll need to be old enough to serve alcohol in your state, which is 21 in many places.</p>

      <h3>Line Cook and Prep Cook</h3>
      <p>Prep cooks get ingredients ready before service. Line cooks work a station, grill, fryer or sauté, and cook orders as tickets come in. It&apos;s hot, fast work, usually paid a straight hourly wage instead of tips.</p>

      <h3>Dishwasher</h3>
      <p>Keeps plates, pans and the kitchen clean, and often helps with prep. It&apos;s a common way into kitchen work.</p>

      <h3>Manager</h3>
      <p>Kitchen managers, assistant managers and general managers run shifts, schedules, ordering and hiring. Many start as hourly staff and move up. Expect long weeks, nights and holidays.</p>
    </section>
  );
}

export function HiringProcess() {
  return (
    <section className={styles.section} id="hiring">
      <h2>How to Apply</h2>
      <p>Apply online. Applebee&apos;s careers page links to openings, and most are posted by the franchisee that owns the restaurant. Some restaurants also take walk-in applications or have a QR code at the door.</p>
      <p>From there it&apos;s usually a phone call or message, then a short in-person interview with a manager covering your availability, any experience and how you&apos;d handle a difficult guest. It usually moves quickly, often within a week or two.</p>
      <p><strong>What helps:</strong> open availability, especially evenings and weekends. Restaurants hire around the shifts that are hardest to fill.</p>
    </section>
  );
}

export function PayAndTips() {
  return (
    <section className={styles.section} id="pay">
      <h2>Pay and Tips</h2>
      <p>Pay depends on your state and your employer, so we don&apos;t publish a single number. The rules behind it are worth knowing.</p>

      <h3>Tipped jobs</h3>
      <p>Under federal law, an employer can pay tipped staff as little as $2.13 an hour, as long as tips bring them to at least the $7.25 federal minimum wage. If they don&apos;t, the employer has to make up the difference. Many states set a higher tipped wage. Some states, including Alaska, California, Minnesota, Montana, Nevada, Oregon and Washington, require the full state minimum wage before tips.</p>

      <h3>Tip-outs</h3>
      <p>Servers commonly share part of their tips with bartenders and support staff. How much, and on what, is set by the restaurant. Ask about it in your interview, because it changes your take-home pay.</p>

      <h3>Kitchen jobs</h3>
      <p>Cooks, prep and dishwashers are normally paid an hourly wage at or above the local minimum wage.</p>

      <h3>Benefits</h3>
      <p>Meal discounts, health insurance, retirement plans and early pay access all vary by franchisee. Ask what&apos;s offered and when you become eligible.</p>
    </section>
  );
}

export function AgeRequirements() {
  return (
    <section className={styles.section} id="age">
      <h2>How Old Do You Have to Be to Work at Applebee&apos;s?</h2>
      <p><strong>16</strong> for host, dishwasher, Carside To Go and prep jobs at most restaurants. Federal rules limit the hours under-18s can work and keep them away from some equipment, and your state may add more.</p>
      <p><strong>18 or older</strong> for servers in most states, because servers carry drinks to tables. Some states set a higher age.</p>
      <p><strong>21</strong> for bartenders in many states, and bartending at Applebee&apos;s generally means being 21.</p>
      <p>The franchisee can set its own minimums above the legal ones, so check the job listing.</p>
    </section>
  );
}

export function CareersFAQ() {
  const faqData = [
    { question: "How old do you have to be to work at Applebee's?", answer: "Most restaurants hire hosts, dishwashers, Carside To Go and prep staff from 16. Servers are usually 18 or older, and bartenders 21, depending on state law." },
    { question: "Is Applebee's owned by franchisees?", answer: "Almost entirely. Nearly every Applebee's is owned by a franchisee, and the franchisee is usually your employer." },
    { question: "Who is the largest Applebee's franchisee?", answer: "Flynn Group, which runs hundreds of Applebee's across the US." },
    { question: "How do I apply to Applebee's?", answer: "Online through Applebee's careers page or the franchisee's job listings. Some restaurants also accept applications in person." },
    { question: "How long does Applebee's take to hire?", answer: "Often within a week or two, depending on how quickly the restaurant needs to fill shifts." },
    { question: "How much do Applebee's servers make an hour?", answer: "It depends on the state and the employer. Federal law allows a tipped wage as low as $2.13 an hour, with tips making up at least $7.25, and many states require more." }
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
      <h2>Working at Applebee&apos;s: Frequently Asked Questions</h2>
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
