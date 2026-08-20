import styles from './ContentSections.module.css';

export function PrivacyPolicyContent() {
  return (
    <section className={styles.section}>
      <h2>1. Introduction</h2>
      <p>At our website, accessible from this domain, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We collect information to provide better services to all our users. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
      <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
      
      <h2>3. Log Files</h2>
      <p>We follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

      <h2>4. Cookies and Web Beacons</h2>
      <p>Like any other website, we use 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

      <h2>5. Google DoubleClick DART Cookie</h2>
      <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads</p>

      <h2>6. Advertising Partners Privacy Policies</h2>
      <p>You may consult this list to find the Privacy Policy for each of the advertising partners of our website. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on our website, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

      <h2>7. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
      <p>Under the CCPA, among other rights, California consumers have the right to:</p>
      <ul>
        <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
        <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
      </ul>

      <h2>8. GDPR Data Protection Rights</h2>
      <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
      <ul>
        <li>The right to access – You have the right to request copies of your personal data.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
      </ul>
    </section>
  );
}

export function TermsContent() {
  return (
    <section className={styles.section}>
      <h2>1. Terms</h2>
      <p>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

      <h2>2. Use License</h2>
      <p>Permission is granted to temporarily download one copy of the materials on our Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
      <ul>
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial purpose or for any public display;</li>
        <li>attempt to reverse engineer any software contained on our Website;</li>
        <li>remove any copyright or other proprietary notations from the materials; or</li>
        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
      </ul>

      <h2>3. Disclaimer</h2>
      <p>All the materials on our Website are provided "as is". We make no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, we do not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

      <h2>4. Limitations</h2>
      <p>We or our suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on our Website, even if we or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

      <h2>5. Revisions and Errata</h2>
      <p>The materials appearing on our Website may include technical, typographical, or photographic errors. We will not promise that any of the materials in this Website are accurate, complete, or current. We may change the materials contained on its Website at any time without notice.</p>
    </section>
  );
}

export function DisclaimerContent() {
  return (
    <section className={styles.section}>
      <h2>Independent Informational Resource</h2>
      <p>This website is an independent informational resource and is <strong>NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with Dine Brands Global, Inc., Applebee's Neighborhood Grill + Bar, or any of its subsidiaries or its affiliates. The official Applebee's website can be found at www.applebees.com.</p>
      
      <h2>Trademarks and Copyrights</h2>
      <p>The name "Applebee's" as well as related names, marks, emblems and images are registered trademarks of their respective owners. The use of any trade name or trademark is for identification and reference purposes only and does not imply any association with the trademark holder of their product brand.</p>

      <h2>Accuracy of Pricing and Nutritional Information</h2>
      <p>The menu prices, nutritional information (including calories), and operating hours published on this website are estimates gathered from various public sources and local franchise locations. Because the vast majority of Applebee's restaurants are independently owned and operated franchises, <strong>prices and menu availability vary significantly by location</strong>.</p>
      <p>We do not guarantee the accuracy, completeness, or timeliness of the data provided. You should always verify pricing, participation, and nutritional facts directly with your local restaurant before ordering.</p>

      <h2>No Financial or Health Advice</h2>
      <p>The information provided on this website does not constitute financial, health, or dietary advice. If you have severe food allergies or specific dietary restrictions, you must consult the official allergen guides provided directly by the restaurant's management.</p>
    </section>
  );
}

export function AboutContent() {
  return (
    <section className={styles.section}>
      <h2>Our Mission</h2>
      <p>Welcome to our comprehensive menu resource. Our primary mission is to provide diners with the most organized, readable, and up-to-date pricing and nutritional information available on the internet. We understand that finding accurate caloric counts and localized pricing can be a frustrating experience, which is why we built this platform.</p>

      <h2>Editorial Standards</h2>
      <p>Our editorial team is dedicated to accuracy and transparency. While restaurant menus are highly volatile and subject to unannounced regional price hikes, we employ a rigorous review process. We routinely cross-reference our data against publicly available delivery apps, crowd-sourced receipts, and direct franchise communications to ensure our estimates remain as precise as possible.</p>

      <h2>Why We Built This</h2>
      <p>Modern restaurant websites are often bloated with heavy javascript, autoplaying videos, and confusing navigation structures that make it nearly impossible to quickly glance at a menu on a mobile device. We engineered this site from the ground up to be lightning-fast, accessible, and hyper-focused on the data you actually care about: what is on the menu, how much it costs, and what its nutritional profile looks like.</p>
    </section>
  );
}

export function ContactContent() {
  return (
    <section className={styles.section}>
      <h2>Get In Touch</h2>
      <p>If you have any questions, suggestions, or require assistance regarding the information provided on our website, we are here to help. Whether you want to report an inaccurate menu price, request the removal of copyrighted material, or discuss advertising opportunities, please reach out to us.</p>
      
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> admin@applebees-menus.us</li>
        <li><strong>Response Time:</strong> We aim to respond to all legitimate inquiries within 48-72 business hours.</li>
      </ul>

      <h2>DMCA & Copyright Takedown Requests</h2>
      <p>We respect the intellectual property rights of others. If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this site, please send a formal DMCA takedown notice to our email address provided above. Ensure your notice includes your contact information, a description of the copyrighted work, and the exact URL where the alleged infringement occurs.</p>

      <h2>Data Deletion Requests (CCPA / GDPR)</h2>
      <p>If you are a resident of California or the European Union and wish to exercise your right to have your personal data deleted from our analytics logs, please email us with the subject line "Data Deletion Request".</p>
    </section>
  );
}
