import React from 'react';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { siteConfig, siteUrl } from '@/app/seo';

export const metadata: Metadata = {
  title: 'Pricing | RNP Tech Solutions — Affordable Monthly Plans for Local Businesses',
  description:
    'RNP Tech Solutions offers affordable monthly plans for local businesses. Essential Digital Plan at ₹3,000/month and Complete Business Management Plan at ₹4,000/month. Free demo available.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | RNP Tech Solutions',
    description:
      'Affordable monthly plans for local businesses. Professional website, dashboard, enquiry system, and monthly support — starting at ₹3,000/month.',
    url: `${siteUrl}/pricing`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | RNP Tech Solutions',
    description:
      'Affordable monthly plans for local businesses starting at ₹3,000/month. Free demo available.',
    images: [siteConfig.ogImage],
  },
};

const essentialFeatures = [
  'Professional business website',
  'Mobile-friendly design',
  'Contact and enquiry form',
  'WhatsApp button integration',
  'Business profile setup',
  'Owner dashboard',
  'Customer / user dashboard',
  'Staff access',
  'Basic enquiry and booking management',
  'Basic monthly support',
];

const completeFeatures = [
  'Everything in Essential Digital Plan',
  'Advanced dashboard access',
  'Multiple role-based dashboards',
  'Staff, receptionist, manager, and accountant roles depending on business type',
  'Customer, booking, enquiry, and operations management',
  'Reports and business insights',
  'Priority monthly support',
  'Better operational control and visibility',
];

const pricingNotes = [
  'Free demo available for all businesses.',
  '1-month free trial may be available for selected businesses.',
  'Pricing may vary based on business category, selected features, custom requirements, and support needs.',
  'Taxes, third-party services, domain, hosting, paid ads, SMS, WhatsApp API, or external tools may be charged separately where applicable.',
];

export default function PricingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pricing — RNP Tech Solutions',
    url: `${siteUrl}/pricing`,
    description:
      'Affordable monthly plans for local businesses. Professional website, dashboard, and management system starting at ₹3,000/month.',
  };

  return (
    <main className="relative overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E]/95 via-[#1B1464]/80 to-[#0D0D1A]/90" />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div
          className="absolute top-24 right-12 w-[320px] h-[320px] opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 65%)', filter: 'blur(70px)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-700 uppercase tracking-widest">Pricing</span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-800 leading-[1.05] tracking-tight text-white mb-6">
            Simple Monthly Plans for Growing Businesses
          </h1>
          <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl mx-auto">
            Choose a digital solution that fits your business needs. We provide website setup, dashboard access, support, and maintenance through affordable monthly plans.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Essential Plan */}
            <div className="bg-card border border-border rounded-[32px] p-8 md:p-10 shadow-card-hover flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 mb-4">
                  <span className="text-xs font-700 text-muted-foreground uppercase tracking-widest">Essential Digital Plan</span>
                </div>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-800 text-foreground">₹3,000</span>
                  <span className="text-muted-foreground text-base font-500 mb-1.5">/month</span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Best for small and growing businesses that need a professional website, enquiry system, WhatsApp integration, and basic dashboard access.
                </p>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {essentialFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="btn-outline w-full py-4 rounded-xl text-base font-600 inline-flex items-center justify-center gap-2"
              >
                <span>Start with Essential Plan</span>
                <Icon name="ArrowRightIcon" size={18} />
              </a>
            </div>

            {/* Complete Plan */}
            <div className="bg-gradient-hero border border-white/15 rounded-[32px] p-8 md:p-10 shadow-2xl flex flex-col relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-20"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)', filter: 'blur(40px)' }}
                aria-hidden="true"
              />
              <div className="mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-3 py-1 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-700 text-accent uppercase tracking-widest">Complete Business Management Plan</span>
                </div>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-800 text-white">₹4,000</span>
                  <span className="text-white/60 text-base font-500 mb-1.5">/month</span>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  Best for businesses that need a website plus a complete management dashboard with multiple role-based access for owner, staff, and customers.
                </p>
              </div>

              <div className="flex-1 space-y-3 mb-8 relative z-10">
                {completeFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-accent mt-0.5 shrink-0" />
                    <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="btn-primary w-full py-4 rounded-xl text-base font-600 inline-flex items-center justify-center gap-2 relative z-10"
              >
                <span>Choose Complete Plan</span>
                <Icon name="ArrowRightIcon" size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Pricing Notes */}
          <div className="bg-card border border-border rounded-[28px] p-8 shadow-sm mb-12">
            <h2 className="text-xl font-800 text-foreground mb-5">Important Pricing Notes</h2>
            <div className="space-y-3">
              {pricingNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <Icon name="InformationCircleIcon" size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Free Demo Banner */}
          <div className="bg-gradient-hero rounded-[32px] p-8 md:p-12 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-20"
              style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)', filter: 'blur(50px)' }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-3">
                  Not sure which plan is right for you?
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  Get a free demo first. We will show you how your business website and dashboard will look and work — completely free, with no commitment or obligation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="/contact"
                  className="btn-primary px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2"
                >
                  <span>Get Free Demo</span>
                  <Icon name="ArrowRightIcon" size={18} className="text-white" />
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20pricing%20and%20plans.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2"
                >
                  <Icon name="ChatBubbleLeftIcon" size={18} />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 bg-[#F0F2FF]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Pricing FAQs</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: 'Is there a free demo available?',
                a: 'Yes. A free demo is available for all businesses. We will show you how your website and business dashboard will look and work before you make any commitment.',
              },
              {
                q: 'Is there a free trial?',
                a: 'A 1-month free trial may be available for selected businesses, allowing you to use the system and evaluate its value before subscribing to a paid monthly plan.',
              },
              {
                q: 'What does the monthly fee include?',
                a: 'The monthly fee includes your professional website, business management dashboard, enquiry system, WhatsApp integration, dashboard access based on your plan, and monthly support and maintenance.',
              },
              {
                q: 'Are there any setup or joining fees?',
                a: 'Setup and onboarding fees may apply depending on your business requirements and the plan you choose. This will be clearly communicated before any work begins.',
              },
              {
                q: 'Can I cancel my subscription?',
                a: 'Yes. You can cancel your subscription by informing us in writing before the next billing cycle. Please refer to our Refund and Cancellation Policy for full details.',
              },
              {
                q: 'What if I need custom features?',
                a: 'Custom features beyond the standard plan may be available with additional charges, which will be discussed and agreed upon before implementation.',
              },
            ].map(({ q, a }) => (
              <article key={q} className="bg-card border border-border rounded-[28px] p-6 shadow-sm">
                <h3 className="text-lg font-700 text-foreground mb-3">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
