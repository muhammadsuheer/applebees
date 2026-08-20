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

  return {
    title: `${category.title} Menu | Prices & Calories | Applebee's`,
    description: `Explore the complete ${category.title} menu at Applebee's. See high-quality images, calorie counts, and estimated prices for every item.`,
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
  let title = category.title;

  try {
    const filePath = path.join(process.cwd(), 'data', 'content', `${p.slug}.md`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      title = data.title || category.title;
      // Parse markdown to HTML
      contentHtml = await marked.parse(content);
    } else {
      // Fallback if the MD file is not yet generated
      contentHtml = `<p>Detailed information about ${category.title} is coming soon.</p>`;
    }
  } catch (error) {
    console.error('Error loading markdown content:', error);
  }

  // Get 4 other categories for the related section
  const otherCategories = menuData.filter(c => c.slug !== p.slug).slice(0, 4);

  return (
    <main className={styles.main}>
      <Header />
      <Breadcrumb items={[
        { label: 'Menu', href: '/menu' },
        { label: category.title, href: `/menu/${p.slug}` }
      ]} />

      <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.image || '/apple-bees-menu/applebees-new-menu-items-2026-category.webp'})` }}>
        <div className={styles.heroOverlay}>
          <h1>{title}</h1>
        </div>
      </section>

      <div className={styles.container}>
        <article className={styles.content}>
          <div 
            className={styles.markdownBody}
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
          />

          <div className={styles.itemsSection}>
            <h2 className={styles.itemsHeading}>Explore {category.title} Items & Prices</h2>
            <div className={styles.itemsGrid}>
              {category.items.map((item) => (
                <div key={item.id} className={styles.itemCard}>
                  <div className={styles.itemImageWrapper}>
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={`Applebee's ${item.name}`} 
                        loading="lazy" 
                      />
                    )}
                  </div>
                  <div className={styles.itemCardContent}>
                    <h3>{item.name}</h3>
                    <div className={styles.itemMeta}>
                      <strong>Price: {item.price}</strong> <span className={styles.divider}>|</span> {item.calories}
                    </div>
                    {item.description && (
                      <p className={styles.itemDescription}>{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.relatedCategoriesSection}>
            <h2 className={styles.relatedHeading}>More from Applebee's Menu</h2>
            <div className={styles.relatedCategoriesGrid}>
              {otherCategories.map((cat) => (
                <Link key={cat.slug} href={`/menu/${cat.slug}`} className={styles.relatedCategoryCard}>
                  <h3>{cat.title}</h3>
                  <span className={styles.relatedCategoryLink}>View Menu & Prices &rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          <CommentSection />
        </article>
        
        <Sidebar currentSlug={p.slug} pageType="menu" />
      </div>

      <Footer />
    </main>
  );
}
