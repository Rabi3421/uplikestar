import React from 'react';
import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Testimonials | RNP Tech Solutions',
  description:
    'Read testimonials from RNP Tech Solutions clients across e-commerce, inventory management, dashboard systems, and digital transformation projects.',
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Testimonials | RNP Tech Solutions',
    description:
      'Read testimonials from RNP Tech Solutions clients across e-commerce, inventory management, dashboard systems, and digital transformation projects.',
    url: `${siteUrl}/testimonials`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | RNP Tech Solutions',
    description:
      'Read testimonials from RNP Tech Solutions clients across e-commerce, inventory management, dashboard systems, and digital transformation projects.',
    images: [siteConfig.ogImage],
  },
};

export default function TestimonialsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'RNP Tech Solutions Testimonials',
    url: `${siteUrl}/testimonials`,
    description: 'Testimonials and client feedback for RNP Tech Solutions.',
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
