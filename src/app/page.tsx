import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import PortfolioSection from '@/app/components/PortfolioSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import CTABanner from '@/app/components/CTABanner';
import ContactSection from '@/app/components/ContactSection';
import AnimationProvider from '@/app/components/AnimationProvider';
import SEOContentSection from '@/app/components/SEOContentSection';
import { faqItems, siteConfig, siteUrl, targetKeywords } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Software Development Company in Noida for Websites, Automation and Business Software',
  description:
    'UpLikeStar is a software development company in Noida offering custom software, website development, inventory management systems, ERP/CRM solutions, and business automation services.',
  keywords: targetKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Software Development Company in Noida | UpLikeStar',
    description:
      'Explore custom software development, website development, inventory systems, ERP/CRM platforms, and business automation solutions for growing businesses.',
    url: siteUrl,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Noida | UpLikeStar',
    description:
      'Custom software, business websites, inventory systems, ERP/CRM, and automation solutions for modern businesses.',
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'UpLikeStar - Software Development Company in Noida',
        url: siteUrl,
        description: siteConfig.shortDescription,
        isPartOf: {
          '@type': 'WebSite',
          url: siteUrl,
          name: siteConfig.legalName,
        },
        about: [
          'Software Development',
          'Website Development',
          'Inventory Management Software',
          'ERP Development',
          'CRM Development',
          'Business Automation',
          'Digital Transformation',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="noise-overlay" aria-hidden="true" />
      <AnimationProvider />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TestimonialsSection />
      <CTABanner />
      <SEOContentSection />
      <ContactSection />
      <Footer />
    </main>
  );
}