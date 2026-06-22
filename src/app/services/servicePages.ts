import type { Metadata } from 'next';

import { siteConfig, siteUrl } from '@/app/seo';

export type ServicePageSlug =
  | 'website-development'
  | 'custom-software-development'
  | 'inventory-management-systems'
  | 'business-automation'
  | 'erp-crm-solutions'
  | 'ecommerce-development';

export interface ServicePageData {
  slug: ServicePageSlug;
  path: string;
  shortLabel: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  deliverables: string[];
  benefits: string[];
  process: string[];
  industries: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'website-development',
    path: '/services/website-development',
    shortLabel: 'Website Development',
    navLabel: 'Web Development',
    title: 'Website Development Company in Noida',
    metaTitle: 'Website Development Company in Noida | Business Website Design & Development',
    metaDescription:
      'RNP Tech Solutions is a website development company in Noida creating SEO-friendly, mobile-first, high-converting business websites for startups, local brands, and growing companies.',
    heroTitle: 'Website Development Company in Noida for Growth-Focused Businesses',
    heroSubtitle:
      'We design and develop fast, SEO-ready, mobile-first websites that build credibility, generate leads, and support long-term digital growth.',
    intro:
      'RNP Tech Solutions builds business websites that combine strong design, clean development, search-friendly structure, and conversion-focused user journeys. Whether you need a corporate website, service website, landing page system, or a scalable web presence for your brand, we create websites that perform for both users and search engines.',
    primaryKeyword: 'website development company in Noida',
    secondaryKeywords: [
      'business website development company',
      'SEO friendly website development',
      'custom website design company India',
      'responsive website development services',
    ],
    deliverables: [
      'Corporate websites and service business websites',
      'Landing pages for paid campaigns and lead generation',
      'Responsive UI design and front-end development',
      'Technical SEO structure and performance optimization',
      'CMS integration and ongoing website maintenance',
    ],
    benefits: [
      'Improve Google visibility with clean on-page and technical SEO structure',
      'Increase enquiries through clear CTAs and conversion-focused layouts',
      'Deliver fast page speed across desktop and mobile devices',
      'Present your brand professionally with modern, trustworthy design',
    ],
    process: [
      'Business discovery and website planning',
      'Information architecture and SEO content structure',
      'UI design and development sprint',
      'Performance, SEO, and launch optimization',
    ],
    industries: ['Professional Services', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Local Businesses'],
    faqs: [
      {
        question: 'Do you build SEO-friendly business websites?',
        answer:
          'Yes. Every website we build follows a search-friendly structure with fast performance, responsive design, clean metadata, and content architecture that supports SEO growth.',
      },
      {
        question: 'Can you redesign an existing business website?',
        answer:
          'Yes. We can redesign outdated websites to improve speed, mobile experience, branding, and lead generation while preserving critical business information and SEO value where possible.',
      },
    ],
  },
  {
    slug: 'custom-software-development',
    path: '/services/custom-software-development',
    shortLabel: 'Custom Software Development',
    navLabel: 'Custom Software',
    title: 'Custom Software Development Company in India',
    metaTitle: 'Custom Software Development Company in India | Tailored Business Software',
    metaDescription:
      'RNP Tech Solutions builds tailored business software, internal tools, web applications, ERP modules, and scalable digital systems for startups and growing companies across India.',
    heroTitle: 'Custom Software Development for Businesses That Need More Than Off-the-Shelf Tools',
    heroSubtitle:
      'We create tailored software that matches your workflow, reduces manual effort, and gives your team the exact tools needed to operate efficiently and scale confidently.',
    intro:
      'Our custom software development services are built for companies that need systems tailored to their processes, users, and business rules. From internal dashboards and workflow systems to client portals and operations platforms, RNP Tech Solutions develops software that solves real operational challenges with reliability and long-term flexibility.',
    primaryKeyword: 'custom software development company India',
    secondaryKeywords: [
      'business software development company',
      'custom web application development',
      'software company for small business',
      'tailored software development services',
    ],
    deliverables: [
      'Business management software and internal tools',
      'Workflow and approval systems',
      'Web applications and client portals',
      'Role-based dashboards and reporting systems',
      'API integration and scalable software architecture',
    ],
    benefits: [
      'Replace spreadsheets and disconnected tools with one streamlined platform',
      'Automate business logic around your exact operations',
      'Improve reporting, accountability, and process visibility',
      'Build a scalable foundation for future digital products and modules',
    ],
    process: [
      'Business process mapping and scope definition',
      'System architecture and UX planning',
      'Agile development with milestone reviews',
      'Testing, deployment, and long-term enhancement support',
    ],
    industries: ['Logistics', 'Distribution', 'Professional Services', 'Operations Teams', 'Education', 'Retail'],
    faqs: [
      {
        question: 'How is custom software different from ready-made software?',
        answer:
          'Custom software is built around your business process, team roles, approval flow, reporting needs, and growth plans. It avoids the compromises often required when using off-the-shelf tools.',
      },
      {
        question: 'Can you integrate custom software with our existing tools?',
        answer:
          'Yes. We can connect custom software with CRMs, accounting tools, payment gateways, communication tools, and third-party APIs depending on your workflow needs.',
      },
    ],
  },
  {
    slug: 'inventory-management-systems',
    path: '/services/inventory-management-systems',
    shortLabel: 'Inventory Management Systems',
    navLabel: 'Inventory Systems',
    title: 'Inventory Management Software Company',
    metaTitle: 'Inventory Management Software Company | Custom Inventory Systems for Businesses',
    metaDescription:
      'RNP Tech Solutions builds custom inventory management systems with stock tracking, warehouse visibility, purchase records, sales insights, and business reporting.',
    heroTitle: 'Inventory Management Systems That Reduce Errors and Improve Control',
    heroSubtitle:
      'We develop inventory software for businesses that need real-time stock visibility, smarter purchasing decisions, faster reporting, and fewer operational mistakes.',
    intro:
      'RNP Tech Solutions creates inventory management systems for businesses that need accurate stock control, streamlined warehouse operations, and better visibility across products, vendors, and sales movement. Our solutions support operational clarity for growing businesses moving beyond manual inventory management.',
    primaryKeyword: 'inventory management software company',
    secondaryKeywords: [
      'custom inventory management system',
      'stock management software for business',
      'warehouse inventory software',
      'inventory tracking system development',
    ],
    deliverables: [
      'Stock in and stock out tracking workflows',
      'Warehouse and location-wise inventory visibility',
      'Purchase, returns, and vendor management modules',
      'Low stock alerts and inventory reports',
      'Sales-linked stock deduction and audit history',
    ],
    benefits: [
      'Reduce stock mismatches and manual reporting errors',
      'Track inventory movement across warehouses or branches',
      'Plan purchasing with better stock insights and trends',
      'Improve business control through centralized inventory data',
    ],
    process: [
      'Current inventory process audit',
      'Module planning for stock, purchases, and reporting',
      'System development with role-based access',
      'Testing, data setup, and onboarding support',
    ],
    industries: ['Retail', 'Wholesale', 'Distribution', 'Manufacturing', 'Pharma', 'Multi-location Businesses'],
    faqs: [
      {
        question: 'Can your inventory management software support multiple warehouses?',
        answer:
          'Yes. We can build inventory systems with multi-warehouse or multi-location tracking, role-based access, stock movement history, and location-specific reporting.',
      },
      {
        question: 'Is the inventory software customizable for our workflow?',
        answer:
          'Yes. We tailor the system to your purchase flow, stock categories, approval rules, vendor structure, and reporting needs so it fits how your business actually operates.',
      },
    ],
  },
  {
    slug: 'business-automation',
    path: '/services/business-automation',
    shortLabel: 'Business Automation',
    navLabel: 'Automation',
    title: 'Business Automation Services in India',
    metaTitle: 'Business Automation Services in India | Workflow Automation Solutions',
    metaDescription:
      'RNP Tech Solutions provides business automation services to streamline approvals, operations, reporting, notifications, and repetitive workflows for growing businesses.',
    heroTitle: 'Business Automation Services for Faster, Smarter Operations',
    heroSubtitle:
      'We automate repetitive tasks, connect systems, and reduce delays so your team can focus on high-value work instead of manual coordination.',
    intro:
      'Our business automation services help companies reduce manual effort, improve accuracy, and speed up operations across departments. From approvals and notifications to data syncing and scheduled tasks, RNP Tech Solutions builds automation systems that improve efficiency and support digital transformation.',
    primaryKeyword: 'business automation services India',
    secondaryKeywords: [
      'workflow automation solutions',
      'small business automation solutions',
      'process automation company',
      'business process automation services',
    ],
    deliverables: [
      'Approval and workflow automation systems',
      'Notification, reminder, and escalation automation',
      'Third-party API and tool integrations',
      'Automated reporting and scheduled tasks',
      'Lead, sales, and operations workflow automation',
    ],
    benefits: [
      'Reduce repetitive work and cross-team delays',
      'Improve data accuracy and process consistency',
      'Speed up response time for customers and internal teams',
      'Scale operations without proportionally increasing manual workload',
    ],
    process: [
      'Workflow discovery and bottleneck mapping',
      'Automation logic and system integration planning',
      'Implementation and trigger testing',
      'Monitoring, refinement, and support',
    ],
    industries: ['Service Businesses', 'Operations Teams', 'Sales Teams', 'Healthcare', 'Education', 'Back-office Operations'],
    faqs: [
      {
        question: 'What kinds of business processes can be automated?',
        answer:
          'We can automate approvals, follow-ups, notifications, reporting, status updates, document movement, lead assignment, customer communication, and many other repetitive business workflows.',
      },
      {
        question: 'Do you automate workflows across multiple systems?',
        answer:
          'Yes. We can connect your website, CRM, forms, internal tools, spreadsheets, and third-party platforms to create smoother automated workflows across systems.',
      },
    ],
  },
  {
    slug: 'erp-crm-solutions',
    path: '/services/erp-crm-solutions',
    shortLabel: 'ERP / CRM Solutions',
    navLabel: 'ERP / CRM',
    title: 'ERP and CRM Development Company in India',
    metaTitle: 'ERP and CRM Development Company in India | Custom ERP CRM Solutions',
    metaDescription:
      'RNP Tech Solutions builds ERP and CRM solutions for sales, finance, procurement, service, HR, and operational visibility across growing businesses.',
    heroTitle: 'ERP and CRM Solutions for Businesses That Need One Connected Operating System',
    heroSubtitle:
      'We develop tailored ERP and CRM platforms that centralize sales, operations, finance, service, and reporting so your team can work with clarity and control.',
    intro:
      'RNP Tech Solutions builds ERP and CRM systems for businesses that need centralized data, stronger process control, and better team coordination. From lead tracking and customer management to procurement, billing, service workflows, and internal reporting, our solutions are designed to fit your business structure rather than forcing you into generic software limitations.',
    primaryKeyword: 'ERP CRM development company India',
    secondaryKeywords: [
      'custom ERP development company',
      'CRM software development company',
      'ERP CRM software for business',
      'business management software company',
    ],
    deliverables: [
      'Lead, sales, and customer management workflows',
      'Finance, billing, procurement, and operations modules',
      'Service and support process tracking',
      'Role-based dashboards and reporting visibility',
      'Custom integrations with existing business tools',
    ],
    benefits: [
      'Unify multiple business processes inside one connected platform',
      'Improve visibility across teams, approvals, and customer journeys',
      'Reduce duplicated data entry and fragmented reporting',
      'Create a scalable operational backbone for long-term growth',
    ],
    process: [
      'Department-wise workflow discovery',
      'ERP and CRM module planning',
      'Phased implementation with stakeholder reviews',
      'Deployment, onboarding, and optimization support',
    ],
    industries: ['Distribution', 'Services', 'Manufacturing', 'Sales Teams', 'Back-office Operations', 'Multi-department Businesses'],
    faqs: [
      {
        question: 'Can ERP and CRM modules be combined into one platform?',
        answer:
          'Yes. We can build a unified platform that connects customer management, sales, finance, operations, procurement, and reporting based on your business workflow.',
      },
      {
        question: 'Do you build ERP CRM solutions for small and mid-sized businesses?',
        answer:
          'Yes. We create practical ERP and CRM systems for growing businesses that need structure, visibility, and automation without the overhead of overly complex enterprise tools.',
      },
    ],
  },
  {
    slug: 'ecommerce-development',
    path: '/services/ecommerce-development',
    shortLabel: 'E-commerce Development',
    navLabel: 'E-commerce',
    title: 'E-commerce Website Development Company in India',
    metaTitle: 'E-commerce Website Development Company in India | Custom Online Store Development',
    metaDescription:
      'RNP Tech Solutions develops e-commerce websites and custom online store platforms with catalog management, payments, admin dashboards, and scalable user experiences.',
    heroTitle: 'E-commerce Website Development for Brands Ready to Sell and Scale Online',
    heroSubtitle:
      'We build custom online stores and e-commerce platforms that combine great shopping experiences, reliable operations, and strong business visibility.',
    intro:
      'RNP Tech Solutions develops e-commerce websites for businesses that want better control over product catalogs, checkout flows, order management, customer experience, and digital growth. Whether you are launching a new brand or modernizing an existing store, we create scalable e-commerce systems designed around performance, usability, and conversions.',
    primaryKeyword: 'ecommerce website development company India',
    secondaryKeywords: [
      'custom ecommerce development company',
      'online store development services',
      'ecommerce website design company',
      'scalable ecommerce platform development',
    ],
    deliverables: [
      'Custom online storefront design and development',
      'Product catalog, category, and order management',
      'Payment gateway and shipping integrations',
      'Admin dashboard and sales reporting',
      'Performance optimization and mobile shopping experience',
    ],
    benefits: [
      'Create a stronger customer buying experience across devices',
      'Manage products, orders, and payments more efficiently',
      'Support growth with scalable architecture and integrations',
      'Improve conversion rates with better UX and site performance',
    ],
    process: [
      'Store strategy and catalog planning',
      'Shopping flow UX and system architecture',
      'Platform development and payment integration',
      'Testing, launch, and post-launch enhancements',
    ],
    industries: ['Retail Brands', 'D2C Businesses', 'Wholesale Catalogs', 'Fashion', 'Consumer Products', 'Niche Online Stores'],
    faqs: [
      {
        question: 'Can you build a custom e-commerce platform instead of using a template?',
        answer:
          'Yes. We can create custom e-commerce experiences with tailored design, business logic, admin controls, and integrations based on your product, order, and customer needs.',
      },
      {
        question: 'Do you support payment gateways and order management workflows?',
        answer:
          'Yes. We integrate payment gateways, order workflows, shipping logic, customer communication, and reporting so your e-commerce operations run smoothly end to end.',
      },
    ],
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<ServicePageSlug, ServicePageData>;

export function getServiceSchema(service: ServicePageData) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.shortLabel,
        provider: {
          '@type': 'Organization',
          name: siteConfig.legalName,
          url: siteUrl,
        },
        areaServed: 'India',
        description: service.metaDescription,
        url: `${siteUrl}${service.path}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.shortLabel,
            item: `${siteUrl}${service.path}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function getServiceMetadata(service: ServicePageData): Metadata {
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: {
      canonical: service.path,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}${service.path}`,
      siteName: siteConfig.legalName,
      type: 'article',
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}
