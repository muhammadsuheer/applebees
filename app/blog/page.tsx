import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { blogs } from '@/data/blogs';
import styles from './page.module.css';
import heroStyles from '@/components/LegalHero.module.css';

export const metadata: Metadata = {
  title: 'Blog & News | Applebee\'s Menu Info',
  description: 'Read our latest guides, news, and tips about Applebee\'s menu items, discounts, and secret menus.',
  alternates: {
    canonical: 'https://applebees-menus.us/blog',
  },
  openGraph: {
    siteName: "Applebee's Menu Information",
    images: [
      {
        url: '/og/og-blog-secret-menu.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-blog-secret-menu.webp'],
  }
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog & News | Applebee's Menu Info",
    "description": "Read our latest guides, news, and tips about Applebee's menu items, discounts, and secret menus.",
    "url": "https://applebees-menus.us/blog"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />
      
      <section className={heroStyles.hero}>
        <h1>Blog & Guides</h1>
        <p>Insights, nutrition tips, and insider guides on how to get the most out of your next meal.</p>
      </section>

      <section className={styles.blogContainer}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} style={{ textDecoration: 'none' }}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  {/* Using standard img for simplicity and robust external URL handling without config */}
                  <Image src={blog.imageUrl} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>{blog.date} • By {blog.author}</div>
                  <h2 className={styles.title}>{blog.title}</h2>
                  <p className={styles.excerpt}>{blog.excerpt}</p>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
