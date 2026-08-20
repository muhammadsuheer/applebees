import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { blogs } from '@/data/blogs';
import styles from './page.module.css';
import heroStyles from '@/components/LegalHero.module.css';

export const metadata: Metadata = {
  title: 'Blog & News | Applebee\'s Menu Info',
  description: 'Read our latest guides, news, and tips about Applebee\'s menu items, discounts, and secret menus.',
};

export default function BlogIndexPage() {
  return (
    <main>
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
                  <img src={blog.imageUrl} alt={blog.title} />
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
