import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { menuData } from '@/data/menu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import CommentSection from '@/components/CommentSection';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const category = menuData.find(c => c.slug === p.slug);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  let title = `Applebee's ${category.title} Menu with Prices and Calories (2026)`;
  let description = `Explore Applebee's ${category.title} menu with verified prices, calories, and nutritional facts. Complete 2026 guide to all ${category.title.toLowerCase()} selections.`;

  try {
    const filePath = path.join(process.cwd(), 'data', 'content', `${p.slug}.md`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      if (data.title) title = data.title;
      if (data.description) description = data.description;
    }
  } catch (e) {
    // Fallback
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://applebees-menus.us/menu/${p.slug}`,
    }
  };
}

export async function generateStaticParams() {
  return menuData.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const p = await params;
  const category = menuData.find(c => c.slug === p.slug);

  if (!category) {
    notFound();
  }

  let contentHtml = '';
  let pageTitle = `Applebee's ${category.title} Menu with Prices and Calories`;
  const faqs: { question: string; answer: string }[] = [];

  try {
    const filePath = path.join(process.cwd(), 'data', 'content', `${p.slug}.md`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      if (data.h1) pageTitle = data.h1;
      else if (data.title) pageTitle = data.title;
      contentHtml = await marked.parse(content);

      // Extract FAQs for Schema
      const faqSection = content.split(/## Frequently Asked Questions/i)[1];
      if (faqSection) {
        const nextH2 = faqSection.split(/\n## /)[0];
        const faqBlocks = nextH2.split(/\n### /).slice(1);
        faqBlocks.forEach(block => {
          const lines = block.trim().split('\n');
          const question = lines[0].replace(/\?+$/, '?').trim();
          const answer = lines.slice(1).join(' ').trim();
          if (question && answer) {
            faqs.push({ question, answer });
          }
        });
      }
    } else {
      contentHtml = `<p>Detailed information about ${category.title} is coming soon.</p>`;
    }
  } catch (error) {
    console.error('Error loading markdown content:', error);
  }

  // Sibling categories for contextual linking
  const otherCategories = menuData.filter(c => c.slug !== p.slug).slice(0, 4);

  const schemaData: Record<string, any> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://applebees-menus.us/menu/${p.slug}/#webpage`,
        "url": `https://applebees-menus.us/menu/${p.slug}`,
        "name": `Applebee's ${category.title} Menu with Prices and Calories`,
        "description": `Comprehensive guide to Applebee's ${category.title} with updated prices, calories, and nutrition.`,
        "breadcrumb": {
          "@id": `https://applebees-menus.us/menu/${p.slug}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://applebees-menus.us/menu/${p.slug}/#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": category.title,
            "item": `https://applebees-menus.us/menu/${p.slug}`
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": `Applebee's ${category.title} Items`,
        "itemListElement": category.items.map((item, idx) => ({
          "@type": "MenuItem",
          "position": idx + 1,
          "name": item.name,
          "description": item.description || item.tableDescription,
          "nutrition": {
            "@type": "NutritionInformation",
            "calories": item.calories
          }
        }))
      }
    ]
  };

  if (faqs.length > 0) {
    schemaData["@graph"].push({
      "@type": "FAQPage",
      "@id": `https://applebees-menus.us/menu/${p.slug}/#faq`,
      "name": `Applebee's ${category.title} Frequently Asked Questions`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className={styles.main}>
        <Header />
        <Breadcrumb items={[
          { label: 'Menu', href: '/menu' },
          { label: category.title, href: `/menu/${p.slug}` }
        ]} />

        <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${category.image || '/apple-bees-menu/applebees-new-menu-items-2026-category.webp'})` }}>
          <div className={styles.heroOverlay}>
            <h1>{pageTitle}</h1>
          </div>
        </section>

        <div className={styles.container}>
          <article className={styles.content}>
            <div 
              className={styles.markdownBody}
              dangerouslySetInnerHTML={{ __html: contentHtml }} 
            />

            <CommentSection />
          </article>
          
          <Sidebar currentSlug={p.slug} pageType="menu" />
        </div>

        <Footer />
      </main>
    </>
  );
}
