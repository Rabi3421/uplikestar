import React from 'react';
import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PortfolioSection from '@/app/components/PortfolioSection';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Portfolio | UpLikeStar',
  description:
    'View UpLikeStar portfolio projects across website development, custom software, inventory systems, e-commerce, and business intelligence solutions.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio | UpLikeStar',
    description:
      'View UpLikeStar portfolio projects across website development, custom software, inventory systems, e-commerce, and business intelligence solutions.',
    url: `${siteUrl}/portfolio`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | UpLikeStar',
    description:
      'View UpLikeStar portfolio projects across website development, custom software, inventory systems, e-commerce, and business intelligence solutions.',
    images: [siteConfig.ogImage],
  },
};

export default function PortfolioPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'UpLikeStar Portfolio',
    url: `${siteUrl}/portfolio`,
    description:
      'Portfolio page showcasing website, software, inventory, e-commerce, and dashboard projects by UpLikeStar.',
  };

  return (
    <main className="relative overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
