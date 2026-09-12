import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import { getBlogBySlug, blogs } from '@/data/blogs';
import { PUBLISHER_BIO, SITE_NAME, SITE_URL } from '@/data/site';
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

  const pageTitle = blog.metaTitle || blog.title;

  return {
    title: pageTitle,
    description: blog.excerpt,
    alternates: {
      canonical: `https://applebees-menus.us/blog/${blog.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: blog.excerpt,
      siteName: SITE_NAME,
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
      title: pageTitle,
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

  const graphSchema: any[] = [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${blog.slug}/#webpage`,
      url: `${SITE_URL}/blog/${blog.slug}`,
      name: blog.title,
      description: blog.excerpt,
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': `${SITE_URL}/blog/${blog.slug}/#breadcrumb`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/blog/${blog.slug}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${SITE_URL}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: blog.title,
          item: `${SITE_URL}/blog/${blog.slug}`
        }
      ]
    },
    {
      '@type': 'Article',
      '@id': `${SITE_URL}/blog/${blog.slug}/#article`,
      headline: blog.title,
      description: blog.excerpt,
      image: [blog.imageUrl.startsWith('http') ? blog.imageUrl : `${SITE_URL}${blog.imageUrl}`],
      datePublished: blog.date,
      dateModified: blog.modifiedDate,
      inLanguage: 'en-US',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/blog/${blog.slug}`
      },
      // The byline is an editorial desk, not a person, so the author is the organization itself.
      author: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/about-us`
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/web-app-manifest-512x512.png`,
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
      '@id': `${SITE_URL}/blog/${blog.slug}/#faq`,
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
            By <strong>{blog.author}</strong> &bull; Published {publishDate} &bull; Updated {modifiedDate}
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

              {/* Publisher box: an editorial desk, shown as the organization, never as a made-up person */}
              <div className={styles.authorBox}>
                <div className={styles.authorImageWrapper}>
                  <Image src={blog.authorImage} alt={`${SITE_NAME} logo`} fill sizes="90px" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorRole}>{blog.authorRole}</span>
                  <span className={styles.authorName}>{blog.author}</span>
                  <p className={styles.authorBio}>
                    {PUBLISHER_BIO}{' '}
                    <Link href="/about-us">About us</Link>
                  </p>
                </div>
              </div>
            </section>

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
