import RSS from 'rss';
import { blogs } from '@/data/blogs';

export async function GET() {
  const feed = new RSS({
    title: "Applebee's Menu Info Blog & News",
    description: "Read our latest guides, news, and tips about Applebee's menu items, discounts, and secret menus.",
    generator: 'RSS for Node and Next.js',
    feed_url: 'https://applebees-menus.us/feed.xml',
    site_url: 'https://applebees-menus.us',
    image_url: 'https://applebees-menus.us/apple-icon.png',
    managingEditor: 'contact@applebees-menus.us (Applebee\'s Menu Info Team)',
    webMaster: 'contact@applebees-menus.us (Applebee\'s Menu Info Team)',
    copyright: `${new Date().getFullYear()} Applebee's Menu Info`,
    language: 'en-US',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  blogs.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `https://applebees-menus.us/blog/${post.slug}`,
      guid: post.slug,
      author: post.author,
      date: post.date,
      enclosure: post.imageUrl
        ? {
            url: post.imageUrl.startsWith('http') ? post.imageUrl : `https://applebees-menus.us${post.imageUrl}`,
            type: 'image/webp',
          }
        : undefined,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
