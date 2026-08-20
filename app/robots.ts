import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/', '/api/'],
    },
    sitemap: 'https://applebees-menus.us/sitemap.xml',
  };
}
