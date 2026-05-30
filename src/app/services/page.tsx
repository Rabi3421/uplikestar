import React from 'react';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/app/components/ServicesSection';
import SEOContentSection from '@/app/components/SEOContentSection';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Services | UpLikeStar',
  description:
    'Explore UpLikeStar services including website development, custom software development, inventory systems, ERP CRM solutions, e-commerce development, and business automation.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | UpLikeStar',
    description:
      'Explore website development, custom software, inventory systems, ERP CRM, e-commerce, and automation services from UpLikeStar.',
    url: `${siteUrl}/services`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | UpLikeStar',
    description:
      'Explore website development, custom software, inventory systems, ERP CRM, e-commerce, and automation services from UpLikeStar.',
    images: [siteConfig.ogImage],
  },
};

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'UpLikeStar',
    url: `${siteUrl}/services`,
    description:
      'Service overview page for UpLikeStar covering websites, custom software, ERP CRM, e-commerce, inventory systems, and automation.',
  };

  return (
    <main className="relative overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E]/95 via-[#1B1464]/80 to-[#0D0D1A]/90" />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-700 uppercase tracking-widest">Our Services</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-800 leading-[1.05] tracking-tight text-white mb-6">
              Digital Services Built for Real Business Growth
            </h1>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl">
              Explore dedicated service pages for website development, custom software, inventory systems, ERP CRM,
              e-commerce, and business automation solutions from UpLikeStar.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <SEOContentSection />
      <Footer />
    </main>
  );
}
