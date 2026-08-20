import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import MenuGrid from '@/components/MenuGrid';
import FullMenu from '@/components/FullMenu';
import { menuData } from '@/data/menu';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Visual Menu | Browse All Categories & Prices',
  description: 'Explore the complete massive 5,000-word visual menu. Browse appetizers, steaks, chicken, seafood, salads, desserts, and signature cocktails with high-quality images and estimated prices.',
  alternates: {
    canonical: 'https://applebees-menus.us/menu/',
  }
};

export default function MenuPage() {
  // Generate robust Menu schema
  const menuSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Menu",
        "@id": "https://applebees-menus.us/menu/#menu",
        "name": "Applebee's Full Menu",
        "description": "The complete Applebee's menu featuring steaks, burgers, chicken, seafood, and appetizers.",
        "mainEntityOfPage": "https://applebees-menus.us/menu",
        "hasMenuSection": menuData.map(category => ({
          "@type": "MenuSection",
          "name": category.title,
          "hasMenuItem": category.items.map(item => {
            const menuItemData: any = {
              "@type": "MenuItem",
              "name": item.name,
              "description": item.description || `Applebee's ${item.name}`,
              "offers": {
                "@type": "Offer",
                "name": `${item.name} Offer`,
                "price": item.price.replace('$', ''),
                "priceCurrency": "USD"
              },
              "nutrition": {
                "@type": "NutritionInformation",
                "name": `${item.name} Nutrition`,
                "calories": item.calories
              }
            };
            
            if (item.image) {
              menuItemData.image = "https://applebees-menus.us" + item.image;
            }
            
            return menuItemData;
          })
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://applebees-menus.us/menu/#breadcrumb",
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
            "name": "Menu",
            "item": "https://applebees-menus.us/menu"
          }
        ]
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Menu', href: '/menu' }]} />
      
      <section className={styles.hero}>
        <h1>The Complete Visual Menu</h1>
        <p>
          Browse all categories with high-quality visual representations, detailed descriptions, and estimated pricing. Scroll down to explore our massive 5,000-word deep dive into every menu item.
        </p>
      </section>

      {/* The Category Grid for quick jumping */}
      <MenuGrid />

      {/* The Massive 5,000-word detailed text blocks */}
      <FullMenu />

      <Footer />
    </main>
  );
}
