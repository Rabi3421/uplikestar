import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  colSpan?: string;
  rowSpan?: string;
  accent?: boolean;
}

// BENTO AUDIT:
// 7 cards total: Custom Software(cs-2), Website Dev(rs-2), Inventory, ERP/CRM, E-commerce, Automation, Tech Support
// Row 1: [col-1,2: Custom Software cs-2] [col-3: Website Dev rs-2]
// Row 2: [col-1: Inventory] [col-2: ERP/CRM] [col-3: OCCUPIED Website Dev]
// Row 3: [col-1: E-commerce] [col-2: Automation] [col-3: Tech Support]
// Placed 7/7 ✓

const services: Service[] = [
  {
    icon: 'CodeBracketIcon',
    title: 'Custom Software Development',
    description:
      'End-to-end software built precisely for your business logic — scalable architecture, clean code, and long-term maintainability. React, Node.js, Python, and more.',
    tags: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    href: '/services/custom-software-development',
    colSpan: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Website Development',
    description:
      'Pixel-perfect websites with blazing performance — from corporate portals to marketing sites. SEO-optimised, mobile-first, and conversion-focused.',
    tags: ['Next.js', 'WordPress', 'Webflow'],
    href: '/services/website-development',
    rowSpan: 'lg:row-span-2',
  },
  {
    icon: 'CubeIcon',
    title: 'Inventory Management Systems',
    description:
      'Real-time stock tracking, multi-warehouse support, purchase orders, and analytics — purpose-built for your supply chain.',
    tags: ['Real-time', 'Multi-warehouse', 'Analytics'],
    href: '/services/inventory-management-systems',
  },
  {
    icon: 'ChartBarIcon',
    title: 'ERP / CRM Solutions',
    description:
      'Unified business management: sales pipeline, HR, finance, procurement — in one powerful platform tailored to your workflows.',
    tags: ['ERP', 'CRM', 'Finance', 'HR'],
    href: '/services/erp-crm-solutions',
  },
  {
    icon: 'ShoppingCartIcon',
    title: 'E-commerce Platforms',
    description:
      'Full-featured online stores with payment gateways, vendor management, and analytics dashboards built for scale.',
    tags: ['Multi-vendor', 'Payments', 'Admin Panel'],
    href: '/services/ecommerce-development',
  },
  {
    icon: 'BoltIcon',
    title: 'Business Automation',
    description:
      'Eliminate manual tasks with intelligent automation — workflow triggers, API integrations, scheduled jobs, and AI-powered processes.',
    tags: ['Workflow', 'API', 'AI', 'Scheduling'],
    href: '/services/business-automation',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Technical Support & Maintenance',
    description:
      'Proactive monitoring, bug fixes, security patches, and feature upgrades — your dedicated tech team, always on.',
    tags: ['24/7 Support', 'SLA', 'Security'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F0F2FF] reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">What We Build</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground">
              Software Development Services
              <br />
              <span className="text-gradient-primary">for Growing Businesses</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
            From website development and inventory software to ERP, CRM, and business automation, we build systems that improve efficiency and support scale.
          </p>
        </div>

        {/* Bento Grid */}
        {/* Desktop: grid-cols-3 | Mobile: grid-cols-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-group">
          {services.map((service, i) => (
            /* STEP 4 JSX comment: card index={i} colSpan={service.colSpan} rowSpan={service.rowSpan} */
            <div
              key={service.title}
              className={`stagger-child service-card rounded-3xl p-7 opacity-100 ${service.colSpan || ''} ${service.rowSpan || ''} ${service.accent ? 'bg-gradient-to-br from-primary to-secondary' : ''}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${service.accent ? 'bg-white/15' : 'bg-gradient-primary'}`}
              >
                <Icon
                  name={service.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  className="text-white"
                />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-700 mb-3 ${service.accent ? 'text-white' : 'text-foreground'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${service.accent ? 'text-white/70' : 'text-muted-foreground'}`}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-600 px-3 py-1 rounded-full ${
                      service.accent
                        ? 'bg-white/15 text-white/80' :'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-6 flex justify-end">
                {service.href ? (
                  <a
                    href={service.href}
                    aria-label={`Explore ${service.title}`}
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      service.accent ? 'bg-white/20 text-white' : 'bg-gradient-primary text-white'
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon name="ArrowUpRightIcon" size={16} className="text-white" />
                  </a>
                ) : (
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      service.accent ? 'bg-white/20 text-white' : 'bg-gradient-primary text-white'
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon name="ArrowUpRightIcon" size={16} className="text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}