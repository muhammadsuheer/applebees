import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuGrid from '@/components/MenuGrid';
import FullMenu from '@/components/FullMenu';
import HappyHourSection from '@/components/HappyHourSection';
import AboutSection from '@/components/AboutSection';
import { 
  UniqueSection, 
  HistorySection, 
  ExperienceSection, 
  HowToOrderSection, 
  FoodQualitySection, 
  CareersSection, 
  ConclusionSection 
} from '@/components/ContentSections';
import OperatingHours from '@/components/OperatingHours';
import LocationPromo from '@/components/LocationPromo';
import DealsPromo from '@/components/DealsPromo';
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
        "name": "Applebee's Menu",
        "description": "Comprehensive Applebee's menu with prices, calories, and specials.",
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
        "name": "Applebee's Menu Information",
        "url": "https://applebees-menus.us/",
        "logo": {
          "@type": "ImageObject",
          "name": "Applebee's Logo",
          "inLanguage": "en-US",
          "@id": "https://applebees-menus.us/#logo",
          "url": "https://applebees-menus.us/logo.png",
          "contentUrl": "https://applebees-menus.us/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Applebee's Menu Information"
        },
        "image": {
          "@id": "https://applebees-menus.us/#logo"
        }
      },
      {
        "@type": "Restaurant",
        "@id": "https://applebees-menus.us/#restaurant",
        "name": "Applebee's Grill + Bar",
        "image": "https://applebees-menus.us/hero.jpg",
        "url": "https://applebees-menus.us/",
        "telephone": "1-888-592-7753",
        "servesCuisine": ["American", "Bar & Grill", "Steakhouse", "Burgers"],
        "priceRange": "$$",
        "menu": "https://applebees-menus.us/menu",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "450 N Brand Blvd",
          "addressLocality": "Glendale",
          "addressRegion": "CA",
          "postalCode": "91203",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 34.1501,
          "longitude": -118.2551
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
            "opens": "11:00",
            "closes": "24:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday", "Saturday"],
            "opens": "11:00",
            "closes": "01:00"
          }
        ]
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
      <DealsPromo />
      <Top10Favorites />
      <MenuGrid />
      <UniqueSection />
      <FullMenu />
      <HappyHourSection />
      <HowToOrderSection />
      <LocationPromo />
      <ExperienceSection />
      <FoodQualitySection />
      <OperatingHours />
      <FAQSection />
      <HistorySection />
      <CareersSection />
      <ConclusionSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
