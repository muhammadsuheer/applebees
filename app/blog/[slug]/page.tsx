import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
    alternates: {
      canonical: `https://applebees-menus.us/blog/${blog.slug}`,
    },
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

  // Generate comprehensive @graph Schema for E-E-A-T, AEO & GEO
  const graphSchema: any[] = [
    {
      '@type': 'WebPage',
      '@id': `https://applebees-menus.us/blog/${blog.slug}/#webpage`,
      url: `https://applebees-menus.us/blog/${blog.slug}`,
      name: blog.title,
      description: blog.excerpt,
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': `https://applebees-menus.us/blog/${blog.slug}/#breadcrumb`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://applebees-menus.us/blog/${blog.slug}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://applebees-menus.us/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://applebees-menus.us/blog'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: blog.title,
          item: `https://applebees-menus.us/blog/${blog.slug}`
        }
      ]
    },
    {
      '@type': 'NewsArticle',
      '@id': `https://applebees-menus.us/blog/${blog.slug}/#article`,
      headline: blog.title,
      description: blog.excerpt,
      image: [blog.imageUrl.startsWith('http') ? blog.imageUrl : `https://applebees-menus.us${blog.imageUrl}`],
      datePublished: blog.date,
      dateModified: blog.modifiedDate,
      inLanguage: 'en-US',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://applebees-menus.us/blog/${blog.slug}`
      },
      author: [
        {
          '@type': 'Person',
          name: blog.author,
          jobTitle: blog.authorRole,
          image: `https://applebees-menus.us${blog.authorImage}`,
          url: 'https://applebees-menus.us/about-us'
        }
      ],
      publisher: {
        '@type': 'Organization',
        name: "Applebee's Menu Information",
        url: 'https://applebees-menus.us/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://applebees-menus.us/apple-icon.png',
          width: 512,
          height: 512
        }
      }
    }
  ];

  // Add FAQPage Schema if structured FAQs exist for AEO / Voice Search
  if (blog.faqs && blog.faqs.length > 0) {
    graphSchema.push({
      '@type': 'FAQPage',
      '@id': `https://applebees-menus.us/blog/${blog.slug}/#faq`,
      mainEntity: blog.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graphSchema
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
                <Image src={blog.imageUrl} alt={blog.title} priority width={1200} height={630} />
              </div>
              
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              
              {/* E-E-A-T Author Box */}
              <div className={styles.authorBox}>
                <div className={styles.authorImageWrapper}>
                  <Image src={blog.authorImage} alt={`Photo of ${blog.author}`} fill sizes="90px" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorRole}>{blog.authorRole}</span>
                  <span className={styles.authorName}>{blog.author}</span>
                  <p className={styles.authorBio}>
                    The Applebee&apos;s Menu Editorial Team is an independent collective of culinary researchers, restaurant pricing analysts, and nutrition specialists dedicated to verifying menu updates, happy hour specials, and dining deals across nationwide locations.
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
                          <Image src={related.imageUrl} alt={related.title} fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
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
