import React from 'react';

import { siteConfig } from '@/app/seo';
import AppIcon from '@/components/ui/AppIcon';
import AppLogo from '@/components/ui/AppLogo';

const serviceLinks = [
  { label: 'Website Development', href: '/services/website-development' },
  { label: 'Custom Software', href: '/services/custom-software-development' },
  { label: 'Inventory Systems', href: '/services/inventory-management-systems' },
  { label: 'Business Automation', href: '/services/business-automation' },
  { label: 'ERP / CRM Solutions', href: '/services/erp-crm-solutions' },
  { label: 'E-commerce Development', href: '/services/ecommerce-development' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries', href: '/industries' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

const contactLinks = [
  {
    icon: 'PhoneIcon',
    label: 'Call',
    value: siteConfig.phone,
    href: 'tel:+911204001234',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: 'MapPinIcon',
    label: 'Office',
    value: 'Sector 63, Noida, Uttar Pradesh',
    href: '/contact',
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-10 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-hero rounded-[32px] p-8 md:p-10 mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-accent text-xs font-700 uppercase tracking-[0.24em] mb-3">Ready To Build</p>
            <h2 className="text-3xl md:text-4xl font-800 text-white mb-3">
              Need a reliable technology partner for your next project?
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Speak with UpLikeStar about websites, software, ERP CRM platforms, inventory systems,
              e-commerce, and automation solutions tailored to your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="btn-primary px-7 py-3.5 rounded-full text-sm font-600 inline-flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <AppIcon name="ArrowRightIcon" size={16} className="text-white" />
            </a>
            <a
              href="/services"
              className="btn-outline px-7 py-3.5 rounded-full text-sm font-600 inline-flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-10 py-6">
          <div className="space-y-5 max-w-sm">
            <a href="/" aria-label="UpLikeStar home" className="flex items-center gap-3">
              <AppLogo
                src="/assets/images/app_logo_dark.png"
                width={254}
                height={64}
                imageClassName="h-16 w-auto"
              />
            </a>

            <p className="text-muted-foreground text-sm leading-7">
              UpLikeStar delivers smart, affordable, and customized digital
              solutions for businesses that need websites, software, automation, and operational clarity.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '80+', label: 'Clients Served' },
                { value: '6+', label: 'Years of Delivery' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm">
                  <p className="text-foreground text-xl font-800">{item.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-700 text-sm uppercase tracking-[0.2em] mb-5">Services</h3>
            <div className="space-y-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-700 text-sm uppercase tracking-[0.2em] mb-5">Company</h3>
            <div className="space-y-3 mb-6">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <h3 className="text-foreground font-700 text-sm uppercase tracking-[0.2em] mb-4">Legal</h3>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-700 text-sm uppercase tracking-[0.2em] mb-5">Contact</h3>
            <div className="space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm hover:border-primary/40 hover:shadow-card-hover transition-all"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <AppIcon
                      name={item.icon as Parameters<typeof AppIcon>[0]['name']}
                      size={18}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-700 mb-1">{item.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            &copy; 2026 UpLikeStar. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
            <span>Noida, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
