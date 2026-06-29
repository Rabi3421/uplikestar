import React from 'react';
import Icon from '@/components/ui/AppIcon';

const reasons = [
  {
    icon: 'StarIcon',
    title: 'Industry Standard Quality',
    description: 'Every project follows strict code reviews, CI/CD pipelines, and QA testing before delivery.',
    stat: '99%',
    statLabel: 'defect-free delivery',
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Affordable & Scalable',
    description: 'Enterprise-grade solutions at pricing designed for Indian businesses — no compromises.',
    stat: '40%',
    statLabel: 'below market rate',
  },
  {
    icon: 'RocketLaunchIcon',
    title: 'Fast Project Delivery',
    description: 'Agile sprints, daily standups, and milestone-based delivery. No missed deadlines.',
    stat: '2x',
    statLabel: 'faster than average',
  },
  {
    icon: 'HeartIcon',
    title: 'Dedicated Support',
    description: 'A dedicated account manager and technical lead assigned to every project from day one.',
    stat: '24/7',
    statLabel: 'availability',
  },
  {
    icon: 'CpuChipIcon',
    title: 'Modern Tech Stack',
    description: 'React, Next.js, Node.js, Python, PostgreSQL, AWS — always using industry-current tools.',
    stat: '15+',
    statLabel: 'technologies mastered',
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'Custom Built for Growth',
    description: 'Architecture designed to scale from 100 to 1 million users — built for your future, not just today.',
    stat: '10x',
    statLabel: 'scale-ready systems',
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
            Why Businesses
            <br />
            <span className="text-gradient-cyan">Choose Us</span>
          </h2>
        </div>

        {/* Grid — 3 cols desktop, 2 tablet, 1 mobile */}
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
      </div>
    </section>
  );
}
