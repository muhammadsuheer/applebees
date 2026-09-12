import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { menuData } from '@/data/menu';
import { blogs } from '@/data/blogs';
import { SITE_URL, PRICES_LAST_VERIFIED } from '@/data/site';

// Real modification times, not a hand-written ladder of sequential dates.
// Google stops trusting lastmod from sites whose lastmod proves unreliable,
// and "Aug 1, Aug 2, Aug 3..." is about as unreliable as it gets.
function mtime(...relative: string[]): Date {
  for (const rel of relative) {
    try {
      const full = path.join(/*turbopackIgnore: true*/ process.cwd(), rel);
      if (fs.existsSync(full)) return fs.statSync(full).mtime;
    } catch {
      // fall through to the next candidate
    }
  }
  return new Date(PRICES_LAST_VERIFIED);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    route: string,
    priority: number,
    sources: string[],
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${route}`,
    lastModified: mtime(...sources),
    priority,
  });

  const staticPages: MetadataRoute.Sitemap = [
    page('/', 1.0, ['components/Hero.tsx', 'app/page.tsx']),
    page('/menu', 1.0, ['data/menu.ts', 'app/menu/page.tsx']),
    page('/happy-hour', 0.9, ['app/happy-hour/page.tsx']),
    page('/specials-and-deals', 0.9, ['app/specials-and-deals/page.tsx']),
    page('/nutrition', 0.9, ['data/nutrition.ts', 'app/nutrition/page.tsx']),
    page('/allergen-menu', 0.9, ['app/allergen-menu/page.tsx']),
    page('/catering', 0.8, ['app/catering/page.tsx']),
    page('/operating-hours', 0.8, ['app/operating-hours/page.tsx']),
    page('/locations', 0.8, ['data/locations.ts', 'app/locations/page.tsx']),
    page('/takeout', 0.7, ['app/takeout/page.tsx']),
    page('/delivery', 0.7, ['app/delivery/page.tsx']),
    page('/gift-card-deals', 0.7, ['app/gift-card-deals/page.tsx']),
    page('/careers', 0.7, ['app/careers/page.tsx']),
    page('/blog', 0.7, ['data/blogs.ts']),
    page('/about-us', 0.6, ['app/about-us/page.tsx']),
    page('/sitemap', 0.4, ['app/sitemap/page.tsx']),
    page('/contact-us', 0.4, ['app/contact-us/page.tsx']),
    page('/disclaimer', 0.3, ['app/disclaimer/page.tsx']),
    page('/terms-and-conditions', 0.3, ['app/terms-and-conditions/page.tsx']),
    page('/privacy-policy', 0.3, ['components/LegalSections.tsx', 'app/privacy-policy/page.tsx']),
    page('/cookies', 0.3, ['components/LegalSections.tsx', 'app/cookies/page.tsx']),
  ];

  const menuPages: MetadataRoute.Sitemap = menuData.map((category) => ({
    url: `${SITE_URL}/menu/${category.slug}`,
    lastModified: mtime(`data/content/${category.slug}.md`, 'data/menu.ts'),
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.modifiedDate),
    priority: 0.6,
  }));

  return [...staticPages, ...menuPages, ...blogPages];
}
