import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'],
    },
    sitemap: [
      'https://applebees-menus.us/sitemap.xml',
      'https://applebees-menus.us/image-sitemap.xml',
    ],
  };
}
