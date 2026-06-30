import { MetadataRoute } from 'next';
import { siteUrl } from '@/app/seo';
import { servicePages } from '@/app/services/servicePages';
import { staticPages } from '@/app/staticPages';

const TODAY = new Date('2026-06-30');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/testimonials`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: TODAY,
      changeFrequency: 'monthly' as const,
      priority: page.slug === 'about' ? 0.9
        : page.slug === 'industries' ? 0.85
        : page.slug === 'faq' ? 0.8
        : page.slug === 'case-studies' ? 0.6
        : 0.5,
    })),
    ...servicePages.map((service) => ({
      url: `${siteUrl}${service.path}`,
      lastModified: TODAY,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ];
}
