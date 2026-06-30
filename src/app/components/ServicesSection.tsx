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

const services: Service[] = [
  {
    icon: 'GlobeAltIcon',
    title: 'Professional Business Website',
    description:
      'We create and set up a professional website for your business with your name, services, contact details, WhatsApp button, enquiry form, and mobile-friendly design.',
    tags: ['Mobile-Friendly', 'WhatsApp Integration', 'Enquiry Form', 'SEO Ready'],
    href: '/services/website-development',
    colSpan: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: 'CpuChipIcon',
    title: 'Industry-Specific Management Software',
    description:
      'We provide business management software tailored to your industry — salon, school, clinic, pharmacy, gym, and more — so the dashboard fits exactly how your business works.',
    tags: ['Salon', 'School', 'Clinic', 'Pharmacy'],
    href: '/services/custom-software-development',
    rowSpan: 'lg:row-span-2',
  },
  {
    icon: 'InboxArrowDownIcon',
    title: 'Enquiry & Booking System',
    description:
      'Never miss a customer enquiry. Our system captures all enquiries from your website and delivers them to your dashboard for easy tracking and follow-up.',
    tags: ['Enquiry Capture', 'Booking Requests', 'Status Tracking'],
    href: '/services/business-automation',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Customer & Staff Management',
    description:
      'Maintain organized customer records, service history, and staff profiles in one place — so your business coordination is simple and efficient.',
    tags: ['Customer Records', 'Staff Profiles', 'Visit History'],
    href: '/services/inventory-management-systems',
  },
  {
    icon: 'RectangleStackIcon',
    title: 'Role-Based Dashboard Access',
    description:
      'Give each team member the right dashboard. Owner, staff, receptionist, manager, accountant, and customer roles — each with relevant access and information.',
    tags: ['Owner Access', 'Staff Access', 'Customer Portal'],
    href: '/services/erp-crm-solutions',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Monthly Support & Maintenance',
    description:
      'We provide monthly maintenance, updates, and technical support for your website and dashboard — so you can focus on your business without worrying about technical issues.',
    tags: ['Monthly Plan', 'Updates', 'Tech Support'],
    href: '/services/ecommerce-development',
  },
  {
    icon: 'MagnifyingGlassIcon',
    title: 'SEO & Online Presence Support',
    description:
      'We help your business improve search visibility, set up Google Business Profile, and maintain a strong online presence that brings more customers to your door.',
    tags: ['Google Business', 'Local SEO', 'Visibility'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 md:px-12 py-24 md:py-32 bg-[#F0F2FF] reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">What We Provide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground">
              Complete Digital Solutions
              <br />
              <span className="text-gradient-primary">for Your Business</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
            From website setup and enquiry management to role-based dashboards and monthly support — we provide everything your business needs to go digital and grow.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-group">
          {services.map((service, i) => (
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
                        ? 'bg-white/15 text-white/80' : 'bg-muted text-muted-foreground'
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

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-3 border border-border rounded-full pl-6 pr-2 py-2 hover:border-accent transition-all group"
          >
            <span className="text-sm font-600 text-foreground">View All Services</span>
            <span className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="ArrowUpRightIcon" size={16} className="text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
