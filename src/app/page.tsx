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
  title: 'RNP Tech Solutions | Professional Websites & Business Management Systems for Local Businesses',
  description:
    'RNP Tech Solutions provides professional websites and business management systems for salons, schools, clinics, pharmacies, restaurants, gyms, and other local businesses. Affordable monthly plans, free demo available.',
  keywords: targetKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RNP Tech Solutions | Professional Websites & Business Management Systems for Local Businesses',
    description:
      'Professional websites and business management systems for salons, schools, clinics, pharmacies, and other local businesses. Affordable monthly plans, free demo available.',
    url: siteUrl,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RNP Tech Solutions | Professional Websites & Business Management Systems for Local Businesses',
    description:
      'Professional websites and business management systems for salons, schools, clinics, pharmacies, and other local businesses. Affordable monthly plans, free demo available.',
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'RNP Tech Solutions - Professional Websites and Business Management Systems for Local Businesses',
        url: siteUrl,
        description: siteConfig.shortDescription,
        isPartOf: {
          '@type': 'WebSite',
          url: siteUrl,
          name: siteConfig.legalName,
        },
        about: [
          'Business Website Development',
          'Business Management Software',
          'Enquiry and Booking System',
          'Role-Based Dashboards',
          'Customer and Staff Management',
          'Monthly Support and Maintenance',
          'Local Business Digital Solutions',
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
