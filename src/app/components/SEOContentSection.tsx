import React from 'react';

import { faqItems } from '@/app/seo';
import { servicePages } from '@/app/services/servicePages';

const focusAreas = [
  'Custom software development for business workflows and internal operations',
  'Website development for service businesses, startups, and growing brands',
  'Inventory management software for stock, warehouse, and purchase tracking',
  'Business automation solutions to eliminate manual tasks and reduce turnaround time',
  'ERP and CRM development to centralize sales, finance, HR, and service operations',
  'Digital transformation consulting for companies moving from manual to modern systems',
];

export default function SEOContentSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-background reveal-on-scroll section-reveal" aria-labelledby="seo-content-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">
                SEO Focus Areas
              </span>
            </div>

            <h2 id="seo-content-heading" className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-6">
              Software Development, Website Development,
              <br />
              <span className="text-gradient-primary">Inventory Systems and Business Automation</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                RNP Tech Solutions is a software development company in Noida helping businesses adopt smart,
                affordable, and customized digital solutions. We work with startups, local businesses, and established
                companies that need reliable technology to improve productivity, streamline operations, and scale sustainably.
              </p>
              <p>
                Our team designs and develops business websites, custom software, inventory management systems, ERP and CRM
                platforms, and automation tools tailored to real operational needs. Instead of generic templates, we build
                systems that fit your workflow, team structure, and long-term growth goals.
              </p>
              <p>
                If you are searching for a website development company in Noida, a custom software development company in
                India, or a trusted partner for business automation services, RNP Tech Solutions provides strategy, design,
                development, deployment, and long-term support under one roof.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-card-hover">
            <h3 className="text-2xl font-800 text-foreground mb-5">What Businesses Hire Us For</h3>
            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div key={area} className="flex gap-3 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Service Pages</span>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {servicePages.map((service) => (
                <a
                  key={service.slug}
                  href={service.path}
                  className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-card-hover transition-all"
                >
                  <h3 className="text-lg font-700 text-foreground mb-2">{service.shortLabel}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.metaDescription}</p>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-600 text-sm hover:opacity-80 transition-opacity"
              >
                Speak with our team on the dedicated contact page
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Frequently Asked Questions</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqItems.map((item) => (
              <article key={item.question} className="bg-card border border-border rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-700 text-foreground mb-3">{item.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
