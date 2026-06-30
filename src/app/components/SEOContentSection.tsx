import React from 'react';

import { faqItems } from '@/app/seo';
import { servicePages } from '@/app/services/servicePages';

const focusAreas = [
  'Professional website setup for salons, schools, clinics, pharmacies, restaurants, gyms, and other local businesses',
  'Industry-specific business management software with dashboards configured for your business type',
  'Enquiry and booking management system to capture and track every customer contact',
  'Role-based dashboard access for owners, staff, receptionists, managers, accountants, and customers',
  'Customer and staff management tools to maintain organized records and improve team coordination',
  'Monthly website support and maintenance so your system always runs smoothly',
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
                What We Provide
              </span>
            </div>

            <h2 id="seo-content-heading" className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-6">
              Websites and Business Management Systems
              <br />
              <span className="text-gradient-primary">for Local Businesses Across India</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                RNP Tech Solutions is a digital solutions company helping local and small business owners go online,
                get more enquiries, and manage daily operations through professional websites and easy-to-use
                business management systems. We work with salons, schools, clinics, pharmacies, restaurants, gyms,
                retail shops, travel agencies, real estate agencies, and other service-based businesses.
              </p>
              <p>
                We create and set up a personalized website and management system for your business — configured
                with your business name, services, contact details, WhatsApp button, enquiry form, and dashboard
                access based on your business category. We handle the complete setup so you can start receiving
                enquiries and managing your business digitally from day one.
              </p>
              <p>
                Our affordable monthly plans, free demo, and 1-month free trial for selected businesses make it
                easy to start without risk. Whether you are a salon owner, school manager, clinic operator, or any
                local business owner, RNP Tech Solutions provides a professional digital solution that fits your
                business needs and budget.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-card-hover">
            <h3 className="text-2xl font-800 text-foreground mb-5">Our Digital Solutions Include</h3>
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
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Our Services</span>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
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
                Request a free demo on the contact page
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
