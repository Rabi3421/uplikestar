import { MetadataRoute } from 'next';
import { siteUrl } from '@/app/seo';
import { servicePages } from '@/app/services/servicePages';
import { staticPages } from '@/app/staticPages';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date('2026-06-30'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/testimonials`,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'monthly' as const,
      priority: page.slug === 'about' ? 0.9 : 0.6,
    })),
    ...servicePages.map((service) => ({
      url: `${siteUrl}${service.path}`,
      lastModified: new Date('2026-04-19'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ];
}