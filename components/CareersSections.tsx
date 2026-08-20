import styles from './ContentSections.module.css';

export function CareersOverview() {
  return (
    <section className={styles.section} id="employment-landscape">
      <h2>The 2026 Employment Landscape</h2>
      <p>Applebee's is not just a restaurant chain; it is one of the most prominent engines of frontline employment in the United States. In 2026, the casual dining industry relies heavily on a massive, dynamic workforce to operate continuously from 11:00 AM to 2:00 AM, seven days a week. When you apply for a job at Applebee's, you are entering a highly structured, fiercely fast-paced logistical environment.</p>
      
      <p>This 3,000-word comprehensive careers guide strips away the generic corporate human resources terminology to provide an unflinching look at what it actually means to work "under the neighborhood roof." From the intense reality of a Friday night dinner rush on the cooking line, to the intricacies of the tipped minimum wage, this page is designed to prepare you for a career in the hospitality trenches.</p>
      
      <p>Whether you are a high school student looking for your first hosting job, a seasoned bartender seeking high-volume tip opportunities, or a culinary graduate aiming for the prestigious General Manager (GM) fast-track, understanding the franchise structure and the AI-driven hiring process is critical to securing your position.</p>
    </section>
  );
}

export function FranchiseReality() {
  return (
    <section className={styles.section} id="franchise-reality">
      <h2>The Franchise Reality: Who Is Actually Your Boss?</h2>
      <p>The biggest misconception among applicants is the belief that they are applying to work for "Applebee's Corporate." In reality, over 96% of Applebee's locations are independently owned and operated by massive franchise groups. Dine Brands Global (the parent company) simply licenses the brand, the menus, and the marketing.</p>
      
      <h3>The Flynn Group Dominance</h3>
      <p>If you apply for a job at Applebee's in 2026, there is a very high statistical probability that you are actually applying to work for <strong>Flynn Group</strong> (formerly Flynn Restaurant Group). Flynn Group is the largest restaurant franchise operator on the planet, managing over 460 Applebee's locations across the country.</p>
      <p>This distinction is incredibly important for your paycheck and your benefits. Your W-2 will say "Flynn Group," not Applebee's. The health insurance, the 401(k) matching, the strictness of the uniform policy, and the availability of "Daily Pay" apps are all dictated entirely by the franchise group that owns your specific building. If you transfer from an Applebee's owned by Flynn Group to an Applebee's owned by RMH Franchise Corporation, you are legally quitting one company and being hired by another.</p>
    </section>
  );
}

export function FrontOfHouse() {
  return (
    <section className={styles.section} id="front-of-house">
      <h2>Front of House (FOH): The Face of the Brand</h2>
      <p>The Front of House team operates on the floor. They are the sales engine of the restaurant, relying heavily on emotional intelligence, multitasking, and extreme physical stamina to manage multiple tables simultaneously.</p>
      
      <h3>The Server</h3>
      <p>The core of the Applebee's experience. A server in 2026 must memorize an expansive menu, navigate a highly complex POS (Point of Sale) tablet system, and manage the emotional temperaments of up to five tables simultaneously. The most lucrative shifts are Friday nights and Sunday mornings. You are not just carrying plates; you are aggressively upselling $6 Mucho Cocktails and Triple Chocolate Meltdowns to maximize your check average, which directly dictates your tip income.</p>
      
      <h3>The Bartender</h3>
      <p>The most coveted hourly position in the restaurant. The Applebee's bartender must possess an encyclopedic knowledge of mixology while simultaneously acting as a server for the bar area. During the Late-Night Happy Hour (10:00 PM to Close), the bartender acts as the de facto manager of the dining room. They take home the highest tips but endure the most intense stress.</p>
      
      <h3>The Host / Carside Specialist</h3>
      <p>Often an entry-level position, the Host controls the flow of the entire restaurant. A poor host will "triple-seat" a server (give them three new tables at exactly the same time), causing the server to panic and the kitchen to crash. In 2026, this role is heavily integrated with the "Carside To Go" specialist, requiring the employee to rapidly bag takeout orders, audit them for missing sauces, and physically run them to cars in the parking lot in all weather conditions.</p>
    </section>
  );
}

export function BackOfHouse() {
  return (
    <section className={styles.section} id="back-of-house">
      <h2>Back of House (BOH): The Culinary Engine</h2>
      <p>The Back of House is a grueling, high-temperature, high-pressure environment. It operates on a strict military-style hierarchy. You do not receive tips; you are paid a higher, fixed hourly wage. If the kitchen crashes, the entire restaurant fails.</p>
      
      <h3>The Prep Cook</h3>
      <p>The unsung heroes who arrive at 7:00 AM. They do not cook food to order. Instead, they slice hundreds of pounds of onions, portion out massive vats of Spinach & Artichoke Dip, and prepare the proprietary marinades. When their shift ends at 3:00 PM, the line cooks take over.</p>
      
      <h3>The Line Cook (Grill, Fry, Mid)</h3>
      <p>During a Friday dinner rush, a line cook operates in a state of controlled chaos. The "Grill" station manages dozens of Bourbon Street Steaks, monitoring exact temperatures while flames leap from the grates. The "Fry" station drops hundreds of Boneless Wings and Mozzarella Sticks into 350°F oil. You must possess extreme heat tolerance and the ability to read 15 digital tickets simultaneously without losing track of a single burger.</p>
      
      <h3>The Expeditor (Expo)</h3>
      <p>The most critical role in the kitchen. The Expo stands at the "window" where the kitchen meets the dining room. They do not cook. They orchestrate. They ensure the steak from the grill station and the fries from the fry station hit the plate at the exact same second. They wipe the rims of the plates, apply the final garnishes, and scream at the servers to run the hot food.</p>
    </section>
  );
}

export function AIHiringProcess() {
  return (
    <section className={styles.section} id="ai-hiring">
      <h2>The AI Hiring Process: Meet "Frankie"</h2>
      <p>In 2026, the era of walking into a restaurant and handing a paper resume to the manager is completely dead. Massive operators like Flynn Group process thousands of applications a week. To handle this volume, they have deployed sophisticated AI recruitment software.</p>
      
      <h3>The Text-Message Interview</h3>
      <p>When you scan the QR code on the front door of an Applebee's to apply, you will almost immediately receive an automated SMS text message from an AI assistant (often internally referred to as "Frankie" or similar proprietary names). The AI will ask you a series of rapid-fire screening questions: <em>"Are you at least 18 years old?"</em>, <em>"Are you available to work weekends and holidays?"</em>, <em>"Do you have reliable transportation?"</em>.</p>
      
      <h3>Automated Scheduling</h3>
      <p>If you pass the AI's algorithm, the system has direct access to the General Manager's digital calendar. The AI will instantly text you available interview slots for the very next day. This ensures a candidate is hired before a competing restaurant down the street can even review their application.</p>
    </section>
  );
}

export function ManagementFastTrack() {
  return (
    <section className={styles.section} id="management">
      <h2>Management Fast-Track: The MIT Program</h2>
      <p>Applebee's is famous for promoting from within. A highly competent server or line cook can easily transition into the MIT (Manager in Training) program, a grueling 8-week corporate boot camp that teaches inventory control, labor laws, and P&L (Profit and Loss) management.</p>
      
      <h3>The Salary Expectations (2026)</h3>
      <p>A salaried Assistant Manager typically starts between <strong>$50,000 and $65,000</strong> annually, depending on the state. However, the ultimate goal is the General Manager (GM) position. An Applebee's GM is effectively the CEO of a multi-million dollar business. With aggressive performance bonuses tied to food cost efficiency and sales growth, a top-tier GM in 2026 can easily earn between <strong>$85,000 and $120,000+</strong> per year.</p>
      
      <h3>The Catch: The 60-Hour Week</h3>
      <p>Salaried management is highly lucrative but immensely demanding. GMs and Assistant Managers routinely work 55 to 65 hours a week. They work every major holiday, close the restaurant at 2:00 AM on Saturdays, and are the first ones called if the freezer breaks down at 4:00 AM on a Sunday.</p>
    </section>
  );
}

export function CompensationTips() {
  return (
    <section className={styles.section} id="compensation">
      <h2>Compensation & The Tip-Out Structure</h2>
      <p>The financial reality of working Front of House is dictated by federal tip laws. If you are a server or bartender, you will likely be paid the "Tipped Minimum Wage," which in many states is as low as <strong>$2.13 an hour</strong>. Your actual income is generated entirely by the generosity of your tables.</p>
      
      <h3>The Tip-Out Tax</h3>
      <p>You do not keep 100% of the tips you earn. At the end of your shift, you must "tip-out" the support staff. You will typically owe 1% to 2% of your total sales to the Host, and 2% to 3% of your bar sales to the Bartender. If a table stiffs you on a $100 check, you still owe the host and bartender a percentage of that $100. You essentially pay out of pocket to serve a table that doesn't tip.</p>
      
      <h3>The "Daily Pay" Integration</h3>
      <p>A massive benefit introduced by franchises like Flynn Group in recent years is the integration of Daily Pay applications. Instead of waiting two weeks for a paycheck, servers and cooks can digitally withdraw up to 50% of the wages they earned that exact same day directly to their bank accounts, providing unprecedented financial flexibility.</p>
    </section>
  );
}

export function BenefitsPerks() {
  return (
    <section className={styles.section} id="benefits">
      <h2>Real Benefits & Perks</h2>
      <p>The hospitality industry has historically struggled with providing corporate-level benefits, but massive franchise groups have changed the paradigm to retain talent.</p>
      
      <ul>
        <li><strong>The Shift Meal:</strong> The most immediate perk. Employees typically receive a 50% discount on food consumed during or immediately after their shift. (Note: Premium items like Steaks and Ribs are often excluded or heavily restricted).</li>
        <li><strong>Health Insurance:</strong> Full-time hourly employees (consistently averaging over 30 hours a week) are legally eligible for franchise-sponsored medical, dental, and vision insurance packages.</li>
        <li><strong>401(k) Matching:</strong> Management and tenured hourly staff gain access to 401(k) retirement accounts, often with a franchise match up to a certain percentage.</li>
        <li><strong>The "Apple Buddy" Discount:</strong> Many franchises offer a 25% discount for employees when they dine at an Applebee's on their day off with their families.</li>
      </ul>
    </section>
  );
}

export function AgeRequirements() {
  return (
    <section className={styles.section} id="age-requirements">
      <h2>Age Requirements by State</h2>
      <p>The legal ability to hire a teenager is strictly dictated by local and state labor laws, specifically regarding the serving of alcohol and the operation of heavy machinery (like industrial meat slicers and deep fryers).</p>
      
      <h3>Hosts and Carside To Go (Age 16+)</h3>
      <p>The entry point for most high school students. You can generally be hired at 16 years old to seat tables and run food to cars, as these positions do not involve pouring alcohol or operating the deep fryers.</p>
      
      <h3>Servers (Age 18+)</h3>
      <p>Because every Applebee's operates a full liquor bar, servers must legally be allowed to carry and serve alcohol to tables. In the vast majority of U.S. states, the minimum age to serve an open container of alcohol is 18. (Note: A few strict states require servers to be 21).</p>
      
      <h3>Bartenders (Age 21+)</h3>
      <p>There are zero exceptions to this rule. To stand behind the physical bar, mix the liquor, and process the transactions, you must be 21 years of age.</p>
    </section>
  );
}

export function CareersFAQ() {
  const faqData = [
    { question: "How much does an Applebee's server make in 2026?", answer: "Server income is highly variable. While the hourly base pay is low (often $2.13/hr depending on the state), a competent server working a Friday night shift can easily take home $150 to $300 in credit card and cash tips in a single evening." },
    { question: "Does Applebee's drug test during the interview?", answer: "Generally, Applebee's does not require a pre-employment drug screen for standard hourly positions (Servers, Cooks, Hosts). However, applicants for salaried Management positions are almost always subjected to a background check and a drug test." },
    { question: "What should I wear to an Applebee's interview?", answer: "Dress in 'business casual' or 'smart casual.' A clean button-down shirt or polo, dark jeans or slacks, and non-slip style shoes. Do not wear sweatpants, heavily ripped jeans, or open-toed sandals. You want to look reliable and cleanly presented." },
    { question: "How long is the training process?", answer: "Hourly training typically lasts 3 to 5 shifts. You will 'shadow' a senior trainer, gradually taking on more tables or grill responsibilities until you must pass a final menu validation test to prove you know the ingredients." },
    { question: "Do Applebee's employees get free food?", answer: "No, food is rarely 100% free unless authorized by a manager for a specific reason (like a kitchen mistake). Employees typically receive a 50% discount on standard menu items during their shift." }
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
      <h2>Frequently Asked Questions: Working at Applebee's</h2>
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
