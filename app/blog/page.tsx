import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { blogs } from '@/data/blogs';
import styles from './page.module.css';
import heroStyles from '@/components/LegalHero.module.css';
import sectionStyles from '@/components/ContentSections.module.css';

const TITLE = "Applebee's Guides & Tips | Applebees Menu Guide";
const DESCRIPTION =
  "Friendly, practical Applebee's guides: how to get the most from the 2 for $25, ordering tricks that actually work, eating gluten-free, and what's happening with the Dollarita.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://applebees-menus.us/blog',
  },
  openGraph: {
    siteName: "Applebees Menu Guide",
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

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": TITLE,
    "description": DESCRIPTION,
    "url": "https://applebees-menus.us/blog"
  };

  const posts = [...blogs].sort((a, b) => b.modifiedDate.localeCompare(a.modifiedDate));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />

      <section className={heroStyles.hero}>
        <h1>Applebee&apos;s Guides and Tips</h1>
        <p>
          The menu tells you what Applebee&apos;s serves. These guides help with the rest: which deal to pick,
          what to ask for, and how to eat well there without overthinking it.
        </p>
      </section>

      <section className={styles.blogContainer}>
        <div className={styles.grid}>
          {posts.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} style={{ textDecoration: 'none' }}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={blog.imageUrl} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    Updated <time dateTime={blog.modifiedDate}>{formatDate(blog.modifiedDate)}</time>
                  </div>
                  <h2 className={styles.title}>{blog.title}</h2>
                  <p className={styles.excerpt}>{blog.excerpt}</p>
                  <span className={styles.readMore}>Read the guide →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className={sectionStyles.section} aria-labelledby="where-to-start">
        <h2 id="where-to-start">Not Sure Where to Start?</h2>
        <p>
          If you&apos;re eating with someone else tonight, start with the{' '}
          <Link href="/blog/applebees-2-for-25-menu-value-guide">2 for $25 guide</Link>. It&apos;s the deal most tables
          end up ordering, and a couple of smart picks make a real difference to what you get for the money.
        </p>
        <p>
          Eating solo or just want a better plate? The{' '}
          <Link href="/blog/applebees-secret-menu-hacks-revealed">ordering guide</Link> covers the simple requests that
          change a meal, like ordering sauce on the side or swapping your fries.
        </p>
        <p>
          Avoiding gluten is trickier at a chain kitchen, so the{' '}
          <Link href="/blog/gluten-free-guide-applebees-menu">gluten-free guide</Link> explains what to order and what to
          say to your server. And if you&apos;re wondering whether the $1 margarita is back, the{' '}
          <Link href="/blog/legendary-dollarita-monthly-drink-specials">Dollarita guide</Link> has the latest.
        </p>
        <p>
          Looking for prices rather than advice? The <Link href="/menu">full menu with prices</Link> and{' '}
          <Link href="/specials-and-deals">current deals</Link> pages have everything laid out.
        </p>
      </section>

      <Footer />
    </main>
  );
}
