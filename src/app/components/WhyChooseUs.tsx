import React from 'react';
import Icon from '@/components/ui/AppIcon';

const reasons = [
  {
    icon: 'BuildingStorefrontIcon',
    title: 'Built for Local Businesses',
    description: 'We understand the challenges of running a local business. Our solutions are designed specifically for salons, schools, clinics, pharmacies, restaurants, gyms, and other service businesses.',
    stat: '10+',
    statLabel: 'business categories',
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Affordable Monthly Plans',
    description: 'No heavy upfront payment. Our affordable monthly plans let you start with low risk and continue only when the system is genuinely useful for your business.',
    stat: '₹3,000',
    statLabel: 'starting plan',
  },
  {
    icon: 'RocketLaunchIcon',
    title: 'Free Demo & Free Trial',
    description: 'See the system before committing. We offer a free demo and a 1-month free trial for selected businesses so you can experience the value before signing up.',
    stat: '1 Month',
    statLabel: 'free trial*',
  },
  {
    icon: 'HeartIcon',
    title: 'Dedicated Monthly Support',
    description: 'We stay with you as a monthly support partner — maintaining your website, updating your dashboard, and resolving any issues so your business always runs smoothly.',
    stat: 'Monthly',
    statLabel: 'support included',
  },
  {
    icon: 'AdjustmentsHorizontalIcon',
    title: 'Personalized for Your Business',
    description: 'Your website and dashboard are set up with your business name, services, contact details, WhatsApp, and branding — not a generic system, but one configured for your business.',
    stat: '100%',
    statLabel: 'personalized setup',
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'More Enquiries, Better Management',
    description: 'Go from no online presence to a professional website that brings enquiries — and manage those enquiries, customers, and staff from one simple dashboard.',
    stat: 'More',
    statLabel: 'enquiries & visibility',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="px-6 md:px-12 py-24 md:py-32 bg-gradient-hero relative overflow-hidden reveal-on-scroll section-reveal">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
        style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
        style={{ background: 'radial-gradient(circle, #6B21A8 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-xs font-700 uppercase tracking-widest">Why RNP Tech Solutions</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-white">
            Why Local Business Owners
            <br />
            <span className="text-gradient-cyan">Choose Us</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-group">
          {reasons.map((reason) => (
            <div key={reason.title} className="stagger-child why-card rounded-3xl p-7 opacity-100">
              {/* Icon + stat row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Icon
                    name={reason.icon as Parameters<typeof Icon>[0]['name']}
                    size={22}
                    className="text-white"
                  />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-800 text-gradient-primary">{reason.stat}</p>
                  <p className="text-muted-foreground text-xs font-500">{reason.statLabel}</p>
                </div>
              </div>

              <h3 className="text-lg font-700 text-foreground mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-xs mt-8">*1-month free trial available for selected businesses. Terms apply.</p>
      </div>
    </section>
  );
}
