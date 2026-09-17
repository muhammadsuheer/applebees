import styles from './ContentSections.module.css';

const LAST_UPDATED = 'September 11, 2026';

export function PrivacyPolicyContent() {
  return (
    <section className={styles.section}>
      <p><strong>Last updated:</strong> {LAST_UPDATED}</p>

      <h2>1. Who We Are</h2>
      <p>Menu Almanac runs applebees-menus.us, an independent guide to Applebee&apos;s prices, calories and allergens. We aren&apos;t Applebee&apos;s. You can reach us at <a href="mailto:contact@applebees-menus.us">contact@applebees-menus.us</a>.</p>

      <h2>2. What We Collect</h2>
      <p>We don&apos;t have user accounts, and we don&apos;t sell anything on this site. Information is collected in three ways:</p>
      <ul>
        <li><strong>Analytics.</strong> We use Google Analytics to count visits and see which pages people read. It records things like the pages you view, your approximate location, your browser and device type, and how you arrived at the site.</li>
        <li><strong>Advertising.</strong> We use Google AdSense to show ads. Google and its partners may collect information such as your IP address, device identifiers, the pages you visit and how you interact with ads. See section 3.</li>
        <li><strong>Emails you send us.</strong> The contact form opens your own email app. Nothing you type is stored on our site. If you email us, we receive your email address and whatever you write, and we use it only to reply.</li>
      </ul>

      <h2>3. Advertising and Google AdSense</h2>
      <p>This site uses Google AdSense, an advertising service provided by Google.</p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.</li>
        <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.</li>
        <li>You may opt out of personalized advertising by visiting Google&apos;s <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
        <li>You can also opt out of some third-party vendors&apos; use of cookies for personalized advertising at <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.</li>
      </ul>
      <p>If you opt out, you&apos;ll still see ads, but they won&apos;t be based on your browsing. For how Google uses information from sites that show its ads, see <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses information from sites or apps that use our services</a>. Google processes this data under its own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</p>
      <p>Advertisers don&apos;t choose or influence what we write about Applebee&apos;s, and ads are not endorsements.</p>

      <h2>4. Visitors in the EEA, UK and Switzerland</h2>
      <p>If you visit from the European Economic Area, the United Kingdom or Switzerland, you&apos;ll see a consent message, provided through a Google-certified consent management platform, before advertising or analytics cookies are used where consent is required. You can accept, reject or choose specific purposes, and you can change your choice later through the same privacy settings. If you don&apos;t consent to personalized ads, Google may show non-personalized ads, which use cookies only for purposes such as frequency capping, measurement and fraud prevention.</p>

      <h2>5. Cookies</h2>
      <p>Google Analytics and Google AdSense set cookies on your device. The full list, and how to control them, is on our <a href="/cookies">cookie policy</a> page.</p>

      <h2>6. How We Use Information</h2>
      <ul>
        <li>To understand which pages are useful and fix the ones that aren&apos;t.</li>
        <li>To show ads that pay for running the site.</li>
        <li>To reply to your emails and correct errors you report.</li>
        <li>To detect and prevent fraud and abuse, including invalid ad clicks.</li>
      </ul>

      <h2>7. Sharing</h2>
      <p>We don&apos;t sell personal information for money, and we don&apos;t share your emails with anyone. Analytics and advertising data is collected and processed by Google as described above. We&apos;d disclose information only if the law required us to.</p>

      <h2>8. Your Privacy Rights</h2>
      <p><strong>California (CCPA/CPRA):</strong> you have the right to know what personal information is collected, to request deletion, to correct it, and to opt out of the &quot;sharing&quot; of personal information for cross-context behavioral advertising. To opt out of personalized ads, use Google&apos;s <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Ads Settings</a> or a browser that sends a Global Privacy Control signal, and email us for any other request. We won&apos;t treat you differently for using these rights.</p>
      <p><strong>EEA, UK and Switzerland (GDPR):</strong> you have the right to access, correct or erase your personal data, to restrict or object to its processing, to data portability, and to withdraw consent at any time. We rely on your consent for advertising and analytics cookies where consent is required, and on our legitimate interest in running and securing the site otherwise. You can also complain to your local data protection authority.</p>
      <p>To make a request, email <a href="mailto:contact@applebees-menus.us">contact@applebees-menus.us</a> with the subject line &quot;Privacy Request&quot;. We&apos;ll respond within 30 days.</p>

      <h2>9. Data Retention</h2>
      <p>Emails are kept only as long as needed to handle your message. Analytics data is kept for the retention period set in our Google Analytics account, after which Google deletes it. Advertising cookie lifetimes are listed on the <a href="/cookies">cookie policy</a> page.</p>

      <h2>10. Children</h2>
      <p>This site isn&apos;t directed at children under 13, and we don&apos;t knowingly collect their personal information. If you believe a child has sent us personal information, email us and we&apos;ll delete it.</p>

      <h2>11. Links to Other Sites</h2>
      <p>Ads and some pages link to other websites. We aren&apos;t responsible for their privacy practices.</p>

      <h2>12. Changes</h2>
      <p>If we change this policy, we&apos;ll update the date at the top of this page.</p>

      <h2>13. Contact</h2>
      <p>Questions about this policy: <a href="mailto:contact@applebees-menus.us">contact@applebees-menus.us</a>.</p>
    </section>
  );
}

export function CookiePolicyContent() {
  return (
    <section className={styles.section}>
      <p><strong>Last updated:</strong> {LAST_UPDATED}</p>

      <h2>What Cookies Are</h2>
      <p>Cookies are small text files a website stores in your browser. We don&apos;t set any cookies of our own. The cookies on this site come from Google Analytics, which measures visits, and Google AdSense, which shows ads. Visitors in the EEA, UK and Switzerland are asked for consent before these cookies are used where consent is required.</p>

      <h2>Cookies Used on This Site</h2>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th scope="col">Cookie</th>
              <th scope="col">Set by</th>
              <th scope="col">Purpose</th>
              <th scope="col">Typical duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga, _ga_*</td>
              <td>Google Analytics</td>
              <td>Tells visits apart so we can count visitors and see which pages are read.</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>__gads, __gpi, __eoi</td>
              <td>Google AdSense</td>
              <td>Ad delivery, measuring ad performance, limiting how often you see the same ad, and preventing fraud.</td>
              <td>Up to 13 months</td>
            </tr>
            <tr>
              <td>IDE and other doubleclick.net / google.com cookies</td>
              <td>Google</td>
              <td>Personalized advertising based on your visits to this and other websites, where you&apos;ve allowed it.</td>
              <td>Up to 13 months in the EEA and UK, longer elsewhere</td>
            </tr>
            <tr>
              <td>FCCDCF, FCNEC</td>
              <td>Google consent message</td>
              <td>Stores your consent choices, for visitors shown the EEA, UK and Switzerland consent message.</td>
              <td>Up to 13 months</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Google changes cookie names from time to time. Its current list is at <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">How Google uses cookies</a>.</p>

      <h2>How to Control Cookies</h2>
      <ul>
        <li><strong>Personalized ads:</strong> turn them off in Google&apos;s <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Ads Settings</a>, or opt out of participating vendors at <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.</li>
        <li><strong>Analytics:</strong> install Google&apos;s <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Analytics opt-out browser add-on</a>.</li>
        <li><strong>All cookies:</strong> block or delete them in your browser settings. The site still works without them.</li>
        <li><strong>EEA, UK and Switzerland:</strong> change your consent choices at any time through the privacy settings in the consent message.</li>
      </ul>

      <h2>More Information</h2>
      <p>How we handle personal information is explained in our <a href="/privacy-policy">privacy policy</a>. Questions: <a href="mailto:contact@applebees-menus.us">contact@applebees-menus.us</a>.</p>
    </section>
  );
}

export function TermsContent() {
  return (
    <section className={styles.section}>
      <p><strong>Last updated:</strong> {LAST_UPDATED}</p>

      <h2>1. Using This Site</h2>
      <p>By using applebees-menus.us, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.</p>

      <h2>2. What the Information Is</h2>
      <p>Prices on this site are a guide, not quotes. Applebee&apos;s restaurants are mostly owned by franchisees who set their own prices, menus and hours, so what you pay can be different. Calorie and allergen information is general guidance and can change when recipes do. Check with your restaurant before you order, and always speak to the restaurant about a food allergy.</p>

      <h2>3. Not Affiliated With Applebee&apos;s</h2>
      <p>Menu Almanac is independent. We aren&apos;t affiliated with, endorsed by or operated by Applebee&apos;s Neighborhood Grill + Bar or Dine Brands Global. Applebee&apos;s and related names are trademarks of their owners and are used here only to identify the restaurants we write about.</p>

      <h2>4. Advertising</h2>
      <p>The site shows ads served by Google AdSense. Ads are provided by third parties and aren&apos;t endorsements. We aren&apos;t responsible for the content of ads or the sites they link to.</p>

      <h2>5. Our Content</h2>
      <p>You&apos;re welcome to read, print and share links to our pages for personal use. Please don&apos;t copy our tables, text or downloadable PDFs in bulk, republish them, or sell them without our written permission.</p>

      <h2>6. No Warranty</h2>
      <p>We work to keep the site accurate, but it&apos;s provided as is. We can&apos;t promise every price and number is correct or current.</p>

      <h2>7. Limit of Liability</h2>
      <p>To the extent the law allows, we aren&apos;t liable for losses that come from relying on information on this site, including price differences at a restaurant or reactions to food.</p>

      <h2>8. Links to Other Sites</h2>
      <p>We link to other websites, including Applebee&apos;s. We don&apos;t control them and aren&apos;t responsible for their content.</p>

      <h2>9. Changes</h2>
      <p>We may update these terms. The date at the top shows the latest version.</p>

      <h2>10. Contact</h2>
      <p>Questions about these terms: <a href="mailto:contact@applebees-menus.us">contact@applebees-menus.us</a>.</p>
    </section>
  );
}

export function DisclaimerContent() {
  return (
    <section className={styles.section}>
      <h2>Independent Informational Resource</h2>
      <p>This website is an independent informational resource and is <strong>NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with Dine Brands Global, Inc., Applebee&apos;s Neighborhood Grill + Bar, or any of its subsidiaries or its affiliates. The official Applebee&apos;s website can be found at www.applebees.com.</p>

      <h2>Trademarks and Copyrights</h2>
      <p>The name &quot;Applebee&apos;s&quot; as well as related names, marks, emblems and images are registered trademarks of their respective owners. The use of any trade name or trademark is for identification and reference purposes only and doesn&apos;t imply any association with the trademark holder of their product brand.</p>

      <h2>Food Photos</h2>
      <p>Food photos on this site are for illustration. Portions, plating and ingredients at your restaurant may look different.</p>

      <h2>Accuracy of Pricing and Nutritional Information</h2>
      <p>The menu prices, nutritional information (including calories), and operating hours published on this website are a general guide. Because the vast majority of Applebee&apos;s restaurants are independently owned and operated franchises, <strong>prices and menu availability vary significantly by location</strong>.</p>
      <p>We don&apos;t guarantee the accuracy, completeness, or timeliness of the information here. You should always verify pricing, participation, and nutritional facts directly with your local restaurant before ordering.</p>

      <h2>Advertising</h2>
      <p>This site is supported by ads served by Google AdSense. Advertisers have no say in what we publish, and an ad appearing next to a page isn&apos;t an endorsement by us or by Applebee&apos;s.</p>

      <h2>No Financial or Health Advice</h2>
      <p>The information provided on this website doesn&apos;t constitute financial, health, or dietary advice. If you have severe food allergies or specific dietary restrictions, you must consult the official allergen guides provided directly by the restaurant&apos;s management.</p>
    </section>
  );
}

export function AboutContent() {
  return (
    <section className={styles.section}>
      <h2>Who We Are</h2>
      <p>Menu Almanac is an independent website about the Applebee&apos;s menu. We put prices, calories, deals and allergen information in one place, so it&apos;s easy to look something up before you order.</p>

      <h2>What You&apos;ll Find Here</h2>
      <ul>
        <li><strong>The menu with prices and calories</strong>, with a page for every category, from appetizers and burgers to desserts and drinks.</li>
        <li><strong>Nutrition and allergen tables</strong> to compare calories, protein and sodium across the menu.</li>
        <li><strong>Deals and happy hour</strong>, including the 2 for $25, the Really BIG Meal Deal and limited-time offers.</li>
        <li><strong>Restaurant listings</strong> with addresses and phone numbers.</li>
        <li><strong>Simple guides</strong> for takeout, delivery, catering, gift cards and opening hours.</li>
      </ul>

      <h2>Keeping Pages Up to Date</h2>
      <p>We update our pages when Applebee&apos;s announces new menu items, deals or changes. Each Applebee&apos;s restaurant sets its own prices, so the prices here are a general guide. For exact prices and availability, check with your local restaurant.</p>

      <h2>An Independent Website</h2>
      <p>Menu Almanac isn&apos;t affiliated with, endorsed by or operated by Applebee&apos;s Neighborhood Grill + Bar or Dine Brands Global. For orders, gift cards or questions about a restaurant, please contact Applebee&apos;s directly at applebees.com.</p>

      <h2>Advertising</h2>
      <p>This site is supported by ads served by Google AdSense. Ads don&apos;t affect what we write.</p>

      <h2>Contact Us</h2>
      <p>Spotted something out of date, or have a question? Email us at <a href="mailto:contact@applebees-menus.us">contact@applebees-menus.us</a>. We&apos;re always glad to hear from readers.</p>
    </section>
  );
}

export function ContactContent() {
  return (
    <section className={styles.section}>
      <h2>Get In Touch</h2>
      <p>Found a price that doesn&apos;t match your receipt, a calorie figure that looks wrong, or something on the site that&apos;s out of date? Tell us. Corrections are the most useful email we get.</p>

      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> contact@applebees-menus.us</li>
        <li><strong>Response time:</strong> a few working days.</li>
      </ul>
      <p>We&apos;re not Applebee&apos;s, so we can&apos;t help with orders, gift cards, jobs or complaints about a restaurant. Contact Applebee&apos;s directly for those.</p>

      <h2>DMCA &amp; Copyright Takedown Requests</h2>
      <p>If you believe material on this site infringes your copyright, email us with your contact information, a description of the copyrighted work, and the exact URL where it appears.</p>

      <h2>Privacy Requests (CCPA / GDPR)</h2>
      <p>To ask what personal information we hold about you, or to have it deleted, email us with the subject line &quot;Privacy Request&quot;. See the <a href="/privacy-policy">privacy policy</a> for what we collect.</p>
    </section>
  );
}
