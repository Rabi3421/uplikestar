import React from 'react';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import Icon from '@/components/ui/AppIcon';
import { servicePages } from '@/app/services/servicePages';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Contact RNP Tech Solutions | Get Free Demo for Your Business',
  description:
    'Contact RNP Tech Solutions to get a free demo of our professional website and business management system. We serve salons, schools, clinics, pharmacies, restaurants, gyms, and other local businesses.',
  keywords: [
    'contact RNP Tech Solutions',
    'get free demo business website India',
    'local business website consultation',
    'business management system free trial India',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact RNP Tech Solutions | Get Free Demo',
    description:
      'Get a free demo of our professional website and business management system for your local business. No commitment required.',
    url: `${siteUrl}/contact`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RNP Tech Solutions | Get Free Demo',
    description:
      'Get a free demo of our professional website and business management system for your local business.',
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: 'Contact RNP Tech Solutions',
        url: `${siteUrl}/contact`,
        description:
          'Contact RNP Tech Solutions for a free demo of our professional website and business management system for local businesses.',
      },
      {
        '@type': 'Organization',
        name: siteConfig.legalName,
        url: siteUrl,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          ...siteConfig.address,
        },
      },
    ],
  };

  return (
    <main className="relative overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Header />

      <section className="relative overflow-hidden bg-gradient-hero px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E]/95 via-[#1B1464]/80 to-[#0D0D1A]/90" />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-700 uppercase tracking-widest">Contact RNP Tech Solutions</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-800 leading-[1.05] tracking-tight text-white mb-6">
              Let&apos;s Build Your Business Digital System
            </h1>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10">
              Tell us about your business and we will suggest the right website and management solution for you. Free demo available — no commitment required.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                { icon: 'PhoneIcon', label: 'Call Us', value: siteConfig.phone },
                { icon: 'EnvelopeIcon', label: 'Email', value: siteConfig.email },
                { icon: 'ChatBubbleLeftIcon', label: 'WhatsApp', value: 'Chat with us' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-3xl p-5">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent mb-3" />
                  <p className="text-white text-sm font-700 mb-1">{item.label}</p>
                  <p className="text-white/65 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">We Help These Businesses</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-6">
              Whether you run a salon, school, clinic, or any local business — we have a solution for you
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              RNP Tech Solutions creates and sets up professional websites and business management systems for local businesses across India. We configure your website and dashboard with your business details, services, contact information, and WhatsApp integration — ready to receive enquiries from day one.
            </p>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-800 text-foreground mb-5">Our Services</h3>
            <div className="space-y-4">
              {servicePages.map((service) => (
                <a key={service.slug} href={service.path} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <Icon name="ArrowRightIcon" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-700">{service.shortLabel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{service.metaDescription}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
