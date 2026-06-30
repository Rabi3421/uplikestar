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
    shortLabel: 'Business Website Setup',
    navLabel: 'Business Website',
    title: 'Professional Business Website for Local Businesses',
    metaTitle: 'Professional Business Website Setup for Local Businesses | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions creates and sets up professional websites for salons, schools, clinics, pharmacies, restaurants, gyms, and other local businesses with enquiry forms, WhatsApp integration, and mobile-friendly design.',
    heroTitle: 'Get a Professional Business Website Set Up for Your Business',
    heroSubtitle:
      'We create and configure a professional website for your business with your name, services, contact details, WhatsApp button, and enquiry form — so customers can find and contact you easily.',
    intro:
      'A professional website is the first step to building trust with customers online. RNP Tech Solutions creates and sets up business websites tailored to your business category — whether you run a salon, school, clinic, pharmacy, restaurant, gym, retail shop, or any other local business. We handle everything from setup to configuration so your business is online and receiving enquiries right from the start.',
    primaryKeyword: 'professional business website for local business India',
    secondaryKeywords: [
      'salon website setup India',
      'school website development India',
      'clinic website setup India',
      'affordable business website monthly plan',
    ],
    deliverables: [
      'Professional business website with your branding and business details',
      'Mobile-friendly design that works on all devices',
      'Services or product display page',
      'Customer enquiry and contact form',
      'WhatsApp button and contact integration',
      'Gallery section for images or work samples',
      'Google Maps location integration',
      'Basic on-page SEO structure for search visibility',
    ],
    benefits: [
      'Build a professional online presence that earns customer trust',
      'Receive customer enquiries directly through your website',
      'Make it easy for customers to find and contact your business',
      'Display your services, pricing, and business information professionally',
    ],
    process: [
      'We collect your business details, services, images, and contact information',
      'We design and configure your website according to your business category',
      'We integrate your WhatsApp contact, enquiry form, and location details',
      'We test across devices and provide access with guidance and support',
    ],
    industries: ['Salon', 'School', 'Clinic', 'Pharmacy', 'Restaurant', 'Gym', 'Retail Shop', 'Travel Agency', 'Real Estate', 'Local Business'],
    faqs: [
      {
        question: 'What information do you need to set up my business website?',
        answer:
          'We need your business name, contact number, email address, WhatsApp number, business address, list of services, photos or images, and any other details you want displayed. We will guide you through providing this information step by step.',
      },
      {
        question: 'How long does it take to set up my business website?',
        answer:
          'Once we have all the required information and content from you, the website setup typically takes a few business days. We will keep you updated throughout the process.',
      },
    ],
  },
  {
    slug: 'custom-software-development',
    path: '/services/custom-software-development',
    shortLabel: 'Business Management Software',
    navLabel: 'Management Software',
    title: 'Industry-Specific Business Management Software for Local Businesses',
    metaTitle: 'Business Management Software for Local Businesses | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions provides industry-specific business management software for salons, schools, clinics, pharmacies, gyms, and other local businesses with dashboards, enquiry management, and daily operations tools.',
    heroTitle: 'Business Management Software Designed for Your Industry',
    heroSubtitle:
      'We provide industry-specific management software tailored to your business category — giving you the digital tools to manage enquiries, customers, staff, and daily operations easily.',
    intro:
      'Every business category has different operational needs. A salon needs appointment management. A school needs admission and student tracking. A clinic needs patient and appointment management. RNP Tech Solutions provides business management software designed specifically for your industry, so the tools you get are relevant, practical, and simple to use from day one.',
    primaryKeyword: 'business management software for local business India',
    secondaryKeywords: [
      'salon management software India',
      'school management software India',
      'clinic management software India',
      'pharmacy management software India',
    ],
    deliverables: [
      'Industry-specific business management dashboard',
      'Business profile and settings configuration',
      'Enquiry and booking management module',
      'Customer or patient or student record management',
      'Staff and team management',
      'Service or product management section',
      'Reports and basic business insights depending on plan',
    ],
    benefits: [
      'Manage all your business operations from one simple dashboard',
      'Reduce manual record-keeping and paper-based systems',
      'Track customer enquiries, bookings, and history in one place',
      'Improve staff coordination and overall business visibility',
    ],
    process: [
      'We understand your business category and operational requirements',
      'We configure the management software according to your business type',
      'We set up your business profile, services, staff, and access levels',
      'We provide access and basic guidance for you and your team to get started',
    ],
    industries: ['Salon', 'School', 'Clinic', 'Pharmacy', 'Gym', 'Restaurant', 'Retail Shop', 'Real Estate', 'Travel Agency'],
    faqs: [
      {
        question: 'Is this management software specific to my type of business?',
        answer:
          'Yes. The software is configured according to your business category. A salon gets appointment and customer management. A school gets admission and student management. A clinic gets patient and appointment tools. We set it up to match your industry.',
      },
      {
        question: 'Does my staff need technical training to use the software?',
        answer:
          'No. The software is designed to be simple and easy to use. We provide basic guidance during setup, and the dashboards are intuitive enough for non-technical staff to use from day one.',
      },
    ],
  },
  {
    slug: 'inventory-management-systems',
    path: '/services/inventory-management-systems',
    shortLabel: 'Customer & Staff Management',
    navLabel: 'Customer & Staff',
    title: 'Customer and Staff Management System for Local Businesses',
    metaTitle: 'Customer and Staff Management System | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions provides customer and staff management tools for salons, schools, clinics, pharmacies, and other local businesses — helping you maintain organized records, manage schedules, and coordinate your team easily.',
    heroTitle: 'Manage Your Customers and Staff in One Simple System',
    heroSubtitle:
      'Our customer and staff management module gives you organized records for every customer and team member, helping your business operate more smoothly day to day.',
    intro:
      'Managing customers and staff manually leads to missed follow-ups, poor coordination, and operational confusion. RNP Tech Solutions provides a simple customer and staff management system where you can maintain customer records, track service history, manage staff details, and coordinate your team from your business dashboard.',
    primaryKeyword: 'customer and staff management system for local business India',
    secondaryKeywords: [
      'salon customer management India',
      'clinic patient management system',
      'school student management India',
      'staff management software for small business',
    ],
    deliverables: [
      'Customer or patient or student record management',
      'Service history and visit tracking per customer',
      'Staff profile and contact management',
      'Staff schedule management depending on plan',
      'Customer communication and follow-up tracking',
      'Customer profile and interaction history',
    ],
    benefits: [
      'Maintain organized customer records with full service history',
      'Manage staff details, roles, and schedules from one dashboard',
      'Improve customer retention through better follow-up and records',
      'Reduce coordination confusion with a clear team management system',
    ],
    process: [
      'We configure the customer and staff management module for your business type',
      'We set up your staff profiles and customer record structure',
      'We integrate the module with your enquiry and booking system',
      'We provide access to team members based on their assigned role',
    ],
    industries: ['Salon', 'Clinic', 'School', 'Pharmacy', 'Gym', 'Restaurant', 'Retail Shop', 'Travel Agency'],
    faqs: [
      {
        question: 'What customer information can I store in the system?',
        answer:
          'You can store customer name, contact details, service history, visit records, notes, and other details relevant to your business type. For clinics, this includes patient records. For schools, this includes student and parent information.',
      },
      {
        question: 'Can I manage multiple staff members with different schedules?',
        answer:
          'Yes. The staff management module allows you to maintain profiles for multiple staff members, assign roles, and manage basic scheduling depending on your plan — useful for salons with multiple stylists, clinics with multiple doctors, and gyms with multiple trainers.',
      },
    ],
  },
  {
    slug: 'business-automation',
    path: '/services/business-automation',
    shortLabel: 'Enquiry & Booking System',
    navLabel: 'Enquiry System',
    title: 'Enquiry and Booking Management System for Local Businesses',
    metaTitle: 'Enquiry and Booking System for Local Businesses | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions provides enquiry and booking management systems for salons, schools, clinics, pharmacies, and other local businesses — helping you receive, track, and manage customer enquiries from one dashboard.',
    heroTitle: 'Never Miss a Customer Enquiry or Booking Request Again',
    heroSubtitle:
      'Our enquiry and booking management system captures all customer enquiries from your website, delivers them to your dashboard, and helps you track, manage, and respond to every request.',
    intro:
      'Missing customer enquiries is one of the biggest losses for any local business. RNP Tech Solutions provides an integrated enquiry and booking management system that captures all customer enquiries from your website and delivers them to your dashboard for easy tracking and follow-up. Whether it is an appointment request, a service inquiry, or a contact form submission — every enquiry is captured and manageable.',
    primaryKeyword: 'enquiry and booking management system for local business India',
    secondaryKeywords: [
      'appointment booking system for salon India',
      'patient appointment system for clinic India',
      'admission enquiry management for school',
      'customer enquiry management India',
    ],
    deliverables: [
      'Customer enquiry capture from website contact form',
      'WhatsApp enquiry and booking integration',
      'Booking request and appointment management',
      'Enquiry dashboard with status tracking',
      'Enquiry notification and follow-up tools',
      'Customer contact history and enquiry records',
    ],
    benefits: [
      'Capture every customer enquiry from your website automatically',
      'Track and manage all enquiries and bookings from one dashboard',
      'Never miss a customer call or contact request again',
      'Respond to enquiries faster and convert more customers into clients',
    ],
    process: [
      'We integrate an enquiry and booking form into your website',
      'We connect your WhatsApp contact for direct customer messaging',
      'We configure your dashboard to receive and display all enquiries',
      'We set up notification alerts so you are informed when a new enquiry arrives',
    ],
    industries: ['Salon', 'Clinic', 'School', 'Gym', 'Restaurant', 'Travel Agency', 'Real Estate', 'Retail Shop'],
    faqs: [
      {
        question: 'How will I receive customer enquiries from the website?',
        answer:
          'Customer enquiries submitted through your website form are captured directly in your business dashboard. You will also receive notifications so you can follow up quickly. WhatsApp enquiries can also be managed through your contact integration.',
      },
      {
        question: 'Can customers book appointments through the system?',
        answer:
          'Yes. Depending on your plan, customers can submit appointment booking requests with their preferred date and time, and you can confirm or reschedule from your management dashboard.',
      },
    ],
  },
  {
    slug: 'erp-crm-solutions',
    path: '/services/erp-crm-solutions',
    shortLabel: 'Role-Based Dashboards',
    navLabel: 'Dashboards',
    title: 'Role-Based Business Dashboards for Local Business Teams',
    metaTitle: 'Role-Based Business Dashboards for Local Businesses | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions provides role-based dashboards for business owners, staff, receptionists, managers, accountants, customers, and other roles — each with relevant access and tools depending on your business type.',
    heroTitle: 'The Right Dashboard Access for Every Role in Your Business',
    heroSubtitle:
      'We configure role-based dashboards so your business owner, staff, receptionist, manager, accountant, and customers each have access to the information and tools relevant to their role.',
    intro:
      'Not everyone in your business needs to see everything. RNP Tech Solutions provides role-based dashboard access where each person — from the owner to a staff member or receptionist — sees only what is relevant to their role. This keeps your operations organized, secure, and efficient, without overwhelming anyone with information they do not need.',
    primaryKeyword: 'role-based business dashboard for local business India',
    secondaryKeywords: [
      'owner dashboard for local business',
      'staff management dashboard India',
      'multi-user business management system India',
      'business role access control India',
    ],
    deliverables: [
      'Owner dashboard with full business overview and control',
      'Staff or receptionist dashboard for daily operations',
      'Manager dashboard for team and operations oversight depending on plan',
      'Accountant dashboard for billing and financial records depending on plan',
      'Customer or patient or student dashboard depending on business type',
      'Role-specific access control and data visibility settings',
    ],
    benefits: [
      'Keep each team member focused on their specific responsibilities',
      'Improve operational security with controlled access for each role',
      'Reduce confusion by showing only relevant information per role',
      'Enable better team coordination without unnecessary information sharing',
    ],
    process: [
      'We identify the roles and team members in your business',
      'We configure dashboard access for each role according to your plan',
      'We set up user accounts with appropriate permissions for each team member',
      'We provide guidance on how each role uses their dashboard effectively',
    ],
    industries: ['Salon', 'Clinic', 'Hospital', 'School', 'Coaching Center', 'Pharmacy', 'Gym', 'Restaurant', 'Real Estate', 'Travel Agency'],
    faqs: [
      {
        question: 'Which roles can have separate dashboard access?',
        answer:
          'Depending on your business type and selected plan, roles can include: business owner, manager, staff, receptionist, accountant, customer, patient, student, parent, and others. We configure roles that are relevant to your specific business category.',
      },
      {
        question: 'Can I control what my staff can see or edit in the dashboard?',
        answer:
          'Yes. Each role is configured with specific access permissions. A receptionist can see appointment records but may not have access to billing. A manager can see reports but may not have full system settings access. We configure this based on your requirements.',
      },
    ],
  },
  {
    slug: 'ecommerce-development',
    path: '/services/ecommerce-development',
    shortLabel: 'Monthly Support & Maintenance',
    navLabel: 'Monthly Support',
    title: 'Monthly Website and Dashboard Support for Local Businesses',
    metaTitle: 'Monthly Website Support and Maintenance Service | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions provides monthly website support, dashboard maintenance, updates, and technical assistance for local businesses on affordable monthly subscription plans.',
    heroTitle: 'Ongoing Monthly Support So Your Business System Always Runs Smoothly',
    heroSubtitle:
      'We provide monthly maintenance, updates, and technical support for your website and business dashboard — so you never have to worry about technical issues getting in the way of running your business.',
    intro:
      'Setting up a website is only the beginning. To keep your business running well online, you need regular maintenance, updates, and technical support. RNP Tech Solutions provides monthly support for all clients, ensuring your website stays functional, your dashboard is updated, and any technical issues are resolved promptly.',
    primaryKeyword: 'monthly website support and maintenance for local business India',
    secondaryKeywords: [
      'website maintenance service India',
      'business dashboard support India',
      'monthly tech support for small business India',
      'website update and maintenance plan India',
    ],
    deliverables: [
      'Monthly website maintenance and technical health checks',
      'Dashboard updates and feature adjustments as needed',
      'Content updates such as service changes or business information',
      'Technical issue resolution and bug fixes',
      'WhatsApp and email support access',
      'Priority support with faster response times on the Complete Plan',
    ],
    benefits: [
      'Keep your website and dashboard running without technical interruptions',
      'Get help quickly when something needs updating or fixing',
      'Focus on running your business while we handle the technical side',
      'Avoid missed enquiries or customer loss due to technical downtime',
    ],
    process: [
      'Monthly support is included with all active subscription plans',
      'Report any issue through WhatsApp, email, or phone to our team',
      'Our team reviews and resolves issues within agreed response timeframes',
      'Regular maintenance checks are performed to keep the system healthy and secure',
    ],
    industries: ['All Local Businesses', 'Salon', 'School', 'Clinic', 'Pharmacy', 'Restaurant', 'Gym', 'Retail Shop'],
    faqs: [
      {
        question: 'What is included in monthly support?',
        answer:
          'Monthly support includes technical maintenance for your website and dashboard, resolution of any technical issues, minor content updates such as service list changes, and WhatsApp or email support access. Priority support with faster response times is available on the Complete Business Management Plan.',
      },
      {
        question: 'How do I report a problem with my website or dashboard?',
        answer:
          'You can reach us through WhatsApp, email, or phone. Our team will assess and resolve the issue based on the support level included in your plan.',
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
            item: `${siteUrl}/services`,
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
