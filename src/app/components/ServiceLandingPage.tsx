import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import type { ServicePageData } from '@/app/services/servicePages';
import { servicePages } from '@/app/services/servicePages';

interface ServiceLandingPageProps {
  service: ServicePageData;
}

export default function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const relatedPages = servicePages.filter((item) => item.slug !== service.slug);

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E]/95 via-[#1B1464]/80 to-[#0D0D1A]/90" />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div
          className="absolute top-24 right-12 w-[320px] h-[320px] opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 65%)', filter: 'blur(70px)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-700 uppercase tracking-widest">{service.primaryKeyword}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-800 leading-[1.05] tracking-tight text-white mb-6">
              {service.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10">
              {service.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="btn-primary px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2"
              >
                <span>Request a Consultation</span>
                <Icon name="ArrowRightIcon" size={18} className="text-white" />
              </a>
              <a
                href="/#services"
                className="btn-outline px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2"
              >
                <span>Explore All Services</span>
                <Icon name="Squares2X2Icon" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-6">
              {service.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {service.intro}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Businesses searching for <strong className="text-foreground font-700">{service.primaryKeyword}</strong> often need a partner that understands both technology and business operations. UpLikeStar focuses on practical, scalable delivery so your investment creates measurable efficiency, better visibility, and long-term value.
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border p-8 shadow-card-hover">
            <h3 className="text-2xl font-800 text-foreground mb-5">Keyword Focus</h3>
            <div className="flex flex-wrap gap-3">
              {[service.primaryKeyword, ...service.secondaryKeywords].map((keyword) => (
                <span key={keyword} className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-600">
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {[
                'Business-first discovery',
                'Custom implementation roadmap',
                'Transparent delivery and support',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-accent mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-[#F0F2FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-800 text-foreground mb-6">What We Deliver</h2>
            <div className="space-y-4">
              {service.deliverables.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-hero rounded-3xl p-8 shadow-premium">
            <h2 className="text-3xl md:text-4xl font-800 text-white mb-6">Business Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <Icon name="SparklesIcon" size={18} className="text-accent mt-0.5" />
                  <p className="text-white/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-5">
              A Clear Delivery Path
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We keep every engagement practical and transparent, with a process built around discovery, implementation, and business outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={step} className="bg-card border border-border rounded-3xl p-6 shadow-sm flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-800 shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-700 text-foreground mb-2">Step {index + 1}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-[#F0F2FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Industry Fit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-6">
            Ideal for Teams That Need Practical Technology
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.industries.map((industry) => (
              <span key={industry} className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-600 shadow-sm">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="bg-card border border-border rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-700 text-foreground mb-3">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-800 text-white mb-3">Need help choosing the right solution?</h2>
            <p className="text-white/65 text-base md:text-lg max-w-2xl">
              Talk to UpLikeStar about your current process, growth goals, and operational bottlenecks. We will recommend the most practical digital solution for your business.
            </p>
          </div>
          <a href="/#contact" className="btn-primary px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2 whitespace-nowrap">
            <span>Book a Free Consultation</span>
            <Icon name="ArrowRightIcon" size={18} className="text-white" />
          </a>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Related Services</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedPages.map((item) => (
              <a
                key={item.slug}
                href={item.path}
                className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-card-hover transition-all"
              >
                <h3 className="text-xl font-700 text-foreground mb-2">{item.shortLabel}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.metaDescription}</p>
                <span className="inline-flex items-center gap-2 text-primary font-600 text-sm">
                  Explore service
                  <Icon name="ArrowRightIcon" size={16} className="text-primary" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
