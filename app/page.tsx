import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickAnswerTable from '@/components/QuickAnswerTable';
import DealsPromo from '@/components/DealsPromo';
import MenuGrid from '@/components/MenuGrid';
import FullMenu from '@/components/FullMenu';
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

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://applebees-menus.us/#website",
        "url": "https://applebees-menus.us/",
        "name": "Applebee's Menu with Prices & Calories (2026)",
        "description": "Comprehensive Applebee's menu with prices, calories, and specials.",
        "dateModified": "2026-08-01T00:00:00+00:00",
        "publisher": {
          "@id": "https://applebees-menus.us/#organization"
        },
        "potentialAction": [{
          "@type": "SearchAction",
          "name": "Site Search",
          "target": "https://applebees-menus.us/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://applebees-menus.us/#organization",
        "name": "Applebee's Menu Guide",
        "url": "https://applebees-menus.us/",
        "logo": {
          "@type": "ImageObject",
          "name": "Applebee's Menu Guide Logo",
          "inLanguage": "en-US",
          "@id": "https://applebees-menus.us/#logo",
          "url": "https://applebees-menus.us/logo.png",
          "contentUrl": "https://applebees-menus.us/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Applebee's Menu Guide"
        },
        "image": {
          "@id": "https://applebees-menus.us/#logo"
        }
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
      <FullMenu />
      <HappyHourSection />
      <DrinksAndCocktailsSection />
      <NutritionAndCaloriesSection />
      <HowToOrderSection />
      <LocationPromo />
      <FAQSection />
      <MethodologySection />
      <Footer />
    </main>
  );
}
