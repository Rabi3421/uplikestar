import React from 'react';
import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Testimonials | UpLikeStar',
  description:
    'Read testimonials from UpLikeStar clients across e-commerce, inventory management, dashboard systems, and digital transformation projects.',
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Testimonials | UpLikeStar',
    description:
      'Read testimonials from UpLikeStar clients across e-commerce, inventory management, dashboard systems, and digital transformation projects.',
    url: `${siteUrl}/testimonials`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | UpLikeStar',
    description:
      'Read testimonials from UpLikeStar clients across e-commerce, inventory management, dashboard systems, and digital transformation projects.',
    images: [siteConfig.ogImage],
  },
};

export default function TestimonialsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'UpLikeStar Testimonials',
    url: `${siteUrl}/testimonials`,
    description: 'Testimonials and client feedback for UpLikeStar.',
  };

  return (
    <main className="relative overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
