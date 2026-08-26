import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/components/LegalHero.module.css';
import { menuData } from '@/data/menu';
import { blogs } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'HTML Sitemap | Applebee\'s Menu Info',
  description: 'Complete HTML sitemap of all pages on the Applebee\'s Menu Info website.',
  alternates: {
    canonical: 'https://applebees-menus.us/sitemap',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Applebee's Menu Information",
    images: [
      {
        url: '/og/og-sitemap.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-sitemap.webp'],
  }
};

export default function HTMLSitemapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HTML Sitemap | Applebee's Menu Info",
    "description": "Complete HTML sitemap of all pages on the Applebee's Menu Info website.",
    "url": "https://applebees-menus.us/sitemap"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Breadcrumb items={[{ label: 'Sitemap', href: '/sitemap' }]} />
      
      <section className={styles.hero}>
        <h1>HTML Sitemap</h1>
        <p>A complete index of all pages to help you navigate our site.</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', lineHeight: '1.8' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          
          <div>
            <h2 style={{ fontSize: '24px', borderBottom: '2px solid #c8102e', paddingBottom: '10px', marginBottom: '15px' }}>Main Pages</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Full Menu</Link></li>
              <li><Link href="/specials-and-deals">Specials & Deals</Link></li>
              <li><Link href="/happy-hour">Happy Hour</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/operating-hours">Operating Hours</Link></li>
              <li><Link href="/takeout">Takeout</Link></li>
              <li><Link href="/delivery">Delivery</Link></li>
              <li><Link href="/catering">Catering</Link></li>
              <li><Link href="/nutrition">Nutrition Facts</Link></li>
              <li><Link href="/gift-card-deals">Gift Card Deals</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog & News</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '24px', borderBottom: '2px solid #c8102e', paddingBottom: '10px', marginBottom: '15px' }}>Menu Categories</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {menuData.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/menu/${cat.slug}`}>{cat.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '24px', borderBottom: '2px solid #c8102e', paddingBottom: '10px', marginBottom: '15px' }}>Blog Posts</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {blogs.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>

            <h2 style={{ fontSize: '24px', borderBottom: '2px solid #c8102e', paddingBottom: '10px', marginBottom: '15px', marginTop: '40px' }}>Legal & Utility</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
