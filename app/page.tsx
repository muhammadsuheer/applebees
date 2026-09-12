import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickAnswerTable from '@/components/QuickAnswerTable';
import DealsPromo from '@/components/DealsPromo';
import MenuGrid from '@/components/MenuGrid';
import HappyHourSection from '@/components/HappyHourSection';
import { 
  DrinksAndCocktailsSection,
  NutritionAndCaloriesSection,
  HowToOrderSection,
  MethodologySection
} from '@/components/ContentSections';
import LocationPromo from '@/components/LocationPromo';
import Top10Favorites from '@/components/Top10Favorites';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import sectionStyles from '@/components/ContentSections.module.css';
import { SITE_NAME, SITE_URL, SITE_EMAIL, PRICES_LAST_VERIFIED } from '@/data/site';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://applebees-menus.us/#website",
        "url": "https://applebees-menus.us/",
        "name": SITE_NAME,
        "description": "Applebee's menu prices, calories and allergens for all 88 items, published independently.",
        "dateModified": PRICES_LAST_VERIFIED,
        "publisher": {
          "@id": "https://applebees-menus.us/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://applebees-menus.us/#organization",
        "name": SITE_NAME,
        "url": "https://applebees-menus.us/",
        "logo": {
          "@type": "ImageObject",
          "name": `${SITE_NAME} logo`,
          "inLanguage": "en-US",
          "@id": "https://applebees-menus.us/#logo",
          "url": `${SITE_URL}/web-app-manifest-512x512.png`,
          "contentUrl": `${SITE_URL}/web-app-manifest-512x512.png`,
          "width": 512,
          "height": 512,
          "caption": SITE_NAME
        },
        "image": {
          "@id": "https://applebees-menus.us/#logo"
        },
        "email": SITE_EMAIL,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "corrections",
          "email": SITE_EMAIL,
          "url": `${SITE_URL}/contact-us`
        },
        "description": "Independent publisher of Applebee's price, calorie and allergen reference tables. Not affiliated with Applebee's or Dine Brands."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://applebees-menus.us/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://applebees-menus.us/"
          }
        ]
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <QuickAnswerTable />
      <DealsPromo />
      <Top10Favorites />
      <MenuGrid />
      <HappyHourSection />
      <DrinksAndCocktailsSection />
      <NutritionAndCaloriesSection />
      <HowToOrderSection />
      <LocationPromo />
      <section className={sectionStyles.section} id="guides">
        <h2>Applebee&apos;s Guides Worth Reading</h2>
        <ul>
          {blogs.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}><strong>{post.title}</strong></Link>. {post.excerpt}
            </li>
          ))}
        </ul>
      </section>
      <FAQSection />
      <MethodologySection />
      <Footer />
    </main>
  );
}
