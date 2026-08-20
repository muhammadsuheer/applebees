import { MetadataRoute } from 'next';
import { menuData } from '@/data/menu';
import { blogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://applebees-menus.us';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-08-01T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/happy-hour`,
      lastModified: new Date('2026-08-02T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catering`,
      lastModified: new Date('2026-08-03T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date('2026-08-04T12:00:00Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/takeout`,
      lastModified: new Date('2026-08-05T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/delivery`,
      lastModified: new Date('2026-08-06T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/operating-hours`,
      lastModified: new Date('2026-08-07T12:00:00Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date('2026-08-08T12:00:00Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nutrition`,
      lastModified: new Date('2026-08-09T12:00:00Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/specials-and-deals`,
      lastModified: new Date('2026-08-10T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gift-card-deals`,
      lastModified: new Date('2026-08-11T12:00:00Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date('2026-08-12T12:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-08-13T12:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2026-08-14T12:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-08-15T12:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date('2026-08-16T12:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date('2026-08-17T12:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date('2026-08-18T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-08-18T12:00:00Z'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const menuPages: MetadataRoute.Sitemap = menuData.map((category) => ({
    url: `${baseUrl}/menu/${category.slug}`,
    lastModified: new Date('2026-08-18T12:00:00Z'),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.modifiedDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...menuPages, ...blogPages];
}
