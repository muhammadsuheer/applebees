import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import CommentSection from '@/components/CommentSection';
import { getBlogBySlug, blogs } from '@/data/blogs';
import styles from './../page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for SEO so all blogs are statically built at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Dynamically generate metadata (title/description/OG/Twitter) based on the blog slug
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://applebees-menus.us/blog/${blog.slug}`,
      siteName: "Applebee's Menu Information",
      images: [
        {
          url: blog.imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.modifiedDate,
      authors: [blog.author],
    },
    twitter: {
      card: 'summary_large_image', // Crucial for Discover / Twitter visibility
      title: blog.title,
      description: blog.excerpt,
      images: [blog.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Format dates for human reading
  const publishDate = new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const modifiedDate = new Date(blog.modifiedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Generate JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: blog.title,
    image: [blog.imageUrl],
    datePublished: blog.date,
    dateModified: blog.modifiedDate,
    author: [{
        '@type': 'Person',
        name: blog.author,
        jobTitle: blog.authorRole,
        url: 'https://applebees-menus.us/about-us'
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Applebees Menu Info',
      logo: {
        '@type': 'ImageObject',
        name: 'Applebee\'s Menu Logo',
        url: 'https://applebees-menus.us/logo.png' // Replace with actual logo URL when available
      }
    }
  };

  // Get related blogs (excluding current)
  const relatedBlogs = blogs.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <main>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      <Breadcrumb 
        items={[
          { label: 'Blog', href: '/blog' },
          { label: blog.title, href: `/blog/${blog.slug}` }
        ]} 
      />
      
      <article>
        <section className={styles.postHero}>
          <h1>{blog.title}</h1>
          <div className={styles.postMeta}>
            By <strong>{blog.author}</strong> &bull; Updated {modifiedDate}
          </div>
        </section>

        <div className={styles.magazineLayout}>
          {/* Main Content Column */}
          <div>
            <section className={styles.postBody}>
              {/* CRITICAL FOR GOOGLE DISCOVER: Physical Image Tag */}
              <div className={styles.featuredImage}>
                <img src={blog.imageUrl} alt={blog.title} loading="eager" width="1200" height="630" />
              </div>
              
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              
              {/* E-E-A-T Author Box */}
              <div className={styles.authorBox}>
                <div className={styles.authorImageWrapper}>
                  <img src={blog.authorImage} alt={`Photo of ${blog.author}`} />
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorRole}>{blog.authorRole}</span>
                  <span className={styles.authorName}>{blog.author}</span>
                  <p className={styles.authorBio}>
                    {blog.author} is a dedicated food and beverage editor with over 10 years of experience analyzing chain restaurant trends, menus, and nutritional data.
                  </p>
                </div>
              </div>
            </section>
            
            <CommentSection />
          </div>

          {/* Sticky Sidebar Column */}
          <Sidebar currentSlug={slug} pageType="blog" />

        </div>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className={styles.magazineLayout} style={{ marginTop: '0', paddingTop: '0' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <section className={styles.relatedSection}>
                <h3>Related Articles</h3>
                <div className={styles.relatedGrid}>
                  {relatedBlogs.map((related) => (
                    <Link href={`/blog/${related.slug}`} key={related.slug} style={{ textDecoration: 'none' }}>
                      <div className={styles.card} style={{ height: '100%' }}>
                        <div className={styles.imageWrapper}>
                          <img src={related.imageUrl} alt={related.title} />
                        </div>
                        <div className={styles.content}>
                          <div className={styles.meta}>{new Date(related.date).toLocaleDateString()}</div>
                          <h4 className={styles.title} style={{ fontSize: '18px' }}>{related.title}</h4>
                          <span className={styles.readMore}>Read Article →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
