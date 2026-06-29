import React from 'react';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import Icon from '@/components/ui/AppIcon';
import { servicePages } from '@/app/services/servicePages';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Contact RNP Tech Solutions | Software, Website and Automation Consultation',
  description:
    'Contact RNP Tech Solutions for website development, custom software, ERP CRM solutions, inventory systems, e-commerce development, and business automation consultation.',
  keywords: [
    'contact software development company',
    'contact website development company Noida',
    'software consultation Noida',
    'business automation consultation India',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact RNP Tech Solutions',
    description:
      'Speak with RNP Tech Solutions about custom software, websites, ERP CRM systems, inventory management, e-commerce, and automation solutions.',
    url: `${siteUrl}/contact`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RNP Tech Solutions',
    description:
      'Book a consultation for software development, websites, ERP CRM, inventory systems, e-commerce, and automation.',
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
          'Contact RNP Tech Solutions for software development, website development, ERP CRM solutions, e-commerce, inventory systems, and business automation services.',
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
              Talk to RNP Tech Solutions About Software, Websites, ERP, E-commerce, and Automation
            </h1>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10">
              Share your business goals, current bottlenecks, or project scope. We will guide you toward the most practical digital solution and respond with a tailored plan.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                { icon: 'PhoneIcon', label: 'Call Us', value: siteConfig.phone },
                { icon: 'EnvelopeIcon', label: 'Email', value: siteConfig.email },
                { icon: 'MapPinIcon', label: 'Office', value: 'Noida, Uttar Pradesh' },
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
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Why Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-6">
              A Clear Starting Point for Your Next Digital Project
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Whether you need a website development company in Noida, a custom software development partner, an ERP CRM solution, an inventory management system, an e-commerce platform, or business automation services, RNP Tech Solutions helps you define the right scope before development begins.
            </p>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-800 text-foreground mb-5">Popular Consultation Topics</h3>
            <div className="space-y-4">
              {servicePages.map((service) => (
                <a key={service.slug} href={service.path} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <Icon name="ArrowRightIcon" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-700">{service.shortLabel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.metaDescription}</p>
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
