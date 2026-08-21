import { NextResponse } from 'next/server';
import { menuData } from '@/data/menu';
import { blogs } from '@/data/blogs';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

interface SitemapImage {
  loc: string;
  title: string;
  caption?: string;
}

interface PageImages {
  url: string;
  lastmod: string;
  images: SitemapImage[];
}

export async function GET() {
  const baseUrl = 'https://applebees-menus.us';

  const pagesWithImages: PageImages[] = [];

  // 1. Homepage
  pagesWithImages.push({
    url: `${baseUrl}/`,
    lastmod: '2026-08-20',
    images: [
      {
        loc: `${baseUrl}/logo.png`,
        title: "Applebee's Menu Guide Logo",
        caption: "Independent guide to Applebee's menu prices, calories, and specials"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/friends-sharing-appetizers.jpg`,
        title: "Applebee's Appetizers & Dining Experience",
        caption: "Friends sharing popular Applebee's appetizers and drinks"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/burger-lifestyle.jpg`,
        title: "Applebee's Handcrafted Cheeseburger & Classic Fries",
        caption: "Juicy handcrafted bacon cheeseburger with crispy seasoned fries"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/steaks-and-ribs-lifestyle.jpg`,
        title: "Applebee's Top Sirloin Steak & Baby Back Ribs",
        caption: "USDA Choice top sirloin steak dinner with garlic mashed potatoes and steamed broccoli"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/two-for-25-lifestyle.jpg`,
        title: "Applebee's 2 for $25 Value Meal Deal",
        caption: "Two full-size entrees and one shared appetizer for $25"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/pasta-lifestyle.jpg`,
        title: "Applebee's Chicken Penne & Alfredo Pasta",
        caption: "Creamy Four-Cheese Mac & Cheese and Three-Cheese Chicken Penne pasta"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/desserts-lifestyle.jpg`,
        title: "Applebee's Triple Chocolate Meltdown Dessert",
        caption: "Warm rich fudge-filled chocolate cake topped with vanilla ice cream and hot fudge"
      }
    ]
  });

  // 2. Main Menu Hub (/menu)
  const allCategoryImages: SitemapImage[] = [];
  menuData.forEach(cat => {
    if (cat.image) {
      allCategoryImages.push({
        loc: `${baseUrl}${cat.image}`,
        title: `Applebee's ${cat.title} Category Menu`,
        caption: `Explore the full ${cat.title} menu selection at Applebee's with updated prices and calories`
      });
    }
  });

  pagesWithImages.push({
    url: `${baseUrl}/menu`,
    lastmod: '2026-08-20',
    images: allCategoryImages
  });

  // 3. Category Pages (/menu/[slug]) with all individual menu item images
  menuData.forEach(cat => {
    const itemImages: SitemapImage[] = [];

    // Category hero image
    if (cat.image) {
      itemImages.push({
        loc: `${baseUrl}${cat.image}`,
        title: `Applebee's ${cat.title} Menu`,
        caption: `Full selection of Applebee's ${cat.title} items with verified prices and calorie counts`
      });
    }

    // Individual menu items
    cat.items.forEach(item => {
      if (item.image) {
        itemImages.push({
          loc: `${baseUrl}${item.image}`,
          title: `Applebee's ${item.name}`,
          caption: item.description 
            ? `${item.name} (${item.calories}) - ${item.description.slice(0, 150)}` 
            : `${item.name} at Applebee's - ${item.price}, ${item.calories}`
        });
      }
    });

    if (itemImages.length > 0) {
      pagesWithImages.push({
        url: `${baseUrl}/menu/${cat.slug}`,
        lastmod: '2026-08-20',
        images: itemImages
      });
    }
  });

  // 4. Specials & Deals (/specials-and-deals)
  pagesWithImages.push({
    url: `${baseUrl}/specials-and-deals`,
    lastmod: '2026-08-20',
    images: [
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-2-for-25-value-meal.webp`,
        title: "Applebee's 2 for $25 Dinner Deal",
        caption: "One appetizer and two full-size entrees including Fiesta Lime Chicken and Cheeseburgers"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/really-big-meal-deal-lifestyle.jpg`,
        title: "Applebee's Really Big Meal Deal",
        caption: "Great value bundle with burger or sandwich, fries, drink, and appetizer"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-appetizer-sampler-platter.webp`,
        title: "Applebee's Half Price Appetizers",
        caption: "Late night and afternoon happy hour half-price appetizers selection"
      }
    ]
  });

  // 5. Happy Hour (/happy-hour)
  pagesWithImages.push({
    url: `${baseUrl}/happy-hour`,
    lastmod: '2026-08-20',
    images: [
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-dollarita-house-margarita-cocktail.webp`,
        title: "Applebee's Dollarita & House Margarita",
        caption: "Legendary Applebee's cocktail specials and happy hour drinks"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-mucho-blue-hawaiian-cocktail.webp`,
        title: "Applebee's Mucho Blue Hawaiian Cocktail",
        caption: "Signature oversized 18oz Mucho cocktail with premium spirits"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-boneless-wings-honey-bbq.webp`,
        title: "Applebee's Half Price Boneless Wings",
        caption: "Crispy boneless chicken wings tossed in Honey BBQ sauce during happy hour"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-mozzarella-sticks-with-marinara.webp`,
        title: "Applebee's Mozzarella Sticks with Marinara",
        caption: "Golden-fried mozzarella cheese sticks served warm with house marinara"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-brew-pub-pretzels-beer-cheese-dip.webp`,
        title: "Applebee's Brew Pub Pretzels with Beer Cheese Dip",
        caption: "Warm soft pretzel sticks served with Blue Moon white cheddar cheese dip"
      }
    ]
  });

  // 6. Catering (/catering)
  pagesWithImages.push({
    url: `${baseUrl}/catering`,
    lastmod: '2026-08-20',
    images: [
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp`,
        title: "Applebee's Catering Party Platters",
        caption: "Large-format party platters serving 6-8 guests for events and office lunches"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-applewood-smoked-baby-back-ribs.webp`,
        title: "Applebee's Catering Rib Platter",
        caption: "Slow-cooked tender baby back ribs platter for corporate catering and parties"
      },
      {
        loc: `${baseUrl}/apple-bees-menu/applebees-three-cheese-chicken-penne-pasta.webp`,
        title: "Applebee's Catering Pasta Pan",
        caption: "Three-Cheese Chicken Penne bulk catering pan serving 6-8 people"
      }
    ]
  });

  // 7. Blog Posts (/blog/[slug])
  blogs.forEach(blog => {
    pagesWithImages.push({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastmod: blog.modifiedDate ? blog.modifiedDate.split('T')[0] : '2026-08-20',
      images: [
        {
          loc: `${baseUrl}${blog.imageUrl}`,
          title: blog.title,
          caption: blog.excerpt
        }
      ]
    });
  });

  // Escape XML special characters helper
  const xmlEscape = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  // Build the XML response
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  pagesWithImages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${xmlEscape(page.url)}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    page.images.forEach(img => {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${xmlEscape(img.loc)}</image:loc>\n`;
      xml += `      <image:title>${xmlEscape(img.title)}</image:title>\n`;
      if (img.caption) {
        xml += `      <image:caption>${xmlEscape(img.caption)}</image:caption>\n`;
      }
      xml += `    </image:image>\n`;
    });
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}
